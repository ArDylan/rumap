import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";

const navlink = [
  {
    title: "BELI",
    path: "/beli",
  },
  {
    title: "SEWA",
    path: "/sewa",
  },
  {
    title: "KPR & TAKE OVER",
    path: "/kprtakeover",
  },
  {
    title: "ESTIMASI PROPERTI",
    path: "/estimasi",
  },
  {
    title: "TITIP JUAL/SEWA",
    path: "/titip-jual-sewa",
  },
  {
    title: "JASA",
    path: "/jasa",
  },
];


function Dashboard() {
  const logos = ["Beach", "Village", "Downtown", "Suburban", "TinyHouses", "Roadside", "Residential", "Historis", "Ekspatriat", "Mountainous"];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9, 
    slidesToScroll: 1,
  };

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar navlinks={navlink} />

      {/* Section pertama dengan background dash */}
      <section className="bg-cover bg-center py-32" style={{ backgroundImage: "url('src/assets/bgdash.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="container mx-auto">
          {/* Konten Dashboard, tambahkan sesuai kebutuhan */}
        </div>
      </section>

      {/* Section kedua dengan background putih dan slider */}
      <section className="py-5 bg-white" style={{ paddingTop: "3px", paddingBottom: "3px" }}>
        <div className="container mx-auto">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img src={`src/assets/${logo}.png`} alt={`${logo} Logo`} className="h-21 w-auto" />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Section ketiga dengan card list dan background 3F72AF */}
      <section style={{ backgroundColor: "rgba(63, 114, 175, 0.6)", height: "557px" }} className="py-5">
         <div className="container mx-auto ">
           {/* Sebelum Card List */}
            <div className="flex justify-between w-full text-white text-2xl font-roboto font-semibold mb-6">
            <div>
                <h1><span className="text-white" style={{ color: "#3F72AF" }}>Hunian di RUMAP.ID</span></h1>
                <p className="text-white" style={{ fontSize: "18px" }}>Temukan lokasi hunian impian Anda</p>
            </div>
            <div className="w-1/8">    
                <p className="text-black" style={{ fontSize: "16px" }}>See More</p>
            </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-lg">
                <img src="src/assets/bgdash.png" alt="Card 1" className="w-full h-32 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">Card 1 Title</h3>
                <p className="text-gray-500">Card 1 Description</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 rounded-lg">
                <img src="path/to/photo2.jpg" alt="Card 2" className="w-full h-32 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">Card 2 Title</h3>
                <p className="text-gray-500">Card 2 Description</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 rounded-lg">
                <img src="path/to/photo3.jpg" alt="Card 3" className="w-full h-32 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">Card 3 Title</h3>
                <p className="text-gray-500">Card 3 Description</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-4 rounded-lg">
                <img src="path/to/photo4.jpg" alt="Card 4" className="w-full h-32 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">Card 4 Title</h3>
                <p className="text-gray-500">Card 4 Description</p>
            </div>
            </div>
        </div>
      </section>



      <section style={{ backgroundColor: "#FAF8F8", height: "557px" }} className="py-5">
         <div className="container mx-auto ">
            {/* Sebelum Card List */}
            <div className="flex justify-between w-full text-white text-2xl font-roboto font-semibold mb-6">
            <div>
                <h1><span className="text-white" style={{ color: "#3F72AF" }}>Eksklusif di RUMAP.ID</span></h1>
                <p className="text-black" style={{ fontSize: "18px" }}>Temukan lokasi hunian impian Anda</p>
            </div>
            <div className="w-1/8">    
                <p className="text-black" style={{ fontSize: "16px" }}>See More</p>
            </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-lg">
                <img src="path/to/photo1.jpg" alt="Card 1" className="w-full h-32 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">Card 1 Title</h3>
                <p className="text-gray-500">Card 1 Description</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 rounded-lg">
                <img src="path/to/photo2.jpg" alt="Card 2" className="w-full h-32 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">Card 2 Title</h3>
                <p className="text-gray-500">Card 2 Description</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 rounded-lg">
                <img src="path/to/photo3.jpg" alt="Card 3" className="w-full h-32 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">Card 3 Title</h3>
                <p className="text-gray-500">Card 3 Description</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-4 rounded-lg">
                <img src="path/to/photo4.jpg" alt="Card 4" className="w-full h-32 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">Card 4 Title</h3>
                <p className="text-gray-500">Card 4 Description</p>
            </div>
            </div>
        </div>
      </section>


      <section style={{ backgroundColor: "#FAF8F8", height: "557px" }} className="py-5">
         <div className="container mx-auto ">
            {/* Sebelum Card List */}
            <div className="text-white text-2xl font-roboto font-semibold mb-6">
            <h1><span className="text-white" style={{ color: "#3F72AF" }}>Hunian Dibawah Pasar</span></h1>
            <p className="text-black" style={{ fontSize: "18px" }}>Properti paling banyak diminati</p>
            </div>

            <div className="grid grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-lg">
                <img src="path/to/photo1.jpg" alt="Card 1" className="w-full h-32 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">Card 1 Title</h3>
                <p className="text-gray-500">Card 1 Description</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 rounded-lg">
                <img src="path/to/photo2.jpg" alt="Card 2" className="w-full h-32 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">Card 2 Title</h3>
                <p className="text-gray-500">Card 2 Description</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 rounded-lg">
                <img src="path/to/photo3.jpg" alt="Card 3" className="w-full h-32 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">Card 3 Title</h3>
                <p className="text-gray-500">Card 3 Description</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-4 rounded-lg">
                <img src="path/to/photo4.jpg" alt="Card 4" className="w-full h-32 object-cover mb-2 rounded-md" />
                <h3 className="text-lg font-semibold">Card 4 Title</h3>
                <p className="text-gray-500">Card 4 Description</p>
            </div>
            </div>
        </div>
      </section>

      <section className="bg-cover bg-center py-32" style={{ backgroundImage: "url('src/assets/Pembayaran.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="container mx-auto text-center">
            <h1 className="text-black text-1xl font-bold">Pembayaran</h1>
        </div>
      </section>


    </div>
  );
}

export default Dashboard;
