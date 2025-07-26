import { motion } from "framer-motion";

const memes = [
  "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753498212/image_rml2cg.webp",
  "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753498212/image_5_lkv2zr.webp",
  "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753498212/image_3_uhjvoc.webp",
  "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753498212/image_2_cuvdnw.webp",
  "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753498212/image_4_mpqeuj.webp",
  "https://res.cloudinary.com/dsdg8ke2n/image/upload/v1753498212/image_1_xo51ez.webp",
];

export default function MemeMarquee() {
  return (
    <div className="py-20 bg-[#40b1d6] overflow-hidden relative">
      <motion.div
        className="flex gap-5 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {/* Duplicate memes for seamless scroll */}
        {[...memes, ...memes].map((src, idx) => (
          <div
            key={idx}
            className="w-64 h-72 border-4 border-black rounded-xl overflow-hidden"
          >
            <img
              src={src}
              className="w-full h-full object-cover"
              alt={`meme-${idx}`}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
