import AboutMe from "~/routes/_landing._index/about-me";
import Typewriter from "~/routes/_landing._index/typewriter";

export default function Index() {
  return (
    <>
      <Typewriter
        className="container mx-auto px-4 py-8 space-y-4 text-center text-2xl lg:text-4xl "
        text="Hello! My name is Camilla"
      />
      <main className="container mx-auto px-4 lg:pt-8 space-y-12 animate-fadeIn">
        <AboutMe />
      </main>
    </>
  );
}
