"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const parser = new Parser();
      try {
        const feed = await parser.parseURL(
          "https://medium.com/feed/@yogendramanawat"
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
            : "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
          link: item.link || "#",
          pubDate: item.pubDate || "No date available",
        }));
        setBlogPosts(posts as BlogPost[]);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <section className="py-48 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-16 text-center font-raleway"
        >
          Latest Blog Posts
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="rounded-t-lg object-cover w-full h-48"
                  />
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardTitle className="text-xl mb-2 font-raleway">
                    {post.title}
                  </CardTitle>
                  <p className="text-muted-foreground mb-4 font-montserrat flex-grow">
                    {post.subtitle}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.pubDate).toLocaleDateString()}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      className="font-montserrat transition-transform transform hover:bg-blue-500 hover:text-white hover:scale-105" // Added scale effect for a bottom-up animation
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
      </div>
    </section>
  );
};

export default BlogShowcase;
