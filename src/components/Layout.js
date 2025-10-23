import { useRouter } from 'next/router';
import Link from 'next/link';
import SearchBar from './SearchBar';

export default function Layout({ children }) {
  const router = useRouter();
  const { locale, locales } = router;

  const switchLocale = (newLocale) => {
    const newPath = router.asPath;
    router.push(newPath, newPath, { locale: newLocale });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-iumlGreen text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">IUML</Link>
          <ul className="flex space-x-4">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/persons">Persons</Link></li>
            <li><Link href="/events">Historical Events</Link></li>
            <li><Link href="/organized-events">Organized Events</Link></li>
            <li><Link href="/committee">Committee</Link></li>
            <li><Link href="/faqs">FAQs</Link></li>
            <li><Link href="/up-expansion">UP Expansion</Link></li>
            <li><Link href="/calendar">Calendar</Link></li>
          </ul>
          <div>
            {locales.map((loc) => (
              <button key={loc} onClick={() => switchLocale(loc)} className={`mx-2 ${locale === loc ? 'font-bold' : ''}`}>
                {loc.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>
        <SearchBar />
      </header>
      <main className="container mx-auto p-4 flex-grow">{children}</main>
      <footer className="bg-iumlGreen text-white p-4 text-center">
        <p>&copy; 2025 IUML. All rights reserved.</p>
      </footer>
    </div>
  );
}