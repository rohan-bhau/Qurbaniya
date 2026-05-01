
import { getAnimals } from "@/data/AnimalsData";
import AnimalCard from "./AnimalCard";


const AnimalList = async ({ type }) => {
  const data = await getAnimals();
  const filteredAnimals = data.filter((animal) => animal.type === type);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {filteredAnimals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  );
};

export default AnimalList;
