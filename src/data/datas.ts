import { IBenefit, IPriceCard } from "~/types/types";

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
      "Suitable for small businesses and startups who want to have a professional website to increase their online presence.",
    isPopular: true,
    plans: [
      "Custom Design",
      "Responsive Layout",
      "Basic SEO Optimization",
      "1 Month Free Support",
    ],
  },
  {
    id: 2,
    title: "Student Bundle",
    price: 150000,
    description:
      "Suitable for small businesses and startups who want to have a professional website to increase their online presence.",
    isPopular: false,
    plans: [
      "Custom Design",
      "Responsive Layout",
      "Basic SEO Optimization",
      "3 Month Free Support",
    ],
  },
  {
    id: 3,
    title: "Pro Bundle",
    price: 1500000,
    description:
      "Suitable for small businesses and startups who want to have a professional website to increase their online presence.",
    isPopular: false,
    plans: [
      "Custom Design",
      "Responsive Layout",
      "Advanced SEO Optimization",
      "6 Month Free Support",
    ],
  },
  {
    id: 4,
    title: "Company Bundle",
    price: 7000000,
    description:
      "Suitable for Company and startups who want to have a professional website to increase their online presence.",
    isPopular: false,
    plans: [
      "Custom Design",
      "Responsive Layout",
      "Advanced SEO Optimization",
      "6 Month Free Support",
    ],
  },
];

export { benefits, pricings };
