
import AnimalCard from "@/components/shared/AnimalCard";
import { getAnimals } from "@/data/AnimalsData";


const AnimalList = async ({ type, animalsData, sortOrder }) => {
  // console.log(animalsData)

  const filteredAnimals = animalsData.filter((animal) => animal.type === type);

  if (sortOrder === "low-to-high") {
    filteredAnimals.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high-to-low") {
    filteredAnimals.sort((a, b) => b.price - a.price);
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {filteredAnimals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  );
};

export default AnimalList;
