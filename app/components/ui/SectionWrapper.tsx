interface SectionWrapperProps {
    className?: string
    children: React.ReactNode
}

export default function SectionWrapper({className, children}: SectionWrapperProps) {
    return (
        <section className={`sm:py-9 md:px-[7vw] px-5 ${className}`}>{children}</section>
    );
}