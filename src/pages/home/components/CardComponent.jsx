import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const CardComponent = ({ id, imageUrl, title, price, rate, date }) => {
  return (
    <Link key={id} to={`/homeDetail/${id}`}>
      <div className="bg-white hover:bg-gray-100 rounded-lg shadow-lg h-full">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover mb-4 rounded-t-md" />
        <div className="px-4 py-3">
          <div className="flex justify-between py-2">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <div className="flex flex-cols gap-2">
              <FaStar />
            <h3 className="-mt-1">{rate}</h3>
            </div>
          </div>
          <p className="text-sm text-[#9A9A9A] my-3 py-1">Published On {date}</p>
          <p className="my-3 py-1">Rp{price}</p>
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
