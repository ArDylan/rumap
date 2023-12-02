import PropTypes from 'prop-types';

const InputComponent = ({title, value, onChange}) => {
  return (
    <>
      <div>
        <p className="mb-3">{title}</p>
        <div className="relative">
          <span className="absolute inset-y-0 -right-0 px-3 rounded-r flex items-center bg-gray-300">
            THN
          </span>
          <input
            type="number"
            value={value}
            onChange={(e) => onChange(e)}
            className="block w-full pl-2 pr-3 py-2 border rounded-md leading-5 transition-all duration-150 ease-in-out sm:text-sm sm:leading-5"
            placeholder="Your Placeholder"
          />
        </div>
      </div>
    </>
  );
}

InputComponent.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.object.isRequired,
};

export default InputComponent;