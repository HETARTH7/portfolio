import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const Hero = () => {
  return (
    <div className="h-screen flex justify-center items-center p-4">
      <div className="text-center m-0">
        <h1
          className={`${dancingScript.className} text-5xl sm:text-6xl md:text-7xl lg:text-8xl`}
        >
          Hi, my name is Hetarth
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-right mt-4">
          Software Engineer
        </h2>
      </div>
    </div>
  );
};

export default Hero;
