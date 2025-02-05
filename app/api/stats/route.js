import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Url from '@/models/Url';

export async function GET() {
  try {
    await connectDB();
    
    const urls = await Url.find({})
      .sort({ clicks: -1, createdAt: -1 })
      .limit(10);
    
    return NextResponse.json(urls);
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
