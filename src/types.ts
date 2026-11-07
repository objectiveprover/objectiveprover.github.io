import type { ImageMetadata } from "astro";

export type Link = {
  label: string;
  url?: string;
};

/** A link with optional tags, as shown in link lists. */
export type LinkItem = Link & {
  tags?: string[];
};

export type Client = {
  name: string;
  url?: string;
  what: string;
  scope: string[];
  collaborators?: Link[];
  design?: Link;
};

export type Book = {
  title: string;
  author: string;
  cover: ImageMetadata;
  url: string;
  alt: string;
};
