"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

// Define types for the blog post data
interface Post {
  guid: string;
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  description: string;
}

interface ApiResponse {
  items: Post[];
}

function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Replace with your Medium RSS feed URL and API key from rss2json
    const rssFeedUrl =
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@adv.mkvaidya&api_key=YOUR_API_KEY";

    fetch(rssFeedUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: ApiResponse) => {
        if (data.items && data.items.length > 0) {
          setPosts(data.items);
        } else {
          setError("No blog posts found.");
        }
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="bg-color-2 text-color-3">Loading...</div>;
  if (error)
    return (
      <div className="bg-color-2 text-color-3">
        Error loading blog posts: {error}
      </div>
    );

  return (
    <div
      className={`min-h-screen w-full mt-14 bg-color-2 text-color-3 flex flex-col justify-center items-center px-6 md:px-20 lg:px-40 py-16 space-y-12 ${montserrat.className}`}
    >
      {/* Section Title */}
      <h2 className="text-5xl font-bold mb-8 text-color-5 animate-fade-in">
        Blog
      </h2>

      {/* Blog Posts */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <a
              key={post.guid}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-color-1 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                {/* Check if thumbnail URL is valid */}
                {post.thumbnail && (
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-color-5">
                    {post.title}
                  </h3>
                  <p className="text-color-3 mt-2">
                    {post.description.slice(0, 100)}...
                  </p>
                </div>
              </div>
            </a>
          ))
        ) : (
          <div className="text-color-3">No blog posts available.</div>
        )}
      </div>

      {/* Blog Link */}
      <div className="flex flex-col items-center">
        <a
          href="https://medium.com/@adv.mkvaidya"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-color-5 hover:text-color-4 transition-colors duration-300"
        >
          Visit My Medium Blog
        </a>
        <p className="text-color-3 mt-2">
          Stay updated with my latest posts and articles on Medium.
        </p>
      </div>
    </div>
  );
}

export default Blog;
