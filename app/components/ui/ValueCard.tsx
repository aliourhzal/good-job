interface ValueCardProps {
    title: string
    children: React.ReactNode
}

export default function ValueCard(props: ValueCardProps) {
    return (
        <div className="bg-white rounded-xl shadow-2xl p-6 mb-8 overflow-y-auto">
            <h3 className="text-xl capitalize text-dark-blue mb-5 font-bold">{props.title}</h3>
            <p className="text-dark-blue">{props.children}</p>
        </div>
    );
}