import Link from "next/link";

export default function Projects() {
  return (
    <div id="projects" className="h-auto text-center font-mono mb-32">
      <h1 className="text-4xl font-black tracking-tighter pt-32 pb-24">
        Projects
      </h1>

      <Link
        href="https://github.com/HETARTH7/XrossFit-FrontEnd"
        target="_blank"
      >
        <button className="text-xl hover:text-2xl rounded-3xl">
          <h1 className="text-4xl font-black tracking-tighter m-8">XrossFit</h1>
          <p className="text-xl text-gray-400 tracking-tighter mt-8">
            MERN Stack
          </p>
          <p className="text-xl tracking-tighter mt-8 mb-8">
            A MERN Stack Application for users to keep a log of their daily
            exercises, buy training equipment and payment with additional
            functionalities such as user Authentication, payment gateway, admin
            portal and exercise recommendation.
          </p>
        </button>
      </Link>
      <Link
        href="https://github.com/HETARTH7/Notes-Keeper-App-Front-End"
        target="_blank"
      >
        <button className="text-xl hover:text-2xl rounded-3xl">
          <h1 className="text-4xl font-black tracking-tighter m-8">
            Keeper App
          </h1>
          <p className="text-xl text-gray-400 tracking-tighter mt-8">
            MERN Stack
          </p>
          <p className="text-xl tracking-tighter mt-8 mb-8">
            Keeper App is created using ReactJS, ExpressJS and MongoDB and it
            allows the user to create notes.
          </p>
        </button>
      </Link>
      <Link href="https://github.com/HETARTH7/Task-Manager-App" target="_blank">
        <button className="text-xl hover:text-2xl rounded-3xl">
          <h1 className="text-4xl font-black tracking-tighter m-8">
            To Do List
          </h1>
          <p className="text-xl text-gray-400 tracking-tighter mt-8">
            MERN Stack
          </p>
          <p className="text-xl tracking-tighter mt-8 mb-8">
            A simple to-do list created using ReactJS, ExpressJS and MongoDB.
          </p>
        </button>
      </Link>
      <Link href="https://github.com/HETARTH7/Password-Checker" target="_blank">
        <button className="text-xl hover:text-2xl rounded-3xl">
          <h1 className="text-4xl font-black tracking-tighter m-8">
            Password Checker
          </h1>
          <p className="text-xl text-gray-400 tracking-tighter mt-8">
            Python3, Have I Been Pwned API
          </p>
          <p className="text-xl tracking-tighter mt-8 mb-8">
            This Python project lets the user securely check if a password has
            been pwned or hacked without transmitting the password through the
            internet. It uses Troy Hunt’s Have I Been Pwned API to get the
            passwords that have been leaked in the past using only the first
            five characters of the SHA1‑ generated password.
          </p>
        </button>
      </Link>
    </div>
  );
}
