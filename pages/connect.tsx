import Image from "next/image";
import Link from "next/link";

export default function Connect() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div id="connect" className="text-center font-mono">
      <h1 className="text-8xl font-black tracking-tighter pb-24">Connect</h1>
      <Link href="https://github.com/HETARTH7" target="_blank">
        <button className="bg-neutral-900 text-xl w-48 h-48 hover:text-2xl rounded-3xl m-8">
          GitHub
        </button>
      </Link>
      <Link href="https://www.linkedin.com/in/hetarth-raval-936462218/" target="_blank">
        <button className="bg-neutral-900 text-xl w-48 h-48 hover:text-2xl rounded-3xl m-8">
          LinkedIn
        </button>
      </Link>
      <Link href="https://stackoverflow.com/users/16973267/hetarth7" target="_blank">
        <button className="bg-neutral-900 text-center text-xl w-48 h-48 hover:text-2xl rounded-3xl m-8">
          StackOverflow
        </button>
      </Link>
      <Link href="mailto:hetarth002@gmail.com">
        <button className="bg-neutral-900 text-xl w-48 h-48 hover:text-2xl rounded-3xl m-8">
          Email
        </button>
      </Link>
      <p className="pt-24">&copy; {currentYear} Hetarth</p>
      Made with Tailwindcss and NextJS
    </div>
  );
}
