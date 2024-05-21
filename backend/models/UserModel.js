import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import validator from 'validator';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function (email, password) {
  const exist = await this.findOne({ email });

  if (exist) {
    throw Error("Email already exists.!.");
  }
  if(!email || !password){
    throw Error("All fields must be filled...")
  }

  if(!validator.isEmail(email)){
    throw Error("Not a valid email.!.")
  }
  if(!validator.isStrongPassword(password)){
    throw Error("Password is not strong enough.!.")
  }


  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({email,password:hash});

  return user;
};

const user = mongoose.model("UserCollection", userSchema);

export default user;
