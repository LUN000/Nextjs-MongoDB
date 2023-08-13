import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";

// Schema
const memberSchema = new Schema (
    {
        email: { type: String, required: true, unique: true},
        psswd: { type: String, required: true},
        verify: { type: Boolean},
    },{
        timestamps: true,
    }
);

// hash the password before(hence pre) saving
memberSchema.pre('save', async function (next) {
    var member = this;

    // only hash the password if it has been modified (or is new)
    if (!member.isModified('psswd')) {
        return next();
    }

    try {
        // salt is the random data that is used as an additional input to a one-way function that hashes data
        const saltFactory: string = process.env.saltFactory as string
        const salt = await bcrypt.genSalt(+saltFactory); // saltWorkFactor is a string in .env file, +saltWorkFactor convert it to numbercl
        const hash = await bcrypt.hashSync(member.psswd, salt);
        member.psswd = hash;
        return next();
    } catch (error: any) {
        return next(error);
    }
});

// Psswd validation method
memberSchema.methods.comparePassword = async function (
    candidatePassword: string
): Promise<boolean> {
    const member = this;
    try {
        return bcrypt.compare(candidatePassword, member.psswd);
    } catch (error) {
        return false;
    }
};

const Member = mongoose.models.Member ||  mongoose.model("Member", memberSchema);

export default Member;