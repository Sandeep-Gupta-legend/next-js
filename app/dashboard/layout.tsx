export default function DashboardLayout({ children }) {
  return (
    <section>
      <h1>Dashboard Header</h1>
      <main>{children}</main>
    </section>
  );
}
