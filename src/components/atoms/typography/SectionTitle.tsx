interface SectionTitleProps {
  category: string;
  title: string;
  description: string;
}

export default function SectionTitle({
  category,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="text-center space-y-2">
      <span className="py-1 px-6 text-sm text-white rounded-full w-fit bg-red-400 font-semibold">
        {category}
      </span>
      <h1 className="text-4xl text-zinc-700 lg:text-6xl font-bold tracking-tighter">
        {title}
      </h1>
      <p>{description}</p>
    </div>
  );
}
