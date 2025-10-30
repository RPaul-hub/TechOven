type props = {
    heading: string;
    subheading: string;
}

const SectionHeading = ({heading, subheading} : props) => {
    return (
        <div className="mx-auto">
            <h1 className="text-lg text-blue-950 fonr-bold">{heading}</h1>
            <p className="mt-2 text-gray-700 sm:text-base text-0sm font-medium">{subheading}</p>
        </div>
    )
}

export default SectionHeading;