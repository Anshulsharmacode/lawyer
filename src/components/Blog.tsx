import { useEffect, useState } from 'react';

// Define types for the blog post data
interface Post {
  guid: string;
  title: string;
  link: string;
  pubDate: string;
  enclosure: {
    link: string;
    type: string;
  };
}

function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Replace with your Medium RSS feed URL and API key from rss2json
    const rssFeedUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@anshulsharma8386';

    fetch(rssFeedUrl)
      .then(response => response.json())
      .then((data: { items: Post[] }) => {
        setPosts(data.items);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading blog posts.</div>;

  return (
    <div className="min-h-screen w-screen mt-14 bg-gray-100 text-gray-900 flex flex-col justify-center items-center px-6 md:px-20 lg:px-40 py-16 space-y-12">
      {/* Section Title */}
      <h2 className="text-5xl font-bold mb-8 text-gray-800 animate-fade-in">Blog</h2>

      {/* Blog Posts */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <a key={post.guid} href={post.link} target="_blank" rel="noopener noreferrer">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
              <img
               
                alt={post.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Blog Link */}
      <div className="flex flex-col items-center">
        <a
          href="https://medium.com/@adv.mkvaidya"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          Visit My Medium Blog
        </a>
        <p className="text-gray-600 mt-2">
          Stay updated with my latest posts and articles on Medium.
        </p>
      </div>
    </div>
  );
}

export default Blog;