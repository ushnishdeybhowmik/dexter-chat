import {Schema, model} from 'mongoose';

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required:true
    },
    emailId: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

export const User = model('users', UserSchema);