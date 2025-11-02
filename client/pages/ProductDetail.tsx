import { useState } from "react";
import { useParams } from "react-router-dom";
import { Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";

const PRODUCT_DETAILS = {
  id: "1",
  title: "Premium Wireless Headphones",
  price: 79.99,
  originalPrice: 129.99,
  rating: 4.5,
  reviews: 328,
  category: "Electronics",
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
  images: [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&h=600&fit=crop",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop",
  ],
  description: "Experience premium sound quality with these wireless headphones. Featuring noise cancellation, 30-hour battery life, and comfortable padding for all-day wear.",
  features: [
    "Active Noise Cancellation",
    "30-hour battery life",
    "Bluetooth 5.0 connectivity",
    "Comfortable padding for all-day wear",
    "Built-in microphone for calls",
    "Foldable design for portability",
  ],
  specs: {
    "Driver Size": "40mm",
    "Frequency Response": "20Hz - 20kHz",
    "Impedance": "32 Ohm",
    "Weight": "250g",
    "Warranty": "2 years",
  },
  stock: 45,
};

const RELATED_PRODUCTS = [
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
];

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const discount = Math.round(
    ((PRODUCT_DETAILS.originalPrice - PRODUCT_DETAILS.price) /
      PRODUCT_DETAILS.originalPrice) *
      100
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Product Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div>
            <div className="bg-white rounded-lg border border-border overflow-hidden mb-4 sticky top-24">
              <img
                src={PRODUCT_DETAILS.images[selectedImage]}
                alt={PRODUCT_DETAILS.title}
                className="w-full h-96 object-cover"
              />
              {discount > 0 && (
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  -{discount}%
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {PRODUCT_DETAILS.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`border-2 rounded-lg overflow-hidden ${
                    selectedImage === idx ? "border-primary" : "border-border"
                  }`}
                >
                  <img src={img} alt={`Product ${idx}`} className="w-full h-20 object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <p className="text-primary font-semibold uppercase tracking-wide mb-2">
              {PRODUCT_DETAILS.category}
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {PRODUCT_DETAILS.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${
                      i < Math.floor(PRODUCT_DETAILS.rating)
                        ? "text-yellow-400"
                        : "text-muted"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-muted-foreground">
                {PRODUCT_DETAILS.rating} ({PRODUCT_DETAILS.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-4xl font-bold text-primary">
                  ${PRODUCT_DETAILS.price.toFixed(2)}
                </span>
                {PRODUCT_DETAILS.originalPrice > PRODUCT_DETAILS.price && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${PRODUCT_DETAILS.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <p className="text-green-600 text-sm font-medium">In Stock ({PRODUCT_DETAILS.stock})</p>
            </div>

            <p className="text-muted-foreground mb-8">{PRODUCT_DETAILS.description}</p>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-foreground mb-3">Quantity</label>
              <div className="flex items-center gap-2 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  −
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 px-3 py-2 border border-border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-8">
              <Button size="lg" className="flex-1">
                Add to Cart
              </Button>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <Heart className={`w-5 h-5 ${isFavorite ? "fill-destructive text-destructive" : ""}`} />
              </button>
              <button className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="border-t border-border pt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground">Free delivery on orders over $50</span>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground">Easy 30-day returns</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground">Secure checkout with SSL encryption</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features & Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Features</h2>
            <ul className="space-y-3">
              {PRODUCT_DETAILS.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Specifications</h2>
            <dl className="space-y-4">
              {Object.entries(PRODUCT_DETAILS.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <dt className="text-muted-foreground">{key}</dt>
                  <dd className="font-semibold text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RELATED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
