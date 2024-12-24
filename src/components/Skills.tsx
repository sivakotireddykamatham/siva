const technicalSkills = [
  { name: "Java", level: 90 },
  { name: "Python", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "AWS", level: 85 },
  { name: "SQL", level: 90 },
];

const professionalSkills = [
  { name: "Problem Solving", level: 95 },
  { name: "Team Leadership", level: 85 },
  { name: "Communication", level: 90 },
  { name: "Project Management", level: 85 },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="space-y-2">
    <div className="flex justify-between">
      <span>{name}</span>
      <span className="text-primary">{level}%</span>
    </div>
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${level}%` }} />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Professional Skills</h3>
            <div className="space-y-6">
              {professionalSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;