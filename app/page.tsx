import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <Link href="/about">Go to About</Link>
      <br />
      <Link href="/dashboard">Go to Dashboard</Link>
    </div>
  );
}
