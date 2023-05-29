import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import React, { ReactEventHandler, useState } from "react";
const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    setFullName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="h-screen text-center mt-60" id="contact">
      <h1 className="text-6xl max-[600px]:text-4xl">Get in touch</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
        <div className="mb-4">
          <label className="float-left block mb-2 font-semibold" htmlFor="fullName">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="float-left block mb-2 font-semibold" htmlFor="email">
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="float-left block mb-2 font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <div>
        <h2 className="text-4xl mt-10 max-[600px]:text-2xl">Find me on</h2>
        <svg
          className="inline m-4 hover:animate-bounce"
          width="50px"
          height="40px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/hetarth-raval-936462218/",
              "_blank"
            );
          }}
        >
          <path
            fill="#0A66C2"
            d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
          />
        </svg>

        <svg
          className="inline m-4 hover:animate-bounce"
          width="50px"
          height="40px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          onClick={() => {
            window.open("https://github.com/HETARTH7", "_blank");
          }}
        >
          <path
            fill="#161514"
            fillRule="evenodd"
            d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.711 6.711 0 018 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A6.996 6.996 0 0015 7.993 6.997 6.997 0 008 1z"
            clipRule="evenodd"
          />
        </svg>

        <svg
          className="inline m-4 hover:animate-bounce"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="50"
          height="40"
          onClick={() => {
            window.open(
              "https://stackoverflow.com/users/16973267/hetarth7",
              "_blank"
            );
          }}
        >
          <path
            d="M28.16 32H2.475V20.58H5.32v8.575h19.956V20.58h2.884z"
            fill="#bcbbbb"
          />
          <path
            d="M8.477 19.8l13.993 2.923.585-2.806-13.993-2.923zm1.832-6.704l12.94 6.04 1.208-2.572-12.94-6.08zm3.586-6.353l10.99 9.12 1.832-2.183-10.99-9.12zM20.99 0l-2.3 1.715 8.536 11.46 2.3-1.715zM8.166 26.27H22.43v-2.845H8.166v2.845z"
            fill="#f48024"
          />
        </svg>

        <Image
          className="inline m-4 hover:animate-bounce"
          src={"https://www.vectorlogo.zone/logos/devto/devto-icon.svg"}
          height={40}
          width={50}
          alt=""
          onClick={() => {
            window.open("https://dev.to/hetarth7", "_blank");
          }}
        />
      </div>
    </div>
  );
};
export default Contact;
