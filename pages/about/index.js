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
          <FaHtml5 key="html" />,
          <FaCss3 key="css" />,
          <FaJs key="js" />,
          <FaJava key="java" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
        ],
      },
      {
        title: "Vídeo/Photography",
        icons: [
          <SiAdobelightroomclassic key="lightroom" />,
          <SiAdobepremierepro key="premiere" />,
          <SiAdobephotoshop key="photoshop" />,
        ],
      },
      {
        title: "Design",
        icons: [<FaFigma key="figma" />, <SiAdobeillustrator key="illustrator" />],
      },
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
      {/* avatar img */}
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
        {/* text */}
        <div className="flex-1 flex flex-col justify-center mb-4">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
           Good stories inspire great <span className="text-accent">designs</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mas-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            From roles in graphic design to my journey in video & photography, Ive honed creativity and collaboration. 
            Transitioning to development, I combine artistic flair with coding skills, creating well-rounded digital experiences.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-auto text-center xl:mr-10 mt-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                &lt; <CountUp start={0} end={1} duration={10} />
                </div>
                <div className="text-xs mx-auto uppercase tracking-[1px] loading-[1.4] max-w-[100px]">
                  Year of experience
                </div>
              </div>
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className="text-xs mx-auto uppercase tracking-[1px] loading-[1.4] max-w-[100px]">
                  Completed projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] mt-4 lg:pl-6"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
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
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60 "
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0 text-white/90">{item.title}</div>
                  <div className="hidden md:flex text-accent">&gt;</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4 mb-2">
                    {/* îcons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div key={itemIndex} className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
