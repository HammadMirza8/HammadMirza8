import Link from "next/link";
import { ArrowUpRight, BookOpen, Image as ImageIcon, Play, Lightbulb, Eye, Video } from "lucide-react";

const stats = [
  { icon: Lightbulb, value: "Few", label: "Novel Ideas" },
  { icon: Eye, value: "5000+", label: "Views" },
  { icon: Video, value: "15+", label: "Videos" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/[0.015] rounded-full blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center">
          <p className="mb-8 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Welcome to MirzaSpace
          </p>
          
          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl">
            <span className="text-balance block">experiences for</span>
            <span className="text-balance block mt-2">the digital world.</span>
          </h1>
          
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Crafting stories, art, and creative content that explore imagination 
            and push the boundaries of digital expression.
          </p>
          
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/stories"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-all hover:bg-foreground/90"
            >
              Explore Stories
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-medium text-foreground transition-all hover:bg-muted"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sections - Glassmorphism Cards */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Explore My Work
            </h2>
            <p className="mt-4 text-muted-foreground">
              Dive into a world of creativity across different mediums
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {/* Stories Card */}
            <Link href="/stories" className="group">
              <div className="glass glow rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 h-full">
                <div className="mb-6 inline-flex rounded-xl bg-white/5 p-4">
                  <BookOpen size={28} className="text-foreground" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-foreground">
                  Stories
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A collection of creative writing and short narratives that 
                  explore imagination and the human experience.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  Read Stories 
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>

            {/* Gallery Card */}
            <Link href="/gallery" className="group">
              <div className="glass glow rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 h-full">
                <div className="mb-6 inline-flex rounded-xl bg-white/5 p-4">
                  <ImageIcon size={28} className="text-foreground" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-foreground">
                  Art Gallery
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Browse through visual artwork, illustrations, and creative 
                  pieces that capture moments and emotions.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  View Gallery 
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>

            {/* YouTube Card */}
            <a 
              href="https://www.youtube.com/@HammadMirza_yt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <div className="glass glow rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 h-full">
                <div className="mb-6 inline-flex rounded-xl bg-white/5 p-4">
                  <Play size={28} className="text-foreground" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-foreground">
                  YouTube
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Watch video content including gaming, creative projects, 
                  and behind-the-scenes of the creative process.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  Watch Videos 
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section with Stats */}
      <section className="relative py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            {/* About Text */}
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                About Me
              </p>
              <h2 className="text-4xl font-bold text-foreground md:text-5xl">
                Hey, I&apos;m Hammad
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                On my YouTube channel, I share videos of me playing games and 
                exploring different creative interests. I&apos;m also learning 
                writing, and on this website you&apos;ll find some of my short 
                stories along with a look into the work I&apos;m building.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                This space is where I document my creative journey, experiment 
                with new ideas, and share experiences that hopefully resonate 
                with others.
              </p>
              
              <div className="mt-10">
                <a
                  href="https://www.youtube.com/@HammadMirza_yt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-foreground font-medium hover:text-muted-foreground transition-colors"
                >
                  Check out my YouTube channel
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass glow rounded-2xl p-6 text-center"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-white/5 p-3">
                    <stat.icon size={24} className="text-foreground" />
                  </div>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
