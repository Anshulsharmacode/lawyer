"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Parser from "rss-parser";

interface BlogPost {
  title: string;
  subtitle: string;
  thumbnail: string;
  link: string;
  pubDate: string;
}

const BlogShowcase: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const parser = new Parser();
      try {
        const feed = await parser.parseURL(
          "https://medium.com/@adv.mkvaidya"
        );
        const posts = feed.items.slice(0, 6).map((item) => ({
          title: item.title || "No title available",
          subtitle: item.contentSnippet
            ? item.contentSnippet.slice(0, 100) + "..."
            : item["content:encodedSnippet"]
            ? item["content:encodedSnippet"].slice(0, 100) + "..."
            : "No subtitle available",
          thumbnail: item["content:encoded"]
            ? item["content:encoded"].match(
                /<img[^>]+src="?([^"\s]+)"?\s*\/?>/
              )?.[1]
            : "/placeholder-image.jpg",
          link: item.link || "#",
          pubDate: item.pubDate || "No date available",
        }));
        setBlogPosts(posts as BlogPost[]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setError("Failed to load blog posts. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <section className="w-full py-24 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-white">Latest</span> <span className="text-red-600">Blog Posts</span>
        </motion.h2>

        {isLoading && (
          <div className="text-center text-xl">Loading blog posts...</div>
        )}

        {error && (
          <div className="text-center text-xl text-red-500">{error}</div>
        )}

        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white text-black shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
                  <CardHeader className="p-0">
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl mb-2 font-semibold">
                      {post.title}
                    </CardTitle>
                    <p className="text-gray-600 mb-4 text-sm">
                      {post.subtitle}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {new Date(post.pubDate).toLocaleDateString()}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="font-semibold transition-all duration-300 hover:bg-red-600 hover:text-white"
                        onClick={() => window.open(post.link, "_blank")}
                      >
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogShowcase;
