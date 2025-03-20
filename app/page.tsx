"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PROJECTS } from "../lib/data";
import EducationTimeline from "./components/education-timeline";
import ProjectCard from "./components/project-card";
import SkillsSection from "./components/skills-section";
import WavingHand from "./components/waving-hand";
import WorkTimeline from "./components/work-timeline";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-background/80 backdrop-blur-sm z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <nav className="flex gap-6 [&_button]:capitalize">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium hover:text-primary"
            >
              home
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium hover:text-primary"
            >
              skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium hover:text-primary"
            >
              projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-primary"
            >
              contact
            </button>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <section
          id="home"
          className="flex scroll-mt-28 flex-col md:flex-row items-center justify-between gap-12 mb-20"
        >
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Hi Vishal here <WavingHand />
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-[480px]">
              Full Stack Web Developer specializing in the MERN stack and
              Next.js, dedicated to building innovative, high-performance web
              and mobile applications.
            </p>
            <div className="flex gap-0 max-sm:justify-between sm:gap-4">
              <Button
                asChild
                variant="outline"
                className="max-sm:h-8 max-sm:rounded-md max-sm:px-3 max-sm:text-sm"
              >
                <Link href="https://github.com/VishalMauryastp" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Github
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="max-sm:h-8 max-sm:rounded-md max-sm:px-3 max-sm:text-sm"
              >
                <Link
                  href="https://www.linkedin.com/in/in-vishalmaurya/"
                  target="_blank"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="max-sm:h-8 max-sm:rounded-md max-sm:px-3 max-sm:text-sm"
              >
                <Link href="mailto:vishalmauryaab@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative w-64 h-64 rounded-full overflow-hidden shrink-0">
            <Image
              src="/avtaar.png"
              alt="Profile"
              className="object-contain"
              width={292}
              height={292}
            />
          </div>
        </section>

        <section id="skills" className="mb-20 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-8">Skills</h2>
          <SkillsSection />
        </section>

        <section className="mb-20">
          <Tabs defaultValue="work" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="work">Work</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="work">
              <WorkTimeline />
            </TabsContent>
            <TabsContent value="education">
              <EducationTimeline />
            </TabsContent>
          </Tabs>
        </section>

        <section id="projects" className="mb-20  scroll-mt-20">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <Tabs defaultValue={PROJECTS[0]?.title} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              {PROJECTS.map((project, i) => {
                return (
                  <TabsTrigger key={i} value={project?.title}>
                    {project?.title}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {PROJECTS.map((project, i) => {
              return (
                <TabsContent
                  key={i}
                  value={project?.title}
                  className="space-y-6"
                >
                  {project?.data?.map((item, j) => {
                    return (
                      <ProjectCard
                        key={j}
                        title={item?.title}
                        description={item.description}
                        link={item.link}
                        technologies={item?.tech}
                        organization={item?.organization}
                      />
                    );
                  })}
                </TabsContent>
              );
            })}
          </Tabs>
        </section>

        <section id="contact" className="mb-20  scroll-mt-20">
          <h2 className="text-2xl font-bold mb-8">Get in touch</h2>
          <p className="text-lg text-muted-foreground mb-6">
            I&apos;m always interested in hearing about new projects and
            opportunities.
          </p>
          <Button asChild>
            <Link href="mailto:vishalmauryaab@gmail.com">Send me an email</Link>
          </Button>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="max-w-[768px] mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2025 Vishal Maurya . All rights reserved.
        </div>
      </footer>
    </div>
  );
}
