// @ts-check
const Model = require("../models/userSchema");
const Token = require("../models/token");
const validator = require("validator");
const bcrypt = require("bcrypt");
const { createTransporter } = require("../helpers/email");

const errorDey = (err) => {
  if (err) {
    console.log(`error: ${err}`);
  }
};


// emailOptions  - who sends what to whom
const sendEmail = async (emailOptions) => {
  let emailTransporter = await createTransporter();
  await emailTransporter.sendMail(emailOptions);
};

module.exports.forgetPassword_post = async (req, res) => {
  try {
    let { emailAddress } = await req.body;

    if (validator.isEmail(emailAddress)) {
      const user = await Model.findOne({ emailAddress });

      if (user) {
        const token = (Math.floor(Math.random() * 90000) + 10000).toString();

        const checkTokenEmail = await Token.findOne({ emailAddress }).exec();

        if (checkTokenEmail) {
          await Token.updateOne({ emailAddress }, { token });

          // sendEmail({
          //   subject: `Token verification for password reset`,
          //   text: `Your token numeber is ${token}`,
          //   to: process.env.SECOND_EMAIL,
          //   from: process.env.EMAIL,
          // });

          return res.json({
            successful: true,
            message: `successfully sent the token`,
          })
        } else {
          const newToken = await new Token({ emailAddress, token }).save();

          // sendEmail({
          //   subject: `Token verification for password reset`,
          //   text: `Your token numeber is ${token}`,
          //   to: process.env.SECOND_EMAIL,
          //   from: process.env.EMAIL,
          // });

          return res.json({
            successful: true,
            message: `successfully sent the email`,
          });
        }
      } else {
        return res.json({
          //ment 🤣🤣
          successful: true,
          message: `successfully sent the email`,
        });
      }
    }
  } catch (err) {
    return errorDey(err);
  }
};

module.exports.verifyToken_post = async (req, res) => {
  try {
    const { OTP } = await req.body;

    const dbOTPRowData = await Token.findOne({ token: OTP });

    if (dbOTPRowData !== null) {
      const created = dbOTPRowData["createdAt"].getTime() / 1000 + 3600;
      const next = new Date().getTime() / 1000;
      // const created = process.env.CREATED
      // const next = process.env.NEXT

      if (created >= next) {
        const retrievedEmail = dbOTPRowData.emailAddress;
        const user = await Model.findOne({ emailAddress: retrievedEmail });
        if (user) {
          res.json({
            successful: true,
            message: `successfully verified the token`,
            email: user._id,
          });

          return dbOTPRowData.delete();
        } else {
          return res.json({
            successful: false,
            message: `not found`,
          });
        }
      } else {
        return res.json({
          successful: true,
          message: `Invalid token or your token has expired`,
        });
      }
    } else {
      return res.json({
        successful: false,
        message: `not found`,
      });
    }
  } catch (err) {
    errorDey(err);
  }
};

module.exports.resetPassword_post = async (req, res) => {
  try {
    const paramsId = await req.params["id"];
    const verifiedParamsId = await Model.findById({ _id: paramsId }).exec();
    if (verifiedParamsId) {
      const { pwd, confirmPwd } = await req.body;
      const comparePwd = await bcrypt.compareSync(
        pwd,
        verifiedParamsId.password
      );
      if (!comparePwd) {
        if (validator.isStrongPassword(pwd)) {
          if (pwd === confirmPwd) {
            const salt = await bcrypt.genSalt(10);
            const hashPwd = await bcrypt.hash(pwd, salt); // hash the password
            await Model.updateOne({ _id: paramsId }, { password: hashPwd });
            return res.json({
              successful: true,
              message: `successfully reset the password`,
            });
          } else {
            res.json({
              successful: false,
              message: `password and confirm password should be the same`,
            });
          }
        } else {
          return res.json({
            successful: false,
            message: `please insert a more secure password`,
          });
        }
      } else {
        return res.json({
          successful: false,
          message: `kindly use a different password`,
        });
      }
    } else {
      res.json({
        succesful: false,
        message: `not found`
      })
    }
  } catch (err) {
    errorDey(err);
  }
};
