import UrlShortener from './components/UrlShortener';
import Stats from './components/Stats';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">URL Shortener</span>
            <span className="block text-indigo-600">Simple. Fast. Reliable.</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Transform your long URLs into short, memorable links. Perfect for social media, marketing campaigns, or any time you need to share links efficiently.
          </p>
        </div>

        <div className="mt-16">
          <UrlShortener />
        </div>

        <div className="mt-16">
          <Stats />
        </div>
      </div>
    </main>
  );
}
