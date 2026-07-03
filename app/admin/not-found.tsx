import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <div
      className="flex-1 flex flex-col items-center justify-center
    text-center p-4 text-white select-none min-h-screen"
    >
      <div className="flex flex-col md:flex-row items-center md:gap-10 mt-40 md:mt-0">
        <h1 className="text-[120px] md:text-[160px] xl:text-[250px]">404</h1>
        <div className="hidden md:block h-50 xl:h-70 w-1 bg-white"></div>
        <div className="md:hidden w-70 h-1 bg-white"></div>
        <div className="md:leading-none flex flex-col items-center md:items-start">
          <h1 className="text-[80px] md:text-[60px] xl:text-[80px] text-start mt-5 md:mt-0">
            SORRY!
          </h1>
          <h1 className="text-center md:text-start text-[30px] md:text-[20px]">
            The Page Your&apos;re <br className="md:hidden" /> Looking For{" "}
            <br className="hidden md:block" /> Not Found
          </h1>
          <Link
            href="/admin"
            className="flex items-center text-[40px] md:text-[30px] uppercase mt-10 bg-gray-600 hover:text-white/80 md:bg-transparent px-8 md:px-0 justify-center rounded-3xl mb-20 md:mb-0"
          >
            <ChevronLeft size={50} /> Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}
