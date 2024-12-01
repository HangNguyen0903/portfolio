const Section = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "An online store built with React and Tailwind.",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A personal portfolio showcasing my work.",
    },
  ];
  return (
    <div>
      <section
        id="home"
        className="h-screen bg-gray-800 text-white dark:bg-gray-900 dark:text-gray-200 flex flex-col justify-center items-center"
      >
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cột trái */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
              <p className="mt-4 text-gray-600">
                I'm a Frontend Developer with experience in building modern and
                user-friendly websites. I love creating clean designs and
                writing efficient code.
              </p>
              <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                Learn More
              </button>
            </div>

            {/* Cột phải */}
            <div className="flex justify-center">
              <img
                src="https://via.placeholder.com/400"
                alt="Profile"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </section>
      <section
        id="about"
        className="py-16 bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-200"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg">
            I'm a passionate Frontend Developer with experience in building
            modern web applications.
          </p>
        </div>
      </section>
      <section
        id="projects"
        className="py-16 bg-white dark:bg-gray-900 dark:text-gray-200"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="py-6 bg-gray-900 text-white dark:bg-gray-800 dark:text-gray-200 text-center">
        <p>© 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default Section;
