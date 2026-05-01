import { playfair, poppins } from '@/app/layout';
import AnimalCard from '@/components/shared/AnimalCard';
import { getAnimals } from '@/data/AnimalsData';
import { Tabs } from '@heroui/react';
import React from 'react'

const AnimalsPage = async() => {
  const data = await getAnimals();
  console.log(data);
  const cows = data.filter((animal) => animal.type === "Cow");
  // console.log(cows)
  const goats = data.filter((animal) => animal.type === "Goat");
  console.log(goats)
  const sheep = data.filter((animal) => animal.type === "Sheep");
  console.log(sheep)
  return (
    <div className="bg-[#f7fbff] py-15">
      <div className="container mx-auto ">
        {/* heading */}
        <h2
          className={`${playfair.className} text-3xl px-5 md:px-10 font-semibold text-[#252222]`}
        >
          Find Your Perfect Qurbani Animal
        </h2>

        {/* cows */}
        <div className="px-5 md:px-15 lg:px-20 pt-5 ">
          <h2
            className={`${poppins.className} text-2xl border-b-2 border-[#689b7b] w-fit  font-semibold text-[#252222] mb-6`}
          >
            Cows
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {cows.map((animal) => (
              <AnimalCard key={animal.id} animal={animal}></AnimalCard>
            ))}
          </div>
        </div>

        {/* goats */}
        <div className="px-5 md:px-15 lg:px-20 mt-10 ">
          <h2
            className={`${poppins.className} text-2xl border-b-2 border-[#689b7b] w-fit  font-semibold text-[#252222] mb-6`}
          >
            Goats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {goats.map((animal) => (
              <AnimalCard key={animal.id} animal={animal}></AnimalCard>
            ))}
          </div>
        </div>

        {/* sheep */}
        <div className="px-5 md:px-15 lg:px-20 mt-10 ">
          <h2
            className={`${poppins.className} text-2xl border-b-2 border-[#689b7b] w-fit  font-semibold text-[#252222] mb-6`}
          >
            Sheep
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {sheep.map((animal) => (
              <AnimalCard key={animal.id} animal={animal}></AnimalCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimalsPage
