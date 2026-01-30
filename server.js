const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let otps = {};
const USERS_FILE = "./users.json";

// SEND OTP
app.post("/send-otp", (req, res) => {
    const { mobile } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000);
    otps[mobile] = otp;

    console.log(`OTP for ${mobile}: ${otp}`); // replace with SMS later
    res.json({ message: "OTP sent successfully" });
});

// REGISTER
app.post("/register", (req, res) => {
    const { name, mobile, otp } = req.body;

    if (otps[mobile] != otp)
        return res.json({ success: false, message: "Invalid OTP" });

    const users = JSON.parse(fs.readFileSync(USERS_FILE));
    users.push({ name, mobile });
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

    delete otps[mobile];
    res.json({ success: true, message: "Registration successful" });
});

// LOGIN
app.post("/login", (req, res) => {
    const { mobile, otp } = req.body;

    if (otps[mobile] != otp)
        return res.json({ success: false, message: "valid OTP" });

    delete otps[mobile];
    res.json({ success: true, message: "Login successful" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
