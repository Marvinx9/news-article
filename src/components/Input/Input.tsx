const Input = (props: any) => {
    return (
        <input className="py-1 pl-5 w-full max-w-lg rounded-full outline-none bg-[#cdd1da91] dark:bg-[#A64D79] placeholder:text-xs focus:border-2 focus:border-[#0000003b] focus:invalid:border-2 focus:invalid:border-red-400" {...props}/>
    )
}

export default Input