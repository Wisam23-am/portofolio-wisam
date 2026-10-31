import { ExperienceItem } from '@/types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-dayoff',
    role: 'Mobile Developer & Backend Developer',
    company: 'Projek DayOff — IT PENS X PT.SINDIKA',
    location: 'Surabaya, Jawa Timur (PBL)',
    period: 'Feb 2026 — Present',
    type: 'Contract',
    featured: true,
    description: [
      'Merancang dan membangun aplikasi mobile manajemen cuti enterprise menggunakan Flutter dengan arsitektur Melos Monorepo dan Clean Architecture.',
      'Mengembangkan alur multi-level approval terintegrasi (Level 1 Manager -> Level 2 HR) dengan proteksi anti-duplicate action lock.',
      'Membangun modul interaktif Team Calendar Timeline dengan sinkronisasi dual-axis scroll untuk memvisualisasikan ketersediaan tim secara real-time.',
      'Mengintegrasikan sistem push notifikasi FCM dengan arsitektur deep-link cold-start (Pend-and-Route) dan mengoptimasi performa latensi keyboard serta transisi tema instan.'
    ],
    technologies: ['Flutter', 'Dart', 'Melos', 'ASP.NET Core', 'Supabase', 'PostgreSQL', 'Firebase (FCM)', 'Clean Architecture'],
  },
  {
    id: 'edu-pens',
    role: 'Diploma IV (D4) — Teknik Informatika',
    company: 'Politeknik Elektronika Negeri Surabaya (PENS)',
    location: 'Sukolilo, Surabaya, Jawa Timur',
    period: 'Aug 2024 — Sekarang',
    type: 'Education',
    featured: true,
    description: [
      'Indeks Prestasi Kumulatif (IPK): 3.53 / 4.00.',
      'Fokus kurikulum dan riset: Rekayasa Perangkat Lunak, Struktur Data & Algoritma, Pemrograman Berorientasi Objek (PBO), Basis Data Lanjut, Sistem Operasi, dan Kecerdasan Buatan (AI).'
    ],
    technologies: ['Flutter', 'React', 'Next.js', 'ASP.NET', 'PostgreSQL', 'Java', 'Python', 'C++'],
  },
  {
    id: 'org-osis-koor',
    role: 'Koordinator Seksi Bidang 4',
    company: 'OSIS SMA Negeri 1 Paciran',
    location: 'Paciran, Lamongan, Jawa Timur',
    period: 'Oct 2022 — Sep 2023',
    type: 'Freelance',
    featured: false,
    description: [
      'Memimpin perencanaan dan pelaksanaan program kerja keorganisasian Seksi Bidang 4.',
      'Mengkoordinasikan kepanitiaan kegiatan kesiswaan serta memfasilitasi komunikasi antar pengurus OSIS dan dewan guru.'
    ],
    technologies: ['Leadership', 'Team Coordination', 'Event Management', 'Public Speaking'],
  },
  {
    id: 'org-osis-anggota',
    role: 'Anggota Seksi Bidang 4',
    company: 'OSIS SMA Negeri 1 Paciran',
    location: 'Paciran, Lamongan, Jawa Timur',
    period: 'Oct 2021 — Sep 2022',
    type: 'Freelance',
    featured: false,
    description: [
      'Berpartisipasi aktif dalam eksekusi berbagai kegiatan kesiswaan dan keorganisasian sekolah.',
      'Mengasah kemampuan kolaborasi tim, komunikasi interpersonal, dan manajemen waktu.'
    ],
    technologies: ['Teamwork', 'Communication', 'Organization'],
  },
  {
    id: 'edu-sma',
    role: 'Jurusan MIPA (Senior High School)',
    company: 'SMA Negeri 1 Paciran',
    location: 'Paciran, Lamongan, Jawa Timur',
    period: 'Jul 2021 — May 2024',
    type: 'Education',
    featured: false,
    description: [
      'Lulus dari jurusan Matematika dan Ilmu Pengetahuan Alam (MIPA).',
      'Aktif dalam kegiatan organisasi kesiswaan dan ekstrakurikuler sekolah.'
    ],
    technologies: ['Mathematics', 'Natural Sciences', 'Logical Problem Solving'],
  },
];
