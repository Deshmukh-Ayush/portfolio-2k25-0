import { Collage } from "@/components/collage";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import Scales from "@/components/scales";
import { Subheading } from "@/components/subheading";
import { Timeline } from "@/components/timeline";

export default function About() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>About Me</Heading>
        <Subheading>
          I&apos;m a software engineer with a passion for building scalable and
          effiecient systems. Founder and CEO of Cignara, Currently building
          scalable and efficient systems and helping brands grow.
        </Subheading>
        <Subheading>Travelling is in my blood.</Subheading>
        <Collage />
        <Subheading>Here&apos;s a timeline of my journey so far.</Subheading>
        <Timeline />
      </Container>
    </div>
  );
}
