"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { devLinks } from "../data";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { Pacifico } from "next/font/google";
import { Alert } from "@mui/material";
import { CheckCircleOutline, ErrorOutline } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";

export const pacifico = Pacifico({ weight: ["400"], subsets: ["latin"] });

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [fadeOutSuccess, setFadeOutSuccess] = useState(false);
  const [fadeOutError, setFadeOutError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    setLoading(true);
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        "form",
        process.env.NEXT_PUBLIC_OPTIONS
      )
      .then(
        (result) => {
          setSuccess(true);
          setFadeOutSuccess(false);
          setLoading(false);
          console.log("Message sent successfully");
        },
        (error) => {
          setError(true);
          setFadeOutError(false);
          setLoading(false);
          console.log(error);
        }
      );
    setFullName("");
    setEmail("");
    setMessage("");
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setFadeOutSuccess(true), 5000);
      const hideAlertTimer = setTimeout(() => setSuccess(false), 6000);

      return () => {
        clearTimeout(timer);
        clearTimeout(hideAlertTimer);
      };
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setFadeOutError(true), 5000);
      const hideAlertTimer = setTimeout(() => setError(false), 6000);

      return () => {
        clearTimeout(timer);
        clearTimeout(hideAlertTimer);
      };
    }
  }, [error]);

  return (
    <div id="contact" className="h-screen text-center pt-16">
      {success && (
        <Alert
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] max-w-sm transition-opacity duration-1000 ease-out ${
            fadeOutSuccess ? "opacity-0" : "opacity-100"
          }`}
          icon={<CheckCircleOutline fontSize="inherit" />}
          severity="success"
        >
          Message Sent Successfully
        </Alert>
      )}
      {error && (
        <Alert
          className={`fixed top-16 left-1/2 transform -translate-x-1/2 w-[90%] max-w-sm transition-opacity duration-1000 ease-out ${
            fadeOutError ? "opacity-0" : "opacity-100"
          }`}
          icon={<ErrorOutline fontSize="inherit" />}
          severity="error"
        >
          Error Sending Message
        </Alert>
      )}
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
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
