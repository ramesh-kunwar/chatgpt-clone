import Header from "@/components/header/header";
import SidePanel from "@/components/sidepanel/sidepanel";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex ">
      <div>
        <SidePanel />
      </div>
      <div className="flex-1 flex flex-col h-[100vh]">
        <div>
          <Header />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
