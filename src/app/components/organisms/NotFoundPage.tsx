import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <h1>404 - Not found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link href="/">Return to home page</Link>
    </div>
  );
}
