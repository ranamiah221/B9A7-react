const Banner = () => {
    const bgImage="url('/src/assets/banner.jpg')"
    return (
        <div className="rounded-lg mt-5 text-sm" style={{
            backgroundImage: bgImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            
          }}>
               <div className="text-center bg-gradient-to-r from-[#150B2BE5] to-[#150B2B00] h-screen md:px-52 md:py-64 p-2">
               <h1 className="text-lg text-bold text-[#FFF] md:font-bold md:text-5xl md:leading-relaxed">Discover an exceptional cooking class tailored for you!</h1>
               <p className="md:text-xl md:font-normal text-[#FFF] md:mt-10 md:mb-6">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <button className="btn-accent md:text-xl md:font-medium bg-[#0BE58A] rounded-3xl md:py-5 md:px-6 md:mr-3 mt-2 p-1 mr-1">Explore Now</button>
                 <button className="btn btn-accent md:text-xl text-[#FFFF] md:font-medium  rounded-3xl md:py-5 md:px-6 border-2 md:ml-3 mt-2 p-1">Our Feedback</button>
                 
               </div>
          </div>
    );
};

export default Banner;