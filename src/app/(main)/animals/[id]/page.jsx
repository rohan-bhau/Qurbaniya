import { poppins } from "@/app/layout";
import { getAnimals } from "@/data/AnimalsData";
import Image from "next/image";
import React from "react";
import { FaWeightHanging } from "react-icons/fa";
import { GiCow } from "react-icons/gi";
import { LuCalendarClock, LuWeight } from "react-icons/lu";
import breeding from "@/assets/breeding.png";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineCategory } from "react-icons/md";
import { BookingForm } from "@/components/shared/BookingForm";

const AnimalDetailPage = async ({ params }) => {
  // "id": "15",
  // "type": "Sheep",
  // "category": "Medium Animal",
  // "name": "Merino Sheep",
  // "breed": "Merino",
  // "price": 30000,
  // "weight": 40,
  // "age": 2,
  // "location": "Dhaka",
  // "description": "Merino sheep with high-quality wool and ভালো শারীরিক গঠন। Proper feeding ensures its health and growth. Premium Qurbani option.",
  // "image": "https://i.ibb.co.com/BKQQBMqp/sheep3.jpg"

  const { id } = await params;
  const animalData = await getAnimals();
  const data = animalData.find(
    (animal) => parseInt(animal.id) === parseInt(id),
  );
  const {
    name,
    price,
    image,
    category,
    type,
    breed,
    weight,
    age,
    location,
    description,
  } = data;
  console.log(data);
  return (
    <div className="py-15 px-5 md:px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {" "}
        {/* left image */}
        <div className="max-w-[350px] lg:max-w-[550px] lg:h-[550px]">
          <Image
            src={image}
            width={500}
            height={400}
            alt={`${name} image`}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        {/* center info */}
        <div className="mx-auto">
          <h2 className={`${poppins.className} font-bold text-3xl md:text-4xl mb-7`}>
            {name}
          </h2>
          <p className=" font-bold text-2xl text-green-600 mb-6"> ৳{price}</p>
          <div>
            {/* 1 */}
            <h2 className="flex items-center gap-15 mb-3">
              <span className="flex items-center gap-2">
                <GiCow className="text-4xl text-[#24a80f]" />{" "}
                <span className="text-lg font-semibold">Type:</span>
              </span>
              <span className="text-lg font-semibold text-[#373f3fde]">
                {" "}
                {type}
              </span>
            </h2>

            {/* 2 */}
            <h2 className="flex items-center gap-15 mb-3">
              <span className="flex items-center gap-2">
                {/* <LuCalendarClock className="text-4xl text-green-500" /> */}
                <Image
                  src={breeding}
                  width={28}
                  height={28}
                  alt="breeding icon"
                />

                <span className="text-lg font-semibold">Breed:</span>
              </span>
              <span className="text-lg font-semibold text-[#373f3fde]">
                {" "}
                {breed}
              </span>
            </h2>

            {/* 3 */}
            <h2 className="flex items-center gap-13 mb-3">
              <span className="flex items-center gap-2">
                <LuWeight className="text-2xl text-[#24a80f]" />{" "}
                <span className="text-lg font-semibold">Weight:</span>
              </span>
              <span className="text-lg font-semibold text-[#373f3fde]">
                {" "}
                {weight}
              </span>
            </h2>

            {/* 4 */}
            <h2 className="flex items-center gap-20 mb-3">
              <span className="flex items-center gap-2">
                <LuCalendarClock className="text-2xl text-green-500" />{" "}
                <span className="text-lg font-semibold">Age:</span>
              </span>
              <span className="text-lg font-semibold text-[#373f3fde]">
                {" "}
                {age}
              </span>
            </h2>

            {/* 5 */}
            <h2 className="flex items-center gap-10 mb-3">
              <span className="flex items-center gap-2">
                <CiLocationOn className="text-2xl text-green-500" />{" "}
                <span className="text-lg font-semibold">Location:</span>
              </span>
              <span className="text-lg font-semibold text-[#373f3fde]">
                {" "}
                {location}
              </span>
            </h2>

            {/* 6 */}
            <h2 className="flex items-center gap-10 mb-3">
              <span className="flex items-center gap-2">
                <MdOutlineCategory className="text-2xl text-green-500" />{" "}
                <span className="text-lg font-semibold">Category:</span>
              </span>
              <span className="text-lg font-semibold text-[#373f3fde]">
                {" "}
                {category}
              </span>
            </h2>
          </div>
        </div>
        {/* right content */}
        <div className="border-2 py-8 px-5 bg-[#e3e3e3] rounded-lg">
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default AnimalDetailPage;
