"use client";

import { useState } from "react";

type RankingItem = {
  rank: number;
  name: string;
  city: string;
  score: number;
  type: string;
};

const universityData: RankingItem[] = [
  {
    rank: 1,
    name: "O‘zbekiston Milliy Universiteti",
    city: "Toshkent",
    score: 92.4,
    type: "Universitet",
  },
  {
    rank: 2,
    name: "TATU",
    city: "Toshkent",
    score: 88.9,
    type: "Texnika universiteti",
  },
  {
    rank: 3,
    name: "WIUT",
    city: "Toshkent",
    score: 86.2,
    type: "Xalqaro universitet",
  },
];

const centerData: RankingItem[] = [
  {
    rank: 1,
    name: "Najot Ta’lim",
    city: "Toshkent",
    score: 91.3,
    type: "Dasturlash kurslari",
  },
  {
    rank: 2,
    name: "Cambridge Learning Center",
    city: "Toshkent",
    score: 88.1,
    type: "Til markazi",
  },
  {
    rank: 3,
    name: "Inha Training Center",
    city: "Toshkent",
    score: 85.7,
    type: "IT kurslari",
  },
];

export default function RankingsPage() {
  const [activeTab, setActiveTab] = useState<"unis" | "centers">("unis");

  const data = activeTab === "unis" ? universityData : centerData;

  return (
    <main className="page page--rankings">
      {/* Top info + type buttons */}
      <section className="rankings-hero">
        <div className="rankings-hero__text">
          <h1>Reytinglar</h1>
          <p>
            OliyRank universitetlar va o‘quv markazlarini bir xil mezonlar bo‘yicha solishtirishga yordam
            beradi. Bu sahifada hozircha namuna ma’lumotlar ko‘rsatilgan, keyinchalik haqiqiy reytinglar
            joylanadi.
          </p>

          <div className="rankings-hero__stats">
            <span>🎓 Universitetlar</span>
            <span>📚 O‘quv markazlari</span>
            <span>📊 Mustaqil baholash tizimi</span>
          </div>
        </div>

        <div className="rankings-hero__types">
          <button
            type="button"
            onClick={() => setActiveTab("unis")}
            className={`rank-type ${activeTab === "unis" ? "rank-type--active" : ""}`}
          >
            <p className="rank-type__label">Universitetlar reytingi</p>
            <p className="rank-type__sub">Bakalavr va magistratura dasturlari bo‘yicha reytinglar.</p>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("centers")}
            className={`rank-type ${activeTab === "centers" ? "rank-type--active" : ""}`}
          >
            <p className="rank-type__label">O‘quv markazlari reytingi</p>
            <p className="rank-type__sub">
              Dasturlash, til kurslari va boshqa qo‘shimcha ta’lim markazlari bo‘yicha reytinglar.
            </p>
          </button>
        </div>
      </section>

      {/* Table section */}
      <section className="page__content">
        <div className="rank-table">
          <div className="rank-table__head">
            <span>#</span>
            <span>Nomi</span>
            <span>Shahar</span>
            <span>Yo‘nalish</span>
            <span>Ball</span>
          </div>

          {data.map((item) => (
            <div key={item.rank + item.name} className="rank-table__row">
              <span>{item.rank}</span>
              <span>{item.name}</span>
              <span>{item.city}</span>
              <span>{item.type}</span>
              <span>{item.score.toFixed(1)}</span>
            </div>
          ))}
        </div>

        <p className="page__note">
          * Jadvaldagi ma’lumotlar hozircha dizayn va funksiyani namoyish qilish uchun test ma’lumotlari
          sifatida qo‘yilgan. Haqiqiy reytinglar keyinchalik alohida e’lon qilinadi.
        </p>
      </section>
    </main>
  );
}
