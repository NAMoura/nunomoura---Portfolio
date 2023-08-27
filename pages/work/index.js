//components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Burst from "../../components/Burst";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";


const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Burst />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My Work <span className="text-accent">&gt;</span>
            </motion.h2>
            <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              <div>Feel free to check some of my works.</div><div className="text-[12px] text-white/50 leading-snug">Please have in mind that since I am using free databases, some may take around one minute to load. Detailed descriptions of each work are available on my GitHub. </div>
            </motion.div>
          </div>
          <motion.div 
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full xl:max-w-[65%]">
            {/* slider */}
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
