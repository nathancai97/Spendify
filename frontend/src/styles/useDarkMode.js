const DarkModeTheme = ({ isDarkMode, setDarkMode }) => {
  const handleTheme = () => {
    if (isDarkMode === "light") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
    setDarkMode(isDarkMode === "light" ? "dark" : "light");
  };

  return (
    <div
      className="dark:bg-white toggle-animation cursor-pointer absolute top-4 right-4 w-9 h-5 rounded-full bg-black theme-transition"
      onClick={handleTheme}
      data-testid="toggle"
    >
      <div
        className={`dark:bg-black w-3 h-3 rounded-full bg-white absolute top-1 theme-transition ${
          isDarkMode === "light" ? "left-1" : "left-5"
        }`}
      />
    </div>
  );
};

export default DarkModeTheme;
