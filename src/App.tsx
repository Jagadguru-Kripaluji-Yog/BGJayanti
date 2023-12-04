import { ScrollWrapper } from "components/scroll-wrapper";
import "./App.css";
import { Hero } from "components/hero";

function App() {
  return (
    <main className="h-full w-full">
      <section id="hero" className="h-full w-full">
        <Hero
          transitionDelay={500}
          autoplay={true}
          screens={[
            {
              media: "/bg-7.jpeg",
              caption: <span className="p-10 text-5xl">Jai sia ram!</span>,
              captionStyles: { marginLeft: 50, marginTop: 100 },
            },
            {
              media: "/bg-6.jpeg",
              caption: <span className="p-10 text-5xl">Radhe radhe!</span>,
              captionStyles: { marginLeft: 50, marginTop: 200 },
            },
          ]}
        />
      </section>
      <section id="info">
        <div>Some info</div>
      </section>
    </main>
  );
}

export default App;
