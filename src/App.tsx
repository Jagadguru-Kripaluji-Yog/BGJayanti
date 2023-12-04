import { ScrollWrapper } from "components/scroll-wrapper";
import "./App.css";
import { Hero } from "components/hero";

function App() {
  return (
    <main className="h-full w-full bg-background flex flex-col">
      <section id="hero" className="h-full w-full">
        <Hero
          transitionDelay={500}
          autoplay={true}
          screens={[
            {
              media: "/bg-7.jpeg",
              caption: (
                <div className="flex flex-col gap-y-5">
                  <h1 className="p-0 md:text-5xl text-2xl">
                    Happy Bhagvad Gita Jayanti!
                  </h1>
                </div>
              ),
              captionStyles: { marginTop: 50 },
            },
            {
              media: "/bg-6.jpeg",
              caption: (
                <h1 className="p-0 md:text-5xl text-2xl">
                  Unlock ancient secrets to elevate your conciousness...
                </h1>
              ),
              captionStyles: { marginTop: 50 },
            },
          ]}
        />
      </section>
      <section
        id="description"
        className="w-full md:p-10 py-3 px-5 bg-background flex flex-col gap-y-5"
      >
        <h2 className="md:text-3xl text-2xl font-bold text-center">
          JKYog wishes you a very happy Bhagavad Gita Jayanti!
        </h2>
        <div className="flex flex-col items-center">
          <span className="text-2xl">Fri Dec 15th - Sun Dec 17th</span>
          <span className="text-2xl">Fri Dec 22nd - Sun Dec 24th</span>
        </div>
        <h3 className=" text-left text-2xl">
          This 5000 year old divine scripture has the power to destroy the
          ignorance that has enveloped the soul since endless lifetimes. In
          honor of this exquisite book of wisdom, JKYog and Radha Krishna Temple
          of Dallas (Allen) host the Bhagavad Gita Jayanti Summit every year
        </h3>
      </section>
      <section
        id="highlights"
        className="w-full md:p-10 p-3 flex flex-wrap justify-evenly gap-10 bg-background"
      >
        <div className="bg-cardBackground p-3 h-36 w-full md:w-[500px] rounded-2xl shadow-lg flex flex-wrap justify-center items-center text-textCategory font-bold text-center text-2xl">
          Cultural Program on Bhagvad Gita Production
        </div>
        <div className="bg-cardBackground p-3 h-36 w-full md:w-[500px] rounded-2xl shadow-lg flex flex-wrap justify-center items-center text-textCategory font-bold text-center text-2xl">
          Pothi Yatra & Bhagavad Gita Poojan
        </div>
        <div className="bg-cardBackground p-3 h-36 w-full md:w-[500px] rounded-2xl shadow-lg flex flex-wrap justify-center items-center text-textCategory font-bold text-center text-2xl">
          Bhagavad Gita Special Satsang
        </div>
        <div className="bg-cardBackground p-3 h-36 w-full md:w-[500px] rounded-2xl shadow-lg flex flex-wrap justify-center items-center text-textCategory font-bold text-center text-2xl">
          Shree Krishna Abhishek
        </div>
        <div className="bg-cardBackground p-3 h-36 w-full md:w-[500px] rounded-2xl shadow-lg flex flex-wrap justify-center items-center text-textCategory font-bold text-center text-2xl">
          Keynote by Swami Mukundananda
        </div>
        <div className="bg-cardBackground p-3 h-36 w-full md:w-[500px] rounded-2xl shadow-lg flex flex-wrap justify-center items-center text-textCategory font-bold text-center text-2xl">
          Interactive Session - BG Quiz
        </div>
        <div className="bg-cardBackground p-3 h-36 w-full md:w-[500px] rounded-2xl shadow-lg flex flex-wrap justify-center items-center text-textCategory font-bold text-center text-2xl">
          BG Jayanti Parayan
        </div>
        <div className="bg-cardBackground p-3 h-36 w-full md:w-[500px] rounded-2xl shadow-lg flex flex-wrap justify-center items-center text-textCategory font-bold text-center text-2xl">
          Mahaprasad
        </div>
      </section>
      <section className="w-full md:p-10 p-3 flex justify-center gap-10 bg-background">
        <div className="md:w-[500px] shadow-2xl rounded-2xl bg-cardBackground">
          <p className="md:text-3xl md:m-10 m-3  font-semibold text-2xl text-center">
            Register now to receive event updates
          </p>
          <div
            className="ctct-inline-form"
            data-form-id="0a59fe8a-b1c5-48d2-a903-2f54a958fd22"
          ></div>
        </div>
      </section>
    </main>
  );
}

export default App;
