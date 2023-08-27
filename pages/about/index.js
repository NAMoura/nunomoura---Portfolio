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
      
    </div>
  );
};

export default About;
