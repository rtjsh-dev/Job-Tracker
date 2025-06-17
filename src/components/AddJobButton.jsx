const Button = ({ type = "button", children, className, showMessage }) => {
  return (
    <div>
      <button
        type={type}
        className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl ${className}`}
      >
        {children}
      </button>

      {/* Show success message if true */}
      {showMessage && (
        <p className="text-green-600 mt-2 text-center font-medium">
          Job added successfully
        </p>
      )}
    </div>
  );
};

export default Button;
