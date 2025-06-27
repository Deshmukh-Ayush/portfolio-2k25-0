import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import { LandingBlogs } from "@/components/landing-blogs";
import { Projects } from "@/components/projects";
import Scales from "@/components/scales";
import { Subheading } from "@/components/subheading";
import { Testimonials } from "@/components/testimonials";
import { projects } from "@/constants/projects";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>Ayush Deshmukh</Heading>
        <Subheading>
          I&apos;m a software engineer with a passion for building scalable and
          efficient systems. Founder and CEO of Cignara, Currently building
          scalable and efficient systems and helping brands grow.
        </Subheading>
        <Projects projects={projects.slice(0, 3)} />
        <LandingBlogs />
        <Testimonials />
      </Container>
    </div>
  );
}
