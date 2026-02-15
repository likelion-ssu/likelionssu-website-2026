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

// export const TEAM_MEMBERS = [
//   {
//     id: 1,
//     name: "서해승",
//     part: "FE 파트장",
//     image: team5,
//     quotes: ["멋사를 하게 되면서 진짜 대학 생활을 찾은 것 같아요"],
//     position: { top: "5.83%", left: "17.32%" },
//     rotation: -12.8,
//     zIndex: 1,
//   },
//   {
//     id: 2,
//     name: "유승빈",
//     part: "PM 파트장",
//     image: team11,
//     quotes: ["좋은 팀원들이 많이 모여 있는 곳"],
//     position: { top: "3.33%", left: "40.82%" },
//     rotation: 0,
//     zIndex: 3,
//   },
//   {
//     id: 3,
//     name: "김민서",
//     part: "부대표",
//     image: team14,
//     quotes: [
//       "프로젝트를 직접 기획하고 멋쟁이들과 함께 실현!",
//       "실현할 수 있는 곳, 멋사가 좋다 사람이 좋다 그쵸",
//     ],
//     position: { top: "5.42%", left: "62.45%" },
//     rotation: 8.08,
//     zIndex: 4,
//   },
//   {
//     id: 4,
//     name: "최다예",
//     part: "FE 팀장",
//     image: team7,
//     quotes: [
//       "항상 적극적이고 열정적인 사람들 속에서 성장한",
//       "최고의 1년이었습니다! 그리고 나는 개쩌는 프론트",
//     ],
//     position: { top: "31.36%", left: "12.79%" },
//     rotation: 0,
//     zIndex: 5,
//   },
//   {
//     id: 5,
//     name: "장민영",
//     part: "기획 팀장",
//     image: team12,
//     quotes: [
//       "1년이라는 시간 안에, 퍼포먼스를 가장 빠르게 끌어올릴",
//       "수 있는 환경이라고 생각해요",
//     ],
//     position: { top: "68.02%", left: "56.61%" },
//     rotation: 0,
//     zIndex: 13,
//   },
//   {
//     id: 6,
//     name: "조수한",
//     part: "BE 파트장",
//     image: team4,
//     quotes: ["열정 넘치는 사람들과 함께해서 행복했어요"],
//     position: { top: "36.40%", left: "29.68%" },
//     rotation: -4.42,
//     zIndex: 6,
//   },
//   {
//     id: 7,
//     name: "이정안",
//     part: "총무",
//     image: team6,
//     quotes: ["어때요 웹사이트 디자인 개쩔죠? 제가 했어요~"],
//     position: { top: "35.41%", left: "47.90%" },
//     rotation: 0,
//     zIndex: 7,
//   },
//   {
//     id: 8,
//     name: "하유경",
//     part: "대외협력부장",
//     image: team8,
//     quotes: [
//       "너무 좋았습니다~ 2026년도 파이팅 해봐요",
//       "멋사 덕분에 알차게 보냈던 2025년이라서",
//     ],
//     position: { top: "36.04%", left: "68.09%" },
//     rotation: 3.73,
//     zIndex: 9,
//   },
//   {
//     id: 9,
//     name: "이연우",
//     part: "디자인 파트장",
//     image: team1,
//     quotes: ["멋쟁이들과 함께 한 세월이 정말 빠르게요 (♬- 벌써 일년)"],
//     position: { top: "64.97%", left: "21.29%" },
//     rotation: -3.63,
//     zIndex: 10,
//   },
//   {
//     id: 10,
//     name: "이현채",
//     part: "디자인 팀장",
//     image: team10,
//     quotes: ["아이디어를 현실로 만드는 즐거움을 알게 된 시간이었습니다"],
//     position: { top: "67.55%", left: "39.10%" },
//     rotation: -2.82,
//     zIndex: 12,
//   },
//   {
//     id: 11,
//     name: "최원재",
//     part: "대표",
//     image: team9,
//     quotes: [
//       "자 회장님이 ‘멋사'로 이행시 하신답니다",
//       "멋 : 멋져보였지만, 사 : 사실은 아름다운 곳이었다",
//     ],
//     position: { top: "20.28%", left: "0.00%" },
//     rotation: -3.79,
//     zIndex: 2,
//   },
//   {
//     id: 12,
//     name: "박현지",
//     part: "기획 부장",
//     image: team13,
//     quotes: ["능력있는 사람들과 함께하는 프로덕트 기획은 즐거워"],
//     position: { top: "20.00%", left: "80.97%" },
//     rotation: 2.52,
//     zIndex: 8,
//   },
//   {
//     id: 13,
//     name: "조해원",
//     part: "대외협력팀장",
//     image: team2,
//     quotes: ["힘들었지만 되돌아보니 행복한 기억뿐이었다!"],
//     position: { top: "56.36%", left: "5.21%" },
//     rotation: 2.08,
//     zIndex: 11,
//   },
//   {
//     id: 14,
//     name: "이성윤",
//     part: "교내운영팀장",
//     image: team3,
//     quotes: [
//       "처음부터 시작하더라도 열심히 커리큘럼을 따라가다",
//       "보면 본인의 성장한",
//       "모습을 보게 되실 거예요 정말입니다 정말이요",
//     ],
//     position: { top: "57.49%", left: "77.53%" },
//     rotation: 9.41,
//     zIndex: 14,
//   },
// ];
