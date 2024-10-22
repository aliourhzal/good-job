import { ChangeEventHandler } from "react";

interface FormInputProps {
    value?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
    className?: string
    placeholder?: string
    type?: 'text' | 'password' | 'email'
}

export default function FormInput(props: FormInputProps) {
    return (
        <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} className={`bg-white w-full rounded-full py-2 px-4 outline-none border focus:border-dark-blue mb-4 text-dark-blue ${props.className}`} />
    );
}