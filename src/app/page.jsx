import "../styles/home.css";
import Image from "next/image";
import { openGraphImage } from "./shared-metadata";
import HeroCardItems from "@/components/Home/HeroCardItems";
import UseCasesItem from "@/components/Home/UseCasesItem";
import FaqQuestionItem from "@/components/Home/FaqQuestionItem";
import EasAffliateItem from "@/components/Home/EasAffliateItem";
import NFTCollections from "@/components/Home/NFTCollections";
import AboutUsItem from "@/components/Home/AboutUsItem";
import InputGoogleMap from "@/components/Home/InputGoogleMap";

export const metadata = {
  title: "Ethereum Address Service (EAS) | NFT Location Mapping",
  description: "EAS is mapping every real-world address as a tradable NFT, granting ownership of digital rights, and allowing NFT owners to generate revenue.",
  openGraph: {
    title: 'Ethereum Address Service (EAS) | NFT Location Mapping',
    ...openGraphImage,
    description: 'EAS is mapping every real-world address as a tradable NFT, granting ownership of digital rights, and allowing NFT owners to generate revenue.',
  },
  icons: {
    icon: ["/images/logo.png"],
  },
};
export default function Home() {
  return (
    <>
      <div className="home-page">
        <section className="hero">
          <div className="hero-bg-overlay"></div>
          <div className="container">
            <div className="hero-wrapper">
              <span className="focus-color">Ethereum Address Service</span>
              <h1 className="hero-title">
                Mapping the World's Addresses as <span>NFT-based</span> Digital
                Rights
              </h1>
  
                <InputGoogleMap />

              <div className="hero-map-img">
                <Image
                  src="/images/home/map-3d.png"
                  width={300}
                  height={400}
                  alt="est nft"
                />
              </div>
            </div>
          </div>

          <div className="hero-bg-hover"></div>
        </section>

        {/* ======================= HERO CARD ====================== */}
        <HeroCardItems />

        {/* ====================== ABOUT US ========================== */}
        <AboutUsItem />
        <NFTCollections />
        {/* ==================== NFT COLLECTIONS ==================== */}

        {/* =====================  NFT USE CASES ==================== */}
        <UseCasesItem />

        {/* ========================= FAQ QUESTION  ================== */}
        <FaqQuestionItem />

        {/* ======================== EAS AFFILIATE ================== */}
        <EasAffliateItem />
      </div>
    </>
  );
}
