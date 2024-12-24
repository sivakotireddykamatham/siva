import { ArrowDownToLine } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";

const Hero = () => {
  const titles = [
    "Software Engineer",
    "Full Stack Developer",
    "Backend Developer",
    "Frontend Developer"
  ];
  
  const currentTitle = useTypewriter(titles, 100, 2000);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start space-y-4">
          <h1 className="text-5xl sm:text-6xl font-bold">
            Hi, I'm <span className="text-primary">Siva</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl font-medium h-[40px]">
            {currentTitle}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Specializing in Java, Python, AWS, and Full-Stack Development
          </p>
          <div className="flex space-x-4 mt-8">
            <button className="px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              Let's Talk
            </button>
            <button className="px-6 py-3 rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors">
              View Experience
            </button>
            <button className="px-6 py-3 rounded-md border border-border hover:bg-accent transition-colors flex items-center space-x-2">
              <ArrowDownToLine className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;