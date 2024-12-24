import { Download, Medal } from "lucide-react";

const certifications = [
  {
    title: "Problem Solving (Advanced)",
    provider: "HackerRank",
    date: "March 2024",
  },
  {
    title: "Java (Advanced)",
    provider: "HackerRank",
    date: "February 2024",
  },
  {
    title: "Python (Advanced)",
    provider: "HackerRank",
    date: "January 2024",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">
          My <span className="text-primary">Certifications</span>{" "}
          <Medal className="inline-block w-8 h-8 text-primary" />
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-accent/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-primary mt-1">{cert.provider}</p>
              <p className="text-sm text-muted-foreground mt-1">{cert.date}</p>
              <div className="flex space-x-3 mt-4">
                <button className="flex-1 px-4 py-2 rounded-md bg-background hover:bg-accent transition-colors text-sm">
                  View Certificate
                </button>
                <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;