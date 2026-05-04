import Link from "next/link";

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <Link href="/" className="text-lg font-bold text-foreground">
              Mirza<span className="text-muted-foreground">Space</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Crafting experiences for the digital world
            </p>
          </div>

          <div className="flex items-center">
            <a
              href="https://x.com/IamHammad08"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground transition-all hover:bg-foreground hover:text-background"
              aria-label="Follow on X (Twitter)"
            >
              <XIcon size={18} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} MirzaSpace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
