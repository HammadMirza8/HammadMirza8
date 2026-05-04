"use client";

import { useState } from "react";
import { X } from "lucide-react";

const artworks = [
  {
    id: 1,
    title: "Sunset Dreams",
    category: "Digital Art",
    color: "from-orange-500/80 to-pink-500/80",
  },
  {
    id: 2,
    title: "Ocean Depths",
    category: "Illustration",
    color: "from-blue-500/80 to-cyan-500/80",
  },
  {
    id: 3,
    title: "Forest Whispers",
    category: "Digital Art",
    color: "from-green-500/80 to-emerald-500/80",
  },
  {
    id: 4,
    title: "Urban Nights",
    category: "Photography",
    color: "from-purple-500/80 to-indigo-500/80",
  },
  {
    id: 5,
    title: "Abstract Flow",
    category: "Abstract",
    color: "from-rose-500/80 to-orange-500/80",
  },
  {
    id: 6,
    title: "Mountain Serenity",
    category: "Landscape",
    color: "from-slate-500/80 to-blue-500/80",
  },
  {
    id: 7,
    title: "Neon Reflections",
    category: "Digital Art",
    color: "from-fuchsia-500/80 to-cyan-500/80",
  },
  {
    id: 8,
    title: "Golden Hour",
    category: "Photography",
    color: "from-amber-500/80 to-yellow-500/80",
  },
  {
    id: 9,
    title: "Cosmic Journey",
    category: "Abstract",
    color: "from-violet-500/80 to-purple-500/80",
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
    <div className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Visual Portfolio
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Art Gallery
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
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

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArtworks.map((artwork) => (
            <button
              key={artwork.id}
              onClick={() => setSelectedArtwork(artwork)}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl glass glow transition-all duration-300 hover:border-white/20"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${artwork.color} opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105`}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                <h3 className="text-2xl font-semibold text-white">
                  {artwork.title}
                </h3>
                <p className="mt-2 text-sm text-white/80">{artwork.category}</p>
              </div>
              <div className="absolute bottom-6 left-6 right-6 transition-all duration-300 group-hover:opacity-0">
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-6 backdrop-blur-xl"
            onClick={() => setSelectedArtwork(null)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl glass"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedArtwork(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2.5 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              <div
                className={`aspect-video w-full bg-gradient-to-br ${selectedArtwork.color}`}
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-foreground">
                  {selectedArtwork.title}
                </h2>
                <p className="mt-2 text-muted-foreground">
                  {selectedArtwork.category}
                </p>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  This artwork represents a creative exploration of color, form,
                  and emotion. Each piece is crafted with attention to detail
                  and artistic expression, capturing unique moments and ideas.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
