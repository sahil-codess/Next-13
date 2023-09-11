import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">You hit a brick wall.</h2>
      <p>We could not found the ticket you were looking for.</p>
      <p>
        Go back to <Link href="/tickets">Tickets</Link>
      </p>
    </main>
  );
}
