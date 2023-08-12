import connectMongoDB from '@/libs/mongodb';
import Member from '@/models/member';
import { NextResponse } from 'next/server';

export async function POST(request) {
    const { email, psswd, verify } = await request.json();
    await connectMongoDB();
    await Member.create({ email, psswd, verify });
    return NextResponse.json({ message: 'Member Created' }, { status: 201 });
}

// export async function GET(request) {
//     const { email, psswd, verify } = await request.json();
//     await connectMongoDB();
//     await Member.create({ email, psswd, verify });
//     return NextResponse.json({ message: 'Member Created' }, { status: 201 });
// }

// export async function DELETE(request) {
//     const { email, psswd, verify } = await request.json();
//     await connectMongoDB();
//     await Member.deleteOne({ email, psswd, verify });
//     return NextResponse.json({ message: 'Member Deleted' }, { status: 201 });
// }