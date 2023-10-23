import connectMongoDB from '@/libs/mongodb';
import Member from '@/models/member';
import { NextResponse, NextRequest } from 'next/server';

/**
 * 1. POST to create member data.
 * 2. email can't duplicated in database.
 * 3. email, pssd are needed.
 */
export async function POST(request: NextRequest) {
    try {
        const { email, name, messages } = await request.json();
        await connectMongoDB();
        await Member.create({ email, name, messages });
        return NextResponse.json({ message: 'Member Created' }, { status: 201 });
    } catch ( err: any ) {
        if( err.code === 11000 ) {
            return NextResponse.json({ error: 'Duplicate email', message: 'Email address been used' }, { status: 400 });
        } else {
            return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
        }
    }
}


/**
 * 1. use id to query memberdata.
 * 2. empty id to query all.
 */
export async function GET(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    let members;
    await connectMongoDB();
    
    if( id != "" ){
        members = await Member.findById(id);
    } else {
        members = await Member.find({});
    };

    if( members === null ){
        return NextResponse.json({ message: 'No Match id!' }, { status: 200 });
    } else {
        return NextResponse.json({ members }, { status: 200 });
    };
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    const del = await Member.findByIdAndDelete(id);

    if(del === null){
        return NextResponse.json({ message: 'No Match id!' }, { status: 200 });
    } else {
        return NextResponse.json({ message: 'Member Deleted' }, { status: 200 });
    };
}