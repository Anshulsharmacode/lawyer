import { useState, useEffect } from 'react';
import Parser from 'rss-parser';

const useMediumPosts = (username, limit = 6) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const parser = new Parser();
      try {
        const feed = await parser.parseURL(`https://medium.com/feed/@${username}`);
        const blogPosts = feed.items.slice(0, limit).map((item) => ({
          title: item.title || "No title available",
          subtitle: item.contentSnippet
            ? item.contentSnippet.slice(0, 100) + "..."
            : "No subtitle available",
          thumbnail: item['content:encoded']
            ? item['content:encoded'].match(/<img[^>]+src="?([^"\s]+)"?\s*\/?>/)?.[1] || "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
            : "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
          link: item.link || "#",
          pubDate: item.pubDate || "No date available",
        }));
        setPosts(blogPosts);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [username, limit]);

  return { posts, isLoading, error };
};

export default useMediumPosts;