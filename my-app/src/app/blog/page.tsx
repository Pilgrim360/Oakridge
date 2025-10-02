import { getPosts } from '../../lib/posts';
import PostCard from '../../components/PostCard';

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-8 bg-brand-silver">
      <h1 className="text-4xl font-bold mb-8 text-brand-primary">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={{ ...post, date: post.created_at }} />
        ))}
      </div>
    </div>
  );
}