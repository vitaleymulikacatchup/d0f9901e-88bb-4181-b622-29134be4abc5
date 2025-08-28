"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import BentoMediaGallery from '@/components/bento/BentoMediaGallery/BentoMediaGallery';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'highlight' }}>
      <NavbarBase
        brand='Nebula Lens'
        leftActionLabel='Menu'
        rightActionLabel='Contact'
        onLeftAction={() => {}}
        onRightAction={() => {}}
      />
      <BillboardHero
        title='Capture the Infinite'
        subtitle='Explore the beauty of the cosmos through my lens'
      />

      <SplitAbout
        heading='About Me'
        body='I am a passionate photographer capturing the beauty of the universe and the stories it tells.'
      />

      <HowToBuy3D
        heading='How to Book'
        items={[
          { title: 'Inquire', description: 'Reach out for shoot inquiries.', image: '/images/placeholder1.avif'},
          { title: 'Schedule', description: 'Choose a convenient time.', image: '/images/placeholder2.avif' },
          { title: 'Shoot Day', description: 'Let’s create magic together!', image: '/images/placeholder3.avif' }
        ]}
      />

      <TextGridTokenomics
        title='Key Stats'
        description='Highlights of my photography business stats'
        tokenData={[
          { value: '200', description: 'Photos Taken' },
          { value: '50', description: 'Satisfied Clients' },
          { value: '100', description: 'Projects Completed' }
        ]}
      />

      <BentoMediaGallery
        items={[
          { title: 'Glimpse of the Galaxy', image: '/images/placeholder4.avif' },
          { title: 'Nebula Dreams', image: '/images/placeholder5.avif' },
          { title: 'Galactic Journeys', image: '/images/placeholder6.avif' },
          { title: 'Star Light', image: '/images/placeholder7.avif' }
        ]}
      />

      <CentralFAQ
        heading='Frequently Asked Questions'
        lead='Got questions? We have answers!'
        items={[
          { title: 'What to expect in a shoot?', content: 'A unique experience with personalized attention towards your vision.' },
          { title: 'How to book?', content: 'Simply reach out via the contact form!' },
          { title: 'What is your timeframe for delivery?', content: 'You can expect your photos within 2-3 weeks post-shoot.' }
        ]}
      />
    </SiteThemeProvider>
  );
}