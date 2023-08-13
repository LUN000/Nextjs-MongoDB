import connectMongoDB from '@/libs/mongodb';
import Member from '@/models/member';
import ObjectId from 'mongoose'
import { NextResponse, NextRequest } from 'next/server';

export async function PUT(request: NextRequest, { params }) {
    const { id } = params;
    const { email, psswd, verify } = await request.json();
    await connectMongoDB();
    await Member.findByIdAndUpdate(id, {email, psswd, verify})
    return NextResponse.json({ message: "Member Info Updated" }, { status: 200 })
}