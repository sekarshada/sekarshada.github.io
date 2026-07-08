import { client } from '../sanityClient'
import '../App.css' 

// export default function Hero() {
//   return (
//     <section className="min-h-screen flex items-center bg-black px-8 md:px-20">
      
//       <div className="max-w-4xl font-poppins text-left">
        
//         <h1 className="text-lg md:text-xl text-gray-400 mb-6">
//           Hi, I'm Gabriella Shada!
//         </h1>

//         <p className="text-4xl md:text-6xl font-semibold text-white leading-tight">
//           End-to-end researcher blending storytelling, usability, and user-centered design.
//         </p>

//       </div>

//     </section>
//   );
// }

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black px-8 md:px-20 overflow-hidden">
      
      {/* 🌌 Background Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>
      </div>

      {/* 📝 Content */}
      <div className="relative z-10 max-w-4xl font-poppins text-left">
        <h1 className="text-lg md:text-xl text-gray-400 mb-6">
          Hi, I'm Gabriella Shada!
        </h1>

        <p className="text-4xl md:text-6xl font-semibold text-white leading-tight font-poppins
        drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">
          End-to-end researcher blending storytelling, usability, and user-centered design.
        </p>
      </div>

    </section>
  );
}