import PropTypes from 'prop-types';
// import { FaStar } from "react-icons/fa";

const CommentComponent = ({ name, image, date, description }) => {
  return (
    <div>
      <div className="flex gap-2">
        <img className="w-16 rounded-full" src={image} alt="" />
        <div className="my-3">
          <p className="text-sm font-bold">{name}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      {/* <FaStar /> */}
      <p className="text-sm">{description}</p>
    </div>
  );
}

CommentComponent.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CommentComponent;