import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPaginate from "react-paginate";
import PropTypes from 'prop-types';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { houses } from '../../data/house';

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CardComponent from "../home/components/CardComponent";

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

const House = () => {

  const logos = ["Beach", "Village", "Downtown", "Suburban", "TinyHouses", "Roadside", "Residential", "Historis", "Ekspatriat", "Mountainous"];

  const settings = {
    dots: false,
    infinite: true,

    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  };

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = houses.slice(indexOfFirstItem, indexOfLastItem);


  return (
    <>
      <Navbar />
      <section className="py-5 mt-5 bg-white w-11/12 mx-auto" style={{ paddingTop: "3px", paddingBottom: "3px" }}>
        <div className="">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img src={`src/assets/${logo}.png`} alt={`${logo} Logo`} className="h-21 w-auto" />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 space-x-4 mx-4">
        {currentItems.map((data) => (
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

      <div className="flex justify-center items-center space-x-4 my-6">
        <ReactPaginate
          pageCount={Math.ceil(houses.length / itemsPerPage)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName="pagination flex space-x-2"
          pageClassName="px-4 py-2 border rounded-md border-gray-300 bg-white m-0 cursor-pointer"
          activeClassName="bg-gray-200 font-bold"
          previousClassName={`px-4 py-2 border rounded-md border-gray-300 ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-white cursor-pointer"
            }`}
          nextClassName={`px-4 py-2 border rounded-md border-gray-300 ${currentPage === Math.ceil(houses.length / itemsPerPage)
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-white cursor-pointer"
            }`}
          previousLabel="Previous"
          nextLabel="Next"
        />
      </div>

      <Footer />
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

export default House;