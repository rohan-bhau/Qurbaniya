
import AnimalCard from "@/components/shared/AnimalCard";
import AnimalList from "@/components/shared/AnimalList";
import AnimalSkeleton from "@/components/shared/AnimalSkeleton";
import Sorting from "@/components/shared/Sorting";
import { getAnimals } from "@/data/AnimalsData";
import { playfair } from "@/fonts/font";
import { Tabs } from "@heroui/react";
import React, { Suspense } from "react";

const AnimalsPage = async ({ searchParams }) => {
  // const sortOrder = await searchParams
  const sortOrder = (await searchParams).sort || "";
  console.log(sortOrder)
  const data = await getAnimals();
  // console.log(data);
  // const cows = data.filter((animal) => animal.type === "Cow");
  // // console.log(cows)
  // const goats = data.filter((animal) => animal.type === "Goat");
  // console.log(goats)
  // const sheep = data.filter((animal) => animal.type === "Sheep");
  // console.log(sheep)
  return (
    <div className="bg-[#f7fbff] py-15">
      <div className="container mx-auto ">
        {/* heading */}
        <h2
          className={`${playfair.className} text-3xl px-5 md:px-10 font-semibold text-[#252222]`}
        >
          Find Your Perfect Qurbani Animal
        </h2>
        {/* sorting */}
        <div className="md:flex justify-end p-5 ">
          <Sorting></Sorting>
        </div>

        {/* cows */}
        <div className="px-5 md:px-15 lg:px-20 pt-5 ">
          <h2
            className={`${poppins.className} text-2xl border-b-2 border-[#689b7b] w-fit  font-semibold text-[#252222] mb-6`}
          >
            Cows
          </h2>
          <Suspense fallback={<AnimalSkeleton />}>
            <AnimalList animalsData={data} type="Cow" sortOrder={sortOrder} />
          </Suspense>
        </div>

        {/* goats */}
        <div className="px-5 md:px-15 lg:px-20 mt-10 ">
          <h2
            className={`${poppins.className} text-2xl border-b-2 border-[#689b7b] w-fit  font-semibold text-[#252222] mb-6`}
          >
            Goats
          </h2>
          <Suspense fallback={<AnimalSkeleton />}>
            <AnimalList animalsData={data} type="Goat" sortOrder={sortOrder} />
          </Suspense>
        </div>

        {/* sheep */}
        <div className="px-5 md:px-15 lg:px-20 mt-10 ">
          <h2
            className={`${poppins.className} text-2xl border-b-2 border-[#689b7b] w-fit  font-semibold text-[#252222] mb-6`}
          >
            Sheep
          </h2>
          <Suspense fallback={<AnimalSkeleton />}>
            <AnimalList animalsData={data} type="Sheep" sortOrder={sortOrder} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default AnimalsPage;
