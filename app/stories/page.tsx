"use client";

import { useState } from "react";
import { Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const stories = [
  {
    id: 1,
    title: "The Last Lighthouse Keeper",
    excerpt:
      "On a remote island where the sea meets the sky, an old keeper tends to a beacon that has guided sailors for centuries. But tonight, something different approaches from the horizon...",
    category: "Fiction",
    readTime: "8 min read",
    date: "Mar 15, 2026",
  },
  {
    id: 2,
    title: "Echoes of Tomorrow",
    excerpt:
      "In a world where memories can be traded like currency, Maya discovers a forgotten memory that could change everything she knows about her past.",
    category: "Sci-Fi",
    readTime: "12 min read",
    date: "Mar 10, 2026",
  },
  {
    id: 3,
    title: "The Garden Between Worlds",
    excerpt:
      "Between the cracks of reality lies a garden where lost things go. When eleven-year-old Sam stumbles upon it, she finds more than just forgotten toys.",
    category: "Fantasy",
    readTime: "15 min read",
    date: "Mar 5, 2026",
  },
  {
    id: 4,
    title: "Coffee at Midnight",
    excerpt:
      "A chance encounter at a 24-hour diner leads two strangers to share stories they have never told anyone else. Sometimes the best conversations happen with people you will never see again.",
    category: "Drama",
    readTime: "6 min read",
    date: "Feb 28, 2026",
  },
  {
    id: 5,
    title: "The Algorithm of Love",
    excerpt:
      "When a dating app gains sentience, it must decide: should it match people for maximum compatibility, or give them what they truly need?",
    category: "Sci-Fi",
    readTime: "10 min read",
    date: "Feb 20, 2026",
  },
  {
    id: 6,
    title: "Letters Never Sent",
    excerpt:
      "A collection of letters written but never mailed, found in an antique desk, reveals a love story that spans decades and two world wars.",
    category: "Historical",
    readTime: "20 min read",
    date: "Feb 14, 2026",
  },
];

const categories = ["All", "Fiction", "Sci-Fi", "Fantasy", "Drama", "Historical"];

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
            exploring imagination, from me.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => (
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
