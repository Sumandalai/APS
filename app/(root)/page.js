import Hero from "@/components/main/Hero";
export default async function Home() {
 
  return (
    <main className="h-full w-full">
    <div className="flex flex-col justify-center items-center gap-20">
      <Hero />
    </div>
    <div className="w-full text-center text-white p-6 mt-8 relative z-[10]">
  <div className="flex flex-col items-center space-y-2">
    <div className="text-2xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
      Made by APS with ❤
    </div>
    <div className="flex space-x-2">
      <span className="text-blue-400 animate-pulse">🚀</span>
      <span className="text-purple-400 animate-pulse">🌌</span>
      <span className="text-pink-400 animate-pulse">✨</span>
    </div>
  </div>
  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800 opacity-25 blur-lg"></div>
</div>


  </main>
    
  );
}
