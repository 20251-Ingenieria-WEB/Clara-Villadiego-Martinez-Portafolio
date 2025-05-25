import SidebarLeft from "@/components/LeftMenu/SidebarLeft";
import Education from "@/components/MainContent/Education";
import Footer from "@/components/MainContent/Footer";
import MainMenu from "@/components/MainContent/MainMenu";
import MyKnowledge from "@/components/MainContent/MyKnowledge";
import Portfolio from "@/components/MainContent/Portfolio";
import SidebarRight from "@/components/RightMenu/SidebarRight";

export default function Home() {
  return (
    <div className="flex">
      <SidebarLeft />
      <main className="flex-1 bg-[#f7f9fd] p-6">
        <MainMenu />
        <MyKnowledge />
        <Education />
        <Portfolio />
        <Footer />
      </main>
      <SidebarRight />
    </div>
  );
}
