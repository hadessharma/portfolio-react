import { BlogPost } from '../components/data/blogData';

// Dynamic imports for blog content
const importMetadata = import.meta.glob('/src/content/blog/*/metadata.json', { eager: true });
const importContent = import.meta.glob('/src/content/blog/*/post.md', { query: '?raw', import: 'default', eager: true });

// Function to extract slug from file path
const extractSlug = (path: string): string => {
  const match = path.match(/\/blog\/([^\/]+)\//);
  return match ? match[1] : '';
};

// Load all blog posts dynamically
export const loadBlogPosts = (): BlogPost[] => {
  const posts: BlogPost[] = [];

  // Process each metadata file
  Object.keys(importMetadata).forEach(metadataPath => {
    const slug = extractSlug(metadataPath);
    if (!slug) return;

    // Get metadata
    const metadata = (importMetadata[metadataPath] as any).default;
    
    // Get corresponding content
    const contentPath = metadataPath.replace('metadata.json', 'post.md');
    const content = importContent[contentPath] || '';

    // Create blog post object
    const post: BlogPost = {
      ...metadata,
      content: content || `# ${metadata.title}\n\n*Content will be added soon...*`,
      slug: slug
    };

    posts.push(post);
  });

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Function to get a specific blog post by slug
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  const posts = loadBlogPosts();
  return posts.find(post => post.slug === slug);
};

// Function to get all unique tags
export const getAllTags = (): string[] => {
  const posts = loadBlogPosts();
  const allTags = posts.flatMap(post => post.tags);
  return Array.from(new Set(allTags));
};
