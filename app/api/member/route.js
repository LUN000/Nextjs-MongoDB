import connectMongoDB from '@/libs/mongodb';
import Member from '@/models/member';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request) {
    const { email, psswd, verify } = await request.json();
    await connectMongoDB();
    await Member.create({ email, psswd, verify });
    return NextResponse.json({ message: 'Member Created' }, { status: 201 });
}

export async function GET(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    if( id != "" ){
        var members = await Member.findById(id);
    } else {
        var members = await Member.find({});
    };

    if( members === null ){
        return NextResponse.json({ message: 'No Match id!' }, { status: 200 });
    } else {
        return NextResponse.json({ members }, { status: 200 });
    };
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    const del = await Member.findByIdAndDelete(id);
    if(del === null){
        return NextResponse.json({ message: 'No Match id!' }, { status: 200 });
    } else {
        return NextResponse.json({ message: 'Member Deleted' }, { status: 200 });
    };
}