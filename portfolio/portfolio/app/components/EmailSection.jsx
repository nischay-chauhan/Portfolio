import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, and my inbox is always
          open. Feel free to send me an email.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/nischay-chauhan">
            <div className="flex items-center text-[#ADB7BE] hover:text-white">
              <FaGithub className="mr-2" />
              GitHub
            </div>
          </Link>
          <Link href="https://linkedin.com/in/your-linkedin-username">
            <div className="flex items-center text-[#ADB7BE] hover:text-white">
              <FaLinkedin className="mr-2" />
              LinkedIn
            </div>
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col ">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-lg font-medium"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="bg-[#181818] border text-gray  border-[#ADB7BE] text-white placeholder-[#9CA2A9] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="email "
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-lg font-medium "
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#181818] border text-gray  border-[#ADB7BE] text-white placeholder-[#9CA2A9] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Sayiing Hiiiii"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-lg font-medium "
            >
              Message
            </label>
            <textarea
              type="text"
              id="message"
              required
              className="bg-[#181818] border text-gray  border-[#ADB7BE] text-white placeholder-[#9CA2A9] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder=" Lets talk about it"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:shadow-outline"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
