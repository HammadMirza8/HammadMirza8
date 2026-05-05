// ============================================
// INKWell Stories
// ============================================
export interface Story {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
}

export const stories: Story[] = [
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

export const storyCategories = ["All", "Fiction", "Sci-Fi", "Fantasy", "Drama", "Historical"];

// ============================================
// Art Gallery / Collage
// ============================================
export interface Artwork {
  id: number;
  title: string;
  category: string;
  image: string; // Path to image in /public folder
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Sunset Dreams",
    category: "Digital Art",
    image: "/art1.jpg",
  },
  {
    id: 2,
    title: "Ocean Depths",
    category: "Illustration",
    image: "/art2.jpg",
  },
  {
    id: 3,
    title: "Forest Whispers",
    category: "Digital Art",
    image: "/art3.jpg",
  },
  {
    id: 4,
    title: "Urban Nights",
    category: "Photography",
    image: "/art4.jpg",
  },
  {
    id: 5,
    title: "Abstract Flow",
    category: "Abstract",
    image: "/art5.jpg",
  },
  {
    id: 6,
    title: "Mountain Serenity",
    category: "Landscape",
    image: "/art6.jpg",
  },
  {
    id: 7,
    title: "Neon Reflections",
    category: "Digital Art",
    image: "/art7.jpg",
  },
  {
    id: 8,
    title: "Golden Hour",
    category: "Photography",
    image: "/art8.jpg",
  },
  {
    id: 9,
    title: "Cosmic Journey",
    category: "Abstract",
    image: "/art9.jpg",
  },
];

export const artCategories = [
  "All",
  "Digital Art",
  "Illustration",
  "Photography",
  "Abstract",
  "Landscape",
];

// ============================================
// YouTube Videos
// ============================================
export interface Video {
  id: number;
  title: string;
  description: string;
  views: string;
  duration: string;
  date: string;
  thumbnail: string; // Path to thumbnail in /public folder
  youtubeUrl?: string; // Optional direct link to video
}

export const videos: Video[] = [
  {
    id: 1,
    title: "Creating Digital Art: Full Process Breakdown",
    description:
      "Watch the complete process of creating a digital artwork from sketch to final render, with tips and techniques along the way.",
    views: "12.5K",
    duration: "24:30",
    date: "2 weeks ago",
    thumbnail: "/video1.jpg",
  },
  {
    id: 2,
    title: "My Creative Workspace Tour 2026",
    description:
      "Take a tour of my creative workspace, including all the tools, equipment, and setup that helps me create content.",
    views: "8.2K",
    duration: "15:45",
    date: "1 month ago",
    thumbnail: "/video2.jpg",
  },
  {
    id: 3,
    title: "Writing Tips: How to Develop Compelling Characters",
    description:
      "Learn techniques for creating memorable characters that readers will connect with and remember long after the story ends.",
    views: "15.3K",
    duration: "18:20",
    date: "1 month ago",
    thumbnail: "/video3.jpg",
  },
  {
    id: 4,
    title: "Behind the Scenes: Art Gallery Preparation",
    description:
      "Join me as I prepare for my first physical art gallery exhibition, from selecting pieces to final setup.",
    views: "6.1K",
    duration: "32:15",
    date: "2 months ago",
    thumbnail: "/video4.jpg",
  },
  {
    id: 5,
    title: "Color Theory Fundamentals for Digital Artists",
    description:
      "A comprehensive guide to understanding and applying color theory in your digital artwork for more impactful results.",
    views: "22.7K",
    duration: "28:40",
    date: "3 months ago",
    thumbnail: "/video5.jpg",
  },
  {
    id: 6,
    title: "Monthly Creative Vlog: Finding Inspiration",
    description:
      "A candid look at my creative process this month, including struggles, breakthroughs, and new projects in the works.",
    views: "4.8K",
    duration: "12:55",
    date: "3 months ago",
    thumbnail: "/video6.jpg",
  },
];

export const channelStats = [
  { label: "Subscribers", value: "Growing" },
  { label: "Total Views", value: "5000+" },
  { label: "Videos", value: "15+" },
];

export const youtubeChannelUrl = "https://www.youtube.com/@HammadMirza_yt";

// ============================================
// Site Banner (optional)
// ============================================
export const bannerImage = "/banner.jpg";
