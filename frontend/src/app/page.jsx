import Image from "next/image";
import ThemeToggle from "./(components)/Navbar/ThemeToggle/ThemeToggle";
import LcdSection from "./(components)/LcdSection/LcdSection";
import VofMonth from "./(components)/VofMonth/VofMonth";
import FofMonth from "./(components)/FofMonth/FofMonth";
import LatestVid from "./(components)/LatestVid/LatestVid";
import LatestArtc from "./(components)/LatestArtc/LatestArtc";
import Events from "./(components)/Events/Events";
import Sharakat from "./(components)/Sharakat/Sharakat";
import Footer from "./(components)/Footer/Footer";
import Navbar from "./(components)/Navbar/Navbar";

export const metadata = {
    title: "الصفحة الرئيسية - دليل الشباب",
    description: "من خلال الصفحة الرئيسية لدليل الشباب يمكنك الاطلاع على آخر الأحداث التي قام بها الفريق، متطوعي الشهر، آخر أخبار وآخر مستجدات الفريق التعليمية"
}

export default function Home() {
  return (
 <>
    <Navbar />
     <div className="dark:bg-black ">
        <LcdSection />
        <hr className="h-[2px] bg-greenPrime dark:bg-white" />
        <VofMonth />
        <FofMonth />
        <hr className="h-[2px] bg-greenPrime dark:bg-white" />
        <LatestVid />
        <hr className="h-[2px] bg-greenPrime dark:bg-white" />
        <LatestArtc />
        <hr className="h-[2px] bg-greenPrime dark:bg-white" />
        <Events />
        <hr className="h-[2px] bg-greenPrime dark:bg-white" />
        <Sharakat />
        <Footer />
    </div>
 </>
  );
}
