import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineShoppingCart } from "react-icons/md";


const AnimalCard = ({ animal }) => {
    const {id, type, name ,price, location, image} = animal;

//     "id": "1",
// "name": "Deshi Shahi Cow",
// "breed": "Local Deshi",
// "price": 120000,
// "type": "Cow",
// "category": "Large Animal",
// "weight": 280,
// "age": 3,
// "location": "Bogura",
// "description": "This healthy deshi cow is raised with natural খাবার and proper care. It has a strong body structure and is well-suited for Qurbani. নিয়মিত খাওয়ানো ও পরিচর্যার কারণে এটি সম্পূর্ণ সুস্থ এবং প্রস্তুত।",
// "image": "https://i.ibb.co.com/3yhpXqJZ/cow1.jpg"

    // console.log(animal)
  return (
    <div
      className="bg-white  rounded-xl shadow-sm 
  hover:shadow-xl hover:-translate-y-1 
  transition-all duration-300 
  overflow-hidden group  border "
    >
      {/* Image Section */}
      <div className="w-full h-45 lg:h-65 overflow-hidden">
        <Image
          src={image}
          width={400}
          height={300}
          alt={`${name} image`}
          className="w-full h-full object-cover 
      group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content Section */}
      <div className="p-3">
        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-md font-semibold">
          {type}
        </span>
        <div className="flex justify-between">
          <div>
            {" "}
            <h2 className="text-sm font-semibold text-gray-800 mt-2">{name}</h2>
            <p className="text-xs text-gray-500 mt-1 flex items-center gap-3">
              <CiLocationOn className="text-green-600" />
              {location}
            </p>
            <p className="text-green-600 font-semibold mt-2">৳ {price}</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <GrFavorite className="cursor-pointer hover:text-orange-400" />
            {/* <MdOutlineShoppingCart className="text-xl cursor-pointer hover:text-orange-400" /> */}
          </div>
        </div>

        <Link href={`/animals/${id}`}>
          <Button
            variant="outline"
            className=" w-full mt-3 hover:bg-green-500 border border-green-600 rounded-lg text-green-600 hover:text-black transition"
          >
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default AnimalCard
