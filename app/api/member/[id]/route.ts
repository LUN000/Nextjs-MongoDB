import connectMongoDB from '@/libs/mongodb';
import Member from '@/models/member';
import bcrypt from "bcryptjs";
import { NextResponse, NextRequest } from 'next/server';

/**
 * Encrypt new name and update member psswwd. 
 */
export async function PUT(
    request: NextRequest, 
    { params }: { params: { id: string } }
) {
    // 1. 正確從 params 中解構出 id
    const { id } = params;
    const { email, name, messages } = await request.json();
    
    // 2. 處理 salt (若環境變數不存在，預設給 10)
    const saltRounds = process.env.saltFactory ? parseInt(process.env.saltFactory, 10) : 10;
    const salt = await bcrypt.genSalt(saltRounds);
    
    // 3. 修正 bcrypt 呼叫（使用 hash 搭配 await，或者用 hashSync 但去掉 await）
    const hashPsswd = await bcrypt.hash(name, salt);

    await connectMongoDB();
    
    // 4. 更新資料庫
    await Member.findByIdAndUpdate(id, { email, hashPsswd, messages });
    
    return NextResponse.json({ message: "Member Password Updated" }, { status: 200 });
}
