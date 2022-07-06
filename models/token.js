const mongoose = require("mongoose");
const { Schema } = mongoose;
const { v4: uuidv4 } = require("uuid");

const tokenSchema = new Schema({
  _id: { type: String, required: true, default: uuidv4().split("-").join("") },

  emailAddress: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },

  token: {
    type: String,
    required: true,
  },
  
},{timestamps:true});

const Token = mongoose.model("token", tokenSchema);
module.exports = Token;


// tokenSchema.index({expireAfterSeconds: 20});

// const email ={
//     type: String,
//     trim: true,
//     lowercase: true,
//     unique: true,
//     required: 'Email address is required',
//     validate: [validateEmail, 'Please fill a valid email address'],
//     match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
// }

// const mongoose = require('mongoose');
// const { nanoid } = require('nanoid');

// const Schema = mongoose.Schema;

// const OTPSchema = new Schema(
// 	{
// 		_id: { type: String, default: () => nanoid(10) },
// 		tel: { type: String, required: true, trim: true, unique: true },
// 		otp: { type: Number, length: 6, trim: true },
// 		otpTime: { type: Date, trim: true },
// 	},
// 	{
// 		timestamps: true,
// 	},
// );

// OTPSchema.index({ tel: 1 }, { createdAt: -1 });
// const OTP = mongoose.model('OTP', OTPSchema)mongoose
// module.exports = OTP;

// const express = require('express');

// const OTPModel = require('../models/otp.model');

// const { customAlphabet } = require('nanoid');
// const alphabet = '0123456789';
// const nanoid = customAlphabet(alphabet, 6);

// exports.generateOTP = async (tel) => {
// 	try {
// 		const code = nanoid();
// 		const result = await OTPModel.findOne({ tel }).exec();
// 		if (result !== null) {
// 			result.otp = parseInt(code);
// 			result.otpTime = Date.now();
// 			const data = await result.save();
// 			return { code: data.otp, expires:
// Generate OTPconst express = require('express');

// const OTPModel = require('../models/otp.model');

// const { customAlphabet } = require('nanoid');
// const alphabet = '0123456789';
// const nanoid = customAlphabet(alphabet, 6);

// exports.generateOTP = async (tel) => {
// 	try {
// 		const code = nanoid();
// 		const result = await OTPModel.findOne({ tel }).exec();
// 		if (result !== null) {
// 			result.otp = parseInt(code);
// 			result.otpTime = Date.now();
// 			const data = await result.save();
// 			return { code: data.
// ggg-ztvu-usb
