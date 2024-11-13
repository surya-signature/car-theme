
import Image from 'next/image';
import React from 'react';

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto  padding-x pt-20">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Blog Post Card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
        <Image src="/blog1.webp" alt="Tigor" width={400} height={250} className="rounded-lg" />
          <h2 className="text-2xl font-semibold">CURVV</h2>
          <p className="text-gray-600 mt-2">
          <span> Where SUV muscle meets Coupé Finesse.</span>
          Merging the toughness and durability of an SUV with the Elegant & Sporty Silhouette of a Coupé.
          </p>
          <a href="#" className="text-primary-blue hover:underline mt-4 block">Read More</a>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
        <Image src="/blog2.webp" alt="Tigor" width={400} height={250} className="rounded-lg" />
          <h2 className="text-2xl font-semibold">Tiago</h2>
          <p className="text-gray-600 mt-2">
          <span>It's Seriously Fun</span>
          Younger than ever. Bolder than ever. Inspired by the spirited youth, the All-new Tiago is hard to ignore. Drive around the city and watch heads turn towards you.
          </p>
          <a href="#" className="text-primary-blue hover:underline mt-4 block">Read More</a>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
        <Image src="/blog3.webp" alt="Tigor" width={400} height={250} className="rounded-lg" />
          <h2 className="text-2xl font-semibold">Altroz</h2>
          <p className="text-gray-600 mt-2">
          <span>The Gold Standard</span>
          Looking for a hatchback that offers the best of everything? ALTROZ is the gold standard of hatchbacks. It has it all – Style, Safety, Performance and Technology. Whether you choose the petrol, diesel, i-Turbo or the iCNG, ALTROZ offers smooth and comfortable drives. Experience the thrill of driving an ALTROZ today.
          </p>
          <a href="#" className="text-primary-blue hover:underline mt-4 block">Read More</a>
        </div>
        {/* Repeat for more posts */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
        <Image src="/blog4.webp" alt="Tigor" width={400} height={250} className="rounded-lg" />
          <h2 className="text-2xl font-semibold">Tigor</h2>
          <p className="text-gray-600 mt-2">
          <span>Sedan for the Stars</span>
          Stunning style, state-of-the-art features, comprehensive safety and seamlessly smooth drives of the New Tigor ensure you are in your element while exploring the city.
          </p>
          <a href="#" className="text-primary-blue hover:underline mt-4 block">Read More</a>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
        <Image src="/blog5.webp" alt="Tigor" width={400} height={250} className="rounded-lg" />
          <h2 className="text-2xl font-semibold">Punch</h2>
          <p className="text-gray-600 mt-2">
          <span>The no-compromise SUV</span>
          Offering an exciting mix of tough utility with sporty dynamics that Optimizes what a characterful SUV should be. The world will take notice of two showstoppers. You and the Punch.
          </p>
          <a href="#" className="text-primary-blue hover:underline mt-4 block">Read More</a>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
        <Image src="/blog6.webp" alt="Tigor" width={400} height={250} className="rounded-lg" />
          <h2 className="text-2xl font-semibold">Nexon</h2>
          <p className="text-gray-600 mt-2">
            <span>It's #WayAhead</span>
            Nexon in it's new avatar is now here with multiple combinations of design, powertrain and features with the philosophy of personalisation and 'A Nexon for Everyone' 
          </p>
          <a href="#" className="text-primary-blue hover:underline mt-4 block">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Blog;

