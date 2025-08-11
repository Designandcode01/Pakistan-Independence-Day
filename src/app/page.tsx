


// app/page.tsx
// import Fireworks from "@/components/Fireworks";
// import FlagAnimation from "./components/FlagAnimation";
// import Countdown from "./components/Countdown";
// import Fireworks from "./components/Fireworks";
import Countdown from "@/components/Countdown";
import FlagAnimation from "@/components/FlagAnimation";
// import CountdownWithFireworks from "@/components/CountdownWithFireworks";
import TimelineHistory from "@/components/TimelineHistory";
import PhotoGallery from "@/components/PhotoGallery";
import PakistanTimeline from "@/components/PakistanTimeline";

export default function Home() {
    return (
        <main className="bg-green-800 min-h-screen text-white mt-5">
          {/* <CountdownWithFireworks /> */}
          <FlagAnimation />
          <Countdown />
          {/* <Fireworks /> */}

      <div className="z-10 mt-10">
        <PakistanTimeline />
      </div>

        <div className="z-10 mt-10">
        <TimelineHistory />
        </div>
        <div className="z-10 mt-10">
        <PhotoGallery />
        </div>

        </main>
      );
    }
    
    
    
    
    
    
    
    
    
    
    // import CountdownWithFireworks from "@/components/CountdownWithFireworks";
    // import FlagAnimation from "@/components/FlagAnimation";
    // // import CountdownWithFireworks from "./components/CountdownWithFireworks";
    // // import FlagAnimation from "./components/FlagAnimation";
    
    // export default function Home() {
    //   return (
    //     <main className="relative bg-green-800 min-h-screen flex flex-col items-center justify-center overflow-hidden">
    //       <FlagAnimation />
    //       <div className="z-10">
    //         <CountdownWithFireworks />
    //       </div>
    //     </main>
    //   );
    // }
    
