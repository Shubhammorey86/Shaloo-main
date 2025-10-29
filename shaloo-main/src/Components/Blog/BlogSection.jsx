import React, { useState } from 'react';
import BlogListing from './BlogListing';
import BlogPost from './BlogPost';

// ============ MAIN BLOG SECTION COMPONENT ============
const BlogSection = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  React.useEffect(() => {
    if (selectedBlog) {
      // When a blog is selected, scroll to the blog section instead of top of page
      const blogSection = document.getElementById('blog');
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedBlog]);

  return (
    <div id="blog" className="font-urbanist">
      {selectedBlog ? (
        <BlogPost blog={selectedBlog} onBack={() => setSelectedBlog(null)} />
      ) : (
        <BlogListing onSelectBlog={setSelectedBlog} />
      )}
    </div>
  );
};

export default BlogSection;
