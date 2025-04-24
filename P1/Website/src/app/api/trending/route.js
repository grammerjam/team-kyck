import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
    try {
        const filePath = path.join(process.cwd(), 'public', 'assets', 'data.json');
        const contents = fs.readFileSync(filePath, 'utf-8')
        const data = JSON.parse(contents);

        const trending = data.filter(item => item.isTrending);

        return NextResponse.json(trending);
    }
    catch (error) {
        console.error('Error reading data.json file: ', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}