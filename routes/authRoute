const { Router } = require(`express`);
const resetPwdController = require("../controllers/resetPasswordController");
const router = Router();


// Your routes here

// FORGET PASSWORD
router.post("/forget-password",resetPwdController.forgetPassword_post);

  router.post("/verify-token",resetPwdController.verifyToken_post)  // VERIFY OTP
//   RESET PASSWORD
router
  .route("/:id/reset-password")
  .post(resetPwdController.resetPassword_post);


  // router.post("/login", resetPwdController.login_post);

module.exports = router;
