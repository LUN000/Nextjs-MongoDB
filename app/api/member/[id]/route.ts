import connectMongoDB from '@/libs/mongodb';
import Member from '@/models/member';
import bcrypt from "bcryptjs";
import { NextResponse, NextRequest } from 'next/server';

export async function PUT(request: NextRequest, { params }) {
    const { id }= params;
    const { email, psswd, verify } = await request.json();
    
    // hash psswd
    const saltFactory: string = process.env.saltFactory as string;
    const salt = await bcrypt.genSalt(+saltFactory);
    const hashPsswd = await bcrypt.hashSync( psswd, salt);

    await connectMongoDB();
    await Member.findByIdAndUpdate(id, {email, hashPsswd, verify});
    return NextResponse.json({ message: "Member Password Updated" }, { status: 200 });
}