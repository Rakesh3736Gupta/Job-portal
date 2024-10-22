import { motion } from "framer-motion";
import React from "react";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const Navigate = useNavigate;
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
      >
        <footer className="rounded-md shadow-xl bg-white border border-gray-100  m-4">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <a href="#" className="flex items-center mb-4 sm:mb-0">
                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                  Job <span className=" text-red-500">Hunt</span>
                </span>
              </a>
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                    Explore Job <span className=" text-red-500">Hunt</span>
                  </h2>
                  <ul className="text-gray-500">
                    <li className="mb-4">
                      <a className="hover:underline">Career advice</a>
                    </li>
                    <li>
                      <a className="hover:underline">Career Explorer</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                    Follow Us
                  </h2>
                  <ul className="text-gray-500">
                    <li className="mb-4">
                      <a
                        href="https://github.com/Rakesh3736Gupta"
                        className="hover:underline"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/rakesh-gupta-88aa76221/"
                        className="hover:underline"
                      >
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                    Legal
                  </h2>
                  <ul className="text-gray-500">
                    <li className="mb-4">
                      <a className="hover:underline">Privacy Policy</a>
                    </li>
                    <li>
                      <a className="hover:underline">Terms & Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center">
                © 2024 <a className="hover:underline">Job Hunt™</a>. All Rights
                Reserved.
              </span>
              <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <a
                  href="mailto:rakesh.gupta.3736@gmail.com"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <i className="fab fa-facebook-f">
                    <MdOutlineAttachEmail />{" "}
                  </i>
                </a>
                <a
                  href="https://www.linkedin.com/in/rakesh-gupta-88aa76221/"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <i className="fab fa-instagram">
                    <FaLinkedin />
                  </i>
                </a>
                <a
                  href="https://github.com/Rakesh3736Gupta"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <i className="fab fa-twitter" onClick={() => navigate(`/`)}>
                    <FaGithub />
                  </i>
                </a>

                <i className="fab fa-github">
                  <IoLogoInstagram />
                </i>
                <a
                  href="https://drive.google.com/file/d/12v3lsO6XJoEN3H5X4Q_BExlKY7VjyufS/view?usp=drivesdk"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <i className="fas fa-globe">
                    <FaFilePdf />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </motion.div>
    </>
  );
};

export default Footer;
