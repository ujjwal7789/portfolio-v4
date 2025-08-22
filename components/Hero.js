export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-black text-white">
      <h1 className="text-5xl font-bold">Hi, I’m Ujjawal Kumar</h1>
      <p className="mt-4 text-xl">BCA Graduate | Aspiring Software Engineer</p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-600 rounded-xl shadow-lg hover:bg-blue-500 transition"
      >
        View My Work
      </a>
    </section>
  );
}