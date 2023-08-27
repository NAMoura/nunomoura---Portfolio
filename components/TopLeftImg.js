//next image
import Image from "next/image";

const TopLeftImg = () => {
  return (
     <div className="absolute -left-44 -top-36 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-30">
      <Image src="/splash.png" width={400} height={400} alt="" />
     </div>
)};

export default TopLeftImg;
