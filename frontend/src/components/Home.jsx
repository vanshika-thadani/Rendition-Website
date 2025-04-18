import React, { useEffect } from 'react'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import { withLoadTracking } from './withLoadTracking'

const heading = "RENDITION";

const Home = withLoadTracking(({ onLoad }) => {
  useEffect(() => {
    const handleScroll = () => {
      let text = document.getElementById("mainHeading");
      let val = window.scrollY;
      if (text) text.style.marginTop = val * 1.2 + "px";
    };

    window.addEventListener("scroll", handleScroll);

    return ()=>{
      window.removeEventListener('scroll', handleScroll);
    }
  },[])

  const background = 'https://res.cloudinary.com/dspenamcg/image/upload/v1744107175/background_qfrj4s.jpg'

  return (
    <div
      id="Home"
      className={`relative h-screen w-screen flex items-center justify-center`}
    >
      <img
        src={background}
        className="absolute inset-0 h-full w-full object-cover"
        alt=""
      />

      <div
        className="relative flex items-center justify-center flex-col z-0"
        id="mainHeading"
      >
        <motion.div
          initial="hidden"
          animate="show"
          variants={textVariant()}
          className="flex flex-row justify-center items-center"
        >
          {heading.split("").map((letter, index) => (
            <div key={index} className="relative flex flex-row">
              <h1 className={styles.headingShadow}>{letter}</h1>
              <h1 className={styles.headingFont}>{letter}</h1>
            </div>
          ))}
        </motion.div>
        <motion.div initial="hidden" animate="show" variants={textVariant()}>
          <div className="flex flex-row items-center gap-[2px] sm:gap-[5px]">
            <p className="text-zinc-600 font-thick text-sm sm:text-lg ">
              _________
            </p>
            <h1 className="heading text-xl sm:text-3xl md:text-4xl 2xl:text-6xl pt-[10px] text-transparent bg-clip-text bg-gradient-to-t from-[#e34a69] to-[#ff0436]">
              The Theatre Club
            </h1>
            <p className="text-zinc-600 font-thick text-sm sm:text-lg ">
              _________
            </p>
          </div>
        </motion.div>
      </div>
      {/* <div className="absolute w-full inset-0 bg-gradient-to-t from-[rgba(8,0,23,0.98)] from-5% to-transparent to-30%"></div> */}
    </div>
  );
});

export default Home;
