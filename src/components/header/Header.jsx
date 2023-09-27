import ThemeSwitcher from "@/components/header/ThemeSwitcher";

const Header = ({ HandleThemeChange }) => {
  return (
    <header>
      <h1>Simplify Calc</h1>
      <ThemeSwitcher HandleThemeChange={HandleThemeChange} />
    </header>
  );
};

export default Header;
