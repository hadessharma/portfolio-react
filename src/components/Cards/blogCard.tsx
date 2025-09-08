import React from "react";
import { BlogPost } from "../data/blogData";

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-800/70 cursor-pointer hover:transform hover:scale-105 group"
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/20"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-100 mb-3 group-hover:text-cyan-400 transition-colors duration-300">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-gray-400 mb-4 leading-relaxed">
        {post.excerpt}
      </p>

      {/* Meta Information */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-4">
          <span>{new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <div className="flex items-center text-cyan-400/80 group-hover:text-cyan-400 transition-colors duration-300">
          <span className="text-sm font-medium">Read more</span>
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
