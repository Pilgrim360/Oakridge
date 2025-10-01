"use client";
import BlogCreateForm from '@/components/BlogCreateForm';
import { useState } from 'react';

export default function NewBlogPage() {
  const [success, setSuccess] = useState(false);

  return (
    <div className="container mx-auto py-8">
      {success ? (
        <div className="card text-card-text p-4 rounded mb-6 text-center font-semibold">
          Blog post created successfully!
        </div>
      ) : null}
      <div className="card p-6">
        <BlogCreateForm onSuccess={() => setSuccess(true)} />
      </div>
    </div>
  );
}
