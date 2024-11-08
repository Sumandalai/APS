import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { currentUser } from "@/lib/auth";

export async function POST(request) {
  const user = await currentUser();

  if (!user || !user.email) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { points, gameStarted, timeTaken } = await request.json();

  if (!gameStarted) {
    return NextResponse.json({ error: "Missing game start time!" }, { status: 400 });
  }

  try {
    const updatedUser = await db.user.update({
      where: { email: user.email },
      data: {
        points,
        timeTaken,
        gameStarted, 
      },
    });

    return NextResponse.json({
      success: true,
      message: "Game result saved successfully",
      updatedUser,
    }, { status: 200 });
  } catch (error) {
    console.error("Error saving game result:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const user = await currentUser();

    if (!user || !user.email) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const topUsers = await db.user.findMany({
      where: {
        email: { not: user.email }, // Exclude the current user
      },
      orderBy: [
        { points: 'desc' },
        { timeTaken: 'asc' }
      ],
      take: 3, // Limit to the top 3 users
      select: {
        id: true,
        name: true,
        points: true,
        timeTaken: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        topUsers,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching top users:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}