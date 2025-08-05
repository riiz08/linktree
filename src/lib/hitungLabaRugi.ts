export function hitungLabaRugi(pendapatan: number, biaya: number) {
  const hasil = pendapatan - biaya;

  if (hasil > 0) {
    return `Laba sebesar Rp${hasil.toLocaleString()}`;
  } else if (hasil < 0) {
    return `Rugi sebesar Rp${Math.abs(hasil).toLocaleString()}`;
  } else {
    return "Impas (tidak untung, tidak rugi)";
  }
}
