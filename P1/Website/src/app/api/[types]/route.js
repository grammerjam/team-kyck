import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

/**
 * @param {import("next").NextApiRequest} req
 */
export async function GET(req) {
    try {
        const paramOptions = new Set(['movie', 'tv', 'bookmarked']);
        const typeFromUrl = req.url.split("/").pop();
        if (!paramOptions.has(typeFromUrl)) {
            throw new Error('Invalid type');
        }
        const typeOptions = typeFromUrl;

        const filePath = path.join(process.cwd(), 'public', 'assets', 'data.json');
        const contents = fs.readFileSync(filePath, 'utf-8')
        const data = JSON.parse(contents);

        // Filter the data based on the type
        let filteredData;
        if (typeOptions === 'movie') {
            filteredData = data.filter(item => item.category === 'Movie');
        } else if (typeOptions === 'tv') {
            filteredData = data.filter(item => item.category === 'TV Series');
        } else if (typeOptions === 'bookmarked') {
            filteredData = data.filter(item => item.isBookmarked);
        }
        // Return the filtered data
        return NextResponse.json(filteredData, { status: 200 });
    }
    catch (error) {
        console.error('Error reading data.json file: ', error);
        return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}