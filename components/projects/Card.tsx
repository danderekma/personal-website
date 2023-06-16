type Props = {
    name: string;
    description: string;
    image: React.ReactNode;
    link: string;
};

export default function Card({ name, description, image, link }: Props) {
    return (
        <div className="flex flex-col rounded-3xl bg-light-gray dark:bg-dark-gray lg:min-h-[18rem] lg:min-w-[32rem] lg:flex-row">
            <a href={link} className="lg:w-1/3">
                {image}
            </a>
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:w-2/3">
                <h1 className="pb-2 font-sf-bold text-xl transition-all duration-100 dark:text-white sm:text-3xl">
                    {name}
                </h1>
                <p className="font-sf-light text-sm transition-all duration-100 dark:text-neutral-400 sm:text-xl">
                    {description}
                </p>
            </div>
        </div>
    );
}
