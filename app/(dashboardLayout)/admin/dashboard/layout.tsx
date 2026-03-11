export default function AdminDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>AdminDashboardLayout</h1>
      {children}
    </>
  );
}
