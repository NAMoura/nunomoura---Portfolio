//links
import Link from "next/link";

//icons
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://github.com/NAMoura'} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiGithubLine />
    </Link>
    <Link href={'https://www.instagram.com/nunoandremoura/'} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiInstagramLine />
    </Link>
    <Link href={'https://www.linkedin.com/in/namoura/'} target="_blank" className="hover:text-accent transition-all duration-300">
      <RiLinkedinBoxLine />
    </Link>
  </div>;
};

export default Socials;
