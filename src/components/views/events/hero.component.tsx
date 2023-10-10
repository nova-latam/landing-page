import { Section } from '@/components/common/containers'
import { SectionSubtitle, SectionTitle } from '@/components/common/text'
import React from 'react'

export default function Hero() {
  return (
    <Section className={"bg-[url('/images/hero/bg.jpg')]"}>
        <SectionTitle title='Eventos' />
        <SectionSubtitle subtitle="Eventos" />
    </Section>
  )
}
