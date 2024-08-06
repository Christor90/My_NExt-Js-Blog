import Image from 'next/image';
import { client, urlFor } from './lib/sanity';
import { simpleBlogCard } from './lib/interface';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { compareAsc, format } from 'date-fns';

export const revalidate = 30; // revalidate at most 30 seconds

async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
  title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage,
    _createdAt,
}
`;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  console.log(data);

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto  mt-5">
      {!data}
      {data?.length > 0 &&
        data?.map((post, idx) => (
          <Card key={idx} className="overflow-hidden">
            <Image
              src={urlFor(post.titleImage).url()}
              alt="image"
              width={500}
              height={500}
              className="rounded-t-lg h-[150px] object-cover hover:scale-105 transition-transform hover:cursor"
            />

            <CardContent>
              <p className="text-sm mt-2 text-slate-400">
                {format(new Date(post._createdAt), 'do MMMM, yyyy')}
              </p>
              <Link href={`/blog/${post.currentSlug}`}>
                <h3 className="text- leading-tight line-clamp-2 mt-2 font-extrabold hover:text-blue-700 dark:hover:text-blue-300">
                  {post.title}
                </h3>
              </Link>
              <p className="text-sm line-clamp-2 mt-2 text-gray-600 dark:text-gray-300">
                {post.smallDescription}
              </p>
            </CardContent>
          </Card>
        ))}
    </div>
  );
}
