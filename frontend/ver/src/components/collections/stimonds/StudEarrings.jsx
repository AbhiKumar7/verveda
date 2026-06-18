import React from 'react';
import { Link } from 'react-router-dom';

const StudEarrings = () => {
  const products = [
    {
      id: 1,
      name: 'Classic Diamond Studs',
      price: '$1,890',
      carat: '0.30 CT',
      metal: '18K White Gold',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
      badge: 'Best Seller'
    },
    {
      id: 2,
      name: 'Yellow Gold Studs',
      price: '$2,100',
      carat: '0.40 CT',
      metal: '18K Yellow Gold',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
      badge: null
    },
    {
      id: 3,
      name: 'Rose Gold Studs',
      price: '$2,350',
      carat: '0.45 CT',
      metal: '18K Rose Gold',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
      badge: 'New'
    },
    {
      id: 4,
      name: 'Platinum Diamond Studs',
      price: '$4,200',
      carat: '0.75 CT',
      metal: 'Platinum',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
      badge: 'Luxury'
    },
    {
      id: 5,
      name: 'Three-Stone Studs',
      price: '$3,450',
      carat: '0.50 CT',
      metal: '18K White Gold',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
      badge: null
    },
    {
      id: 6,
      name: 'Pear Cut Studs',
      price: '$2,800',
      carat: '0.55 CT',
      metal: '18K Yellow Gold',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop',
      badge: null
    }
  ];

  return (
    <div className="min-h-screen bg-ivory pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm mb-8 font-sans">
          <Link to="/" className="text-charcoal/50 hover:text-gold-400 transition">Home</Link>
          <span className="mx-2 text-charcoal/30">/</span>
          <Link to="/collections/stimonds" className="text-charcoal/50 hover:text-gold-400 transition">STIMAONDS</Link>
          <span className="mx-2 text-charcoal/30">/</span>
          <span className="text-gold-400 font-medium">Stud Earrings</span>
        </nav>

        {/* Hero Banner */}
        <div className="relative bg-charcoal text-ivory rounded-sm overflow-hidden mb-16">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-r from-gold-300/30 to-transparent"></div>
          </div>
          <div className="relative z-10 px-8 md:px-16 py-12 md:py-16">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-[0.3em] text-gold-300 font-semibold">Everyday Luxury</span>
              <h2 className="font-serif text-3xl md:text-4xl mt-2 mb-4">Classic Stud Earrings</h2>
              <p className="text-ivory/70 text-sm md:text-base leading-relaxed font-sans">
                Timeless sophistication for everyday wear. Our stud earrings are 
                designed to complement any outfit with effortless grace.
              </p>
              <Link 
                to="/collections/stimonds/stud-collection"
                className="inline-block mt-6 px-8 py-3 border border-gold-300 text-gold-300 text-xs uppercase tracking-wider hover:bg-gold-300 hover:text-charcoal transition-all duration-300 font-sans"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-3">
            Stud Earrings
          </h1>
          <div className="w-16 h-px bg-gold-300 mx-auto"></div>
          <p className="text-charcoal/60 mt-4 max-w-2xl mx-auto font-sans">
            Elegant, versatile, and effortlessly chic — our stud earrings 
            are the perfect finishing touch for any occasion.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-sage-100">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-charcoal/60 font-sans">Metal:</span>
            <button className="px-4 py-1.5 text-xs uppercase tracking-wider border border-gold-300 text-gold-400 rounded-full hover:bg-gold-300 hover:text-charcoal transition-all duration-300">
              All
            </button>
            <button className="px-4 py-1.5 text-xs uppercase tracking-wider border border-sage-200 text-charcoal/60 rounded-full hover:border-gold-300 hover:text-gold-400 transition-all duration-300">
              White Gold
            </button>
            <button className="px-4 py-1.5 text-xs uppercase tracking-wider border border-sage-200 text-charcoal/60 rounded-full hover:border-gold-300 hover:text-gold-400 transition-all duration-300">
              Yellow Gold
            </button>
            <button className="px-4 py-1.5 text-xs uppercase tracking-wider border border-sage-200 text-charcoal/60 rounded-full hover:border-gold-300 hover:text-gold-400 transition-all duration-300">
              Rose Gold
            </button>
            <button className="px-4 py-1.5 text-xs uppercase tracking-wider border border-sage-200 text-charcoal/60 rounded-full hover:border-gold-300 hover:text-gold-400 transition-all duration-300">
              Platinum
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-charcoal/60 font-sans">Sort by:</span>
            <select className="text-sm border-0 bg-transparent text-charcoal/80 focus:ring-0 font-sans cursor-pointer">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 text-xs uppercase tracking-wider font-semibold ${
                    product.badge === 'Best Seller' ? 'bg-gold-300 text-charcoal' :
                    product.badge === 'New' ? 'bg-sage-400 text-white' :
                    'bg-charcoal text-ivory'
                  }`}>
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-gold-300 transition-all duration-300 group-hover:scale-110">
                <svg className="w-4 h-4 text-charcoal/60 group-hover:text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>

              {/* Product Image */}
              <div className="aspect-square overflow-hidden bg-sage-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Product Details */}
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-xl text-charcoal group-hover:text-gold-400 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-charcoal/60 font-sans">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    {product.carat}
                  </span>
                  <span className="w-px h-4 bg-sage-200"></span>
                  <span>{product.metal}</span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-serif text-gold-400 font-semibold">
                    {product.price}
                  </span>
                  <Link 
                    to={`/product/stud-earring-${product.id}`}
                    className="group/btn flex items-center gap-2 text-xs uppercase tracking-wider text-charcoal/60 hover:text-gold-400 transition-all duration-300 font-sans"
                  >
                    View Details
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Quick Add Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-4 border-t border-sage-100">
                <button className="w-full py-2.5 bg-charcoal text-ivory text-xs uppercase tracking-wider font-sans hover:bg-gold-300 hover:text-charcoal transition-all duration-300">
                  Quick Enquire
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="px-12 py-4 border border-charcoal/20 text-charcoal uppercase tracking-wider text-sm font-sans hover:bg-charcoal hover:text-ivory transition-all duration-300">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudEarrings;