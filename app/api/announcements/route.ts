import {NextResponse} from "next/server";import {publishedAnnouncements} from "@/lib/data";export async function GET(){return NextResponse.json(await publishedAnnouncements())}
