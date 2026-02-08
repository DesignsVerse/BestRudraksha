import { Metadata } from 'next';
import blogData from '@/data/blogData.json';
import { getBlogSEO } from '@/lib/seo';
import BlogDetailsWithSidebar from './blog-content';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return {
      title: 'Blog Post Not Found | BestRudraksha.com',
      description: 'The requested blog post could not be found.',
    };
  }

  const seoData = getBlogSEO(blog);
  const excerpt = blog.sections?.[0]?.content?.substring(0, 150) || seoData.description;

  return {
    title: seoData.title,
    description: excerpt,
    keywords: blog.tags?.join(', ') || 'rudraksha, spiritual, meditation',
    openGraph: {
      title: blog.title,
      description: excerpt,
      url: `https://www.bestrudraksha.com/blog/${slug}`,
      siteName: 'BestRudraksha.com',
      images: blog.img ? [
        {
          url: `https://www.bestrudraksha.com${blog.img}`,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ] : [],
      type: 'article',
      publishedTime: blog.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: excerpt,
    },
    alternates: {
      canonical: `https://www.bestrudraksha.com/blog/${slug}`,
    },
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
}

const BlogPage = ({ params }: PageProps) => {
  return <BlogDetailsWithSidebar />;
};

export default BlogPage;
