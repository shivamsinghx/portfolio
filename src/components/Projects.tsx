import React from 'react';
import ProjectCard from './ProjectCard';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Protochain",
      shortDescription: "AI-powered platform simplifying smart contract creation",
      fullDescription: "Protochain is an innovative AI-powered platform that revolutionizes smart contract development. It provides an intuitive interface for creating, testing, and deploying smart contracts without extensive coding knowledge, making blockchain development accessible to a wider audience.",
      technologies: ["Web3", "Google Gemini", "React", "Rust", "Tailwind CSS", "Petra Wallet"],
      image: "/public/images/proto.jpg",
      githubLink: "https://github.com/shivamsinghx"
    },
    {
      title: "Structured Address Data Compliance",
      shortDescription: "ML-powered address standardization for ISO 20022",
      fullDescription: "An advanced machine learning solution that automates the process of standardizing address data to comply with ISO 20022 and SWIFT MX requirements. The system processes unstructured address data and converts it into standardized formats, significantly reducing manual effort and error rates.",
      technologies: ["Machine Learning", "NLP", "SQL", "API"],
      image: "/public/images/structure.jpg",
      githubLink: "https://github.com/shivamsinghx"
    },
    {
      title: "Serverless Image Processing",
      shortDescription: "Cloud-native solution for efficient image transformations",
      fullDescription: "A high-performance serverless image processing system built for scale. This solution automatically optimizes, transforms, and delivers images through a global CDN, supporting various transformation operations like resize, crop, format conversion, and quality optimization.",
      technologies: ["Cloud Computing", "Image Processing", "AWS", "APIs", "CDN"],
      image: "/public/images/image.jpg",
      githubLink: "https://github.com/shivamsinghx"
    },
    {
      
        title: "View More Projects",
        technologies: ["Parallax", "Any Poster", "solana FE, UI"],
        image: "/public/images/retro1.png",
        githubLink: "https://github.com/shivamsinghx"
      
    }
  ];

  return (
    <section id="projects" className="bg-white dark:bg-neo-navy">
      <div className="neo-container py-16 md:py-24">
        <h2 className="section-title dark:text-neo-lime" data-aos="fade-up">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
