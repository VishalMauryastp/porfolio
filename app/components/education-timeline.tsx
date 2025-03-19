import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EducationTimeline() {
  const education = [
    {
      school: "Bundelkhand University",
      degree: "Master of Computer Applications (MCA)",
      field: "Computer Software and Media Applications",
      period: "November 2021 - August 2023",
      description: [
        "Specialized in advanced software development and system design",
        "Completed projects in web development and database management",
        "Participated in coding competitions and hackathons",
        "Maintained excellent academic performance throughout the program",
      ],
    },
    {
      school: "Lucknow University",
      degree: "Bachelor of Arts",
      field: "Mathematics and Anthopology",
      period: "July 2018 - July 2021",
      description: [
        "Studied mathematical concepts and their practical applications",
        "Explored human cultures, societies, and historical trends",
        "Developed strong analytical and research skills",
        "Worked on projects connecting math and anthropology",
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="mb-2">{edu.school}</CardTitle>
            <p className="text-lg leading-tight font-semibold text-primary">{edu.degree}</p>
            <p className="text-xs leading-3 text-muted-foreground">{edu.field}</p>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium mb-2">{edu.period}</p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {edu.description.map((item, i) => (
                <li key={i}>{item}.</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
