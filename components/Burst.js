//next image
import Image from "next/image";

const Burst = () => {
  return (
    <div className="w-[200px] xl:w-[400px] absolute -right-32 -bottom-32 opacity-60 mix-blend-color-dodge animate-pulse duration-75 z-10 ">
      <Image
        src={"/burst2.png"}
        width={260}
        height={200}
        className="w-full h-full"
        
      />
    </div>
  );
};

export default Burst;
