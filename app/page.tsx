export default function Home() {
  const projects = [
    {
      title: 'Monster Survivors',
      description: 'An intense survival action game where you face endless waves of challenging monsters. Test your skills, upgrade your abilities, and see how long you can survive in this thrilling adventure.',
      link: 'https://monstersurvivors.vip/',
      iframe: true
    }
  ]

  return (
    <div className="space-y-12">
      {/* Introduction Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hello, I&apos;m Chenene
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A passionate full-stack developer focused on creating elegant and efficient web applications.
        </p>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                {project.iframe ? (
                  <div className="aspect-video w-full mb-4 max-w-[400px] mx-auto">
                    <iframe
                      src={project.link}
                      className="w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : null}
                <a
                  href={project.link}
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
