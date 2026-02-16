import SmartImage from "./SmartImage";

export default function ProjectCard({
  title,
  number,
  category,
  description,
  coverImage,
  loading = "lazy",
  fetchPriority = "low",
}) {
  return (
    <article className="bg-white overflow-hidden flex flex-col w-[20.6rem] h-[15.9rem] p-[0.63rem] cursor-pointer border border-white transition-shadow hover:shadow-[10px_10px_20px_0_rgba(0,0,0,0.1)]">
      {/* 표지 이미지 */}
      <div className="w-full h-[11.6rem] bg-emptyimg overflow-hidden">
        {coverImage ? (
          <SmartImage
            key={coverImage}
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover"
            loading={loading}
            fetchPriority={fetchPriority}
          />
        ) : (
          <div className="w-full h-full" />
        )}
      </div>

      {/* 이미지-텍스트 간격 */}
      <div className="h-[0.88rem]" />

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
