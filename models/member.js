import mongoose, { Schema } from "mongoose";

const memberSchema = new Schema (
    {
        email: String,
        psswd: String,
        verify: Boolean,
    },{
        timestamps: true,
    }
);

const Member = mongoose.models.Member || mongoose.model("Member", memberSchema);

export default Member;