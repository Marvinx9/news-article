import Input from "../Input/Input";

interface FormProps {
  onSubmit: (data: { name: string; email: string }) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
const safeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    const name = (form.elements[0] as HTMLInputElement).value;
    const email = (form.elements[1] as HTMLInputElement).value;

    onSubmit({name, email})
}
return (
    <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center gap-10 -mt-30 mx-5">
        <Input type="text" required placeholder="Insira seu nome..."/>
        <Input type="email" required placeholder="Insira seu email..."/>
        <button type="submit" className="py-1 px-5 max-w-sm w-full bg-gray-400 dark:bg-[#6A1E55] rounded-full hover:animate-pulse hover:shadow-sm hover:shadow-gray-500 dark:hover:shadow-[#6a1e552f]">Seguir</button>
    </form>
    )
}

export default Form