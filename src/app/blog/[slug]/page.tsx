import { Container } from "@/components/container";
import Scales from "@/components/scales";
import { getBlogFrontMatter, getSingleBlog } from "@/utils/mdx";
import Image from "next/image";
import { redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const frontmatter = await getBlogFrontMatter(slug);
  if (!frontmatter) {
    return {
      title: "Blog Not Found - Ayush Deshmukh",
    };
  }

  return {
    title: frontmatter.title + " by Ayush Deshmukh" || "Blog - Ayush Deshmukh",
    description:
      frontmatter.description + " by Ayush Deshmukh" ||
      "Blog by Ayush Deshmukh",
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect(`/blog`);
  }

  const { content, frontmatter } = blog;

  // console.log(frontmatter);

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <img
          src={frontmatter.image}
          alt={frontmatter.title}
          className="mx-auto mb-20 max-h-96 w-full max-w-2xl rounded-2xl object-cover shadow-xl"
        />
        <div className="prose mx-auto">{content}</div>
      </Container>
    </div>
  );
}
