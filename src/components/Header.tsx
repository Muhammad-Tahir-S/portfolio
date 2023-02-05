import tw from "tailwind-styled-components";
import Text from "@/components/Text";
import Button from "@/components/Button";
import Logo from "@/assets/icons/logo.svg";
import useScrollDirection from "@/hooks/useScrollDirection";
import clsx from "clsx";
import useScrollPosition from "@/hooks/useScrollPosition";

const HEADER_HEIGHT = 74;

const Header = tw.header`
fixed z-50 flex w-full h-[74px]
transition-all duration-200 
`;

const Nav = tw.nav`
flex flex-1 justify-between 
py-4 px-[60px] h-fit `;

const NavItemCon = tw.div`
flex bg-bg h-fit
gap-4 items-center`;

export default function LayoutHeader() {
  const navItems = [
    {
      name: "About",
      to: "#about",
    },
    {
      name: "Experience",
      to: "#experience",
    },
    {
      name: "Work",
      to: "#work",
    },
    {
      name: "Contact",
      to: "#contact",
    },
  ];

  const scrollDirection = useScrollDirection();
  const { scrollY } = useScrollPosition();

  return (
    <Header
      className={clsx(
        scrollDirection === "down" ? `-top-[74px]` : "top-0",
        scrollY > HEADER_HEIGHT ? "shadow-header backdrop-blur-sm" : ""
      )}
    >
      <Nav>
        <a href="/" className="h-fit">
          <Logo className="stroke-primary-700 fill-transparent hover:fill-primary-200" />
        </a>
        <NavItemCon>
          {navItems.map((item, idx) => (
            <a href={item.to} key={idx}>
              <Text
                variant="p1"
                color="white"
                className="hover:text-primary-700"
              >
                <span className="mr-2 text-primary-700">0{idx + 1}.</span>
                {item.name}
              </Text>
            </a>
          ))}
          <Button>Resume</Button>
        </NavItemCon>
      </Nav>
    </Header>
  );
}
