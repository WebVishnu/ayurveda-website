export const menuItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Blog", href: "/#blog" },
];

export const helpdata: { icon: string; title: string; text: string }[] = [
  {
    icon: "/images/help/donation.svg",
    title: "Works on Root Cause",
    text: "Ayurveda addresses the root cause of health issues, not just symptoms. Our products are formulated to treat the underlying imbalances.",
  },
  {
    icon: "/images/help/volunteer.svg",
    title: "No Side Effects",
    text: "100% natural, herbal products with no harmful side effects. Made from pure Ayurvedic ingredients for safe and effective results.",
  },
  {
    icon: "/images/help/food-supply.svg",
    title: "Balance Tridosha",
    text: "Helps balance the three doshas (Vata, Pitta, Kapha) for optimal health and wellness. Restore your body's natural equilibrium.",
  },
];

export const FeaturedProducts: {
  image: string;
  name: string;
  slug: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: string;
}[] = [
  {
    image: "/images/causes/cause-3.png",
    name: "AROGYA LIVER LIFE",
    slug: "arogya-liver-life",
    description: "Natural liver support and detoxification formula. Helps maintain healthy liver function and promotes natural detoxification.",
    price: "₹1,555.00",
  },
  {
    image: "/images/causes/cause-2.png",
    name: "AROGYA MADHUNASHAK CAPSULE",
    slug: "arogya-madhunashak-capsule",
    description: "Ayurvedic solution for blood sugar management. Supports healthy glucose levels naturally.",
    price: "₹1,483.00",
  },
  {
    image: "/images/causes/cause-1.png",
    name: "AROGYA WOMEN CARE",
    slug: "arogya-women-care",
    description: "Complete women's health and wellness support. Formulated with natural ingredients for women's specific health needs.",
    price: "₹1,876.00",
  },
];

// Eventdata removed - not needed for ecommerce

export const footerLinks: { link: string; href?: string }[] = [
  {
    link: "About",
    href: "/about",
  },
  {
    link: "Blogs",
    href: "/blog",
  },
  {
    link: "My account",
    href: "/account",
  },
  {
    link: "Order Tracking",
    href: "/orders",
  },
  {
    link: "Checkout",
    href: "/checkout",
  },
  {
    link: "Contact",
    href: "/contact",
  },
  {
    link: "Term & Conditions",
    href: "/terms",
  },
  {
    link: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    link: "Return & Refund Policy",
    href: "/returns",
  },
  {
    link: "FAQ",
    href: "/faq",
  },
];

export const Reviews: {
  clientImg: string;
  clientName: string;
  review: string;
  post: string;
}[] = [
  {
    clientImg: "/images/testimonial/client-1.jpg",
    clientName: "Adam Sendler",
    review:
      "Arogya Jeevan Ayurveda products have transformed my health. The natural approach works wonders! I've been using their liver care product for 3 months and feel amazing.",
    post: "Designer",
  },
  {
    clientImg: "/images/testimonial/client-2.jpg",
    clientName: "Mila Kunis",
    review:
      "I've been using their products for months and the results are amazing. Highly recommended! The quality is exceptional and the customer service is outstanding.",
    post: "Manager",
  },
];
