import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Linkedin, Facebook, Twitter } from 'lucide-react';
import SchemaMarkup from './SchemaMarkup';
import { blogData } from './BlogData';

// ============ MAIN BLOG LISTING COMPONENT ============
const BlogListing = ({ onSelectBlog }) => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      <SchemaMarkup type="person" />
      <SchemaMarkup type="organization" />
      <SchemaMarkup 
        type="breadcrumb" 
        data={[
          { name: "Home", url: "https://www.vaibhavsetiya.com/" },
          { name: "Blog", url: "https://www.vaibhavsetiya.com/blog" }
        ]}
      />
      
      <div className="min-h-screen bg-[#FAFAFC] font-urbanist">
        {/* Hero Section */}
        <section className="bg-black text-white py-20 px-5">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Insights & Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Discover the journey, philosophy, and vision behind Vaibhav Setiya and Treÿsta
            </p>
          </motion.div>
        </section>

        {/* Blog Grid */}
        <section className="max-w-7xl mx-auto px-5 py-16">
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {blogData.map((blog) => (
              <motion.article
                key={blog.id}
                variants={cardVariants}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
                onClick={() => onSelectBlog(blog)}
              >
                <div className="h-64 bg-black relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                        {blog.category}
                      </span>
                      <h2 className="text-2xl font-bold group-hover:scale-105 transition-transform duration-300">
                        {blog.title}
                      </h2>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
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
                  
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  <button className="text-black font-semibold hover:text-gray-800 flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Full Story
                    <span className="text-xl">→</span>
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* About Section */}
        <section className="bg-white py-16 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                About Vaibhav Setiya
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Founder of Treÿsta | Building Trust, Creating Wealth & Empowering Clients
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a 
                  href="https://www.linkedin.com/in/vaibhav-setiyaa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a 
                  href="https://www.instagram.com/vaibhav.treysta/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
                >
                  Instagram
                </a>
                <a 
                  href="https://youtube.com/@vaibhavtreysta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  YouTube
                </a>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-black mb-2">AED 500M+</div>
                  <div className="text-gray-600">Closed Transactions</div>
                </div>
                <div className="p-6 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-black mb-2">AED 70M+</div>
                  <div className="text-gray-600">Managed Portfolios</div>
                </div>
                <div className="p-6 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-black mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogListing;
