const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="mt-8 bg-accent/50 rounded-lg p-6 text-muted-foreground space-y-4">
          <p>
            I have over 7 years of experience in full-stack development, creating reliable and scalable web applications. With a strong background in both front-end and back-end technologies, I focus on building responsive designs, connecting APIs, and managing databases efficiently. Skilled in Java, Python, Spring Boot, Angular, and React, I work on both the server side and the user interface to build applications that are easy to use and perform well.
          </p>
          <p>
            My expertise extends to RESTful APIs, microservices architecture, and cloud integrations, ensuring optimized performance and scalability. Skilled in managing databases including SQL, MongoDB, and DynamoDB, I design efficient data storage solutions to meet business needs. I am experienced in working with modern frameworks, agile methodologies, and optimizing user interfaces for enhanced user experiences.
          </p>
          <p>
            My experience also includes working with Jenkins for CI/CD automation, Docker and Kubernetes for containerization and orchestration, and deploying applications on cloud platforms like AWS and Azure.
          </p>
        </div>
        <div className="mt-8 bg-accent/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Download Resume</h3>
          <p className="text-muted-foreground mb-4">
            Get a detailed overview of my professional experience and skills.
          </p>
          <button className="w-full px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2">
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;