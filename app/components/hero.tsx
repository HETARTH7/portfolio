import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const Hero = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center m-0">
        <h1 className={`${dancingScript.className} text-8xl`}>
          Hi, my name is Hetarth
        </h1><br />
        <h2 className="text-4xl text-right">Software Engineer</h2>
      </div>
    </div>
  );
};

export default Hero;
