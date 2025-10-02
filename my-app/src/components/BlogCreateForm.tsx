"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

type BlogCreateFormProps = {
  onSuccess?: () => void;
};

export default function BlogCreateForm({ onSuccess }: BlogCreateFormProps) {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.from("posts").insert([
      {
        title,
        slug,
        content,
        excerpt,
        author,
        tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      },
    ]);
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setTitle("");
      setSlug("");
      setContent("");
      setExcerpt("");
      setAuthor("");
      setTags("");
      if (onSuccess) onSuccess();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-2xl font-bold mb-2">Create New Blog Post</h2>
      {error && <div className="text-red-600">{error}</div>}
      <input
        className="w-full border px-3 py-2 rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        className="w-full border px-3 py-2 rounded"
        placeholder="Slug (unique, e.g. my-first-post)"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        required
      />
      <textarea
        className="w-full border px-3 py-2 rounded"
        placeholder="Content (HTML allowed)"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={6}
        required
      />
      <input
        className="w-full border px-3 py-2 rounded"
        placeholder="Excerpt (optional)"
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
      />
      <input
        className="w-full border px-3 py-2 rounded"
        placeholder="Author (optional)"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        className="w-full border px-3 py-2 rounded"
        placeholder="Tags (comma separated, optional)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
        disabled={loading}
      >
        {loading ? "Creating..." : "Create Post"}
      </button>
    </form>
  );
}
