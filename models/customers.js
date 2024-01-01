
import mongoose, { mongo } from "mongoose";
const { ObjectId } = mongoose.Schema
const customersSchema = new mongoose.Schema(
    {
        Firstname: {
            type: String,
            required: true
        },
        NickName: {
            type: String,
            required: true
        },
        Address: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        Number: {
            type: String,
            required: true
        },
        Email: {
            type: String,
            required: true
        },
        Password: {
            type: String,
            required: true
        },
        user: {
            type: ObjectId,
            ref: "user"
        }

    }
)

const Customers = mongoose.model("customers", customersSchema)
export { Customers }