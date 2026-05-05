import { Play, Eye, Clock, ExternalLink } from "lucide-react";
import Image from "next/image";
import { videos, channelStats, youtubeChannelUrl } from "@/constants/data";

export default function YouTubePage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Video Content
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            YouTube Channel
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Video content ranging from gaming, creative tutorials, process 
            breakdowns, and behind-the-scenes looks at the creative journey.
          </p>

          {/* Channel Stats */}
          <div className="mt-10 flex flex-wrap gap-10">
            {channelStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Subscribe Button */}
          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-red-700"
          >
            <Play size={18} fill="currentColor" />
            Subscribe on YouTube
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Featured Video */}
        {videos.length > 0 && (
          <div className="mb-20">
            <h2 className="mb-8 text-xl font-semibold text-foreground">
              Featured Video
            </h2>
            <div className="overflow-hidden rounded-3xl glass glow">
              <div className="relative aspect-video">
                <Image
                  src={videos[0].thumbnail}
                  alt={videos[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href={videos[0].youtubeUrl || youtubeChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white/20 p-6 backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/30"
                  >
                    <Play size={48} fill="white" className="text-white" />
                  </a>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-foreground">
                  {videos[0].title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">
                  {videos[0].description}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Eye size={16} /> {videos[0].views} views
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={16} /> {videos[0].duration}
                  </span>
                  <span>{videos[0].date}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* All Videos */}
        {videos.length > 1 && (
          <div>
            <h2 className="mb-8 text-xl font-semibold text-foreground">
              All Videos
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {videos.slice(1).map((video) => (
                <a
                  key={video.id}
                  href={video.youtubeUrl || youtubeChannelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-2xl glass glow transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                        <Play size={28} fill="white" className="text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-foreground line-clamp-2">
                      {video.title}
                    </h3>
                    <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Eye size={12} /> {video.views}
                      </span>
                      <span>{video.date}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* View All CTA */}
        <div className="mt-16 text-center">
          <a
            href={youtubeChannelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-border px-8 py-4 text-sm font-medium text-foreground transition-all hover:bg-muted hover:border-white/20"
          >
            View All Videos on YouTube
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
