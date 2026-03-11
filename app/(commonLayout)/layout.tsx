export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>Common Layout</h1>
      {children}
    </>
  );
}
