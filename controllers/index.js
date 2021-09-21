const User = require("../models/user");
const Error = require('../lib/error');
const { validationResult, body } = require("express-validator");
const { passwordHash, passwordCompare } = require('../lib/bycrypt');
const { jwtSign } = require('../lib/ath');

const Register = async(req, res) => {
    const { fullname, email, password, role } = req.body;
    try {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            throw Error("Error request, check input again.", result, 401)
        }
        if (fullname && email && password && role) {
            let userExist = await User.findOne({ email: email })
            if (userExist) {
                throw Error(`Email ${email} already exist, try another one.`, 400)
            }
            const hashedPassword = await passwordHash(password)
            const user = new User({
                fullname: fullname,
                email: email,
                password: hashedPassword,
                role,
            })
            await user.save();

            let payload = {
                user_id: user._id,
                fullname: user.fullname,
                email: user.email,
                role: user.role,
            }
            const token = jwtSign(payload)
            return res.status(200).json({
                message: 'User account created successfully',
                data: payload,
                token,
            })
        } else {
            throw Error('Invalid parameters provided', 'MISSING ARGUMENTS', 419)
        }
    } catch (error) {
        console.log(error)
        return res.status(error.code).json({
            message: error.message,
            code: error.code,
        })
    }
}

const Login = async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (user) {
            const doMatch = await passwordCompare(password, user.password);
            console.log(user)
            if (doMatch) {
                let payload = {
                    user_id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                    role: user.role,
                };
                const token = jwtSign(payload);
                return res.status(200).json({
                    message: 'User logged in successfully',
                    data: payload,
                    token,
                });
            } else {
                throw Error('Invalid email or password',
                    410);
            }
        } else {
            throw Error('Invalid email or password', 410);
        }
    } catch (error) {
        console.log(error)
        return res.status(error.code).json({
            message: error.message,
            code: error.code,

        });
    };
}

module.exports = { Register, Login }