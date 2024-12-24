import { Building2 } from "lucide-react";

const experiences = [
  {
    company: "Walmart",
    role: "Senior Software Engineer",
    period: "July 2024 - Present",
    location: "Sunnyvale, California",
    achievements: [
      "Led the development of a microservices-based inventory management system, improving processing speed by 40%",
      "Implemented automated CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews for team of 8 engineers",
    ],
  },
  {
    company: "Juniper Networks",
    role: "Software Engineer",
    period: "June 2022 - June 2024",
    location: "Dallas, Texas",
    achievements: [
      "Developed network monitoring tools using Python and React, handling 1M+ daily requests",
      "Optimized database queries resulting in 50% reduction in response time",
      "Implemented real-time analytics dashboard using WebSocket technology",
    ],
  },
  {
    company: "Frost Bank",
    role: "Software Engineer",
    period: "January 2020 - June 2022",
    location: "San Antonio, Texas",
    achievements: [
      "Built secure payment processing system handling $10M+ daily transactions",
      "Integrated third-party APIs for enhanced fraud detection",
      "Developed mobile-responsive web applications using React and TypeScript",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">
          Work <span className="text-primary">Experience</span>
        </h2>
        <div className="relative">
          <div className="timeline-line" />
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-accent/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-primary">{exp.company}</h3>
                  <p className="text-lg font-medium">{exp.role}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground mt-1 space-y-1 sm:space-y-0 sm:space-x-4">
                    <span>{exp.period}</span>
                    <span className="hidden sm:block">•</span>
                    <span>{exp.location}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;