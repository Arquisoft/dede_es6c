import { Request, Response } from 'express';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
import User from '../schemas/userSchema';


    module.exports = {

    
    register: async (req: Request, res: Response) => {
        
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);

        const { email, name, lastName, PODUrl } = req.body;
        const user = new User({email, name, lastName, password, PODUrl});

        try {
            await user.save();
            res.status(201).send(user);
        } catch (error) {
            res.status(400).send(error);
        }
    
    },


    login: async(req: Request, res: Response) => {
        const { email, password } = req.body;
        const user = await User.findOne({email});
        if(!user) {
            return res.status(404).send('User not found');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(401).send('Invalid password');
        }

        const token = jwt.sign({
            name: user.email,
            id: user._id
        }, process.env.TOKEN_SECRET)

        res.header('auth-token', token).json({
            error: null,
            data: {token}
        }).send();
    }
}

export default module.exports;