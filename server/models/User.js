import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 2
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 5
    },
    picturePath: {
        type: String,
        default: '',
    },
    timeMarks: {
        type: Object,
        default: {
            "id": '', "color": "hsl(210, 70%, 50%)",
            data: [
                {
                    "days": 0,
                    "date": new Date(),
                    "condition": false
                }
            ]
        }
    }


}, { timestamps: true })

const User = mongoose.model("User", UserSchema)
export default User