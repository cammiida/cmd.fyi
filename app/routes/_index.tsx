import AboutMe from "~/components/AboutMe";
import Header from "~/components/Header";
import Portfolio from "~/components/Portfolio";
import TodayILearned from "~/components/TodayILearned";
import Typewriter from "~/components/Typewriter";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 text-white">
      <Header />
      <div className="container mx-auto px-4 py-8 space-y-4 text-center text-5xl">
        <Typewriter text="Hello! My name is Camilla" />
      </div>
      <main className="container mx-auto px-4 py-8 space-y-12 animate-fadeIn">
        <TodayILearned />
        <AboutMe />
        <Portfolio />
      </main>
    </div>
  );
}
