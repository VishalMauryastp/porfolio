import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WorkTimeline() {
  const experiences = [
    {
      company: "SIB Infotech",
      jobType: "On-site",
      roles: [
        {
          title: "Web Developer(MERN)",
          period: "May 2024 - Present",
          description: [
            "Architected and developed full-stack applications using MERN stack",
            "Improved system performance by 40% through optimization techniques",
            "Implemented advanced state management with Redux and Context API",
            "Led code reviews and mentored junior developers",
            "Integrated third-party APIs and services to expand functionality",
          ],
        },
      ],
    },
    {
      company: "Gronity Web Solution Pvt. Ltd.",
      jobType: "On-site",
      roles: [
        {
          title: "Website Developer",
          period: "November 2023 - May 2024",
          description: [
            "Built responsive UIs with Nextjs, React.js and Tailwind CSS",
            "Developed backend services using Node.js and Express",
            "Integrated frontend components with backend services",
            "Optimized performance, cutting load times by 30% and increasing engagement by 45%",
          ],
        },
      ],
    },
    {
      company: "HomzNOffiz India Pvt. Ltd.",
      jobType: "Remote",
      roles: [
        {
          title: "Fullstack Developer",
          period: "June 2023 - November 2023",
          description: [
            "Developed and maintained MERN stack applications",
            "Increased user engagement by 30% through UI/UX improvements",
            "Collaborated with design team to implement pixel-perfect interfaces",
            "Participated in Agile ceremonies and sprint planning",
          ],
        },
      ],
    },
  ];

  return (
    <div className="rounded-xl border shadow pb-6">
      {experiences.map((exp, index) => (
        <Card key={index} className="border-none shadow-none">
          <CardHeader>
            <CardTitle>{exp.company}</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 pb-0">
            <div className="relative border-l border-muted-foreground/20 pl-6 ml-2">
              {exp.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="pb-8 last:pb-0">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[0.4rem]"></div>
                  <h3 className="text-lg font-semibold -translate-y-2">
                    {role.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    <span>{role.period}</span>{" "}
                    <span className="text-xs dark:text-white text-black">
                      ({exp.jobType})
                    </span>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {role.description.map((item, i) => (
                      <li key={i}>{item}.</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
