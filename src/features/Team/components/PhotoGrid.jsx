const FALLBACK_IMAGE = "/vite.svg";
const PHOTO_CARD_WIDTH_REM = 7.90188;
const PHOTO_CARD_HEIGHT_REM = 9.59513;

export default function PhotoGrid({ members, selectedId, onSelect }) {
  return (
    <div className="relative h-full w-full">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full bg-primarybrand"
        style={{
          left: "61%",
          top: "3%",
          width: "2.65%",
          height: "3.67%",
          boxShadow: "inset 0 0.8px 1.6px rgba(0, 0, 0, 0.25)",
          zIndex: 40,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full bg-primarybrand"
        style={{
          left: "3.96%",
          top: "54.37%",
          width: "2.65%",
          height: "3.67%",
          boxShadow: "inset 0 0.8px 1.6px rgba(0, 0, 0, 0.25)",
          zIndex: 40,
        }}
      />

      {members.map((member) => {
        const isSelected = selectedId === member.id;

        return (
          <button
            key={member.id}
            type="button"
            data-photo-card="true"
            onClick={(event) => {
              event.stopPropagation();
              onSelect(member.id);
            }}
            className="group absolute block overflow-hidden bg-zinc-200 shadow-md transition-transform duration-300 hover:scale-[1.02]"
            style={{
              top: member.position.top,
              left: member.position.left,
              transform: `rotate(${member.rotation}deg)`,
              zIndex: isSelected ? 30 : member.zIndex,
              width: `${PHOTO_CARD_WIDTH_REM}rem`,
              height: `${PHOTO_CARD_HEIGHT_REM}rem`,
            }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover object-top grayscale"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.src = FALLBACK_IMAGE;
              }}
            />

            <div
              className={`absolute inset-0 flex flex-col items-center justify-center bg-black/60 px-3 text-center text-white transition-opacity duration-200 ${
                isSelected ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-small1 color-light">{member.part}</p>
              <p className="mt-1 text-small1 color-light">{member.name}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}