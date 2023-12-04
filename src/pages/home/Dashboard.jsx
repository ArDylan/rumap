import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { houses } from '../../data/house';

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CardComponent from "./components/CardComponent";
import paymentMethod from "../../assets/Pembayaran.png";
import QuestionComponent from "./components/QuestionComponent";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (

    <IoIosArrowDroprightCircle className={`${className}  text-black hover:text-black`} style={{ ...style }} onClick={onClick} />

  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowDropleftCircle className={`${className}  text-black hover:text-black`} style={{ ...style }} onClick={onClick} />
  );
}

function Dashboard() {


  const logos = ["Beach", "Village", "Downtown", "Suburban", "TinyHouses", "Roadside", "Residential", "Historis", "Ekspatriat", "Mountainous"];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const cardSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };


  const originalArray = [...houses];

  const shuffledArray = originalArray.sort(() => Math.random() - 0.5);
  const recomendationHouse = shuffledArray.slice(0, 4);

  const minimumArray = [...houses].sort((a, b) => a.price - b.price);
  const minimumHouses = minimumArray.slice(0, 4);

  const maximumArray = [...houses].sort((a, b) => b.price - a.price);
  const maximumHouses = maximumArray.slice(0, 4);




  return (
    <>
      <div className="min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Section pertama dengan background dash */}
        <section className="bg-cover bg-center py-32" style={{ backgroundImage: "url('src/assets/bgdash.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
          <div className="container mx-auto">
            {/* Konten Dashboard, tambahkan sesuai kebutuhan */}
          </div>
        </section>

        {/* Section kedua dengan background putih dan slider */}
        <section className="py-5 bg-white w-10/12 mx-auto pt-1 pb-1">
          <div className="">
            <Slider {...settings}>
              {logos.map((logo, index) => (
                <div key={index} className="flex-shrink-0">
                  <img src={`src/assets/${logo}.png`} alt={`${logo} Logo`} className="h-21" />
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* Section ketiga dengan card list */}
        <section className="py-5 bg-[#3f72af]">
          <div className="mx-10">
            {/* Sebelum Card List */}
            <div className="flex justify-between w-full text-white text-2xl font-roboto font-semibold mb-6">
              <div>
                <h1><span className="text-white text-[#3F72AF]">Hunian di RUMAP.ID</span></h1>
                <p className="text-white text-[18px]">Temukan lokasi hunian impian Anda</p>
              </div>
              <div className="w-1/8">
                <Link to={'/list-house'}>
                  <p className="text-white hidden md:inline-block" style={{ fontSize: "16px" }}>See More</p>
                </Link>
              </div>
            </div>

            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-2 space-x-4 mx-4">
              {recomendationHouse.map((data) => (
                <CardComponent
                  key={data.id}
                  id={data.id}
                  imageUrl={data.image}
                  title={data.title}
                  rate={data.reviews}
                  date={data.date}
                  price={data.price}
                />
              ))}
            </div>
            <Slider dotsClass="" className="color-black md:hidden" {...cardSettings}>
              {recomendationHouse.map((data) => (
                <CardComponent
                  key={data.id}
                  id={data.id}
                  imageUrl={data.image}
                  title={data.title}
                  rate={data.reviews}
                  date={data.date}
                  price={data.price}
                />
              ))}
            </Slider>
          </div>
        </section>


        <section className="py-5 bg-[#FAF8F8]">
          <div className="mx-10">
            {/* Sebelum Card List */}
            <div className="flex justify-between w-full text-white text-2xl font-roboto font-semibold mb-6">
              <div>
                <h1><span className="text-white" style={{ color: "#3F72AF" }}>Eksklusif di RUMAP.ID</span></h1>
                <p className="text-black" style={{ fontSize: "18px" }}>Temukan lokasi hunian impian Anda</p>
              </div>
              <div className="w-1/8">
                <Link to={'/list-house'}>
                  <p className="text-black hidden md:inline-block" style={{ fontSize: "16px" }}>See More</p>
                </Link>
              </div>
            </div>

            <div className="space-x-4 mx-4">
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-2 space-x-4 mx-4">
                {maximumHouses.map((data) => (
                  <CardComponent
                    key={data.id}
                    id={data.id}
                    imageUrl={data.image}
                    title={data.title}
                    rate={data.reviews}
                    date={data.date}
                    price={data.price}
                  />
                ))}
              </div>
              <Slider dotsClass="" className="color-black md:hidden" {...cardSettings}>
                {maximumHouses.map((data) => (
                  <CardComponent
                    key={data.id}
                    id={data.id}
                    imageUrl={data.image}
                    title={data.title}
                    rate={data.reviews}
                    date={data.date}
                    price={data.price}
                  />
                ))}
              </Slider>

            </div>
          </div>
        </section>


        {/* Section kelima dengan dua warna latar belakang */}
        <section className="py-5 bg-[#FAF8F8]">
          <div className="mx-10">
            <div className="flex justify-between w-full text-white text-2xl font-roboto font-semibold mb-6">
              <div>
                <h1><span className="text-white" style={{ color: "#3F72AF" }}>Hunian Dibawah Pasar</span></h1>
                <p className="text-black" style={{ fontSize: "17px" }}>Properti paling banyak diminati di RUMAP.ID</p>
              </div>
              <div className="w-1/8">
                <Link to={'/list-house'}>
                  <p className="text-black hidden md:inline-block" style={{ fontSize: "16px" }}>See More</p>
                </Link>
              </div>
            </div>

            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-2 space-x-4 mx-4">
              {minimumHouses.map((data) => (
                <CardComponent
                  key={data.id}
                  id={data.id}
                  imageUrl={data.image}
                  title={data.title}
                  rate={data.reviews}
                  date={data.date}
                  price={data.price}
                />
              ))}
            </div>
            <Slider dotsClass="" className="color-black md:hidden" {...cardSettings}>
              {minimumHouses.map((data) => (
                <CardComponent
                  key={data.id}
                  id={data.id}
                  imageUrl={data.image}
                  title={data.title}
                  rate={data.reviews}
                  date={data.date}
                  price={data.price}
                />
              ))}
            </Slider>

          </div>
        </section>

        {/* Section keenam dengan dua warna latar belakang */}
        <QuestionComponent />

        <section className="bg-cover bg-center py-32">
          <div className="container mx-auto text-center">
            <h1 className="text-black text-2xl font-semibold">PEMBAYARAN</h1>
            <img src={paymentMethod} />
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

SampleNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default Dashboard;
