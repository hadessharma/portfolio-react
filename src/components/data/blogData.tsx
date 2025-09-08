// Re-export from the dynamic loader
export { loadBlogPosts as blogPosts, getBlogPostBySlug, getAllTags } from '../../utils/blogLoader';

// Export the interface for type safety
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  readTime: string;
  author: string;
  slug: string;
}
