import { MouseEventHandler } from "react";

interface TicketProps {
    className?: string;
    children: React.ReactNode
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Ticket({className, children, onClick}: TicketProps) {
    return (
        <button type="button" onClick={onClick} className={`py-[2px] px-3 text-light-white text-sm font-light rounded-full capitalize inline-flex items-center justify-center ${className}`}>
            {children}
        </button>
    );
}