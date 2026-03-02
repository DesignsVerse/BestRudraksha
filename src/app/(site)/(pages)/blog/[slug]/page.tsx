import { Metadata } from 'next';
import blogData from '@/data/blogData.json';
import { getBlogSEO, getBlogStructuredData } from '@/lib/seo';
import BlogDetailsWithSidebar from './blog-content';
import { getSiteUrl } from '@/lib/site';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogData.find((b) => b.slug === slug);
  const siteUrl = getSiteUrl();

  if (!blog) {
    return {
      title: 'Blog Post Not Found | BestRudraksha.com',
      description: 'The requested blog post could not be found.',
    };
  }

  const seoData = getBlogSEO(blog);
  const excerpt = blog.sections?.[0]?.content?.substring(0, 150) || seoData.description;
  const url = `${siteUrl}/blog/${slug}`;

  return {
    title: seoData.title,
    description: excerpt,
    keywords: blog.tags?.join(', ') || 'rudraksha, spiritual, meditation',
    openGraph: {
      title: blog.title,
      description: excerpt,
      url,
      siteName: 'BestRudraksha.com',
      images: blog.img ? [
        {
          url: `${siteUrl}${blog.img}`,
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
      images: blog.img ? [`${siteUrl}${blog.img}`] : [],
    },
    alternates: {
      canonical: url,
    },
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
}

const BlogPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const blog = blogData.find((b) => b.slug === slug);
  const structuredData = blog ? getBlogStructuredData(blog) : null;

  return (
    <>
      <BlogDetailsWithSidebar />
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </>
  );
};

export default BlogPage;
