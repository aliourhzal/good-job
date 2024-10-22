import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Gallery from "./Gallery";
import LittleDescription from "./ui/LittleDescription";
import SectionWrapper from "./ui/SectionWrapper";
import LoginForm from "./LoginForm";
import Link from "next/link";

export default function SignupPage() {
  return (
    <SectionWrapper className="flex items-center">
      <div className="flex-grow">
        <div className="pl-4 w-full mb-6">
          <LittleDescription>login portal</LittleDescription>
          <h1 className=" text-[5vw] sm:text-[28px] font-bold capitalize text-dark-blue ">
            Welcome <br />
            Login to access platform features
          </h1>
          <Link href="/signup" className="text-text-orange font-semibold flex items-center text-sm transition-all duration-300 hover:ml-3 mt-1" >
            No account? Sign-up here
            <MdOutlineKeyboardArrowRight color="#c34d27" size={20} />
          </Link>
        </div>
        <LoginForm />
      </div>
      <Gallery className="lg:block hidden"/>
    </SectionWrapper>
  );
}
