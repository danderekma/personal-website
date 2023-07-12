import Image from "next/image";

interface Props {
  name: string;
  link: string;
  dark: boolean;
}

export default function Icon({ name, link, dark }: Props) {
  return (
    <a href={link} className="w-5 sm:w-6">
      {dark ? (
        <Image
          src={`/svgs/${name}-icon-dark.svg`}
          alt={`${name}-icon-dark.svg`}
          width={50}
          height={50}
        />
      ) : (
        <Image
          src={`/svgs/${name}-icon-light.svg`}
          alt={`${name}-icon-light.svg`}
          width={50}
          height={50}
        />
      )}
    </a>
  );
}
