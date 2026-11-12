import connectMongoDB from '@/libs/mongodb';
import Member from '@/models/member';
import bcrypt from "bcryptjs";
import { NextResponse, NextRequest } from 'next/server';

/**
 * Encrypt new name and update member psswwd. 
 */
export async function PUT(
    request: NextRequest, 
    { params }: { params: Promise<{ id: string }> } // 1. 改為 Promise 型別
) {
    // 2. 必須使用 await 取得 params 裡的內容
    const { id } = await params;
    const { email, name, messages } = await request.json();
    
    // 3. 處理 salt
    const saltRounds = process.env.saltFactory ? parseInt(process.env.saltFactory, 10) : 10;
    const salt = await bcrypt.genSalt(saltRounds);
    
    // 4. 進行密碼雜湊
    const hashPsswd = await bcrypt.hash(name, salt);

    await connectMongoDB();
    
    // 5. 更新資料庫
    await Member.findByIdAndUpdate(id, { email, hashPsswd, messages });
    
    return NextResponse.json({ message: "Member Password Updated" }, { status: 200 });
}
