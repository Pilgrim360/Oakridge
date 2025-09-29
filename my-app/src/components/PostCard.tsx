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
      <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-500">{post.date}</p>
      </div>
    </Link>
  );
}