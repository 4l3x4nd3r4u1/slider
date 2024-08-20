import { motion } from "framer-motion";

export default function Box({ onClick, active, hoverable }) {
  const hoverStyles = () => hoverable ? { width: 350 } : {};

  return (
    <motion.div
      className="aspect-square w-60 bg-gray-300 cursor-pointer"
      onClick={onClick}
      initial={false}
      whileHover={hoverStyles}
      animate={{
        width: active ? 480 : 240,
        backgroundColor: active ? "rgb(241, 241, 241)" : "rgb(95, 95, 95)"
      }}
    >
      {active &&
        <motion.div
          className="text-xs p-2 text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <p className="underline">Add to Wishlist</p>
        </motion.div>
      }
    </motion.div>
  )
}
