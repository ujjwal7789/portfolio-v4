export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <p className="text-gray-300 mb-6 text-center max-w-xl">
        Interested in working together? Let’s connect!
      </p>
      <div className="flex gap-6">
        <a href="mailto:your.email@example.com" className="hover:text-blue-400">Email</a>
        <a href="https://github.com/yourusername" target="_blank" className="hover:text-blue-400">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-blue-400">LinkedIn</a>
      </div>
    </section>
  );
}
