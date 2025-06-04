// app/api/download/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.redirect('https://6pomi48bcu3cj2ap.public.blob.vercel-storage.com/Binaries/get_flag-BbbHTrULrxaEbAix8FAy0ZDOVRlpmh', 302);
}