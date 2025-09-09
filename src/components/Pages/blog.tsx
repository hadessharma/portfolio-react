import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BlogPost, getAllTags } from "../data/blogData";
import { loadBlogPosts } from "../../utils/blogLoader";
import BlogCard from "../Cards/blogCard";
import Navbar from "../Navbar/navbar";

const Blog: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);

  useEffect(() => {
    // Load blog posts dynamically
    const posts = loadBlogPosts();
    setBlogPosts(posts);
    setAllTags(getAllTags());
  }, []);


  const filteredPosts = selectedTag
    ? blogPosts.filter(post => post.tags.includes(selectedTag))
    : blogPosts;

  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  const handleTagFilter = (tag: string | null) => {
    setSelectedTag(tag);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-6">
            My Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sharing insights about technology, development, and the latest trends in software engineering.
          </p>
        </div>

        {/* Tag Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => handleTagFilter(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedTag === null
                  ? "bg-cyan-400 text-gray-900"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-cyan-400 border border-gray-700"
              }`}
            >
              All Posts
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedTag === tag
                    ? "bg-cyan-400 text-gray-900"
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-cyan-400 border border-gray-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              onClick={() => handlePostClick(post.slug)}
            />
          ))}
        </div>

        {/* No posts message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">
              No posts found for the selected tag.
            </p>
          </div>
        )}

        {/* Back to Portfolio */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Portfolio
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Blog;
