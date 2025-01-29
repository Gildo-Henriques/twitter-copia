import { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <button
      onClick={handleLike}
      className="relative flex items-center gap-2 p-2 text-gray-600 hover:text-red-500"
    >
      <motion.div
        animate={{ scale: liked ? [1, 1.5, 1] : 1, rotate: liked ? [0, 10, -10, 0] : 0 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <Heart
          className={`w-5 h-5 ${liked ? "fill-red-500 stroke-red-500" : "stroke-gray-600"}`}
        />
        {liked && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: [1, 2, 1], opacity: [1, 0, 0] }}
            transition={{ duration: 0.4 }}
            onAnimationComplete={() => setLiked(true)}
          >
            <Heart className="w-5 h-5 fill-red-400 opacity-50" />
          </motion.div>
        )}
      </motion.div>
      <span className="text-lg font-semibold">{likes}</span>
    </button>
  );
}
