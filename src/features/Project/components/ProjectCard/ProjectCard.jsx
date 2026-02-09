export default function ProjectCard({
  title,
  number,
  category,
  description,
  imageUrl,
}) {
  return (
    <article className="bg-white overflow-hidden flex flex-col w-[20.6rem] h-[15.9rem] p-[0.63rem] cursor-pointer hover:shadow-lg transition-shadow">
      {/* 이미지 */}
      <div className="w-full h-[11.6rem] bg-emptyimg overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full" />
        )}
      </div>

      {/* 이미지-텍스트 간격 */}
      <div className="h-[0.63rem]" />

      {/* 텍스트 */}
      <div className="flex flex-col gap-1">
        <div className="grid grid-cols-3 gap-2 items-center">
          <span className="typo-cardtextk text-text truncate text-left">
            {title}
          </span>
          <span className="typo-cardtextk text-text text-center">{number}</span>
          <span className="typo-cardtextk text-text text-right truncate">
            {category}
          </span>
        </div>
        <p className="typo-body2 text-subtext text-left">{description}</p>
      </div>
    </article>
  );
}
