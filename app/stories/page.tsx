"use client";

import { useState } from "react";
import { Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { stories, storyCategories } from "@/constants/data";

export default function StoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredStories =
    selectedCategory === "All"
      ? stories
      : stories.filter((story) => story.category === selectedCategory);

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Creative Writing
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Stories
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A collection of creative writing, short stories, and narratives
            exploring imagination, emotion, and the human experience.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12 flex flex-wrap gap-3">
          {storyCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                category === selectedCategory
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:bg-white/10 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredStories.map((story) => (
            <article
              key={story.id}
              className="group glass glow rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-foreground">
                  {story.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {story.date}
                </span>
              </div>
              <h2 className="mb-3 text-xl font-semibold text-foreground group-hover:text-foreground/90">
                {story.title}
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed line-clamp-3">
                {story.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock size={14} />
                  {story.readTime}
                </div>
                <Link
                  href={`/stories/${story.id}`}
                  className="flex items-center gap-1 text-sm font-medium text-foreground transition-transform group-hover:translate-x-0.5"
                >
                  Read 
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="rounded-full border border-border px-8 py-4 text-sm font-medium text-foreground transition-all hover:bg-muted hover:border-white/20">
            Load More Stories
          </button>
        </div>
      </div>
    </div>
  );
}
