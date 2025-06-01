import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Morgan Stanley",
    date: "May 2022 - August 2023",
    bullets: [
      "Developed an in-house Python-based comparator using API integrations to validate pre and post-production payment messages, reducing production defects by 40%.",
      "Automated functional testing workflows with Python scripting, integrated into Jenkins CI/CD pipeline,reducing manual effort by 85% and ensuring consistent, reliable software releases.",
      "Built a robust BDD framework in Java to automate notifications and SWIFT message processing using Selenium,streamlining payment operations, and enhancing system efficiency.",
    ],
  },
  {
    title: "Automation Engineer",
    company: "Amdocs",
    date: "April 2019 - April 2022",
    bullets: [
      "Independently managed the automation domain for Vodafone Turkey, ensuring seamless execution of testing.",
      "Created interactive Power BI dashboard to visualize defect metrics and SQL data, delivering real-time insights that accelerated decision-making for leadership.",
      "Executed ETL processes using Microsoft SSIS, seamlessly integrating data into Power BI for dynamic and actionable visualizations.",
      "Led training for new hires at Amdocs on tools and frameworks, enhancing their integration and productivity.",
    ],
  },
  {
    title: "Research Assistant",
    company: "University of Pittsburgh",
    date: "Jan 2025 - Present",
    bullets: [
      "Built an interactive dashboard analyzing U.S. political discourse using large-scale social media data.",
      "Preprocessed and aggregated millions of records with Python, Pandas, and SQL; developed Django REST APIs; and created dynamic D3.js visualizations.",
      "Conducted research on legislator engagement, civility, and misinformation trends, optimizing queries for scalable, real-time insights into online policymaker interactions.",

    ],
  },
];

export const WorkExperience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      {/* Section Header */}
      <div className="container mx-auto max-w-5xl text-center mb-12">
        <p className="text-sm uppercase tracking-wide text-muted-foreground mb-2">
          What I have done so far
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          Work <span className="text-primary">Experience</span>
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical center line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border dark:bg-gray-600" />

        <div className="space-y-16">
          {experiences.map((exp, idx) => {
            const isSoftwareIntern = exp.title === "Automation Engineer";

            return (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-center md:items-start"
              >
                {/* Left Placeholder: render card if NOT Software Intern */}
                <div className="md:w-5/12 md:pr-8 mb-8 md:mb-0">
                  {!isSoftwareIntern && (
                    <div className="bg-card dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {exp.company}
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Center Icon & Date */}
                <div className="md:w-2/12 flex flex-col items-center relative">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md border-2 border-primary">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <span className="mt-4 text-sm text-muted-foreground text-center">
                    {exp.date}
                  </span>
                </div>

                {/* Right Placeholder: render card if Software Intern */}
                <div className="md:w-5/12 md:pl-8 mb-8 md:mb-0">
                  {isSoftwareIntern && (
                    <div className="bg-card dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {exp.company}
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

