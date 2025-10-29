import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Facebook, Twitter } from 'lucide-react';
import SchemaMarkup from './SchemaMarkup';

// ============ INDIVIDUAL BLOG POST COMPONENT ============
const BlogPost = ({ blog, onBack }) => {
    const shareUrl = `https://www.vaibhavsetiya.com/blog/${blog.slug}`;
    
    const handleShare = (platform) => {
      const urls = {
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(blog.title)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
      };
      
      window.open(urls[platform], '_blank', 'width=600,height=400');
    };
  
    return (
      <>
        <SchemaMarkup type="article" data={blog} />
        <SchemaMarkup 
          type="breadcrumb" 
          data={[
            { name: "Home", url: "https://www.vaibhavsetiya.com/" },
            { name: "Blog", url: "https://www.vaibhavsetiya.com/blog" },
            { name: blog.title, url: `https://www.vaibhavsetiya.com/blog/${blog.slug}` }
          ]}
        />
        
        <div className="min-h-screen bg-white font-urbanist">
        {/* Header */}
        <header className="bg-black text-white py-8 px-5 sticky top-0 z-50 shadow-lg">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
              <button
                onClick={onBack}
                className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to Blog</span>
              </button>
              
              <div className="flex items-center gap-3">
                <span className="text-sm mr-2">Share:</span>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </button>
              </div>
            </div>
          </header>
  
          {/* Article Header */}
          <motion.article 
            className="max-w-4xl mx-auto px-5 py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-gray-100 text-black rounded-full text-sm font-medium mb-4">
                {blog.category}
              </span>
              
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                {blog.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6">
                {blog.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold">
                    VS
                  </div>
                  <div>
                    <div className="font-semibold text-black">Vaibhav Setiya</div>
                    <div className="text-xs">Founder, Treÿsta</div>
                  </div>
                </div>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(blog.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {blog.readTime}
                </span>
              </div>
            </div>
  
            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none
                prose-headings:text-black prose-headings:font-bold
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-ul:my-6 prose-li:text-gray-700 prose-li:my-2
                prose-strong:text-black prose-strong:font-semibold"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
  
            {/* Author CTA */}
            <div className="mt-16 p-8 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  VS
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Connect with Vaibhav Setiya
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Interested in Dubai real estate investment? Let's discuss how we can help you build wealth through strategic property investments.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <a 
                      href="https://www.linkedin.com/in/vaibhav-setiyaa/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                    <a 
                      href="https://www.treysta.ae/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                    >
                      Visit Treÿsta
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </>
    );
};

export default BlogPost;