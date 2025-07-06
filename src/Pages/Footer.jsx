import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-red-700 h-[30vh] flex flex-col items-center justify-center text-white">
      <div className="flex items-center gap-4 mb-2">
        <span>Follow Us Now..</span>
        <a
          href="https://www.instagram.com/ritvij.verma?igsh=MWFkdzBubnEyYTF3Mg=="
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-300 text-2xl"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/ritvij-verma-6059a5355/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300 text-2xl"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/mysteriousrv/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 text-2xl"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
      <div>© 2025 Ritvij Verma All Rights Reserved.</div>
      <div>
        contact us at:{" "}
        <a
          href="mailto:ritvijverma18@gmail.com"
          className="underline hover:text-yellow-200"
        >
          ritvijverma@gmail.com
        </a>{" "}
        |{" "}
        <a
          href="tel:+919919122238"
          className="underline hover:text-yellow-200"
        >
          +91 9919122238
        </a>
      </div>
    </div>
  );
};

export default Footer;