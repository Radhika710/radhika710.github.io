import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
             Software Engineer and Data Enthusiast
            </h3>

            <p className="text-muted-foreground">
            With 4 years of experience in software engineering, I specialize in building scalable backend systems, automating workflows, and deriving insights from data. 
            My work spans full-stack development, data analytics, and cloud infrastructure, with hands-on expertise in Python, SQL, AWS, and modern frameworks like Django and D3.js.
            </p>

            <p className="text-muted-foreground">
            With a Master’s in Information Science from the University of Pittsburgh, 
            I’m passionate about combining engineering and research to solve real-world problems—whether 
            it’s developing interactive dashboards to analyze political discourse or designing predictive 
            models using neural networks. I thrive in collaborative environments and am driven by curiosity, 
            continuous learning, and impact-focused innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Radhika_Purohit_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Data Analytics & AI/ML</h4>
                  <p className="text-muted-foreground">
                    Turning raw data into actionable insights using machine learning, visualization, and big data tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Automation and DevOps</h4>
                  <p className="text-muted-foreground">
                  Streamlining development with CI/CD pipelines, BDD frameworks, and test automation
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg"></h4>
                  <p className="text-muted-foreground">
                   Building robust systems with Python, SQL, Django, and cloud-native tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
