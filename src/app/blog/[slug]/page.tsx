import { Container } from "@/components/container";
import Scales from "@/components/scales";
import { getBlogFrontMatter, getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";
import Image from "next/image";

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

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        {frontmatter.image && (
          <Image
            src={frontmatter.image}
            alt={frontmatter.title || "Blog post image"}
            width={672} // max-w-2xl is typically 672px
            height={384} // max-h-96 is typically 384px
            className="mx-auto mb-20 max-h-96 w-full max-w-2xl rounded-2xl object-cover shadow-xl"
            priority // Add this since it's likely above the fold
          />
        )}
        <div className="prose mx-auto">{content}</div>
      </Container>
    </div>
  );
}
