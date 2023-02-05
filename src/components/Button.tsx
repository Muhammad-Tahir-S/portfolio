import { forwardRef } from "react";
import tw from "tailwind-styled-components";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const WrapperButton = tw.button`
rounded-[4px] relative text-[16px] 
font-medium text-primary-700 border
border-primary-700 
py-2 px-3 hover:bg-primary-200
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <WrapperButton
        className={className}
        {...props}
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
      >
        <div className="flex justify-center items-center">{children}</div>
      </WrapperButton>
    );
  }
);

Button.displayName = "Button";

export default Button;
