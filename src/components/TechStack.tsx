
import React from 'react';
import { 
  Code as ReactIcon, 
  Globe as NextjsIcon, 
  FileJson as TypescriptIcon,
  Paintbrush as TailwindIcon,
  Flame as FramerIcon,
  Server as NodeIcon,
  Network as ExpressIcon,
  Database as MongodbIcon,
  Table2 as PostgresqlIcon,
  Network as GraphqlIcon,
  GitBranch as GitIcon,
  Container as DockerIcon,
  Cloud as AwsIcon,
  GitCompare as CiCdIcon,
  PenTool as FigmaIcon
} from 'lucide-react';

interface TechCategory {
  title: string;
  technologies: {
    name: string;
    icon: React.ReactNode;
  }[];
}

const TechStack: React.FC = () => {
  const categories: TechCategory[] = [
    {
      title: "Frontend",
      technologies: [
        { name: "React", icon: <ReactIcon size={24} strokeWidth={1.5} className="text-[#61DAFB]" /> },
        { name: "Next.js", icon: <NextjsIcon size={24} strokeWidth={1.5} className="text-[#000000] dark:text-white" /> },
        { name: "TypeScript", icon: <TypescriptIcon size={24} strokeWidth={1.5} className="text-[#3178C6]" /> },
        { name: "Tailwind CSS", icon: <TailwindIcon size={24} strokeWidth={1.5} className="text-[#38BDF8]" /> },
        { name: "Framer Motion", icon: <FramerIcon size={24} strokeWidth={1.5} className="text-[#DD2C7F]" /> },
      ]
    },
    {
      title: "Backend",
      technologies: [
        { name: "Node.js", icon: <NodeIcon size={24} strokeWidth={1.5} className="text-[#339933]" /> },
        { name: "Express", icon: <ExpressIcon size={24} strokeWidth={1.5} className="text-[#000000] dark:text-white" /> },
        { name: "MongoDB", icon: <MongodbIcon size={24} strokeWidth={1.5} className="text-[#47A248]" /> },
        { name: "PostgreSQL", icon: <PostgresqlIcon size={24} strokeWidth={1.5} className="text-[#336791]" /> },
        { name: "GraphQL", icon: <GraphqlIcon size={24} strokeWidth={1.5} className="text-[#E535AB]" /> },
      ]
    },
    {
      title: "Tools & Others",
      technologies: [
        { name: "Git", icon: <GitIcon size={24} strokeWidth={1.5} className="text-[#F05032]" /> },
        { name: "Docker", icon: <DockerIcon size={24} strokeWidth={1.5} className="text-[#2496ED]" /> },
        { name: "AWS", icon: <AwsIcon size={24} strokeWidth={1.5} className="text-[#FF9900]" /> },
        { name: "CI/CD", icon: <CiCdIcon size={24} strokeWidth={1.5} className="text-[#43A047]" /> },
        { name: "Figma", icon: <FigmaIcon size={24} strokeWidth={1.5} className="text-[#F24E1E]" /> },
      ]
    }
  ];

  return (
    <section id="tech" className="dark:bg-neo-navy dark:text-white py-16">
      <div className="neo-container max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 relative inline-block dark:text-neo-lime">
          Tech Stack
        </h2>
        
        <div className="space-y-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="neo-card p-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-bold mb-4 text-neo-navy dark:text-neo-lime">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <div 
                    key={techIndex}
                    className="flex flex-col items-center p-3 bg-neo-cream/50 dark:bg-neo-mint/10 rounded-lg hover:transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="mb-2">
                      {tech.icon}
                    </div>
                    <span className="text-sm font-medium text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
