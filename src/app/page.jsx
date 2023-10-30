// ::::: NEXTJS :::::
import Link from "next/link";
import Image from "next/image";

// ::::: IMAGE :::::
import heroImage from "../../public/img-2.jpg";

// ::::: COMPONENTE :::::
import ButtonComponent from "@/components/Button/Button";

export default function Home() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center gap-2 md:flex-row">
      <div className="animate__animated animate__fadeInLeft flex-1 max-w-4xl">
        <h1 className="text-violet-700 text-center text-[4rem] leading-[54px] font-[700] ">
          Fusion Fitness Center
        </h1>
        <p className="text-white text-center text-[1.2rem] font-[300] rounded-lg p-5 mb-5 ">
          Transforma tu vida en{" "}
          <span className="text-violet-700 text-[1.5rem] font-semibold">
            Fusion Fitness Center
          </span>
          . Nuestra pasión es tu bienestar. Únete hoy y descubre tu mejor
          versión.
        </p>
        <Link href={"/login"}>
          <ButtonComponent text={"VER MAS"} />
        </Link>
      </div>
      <div className="animate__animated animate__fadeInRight flex-1 hidden md:block">
        <Image src={heroImage} className="rounded-xl" />
      </div>
    </section>
  );
}
