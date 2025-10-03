import { getPost } from '../../../lib/posts';
import SectionWrapper from '../../../components/SectionWrapper';

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <SectionWrapper>
      <h1 className="text-4xl font-bold mb-4 text-brand-primary">{post.title}</h1>
      <p className="text-brand-slate mb-8">{post.date}</p>
      <div
        className="prose lg:prose-xl prose-headings:text-brand-primary prose-p:text-brand-charcoal prose-a:text-brand-primary"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </SectionWrapper>
  );
}