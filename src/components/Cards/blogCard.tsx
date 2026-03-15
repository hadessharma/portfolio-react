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
      className="paper-card paper-interactive-lift p-6 hover:border-paper-accent/50 cursor-pointer group"
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-medium bg-paper-accentSoft text-paper-accentDeep rounded-full border border-paper-accent/30"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-paper-ink mb-3 group-hover:text-paper-accent transition-colors duration-300">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-paper-muted mb-4 leading-relaxed">
        {post.excerpt}
      </p>

      {/* Meta Information */}
      <div className="flex items-center justify-between text-sm text-paper-muted">
        <div className="flex items-center gap-4">
          <span>{new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <div className="flex items-center text-paper-accent/80 group-hover:text-paper-accent transition-colors duration-300">
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
