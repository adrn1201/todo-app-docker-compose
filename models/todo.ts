import mongoose from "mongoose";
import { Schema } from "mongoose";

const todoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model("Todo", todoSchema);