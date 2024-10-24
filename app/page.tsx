import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SearchWorker from "./components/SearchWorker";

export default function Home() {
  return (
    <>
      <main className="h-screen">
        <div className="flex flex-col h-full w-full">
          <Navbar />
          <Hero />
        </div>
      </main>
      <SearchWorker />
      <About />
      <Footer />
    </>
  );
}
