import type { NavItems } from "./types";

export const NAV_ITEMS: NavItems = {
  home: {
    path: "/",
    title: "home",
  },
  blog: {
    path: "/blog",
    title: "blog",
  },
  tags: {
    path: "/tags",
    title: "tags",
  },
  media: {
    path: "/media",
    title: "media",
  },
  about: {
    path: "/about",
    title: "about",
  },
};

export const SITE = {
  // Your site's detail?
  name: "Works On My Machine",
  title: "Works On My Machine",
  description: "A tech blog to share what I know, learn, and experiment with",
  url: "https://blog.angelcantugr.dev",
  githubUrl: "https://github.com/AngelCantugr",
  listDrafts: true,
  image: "https://blog.angelcantugr.dev/assets/logo.svg",
  // YT video channel Id (used in media.astro)
  ytChannelId: "",
  // Optional, user/author settings (example)
  // Author: name
  author: "Angel Cantu", // Example: Fred K. Schott
  // Author: Twitter handler
  authorTwitter: "", // Example: FredKSchott
  // Author: Image external source
  authorImage: "", // Example: https://pbs.twimg.com/profile_images/1272979356529221632/sxvncugt_400x400.jpg, https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png
  // Author: Bio
  authorBio: "A tech blog to share what I know, learn, and experiment with.",
};

// Ink - Theme configuration
export const PAGE_SIZE = 8;
export const USE_POST_IMG_OVERLAY = false;
export const USE_MEDIA_THUMBNAIL = true;

export const USE_AUTHOR_CARD = true;
export const USE_SUBSCRIPTION = false; /* works only when USE_AUTHOR_CARD is true */

export const USE_VIEW_STATS = false;
