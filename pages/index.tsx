import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "../components/home/Hero";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <Hero />
      </div>
    </>
  );
}
