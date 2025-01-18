import CateNav from "@/components/cate-nav";
import Navbar from "@/components/navbar";

export default async function DashboardLayout({
  params,
  children
}: {
  params: any
  children: React.ReactNode
}) {

  return (
    <>
    <Navbar />
    <CateNav params={params}/>
    {children}
    </>
  );
}
