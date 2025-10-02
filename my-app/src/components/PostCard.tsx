import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
  date: string;
}

interface PostCardProps {
  post: Post;
}

function formatDate(iso?: string) {
  if (!iso) return '';
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return iso;
  }
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow bg-white">
        <h2 className="text-2xl font-bold mb-2 text-gray-900">{post.title}</h2>
        <p className="text-gray-600">{formatDate(post.date)}</p>
      </div>
    </Link>
  );
}