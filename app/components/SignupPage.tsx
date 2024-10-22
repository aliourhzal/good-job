import Gallery from "./Gallery";
import SignupForm from "./SignupForm";
import LittleDescription from "./ui/LittleDescription";
import SectionWrapper from "./ui/SectionWrapper";

export default function SignupPage() {
  return (
    <SectionWrapper className="flex items-center">
      <div className="flex-grow">
        <div className="pl-4 w-full">
          <LittleDescription>client sign up</LittleDescription>
          <h1 className=" text-[10vw] sm:text-[4vw] font-bold capitalize text-dark-blue ">
            let&apos;s get started
          </h1>
          <p className="font-bold text-dark-blue sm:text-lg text-base tracking-wide mb-6">
            Please use this form to <span className="text-text-orange capitalize">start</span>
          </p>
        </div>
        <SignupForm />
      </div>
      <Gallery className="lg:block hidden"/>
    </SectionWrapper>
  );
}
