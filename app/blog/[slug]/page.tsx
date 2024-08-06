import { fullBlog } from '@/app/lib/interface';
import { urlFor } from '@/app/lib/sanity';
import { client } from '@/sanity/lib/client';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import { compareAsc, format } from 'date-fns';

export const revalidate = 30;

async function getData(slug: string) {
  const query = `*[_type == "blog" && slug.current == '${slug}']{
  "currentSlug": slug.current,
    title,
    content,
    titleImage,
    _createdAt,
}[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);
  console.log(data);

  return (
    <div className="mt-8 max-w-2xl mx-auto">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Mr.Chris - Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>
      <Image
        src={urlFor(data.titleImage).url()}
        alt="image"
        width={800}
        height={800}
        priority
        className="rounded-t-lg h-[400px] object-cover mt-8"
      />

      <p className="text-sm mt-5 text-slate-400">
        <span className="text-primary">Dated:</span>{' '}
        {format(new Date(data._createdAt), 'do MMMM, yyyy')}
      </p>

      <div className="border-t mt-5 border-slate-400"></div>

      <div className="mt-16 prose prose-blue prose-base dark:prose-invert prose-li:marker:text-primary">
        <PortableText
          value={data.content}
          components={myPortableTextComponents}
        />
      </div>
    </div>
  );
}

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlFor(value).url()}
        alt="image"
        width={700}
        height={700}
        className="rounded-lg border-t border-yellow-500 border-2"
      />
    ),
  },
};
