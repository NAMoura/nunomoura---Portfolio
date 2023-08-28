
//import swiper react components (https://swiperjs.com/react)
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import modules
import { Pagination } from "swiper";

//icons
import { BsArrowRight } from "react-icons/bs";

//next Image
import Image from "next/image";

//next link
import Link from "next/link";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          path: "/Mockup1.png",
          state: "in progress",
          url: "https://namoura.github.io/",
        },
        {
          path: "/Mockup2.png",
          state: "in progress",
          url: "https://ls-website-seven.vercel.app/",
        },
        {
          path: "/Mockup3.png",
          state: "finished",
          url: "https://photo-store-iota.vercel.app/",
        },
        {
          path: "/Mockup4.png",
          state: "finished",
          url: "https://job-search-ruby.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          path: "/Mockup5.png",
          state: "finished",
          url: "https://mellifluous-concha-a6d15f.netlify.app/",
        },
        {
          path: "/Mockup6.png",
          state: "finished",
          url: "https://warm-bienenstitch-60cce0.netlify.app/index.html",
        },
        {
          path: "/Mockup_cs_l.png?v=2",
          state: "finished",
          url: "",
        },
        {
          title: "title",
          path: "/Mockup_cs_r.png?v=2",
          state: "finished",
          url: "",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, slideIndex) => {
        return (
          <SwiperSlide key={slideIndex}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, imageIndex) => {
                return (
                  <Link
                    href={image.url}
                    target={image.url === "" ? "" : "_blank"}
                    key={imageIndex}
                  >
                    <div
                      className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                      key={imageIndex}
                    >
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        {/* îmages */}
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt=""
                          style={{ opacity: 0.9 }} 
                        />
                        {/* overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-90 transition-all duration-700"></div>
                        {/* title */}
                        {image.url !== "" && (
                          <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                            <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                              {/* title pt1 */}
                              <div className="delay-100">LIVE</div>
                              {/* title pt2 */}
                              <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                                PROJECT
                              </div>
                              {/* icon */}
                              <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                <BsArrowRight />
                              </div>
                            </div>
                            <div className="text-center text-[10px] tracking-[0.2em] translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-300">
                              {image.state === "finished"
                                ? "finished"
                                : "in progress"}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
