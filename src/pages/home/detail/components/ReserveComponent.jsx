import PropTypes from 'prop-types';

const ReserveComponent = ({price, reviews, onClick}) => {
  return (
    <div className="bg-white shadow-sm border rounded-lg px-5 py-5">
      <p className="flex justify-between py-5">
        <span className="font-bold text-lg"> Rp.{price} </span>
        <span className="">{reviews}</span>
      </p>
      <button onClick={onClick} className="btn w-full rounded-lg bg-blue-500 text-white text-lg font-semibold py-5">Beli</button>
    </div>
  );
}

ReserveComponent.propTypes = {
  price: PropTypes.string.isRequired,
  reviews: PropTypes.string.isRequired,
  onClick: PropTypes.object.isRequired,
};

export default ReserveComponent;