export default function Projects() {
  const projects = [
    {
      title: "Book Alchemist",
      desc: `A desktop app to convert raw ebooks (PDF, EPUB, MOBI) into beautifully typeset documents and
      enable context-aware conversations using a fully local AI or using your AI_API key.`,
      link: "https://github.com/ujjwal7789/BookAlchemist",
      image: "images/bookalchemist.png",
    },
    {
      title: "Collaborative Whiteboard",
      desc: "A web-based real-time collaborative whiteboard application using Nodejs and WebSockets.",
      link: "https://github.com/ujjwal7789/new_whiteboard",
      image: "images/colab_whiteboard.png",
    },
    {
      title: "Society Management System",
      desc: "Mobile + web system for handling community notices and service requests.",
      link: "https://github.com/ujjwal7789/society-app",
      image: "images/socman.png",
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-6 py-16 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="space-y-6 max-w-4xl mx-auto">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="relative bg-gray-900 rounded-2xl shadow-lg overflow-hidden group"
          >
            {/* Hidden checkbox toggle */}
            <input type="checkbox" id={`peek-${index}`} className="peer hidden" />

            {/* Card content */}
            <div className="p-6 flex flex-col justify-between min-h-[400px]">
              <div>
                <h3 className="text-4xl font-semibold">{proj.title}</h3>
                <p className="my-10 text-gray-400 text-xl">{proj.desc}</p>
              </div>

              <div className="flex gap-3 mt-6">
                <a
                  href={proj.link}
                  target="_blank"
                  className="px-5 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 text-center relative z-10"
                >
                  View Code
                </a>

                <label
                  htmlFor={`peek-${index}`}
                  className="px-5 py-2 bg-green-600 rounded-lg hover:bg-green-500 text-center relative z-10 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                >
                  Toggle Peek
                </label>
              </div>
            </div>

            {/* Image overlay controlled by peer-checked */}
            <div className="absolute inset-0 opacity-0 peer-checked:opacity-100 transition-opacity duration-500 flex items-center justify-center bg-black/90">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
