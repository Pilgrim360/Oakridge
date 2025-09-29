const posts = [
  {
    slug: 'first-post',
    title: 'My First Blog Post',
    date: '2024-01-01',
    content: '<p>This is the content of my first blog post. I hope you enjoy it!</p>',
  },
  {
    slug: 'second-post',
    title: 'My Second Blog Post',
    date: '2024-01-02',
    content: '<p>This is the content of my second blog post. I am getting the hang of this!</p>',
  },
];

export async function getPosts() {
  return posts;
}

export async function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}