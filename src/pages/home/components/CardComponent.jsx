import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const CardComponent = ({ id, imageUrl, title, price, rate, date }) => {
  return (
    <Link key={id} to={'/homeDetail'}>
      <div className="bg-white rounded-lg shadow-md">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover mb-4 rounded-md" />
        <div className="px-2 py-1">
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">{title}</h3>
            <h3>{rate}</h3>
          </div>
          <p className="text-sm text-[#9A9A9A]">Published On {date}</p>
          <p>Rp{price}</p>
        </div>
      </div>
    </Link>
  );
};

CardComponent.propTypes = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};


export default CardComponent;
