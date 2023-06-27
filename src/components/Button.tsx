import { forwardRef } from "react";
import tw from "tailwind-styled-components";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "secondary";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = "primary", ...props }, ref) => {
    return (
      <WrapperButton
        $variant={variant}
        className={className}
        {...props}
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
      >
        <div className="flex justify-center items-center">{children}</div>
      </WrapperButton>
    );
  }
);

const WrapperButton = tw.button<{ $variant: ButtonProps["variant"] }>`
rounded-[4px] relative text-[16px] 
font-medium ease-in transition-colors 
duration-300 py-2 px-3 border border-secondary-100
hover:bg-primary-200 text-secondary-100
${({ $variant }) => ($variant === "primary" ? "   " : "bg-primary-100")}
`;
Button.displayName = "Button";

export default Button;
