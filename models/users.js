import mongoose from "mongoose";
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            
            maxlength: 32,
            trim: true
        },
        email: {
            type: String,
           
            
            trim: true,
        },
        contact: {
            type: Number,
        },
        password: {
            type: String,
            
        }
    }
)

const generateJwtToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET_KEY)
}

const User = mongoose.model("user", userSchema);
export { User, generateJwtToken }