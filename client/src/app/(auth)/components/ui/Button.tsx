type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="w-full py-2 px-4 bg-primary text-white rounded-md hover:opacity-90 cursor-pointer transition"
    >
      {label}
    </button>
  );
};

export default Button;
