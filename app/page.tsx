"use client";

import { Button } from "@/components/button";
import Image from "next/image";
import { ScrollButton } from "@/components/scroll-button";
import { Github, Mail, Linkedin } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center px-4 md:px-8 pt-14">
        <div className="max-w-3xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="space-y-4 flex-1">
            <p className="text-primary font-medium">Hi 👋, my name is</p>
            <h1 className="text-3xl md:text-4xl font-bold">
              Tsvetomir Tsvetkov
              <span className="block text-muted-foreground">
                Senior Frontend Engineer
              </span>
            </h1>
            <div className="space-y-3">
              <p className="text-base text-muted-foreground">
                {`I specialize in building exceptional digital experiences with modern web technologies.
                Currently focused on building accessible, human-centered products at `}
                <a
                  href="https://www.epam.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  EPAM Systems
                </a>
                .
              </p>
              <p className="text-base text-muted-foreground">
                {`With over 7+ years of experience in frontend development, I'm
                passionate about creating intuitive interfaces and optimizing
                application performance.`}
              </p>
            </div>
            <div className="flex gap-3 pt-4">
              <ScrollButton />
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  document
                    .getElementById("experience")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View work
              </Button>
            </div>
          </div>

          <div className="relative w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden border-4 border-primary/10">
            <Image
              src="/user/profile.jpeg"
              alt="Tsvetomir Tsvetkov"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 md:px-8 bg-primary/5" id="about">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
            <span className="text-primary">01.</span> About Me
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-primary/10 hover:border-primary/20 transition-colors">
              <p className="leading-relaxed">
                {`I'm a Senior Frontend Developer with over 7 years of experience, specializing in building exceptional digital experiences. My expertise lies in creating accessible, human-centered products with a strong focus on the Angular ecosystem and modern web technologies.`}
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border border-primary/10 hover:border-primary/20 transition-colors">
              <p className="leading-relaxed">
                {`Throughout my career, I've had the opportunity to work on
                large-scale enterprise applications, where I've developed a deep
                understanding of complex state management, performance
                optimization, and building scalable architectures. I'm
                particularly passionate about creating intuitive user interfaces
                and ensuring high-quality code through comprehensive testing
                strategies.`}
              </p>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4">
              Technical Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-sm border border-primary/10 hover:border-primary/20 transition-all group">
                <h4 className="text-sm font-semibold mb-4 flex items-center gap-2 text-primary">
                  <span className="w-8 h-[1px] bg-primary"></span>
                  Frontend Development
                </h4>
                <ul className="space-y-3">
                  {[
                    "Angular (Expert Level)",
                    "TypeScript/JavaScript",
                    "RxJS & Reactive Programming",
                    "NgRx State Management",
                    "Angular Material",
                    "HTML5/CSS3/SCSS",
                  ].map((tech) => (
                    <li
                      key={tech}
                      className="flex items-center gap-2 text-sm group-hover:translate-x-1 transition-transform"
                    >
                      <span className="text-primary">▹</span>
                      <span className="hover:text-primary transition-colors">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-sm border border-primary/10 hover:border-primary/20 transition-all group">
                <h4 className="text-sm font-semibold mb-4 flex items-center gap-2 text-primary">
                  <span className="w-8 h-[1px] bg-primary"></span>
                  Tools & Practices
                </h4>
                <ul className="space-y-3">
                  {[
                    "Jest & Cypress Testing",
                    "Git Version Control",
                    "CI/CD Pipelines",
                    "Agile Methodologies",
                    "Code Review & Mentoring",
                    "Performance Optimization",
                  ].map((tech) => (
                    <li
                      key={tech}
                      className="flex items-center gap-2 text-sm group-hover:translate-x-1 transition-transform"
                    >
                      <span className="text-primary">▹</span>
                      <span className="hover:text-primary transition-colors">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border border-primary/10 hover:border-primary/20 transition-colors mt-6">
              <p className="leading-relaxed">
                {`When I'm not coding, I enjoy staying up-to-date with the latest
                frontend development trends and contributing to the developer
                community through knowledge sharing and mentoring.`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects - Commented out until content is ready */}
      {/* <section className="py-12 px-4 md:px-8 bg-primary/5" id="work">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
            <span className="text-primary">02.</span> Featured Work
          </h2>
          <div className="space-y-12">
            {[1, 2, 3].map((project) => (
              <div key={project} className="group">
                <h3 className="text-lg font-semibold mb-3">
                  Featured Project {project}
                </h3>
                <div className="bg-card p-4 rounded-lg shadow-sm">
                  <p className="text-muted-foreground text-sm">
                    A brief description of your project. Explain what problem it
                    solves.
                  </p>
                  <div className="flex gap-2 mt-3">
                    <Button variant="ghost" size="icon"></Button>
                    <Button variant="ghost" size="icon"></Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Work Experience */}
      <section className="py-12 px-4 md:px-8" id="experience">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
            <span className="text-primary">02.</span> Work Experience
          </h2>
          <div className="space-y-8">
            <div className="group">
              <div className="flex flex-col sm:flex-row justify-between mb-2">
                <h3 className="text-lg font-semibold">EPAM Systems</h3>
                <span className="text-sm text-muted-foreground">
                  05.2019 - Present
                </span>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <p className="text-muted-foreground text-sm mb-3">
                  Senior Front-end Software Engineer
                </p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary">▹</span>
                    Led development of complex enterprise applications using
                    Angular, focusing on performance optimization and scalable
                    architecture
                  </li>
                  <li className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary">▹</span>
                    Implemented state management solutions using NgRx, improving
                    application maintainability and data flow
                  </li>
                  <li className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary">▹</span>
                    Mentored junior developers and conducted code reviews to
                    ensure high code quality and best practices
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 rounded-md text-xs">
                    Angular
                  </span>
                  <span className="px-2 py-1 bg-primary/10 rounded-md text-xs">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-primary/10 rounded-md text-xs">
                    RxJS
                  </span>
                  <span className="px-2 py-1 bg-primary/10 rounded-md text-xs">
                    NgRx
                  </span>
                  <span className="px-2 py-1 bg-primary/10 rounded-md text-xs">
                    Angular Material
                  </span>
                  <span className="px-2 py-1 bg-primary/10 rounded-md text-xs">
                    Jest
                  </span>
                  <span className="px-2 py-1 bg-primary/10 rounded-md text-xs">
                    Cypress
                  </span>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex flex-col sm:flex-row justify-between mb-2">
                <h3 className="text-lg font-semibold">Musala Soft</h3>
                <span className="text-sm text-muted-foreground">
                  02.2018 - 05.2019
                </span>
              </div>
              <div className="bg-card p-4 rounded-lg shadow-sm">
                <p className="text-muted-foreground text-sm mb-3">
                  Junior Software Engineer
                </p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary">▹</span>
                    Developed and maintained web applications using Angular and
                    Java Spring frameworks
                  </li>
                  <li className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary">▹</span>
                    Collaborated with cross-functional teams to deliver
                    high-quality software solutions
                  </li>
                  <li className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary">▹</span>
                    Participated in agile development processes and contributed
                    to continuous improvement initiatives
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 rounded-md text-xs">
                    Java Spring
                  </span>
                  <span className="px-2 py-1 bg-primary/10 rounded-md text-xs">
                    Angular
                  </span>
                  <span className="px-2 py-1 bg-primary/10 rounded-md text-xs">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-primary/10 rounded-md text-xs">
                    REST APIs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 px-4 md:px-8 bg-primary/5" id="contact">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-3 justify-center">
            <span className="text-primary">03.</span> Get In Touch
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Feel free to reach out!
          </p>
          <div className="flex justify-center gap-3">
            <a
              href="https://github.com/TsvetomirGT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="mailto:thewaffoss@gmail.com"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/tsvetomir-tsvetkov-430456144/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-4 text-center text-sm text-muted-foreground">
        <p>Designed & Built by Tsvetomir Tsvetkov</p>
      </footer>
    </div>
  );
}
