import mongoose, { Schema } from "mongoose";

const memberSchema = new Schema (
    {
        email: { type: String, required: true, unique: true},
        psswd: { type: String, required: true},
        verify: { type: Boolean},
    },{
        timestamps: true,
    }
);

const Member = mongoose.models.Member || mongoose.model("Member", memberSchema);

export default Member;