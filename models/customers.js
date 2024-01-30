
import mongoose, { mongo } from "mongoose";
const { ObjectId } = mongoose.Schema
const customersSchema = new mongoose.Schema(
    {
        Firstname: {
            type: String,
           
        },
        NickName: {
            type: String,
           
        },
        // Address: {
        //     type: String,
        //    
        // },
        // location: {
        //     type: String,
        //    
        // },
        Number: {
            type: Number,
           
        },
        Email: {
            type: String,
           
        },
        Age: {
            type: String,
           
        },
        Gender: {
            type: String,
           
        },
        Address: {
            type: String,
           
        },
        City: {
            type: String,
           
        },
        State: {
            type: String,
           
        },
        Pincode: {
            type: String,
           
        },
        
        // Password: {
        //     type: String,
        //    
        // },
        user: {
            type: ObjectId,
            ref: "user"
        }

    }
)

const Customers = mongoose.model("customers", customersSchema)
export { Customers }