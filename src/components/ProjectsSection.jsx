import { ArrowRight, ExternalLink, Github, GithubIcon, LinkedinIcon } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Plum Swamp Farm',
    description: 'A Family Farm',
    image: '/projects/project1.jpg',
    tags: ['React', 'TailwindCSS'],
    demoUrl: '#',
    githubUrl: '#',
  },

  {
    id: 2,
    title: 'Plum Swamp Farm',
    description: 'A Family Farm',
    image: '/projects/project2.jpg',
    tags: ['React', 'TailwindCSS'],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Plum Swamp Farm',
    description: 'A Family Farm',
    image: '/projects/project3.jpg',
    tags: ['React', 'TailwindCSS'],
    demoUrl: '#',
    githubUrl: '#',
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4  relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>{' '}
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 ">
          Some of my recent projects. Each project crafted to optimize
          performance with user experience in mind.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-ls font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center ">
                  <div className="flex space-x-3 ">
                    <a
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      href={project.demoUrl}
                      target="_blank"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      href={project.githubUrl}
                      target="_blank"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex mt-12 ">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 "
            href="https://github.com/dmacisso"
            target="_blank"
          >
            My Github <GithubIcon size={16} />{' '}
          </a>
          {/* <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 "
            href="https://www.linkedin.com/in/david-macisso-2135787/"
            target="_blank"
          >
            My LinkedIn <LinkedinIcon size={16} />{' '}
          </a> */}
          
        </div>
      </div>
    </section>
  );
};
