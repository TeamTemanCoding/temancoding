import { IBenefit, IPortofolios, IPriceCard } from "~/types/types";

const DATA_CS = {
  info: `Teman Coding didirikan dengan tujuan membantu bisnis dan individu membangun kehadiran digital yang profesional dan menarik. Apa yang awalnya dimulai sebagai hobi menyenangkan kini telah berkembang menjadi tim yang berdedikasi dalam menyediakan layanan pengembangan dan pemeliharaan website yang fungsional, responsif, dan sesuai kebutuhan. Dengan fokus pada kualitas dan inovasi, setiap baris kode yang kami tulis adalah langkah menuju solusi digital yang lebih baik.`,
  founder: 'Satria Mika Narendra',
  team: `Teman Coding memiliki 14 anggota yang terdiri dari 1 Founder, 1 Project Manager, 2 Lead Project, 3 Frontend, 3 Backend, 3 UI/UX, dan 1 Admin.`,
  year: '2024',
  orderWeb: 'Silakan menuju menu pricing dan pilih bundle yang tersedia.',
  orderDesign: 'Pemesanan jasa desain bisa melalui menu service consultation.',
  orderJoki: 'Pemesanan jasa joki tugas bisa melalui menu service consultation.',
  payments: 'Metode pembayaran yang tersedia: QRIS, BANK, dan DANA.',
  jasa: "Kami menyediakan jasa pembuatan dan pemeliharaan website serta menyediakan pembuatan desain.",
  joki: "Kami bisa bisa membantu anda dalam hal joki tugas website atau tugas desain.",
  platforms: "Kami bekerja dengan teknologi terbaru seperti React, Next.js, dan lainnya untuk membangun website yang berkualitas.",
  support: "Kami menyediakan layanan dukungan teknis selama 24/7 untuk memastikan website Anda tetap berjalan dengan baik.",
  consult: "Untuk konsultasi desain, silakan hubungi kami melalui menu service consultation. Kami akan membantu Anda merancang solusi desain yang sesuai kebutuhan."
}


const benefits: IBenefit[] = [
  {
    id: 1,
    title: "Custom & Responsive Design",
    description:
      "We create custom designs that are responsive and tailored to your brand identity.",
  },
  {
    id: 2,
    title: "Easy Maintenance & Support",
    description: "We provide easy maintenance and support for your website.",
  },
  {
    id: 3,
    title: "Fast & Secure Development",
    description:
      "We develop fast and secure websites that meet your business needs.",
  },
  {
    id: 4,
    title: "Affotdable & Reliable Service",
    description:
      "We offer affordable and reliable services to help you succeed online.",
  },
  {
    id: 5,
    title: "Free Consultation",
    description:
      "Not sure where to start? We provide expert guidance and recommendations to help you create the perfect website for your needs",
  },
];

const pricings: IPriceCard[] = [
  {
    id: 1,
    title: "Custom Bundle",
    price: 50000,
    description:
      "Basic static homepage with mobile-friendly layout, great for simple personal branding.",
    isPopular: true,
    features: [
      { label: "1 Static Page", isInclude: true },
      { label: "Responsive Layout", isInclude: true },
      { label: "Template Design", isInclude: true },
      { label: "Basic SEO", isInclude: false },
      { label: "Custom Design", isInclude: false },
    ],
  },
  {
    id: 2,
    title: "Student Bundle",
    price: 150000,
    description:
      "Personal website with up to 3 pages, suitable for portfolios, resumes, or blogs.",
    isPopular: false,
    features: [
      { label: "Up to 3 Pages", isInclude: true },
      { label: "Responsive Layout", isInclude: true },
      { label: "Basic SEO", isInclude: true },
      { label: "Simple Blog", isInclude: true },
      { label: "CMS Setup", isInclude: false },
    ],
  },
  {
    id: 3,
    title: "Pro Bundle",
    price: 1500000,
    description:
      "Professional website with custom layout and advanced SEO, perfect for growing businesses.",
    isPopular: false,
    features: [
      { label: "Up to 8 Pages", isInclude: true },
      { label: "Custom Design", isInclude: true },
      { label: "Advanced SEO", isInclude: true },
      { label: "CMS Setup", isInclude: true },
      { label: "E-commerce Integration", isInclude: false },
    ],
  },
  {
    id: 4,
    title: "Company Bundle",
    price: 7000000,
    description:
      "Full-featured company site with unlimited pages, custom system, and premium support.",
    isPopular: false,
    features: [
      { label: "Unlimited Pages", isInclude: true },
      { label: "Full Custom Design", isInclude: true },
      { label: "Enterprise SEO", isInclude: true },
      { label: "E-commerce Integration", isInclude: true },
      { label: "Admin Dashboard", isInclude: true },
    ],
  },
];

const portfolios: IPortofolios[] = [
  {
    id: 1,
    title: "Coffee Shop Landing Page",
    slug: "coffee-shop-landing",
    client_name: "KopiSenja",
    category: "Website",
    thumbnail_url: "/images/portfolio/coffee-shop.png",
    project_url: "https://kopisenja.id",
    description: "Landing page clean untuk brand kopi lokal yang fokus pada estetika dan storytelling.",
    tech_stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    started_at: "2023-03-01",
    completed_at: "2023-04-15",
    is_featured: true,
  },
  {
    id: 2,
    title: "Mobile App UI for Fitness Coach",
    slug: "fitness-coach-app",
    client_name: "FitBro",
    category: "Mobile App",
    thumbnail_url: "/images/portfolio/fitness-app.png",
    project_url: "",
    description: "Desain UI untuk aplikasi fitness dengan fitur tracking latihan dan meal plan.",
    tech_stack: ["Figma", "React Native"],
    started_at: "2023-06-10",
    completed_at: "2023-07-05",
    is_featured: false,
  },
  {
    id: 3,
    title: "Brand Identity for Legal Startup",
    slug: "legal-branding",
    client_name: "HukumKu",
    category: "Branding",
    thumbnail_url: "/images/portfolio/legal-brand.png",
    project_url: "",
    description: "Logo, palet warna, dan guideline branding untuk startup layanan hukum digital.",
    tech_stack: ["Adobe Illustrator", "Photoshop"],
    started_at: "2022-11-01",
    completed_at: "2022-12-10",
    is_featured: true,
  },
];


export { DATA_CS,benefits, pricings, portfolios };
