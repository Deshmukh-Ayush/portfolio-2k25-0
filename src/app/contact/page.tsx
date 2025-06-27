import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import Scales from "@/components/scales";
import { Subheading } from "@/components/subheading";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>Contact Me</Heading>
        <Subheading>
          I am open to freelancing offers. Reach out to me if you have a project
          in mind or just want to say hello!
        </Subheading>
        <ContactForm />
      </Container>
    </div>
  );
}
