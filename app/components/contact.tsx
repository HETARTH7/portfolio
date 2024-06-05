"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { devLinks } from "../data";
import { useState } from "react";
import { pacifico } from "../page";
import emailjs from "@emailjs/browser";
import Link from "next/link";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wv2rm1d",
        "template_961h9ca",
        "form",
        "e_iWXr-Gvt2_YrzdO"
      )
      .then(
        (result) => {
          alert("Message sent successfully");
        },
        (error) => {
          console.log(error);
        }
      );
    setFullName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div id="contact" className="h-screen text-center pt-16">
      <h1
        className={`${pacifico.className} text-6xl max-[600px]:text-4xl hover:underline`}
      >
        Get in touch
      </h1>
      <form
        name="form"
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10"
      >
        <div className="mb-4">
          <label
            className="float-left block mb-2 font-semibold"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            type="text"
            name="from_name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="float-left block mb-2 font-semibold"
            htmlFor="email"
          >
            E-Mail
          </label>
          <input
            type="email"
            name="from_email"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="float-left block mb-2 font-semibold"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            name="message"
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
          Send
        </button>
      </form>
      <h2 className="text-4xl mt-10 max-[600px]:text-2xl">Find me on</h2>
      {devLinks?.map((devLink, index) => {
        return (
          <Link key={index} href={devLink?.href} target="_blank">
            <FontAwesomeIcon icon={devLink?.icon} className="size-7 m-4" />
          </Link>
        );
      })}
    </div>
  );
}
