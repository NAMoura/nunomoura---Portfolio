import React, { useState } from "react";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaJava,
  FaFigma,
} from "react-icons/fa";
import { SiNextdotjs, SiAdobephotoshop, SiAdobelightroomclassic, SiAdobepremierepro, SiAdobeillustrator } from "react-icons/si";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaJava />,
          <FaReact />,
          <SiNextdotjs />,
        ],
      },
      {
        title: "Vídeo/Photography",
        icons: [ <SiAdobelightroomclassic />, <SiAdobepremierepro />, <SiAdobephotoshop />],
      },
      {
        title: "Design",
        icons: [<FaFigma />, <SiAdobeillustrator />],
      }
    ],
  },

  {
    title: "experience",
    info: [
      {
        title: "Video & Photography - Freelancer",
        stage: "2022 - 2023",
      },
      {
        title: "Video & Photography - Comer com Saber",
        stage: "2021",
      },
      {
        title: "Graphic Designer - Publistudio Lda",
        stage: "2018 - 2020",
      },
      {
        title: "Graphic Designer - PaçoPrint",
        stage: "2017 - 2018",
      },
      {
        title: "E-commerce Specialist - Satfiel",
        stage: "2013 - 2016",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Junior FullStack Developer - <Academia de Código_>",
        stage: "2023",
      },
      {
        title: "Digital Design - Universidade Católica Portuguesa",
        stage: "2015",
      },
      {
        title: "PR and Communication - Instituto Politécnico da Guarda",
        stage: "2012",
      },
    ],
  },
];

//components
import Avatar from "../../components/Avatar";
import Burst from "../../components/Burst";
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left ">
      <Burst />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-[400px] -left-[540px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 overflow-y-auto scrollbar-none">
        <div className="flex-1 flex flex-col justify-center mb-4">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Good stories inspire great{" "}
            <span className="text-accent">designs</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mas-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            From roles in graphic design to my journey in video & photography,
            I&apos;ve honed creativity and collaboration. Transitioning to
            development, I combine artistic flair with coding skills, creating
            well-rounded digital experiences.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            {/* ... (counters) */}
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] mt-4 lg:pl-6"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-[100% after:transition-all after:duration-300"
                } 
                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 "
              >
                {/* ... (content) */}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
