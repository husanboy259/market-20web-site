import { useState } from "react";
import { Filter } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";

const PRODUCTS = [
  {
    id: "1",
    title: "Premium Wireless Headphones",
    price: 79.99,
    originalPrice: 129.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 328,
    category: "Electronics",
  },
  {
    id: "2",
    title: "Comfortable Running Shoes",
    price: 89.99,
    originalPrice: 149.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 512,
    category: "Fashion",
  },
  {
    id: "3",
    title: "Stylish Smartwatch",
    price: 199.99,
    originalPrice: 299.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 289,
    category: "Electronics",
  },
  {
    id: "4",
    title: "Portable Bluetooth Speaker",
    price: 59.99,
    originalPrice: 99.99,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 401,
    category: "Electronics",
  },
  {
    id: "5",
    title: "Designer Backpack",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 156,
    category: "Accessories",
  },
  {
    id: "6",
    title: "Vintage Camera",
    price: 249.99,
    originalPrice: 349.99,
    image:
      "https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 234,
    category: "Photography",
  },
  {
    id: "7",
    title: "Leather Wallet",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1627123756386-30a5d925b585?w=400&h=400&fit=crop",
    rating: 4.3,
    reviews: 89,
    category: "Accessories",
  },
  {
    id: "8",
    title: "Sunglasses Collection",
    price: 129.99,
    originalPrice: 199.99,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 201,
    category: "Fashion",
  },
];

export default function Products() {
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState(500);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            All Products
          </h1>
          <p className="text-muted-foreground">
            Explore our complete collection of quality items
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-border p-6 sticky top-24">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </h3>

              {/* Price Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-3">
                  Price Range
                </label>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full accent-primary"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Up to ${priceRange}
                </p>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-3">
                  Category
                </label>
                <div className="space-y-2">
                  {["Electronics", "Fashion", "Accessories", "Photography"].map(
                    (cat) => (
                      <label
                        key={cat}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="rounded border-border"
                        />
                        <span className="text-sm text-muted-foreground">
                          {cat}
                        </span>
                      </label>
                    ),
                  )}
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Rating
                </label>
                <div className="space-y-2">
                  {["5", "4 & above", "3 & above", "2 & above"].map(
                    (rating) => (
                      <label
                        key={rating}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="rounded border-border"
                        />
                        <span className="text-sm text-muted-foreground">
                          ★ {rating}
                        </span>
                      </label>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort */}
            <div className="mb-6 flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Showing{" "}
                <span className="font-semibold text-foreground">
                  {PRODUCTS.length}
                </span>{" "}
                products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
                <option value="rating">Best Rating</option>
              </select>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
