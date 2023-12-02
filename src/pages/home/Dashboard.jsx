import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CardComponent from "./components/CardComponent";

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

      {/* Section ketiga dengan card list */}
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

            <div className="flex space-x-4">
            {/* Card 1 */}
            <CardComponent
              imageUrl=".png"
              title="Card 1 Title"
              description="Card 2 Description"
            />

            {/* Card 2 */}
            <CardComponent
              imageUrl="path/to/photo2.jpg"
              title="Card 2 Title"
              description="Card 2 Description"
            />

            {/* Card 3 */}
            <CardComponent
              imageUrl="path/to/photo3.jpg"
              title="Card 3 Title"
              description="Card 3 Description"
            />

            {/* Card 4 */}
            <CardComponent
              imageUrl="path/to/photo4.jpg"
              title="Card 4 Title"
              description="Card 4 Description"
            />
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

            <div className="flex space-x-4">
            {/* Card 1 */}
            <CardComponent
              imageUrl=".png"
              title="Card 1 Title"
              description="Card 2 Description"
            />

            {/* Card 2 */}
            <CardComponent
              imageUrl="path/to/photo2.jpg"
              title="Card 2 Title"
              description="Card 2 Description"
            />

            {/* Card 3 */}
            <CardComponent
              imageUrl="path/to/photo3.jpg"
              title="Card 3 Title"
              description="Card 3 Description"
            />

            {/* Card 4 */}
            <CardComponent
              imageUrl="path/to/photo4.jpg"
              title="Card 4 Title"
              description="Card 4 Description"
            />
        </div>
        </div>
      </section>


      {/* Section kelima dengan dua warna latar belakang */}
      <section className="py-5 flex" style={{ height: "557px", margin: 0, padding: 0, backgroundColor: "#FAF8F8" }}>
        <div className="container mx-auto">
          <div className="flex justify-between w-full text-white text-2xl font-roboto font-semibold mb-6">
            <div>
                <h1><span className="text-white" style={{ color: "#3F72AF" }}>Hunian Dibawah Pasar</span></h1>
                <p className="text-black" style={{ fontSize: "17px" }}>Properti paling banyak diminati di RUMAP.ID</p>
            </div>
            <div className="w-1/8">    
                <p className="text-black" style={{ fontSize: "16px" }}>See More</p>
            </div>
            </div>


            <div className="flex space-x-4">
            {/* Card 1 */}
            <CardComponent
              imageUrl=".png"
              title="Card 1 Title"
              description="Card 2 Description"
            />

            {/* Card 2 */}
            <CardComponent
              imageUrl="path/to/photo2.jpg"
              title="Card 2 Title"
              description="Card 2 Description"
            />

            {/* Card 3 */}
            <CardComponent
              imageUrl="path/to/photo3.jpg"
              title="Card 3 Title"
              description="Card 3 Description"
            />

            {/* Card 4 */}
            <CardComponent
              imageUrl="path/to/photo4.jpg"
              title="Card 4 Title"
              description="Card 4 Description"
            />
          </div>
        </div>
      </section>

      {/* Section keenam dengan dua warna latar belakang */}
      <section className="py-5 flex" style={{ height: "457px", margin: 0, padding: 0 }}>
        <div className="w-1/2" style={{ backgroundColor: "#FAF8F8", margin: 0, padding: 0 }}>
        <div className="container mx-auto relative">
            <div className="text-white text-lg font-roboto font-bold mt-12 ml-5">
              <h1><span className="text-white text-2xl ml-6" style={{ color: "#3F72AF" }}>Tanya Properti</span></h1>
              <p className="text-black text-base font-normal ml-6 mt-2">
                Ambil keputusan properti yang lebih</p>
              <p className="text-black text-base font-normal ml-6">
                percaya diri dengan saran dari para Pakar</p>
              <p className="text-black text-base font-normal ml-6">
                Properti di komunitas kami</p>      
            </div>
            <img
              src="src/assets/Saly.png"
              alt="Gambar"
              className="w-285 h-273 object-cover mt-[-180px] mb-0 float-right" 
            />
            <div style={{ position: 'relative' }}>
              <button
                style={{ width: '219px', height: '50px', borderWidth: '5px' }}
                className="bg-[#FF385C] text-white text-base border-1 border-[#FF385C] rounded-md absolute top-[20px] left-52 px-6 font-poppins font-bold"
              > Ajukan Pertanyaan
              </button>
            </div>
            
            <div>
            <h1 className="text-center mx-auto mt-[80px] ml-60">
              <span className="text-black text-sm font-poppins font-semibold">Kategori</span>
            </h1>
            </div>
           
            <div className="flex justify-between items-center">
              <div className="text-center">
                <span className="text-[#FF385C] text-sm font-poppins font-semibold">Properti Murah</span>
              </div>

              <div className="text-center">
                <span className="text-[#FF385C] text-sm font-poppins font-semibold">Hunian Baru</span>
              </div>

              <div className="text-center">
                <span className="text-[#FF385C] text-sm font-poppins font-semibold">Pertanyaan Tentang Apartemen</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-center">
                <span className="text-[#FF385C] text-sm font-poppins font-semibold">Pertanyaan Umum</span>
              </div>
              <div className="text-center">
                <span className="text-[#FF385C] text-sm font-poppins font-semibold">Jual Rumah</span>
              </div>
            </div>
          </div>
        </div>


        <div className="w-1/2" style={{ backgroundColor: "#3F72AF", margin: 0, padding: 0 }}>
          <div className="container mx-auto text-white text-lg font-roboto font-semibold mb-6 ml-10">
            <h1 className="text-2xl mt-5">RUMAP.ID</h1>
            <p className="text-base mt-1 font-normal">Situs Online Jual Beli dan Sewa Properti</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 ml-10 mr-10">
            {/* Kolom Kiri */}
            <div className="space-y-5">
                <div className="relative flex items-center">
                  <span className="text-white mr-2">Beli Rumah Baru</span>
                  <span className="absolute right-0 top-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                    </svg>
                  </span>
                </div>
              <div className="relative flex items-center mt-5">
                <span className="text-white mr-2">Beli Apartemen Baru</span>
                <span className="absolute right-0 top-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                  </svg>
                </span>
              </div>
              <div className="relative flex items-center">
                <span className="text-white mr-2">Sewa Rumah Second</span>
                <span className="absolute right-0 top-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                  </svg>
                </span>
              </div>
              <div className="relative flex items-center">
                <span className="text-white mr-2">Sewa Ruko</span>
                <span className="absolute right-0 top-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                  </svg>
                </span>
              </div>
              <div className="relative flex items-center">
                <span className="text-white mr-2">Beli Apartemen Second</span>
                <span className="absolute right-0 top-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                  </svg>
                </span>
              </div>
              <div className="relative flex items-center">
                <span className="text-white mr-2">Beli Ruko Second</span>
                <span className="absolute right-0 top-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                  </svg>
                </span>
              </div>
              <div className="relative flex items-center">
                <span className="text-white mr-2">Sewa Apartemen Second</span>
                <span className="absolute right-0 top-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                  </svg>
                </span>
              </div>
             </div>

            {/* Kolom Kanan */}
            <div className="space-y-5">
              <div className="relative flex items-center">
                <span className="text-white mr-2">Beli Kantor Baru</span>
                <span className="absolute right-0 top-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                  </svg>
                </span>
              </div>
              <div className="relative flex items-center">
                <span className="text-white mr-2">Beli Rumah Lelang</span>
                <span className="absolute right-0 top-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                  </svg>
                </span>
              </div>
              <div className="relative flex items-center">
                <span className="text-white mr-2">Sewa Kantor Second</span>
                <span className="absolute right-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                  </svg>
                </span>
              </div>
              <div className="relative flex items-center">
                <span className="text-white mr-2">Beli Apartemen Lelang</span>
                <span className="absolute right-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                  </svg> 
                </span>
              </div>
              <div className="relative flex items-center">
                <span className="text-white mr-2">Beli Tanah Residensial</span>
                <span className="absolute right-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                  </svg>
                </span>
              </div>
              <div className="relative flex items-center">
                <span className="text-white mr-2">Beli Tanah Komersial</span>
                <span className="absolute right-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                  </svg>
                </span>
              </div>
              <div className="relative flex items-center">
                <span className="text-white mr-2">Sewa Tanah Residensial </span>
                <span className="absolute right-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" />
                  </svg>
                </span>
              </div>          
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cover bg-center py-32" style={{ backgroundImage: "url('src/assets/Pembayaran.png')", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <div className="container mx-auto text-center">
            <h1 className="text-black text-1xl mt-[-115px] font-semibold">PEMBAYARAN</h1>
        </div>
      </section>
 
      {/* Footer */}
      <Footer />

    </div>
  );
}

export default Dashboard;
