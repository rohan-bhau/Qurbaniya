
import { poppins } from "@/fonts/font";
import { GiCow } from "react-icons/gi";
import { FaBalanceScale, FaRegCalendarAlt } from "react-icons/fa";


const QurbaniTips = () => {
  return (
    <div className="bg-[#f6f9fe] pb-15 ">
      <div className="container mx-auto px-5 md:px-7">
        {" "}
        <h2
          className={`${poppins.className}  text-2xl border-b-2 border-[#689b7b] w-fit  font-semibold text-[#252222] mb-6`}
        >
          Qurbani Tips
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* 1 */}
          <div
            className="bg-[#ffff] border shadow rounded-lg p-5 flex items-center gap-8 over:shadow-xl hover:-translate-y-1 
  transition-all duration-300 "
          >
            <div className="bg-[#03612d] w-fit h-fit md:h-20 rounded-full flex justify-center items-center p-3 ">
              <GiCow className="text-[#ffffff] text-5xl md:text-6xl" />
            </div>
            <div>
              {" "}
              <h2 className="font-semibold text-lg md:text-xl mb-2">
                Choose Healthy Animal
              </h2>
              <p className="text-[#aca3a3]">
                Select an active, healthy, animal with good weight.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div
            className="bg-[#ffff] border shadow rounded-lg p-5 flex items-center gap-8 over:shadow-xl hover:-translate-y-1 
  transition-all duration-300 "
          >
            <div className="bg-[#03612d] w-fit h-fit p-3 rounded-full flex justify-center items-center ">
              <FaRegCalendarAlt className="text-[#ffffff] text-5xl md:text-6xl" />
            </div>
            <div>
              {" "}
              <h2 className="font-semibold text-lg md:text-xl mb-2">
                Check Age Requirements
              </h2>
              <p className="text-[#aca3a3]">
                Ensure the animal meets the Islamic age requirement
              </p>
            </div>
          </div>
          {/* 3 */}
          <div
            className="bg-[#ffff] border shadow rounded-lg p-5 flex items-center gap-8 over:shadow-xl hover:-translate-y-1 
  transition-all duration-300 "
          >
            <div className="bg-[#03612d] w-fit h-fit p-3 rounded-full flex justify-center items-center ">
              <FaBalanceScale className="text-[#ffffff] text-5xl md:text-6xl" />
            </div>
            <div>
              {" "}
              <h2 className="font-semibold text-lg md:text-xl mb-2">
                Weight Vs Price
              </h2>
              <p className="text-[#aca3a3]">
                Compare weight and price to get the best deal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QurbaniTips;
