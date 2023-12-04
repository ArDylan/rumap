import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (

    <IoIosArrowDroprightCircle className={`${className} text-black hover:text-black`} style={style} onClick={onClick} />

  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowDropleftCircle className={`${className} text-black hover:text-black`} style={style} onClick={onClick} />
  );
}

const listContainer = ({ Children, background }) => {

  const cardSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };


  return (
    <>asd</>
  );
}

listContainer.propTypes = {
  background: PropTypes.bool.isRequired,
};

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

export default listContainer;