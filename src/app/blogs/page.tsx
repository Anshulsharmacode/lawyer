"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import useMediumPosts from "@/app/Hooks/hooks";

interface BlogPost {
  thumbnail: string;
  title: string;
  subtitle: string;
  pubDate: string;
  link: string;
}

const BlogShowcase: React.FC = () => {
  const { posts: blogPosts, isLoading, error } = useMediumPosts("adv.mkvaidya", 6);

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

        {isLoading && (
          <div className="text-center text-xl">Loading blog posts...</div>
        )}

        {error && (
          <div className="text-center text-xl text-red-500">{error}</div>
        )}

        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post: BlogPost, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="relative w-full h-48">
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
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
                        className="font-montserrat transition-transform transform hover:bg-blue-500 hover:text-white hover:scale-105"
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
