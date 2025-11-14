import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-xl w-full">

        <h1 
          className="
            font-semibold tracking-tight
            text-3xl 
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
          "
        >
          OliyRank
        </h1>

        <p 
          className="
            text-slate-400 mx-auto
            text-base
            sm:text-lg
            md:text-xl
            leading-relaxed
          "
        >
          MVP coming soon. A modern platform for ranking universities 
          and learning centers in Uzbekistan.
        </p>

      </div>
    </main>
  );
}
