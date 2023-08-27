//import swiper react components (https://swiperjs.com/react)
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//import modules
import { Navigation, Pagination } from "swiper";

//icons
import { IoIosBasketball, IoIosCamera } from "react-icons/io";
import { GiMountainClimbing, GiWalkingBoot, GiGamepad } from "react-icons/gi"
import { MdVolunteerActivism } from "react-icons/md"
import { PiMonitorBold } from "react-icons/pi"
import { IoBeer } from "react-icons/io5"


//next Image
import Image from "next/image";

// testimonial data
const testimonialData = [
  {
    image: '/hob_basket.png',
    title: 'basketball',
    icon: <IoIosBasketball />,
    text:
      "Passionate about basketball since childhood, I've honed my skills through years of competitive play. Though there were breaks, my love for the game never wavered.",
  },
  {
    image: '/hob_photo.png',
    title: 'photography',
    icon: <IoIosCamera />,
    text:
      "Embarked on my photographic journey in 2016, capturing moments through the lens. From astrophotography to landscapes and storm chasing, I've explored diverse realms of visual storytelling."
  },  
  {
    image: '/hob_trekking.png',
    title: 'trekking',
    icon: <GiWalkingBoot />,
    text:
      "Embracing the spirit of exploration since childhood, trekking has been my way of discovering the wonders of nature. With a fondness for venturing into forests, mountains and uncovering hidden waterfalls, every step is a journey of discovery."
  },
  {
    image: '/hob_alpinism.png',
    title: 'alpinism',
    icon: <GiMountainClimbing />,
    text:
      "Alpinism, my recent passion, encapsulates the thrill of adrenaline, the raw beauty of nature, and the challenge of conquering high mountains. It's an embodiment of pushing boundaries and embracing the majesty of the great outdoors."
  },
  {
    image: '/hob_gaming.png',
    title: 'Gaming',
    icon: <GiGamepad />,
    text:
      "Gaming, a lifelong pursuit, has taken me from the nostalgic adventures of Alex Kidd to the strategic realms of League of Legends and Civilization. It's a journey through time and technology, where virtual worlds become a canvas for my imagination."
  },
  {
    image: '/hob_volunt.png',
    title: 'Volunteering',
    icon: <MdVolunteerActivism />,
    text:
      "I'm involved in volunteering, contributing through photography and physical labor, particularly in support of the valuable Cavalum Trails restoration efforts.",
  },
  {
    image: '/hob_entertain.png',
    title: 'Entertainment',
    icon: <PiMonitorBold />,
    text:
      "For leisure, I find joy in a variety of activities, from series to anime, appreciating music, reading, or simply exploring the endless wonders of the web.",
  },
  {
    image: '/hob_social.png',
    title: 'Going out',
    icon: <IoBeer />,
    text:
      'Beer, food, friends!',
  },
];

const HobbieSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((hobbie, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* image, title */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center mt-2">
                  {/* image */}
                  <div className="mb-2 mx-auto border-4 border-white/20 rounded-sm">
                    <Image src={hobbie.image} width={220} height={220} alt=""/>
                  </div>
                  {/* title */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {hobbie.title}
                  </div>
                </div>
              </div>
              {/*message*/}
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/*icon */}
                <div className="hidden lg:flex mb-4">
                  <div className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"> {hobbie.icon}</div>
                </div>
                {/* message */}
                <div className="xl:text-lg md:text-left text-center -mt-6 md:mt-0 scrollbar-none h-[135px] w-[250px] md:w-full overflow-scroll">{hobbie.text}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HobbieSlider;
