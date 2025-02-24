import { IUser } from '../../Interfaces/IUser'
import ToggleTheme from '../ToggleTheme/ToggleTheme'

const Header = (props: IUser ) => {
    return (
        <div className="flex h-20 bg-gray-400 dark:bg-[#6A1E55] justify-between items-center px-5 sm:rounded-xl sm:m-5">
            <span className="text-gray-100">
                Olá, {props.name && props.name !== null ? props.name : 'usuário'}
            </span>
            <h1 className="text-gray-100 text-xl sm:hover:text-2xl sm:cursor-pointer">News Article</h1>
            <ToggleTheme/>
        </div>
    )
}

export default Header