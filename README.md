# Yudhistiro Harimurti Puspoyo — Geomatics Engineering Portfolio

Portfolio pribadi dengan tampilan pixel dan palet warna earth & terrain. Website ini memperkenalkan saya sebagai mahasiswa Teknik Geomatika serta menampilkan proyek dan skill yang sedang saya pelajari.

## Website dan profil

- **Portfolio live:** [https://portofolio-black-two-36.vercel.app/](https://portofolio-black-two-36.vercel.app/)
- **GitHub:** [github.com/yudhist0170-ctrl](https://github.com/yudhist0170-ctrl)

## Isi website

Portfolio memiliki tiga halaman:

- **Home (`/`)** — perkenalan singkat dan profil sebagai mahasiswa Teknik Geomatika.
- **Projects (`/projects`)** — daftar proyek, deskripsi, tools, dan tautan ke repository GitHub.
- **Contact (`/contact`)** — halaman informasi kontak.

## Teknologi yang digunakan

- **Next.js** dengan App Router untuk routing dan struktur halaman.
- **React** untuk membangun tampilan dari komponen.
- **TypeScript** untuk membantu menjaga struktur dan tipe data.
- **CSS** untuk layout responsif, nuansa pixel, palet earth & terrain, dan garis topografi.

## Data proyek

Data proyek disimpan di `data/projects.ts`, terpisah dari kode tampilan di `app/projects/page.tsx`. Pemisahan ini membuat informasi proyek lebih mudah diperbarui tanpa mengubah cara kartu ditampilkan.

Setiap project memakai struktur `Project` berikut:

```ts
type Project = {
  name: string;
  description: string;
  tools: string[];
  link?: string;
};
```

- `name`: nama proyek.
- `description`: penjelasan singkat tentang proyek.
- `tools`: bahasa, aplikasi, atau teknologi yang digunakan.
- `link`: alamat repository atau demo; bagian ini opsional.

Proyek yang saat ini ditampilkan:

1. **Permainan Ular Sederhana** — permainan sederhana yang dibuat menggunakan Python dan Tkinter. [Lihat repository](https://github.com/yudhist0170-ctrl/Ular).
2. **Kalkulator Sederhana** — kalkulator dasar yang dibuat menggunakan HTML. [Lihat repository](https://github.com/yudhist0170-ctrl/Kalkulator-Sederhana).

Untuk menambah proyek, tambahkan objek baru ke dalam array `projects` pada `data/projects.ts`. Contoh:

```ts
{
  name: "Nama Proyek",
  description: "Jelaskan secara singkat apa yang dibuat.",
  tools: ["QGIS", "Python"],
  link: "https://github.com/username/nama-repository",
},
```

## Skill yang ditampilkan

Daftar skill disimpan di `data/skills.ts`. Skill yang saat ini ditampilkan adalah:

- Python
- QGIS
- ArcGIS
- AutoCAD
- Civil 3D
- TypeScript
- Next.js
- CSS

Untuk memperbarui daftar, tambahkan atau ubah item di array `skills` dalam file tersebut.

## Menjalankan secara lokal

Pastikan Node.js dan npm telah terpasang. Buka terminal pada folder project, lalu jalankan:

```bash
npm install
npm run dev
```

Perintah pertama memasang dependensi project. Perintah kedua menjalankan server pengembangan Next.js. Setelah server siap, buka [http://localhost:3000](http://localhost:3000) di browser.

Untuk menghentikan server, kembali ke terminal dan tekan **Ctrl+C**.

## Port

Port default portfolio adalah **3000**. Jika port tersebut sedang digunakan aplikasi lain, Next.js akan menampilkan port alternatif di terminal. Gunakan alamat yang ditampilkan di sana.

## Pemeriksaan project

Jalankan perintah berikut dari folder project untuk memeriksa kode dan membuat build produksi:

```bash
npm run lint
npm run build
```
