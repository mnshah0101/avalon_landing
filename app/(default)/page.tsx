export const metadata = {
  title: 'Avalon | Meet Rachel: The Ultimate AI Paralegal',
  description: 'With unmatched sophistication and precision, Rachel integrates user-provided documents with extensive online research, crafting comprehensive legal arguments and briefs with unparalleled efficiency. Rachel sets the standard for intelligent paralegal support for small to medium sized law firms.'
}

import Hero from '@/components/hero'
import Features01 from '@/components/features-01'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>

      <Hero />
      <Features01 />
      <Cta />
    </>
  )
}
