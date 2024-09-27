const Banner = () => {
    const bgImage="url('/src/assets/banner.jpg')"
    return (
        <div className="rounded-lg mt-5 " style={{
            backgroundImage: bgImage,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            
          }}>
               <div className="text-center bg-gradient-to-r from-[#150B2BE5] to-[#150B2B00] h-screen px-52 py-64">
               <h1 className="text-[#FFF] font-bold text-5xl leading-relaxed">Discover an exceptional cooking class tailored for you!</h1>
               <p className="text-xl font-normal text-[#FFF] mt-10 mb-6">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <button className="btn btn-accent text-xl font-medium bg-[#0BE58A] rounded-3xl py-5 px-6 mr-3">Explore Now</button>
                 <button className="btn btn-accent text-xl text-[#FFFF] font-medium  rounded-3xl py-5 px-6 border-2 ml-3">Our Feedback</button>
                 
               </div>
          </div>
    );
};

export default Banner;