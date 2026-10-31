# Dunia Wisam

Portofolio 3D Aqila Wisam Madani Ma’murri, dibangun dalam repository Next.js yang sama agar koneksi GitHub–Vercel tetap bisa digunakan.

## Menjalankan

```bash
npm ci
npm run dev
```

Buka `http://localhost:3000` untuk memulai dengan tampilan 3D. Tombol Versi sederhana membuka tampilan 2D hanya untuk kunjungan saat itu; membuka ulang halaman utama akan kembali ke 3D. Gunakan `/?mode=2d` untuk tautan langsung ke versi sederhana, atau `/#achievement` untuk membuka zona tertentu. Fallback aksesibilitas dan perangkat tetap berlaku.

## Interaksi

- Klik bangunan, label, menu, atau peta untuk berjalan ke sebuah zona. Panel terbuka saat karakter tiba.
- Tujuan dapat diganti saat berjalan. Rute mengikuti jalan melingkar di plaza.
- Tutup panel dengan tombol tutup, Escape, atau klik di luar panel. Panah kiri/kanan memilih zona sebelumnya/berikutnya. Di ponsel, pegangan panel dapat digeser turun.
- Tombol +/− mengatur ukuran dunia; tombol reset mengembalikan ukuran awal. Tombol bulan/matahari mengganti suasana.
- Versi sederhana menyajikan seluruh konten yang sama, termasuk saat JavaScript tidak aktif. Reduced motion dan perangkat dengan memori sangat terbatas memakai versi sederhana secara default; kegagalan WebGL juga mengaktifkan fallback.
- Tidak ada backend, API key, database, atau model 3D dari CDN. Bangunan dan avatar dibuat dari geometri di dalam proyek.

## Mengubah konten

- `src/content/portfolio.ts`: profil, pendidikan, organisasi, pencapaian, skill, pengalaman DayOff, dan empat proyek dari resume.
- `src/content/zones.ts`: label, warna, dan posisi kelima zona.
- `public/cv-aqila-wisam.docx`: file resume asli untuk tombol Unduh CV.
- `public/images/wisam-foto.jpg`: foto pemilik untuk logo, profil, dan ikon situs.
- `src/components/portfolio/portfolio.css`: tampilan desktop, ponsel, dan versi sederhana.
- `src/components/portfolio/World.tsx`: pulau, bangunan, karakter, animasi, pencahayaan, dan kamera.
- `src/lib/navigation.ts`: graf waypoint dan pencarian rute A*.
- `src/store/portfolio.ts`: navigasi, panel, dan mode tampilan.

Konten baru bersumber dari resume yang diberikan. File data dan komponen lama tetap tersedia di repository, tetapi halaman utama menggunakan komponen portofolio baru. URL `/projects` dan `/projects/[slug]` diarahkan ke bagian proyek pada versi sederhana.

## Validasi

```bash
npm run lint
npm test
npm run build
```

Pengujian memeriksa semua pasangan zona, jarak perjalanan, jalur terhadap bangunan, penggantian tujuan, reduced motion, dan pemulihan dari kegagalan grafik. Angka Lighthouse atau FPS belum merupakan jaminan.

## Deployment Vercel

Tetap gunakan repository, proyek Vercel, dan root directory yang saat ini terhubung. Framework tetap Next.js; perintah build `npm run build`; output directory mengikuti pengaturan default Next.js. Migrasi ke Vite tidak diperlukan untuk pengalaman 3D ini.

Commit dan push ke branch yang dikonfigurasi sebagai Production Branch di Vercel akan memicu deployment sesuai integrasi yang sudah ada. Push branch lain dapat membuat Preview Deployment bila fitur itu diaktifkan. Periksa preview sebelum menggabungkan perubahan ke production.

Gunakan Node.js 22.12+ atau 24 untuk pengembangan dan pengujian. Build produksi memakai Webpack bawaan Next.js karena worker Turbopack untuk React Compiler gagal pada lingkungan Windows yang digunakan saat implementasi. Hosting tetap menggunakan Next.js seperti sebelumnya. Atribusi pustaka tersedia di `CREDITS.md`.
