import Banner from '@/components/banner'
import { Stats } from '@/modules/home/ui/components/stats'
import React from 'react'
import { AboutStory } from '../components/about-story'
import { NanoTechnology } from '@/modules/home/ui/components/nano-technology'
import { OurProcess } from '@/modules/home/ui/components/our-process'
import { FAQ } from '@/modules/home/ui/components/faq-section'
import { CTA } from '@/modules/home/ui/components/CTA'

const AboutView = () => {
  return (
    <>
     <Banner linkText='about' title='About Us' /> 
         <Stats/>
         <AboutStory/>
          <NanoTechnology/>
             <OurProcess/>
             <FAQ/>
             <CTA/>
     
    </>
  )
}

export default AboutView