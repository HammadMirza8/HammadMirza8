import Link from "next/link";
import { ArrowRight, BookOpen, ImageIcon, Play } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              Welcome to my creative space
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
              <span className="text-balance">Crafting stories, art, and experiences for the digital world.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              I build accessible, engaging digital experiences that blend thoughtful
              design with creative expression. Explore my stories, artwork, and video
              content.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/stories"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
              >
                Read Stories
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-2xl font-bold text-foreground md:text-3xl">
            Explore My Work
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Stories Card */}
            <Link href="/stories" className="group">
              <div className="rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:bg-card/80">
                <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <BookOpen size={28} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-primary">
                  Stories
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dive into a collection of creative writing, short stories, and
                  narratives that explore imagination and human experience.
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                  Read more <ArrowRight size={14} />
                </div>
              </div>
            </Link>

            {/* Gallery Card */}
            <Link href="/gallery" className="group">
              <div className="rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:bg-card/80">
                <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <ImageIcon size={28} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-primary">
                  Art Gallery
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Browse through a visual journey of artwork, illustrations, and
                  creative pieces that capture moments and emotions.
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                  View gallery <ArrowRight size={14} />
                </div>
              </div>
            </Link>

            {/* YouTube Card */}
            <Link href="/youtube" className="group">
              <div className="rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:bg-card/80">
                <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <Play size={28} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-primary">
                  YouTube
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Watch video content ranging from creative projects, tutorials,
                  vlogs, and behind-the-scenes of the creative process.
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                  Watch videos <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-[900px] px-5">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-5 text-4xl font-bold text-foreground">
              Hey, I&apos;m Hammad
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              On my YouTube channel, I share videos of me playing games and exploring different creative interests.
              I&apos;m also learning writing, and on this website you&apos;ll find some of my short stories along with
              a look into the work I&apos;m building.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
