import Hero from "@/components/main/Hero";
export default async function Home() {
 
  return (
    <main className="h-full w-full">
    <div className="flex flex-col gap-20">
      <Hero />
    </div>
  </main>
    
  );
}