"use client";
import BlogCreateForm from '@/components/BlogCreateForm';
import { useState } from 'react';

export default function NewBlogPage() {
  const [success, setSuccess] = useState(false);

  return (
    <div className="container mx-auto py-8">
      {success ? (
        <div className="bg-green-100 text-green-800 p-4 rounded mb-6 text-center font-semibold">
          Blog post created successfully!
        </div>
      ) : null}
      <BlogCreateForm onSuccess={() => setSuccess(true)} />
    </div>
  );
}
