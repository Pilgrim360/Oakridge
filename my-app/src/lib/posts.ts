import { supabase } from '../../lib/supabaseClient';

export async function getPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('id, title, slug, excerpt, author, tags, created_at')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function getPost(slug: string) {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) throw error;
  return data;
}
