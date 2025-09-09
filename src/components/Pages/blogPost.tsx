import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogPostBySlug } from "../../utils/blogLoader";
import Navbar from "../Navbar/navbar";

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getBlogPostBySlug(slug) : null;

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-900 pt-20 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-400 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl transition-colors duration-300"
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
            Back to Blog
          </button>
        </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300"
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
            Back to Blog
          </button>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium bg-cyan-400/10 text-cyan-400 rounded-full border border-cyan-400/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
            <div className="flex items-center">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </div>
            <span>•</span>
            <div className="flex items-center">
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {post.readTime}
            </div>
            <span>•</span>
            <div className="flex items-center">
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              {post.author}
            </div>
          </div>

          {/* Excerpt */}
          <p className="text-xl text-gray-400 leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Article Content */}
        <article className="prose prose-base prose-invert max-w-none">
          <div 
            className="text-gray-400 leading-relaxed text-sm font-light"
            dangerouslySetInnerHTML={{ 
              __html: post.content
                .replace(/^# /gm, '<h1 class="text-3xl font-bold text-gray-100 mb-6 mt-8">')
                .replace(/^## /gm, '<h2 class="text-xl font-semibold text-gray-100 mb-4 mt-6">')
                .replace(/^### /gm, '<h3 class="text-lg font-medium text-gray-100 mb-3 mt-5">')
                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-200 font-medium">$1</strong>')
                .replace(/\*(.*?)\*/g, '<em class="text-gray-400">$1</em>')
                .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-gray-800 border border-gray-700 rounded-lg p-4 my-6 overflow-x-auto"><code class="text-cyan-400">$2</code></pre>')
                .replace(/`(.*?)`/g, '<code class="bg-gray-800 text-cyan-400 px-2 py-1 rounded">$1</code>')
                .replace(/\n\n/g, '</p><p class="mb-3 text-sm font-light leading-relaxed">')
                .replace(/^(.+)$/gm, '<p class="mb-3 text-sm font-light leading-relaxed">$1</p>')
                .replace(/^- (.+)$/gm, '<li class="mb-2 text-sm font-light">$1</li>')
                .replace(/(<li.*<\/li>)/s, '<ul class="list-disc list-inside mb-6 space-y-2">$1</ul>')
            }}
          />
        </article>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate("/blog")}
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
              All Posts
            </button>
            
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl transition-colors duration-300"
            >
              Portfolio
              <svg
                className="w-5 h-5 ml-2"
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
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default BlogPost;
