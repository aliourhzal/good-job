import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import Button from "./ui/Button";

export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between py-5 sm:py-9 md:px-[7vw] px-5">
          <Link href="/">
            <Image src="/main-logo.png" height={56} width={76}  alt="logo" />
          </Link>
          <div className="flex gap-4 items-center">
            <Link href="search-jobs" className="text-dark-blue font-semibold capitalize sm:block hidden">
                search jobs
            </Link>
            <Link href="login">
              <Button className="bg-steel-blue hover:bg-hover-orange sm:block hidden text-light-white ">
                log in
              </Button>
            </Link>
            <button>
              <AiOutlineMenu size={30} />
            </button>
          </div>
        </nav>
    );
}