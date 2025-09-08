import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 py-16 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Me</h2>

      <div className="space-y-6 max-w-lg mx-auto">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/ujjawal-kumar-952196299"
          target="_blank"
          className="flex items-center gap-3 text-lg hover:text-blue-400 transition"
        >
          <FaLinkedin className="text-2xl text-blue-500" />
          <span>www.linkedin.com/in/ujjawal-kumar-952196299</span>
        </a>

        {/* Email */}
        <a
          href="mailto:your@email.com"
          className="flex items-center gap-3 text-lg hover:text-red-400 transition"
        >
          <MdEmail className="text-2xl text-red-500" />
          <span>kumar.u3b7@gmail.com</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/ujjwal7789"
          target="_blank"
          className="flex items-center gap-3 text-lg hover:text-gray-400 transition"
        >
          <FaGithub className="text-2xl" />
          <span>github.com/ujjwal7789</span>
        </a>
      </div>
    </section>
  );
}
