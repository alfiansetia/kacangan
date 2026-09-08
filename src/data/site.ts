export const site = {
  name: 'KCNET - Alfi Network',
  title: 'KCNET | Layanan Extra Untuk Device Anda | VPN Remote Gratis, Free',
  description:
    'KCNET Merupakan layanan Tunneling yang bisa digunakan untuk kebutuhan jaringan seperti vpn remote device, ddns, & cloud hosting. Solusi untuk ip publik dinamis',
  url: 'https://kacangan.net',
  author: 'Alfian Setiawan',
  themeColor: '#666DE3',
  logo: '/images/logo.png',
  ogImage: '/images/product-meta.png',
  social: {
    twitter: 'https://twitter.com/codewithalfi',
    facebook: 'https://www.facebook.com/alfian.setiawan',
    instagram: 'https://instagram.com/codewithalfi',
    tiktok: 'https://www.tiktok.com/@codewithalfi',
  },
  nav: [
    { label: 'Home', href: '/' },
    {
      label: 'Layanan',
      href: '/layanan/',
      children: [
        { label: 'Jasa Setting Mikrotik', href: '/jasa-setting-mikrotik/' },
        { label: 'Cloud Userman', href: '/cloud-userman/' },
        { label: 'VPN Remote', href: '/vpn-remote/' },
        { label: 'Template Hotspot', href: '/template-hotspot/' },
      ],
    },
    { label: 'Blog', href: 'https://blog.kacangan.net', external: true },
    { label: 'Desa', href: 'https://desa.kacangan.net', external: true },
    { label: 'Pembayaran', href: '/pembayaran/' },
  ],
} as const;

export type NavItem = (typeof site.nav)[number];
