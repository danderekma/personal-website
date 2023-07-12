interface Props {
  children?: React.ReactNode;
}

export default function CardGrid({ children }: Props) {
  return (
    <div className="grid grid-cols-1 justify-center gap-y-12 gap-x-12 sm:gap-y-20 lg:gap-y-12 xl:grid-cols-2">
      {children}
    </div>
  );
}
