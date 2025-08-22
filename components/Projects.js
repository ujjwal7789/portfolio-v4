export default function Projects() {
  const projects = [
    {
      title: "Task Manager App",
      desc: "A full-stack task management app with authentication and CRUD features.",
      link: "https://github.com/yourusername/task-manager",
    },
    {
      title: "Finance Tracker",
      desc: "A web app to track expenses and visualize spending with charts.",
      link: "https://github.com/yourusername/finance-tracker",
    },
    {
      title: "Society Management System",
      desc: "Mobile + web system for handling community notices and service requests.",
      link: "https://github.com/yourusername/society-app",
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-6 py-16 bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <div key={index} className="p-6 bg-gray-900 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold">{proj.title}</h3>
            <p className="text-gray-400 mt-2">{proj.desc}</p>
            <a
              href={proj.link}
              target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
