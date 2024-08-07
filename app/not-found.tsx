import Link from 'next/link';

export default function notFound() {
  return (
    <main className="text-center">
      <h2>Page Not Found, there was a Problem</h2>
      <p>Could not find the page 🐸 you are looking for..</p>
      <p>
        Go back to the{' '}
        <Link href={'/'}>
          {' '}
          <span className="text-primary">ChrisBlog</span>
        </Link>
      </p>
    </main>
  );
}
