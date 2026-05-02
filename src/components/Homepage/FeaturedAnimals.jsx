import { getAnimals } from "@/data/AnimalsData";
import AnimalCard from "../shared/AnimalCard";
import { poppins } from "@/fonts/font";


const FeaturedAnimals = async () => {
  const animals = await getAnimals();

  const featuredAnimalsData = animals.filter(
    (animal) => animal.featured === true,
  );
  // console.log(featuredAnimalsData);
  // console.log(animals);
  return (
    <div className="py-15 bg-[#f7fafe]">
      <div className="container mx-auto px-5 md:px-7">
        <h2
          className={`${poppins.className} text-2xl border-b-2 border-[#689b7b] w-fit  font-semibold text-[#252222] mb-6`}
        >
          Featured Animals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredAnimalsData.map((animal) => (
            <AnimalCard key={animal.id} animal={animal}></AnimalCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedAnimals;
