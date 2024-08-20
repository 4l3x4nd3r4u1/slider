import { useSpring, useScroll, motion } from "framer-motion";

export default function ProgressData() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="h-[20%] w-[16vw] ml-2 flex flex-col justify-end text-[#12110d]">
      <div className="text-sm">
        Scroll to Explore
        <motion.div
          style={{ scaleX }}
          className="h-[1px] origin-[0%] mt-2 bg-[#12110d]"
        />
      </div>
    </div>

  )
}
