import { NextRequest, NextResponse } from 'next/server';

// Mock product data - replace with your actual product data source
const mockProducts = [
  {
    id: 1,
    title: "1 Mukhi Rudraksha",
    slug: "1-mukhi-rudraksha",
    description: "Rare and powerful 1 Mukhi Rudraksha for spiritual awakening and consciousness",
    price: 5000,
    discountedPrice: 4500,
    category: "1-14 Mukhi Rudraksha",
    mukhi: 1,
    benefits: ["Spiritual awakening", "Consciousness", "Divine connection"],
    images: ["/images/products/1-mukhi.jpg"],
    inStock: true,
    tags: ["rare", "powerful", "spiritual", "consciousness", "divine"]
  },
  {
    id: 2,
    title: "5 Mukhi Rudraksha",
    slug: "5-mukhi-rudraksha",
    description: "Most common and beneficial 5 Mukhi Rudraksha for health and peace",
    price: 150,
    discountedPrice: 120,
    category: "1-14 Mukhi Rudraksha",
    mukhi: 5,
    benefits: ["Health", "Peace", "Mental clarity", "Stress relief"],
    images: ["/images/products/5-mukhi.jpg"],
    inStock: true,
    tags: ["common", "health", "peace", "mental clarity", "stress relief"]
  },
  {
    id: 3,
    title: "7 Mukhi Rudraksha",
    slug: "7-mukhi-rudraksha",
    description: "7 Mukhi Rudraksha for wealth, prosperity and good fortune",
    price: 300,
    discountedPrice: 250,
    category: "1-14 Mukhi Rudraksha",
    mukhi: 7,
    benefits: ["Wealth", "Prosperity", "Good fortune", "Success"],
    images: ["/images/products/7-mukhi.jpg"],
    inStock: true,
    tags: ["wealth", "prosperity", "fortune", "success", "money"]
  },
  {
    id: 4,
    title: "Rudraksha Mala 108 Beads",
    slug: "rudraksha-mala-108-beads",
    description: "Traditional 108 bead Rudraksha mala for meditation and chanting",
    price: 800,
    discountedPrice: 700,
    category: "Mala and Yantra",
    mukhi: null,
    benefits: ["Meditation", "Chanting", "Spiritual practice", "Focus"],
    images: ["/images/products/mala-108.jpg"],
    inStock: true,
    tags: ["mala", "meditation", "chanting", "108 beads", "spiritual practice"]
  },
  {
    id: 5,
    title: "Blue Sapphire (Neelam)",
    slug: "blue-sapphire-neelam",
    description: "Natural Blue Sapphire gemstone for Saturn planet benefits",
    price: 2000,
    discountedPrice: 1800,
    category: "Gemstones",
    mukhi: null,
    benefits: ["Saturn benefits", "Career growth", "Discipline", "Focus"],
    images: ["/images/products/blue-sapphire.jpg"],
    inStock: true,
    tags: ["gemstone", "sapphire", "saturn", "career", "discipline"]
  },
  {
    id: 6,
    title: "Gauri Shankar Rudraksha",
    slug: "gauri-shankar-rudraksha",
    description: "Rare Gauri Shankar Rudraksha for love, harmony and relationships",
    price: 3000,
    discountedPrice: 2700,
    category: "Special Rudraksha",
    mukhi: null,
    benefits: ["Love", "Harmony", "Relationships", "Unity"],
    images: ["/images/products/gauri-shankar.jpg"],
    inStock: true,
    tags: ["rare", "love", "harmony", "relationships", "unity", "special"]
  }
];

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('q')?.toLowerCase() || '';
    const category = searchParams.get('category')?.toLowerCase() || '';
    const minPrice = parseInt(searchParams.get('minPrice') || '0');
    const maxPrice = parseInt(searchParams.get('maxPrice') || '999999');
    const mukhi = searchParams.get('mukhi') || '';
    const sortBy = searchParams.get('sortBy') || 'relevance';
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');

    let filteredProducts = mockProducts;

    // Text search
    if (query) {
      filteredProducts = filteredProducts.filter(product => 
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.benefits.some(benefit => benefit.toLowerCase().includes(query)) ||
        product.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (category) {
      filteredProducts = filteredProducts.filter(product => 
        product.category.toLowerCase().includes(category)
      );
    }

    // Price range filter
    filteredProducts = filteredProducts.filter(product => 
      product.discountedPrice >= minPrice && product.discountedPrice <= maxPrice
    );

    // Mukhi filter
    if (mukhi) {
      const mukhiNum = parseInt(mukhi);
      filteredProducts = filteredProducts.filter(product => 
        product.mukhi === mukhiNum
      );
    }

    // Sorting
    switch (sortBy) {
      case 'price_low':
        filteredProducts.sort((a, b) => a.discountedPrice - b.discountedPrice);
        break;
      case 'price_high':
        filteredProducts.sort((a, b) => b.discountedPrice - a.discountedPrice);
        break;
      case 'name_asc':
        filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name_desc':
        filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case 'relevance':
      default:
        // Keep original order for relevance
        break;
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    // Response
    return NextResponse.json({
      success: true,
      data: {
        products: paginatedProducts,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(filteredProducts.length / limit),
          totalProducts: filteredProducts.length,
          hasNextPage: endIndex < filteredProducts.length,
          hasPrevPage: page > 1
        },
        filters: {
          query,
          category,
          minPrice,
          maxPrice,
          mukhi,
          sortBy
        }
      }
    });

  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Search failed', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
}