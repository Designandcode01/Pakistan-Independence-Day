

// components/FlagAnimation.tsx
"use client";
import { motion } from "framer-motion";

export default function FlagAnimation() {
      return (
            <div className="flex justify-center items-center h-screen bg-green-900">
              <motion.img
        src="/pakistan-flag.png"
        alt="Pakistan Flag"
        className="w-64"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
    </div>
  );
}








// "use client";
// import Image from "next/image";

// export default function FlagAnimation() {
//   return (
//     <div className="absolute inset-0 z-0 overflow-hidden">
//       <div className="flag-container">
//         <Image
//           src="/pakistan-flag.png"
//           alt="Pakistan Flag"
//           fill
//           className="flag"
//           priority
//         />
//       </div>

//       <style jsx>{`
//         .flag-container {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           opacity: 0.2; /* Slightly transparent */
//         }

//         .flag {
//           object-fit: cover;
//           animation: wave 6s ease-in-out infinite;
//         }

//         @keyframes wave {
//           0% {
//             transform: translateX(0) rotate(0deg) scale(1.02);
//           }
//           50% {
//             transform: translateX(-2%) rotate(-1deg) scale(1.02);
//           }
//           100% {
//             transform: translateX(0) rotate(0deg) scale(1.02);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
