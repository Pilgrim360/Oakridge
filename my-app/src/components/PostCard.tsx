import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
  date: string;
}

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="bg-white border border-brand-light-steel rounded-lg p-4 hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-bold mb-2 text-brand-primary">{post.title}</h2>
        <p className="text-brand-slate">{post.date}</p>
      </div>
    </Link>
  );
}