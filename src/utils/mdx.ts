import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

export interface BlogFrontmatter {
  title: string;
  description?: string;
  image?: string;
  author?: string;
  date: string;
}

export interface BlogListItem {
  slug: string;
  title: string;
  description?: string;
  image?: string;
  author?: string;
  date: string;
}

export const getSingleBlog = async (slug: string) => {
  try {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), "src/data", `${slug}.mdx`),
      "utf-8",
    );

    if (!singleBlog) {
      return null;
    }

    const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    });
    return { content, frontmatter };
  } catch (error) {
    console.error(`Error reading blog file for slug ----> ${slug}`, error);
    return null;
  }
};

export const getBlogs = async (): Promise<BlogListItem[]> => {
  const files = await fs.readdir(path.join(process.cwd(), "src/data"));

  const allBlogs = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const frontmatter = await getBlogFrontMatter(slug);

      if (!frontmatter) {
        return null;
      }

      return { slug, ...frontmatter };
    }),
  );

  return allBlogs.filter((blog): blog is BlogListItem => blog !== null);
};

export const getBlogFrontMatter = async (
  slug: string,
): Promise<BlogFrontmatter | null> => {
  try {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), "src/data", `${slug}.mdx`),
      "utf-8",
    );

    if (!singleBlog) {
      return null;
    }

    const { frontmatter } = await compileMDX<BlogFrontmatter>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    });

    return frontmatter;
  } catch (error) {
    console.error(`Error reading frontmatter for slug ----> ${slug}`, error);
    return null;
  }
};
