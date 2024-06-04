import Category from "@/components/Home/Category";
import Hero from "@/components/Home/Hero";
import NewArrival from "@/components/Home/NewArrival";
import Tranding from "@/components/Home/Tranding";
import { setLang } from "@/utils/setLang";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ params: { lang } }) {
  await setLang(lang);
  return (
    <>
      <Hero />
      <Category />
      <NewArrival />
      <div className="container pb-16">
        <Link href="#">
          <Image
            src="/offer.jpg"
            alt="ads"
            className="w-full"
            width={1200}
            height={300}
          />
        </Link>
      </div>
      <Tranding />
    </>
  );
}
