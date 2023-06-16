type Props = {
    children?: React.ReactNode;
};

export default function CardGrid({ children }: Props) {
    return (
        <div className="grid grid-cols-1 justify-center gap-x-48 gap-y-12 sm:gap-y-24 2xl:grid-cols-2">
            {children}
        </div>
    );
}
