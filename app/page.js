import CollapseCardFeatures from '@/components/feature'
import ShuffleHero from '@/components/heroSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <ShuffleHero />
       <CollapseCardFeatures />
    </main>
  )
}
