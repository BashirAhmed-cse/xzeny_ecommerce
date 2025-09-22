"use client";

import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, DollarSign, Headset, CheckCircle, Tag } from 'lucide-react';

export default function Page() {
  const [selectedHeight, setSelectedHeight] = useState('1.5cm');
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBundle, setSelectedBundle] = useState('2-pairs');
  const [mainImage, setMainImage] = useState('https://placehold.co/1000x1000/FEE2E2/DC2626?text=Front+View');

  const [timeLeft, setTimeLeft] = useState(() => {
    const now = new Date();
    const futureDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2, 8, 0, 0); // Offer ends 2 days from now at 8 AM.
    const difference = futureDate.getTime() - now.getTime();
    return difference > 0 ? difference : 0;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1000);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { days, hours, minutes, seconds };
  };

  const time = formatTime(timeLeft);

  const isShoeSizeSelected = !!selectedSize;

  const productImages = [
    { url: 'https://placehold.co/1000x1000/FEE2E2/DC2626?text=Front+View', alt: 'Front View' },
    { url: 'https://placehold.co/1000x1000/FEE2E2/DC2626?text=Side+View', alt: 'Side View' },
    { url: 'https://placehold.co/1000x1000/FEE2E2/DC2626?text=On+Foot', alt: 'On Foot' },
    { url: 'https://placehold.co/1000x1000/FEE2E2/DC2626?text=Packaging', alt: 'Packaging' },
  ];

  const handleAddToCart = () => {
    // This is where you would handle the add to cart logic,
    // like sending the selected options to an API.
    alert(`Added ${selectedBundle} of ${selectedHeight} insoles, size ${selectedSize}, to cart!`);
  };

  const handleSelectBundle = (bundleName) => {
    setSelectedBundle(bundleName);
  };

  const bundles = {
    '1-pair': {
      label: '1 Pair',
      price: '$24',
      original: '$49',
      save: 'Save $25 = FREE eBook',
      badge: null,
    },
    '2-pairs': {
      label: '2 Pairs',
      price: '$39',
      original: '$99',
      save: 'Save $50 = FREE eBook',
      badge: { text: 'POPULAR', color: 'bg-orange-500' },
    },
    '3-pairs': {
      label: '3 Pairs',
      price: '$54',
      original: '$149',
      save: 'Save $75 = FREE eBook + FREE Shipping',
      badge: { text: 'BEST DEAL', color: 'bg-green-500' },
    },
    '5-pairs': {
      label: '5 Pairs',
      price: '$74',
      original: '$249',
      save: 'Save $125 = FREE eBook + FREE Shipping',
      badge: { text: 'POPULAR', color: 'bg-red-500' },
    },
  };

  const productReviews = [
    {
      name: "David Brown",
      rating: 5,
      title: "Phenomenal Described",
      review: "I was very satisfied with these shoe insoles. The size corresponds perfectly to the description. I had no adjustment problems.",
      helpful: "Comfortable and light, provide excellent support for the feet. The material is well and breathable, ideal to wear all day.",
      images: ["https://placehold.co/1000x1000/FEE2E2/DC2626?text=Review+1", "https://placehold.co/1000x1000/FEE2E2/DC2626?text=Review+2"],
    },
    {
      name: "Carl Pagan",
      rating: 5,
      title: "Feel much more confident in these",
      review: "These insoles are exactly what I needed. They're comfortable, discreet, and give me the perfect height boost. Highly recommend!",
      helpful: null,
      images: ["https://placehold.co/1000x1000/FEE2E2/DC2626?text=Review+3", "https://placehold.co/1000x1000/FEE2E2/DC2626?text=Review+4"],
    },
  ];

  const ratingCount = {
    5: 58,
    4: 11,
    3: 2,
    2: 1,
    1: 1,
  };
  const totalReviews = Object.values(ratingCount).reduce((sum, count) => sum + count, 0);

  return (
    <div className="bg-white font-sans text-gray-800 antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-square shadow-lg">
              <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                Sale -50%
              </div>
            </div>
            {/* Thumbnail Images */}
            <div className="flex space-x-2 overflow-x-auto">
              {productImages.map((img, i) => (
                <div
                  key={i}
                  className={`w-20 h-20 bg-gray-100 rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-300 ${
                    mainImage === img.url ? 'border-orange-500 shadow-md' : 'border-transparent hover:border-orange-300'
                  }`}
                  onClick={() => setMainImage(img.url)}
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details - made sticky and professional */}
          <div className="space-y-8 p-8 bg-white border border-gray-200 rounded-2xl shadow-xl lg:sticky lg:top-24 lg:self-start lg:h-fit sticky">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm mb-2">
                <div className="flex text-yellow-500">
                  <Star fill="currentColor" stroke="none" size={20} />
                  <Star fill="currentColor" stroke="none" size={20} />
                  <Star fill="currentColor" stroke="none" size={20} />
                  <Star fill="currentColor" stroke="none" size={20} />
                  <Star fill="none" stroke="currentColor" size={20} />
                </div>
                <span className="text-sm text-gray-600">4.8 ({totalReviews} Reviews)</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">Height Insoles</h1>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-red-600">{bundles[selectedBundle].price}</span>
                <span className="text-xl text-gray-400 line-through">{bundles[selectedBundle].original}</span>
                <div className="bg-red-500 text-white font-bold px-3 py-1 rounded-full text-xs uppercase">
                  {bundles[selectedBundle].save.split('=')[0].trim()}
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Tax included. <span className="text-blue-600 hover:underline cursor-pointer">Shipping</span> calculated at checkout.
              </p>
            </div>

            {/* Height Options */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Select Height</h3>
              <div className="flex space-x-3 flex-wrap gap-2">
                {['1.5cm', '2.5cm', '3.5cm'].map(height => (
                  <button
                    key={height}
                    onClick={() => setSelectedHeight(height)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      selectedHeight === height
                        ? 'bg-orange-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-orange-500 hover:text-white'
                    }`}
                  >
                    {height}
                  </button>
                ))}
              </div>
            </div>

            {/* Shoe Size */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Select Shoe Size</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {["M 5 | W 6", "M 6 | W 7", "M 7 | W 8", "M 8 | W 9", "M 9 | W 10"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border-2 rounded-full text-sm transition-all duration-300 ${
                      selectedSize === size
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Pricing */}
            <div className="space-y-4">
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                <div className="flex items-center text-sm font-medium text-orange-800 mb-4">
                  <Tag size={16} className="mr-2" />
                  OFFER ENDS SOON
                </div>

                <div className="space-y-3">
                  {Object.entries(bundles).map(([key, bundle]) => (
                    <div
                      key={key}
                      onClick={() => handleSelectBundle(key)}
                      className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        selectedBundle === key
                          ? 'border-orange-500 bg-orange-100 shadow-md'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div>
                        <div className="font-medium flex items-center">
                          {bundle.label}
                          {bundle.badge && (
                            <div className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold uppercase ${bundle.badge.color} text-white`}>
                              {bundle.badge.text}
                            </div>
                          )}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">{bundle.save}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-xl">{bundle.price}</div>
                        <div className="text-sm text-gray-500 line-through">{bundle.original}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!isShoeSizeSelected}
                className={`w-full py-4 rounded-full font-bold text-lg transition-colors duration-300
                  ${isShoeSizeSelected
                    ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-lg'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
              >
                {isShoeSizeSelected ? `ADD TO CART` : 'SELECT SHOE SIZE'}
              </button>

              {/* Payment Icons */}
              <div className="flex items-center justify-center space-x-2 flex-wrap">
                <img src="https://placehold.co/60x30/f0f0f0/666666?text=Visa" alt="Visa" className="h-6" />
                <img src="https://placehold.co/60x30/f0f0f0/666666?text=Mastercard" alt="Mastercard" className="h-6" />
                <img src="https://placehold.co/60x30/f0f0f0/666666?text=Amex" alt="American Express" className="h-6" />
                <img src="https://placehold.co/60x30/f0f0f0/666666?text=ApplePay" alt="Apple Pay" className="h-6" />
                <img src="https://placehold.co/60x30/f0f0f0/666666?text=PayPal" alt="PayPal" className="h-6" />
              </div>

              {/* Countdown Timer */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4 text-center">
                <div className="text-sm font-semibold text-red-700 mb-2">EXCLUSIVE SALE - LAST CHANCE!</div>
                <div className="flex justify-center space-x-6 text-2xl font-bold text-red-600">
                  <div className="text-center">
                    <div>{String(time.days).padStart(2, '0')}</div>
                    <div className="text-xs font-medium text-red-500">DAYS</div>
                  </div>
                  <div className="text-center">
                    <div>{String(time.hours).padStart(2, '0')}</div>
                    <div className="text-xs font-medium text-red-500">HOURS</div>
                  </div>
                  <div className="text-center">
                    <div>{String(time.minutes).padStart(2, '0')}</div>
                    <div className="text-xs font-medium text-red-500">MINUTES</div>
                  </div>
                  <div className="text-center">
                    <div>{String(time.seconds).padStart(2, '0')}</div>
                    <div className="text-xs font-medium text-red-500">SECONDS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- */}

        {/* Product Description */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-8 text-center">
            <div className="text-orange-800 font-semibold text-sm">HAVE YOUR OWN BREAKTHROUGH</div>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Gain Height, Boost Confidence</h2>
          <p className="text-gray-600 mb-8">
            Tired of feeling short? Want to add a few inches to your height without anyone knowing? Our Height Insoles are the discreet solution you've been looking for.
          </p>
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center">
                <ShieldCheck size={20} className="mr-2 text-green-500" />
                Designed for Comfort and Confidence:
              </h3>
              <ul className="space-y-4 text-gray-600 list-none">
                <li className="flex items-start">
                  <span className="font-medium text-gray-900 mr-2 flex-shrink-0">•</span>
                  <span><strong>Effortless Height Boost:</strong> Gain 1.5-3.5cm of height naturally and comfortably.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-gray-900 mr-2 flex-shrink-0">•</span>
                  <span><strong>Invisible Design:</strong> Seamlessly integrate into your shoes for a natural look.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-gray-900 mr-2 flex-shrink-0">•</span>
                  <span><strong>Superior Comfort:</strong> Crafted with premium memory foam for exceptional cushioning and support.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-gray-900 mr-2 flex-shrink-0">•</span>
                  <span><strong>Breathable & Odor-Resistant:</strong> Keeps your feet cool and fresh throughout the day.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-gray-900 mr-2 flex-shrink-0">•</span>
                  <span><strong>Customizable Fit:</strong> Easily trim the insoles to perfectly fit your shoes.</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center">
                <CheckCircle size={20} className="mr-2 text-green-500" />
                Experience the Difference:
              </h3>
              <ul className="space-y-4 text-gray-600 list-none">
                <li className="flex items-start">
                  <span className="font-medium text-gray-900 mr-2 flex-shrink-0">•</span>
                  <span><strong>Increased Confidence:</strong> Stand taller and feel more confident in any situation.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-gray-900 mr-2 flex-shrink-0">•</span>
                  <span><strong>Improved Posture:</strong> Better posture can lead to improved overall health and well-being.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-gray-900 mr-2 flex-shrink-0">•</span>
                  <span><strong>All-Day Comfort:</strong> Enjoy comfort and support with our premium insoles.</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-600">
              <span className="font-semibold text-gray-900">Don't wait any longer!</span> Order your Height Increase Insoles today and unlock your full potential.
            </p>
          </div>
        </div>

        {/* --- */}

        {/* Customer Reviews */}
        <div className="mt-20">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center text-yellow-500">
                <Star fill="currentColor" stroke="none" size={24} />
                <Star fill="currentColor" stroke="none" size={24} />
                <Star fill="currentColor" stroke="none" size={24} />
                <Star fill="currentColor" stroke="none" size={24} />
                <Star fill="none" stroke="currentColor" size={24} />
              </div>
              <div className="text-xl font-bold text-gray-900">4.8 out of 5</div>
              <div className="text-sm text-gray-600">Based on {totalReviews} reviews</div>
              <button className="px-6 py-3 rounded-full bg-orange-600 text-white font-semibold shadow-lg hover:bg-orange-700 transition-colors">
                Write a review
              </button>
            </div>
            <div className="space-y-2">
              {Object.entries(ratingCount).reverse().map(([stars, count]) => (
                <div key={stars} className="flex items-center">
                  <span className="text-sm text-gray-600 w-8 flex-shrink-0">{stars}</span>
                  <div className="flex text-yellow-500 mr-2 flex-shrink-0">
                    {[...Array(parseInt(stars))].map((_, i) => (
                      <Star key={i} fill="currentColor" stroke="none" size={16} />
                    ))}
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2 mr-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{ width: `${(count / totalReviews) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-8 text-right flex-shrink-0">{count}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Individual Reviews */}
          <div className="space-y-12">
            {productReviews.map((review, index) => (
              <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-500 mr-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} fill="currentColor" stroke="none" size={16} />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">{review.name}</span>
                </div>
                {review.title && <h4 className="font-bold text-gray-900 mb-2">{review.title}</h4>}
                <p className="text-gray-600 mb-4">{review.review}</p>
                {review.helpful && <p className="text-gray-600 mb-4 font-semibold">{review.helpful}</p>}
                <div className="flex space-x-4 overflow-x-auto">
                  {review.images.map((img, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={img}
                      alt={`Review image ${imgIndex + 1}`}
                      className="w-32 h-32 object-cover rounded-lg shadow-sm"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}