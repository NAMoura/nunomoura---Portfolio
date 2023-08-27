//components
import HobbiesSlider from "../../components/HobbiesSlider";
import Burst from "../../components/Burst";

//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const hobbies = () => {
  return <div className="h-full bg-primary py-32 text-center">
    <div className="container mx-auto h-full flex flex-col justify-center">
    <Burst />
      <motion.h2 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="h2 mb-6 xl:mb-0">Life <span className="text-accent">outside</span> of work.</motion.h2>
      {/* slider */}
      <motion.div
       variants={fadeIn('up', 0.4)}
       initial="hidden"
       animate="show"
       exit="hidden"
       >
        <HobbiesSlider />
      </motion.div>
    </div>
  </div>;
};

export default hobbies;
