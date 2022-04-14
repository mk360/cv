import HeaderProps from "./props";

function Header(props: HeaderProps) {
  const { theme, children } = props;

  return (
    <div className={`header-${theme}`}>
      {children}
    </div>
  );
};

export default Header;
