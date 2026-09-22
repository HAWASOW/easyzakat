import Header from "../../layouts/PublicLayout/Header";
import BottomNav from "../../layouts/PublicLayout/BottomNav";
import LandingHero from "../../components/Public/Landing/LandingHero";
// import ActionCards from "../../components/Public/ActionCards";
// import EmergencySection from "../../components/Public/EmergencySection";
import Statistics from "../../components/Public/Landing/Statistics";
import HowItWorks from "../../components/Public/Landing/HowItWorks";



function Landing() {
  return (
    <div className="min-h-screen bg-[#f8f9fc]">

      <Header />

      <main className="mx-auto max-w-7xl px-4 pb-28 pt-6 sm:px-6 lg:px-10 lg:pb-12 lg:pt-12">

        <LandingHero />

        <Statistics />

        <HowItWorks />

      </main>

      <BottomNav />

    </div>
  );
}

export default Landing;
