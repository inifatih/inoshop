import Link from "next/link";

export default function DashboardNotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl font-bold mb-4">404 — Page Not Found</h1>
      <p className="text-lg text-muted-foreground mb-6">
        The dashboard page you&apos;re trying to access doesn&apos;t exist or you don&apos;t have permission.
      </p>

      <Link
        href="/"
        className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
      >
        Go back home
      </Link>
    </div>
  );
}
