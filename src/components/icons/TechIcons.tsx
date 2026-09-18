import * as React from 'react';

export function TechIcon({ name, className = 'w-8 h-8' }: { name: string; className?: string }) {
  const iconKey = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (iconKey) {
    case 'html':
    case 'html5':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M3.5 2l1.5 17.5 7 2 7-2L20.5 2H3.5z" fill="#E44D26" />
          <path d="M12 3.8v16.1l5.5-1.5 1.2-14.6H12z" fill="#F16529" />
          <path d="M7.2 7h9.6l-.3 3H7.5l.3 3.5h8.4l-.5 4.5-3.7 1-3.7-1-.2-2H6.2l.4 3.8 5.4 1.5 5.4-1.5 1-9.5H7z" fill="#fff" />
        </svg>
      );

    case 'css':
    case 'css3':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M3.5 2l1.5 17.5 7 2 7-2L20.5 2H3.5z" fill="#1572B6" />
          <path d="M12 3.8v16.1l5.5-1.5 1.2-14.6H12z" fill="#33A9DC" />
          <path d="M7.2 7h9.6l-.3 3H7.5l.3 3.5h8.4l-.5 4.5-3.7 1-3.7-1-.2-2H6.2l.4 3.8 5.4 1.5 5.4-1.5 1-9.5H7z" fill="#fff" />
        </svg>
      );

    case 'js':
    case 'javascript':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path d="M7 14.5c.5.8 1.2 1.5 2.2 1.5 1.2 0 1.8-.7 1.8-2.2V9" stroke="#000" strokeWidth="2" strokeLinecap="round" />
          <path d="M14 15.5c.8.8 1.8 1 2.8.5.8-.4 1.2-1.2 1.2-2 0-1.4-1.2-1.8-2.4-2.3-.9-.4-1.6-.8-1.6-1.7 0-.8.6-1.5 1.8-1.5 1 0 1.8.5 2.2 1.2" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'ts':
    case 'typescript':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#3178C6" />
          <path d="M6 9h7M9.5 9v9" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 17.5c1 .8 2.2.8 3 .2.8-.7.6-1.8-.4-2.3l-1.5-.7c-1.3-.6-1.8-1.8-.8-3 .8-.9 2.2-.9 3.2-.2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'java':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#EA2D2E" />
          <path d="M12 4.5c-2.5 0-3.5 1-3.5 2s1.5 1.5 3.5 1.5 3.5-1 3.5-2-1-1.5-3.5-1.5zm-5 5c0 1.5 2.2 2.5 5 2.5s5-1 5-2.5-2.2-2-5-2-5 .5-5 2zm1 3.5c0 1.8 1.8 2.5 4 2.5s4-.7 4-2.5v1.2c0 1.8-1.8 2.8-4 2.8s-4-1-4-2.8V13zm0 3.5c0 1.8 1.8 2.5 4 2.5s4-.7 4-2.5v1c0 1.8-1.8 2.5-4 2.5s-4-.7-4-2.5v-1z" fill="#fff" />
        </svg>
      );

    case 'c':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#5C6BC0" />
          <path d="M15.5 8.5C14.5 7.5 13.5 7 12 7c-2.8 0-5 2.2-5 5s2.2 5 5 5c1.5 0 2.5-.5 3.5-1.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'csharp':
    case 'c':
    case 'cs':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#9B4993" />
          <path d="M12.5 8C11.5 7.2 10.5 7 9.5 7 7.5 7 6 8.8 6 12s1.5 5 3.5 5c1 0 2-.2 3-1" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          <path d="M14.5 9v6M17.5 9v6M13.5 11h5M13.5 13h5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case 'react':
    case 'reactjs':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
        </svg>
      );

    case 'nextjs':
    case 'next':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="11" fill="#000000" />
          <path d="M7.5 17V7.5h2.2l6.8 9.5h-2.2l-4.6-6.5V17H7.5z" fill="#ffffff" />
          <path d="M15 7.5h2.2V14H15V7.5z" fill="#ffffff" fillOpacity="0.7" />
        </svg>
      );

    case 'tailwind':
    case 'tailwindcss':
    case 'railwind':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M6 8.5c1.5-2 3.5-2.5 6-1.5 2.8 1.1 4 2.5 5.5 2.5 2 0 3.5-1.2 4.5-3.5-1.5 2-3.5 2.5-6 1.5-2.8-1.1-4-2.5-5.5-2.5-2 0-3.5 1.2-4.5 3.5zm-4 7c1.5-2 3.5-2.5 6-1.5 2.8 1.1 4 2.5 5.5 2.5 2 0 3.5-1.2 4.5-3.5-1.5 2-3.5 2.5-6 1.5-2.8-1.1-4-2.5-5.5-2.5-2 0-3.5 1.2-4.5 3.5z" fill="#38BDF8" />
        </svg>
      );

    case 'flutter':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M13.5 2.5L3.5 12.5l3.1 3.1L19.7 2.5H13.5z" fill="#42A5F5" />
          <path d="M13.5 12.5L8.5 17.5l3.1 3.1 8.1-8.1H13.5z" fill="#0D47A1" />
          <path d="M8.5 17.5l3.1 3.1 3.1-3.1-3.1-3.1-3.1 3.1z" fill="#29B6F6" />
        </svg>
      );

    case 'dart':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M4 4l9.5 9.5-2.5 5.5L4 12V4z" fill="#0175C2" />
          <path d="M4 4l12 1.5L20 9.5l-6.5 4L4 4z" fill="#02569B" />
          <path d="M11 19l2.5-5.5 6.5-4v5.5L14 20h-3z" fill="#29B6F6" />
        </svg>
      );

    case 'php':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#777BB4" />
          <text x="12" y="16" textAnchor="middle" fill="#fff" fontFamily="monospace, sans-serif" fontWeight="900" fontSize="10">PHP</text>
        </svg>
      );

    case 'laravel':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#FF2D20" />
          <path d="M5.5 8.5L12 5l6.5 3.5v7L12 19l-6.5-3.5v-7z" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M12 5v14M5.5 8.5l6.5 3.5 6.5-3.5" stroke="#fff" strokeWidth="1.8" />
        </svg>
      );

    case 'net':
    case 'dotnet':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#512BD4" />
          <text x="12" y="16" textAnchor="middle" fill="#fff" fontFamily="system-ui, sans-serif" fontWeight="bold" fontSize="9">.NET</text>
        </svg>
      );

    case 'git':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#F05032" />
          <circle cx="9" cy="9" r="2" fill="#fff" />
          <circle cx="15" cy="9" r="2" fill="#fff" />
          <circle cx="15" cy="15" r="2" fill="#fff" />
          <path d="M9 11v4l4 2M15 11v2" stroke="#fff" strokeWidth="1.5" />
        </svg>
      );

    case 'github':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#181717" />
          <path d="M12 4.5a7.5 7.5 0 00-2.37 14.62c.38.07.51-.16.51-.36v-1.3c-2.1.46-2.54-.9-2.54-.9-.34-.87-.83-1.1-.83-1.1-.68-.47.05-.46.05-.46.75.05 1.15.77 1.15.77.67 1.15 1.76.82 2.19.63.07-.49.26-.82.47-1.01-1.68-.19-3.44-.84-3.44-3.73 0-.82.29-1.5.78-2.03-.08-.19-.34-.96.07-2 0 0 .63-.2 2.07.77a7.2 7.2 0 013.76 0c1.44-.97 2.07-.77 2.07-.77.41 1.04.15 1.81.07 2 .49.53.78 1.21.78 2.03 0 2.9-1.77 3.54-3.45 3.73.27.23.51.69.51 1.39v2.06c0 .2.13.44.52.36A7.5 7.5 0 0012 4.5z" fill="#fff" />
        </svg>
      );

    case 'node':
    case 'nodejs':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2z" fill="#5FA04E" />
          <path d="M12 4.5l6.8 3.9v7.8L12 20.1 5.2 16.2V8.4L12 4.5z" fill="#333333" />
          <path d="M12 7l4 2.3v4.6L12 16.2 8 13.9V9.3L12 7z" fill="#68A063" />
        </svg>
      );

    case 'golang':
    case 'go':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#00ADD8" />
          <path d="M5 12c0-2.8 1.8-4.5 4.5-4.5 2.5 0 3.8 1.4 4.2 2.8h-2.4c-.3-.6-.8-1-1.8-1-1.4 0-2.2 1-2.2 2.7s.8 2.7 2.2 2.7c1.1 0 1.6-.5 1.8-1.2h-2.1v-1.8h4.4V16c-1.1 1-2.4 1.5-4.1 1.5C6.8 17.5 5 15.2 5 12zM15.5 12c0-3 1.6-4.5 3.8-4.5s3.7 1.5 3.7 4.5-1.5 4.5-3.7 4.5-3.8-1.5-3.8-4.5zm5.2 0c0-1.8-.5-2.7-1.4-2.7s-1.4.9-1.4 2.7.5 2.7 1.4 2.7 1.4-.9 1.4-2.7z" fill="#fff" />
        </svg>
      );

    case 'python':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M11.9 2C8.3 2 6 3.5 6 5.5V8h6v1H4.5C2.5 9 1 11.3 1 14s1.5 5 3.5 5H6v-2.5C6 14 8 12 10.5 12h3c2.2 0 4-1.8 4-4V5.5C17.5 3.5 15.5 2 11.9 2zM9 4.5a1 1 0 110 2 1 1 0 010-2z" fill="#3776AB" />
          <path d="M12.1 22c3.6 0 5.9-1.5 5.9-3.5V16h-6v-1h7.5c2 0 3.5-2.3 3.5-5s-1.5-5-3.5-5H18v2.5c0 2.5-2 4.5-4.5 4.5h-3c-2.2 0-4 1.8-4 4v4.5c0 2 2 3.5 5.6 3.5zM15 19.5a1 1 0 110-2 1 1 0 010 2z" fill="#FFD438" />
        </svg>
      );

    case 'postgre':
    case 'postgresql':
    case 'postgres':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#336791" />
          <path d="M12 4c-4.4 0-8 3.6-8 8 0 3.3 2 6.1 4.9 7.3-.2-.7-.4-1.6-.4-2.5 0-3.2 2-6.1 5-7.2.7-.3 1.5-.4 2.3-.4 1.2 0 2.3.3 3.3.8-.7-3.4-3.7-6-7.1-6z" fill="#fff" />
          <circle cx="16" cy="13" r="3" fill="#699ECA" />
          <path d="M14 18c0 1.1.9 2 2 2s2-.9 2-2v-3h-4v3z" fill="#fff" />
        </svg>
      );

    case 'supabase':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#1C1C1C" />
          <path d="M13.2 2.5L4.5 13.6h7.6L10.8 21.5l8.7-11.1h-7.6l1.3-7.9z" fill="#3ECF8E" />
        </svg>
      );

    case 'firebase':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M4.5 18.5l2-12.8 3.5 6.8-5.5 6z" fill="#FFA000" />
          <path d="M4.5 18.5l14.8-1.5L13.8 2.5l-3.8 10-5.5 6z" fill="#F57C00" />
          <path d="M10 12.5l3.8-10 2.7 5-6.5 5z" fill="#FFCA28" />
          <path d="M4.5 18.5L12 22.5l7.3-5.5-14.8 1.5z" fill="#FF6F00" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="4" fill="#3B82F6" />
          <path d="M8 9l4 3-4 3M13 15h3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}
