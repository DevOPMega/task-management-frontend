export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gradient-to-t from-violet-400
     to-violet-200 flex justify-center items-center">
        {children}
    </div>
  );
}