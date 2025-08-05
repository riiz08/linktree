// src/components/LabaRugiCalculator.tsx

import { useState } from "react";

export default function LabaRugiCalculator() {
  const [pendapatan, setPendapatan] = useState("");
  const [biaya, setBiaya] = useState("");
  const [hasil, setHasil] = useState("");

  const hitungLabaRugi = () => {
    const pend = parseFloat(pendapatan);
    const biayaVal = parseFloat(biaya);

    if (isNaN(pend) || isNaN(biayaVal)) {
      setHasil("Mohon masukkan angka yang valid.");
      return;
    }

    const selisih = pend - biayaVal;

    if (selisih > 0) {
      setHasil(`Laba sebesar Rp${selisih.toLocaleString()}`);
    } else if (selisih < 0) {
      setHasil(`Rugi sebesar Rp${Math.abs(selisih).toLocaleString()}`);
    } else {
      setHasil("Impas (tidak untung, tidak rugi)");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 space-y-4">
      <h1 className="text-xl font-bold text-center">Kalkulator Laba Rugi</h1>

      <div>
        <label className="block mb-1 font-medium">Pendapatan (Rp)</label>
        <input
          type="number"
          className="w-full border rounded px-3 py-2"
          value={pendapatan}
          onChange={(e) => setPendapatan(e.target.value)}
        />
      </div>

      <div>
        <label className="block mb-1 font-medium">Biaya (Rp)</label>
        <input
          type="number"
          className="w-full border rounded px-3 py-2"
          value={biaya}
          onChange={(e) => setBiaya(e.target.value)}
        />
      </div>

      <button
        onClick={hitungLabaRugi}
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
      >
        Hitung
      </button>

      {hasil && (
        <div className="mt-4 p-3 bg-gray-100 rounded text-center font-medium">
          {hasil}
        </div>
      )}
    </div>
  );
}
