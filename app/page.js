"use client"
import ModaleLogin from '@/components/ModaleLogin';
import CollapseCardFeatures from '@/components/feature'
import ShuffleHero from '@/components/heroSection'
import SlidePricing from '@/components/pricing'
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
 
  return (
    <main className="mt-24 w-full">
       <ShuffleHero />
       <CollapseCardFeatures />
       <SlidePricing />
    </main>
  )
}
