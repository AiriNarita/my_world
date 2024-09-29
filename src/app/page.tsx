"use client";  // これを追加してクライアントコンポーネントとして設定

import { useEffect, useState } from 'react';
// grobal.cssをインポート


const Home = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ヘッダー */}
      <header className="bg-white shadow p-5">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">My Website</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#history" className="text-gray-600 hover:text-gray-900">My History</a>
            </li>
            <li>
              <a href="#blog" className="text-gray-600 hover:text-gray-900">Blog</a>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* メインコンテンツ */}
      <main className="container mx-auto text-center mt-10 p-5">
        <section className={`fade-in ${showContent ? 'block' : 'hidden'}`}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome to My Website!</h2>
          <p className="text-gray-600 text-lg">
            This is a simple top page with a smooth fade-in animation.
          </p>
        </section>

        {/* My Historyセクション */}
        <section id="history" className="mt-20">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">My History</h3>
          <p className="text-gray-600">
            Here is a brief history about me. I started my journey as an engineer in 2023...
          </p>
        </section>

        {/* Blogセクション */}
        <section id="blog" className="mt-20">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Blog</h3>
          <p className="text-gray-600">
            Welcome to my blog. Here you will find articles about tech, career, and more.
          </p>
        </section>

        {/* Contactセクション */}
        <section id="contact" className="mt-20 mb-10">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Contact</h3>
          <p className="text-gray-600">
            Feel free to reach out to me via email at <a href="mailto:example@example.com" className="text-blue-500">example@example.com</a>.
          </p>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
