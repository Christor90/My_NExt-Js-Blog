import { SanityImageSource } from '@sanity/image-url/lib/types/types';
export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: string;
  _createdAt: any;
}

export interface fullBlog {
  currentSlug: string;
  title: string;
  content: any;
  titleImage: any;
  _createdAt: any;
}
