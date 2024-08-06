'use client';
import Image, { ImageProps } from 'next/image';

export default function SanityImage({ src, alt, ...props }: ImageProps) {
  return <Image src={src} alt={alt} {...props} />;
}
