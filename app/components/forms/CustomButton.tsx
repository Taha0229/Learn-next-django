interface CustomButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <div
      onClick={onClick}
      className={`w-full py-4 bg-airbnb hover:bg-airbnbDark text-white rounded-xl transition cursor-pointer text-center ${className}`}
    >
      {label}
    </div>
  );
};

export default CustomButton;
