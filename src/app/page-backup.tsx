// Backup of original page.tsx
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Help from '@/components/Home/Help';
import Causes from '@/components/Home/Causes';
import WhatsAppCTA from '@/components/Home/WhatsAppCTA';
import Testimonial from '@/components/Home/Testimonial';
import Newsletter from '@/components/Home/NewsLetter';

export const metadata: Metadata = {
  title: "Arogya Jeevan Ayurveda - Natural Herbal Healthcare Products",
  description: "Premium Ayurvedic products for natural health and wellness. Shop authentic herbal remedies and supplements.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Help />
      <Causes />
      <WhatsAppCTA />
      <Newsletter />
      <Testimonial />
    </main>
  );
}
