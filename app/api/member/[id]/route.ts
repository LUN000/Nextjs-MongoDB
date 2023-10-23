import connectMongoDB from '@/libs/mongodb';
import Member from '@/models/member';
import bcrypt from "bcryptjs";
import { NextResponse, NextRequest } from 'next/server';


/**
 * Encrypt new name and update member psswwd. 
 */
export async function PUT(request: NextRequest, params: string) {
    const { id }: any = params;
    const { email, name, messages } = await request.json();
    
    // hash name
    const saltFactory: string = process.env.saltFactory as string;
    const salt = await bcrypt.genSalt(+saltFactory);
    const hashPsswd = await bcrypt.hashSync( name, salt);

    await connectMongoDB();
    await Member.findByIdAndUpdate(id, {email, hashPsswd, messages});
    return NextResponse.json({ message: "Member Password Updated" }, { status: 200 });
}