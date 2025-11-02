import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Zap, Shield, Truck, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";

// Sample data - replace with real data from API later
const FEATURED_PRODUCTS = [
  {
    id: "1",
    title: "Premium Wireless Headphones",
    price: 79.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 328,
    category: "Electronics",
  },
  {
    id: "2",
    title: "Comfortable Running Shoes",
    price: 89.99,
    originalPrice: 149.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 512,
    category: "Fashion",
  },
  {
    id: "3",
    title: "Stylish Smartwatch",
    price: 199.99,
    originalPrice: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 289,
    category: "Electronics",
  },
  {
    id: "4",
    title: "Portable Bluetooth Speaker",
    price: 59.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 401,
    category: "Electronics",
  },
  {
    id: "5",
    title: "Designer Backpack",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 156,
    category: "Accessories",
  },
  {
    id: "6",
    title: "Vintage Camera",
    price: 249.99,
    originalPrice: 349.99,
    image: "https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 234,
    category: "Photography",
  },
];

const CATEGORIES = [
  { id: 1, name: "Electronics", icon: "📱", color: "from-blue-500 to-cyan-500" },
  { id: 2, name: "Fashion", icon: "👔", color: "from-pink-500 to-rose-500" },
  { id: 3, name: "Home & Garden", icon: "🏠", color: "from-green-500 to-emerald-500" },
  { id: 4, name: "Sports", icon: "⚽", color: "from-orange-500 to-yellow-500" },
  { id: 5, name: "Books", icon: "📚", color: "from-purple-500 to-indigo-500" },
  { id: 6, name: "Beauty", icon: "💄", color: "from-red-500 to-pink-500" },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to products page with search query
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden py-20 md:py-32">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-fade-in">
              Discover Amazing Products
            </h1>
            <p className="text-lg text-slate-300 mb-8 animate-slide-up">
              Shop from thousands of quality products with secure payments and fast delivery.
            </p>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex gap-2 mb-8 animate-slide-up">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products, categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                />
              </div>
              <Button size="lg" type="submit" className="px-8">
                Search
              </Button>
            </form>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="font-semibold text-primary">10K+</div>
                <div className="text-slate-300 text-xs">Products</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="font-semibold text-primary">50K+</div>
                <div className="text-slate-300 text-xs">Happy Customers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <div className="font-semibold text-primary">24/7</div>
                <div className="text-slate-300 text-xs">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">On orders over $50</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Secure Payment</h3>
                <p className="text-sm text-muted-foreground">100% safe transactions</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">2-5 business days</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Easy Returns</h3>
                <p className="text-sm text-muted-foreground">30-day guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Shop by Category</h2>
            <p className="text-muted-foreground">Browse our popular categories</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((category) => (
              <Link key={category.id} to={`/categories?cat=${category.name}`}>
                <div className="relative h-32 rounded-xl overflow-hidden group cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <h3 className="font-semibold text-white text-center text-sm">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Featured Products</h2>
              <p className="text-muted-foreground">Curated products just for you</p>
            </div>
            <Link
              to="/products"
              className="hidden md:flex items-center gap-2 text-primary hover:gap-3 transition-all"
            >
              View All
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/products">
              <Button size="lg" variant="outline">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-r from-primary to-secondary rounded-2xl overflow-hidden p-12 md:p-20">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.2)_25%,rgba(255,255,255,.2)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.2)_75%,rgba(255,255,255,.2))] bg-[length:60px_60px]"></div>
            </div>

            <div className="relative z-10 text-center text-white max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Shopping?</h2>
              <p className="text-lg text-white/90 mb-8">
                Join thousands of satisfied customers and find everything you need on MarketHub.
              </p>
              <Link to="/products">
                <Button size="lg" variant="outline" className="border-white text-foreground hover:bg-white/10">
                  Browse All Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
