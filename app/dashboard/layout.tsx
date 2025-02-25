import Nav from "../ui/dashboard/nav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <div className="mt-10 flex-grow px-4 md:px-16 lg:px-32">
        {children}
      </div>
    </div>
  )
}
