import { ArrowUpRight, Play, Users, Eye, Video } from "lucide-react";

function XIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YoutubeIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const channelStats = [
  { icon: Users, value: "200+", label: "Subscribers" },
  { icon: Eye, value: "5000+", label: "Views" },
  { icon: Video, value: "15+", label: "Videos" },
];

const mostViewedVideos = [
  {
    title: "Getting Started with Game Development",
    views: "1.2K views",
    thumbnail: "/thumbnails/video-1.jpg",
  },
  {
    title: "Creative Process Behind My Stories",
    views: "980 views",
    thumbnail: "/thumbnails/video-2.jpg",
  },
];

const mostRecentVideos = [
  {
    title: "New Adventures in Gaming",
    views: "450 views",
    thumbnail: "/thumbnails/video-3.jpg",
  },
  {
    title: "Behind the Scenes: MirzaSpace",
    views: "320 views",
    thumbnail: "/thumbnails/video-4.jpg",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Personal Introduction */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/[0.015] rounded-full blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
          <p className="mb-8 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Welcome to MirzaSpace
          </p>
          
          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl">
            <span className="text-balance block">Hey, I&apos;m Hammad</span>
          </h1>
          
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            On my YouTube channel, I share videos of me playing games and 
            exploring different creative interests. I&apos;m also learning 
            writing, and on this website you&apos;ll find some of my short 
            stories along with a look into the work I&apos;m building.
          </p>
          
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            This space is where I document my creative journey, experiment 
            with new ideas, and share experiences that hopefully resonate 
            with others.
          </p>

          <div className="mt-12 flex items-center justify-center">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Social Media Links */}
      <section className="relative py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Connect With Me
            </p>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              Find Me Online
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            {/* Twitter/X Card */}
            <a 
              href="https://x.com/IamHammad08" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="glass glow rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 h-full flex flex-col items-center text-center">
                <div className="mb-6 inline-flex rounded-xl bg-white/5 p-5">
                  <XIcon size={32} />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-foreground">
                  X (Twitter)
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Follow me for updates, thoughts, and behind-the-scenes content.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-foreground mt-auto">
                  @IamHammad08
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>

            {/* YouTube Card */}
            <a 
              href="https://m.youtube.com/@HammadMirza_yt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="glass glow rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 h-full flex flex-col items-center text-center">
                <div className="mb-6 inline-flex rounded-xl bg-white/5 p-5">
                  <YoutubeIcon size={32} className="text-foreground" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-foreground">
                  YouTube
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Watch my gaming videos, creative projects, and more content.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-foreground mt-auto">
                  @HammadMirza_yt
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: YouTube Channel Overview */}
      <section className="relative py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              My Channel
            </p>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              YouTube Overview
            </h2>
          </div>

          {/* Channel Banner & Logo Area */}
          <div className="glass glow rounded-2xl overflow-hidden mb-12">
            {/* Banner Placeholder - Replace with actual banner */}
            <div className="relative h-48 md:h-64 bg-gradient-to-br from-white/[0.08] to-white/[0.02] flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground text-sm uppercase tracking-wider">
                  Channel Banner
                </p>
              </div>
            </div>
            
            {/* Channel Info */}
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Logo Placeholder - Replace with actual logo */}
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/[0.08] border-4 border-background flex items-center justify-center -mt-16 md:-mt-20 relative z-10">
                  <YoutubeIcon size={40} className="text-muted-foreground" />
                </div>
                
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Hammad Mirza
                  </h3>
                  <p className="text-muted-foreground mt-2 max-w-xl">
                    On my YouTube channel, I share videos of me playing games and 
                    exploring different creative interests. I&apos;m also learning 
                    writing, and on this website you&apos;ll find some of my short 
                    stories along with a look into the work I&apos;m building.
                  </p>
                </div>

                <a
                  href="https://m.youtube.com/@HammadMirza_yt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-foreground/90"
                >
                  Subscribe
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Channel Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 mb-16">
            {channelStats.map((stat) => (
              <div
                key={stat.label}
                className="glass glow rounded-2xl p-6 text-center"
              >
                <div className="mb-4 inline-flex rounded-xl bg-white/5 p-3">
                  <stat.icon size={24} className="text-foreground" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Video Grid: Most Viewed */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Most Viewed Videos</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {mostViewedVideos.map((video, index) => (
                <a
                  key={index}
                  href="https://m.youtube.com/@HammadMirza_yt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="glass glow rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20">
                    {/* Thumbnail Placeholder */}
                    <div className="relative aspect-video bg-white/[0.04] flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                          <Play size={32} className="text-foreground ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
                        {video.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">{video.views}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Video Grid: Most Recent */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Most Recent Videos</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {mostRecentVideos.map((video, index) => (
                <a
                  key={index}
                  href="https://m.youtube.com/@HammadMirza_yt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="glass glow rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20">
                    {/* Thumbnail Placeholder */}
                    <div className="relative aspect-video bg-white/[0.04] flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                          <Play size={32} className="text-foreground ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
                        {video.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">{video.views}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* CTA to YouTube */}
          <div className="mt-12 text-center">
            <a
              href="https://m.youtube.com/@HammadMirza_yt"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-muted-foreground transition-colors"
            >
              View all videos on YouTube
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
