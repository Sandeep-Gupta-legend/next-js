"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <p>Failed to load data</p>
      <button onClick={reset}>Retry</button>
    </div>
  );
}
