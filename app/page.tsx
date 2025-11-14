import Image from 'next/image'
import logo from '@/public/oliyrank.svg'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">
          OliyRank
        </h1>
        <p className="text-slate-400 max-w-md mx-auto">
          MVP coming soon. Platform for ranking universities and learning centers in Uzbekistan.
        </p>
      </div>
    </main>
  );
}