import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { Projects } from "@/components/projects";
import Scales from "@/components/scales";
import { Subheading } from "@/components/subheading";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>Projects</Heading>
        <Subheading>
          I&apos;m a software engineer with a passion for building scalable and
          effiecient systems. Founder and CEO of Cignara, Currently building
          scalable and efficient systems and helping brands grow.
        </Subheading>

        <Projects />
      </Container>
    </div>
  );
}
