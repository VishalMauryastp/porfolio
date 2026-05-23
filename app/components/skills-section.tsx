import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Cloud,
  KeyRound,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type Skill = {
  name: string;
  logo?: string;
  Icon?: LucideIcon;
};

const skillCategories: { name: string; skills: Skill[] }[] = [
  {
    name: "Front-End",
    skills: [
      { name: "Next.js", logo: "/logos/next.png" },
      { name: "React.js", logo: "/logos/react.svg" },
      { name: "TanStack Start", logo: "/logos/tanstack.svg" },
      { name: "Redux", logo: "/logos/redux.svg" },
      { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
      { name: "JavaScript (ES6+)", logo: "/logos/javascript.svg" },
      { name: "Bootstrap", logo: "/logos/bootstrap.svg" },
    ],
  },
  {
    name: "Back-End",
    skills: [
      { name: "FastAPI", logo: "/logos/python.svg" },
      { name: "Django", logo: "/logos/django.svg" },
      { name: "Node.js", logo: "/logos/nodejs.svg" },
      { name: "Express.js", logo: "/logos/expressjs.png" },
      { name: "RESTful APIs", logo: "/logos/api.svg" },
      { name: "WebSockets", logo: "/logos/socketdotio.svg" },
    ],
  },
  {
    name: "Authentication",
    skills: [
      { name: "JWT", logo: "/logos/jwt.svg" },
      { name: "OAuth", logo: "/logos/auth0.svg" },
      { name: "Next-Auth", Icon: ShieldCheck },
      { name: "BetterAuth", Icon: KeyRound },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MongoDB", logo: "/logos/mongodb.svg" },
      { name: "MySQL", logo: "/logos/mysql.svg" },
      { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
    ],
  },
  {
    name: "Development & Cloud",
    skills: [
      { name: "AWS EC2", Icon: Cloud },
      { name: "Git", logo: "/logos/git.svg" },
      { name: "GitHub Actions", logo: "/logos/githubactions.svg" },
      { name: "Digital Ocean", logo: "/logos/digitalocean.svg" },
      { name: "Azure", Icon: Cloud },
    ],
  },
  {
    name: "UI Libraries",
    skills: [
      { name: "ShadCN", logo: "/logos/shadcn.svg" },
      { name: "Ant Design", logo: "/logos/antd.svg" },
      { name: "NextUI", logo: "/logos/nextui.svg" },
    ],
  },
  {
    name: "Generative AI",
    skills: [
      { name: "OpenAI", logo: "/logos/OpenAI_Logo.svg" },
      { name: "Google Gemini", logo: "/logos/Google_Gemini_logo.svg" },
      { name: "LangChain", logo: "/logos/langchain-logo.svg" },
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
                  {skill.logo ? (
                    <Image
                      className="rounded dark:invert-[.15]"
                      src={skill.logo}
                      alt={skill.name}
                      width={24}
                      height={24}
                    />
                  ) : skill.Icon ? (
                    <skill.Icon className="w-5 h-5 text-primary" />
                  ) : null}
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
