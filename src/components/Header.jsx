export default function Header() {
    return (
      <header className="fixed top-0 left-0 w-full z-50 px-8 md:px-20 py-6 flex items-center justify-between bg-transparent">
        
        {/* Left: Name / Logo */}
        <div className="text-sm tracking-widest text-gray-400 font-poppins">
          Gab
        </div>
  
        {/* Right: Nav */}
        <div className="flex items-center gap-6">
          
          <a 
            href="#"
            className="text-sm text-gray-300 hover:text-white transition font-poppins"
          >
            My Resume
          </a>
  
          <a 
            href="#"
            className="px-5 py-2 rounded-full bg-white/10 text-white text-sm font-poppins 
            backdrop-blur-md border border-white/20 hover:bg-white/20 transition"
          >
            Work With Me
          </a>
  
        </div>
  
      </header>
    );
  }