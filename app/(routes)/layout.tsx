import Navbar from "@/components/navbar";

export default async function DashboardLayout({
  children
}: {
  params: Promise<any>
  children: React.ReactNode
}) {

  return (
    <>
    <Navbar />
    {children}
    </>
  );
}
