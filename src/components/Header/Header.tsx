import { IUser } from "../../Interfaces/IUser";
import ToggleTheme from "../ToggleTheme/ToggleTheme";

const Header = (props: IUser) => {
  return (
    <div
      className="flex h-20 bg-gray-200 dark:bg-[#121212] text-gray-900 dark:text-gray-200 
      justify-between items-center px-5 sm:rounded-xl sm:m-5 shadow-md dark:shadow-blue-900/50"
    >
      <span>
        Olá, {props.name && props.name !== null ? props.name : "usuário"}
      </span>
      <h1 className="text-lg font-semibold">News Article</h1>
      <ToggleTheme />
    </div>
  );
};

export default Header;
