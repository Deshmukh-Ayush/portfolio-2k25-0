import { Container } from "@/components/container";
import { Heading } from "@/components/heading";
import Scales from "@/components/scales";
import { getBlogs, BlogListItem } from "@/utils/mdx";
import { Metadata } from "next";
import { Link } from "next-view-transitions";

const metaData: Metadata = {
  title: "All Blogs - Ayush Deshmukh",
  description:
    "All blogs by Ayush Deshmukh, a software engineer with a passion for building scalable and efficient systems.",
};

export default async function BlogsPage() {
  const allBlogs: BlogListItem[] = await getBlogs();
  // console.log("all blogs", allBlogs);

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>All Blogs</Heading>
        <div className="flex flex-col gap-8 px-4 py-10">
          {allBlogs.map((blog, idx) => (
            <Link key={blog.title} href={`/blog/${blog.slug}`}>
              <div className="flex items-center justify-between">
                <h2 className="text-primary text-base font-bold tracking-tight">
                  {blog.title}
                </h2>
                <p className="text-secondary text-sm md:text-sm">
                  {new Date(blog.date).toLocaleDateString("en-us", {
                    weekday: "long",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
              {blog.description && (
                <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
                  {truncate(blog.description || "", 150)}
                </p>
              )}
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
