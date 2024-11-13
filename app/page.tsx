


// "use client"; // Add this line to mark the component as a client component

// import { CarCard, ShowMore } from "@/components";
// import CustomFilter from "@/components/CustomFilter";
// import Hero from "@/components/Hero";
// import SearchBar from "@/components/SearchBar";
// import { fuels, yearsOfProduction } from "@/constants";
// import { HomeProps } from "@/types";
// import { fetchCars } from "@/utils";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function Home({ searchParams }: HomeProps) {
//   const params = searchParams;

//   // State to manage cars and current page
//   const [allCars, setAllCars] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isDataEmpty, setIsDataEmpty] = useState(true);

//   // Function to fetch cars
//   const loadCars = async (page) => {
//     const params=await searchParams;
//     const fetchedCars = await fetchCars({
//       manufacturer: params.manufacturer || '',
//       year: params.year || 2022,
//       fuel: params.fuel || '',
//       limit: 10,
//       model: params.model || '',
//       page, // Pass the current page
//     });

//     setAllCars((prevCars) => [...prevCars, ...fetchedCars]);
//     setIsDataEmpty(!Array.isArray(fetchedCars) || fetchedCars.length < 1);
//   };

//   // Load cars on initial render and when currentPage changes
//   useEffect(() => {
//     loadCars(currentPage);
//   }, [currentPage]);

//   return (
//     <main className="overflow-hidden">
//       <Hero />
//       <div className="mt-12 padding-x padding-y max-width" id="discover">
//         <div className='home__text-container'>
//           <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
//           <p>Explore our cars you might like</p>
//         </div>

//         <div className='home__filters'>
//           <SearchBar />
//           <div className='home__filter-container'>
//             <CustomFilter title='fuel' options={fuels} />
//             <CustomFilter title='year' options={yearsOfProduction} />
//           </div>
//         </div>

//         {!isDataEmpty ? (
//           <section>
//             <div className="home__cars-wrapper">
//               {allCars.map((car, index) => (
//                 <CarCard key={`${car.make}-${car.model}-${car.year}-${index}`} car={car} />
//               ))}
//             </div>
//             <ShowMore 
//               pageNumber={currentPage} 
//               isNext={allCars.length < 10} 
//               onShowMore={() => setCurrentPage((prev) => prev + 1)} // Increment page number on click
//             />
//           </section>
//         ) : (
//           <div className="home__error-container">
//             <h2 className="text-black text-xl font-bold">Oops, no results</h2>
//             <p>{allCars?.message}</p>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }



"use client"; // Mark as a client-side component

import { CarCard, ShowMore } from "@/components";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fuels, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'; // Import the hook

export default function Home({ searchParams }: HomeProps) {
  const params = useSearchParams(); // Use useSearchParams to safely access query parameters

  // State to manage cars and current page
  const [allCars, setAllCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDataEmpty, setIsDataEmpty] = useState(true);

  // Function to fetch cars
  const loadCars = async (page) => {
    const manufacturer = params.get("manufacturer") || '';
    const year = params.get("year") || '2022';
    const fuel = params.get("fuel") || '';
    const model = params.get("model") || '';

    // Fetch the cars data
    const fetchedCars = await fetchCars({
      manufacturer,
      year,
      fuel,
      limit: 10,
      model,
      page,
    });

    // Debugging: Log the fetchedCars response
    console.log("Fetched cars response:", fetchedCars);

    // Check if fetchedCars is an array
    if (Array.isArray(fetchedCars)) {
      console.log("Fetched cars is an array:", fetchedCars);
      setAllCars((prevCars) => [...prevCars, ...fetchedCars]);
      setIsDataEmpty(fetchedCars.length === 0);
    } else if (fetchedCars?.data && Array.isArray(fetchedCars.data)) {
      console.log("Fetched cars data field is an array:", fetchedCars.data);
      setAllCars((prevCars) => [...prevCars, ...fetchedCars.data]);
      setIsDataEmpty(fetchedCars.data.length === 0);
    } else {
      console.error("Fetched cars is not an array or doesn't have a 'data' field:", fetchedCars);
      setIsDataEmpty(true);
    }
  };

  // Load cars on initial render and when currentPage changes
  useEffect(() => {
    loadCars(currentPage);
  }, [currentPage]);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore our cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.length === 0 ? (
                <div>No cars available for your search.</div>
              ) : (
                allCars.map((car, index) => (
                  <CarCard key={`${car.make}-${car.model}-${car.year}-${index}`} car={car} />
                ))
              )}
            </div>
            <ShowMore 
              pageNumber={currentPage} 
              isNext={allCars.length < 10} 
              onShowMore={() => setCurrentPage((prev) => prev + 1)} // Increment page number on click
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>No cars found matching your criteria.</p>
          </div>
        )}
      </div>
    </main>
  );
}