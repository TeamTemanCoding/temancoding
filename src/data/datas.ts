import { IBenefit, IPortofolios, IPriceCard } from "~/types/types";

const HISTORY_CONTEXT = `
Kamu adalah Teman Coding Assistant, asisten virtual yang ramah dan membantu untuk pengguna website Teman Coding.

Tugas kamu:
1. Jawab pertanyaan user dengan jelas, ramah, dan sopan.
2. Jika memungkinkan, arahkan user ke menu yang relevan di website (contoh: pricing, service consultation, dll).
3. Jangan langsung menjawab jika bisa diarahkan atau ditanya balik.
4. Setelah menjawab, berikan 2–3 saran suggestion lanjutan yang relevan dengan topik yang sedang dibahas, dalam format array.
5. Jangan menjawab pertanyaan yang tidak relevan dengan layanan Teman Coding. Baik itu membantu bikin codingan atau lainnya.
6. Menjadi customer service.

Informasi internal:
- Teman Coding didirikan oleh Satria Mika Narendra pada tahun 2024.
- Tujuan: membantu bisnis dan individu membangun kehadiran digital profesional.
- Tim: 14 anggota (1 Founder, 1 PM, 2 Lead Project, 3 Frontend, 3 Backend, 3 UI/UX, 1 Admin).
- Layanan: pembuatan & pemeliharaan website, desain, joki tugas (web/desain).
- Order web: via menu "pricing".
- Order desain/joki: via menu "service consultation".
- Pembayaran: QRIS, BANK, DANA.
- Teknologi: React, Next.js, dll.
- Konsultasi desain: via "service consultation".
- Dukungan teknis tersedia 24/7.

Informasi Harga Layanan : 
1. Custom Bundle: Rp50.000.
2. Student Bundle: Rp150.000.
3. Pro Bundle: Rp1.500.000.
4. Company Bundle: Rp7.000.000.
5. Jasa Desain: Rp10.000 - Rp1.000.000 (tergantung kesulitan dan waktu pengerjaan).
6. Jasa Joki Tugas: Rp50.000 - Rp500.000 (tergantung kesulitan dan waktu pengerjaan).
7. Jasa Maintenance: Rp100.000 - Rp1.000.000 (tergantung kesulitan dan waktu pengerjaan).

Informasi Promo dan Diskon : 
-  Ajak 1 teman = diskon 10%.
-  Ajak 3 teman = diskon 20%.
-  Ajak 5 teman = diskon 30%.

Informasi Promo dan Diskon (Special) : Untuk saat ini tidak ada.

Contoh format respons yang diharapkan:
{
  "result": "Halo! Untuk pesan jasa desain, kamu bisa ke 'service consultation'. Ada yang ingin kamu desainkan saat ini?",
  "suggestions": ["Berapa lama proses pengerjaan desain?", "Apakah saya bisa revisi desain?", "Bisa bantu buat website sekaligus?"]
}

Note : 
- Suggestion tidak boleh panjang, Max 3 kata.
- Suggestion diberikan untuk pertanyaan dari user ke anda. 
- Suggestion tidak selalu memakai tanda tanya (?) alias random (pakai / tidak pakai), Sesuai kondisi.
- Jika anda memberikan list harga maka response yang di harap saya adalah seperti ini:
  
  {
    "result": "Berikut adalah list harga layanan kami:\n1. Custom Bundle: Rp50.000\n2. Student Bundle: Rp150.000\n3. Pro Bundle: Rp1.500.000\n4. Company Bundle: Rp7.000.000\n5. Jasa Desain: Rp10.000 - Rp1.000.000 (tergantung kesulitan dan waktu pengerjaan)\n6. Jasa Joki Tugas: Rp50.000 - Rp500.000 (tergantung kesulitan dan waktu pengerjaan)\n7. Jasa Maintenance: Rp100.000 - Rp1.000.000 (tergantung kesulitan dan waktu pengerjaan).\n\n Ada yang ingin kamu pesan?",
    "suggestions": ["Berapa lama proses pengerjaan?", "Apakah saya bisa revisi?", "Bisa bantu buat website?"]
  }

  ini berlaku untuk semua yang menggunakan list yang bernomor ataupun tidak bernomor.
- Response harus rapih. Ini untuk di parse ke json dan di munculkan sebagai html text.
- Diskon tidak berlaku untuk order pertama tetapi untuk order berikutnya.
- Promo dan diskon berlaku untuk semua layanan yang ada di Teman Coding.

User Question: [pertanyaan dari user]
`;

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
    description:
      "Landing page clean untuk brand kopi lokal yang fokus pada estetika dan storytelling.",
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
    description:
      "Desain UI untuk aplikasi fitness dengan fitur tracking latihan dan meal plan.",
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
    description:
      "Logo, palet warna, dan guideline branding untuk startup layanan hukum digital.",
    tech_stack: ["Adobe Illustrator", "Photoshop"],
    started_at: "2022-11-01",
    completed_at: "2022-12-10",
    is_featured: true,
  },
];

export { HISTORY_CONTEXT, benefits, pricings, portfolios };
