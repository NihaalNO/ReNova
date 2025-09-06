export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  category: string;
  location: string;
  imageUrl: string;
  condition: "excellent" | "good" | "fair";
  description: string;
  seller: {
    id: string;
    name: string;
    rating: number;
  };
}

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "MacBook Pro 13-inch M1 2021",
    price: 899,
    originalPrice: 1299,
    category: "electronics",
    location: "San Francisco, CA",
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    condition: "excellent",
    description: "Barely used MacBook Pro in excellent condition. Includes original charger and box.",
    seller: {
      id: "seller1",
      name: "Alex Chen",
      rating: 4.9
    }
  },
  {
    id: "2",
    title: "Vintage Leather Jacket",
    price: 85,
    originalPrice: 250,
    category: "clothing",
    location: "Portland, OR",
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    condition: "good",
    description: "Classic brown leather jacket, size M. Shows some wear but still in great shape.",
    seller: {
      id: "seller2",
      name: "Sarah Johnson",
      rating: 4.7
    }
  },
  {
    id: "3",
    title: "Mid-Century Modern Coffee Table",
    price: 320,
    originalPrice: 650,
    category: "furniture",
    location: "Austin, TX",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    condition: "excellent",
    description: "Beautiful walnut coffee table from the 1960s. Restored to perfect condition.",
    seller: {
      id: "seller3",
      name: "Mike Rodriguez",
      rating: 5.0
    }
  },
  {
    id: "4",
    title: "Complete Harry Potter Book Set",
    price: 45,
    originalPrice: 120,
    category: "books",
    location: "Seattle, WA",
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop",
    condition: "good",
    description: "All 7 Harry Potter books in hardcover. Some shelf wear but pages are clean.",
    seller: {
      id: "seller4",
      name: "Emma Wilson",
      rating: 4.8
    }
  },
  {
    id: "5",
    title: "Professional Road Bike",
    price: 750,
    originalPrice: 1200,
    category: "sports",
    location: "Denver, CO",
    imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop",
    condition: "excellent",
    description: "Carbon frame road bike with Shimano components. Well maintained, ready to ride.",
    seller: {
      id: "seller5",
      name: "David Park",
      rating: 4.9
    }
  },
  {
    id: "6",
    title: "Vintage Polaroid Camera",
    price: 120,
    originalPrice: 200,
    category: "electronics",
    location: "Los Angeles, CA",
    imageUrl: "https://images.unsplash.com/photo-1495121553079-4c61bcce1894?w=400&h=400&fit=crop",
    condition: "good",
    description: "Classic Polaroid camera in working condition. Includes film pack.",
    seller: {
      id: "seller6",
      name: "Lisa Garcia",
      rating: 4.6
    }
  },
  {
    id: "7",
    title: "Designer Handbag",
    price: 180,
    originalPrice: 450,
    category: "clothing",
    location: "Miami, FL",
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    condition: "excellent",
    description: "Authentic designer handbag in pristine condition. Comes with dust bag.",
    seller: {
      id: "seller7",
      name: "Jennifer Lee",
      rating: 5.0
    }
  },
  {
    id: "8",
    title: "Antique Wooden Chair",
    price: 150,
    originalPrice: 300,
    category: "furniture",
    location: "Boston, MA",
    imageUrl: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=400&fit=crop",
    condition: "good",
    description: "Beautiful antique wooden chair with intricate carvings. Minor restoration needed.",
    seller: {
      id: "seller8",
      name: "Robert Smith",
      rating: 4.7
    }
  }
];