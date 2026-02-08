/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: 'BestRudraksha.com - Original Certified Rudraksha Beads Online India',
  description: 'Buy authentic, certified Rudraksha beads online. Original 1-21 Mukhi Rudraksha, Malas, Bracelets with lab certification. Free shipping across India. Spiritual healing & meditation.',
  canonical: 'https://bestrudraksha.com',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://bestrudraksha.com',
    siteName: 'BestRudraksha.com',
    title: 'BestRudraksha.com - Original Certified Rudraksha Beads Online India',
    description: 'Buy authentic, certified Rudraksha beads online. Original 1-21 Mukhi Rudraksha, Malas, Bracelets with lab certification. Free shipping across India.',
    images: [
      {
        url: 'https://bestrudraksha.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BestRudraksha - Original Certified Rudraksha Beads',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@bestrudraksha',
    site: '@bestrudraksha',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'rudraksha, rudraksha beads, original rudraksha, certified rudraksha, 1 mukhi rudraksha, 5 mukhi rudraksha, rudraksha mala, rudraksha bracelet, spiritual beads, meditation beads, hindu prayer beads, rudraksha online, buy rudraksha, authentic rudraksha, nepal rudraksha, rudraksha benefits, rudraksha price, rudraksha shop, rudraksha india, rudraksha healing, rudraksha jewelry, rudraksha pendant, rudraksha necklace, rudraksha for health, rudraksha for success, rudraksha for peace, rudraksha astrology, rudraksha mantra, rudraksha meditation, rudraksha chakra, rudraksha energy, rudraksha spiritual, rudraksha religious, rudraksha hindu, rudraksha lord shiva, rudraksha mahadev, rudraksha om, rudraksha yantra, rudraksha gemstone, rudraksha crystal, rudraksha therapy, rudraksha wellness, rudraksha lifestyle'
    },
    {
      name: 'author',
      content: 'BestRudraksha.com'
    },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    },
    {
      name: 'googlebot',
      content: 'index, follow'
    },
    {
      name: 'bingbot',
      content: 'index, follow'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      name: 'theme-color',
      content: '#800000'
    },
    {
      name: 'msapplication-TileColor',
      content: '#800000'
    },
    {
      property: 'fb:app_id',
      content: 'your_facebook_app_id'
    }
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180'
    },
    {
      rel: 'manifest',
      href: '/manifest.json'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous'
    }
  ],
};

export default defaultSEOConfig;