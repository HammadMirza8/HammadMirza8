"use client";

import { useState } from "react";
import { X } from "lucide-react";

const artworks = [
  {
    id: 1,
    title: "Sunset Dreams",
    category: "Digital Art",
    color: "from-orange-500 to-pink-500",
  },
  {
    id: 2,
    title: "Ocean Depths",
    category: "Illustration",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Forest Whispers",
    category: "Digital Art",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Urban Nights",
    category: "Photography",
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: 5,
    title: "Abstract Flow",
    category: "Abstract",
    color: "from-rose-500 to-orange-500",
  },
  {
    id: 6,
    title: "Mountain Serenity",
    category: "Landscape",
    color: "from-slate-500 to-blue-500",
  },
  {
    id: 7,
    title: "Neon Reflections",
    category: "Digital Art",
    color: "from-fuchsia-500 to-cyan-500",
  },
  {
    id: 8,
    title: "Golden Hour",
    category: "Photography",
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: 9,
    title: "Cosmic Journey",
    category: "Abstract",
    color: "from-violet-500 to-purple-500",
  },
];

const categories = [
  "All",
  "Digital Art",
  "Illustration",
  "Photography",
  "Abstract",
  "Landscape",
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null);

  const filteredArtworks =
    selectedCategory === "All"
      ? artworks
      : artworks.filter((art) => art.category === selectedCategory);

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Portfolio
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Art Gallery
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            A visual journey through artwork, illustrations, and creative pieces
            that capture moments, emotions, and imagination.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                category === selectedCategory
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArtworks.map((artwork) => (
            <button
              key={artwork.id}
              onClick={() => setSelectedArtwork(artwork)}
              className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${artwork.color} opacity-80 transition-opacity group-hover:opacity-100`}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 transition-opacity group-hover:opacity-100">
                <h3 className="text-xl font-semibold text-white">
                  {artwork.title}
                </h3>
                <p className="mt-2 text-sm text-white/80">{artwork.category}</p>
              </div>
              <div className="absolute bottom-4 left-4 right-4 transition-opacity group-hover:opacity-0">
                <h3 className="text-lg font-semibold text-white">
                  {artwork.title}
                </h3>
                <p className="text-sm text-white/70">{artwork.category}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Modal */}
        {selectedArtwork && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-6 backdrop-blur-sm"
            onClick={() => setSelectedArtwork(null)}
          >
            <div
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl border border-border bg-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedArtwork(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 text-foreground transition-colors hover:bg-background"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              <div
                className={`aspect-video w-full bg-gradient-to-br ${selectedArtwork.color}`}
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-foreground">
                  {selectedArtwork.title}
                </h2>
                <p className="mt-2 text-muted-foreground">
                  {selectedArtwork.category}
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  This artwork represents a creative exploration of color, form,
                  and emotion. Each piece is crafted with attention to detail
                  and artistic expression.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
