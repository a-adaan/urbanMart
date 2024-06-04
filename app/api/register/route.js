import { connectToDataBase } from "@/db/dbconnection";
import { createUser } from "@/db/query";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, password, number } = await request.json();

  await connectToDataBase();

  const hashedPass = await bcrypt.hash(password, 5);

  const newUser = {
    fullName: name,
    email,
    password: hashedPass,
    number,
    country: "none",
    city: "none",
    address: "none",
  };

  const response = await createUser(newUser);
  if (response) {
    return new NextResponse("registration successful", {
      status: 201,
    });
  } else {
    return new NextResponse("registration failed", {
      status: 500,
    });
  }
}
