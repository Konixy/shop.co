/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row bg-[#F2F0F1] h-screen pt-56 px-24">
        <div className="flex flex-col gap-5">
          <div className="font-integral text-6xl">
            Find clothes
            <br />
            that matches
            <br />
            your style
          </div>
          <p className="text-neutral-600">
            Browse through our diverse range of meticulously crafted garments,
            <br />
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div>
            <Button className="w-52" size="lg">
              Shop Now
            </Button>
          </div>
          <div className="flex flex-row gap-6 mt-6">
            <div>
              <p className="font-bold text-4xl">200+</p>
              <p className="text-neutral-600">International Brands</p>
            </div>
            <Separator orientation="vertical" className="bg-neutral-300" />
            <div>
              <p className="font-bold text-4xl">2,000+</p>
              <p className="text-neutral-600">High-Quality Products</p>
            </div>
            <Separator orientation="vertical" className="bg-neutral-300" />
            <div>
              <p className="font-bold text-4xl">30,000+</p>
              <p className="text-neutral-600">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-10">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-6 bottom-72 z-30"
          >
            <path
              d="M28 0C28.9506 15.0527 40.9472 27.0495 56 28C40.9472 28.9506 28.9506 40.9472 28 56C27.0495 40.9472 15.0527 28.9506 0 28C15.0527 27.0495 27.0495 15.0527 28 0Z"
              fill="black"
            />
          </svg>
          <svg
            width="104"
            height="104"
            viewBox="0 0 104 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-6 top-10 z-30"
          >
            <path
              d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
              fill="black"
            />
          </svg>
          <Image
            src="/images/hero1.png"
            width={672}
            height={663}
            alt="Find clothes that matches your style"
            className="z-10"
          />
        </div>
      </div>
      <div className="bg-black flex flex-row h-30 w-full justify-between py-10 px-20">
        <img
          src="/images/brands/Versace.png"
          height={68}
          className="h-8"
          alt="Versace"
        />
        <img
          src="/images/brands/Zara.png"
          height={68}
          className="h-8"
          alt="Zara"
        />
        <img
          src="/images/brands/Gucci.png"
          height={68}
          className="h-8"
          alt="Gucci"
        />
        <img
          src="/images/brands/Prada.png"
          height={68}
          className="h-8"
          alt="Prada"
        />
        <img
          src="/images/brands/Calvin_Klein.png"
          height={68}
          className="h-8"
          alt="Calvin Klein"
        />
      </div>
      <div className="flex flex-col justify-center items-center my-20">
        <p className="font-integral text-5xl text-center">NEW ARRIVALS</p>
      </div>
    </main>
  );
}
