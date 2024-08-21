import Image from "next/image";

interface ImageCompProps {
    image: string;
    width: number;
    height: number;
    alt: string;
    label: string;
}

const ImageComp: React.FC<ImageCompProps> = ({ image, alt, width, height, label }) => {
    return (
        <div className="flex flex-col items-center justify-center">
        <div className="mb-4">
        <Image
            src={image}
            alt={alt}
            width={width}
            height={height}
        />
        </div>
        {label}
        </div>
    );
}

export default ImageComp;