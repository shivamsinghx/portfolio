import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  githubLink?: string;
  demoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  shortDescription,
  fullDescription,
  technologies,
  image,
  githubLink,
  demoLink
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="neo-card group cursor-pointer overflow-hidden">
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-neo-navy/5 dark:bg-neo-lime/5 group-hover:bg-neo-navy/10 dark:group-hover:bg-neo-lime/10 transition-all duration-300"></div>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-neo-black/80 dark:text-white/80 mb-4">{shortDescription}</p>
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 3).map((tech, i) => (
                <Badge 
                  key={i} 
                  variant="outline" 
                  className="bg-neo-cream dark:bg-neo-mint/20 border-neo-black/20 dark:border-neo-lime/20"
                >
                  {tech}
                </Badge>
              ))}
              {technologies.length > 3 && (
                <Badge variant="outline" className="bg-neo-cream/50 dark:bg-neo-mint/10">
                  +{technologies.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px] bg-white dark:bg-neo-navy border-2 border-neo-black dark:border-neo-lime/40">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">{title}</h2>
          
          <p className="text-neo-black/80 dark:text-white/80">
            {fullDescription}
          </p>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <Badge 
                key={i} 
                variant="outline" 
                className="bg-neo-cream dark:bg-neo-mint/20 border-neo-black/20 dark:border-neo-lime/20"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4 pt-4">
            {githubLink && (
              <a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-button dark:bg-neo-lime/20 dark:border-neo-lime/40 flex items-center gap-2 hover:bg-neo-yellow/90"
              >
                <Github size={18} />
                <span>View on GitHub</span>
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
