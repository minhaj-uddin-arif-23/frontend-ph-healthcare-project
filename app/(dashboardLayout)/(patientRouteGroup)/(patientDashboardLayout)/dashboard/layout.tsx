export default function PatientCommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>PatientCommonLayout</h1>
      {children}
    </>
  );
}
