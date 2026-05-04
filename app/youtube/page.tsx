import { Play, Eye, Clock, ExternalLink } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Creating Digital Art: Full Process Breakdown",
    description:
      "Watch the complete process of creating a digital artwork from sketch to final render, with tips and techniques along the way.",
    views: "12.5K",
    duration: "24:30",
    date: "2 weeks ago",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "My Creative Workspace Tour 2026",
    description:
      "Take a tour of my creative workspace, including all the tools, equipment, and setup that helps me create content.",
    views: "8.2K",
    duration: "15:45",
    date: "1 month ago",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Writing Tips: How to Develop Compelling Characters",
    description:
      "Learn techniques for creating memorable characters that readers will connect with and remember long after the story ends.",
    views: "15.3K",
    duration: "18:20",
    date: "1 month ago",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Behind the Scenes: Art Gallery Preparation",
    description:
      "Join me as I prepare for my first physical art gallery exhibition, from selecting pieces to final setup.",
    views: "6.1K",
    duration: "32:15",
    date: "2 months ago",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Color Theory Fundamentals for Digital Artists",
    description:
      "A comprehensive guide to understanding and applying color theory in your digital artwork for more impactful results.",
    views: "22.7K",
    duration: "28:40",
    date: "3 months ago",
    color: "from-rose-500 to-orange-500",
  },
  {
    id: 6,
    title: "Monthly Creative Vlog: Finding Inspiration",
    description:
      "A candid look at my creative process this month, including struggles, breakthroughs, and new projects in the works.",
    views: "4.8K",
    duration: "12:55",
    date: "3 months ago",
    color: "from-indigo-500 to-purple-500",
  },
];

const stats = [
  { label: "Subscribers", value: "25K+" },
  { label: "Total Views", value: "500K+" },
  { label: "Videos", value: "48" },
];

export default function YouTubePage() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Video Content
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            YouTube Channel
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Video content ranging from creative tutorials, process breakdowns,
            vlogs, and behind-the-scenes looks at the creative journey.
          </p>

          {/* Channel Stats */}
          <div className="mt-8 flex flex-wrap gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Subscribe Button */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-red-700"
          >
            <Play size={16} fill="currentColor" />
            Subscribe on YouTube
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Featured Video */}
        <div className="mb-16">
          <h2 className="mb-6 text-xl font-semibold text-foreground">
            Featured Video
          </h2>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="rounded-full bg-white/20 p-6 backdrop-blur-sm transition-transform hover:scale-110">
                  <Play size={40} fill="white" className="text-white" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-foreground">
                {videos[0].title}
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {videos[0].description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Eye size={14} /> {videos[0].views} views
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {videos[0].duration}
                </span>
                <span>{videos[0].date}</span>
              </div>
            </div>
          </div>
        </div>

        {/* All Videos */}
        <div>
          <h2 className="mb-6 text-xl font-semibold text-foreground">
            All Videos
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos.slice(1).map((video) => (
              <article
                key={video.id}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50"
              >
                <div className="relative aspect-video">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${video.color}`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                      <Play size={24} fill="white" className="text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary">
                    {video.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye size={12} /> {video.views}
                    </span>
                    <span>{video.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-8 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
          >
            View All Videos on YouTube
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
