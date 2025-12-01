const Home = () => { 
  return ( 
    <div className="relative min-h-screen bg-gradient-to-b from-[#A2DFF7] to-[#F5F5F5]"> 
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div> 
      <div className="flex flex-col justify-center items-center relative z-10 text-center py-32"> 
        <h1 className="text-7xl font-bold text-white leading-tight">Designing Your Vision</h1> 
        <p className="text-2xl text-white mt-4">Building beautiful websites that resonate with your brand.</p> 
        <div className="mt-8 space-x-4"> 
          <button className="bg-gradient-to-r from-[#A2DFF7] to-[#F5F5F5] text-white px-6 py-3 rounded-full shadow-xl hover:shadow-2xl">Get Started</button> 
          <button className="border-2 border-[#A2DFF7] text-[#A2DFF7] px-6 py-3 rounded-full hover:bg-[#A2DFF7]/10">Learn More</button> 
        </div> 
      </div> 
    </div> 
  ); 
}; 
export default Home;