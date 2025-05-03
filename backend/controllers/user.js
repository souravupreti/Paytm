const User = require("../schema/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
    try {
        const { email, password, firstName, lastName } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists with this email" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            email,
            password: hashedPassword,
            firstName,
            lastName,
        });

        res.status(201).json({
            message: "User registered successfully",
            user: {
                _id: newUser._id,
                email: newUser.email,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
            }
        });
    } catch (err) {
        res.status(500).json({ message: "Registration failed", error: err.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: "User not found with this email" });
        }

        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Password is incorrect" });
        }

        const token = jwt.sign({ _id: existingUser._id }, process.env.JWT_KEY, {
            expiresIn: "1d",
        });

        res.cookie("auth_token", token);

        res.status(200).json({
            message: "Login successful",
            user: {
                _id: existingUser._id,
                email: existingUser.email,
                firstName: existingUser.firstName,
                lastName: existingUser.lastName,
            },
            token,
        });
    } catch (err) {
        res.status(500).json({ message: "Login failed", error: err.message });
    }
};
const UserDetail=async(req,res)=>{
    const u= req.user;
    const user=await User.findOne({_id:u})
    
    user.password=""
    res.status(200).json({
        user:user
    });
}

module.exports = { register, login,UserDetail };
