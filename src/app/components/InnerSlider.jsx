import { useEffect, useRef, useState } from "react";
import Box from "./Box";
import {
  MotionConfig,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

const transition = {
  type: "spring",
  stiffness: 200,
  damping: 40,
};

export default function InnerSlider() {
  const [selectedBox, setSelectedBox] = useState(-1);
  const sliderRef = useRef();
  const containerRef = useRef();

  const x = useMotionValue(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    x.set(-latest);
  })

  useEffect(() => {
    const container = containerRef.current;
    const slider = sliderRef.current;

    const { width } = slider.getBoundingClientRect();
    const containerWidth = width + 240;

    container.style.width = `${containerWidth}px`;
    document.body.style.height = `${containerWidth - (window.innerWidth - window.innerHeight)}px`;
  }, []);

  return (
    <MotionConfig transition={transition}>
      <div ref={containerRef} className="flex-1 flex flex-col justify-end pb-2">
        <motion.div
          ref={sliderRef}
          style={{ x }}
          className="flex items-end gap-x-2 px-2 w-fit mx-auto"
        >
          {[...Array(7).keys()].map((i) =>
            <Box
              key={i}
              onClick={() => setSelectedBox(selectedBox === i ? -1 : i)}
              active={selectedBox === i}
              hoverable={selectedBox === -1}
            />
          )}
        </motion.div>
      </div>
    </MotionConfig>
  );
}
