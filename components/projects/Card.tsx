type Props = {
    name: string;
    description: string;
    image: React.ReactNode;
    link: string;
};

export default function Card({ name, description, image, link }: Props) {
    return (
        <div className="flex flex-col rounded-3xl bg-light-gray dark:bg-dark-gray lg:flex-row lg:min-w-[32rem] lg:min-h-[18rem]">
            <a href={link} className="lg:w-1/3">
                {image}
            </a>
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:w-2/3">
                <h1 className="pb-2 text-xl transition-all duration-100 sm:text-3xl font-sf-bold dark:text-white">
                    {name}
                </h1>
                <p className="text-sm transition-all duration-100 sm:text-xl font-sf-light dark:text-white">
                    {description}
                </p>
            </div>
        </div>
    );
}
