import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'My Website',
  description: 'Welcome to my website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="header p-5">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-700 hover:cursor-pointer">
              My Website
            </Link>
            <ul className="flex space-x-6">
              <li>
                <a href="/history" className="text-gray-600 hover:text-gray-900">My History</a>
              </li>
              <li>
                <a href="/blog" className="text-gray-600 hover:text-gray-900">Blog</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto text-center mt-10 p-5 flex-grow">
          {children}
        </main>
        <footer className="bg-white text-gray-600 py-1 text-center">
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
