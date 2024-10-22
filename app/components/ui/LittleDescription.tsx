export default function LittleDescription({children, className}: {children: React.ReactNode, className?: string}) {
  return (
    <p className={`uppercase sm:text-sm text-[12px] text-text-orange mb-4 tracking-[.3em] font-bold ${className}`}>
      {children}
    </p>
  );
}
