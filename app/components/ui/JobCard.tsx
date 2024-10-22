import { FaMapMarkerAlt } from "react-icons/fa";

export default function JobCard() {
    return (
        <div className=" h-[310px] flex flex-col justify-evenly p-6 bg-white rounded-xl shadow-2xl ">
            <div className="py-[2px] px-3 bg-hover-orange text-light-white text-sm font-light ml-auto rounded-full">
                wood work
            </div>
            <h3 className="text-dark-blue text-xl font-semibold ">Lorem ipsum dolor</h3>
            <p className="text-dark-blue text-sm font-light ">September 10, 2024</p>
            <p className="text-dark-blue h-[72px] w-full line-clamp-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem quasi nostrum earum, aperiam officia sed minus
            </p>
            <div className="flex items-center gap-1">
                <FaMapMarkerAlt size={18} color="#1f2937" />
                <span className="text-sm font-extralight">Casablanca</span>
            </div>
        </div>
    );
}