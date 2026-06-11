import React from 'react';
import { Link } from 'react-router-dom';

const CollectionsPreview = () => {
  const collections = [
    {
      name: 'S.Timonds',
      description: 'Diamond masterpieces for the discerning collector',
      path: '/collections/stimonds',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaJSmjpJm6LXHhceskLBmW-pAC0_x9miJSQuYdqbD5ZKr-js7VqvSagKW15NysnhMfqFjYJBrliPTrDEIxNw9W07mlr9uU4nDJLcg72fEsOzDtxLZ82zMK4XTEIzsgq3DJ8IZHBH8uKtAOsswzxbQzVNXbC1at0N7Qgwx-hHrJGzfqaUcu1PQRTCUkgL128ZgbX7aLOisNWC1FyT-N4t7wRR2TG8Lk_B_qNr8ri83IPByMIfodPKJ_wSjHFQBErgYKLSUigUSslGVe',
    },
    {
      name: 'Veveda',
      description: 'Nature-inspired designs with organic elegance',
      path: '/collections/veveda',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0xNAMMUSh0KHxTEEh1TS_N-3OCUgND2t4Ie1vcX6pS32tccmQ0cKJ2-BgOScFjTk3grcs7itXqicwh-vZDejTePyFVhDxWkrgyxsOrZJ6ySnPVPf_8jGZsUNL53hnkwHj2Z4Qg1TVYAeTjpYz5Ru-pq8xtkdTSrCARa2WozW3M2Is2ySPcOoqnAaYMjxdFZfs8ZYz4P6CzCIWAL6VxMsGzBuPzuWs4ZFCfQj1z-e44G618HJ5FwcRJI0QxGK2Sx6i8w41xy--sa1s',
    },
    {
      name: 'Selaveda',
      description: 'Heritage collection celebrating timeless traditions',
      path: '/collections/selaveda',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBjyA6Fs1YMXZHsGfKgL7paHQgMMVAzxnoGTT_kQvtY_maH-esR0oeKgaZNU6cxcduGw3UcX2vM9hVxh5wJgMY_SmtfX0b4UjXCvlR9mLHNlQRDakjsm9MRzoxPCyTkI4zoM9oK_4gsy-NzVLWRwRjqJfq_ZVDB26HCiC0ivjsJW8_PgQlcEdcNtQyxCUGqCp9Ptx3GoJbbJEsVJSn3_DLYM5KT8pGxsWBvlV3Bzi56J7xt9FoRlFUfMmZbb5JZjJWudQ2m7mXOrMV',
    },
  ];

  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-ivory">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
          Our Collections
        </h2>
        <div className="w-16 h-px bg-gold-300 mx-auto"></div>
        <p className="text-charcoal/60 mt-6 max-w-2xl mx-auto font-sans">
          Each collection tells a unique story, crafted with passion and
          precision to celebrate life's most precious moments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {collections.map((collection, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="aspect-[3/4] overflow-hidden mb-6 bg-sage-100">
              <img
                alt={collection.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={collection.image}
              />
            </div>
            <h3 className="text-2xl font-serif mb-2 text-charcoal">
              {collection.name}
            </h3>
            <p className="text-charcoal/60 text-sm mb-3 font-sans">{collection.description}</p>
            <Link
              to={collection.path}
              className="text-xs uppercase tracking-wider text-gold-400 border-b border-gold-400 pb-1 hover:text-gold-500 hover:border-gold-500 transition inline-block"
            >
              Discover Collection →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollectionsPreview;