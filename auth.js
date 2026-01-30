const express = require("express");
const router = express.Router();
const User = require("../models/User");

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// REGISTER
router.post("/register", async (req, res) => {
    const { mobile } = req.body;
    const otp = generateOTP();

    let user = await User.findOne({ mobile });

    if (!user) {
        user = new User({ mobile, otp });
    } else {
        user.otp = otp;
    }

    await user.save();

    console.log("OTP (SMS READY):", otp);

    res.json({ message: "OTP sent" });
});

// VERIFY OTP
router.post("/verify", async (req, res) => {
    const { mobile, otp } = req.body;

    const user = await User.findOne({ mobile, otp });
    if (!user) return res.status(400).json({ message: "Invalid OTP" });

    user.verified = true;
    user.otp = "";
    await user.save();

    res.json({ message: "Verified" });
});

// LOGIN
router.post("/login", async (req, res) => {
    const { mobile } = req.body;

    const user = await User.findOne({ mobile, verified: true });
    if (!user) return res.status(400).json({ message: "User not found" });

    res.json({ message: "Login success" });
});

module.exports = router;
