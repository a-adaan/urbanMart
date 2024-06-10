import { auth } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const session = await auth();
  if (session) {
    redirect(`/account/${session.user.id}`);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <div className="text-2xl font-semibold mb-4">Unauthorized Access</div>
      <p className="text-gray-600 mb-6">
        You need to be logged in to access this page.
      </p>
      <div className="space-x-4">
        <Link href="/login">
          <span className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Log In
          </span>
        </Link>
        <Link href="/register">
          <span className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Register
          </span>
        </Link>
      </div>
    </div>
  );
}
