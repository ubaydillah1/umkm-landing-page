import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen sm:py-10 container-width px-4 sm:px-0 space-y-10 py-[100px]">
      <p className="text-center text-primary flex justify-center gap-2.5">
        <div className="animate-shake-slow">👋</div>{" "}
        <span>Hi, Kita dari kelompok ...</span>
      </p>
      <h1 className="text-center text-[32px] sm:text-[100px] font-recoleta mx-auto sm:leading-[100px] ">
        Menggali Potensi Lokal, Membawa UMKM ke Layar Global.
      </h1>
      <p className="text-center sm:max-w-[400px] mx-auto text-[12px] max-w-[80%] sm:text-sm">
        Kami menjembatani antara kreasi lokal dan pasar digital, menciptakan
        branding yang kuat, dan membangun ekosistem bisnis yang berkelanjutan.
      </p>

      <div className="mx-auto flex gap-4 sm:max-w-[400px] max-w-[300px]">
        <Button className="flex-1">Strategi Kami</Button>
        <Button className="flex-1" variant={"secondary"}>
          List UMKM
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
