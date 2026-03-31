import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturedCollection } from '../components/home/FeaturedCollection';
import { BeveragesShowcase } from '../components/home/BeveragesShowcase';
import { BeansShowcase } from '../components/home/BeansShowcase';
import { EquipmentShowcase } from '../components/home/EquipmentShowcase';
import { OriginStory } from '../components/home/OriginStory';
import { BrewingExperience } from '../components/home/BrewingExperience';
import { Testimonials } from '../components/home/Testimonials';
import { NewsletterCTA } from '../components/home/NewsletterCTA';
import { SectionDivider } from '../components/SectionDivider';

export function Home() {
  return (
    <main>
      <HeroSection />
      <SectionDivider variant="wave" topColor="#FAF8F5" bottomColor="#FAF8F5" />
      <FeaturedCollection />

      {/* Beverages — dark immersive section */}
      <SectionDivider
        variant="organic-blob"
        topColor="#FAF8F5"
        bottomColor="#1B0E07"
      />
      <BeveragesShowcase />

      {/* Beans — cream/light section */}
      <SectionDivider
        variant="coffee-stain"
        topColor="#1B0E07"
        bottomColor="#FAF8F5"
        flip
      />
      <BeansShowcase />

      {/* Equipment — warm gradient section */}
      <SectionDivider
        variant="wave"
        topColor="#FAF8F5"
        bottomColor="#EDE8E3"
      />
      <EquipmentShowcase />

      {/* Origin story */}
      <SectionDivider
        variant="organic-blob"
        topColor="#FAF8F5"
        bottomColor="#1B0E07"
      />
      <OriginStory />
      <SectionDivider
        variant="coffee-stain"
        topColor="#1B0E07"
        bottomColor="#EDE8E3"
        flip
      />

      <BrewingExperience />
      <SectionDivider variant="wave" topColor="#EDE8E3" bottomColor="#FAF8F5" />
      <Testimonials />
      <SectionDivider
        variant="diagonal"
        topColor="#FAF8F5"
        bottomColor="#1A1A1A"
      />
      <NewsletterCTA />
    </main>
  );
}
