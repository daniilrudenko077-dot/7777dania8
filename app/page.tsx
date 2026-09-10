'use client';

import { useState } from 'react';

type ColorMap = Record<number, string>;

const cars = [
  { id: 1, name: 'Ferrari 296 GT3', power: '600 HP', acc: '0-100: 3.0 s' },
  { id: 2, name: 'Porsche Taycan', power: '761 HP', acc: '0-100: 2.8 s' },
  { id: 3, name: 'Bugatti Chiron', power: '1500 HP', acc: '0-100: 2.4 s' },
  { id: 4, name: 'Lamborghini Revuelto', power: '1015 HP', acc: '0-100: 2.5 s' },
];

const colors = ['#ef4444', '#facc15', '#111827', '#2563eb'];

export default function Home() {
  const [garageCount, setGarageCount] = useState<number>(0);
  const [carColors, setCarColors] = useState<ColorMap>({
    1: colors[0],
    2: colors[0],
    3: colors[0],
    4: colors[0],
  });

  const changeColor = (carId: number, color: string) => {
    setCarColors((prev) => ({ ...prev, [carId]: color }));
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <header className="flex justify-between items-center p-6 border-b border-red-500/30 bg-neutral-950">
        <h1 className="text-3xl font-extrabold text-red-500 tracking-wider">
          HyperDrive Hub
        </h1>
        <div className="bg-red-500/10 border border-red-500/30 px-4 py-2 rounded-xl text-red-400 font-semibold">
          🏎️ Гараж: {garageCount}
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto">
        {cars.map((car) => {
          const currentColor = carColors[car.id] || colors[0];
          return (
            <div
              key={car.id}
              className="bg-neutral-900 rounded-2xl p-5 border transition-all duration-300 hover:scale-[1.02]"
              style={{ borderColor: currentColor }}
            >
              <div
                className="h-2 rounded-full mb-4 transition-colors duration-300"
                style={{ background: currentColor }}
              />
              <h2 className="text-xl font-bold mb-2">{car.name}</h2>
              <p className="text-neutral-400">⚡ Мощность: {car.power}</p>
              <p className="text-neutral-400 mb-4">⏱ Разгон: {car.acc}</p>

              <div className="mb-4">
                <span className="text-xs text-neutral-500 block mb-2 font-medium">
                  ЦВЕТ КУЗОВА
                </span>
                <div className="flex gap-2">
                  {colors.map((col) => (
                    <button
                      key={col}
                      onClick={() => changeColor(car.id, col)}
                      className="w-7 h-7 rounded-full border border-white/20 transition-transform active:scale-95"
                      style={{ background: col }}
                      aria-label="Выбрать цвет"
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={() => setGarageCount((prev) => prev + 1)}
                className="w-full bg-red-600 hover:bg-red-700 active:scale-95 text-white font-medium rounded-xl py-2.5 transition-all"
              >
                + Добавить в гараж
              </button>
            </div>
          );
        })}
      </section>
    </main>
  );
}
