
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
        <input type="text" className="news-input" required placeholder="Insira seu nome..."/>
        <input type="email" className="news-input" required placeholder="Insira seu email..."/>
        <button type="submit" className="news-button">Seguir</button>
    </form>
    )
}

export default Form