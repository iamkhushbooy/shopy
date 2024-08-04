import mongoose, { Schema } from "mongoose";
const coll=new Schema({
    price:Number,
    name:String,
    style:String,
    material:String,
    available:Number,
    color:String,
    size:[],
    img:String,
})
export const products=mongoose.models.cloths||mongoose.model('cloths',coll)



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/^\d{10}$/, 'Please enter a valid 10-digit phone number']
    },
    age: {
        type: Number,
        required: true,
        min: [0, 'Age must be a positive number']
    },
    verified:{
        type:Boolean,
        default:false

    }
}, { timestamps: true });

export const users = mongoose.models.users || mongoose.model('users', userSchema);
