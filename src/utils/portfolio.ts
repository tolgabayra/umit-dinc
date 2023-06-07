import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { StringKeyValueType } from '../types';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  facebook: 'https://www.facebook.com',
  instagram: 'https://www.instagram.com/akselmimari',
  twitter: 'https://twitter.com',
  mail: 'akselmimaritasarim@gmail.com',
  linkedin: 'https://www.linkedin.com/',
};

export const author = {
  name: 'Aksel Mimari Tasarim',
  email: 'akselmimaritasarim@gmail.com',
};

export const seoData = {
  title: 'Umit Dinc | Full-Stack Developer',
  description:
    'Umit Dinc is a full-stack developer who specializes in building (and occasionally designing) exceptional visual interfaces.',
  author: author.name,
  image: '',
  url: '',
  keywords: [],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection = {
  navLinks: [
    { name: 'Hakkımda', url: '/#about' },
    { name: 'Projelerim', url: '/#projects' },
    { name: 'İletişim', url: '/#contact' },
  ],
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: '',
  title: 'Aksel Mimari Tasarım',
  tagline: 'İnoaktif çözümler sunarak, projelerinizi hayata geçiriyoruz.',
  description: 'Bütünde mükemmelliğin aracı ayrıntılardır.',
  // description:
  //   "I'm a passionate Full Stack web developer having an experience of web  applications with React.js, Next.js and Blockchain development on Ethereum, Solidity and Web3.js.",
  specialText: '',
  // either button or simple text (information)
  cta: {
    title: 'see my resume',
    url: ``,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'Hakkımızda',
  // Paragraphs need to be changed from containers/About.tsx
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title:
      'Üzerinde çalıştığım ve aktif olarak kullandığım program ve yazılımlar:',
    items: ['AutoCAD', 'SketchUP', 'Lumion', 'Adobe PS'],
  },
  img: '/vatsal-singh.jpg',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'Neler yapıyoruz ?',
  skills: [
    
    {
      id: getId(),
      title: 'Çeşitli Proje Hizmetlerimiz',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Mimari ve İç mimari 2 boyutlu / 3 boyutlu konsept proje tasarımı        ',
        'İç mimari dekorasyon projeleri',
        'Mobilya, dekoratif ve endüstriyel ürün konsept tasarımı',
        '3d görsel sunum ve katalog çalışmaları'
      ],
      softwareSkills: [],
    },
    /* {
      id: getId(),
      title: 'blockchain development',
      lottie: {
        light: '/lotties/ethereum.json',
        dark: '/lotties/ethereum-dark.json',
      },
      points: [
        'Experience in developing Smart Contract using Solidity & Ethereum',
        'Developing NFT Smart Contracts using ERC-721 Token Standard',
        'Building Dapps with React.js & Solidity using Web3.js',
      ],
      softwareSkills: [
        { name: 'ethereum', icon: 'logos:ethereum' },
        { name: 'solidity', icon: 'logos:solidity' },
        { name: 'web3js', icon: 'logos:web3js' },
        { name: 'metamask', icon: 'logos:metamask-icon' },
      ],
    }, */
  ],
};

// * Experience Section


// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'Projelerimiz',
  projects: [
    {
      id: getId(),
      name: 'Florya Evleri Dış Cephe Tasarımı',
      url: '',
      repo: '',
      img: '',
      year: 2023,
      tags: ['Skecth UP Pro', 'Lumion'],
    },
    {
      id: getId(),
      name: 'Proje 2',
      url: '',
      repo: '',
      img: '',
      year: 2022,
      tags: ['AutoCAD', 'Luminon'],
    },
    {
      id: getId(),
      name: 'Proje 3',
      url: '',
      repo: '',
      img: '',
      year: 2022,
      tags: ['Skecth UP Pro'],
    },
   

  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'İletişim',
  subtitle: 'Beraber çalışma fırsatı yakalayın',
  paragraphs: ['Benimle iletişime geçin'],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },

    {
      icon: 'lucide:facebook',
      url: socialLinks.facebook,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Design & Built by Tolga BAYRAK',
  link: 'https://github.com/tolgabayra',
};
