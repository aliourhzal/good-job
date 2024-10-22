import Image from "next/image";
import Link from "next/link";
import Footerli from "./ui/Footerli";

export default function Footer() {
    const infoList = ["Terms & Conditions", "Privacy statement", "News"];
    const visitorsList = ["Login", "Sign up", "Search jobs"];

  return (
    <footer className=" bg-dark-blue text-light-white py-9 md:px-[7vw] px-5 flex items-center flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 mb-8 sm:mb-0 ">
        <Image
          src="/white-main-logo.png"
          height={84}
          width={114}
          alt="logo"
          className="mb-5"
        />
        <p className="max-w-[250px] font-light ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          debitis rerum vitae{" "}
        </p>
        <div className="mt-6">
            <div>
                <span className="font-semibold">Email: </span>
                <span className="font-light">contact@goodjob.com</span>
            </div>
            <div>
                <span className="font-semibold">Phone: </span>
                <span className="font-light">+212 6 85 444 222</span>
            </div>
        </div>
      </div>
      <div className="flex items-center justify-between sm:w-1/2 w-full flex-wrap">
        <div>
            <h4 className="font-semibold mb-5 text-lg">Visitors</h4>
            <ul className="">
            {visitorsList.map((l, i) => (
                <Footerli key={i}>
                <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    {l}
                </Link>
                </Footerli>
            ))}
            </ul>
        </div>
        <div>
            <h4 className="font-semibold mb-5 text-lg">Info</h4>
            <ul className="">
            {infoList.map((l, i) => (
                <Footerli key={i}>
                <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    {l}
                </Link>
                </Footerli>
            ))}
            </ul>
        </div>
      </div>
    </footer>
  );
}
