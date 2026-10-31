import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'tbconnect',
    slug: 'tbconnect',
    title: 'TBConnect',
    summary: 'Aplikasi kesehatan mobile (Flutter) yang memfasilitasi pelacakan dan pemantauan kondisi pasien TBC.',
    description:
      'TBConnect adalah aplikasi kesehatan mobile berbasis Flutter yang dirancang untuk memfasilitasi pemantauan dan pelacakan kondisi pasien Tuberkulosis (TBC). Aplikasi ini membantu tenaga kesehatan dan pasien dalam mencatat kepatuhan minum obat harian, jadwal pemeriksaan berkala, serta rekapitulasi data kesehatan dengan arsitektur yang tangguh dan mudah digunakan di lapangan.',
    role: 'Mobile Developer (Flutter)',
    period: '2026',
    techStack: ['Flutter', 'Dart', 'Supabase', 'PostgreSQL', 'REST API', 'Tailwind CSS'],
    category: 'Mobile App',
    images: [
      '/images/projects/tbconnect-1.svg',
      '/images/projects/tbconnect-2.svg',
      '/images/projects/tbconnect-3.svg',
    ],
    repoUrl: 'https://github.com/Wisam23-am/TBConnect.git',
    featured: true,
    problem:
      'Pengobatan TBC membutuhkan kepatuhan konsumsi obat secara ketat setiap hari selama berbulan-bulan. Pemantauan manual sering menimbulkan risiko dosis terlewat dan minimnya visibilitas bagi tenaga kesehatan komunitas.',
    solution:
      'Membangun aplikasi mobile Flutter yang menyediakan checklist kepatuhan minum obat, notifikasi pengingat, dan sinkronisasi data pemantauan pasien secara terstruktur.',
    features: [
      'Pelacakan kepatuhan minum obat harian pasien TBC.',
      'Direktori dan pemantauan progres pasien untuk kader/tenaga kesehatan.',
      'Notifikasi pengingat konsumsi obat harian dan jadwal kontrol ke puskesmas/klinik.',
      'Penyimpanan data aman dan sinkronisasi cloud terpusat.'
    ],
    architecture: [
      'Frontend: Flutter untuk antarmuka mobile cross-platform Android & iOS.',
      'Backend & DB: Supabase PostgreSQL dengan Row Level Security.'
    ],
    challenges: [
      'Memastikan alur aplikasi sederhana dan ramah bagi pasien dari berbagai kelompok usia.',
      'Mengelola sinkronisasi data yang konsisten saat koneksi seluler tidak stabil.'
    ],
    metrics: [
      { label: 'Framework', value: 'Flutter' },
      { label: 'Role', value: 'Mobile Dev' },
      { label: 'Status', value: 'Active' }
    ]
  },
  {
    id: 'eatwise',
    slug: 'eatwise',
    title: 'EatWise — Food & Nutrition Analysis',
    summary: 'Food Scanner cerdas berbasis AI Gemini Flash dan Food Facts API untuk analisis nilai gizi otomatis.',
    description:
      'EatWise adalah aplikasi analisis nutrisi yang mengimplementasikan fitur Food Scanner cerdas dengan mengintegrasikan model AI Google Gemini Flash dan API Open Food Facts. Pengguna dapat mendeteksi makanan dari foto kamera untuk secara otomatis mengekstrak informasi nilai gizi (kalori, protein, lemak, karbohidrat) secara instan dan akurat.',
    role: 'Full-Stack & AI Developer',
    period: '2025',
    techStack: ['Google Gemini Flash', 'Flutter', 'Open Food Facts API', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    category: 'Mobile App',
    images: [
      '/images/projects/eatwise-1.svg',
    ],
    repoUrl: 'https://github.com/Wisam23-am/EatWise.git',
    featured: true,
    problem:
      'Pencatatan kalori dan nutrisi manual sering terasa rumit, lambat, dan menyulitkan pengguna yang ingin menjaga pola makan sehat secara konsisten.',
    solution:
      'Mengintegrasikan model AI visual Gemini Flash dan database Open Food Facts untuk menganalisis foto makanan secara otomatis tanpa input teks manual.',
    features: [
      'Food scanner cerdas berbasis pengenalan visual model AI Google Gemini Flash.',
      'Ekstraksi otomatis informasi nilai gizi: kalori, karbohidrat, protein, lemak, dan serat.',
      'Integrasi barcode scanner menggunakan database produk Open Food Facts.',
      'Dasbor rekapitulasi target nutrisi harian pengguna.'
    ],
    architecture: [
      'Mobile Client: Flutter dengan integrasi kamera dan rendering visual nutrisi.',
      'AI Layer: Google Gemini Flash Multimodal API dengan structured output schema.',
      'Database: Open Food Facts REST API.'
    ],
    challenges: [
      'Mendesain prompt AI vision yang akurat untuk mengenali variasi masakan lokal dan porsi makanan.',
      'Menjaga latensi deteksi tetap rendah di bawah 2 detik per gambar.'
    ],
    metrics: [
      { label: 'AI Model', value: 'Gemini Flash' },
      { label: 'API Partner', value: 'Food Facts' },
      { label: 'Inference', value: '< 2s' }
    ]
  },
  {
    id: 'nongkrongyuk',
    slug: 'nongkrongyuk',
    title: 'NongkrongYuk! — GIS Cafe Finder',
    summary: 'Sistem Informasi Geografis (GIS) berbasis web untuk pemetaan dan pencarian kafe di Surabaya.',
    description:
      'NongkrongYuk! adalah Sistem Informasi Geografis (GIS) berbasis web yang dibangun untuk memfasilitasi pemetaan dan pencarian kafe di kawasan Surabaya. Aplikasi ini memungkinkan pengguna mencari tempat nongkrong, belajar, atau bekerja berdasarkan lokasi interaktif, fasilitas WiFi, colokan listrik, serta suasana kafe.',
    role: 'Frontend & GIS Developer',
    period: '2026',
    techStack: ['React', 'TypeScript', 'Leaflet / GIS', 'Tailwind CSS', 'Vite', 'REST API'],
    category: 'Full Stack',
    images: [
      '/images/projects/nongkrongyuk-1.svg',
    ],
    repoUrl: 'https://github.com/zuzustack/nongkrongyuk-frontend.git',
    featured: true,
    problem:
      'Masyarakat dan mahasiswa di Surabaya sering kesulitan menemukan kafe yang sesuai dengan kebutuhan spesifik seperti ketersediaan colokan dan kenyamanan bekerja (WFC).',
    solution:
      'Membangun platform GIS interaktif dengan pemetaan koordinat spasial dan filter multi-kriteria fasilitas kafe.',
    features: [
      'Peta spasial interaktif kafe Surabaya dengan penanda titik lokasi dan klasterisasi.',
      'Pencarian dan filter kafe berdasarkan area, rentang harga, jam buka, dan fasilitas.',
      'Perhitungan jarak dan rute dari lokasi pengguna ke kafe tujuan.',
      'Tampilan profil lengkap kafe beserta ulasan dan detail fasilitas.'
    ],
    architecture: [
      'Frontend: React, TypeScript, dan Vite dengan styling Tailwind CSS.',
      'GIS: Leaflet / OpenStreetMap untuk rendering layer peta dan data GeoJSON.'
    ],
    challenges: [
      'Mengoptimalkan performa pemetaan saat menampilkan ratusan marker secara bersamaan di perangkat mobile.',
      'Mengintegrasikan sistem filter multi-parameter yang reaktif dan cepat.'
    ],
    metrics: [
      { label: 'Coverage', value: 'Surabaya' },
      { label: 'Stack', value: 'React + GIS' },
      { label: 'Map Engine', value: 'Leaflet' }
    ]
  },
  {
    id: 'benkyou-shimashou',
    slug: 'benkyou-shimashou',
    title: 'benkyou shimashou by Wi — Japanese N5 Platform',
    summary: 'Platform web pembelajaran bahasa Jepang N5 interaktif dengan flashcard dan tata bahasa dasar.',
    description:
      'benkyou shimashou by Wi adalah platform web interaktif yang dirancang khusus untuk pembelajaran bahasa Jepang tingkat dasar (JLPT N5). Menyediakan lingkungan belajar yang terstruktur untuk menguasai Hiragana, Katakana, kosakata tematik, dan pola tata bahasa dasar dengan antarmuka yang bersih dan mudah diakses.',
    role: 'Frontend Developer & UI/UX Designer',
    period: '2026',
    techStack: ['Next.js / React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    category: 'Full Stack',
    images: [
      '/images/projects/benkyou-1.svg',
    ],
    liveUrl: 'https://benkyou-rosy.vercel.app',
    featured: true,
    problem:
      'Mempelajari bahasa Jepang dari nol sering membingungkan pemula karena materi Hiragana, Katakana, dan tata bahasa N5 yang sering tersebar di berbagai sumber.',
    solution:
      'Merancang satu platform web terpadu dengan modul kartu latihan interaktif dan referensi tata bahasa yang rapi.',
    features: [
      'Latihan interaktif karakter Hiragana & Katakana beserta pelafalan romaji.',
      'Kartu hafalan kosakata N5 dengan metode drill bertahap.',
      'Ringkasan tata bahasa dasar (bunpou) disertai contoh kalimat situasional.',
      'Antarmuka web modern yang ringan, responsif, dan dapat diakses langsung via browser.'
    ],
    architecture: [
      'Frontend: React / Next.js dengan arsitektur komponen modern.',
      'Deployment: Vercel Edge Network untuk akses cepat global.'
    ],
    challenges: [
      'Menyusun layout kartu belajar yang nyaman dibaca baik pada layar smartphone maupun desktop.'
    ],
    metrics: [
      { label: 'Target Level', value: 'JLPT N5' },
      { label: 'Platform', value: 'Web App' },
      { label: 'Hosting', value: 'Vercel' }
    ]
  }
];
