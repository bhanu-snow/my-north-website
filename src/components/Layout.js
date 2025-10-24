import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="container mx-auto p-4">
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li><Link href="/" className="text-iumlGreen hover:underline">Home</Link></li>
          <li><Link href="/about" className="text-iumlGreen hover:underline">About</Link></li>
          <li><Link href="/faqs" className="text-iumlGreen hover:underline">FAQs</Link></li>
          <li><Link href="/persons" className="text-iumlGreen hover:underline">Persons</Link></li>
          <li><Link href="/events" className="text-iumlGreen hover:underline">Historical Events</Link></li>
          <li><Link href="/organized-events" className="text-iumlGreen hover:underline">Organized Events</Link></li>
          <li><Link href="/committee" className="text-iumlGreen hover:underline">Committee</Link></li>
          <li><Link href="/up-expansion" className="text-iumlGreen hover:underline">UP Expansion</Link></li>
          <li><Link href="/calendar" className="text-iumlGreen hover:underline">Calendar</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}