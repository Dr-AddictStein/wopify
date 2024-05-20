import userModel from '../models/UserModel.js'

export const loginUser = async (req,res)=>{
    res.json({mssg:'login user'})
}


export const singupUser = async (req,res)=>{
    const {email,password}=req.body;
    try {
        const user = await userModel.signup(email,password);

        res.status(200).json({email,user});
    } catch (error) {
        res.status(400).json({error:error.message});
    }
    res.json({mssg:'singup user'})
}