import AboutMe from "~/routes/_landing._index/about-me";
import Typewriter from "~/routes/_landing._index/typewriter";

export default function Index() {
  return (
    <>
      <div className="container mx-auto px-4 py-8 space-y-4 text-center text-5xl">
        <Typewriter text="Hello! My name is Camilla" />
      </div>
      <main className="container mx-auto px-4 py-8 space-y-12 animate-fadeIn">
        <AboutMe />
      </main>
    </>
  );
}
