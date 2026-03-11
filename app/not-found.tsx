import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold">404</h2>
      <p className="mt-2">Page not found</p>
      <Link className="text-blue-500 mt-4" href="/">
        Return Home
      </Link>
    </div>
  );
}