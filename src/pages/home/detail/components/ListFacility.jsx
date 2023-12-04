import { CiLocationOn } from "react-icons/ci";
import PropTypes from 'prop-types';

const ListFacility = ({icon, title, description}) => {
  return (
    <div className="flex gap-2 pb-5">
      <CiLocationOn icon={icon} className="text-xl my-3" />
      <div className="flex-1">
        <h2 className="font-semibold">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

ListFacility.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ListFacility;