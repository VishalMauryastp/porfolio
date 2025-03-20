import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    name: "Front-End Design",
    skills: [
      { name: "Next.js", logo: "/logos/next.png" },
      { name: "React", logo: "/logos/react.svg" },
      { name: "Vite", logo: "/logos/vite.svg" },
      { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
    ],
  },

  {
    name: "Back-End",
    skills: [
      { name: "Node.js", logo: "/logos/nodejs.svg" },
      { name: "Express.js", logo: "/logos/expressjs.png" },
      { name: "Laravel", logo: "/logos/laravel.png" },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MongoDB", logo: "/logos/mongodb.svg" },
      { name: "MySQL", logo: "/logos/mysql.png" },
    ],
  },
  {
    name: "Application Development",
    skills: [
      { name: "React", logo: "/logos/react.svg" },
      { name: "React Native", logo: "/logos/react.svg" },
      { name: "Expo", logo: "/logos/expo.png" },
    ],
  },
  {
    name: "UI Library",
    skills: [
      { name: "shadcn/ui", logo: "/logos/shadcn.png" },
      { name: "Ant Design", logo: "/logos/antd.svg" },
      { name: "Heroui", logo: "/logos/heroui.png" },
    ],
  },
  {
    name: "Animation Library",
    skills: [
      { name: "AOS", logo: "/logos/aos.png" },
      { name: "GSAP", logo: "/logos/gsap.jpg" },
      { name: "Framer Motion", logo: "/logos/framer.png" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {skillCategories.map((category, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{category.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center gap-2">
                  {skill?.logo && (
                    <Image
                      className="rounded"
                      src={skill.logo || "/placeholder.svg"}
                      alt={skill.name}
                      width={24}
                      height={24}
                    />
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
