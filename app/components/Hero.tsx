import Gallery from "./Gallery";
import Button from "./ui/Button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Hero() {
    return (
        <section className="flex-grow sm:flex-grow-0 flex items-start justify-evenly w-full sm:py-9 md:px-[7vw] px-5">
          <div className="flex flex-col items-center sm:items-start gap-6 mt-10">
            <h1 className=" text-[15vw] sm:text-[5.5vw] font-bold capitalize text-dark-blue">
              good job
            </h1>
            <p className="text-dark-blue font-medium text-[20px] max-w-[500px] sm:text-left text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis fugiat.
            </p>
            <div className="flex items-center flex-wrap justify-center gap-4 mt-5">
              <Button className="font-bold text-dark-blue hover:text-text-orange text-sm sm:text-base">
                get started
              </Button>
              <button className="capitalize font-semibold text-dark-blue transition-all duration-300 hover:pl-3 flex items-center gap-2">
                <span className="text-sm sm:text-base">search job</span>
                <MdOutlineKeyboardArrowRight color="#043c5b" size={20} />
              </button>
            </div>
          </div>
          <Gallery className="sm:block hidden" />
        </section>
    );
}