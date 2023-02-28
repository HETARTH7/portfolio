import Typewriter from "typewriter-effect";

export default function About() {
  return (
    <div id="about" className="h-screen font-mono text-center">
      <h1 className="text-8xl font-black tracking-tighter mt-64">Hetarth</h1>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              "<p class='text-4xl text-gray-400 tracking-tighter mt-8'>A Full Stack Developer based in India.</p>"
            )
            .callFunction(() => {
              console.log("String typed out!");
            })
            .start();
        }}
      />
    </div>
  );
}
