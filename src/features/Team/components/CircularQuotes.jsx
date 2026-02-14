const BASE_QUOTES = [
  "프로젝트를 직접 기획하고 멋쟁이들과 함께 실현!",
  "자 회장님이 ‘멋사'로 이행시 하신답니다",
  "1년이라는 시간 안에, 퍼포먼스를 가장 빠르게 끌어올릴",
  "멋쟁이들과 함께 한 세월이 정말 빠르게요 (♬- 벌써 일년)",
  "멋사를 하게 되면서 진짜 대학 생활을 찾은 것 같아요",
  "최고의 1년이었습니다! 그리고 나는 개쩌는 프론트",
  "열정 넘치는 사람들과 함께해서 행복했어요",
  "세상 살아가면서 천만번 해도 부족한 말이 있죠",
  "피자 열판 쏘겠습니다^^ 허리피자. 가슴피자..",
  "실현할 수 있는 곳, 멋사가 좋다 사람이 좋다 그쵸",
  "좋은 팀원들이 많이 모여 있는 곳",
  "수 있는 환경이라고 생각해요",
  "모두들 2026년도 행복하세요!!!",
  "동아리가 있을까? 정말 유일무이하다고 생각합니다",
  "능력있는 사람들과 함께하는 프로덕트 기획은 즐거워",
  "열정맨들을 만날 수 있었어요 열정~과 파워 ~",
  "아이디어를 현실로 만드는 즐거움을 알게 된 시간이었습니다",
  "처음부터 시작하더라도 열심히 커리큘럼을 따라가다",
  "항상 적극적이고 열정적인 사람들 속에서 성장한",
  "언제나 건강과 행복이 함께하실 기원합니다",
  "어때요 웹사이트 디자인 개쩔죠? 제가 했어요~",
  "멋사 덕분에 알차게 보냈던 2025년이라서",
  "너무 좋았습니다~ 2026년도 파이팅 해봐요",
  "멋 : 멋져보였지만, 사 : 사실은 아름다운 곳이었다",
  "힘들었지만 되돌아보니 행복한 기억뿐이었다!",
  "모습을 보게 되실 거예요 정말입니다 정말이요",
  "보면 본인의 성장한",
  "차라리 개강을 했으면",
  "정말 열정만 있다면 누구든 많은 것을 배워갈",
  "동기부여를 잔뜩 받을 수 있어요 좋은 사람과",
  "이렇게 애정과 노력을 쏟으면서 발전하는",
  "의지가 약해질 때 주변을 둘러보면",
  "여러분들, 요즘 잘 지내시나요?",
  "파이팅 하시고 전 늘 여러분 편입니다",
  "제가 생각해봤는데요 2026년에는",
];

// Figma node 1833:2333 fixed layout (inset percentages + text rotation)
const LAYOUT = [
  { angle: -44.49, inset: [22.72, 18.29, 56.81, 53.65], rotate: -34.72 },
  { angle: 117.4, inset: [53.87, 52.55, 18.8, 34.03], rotate: 111.74 },
  { angle: -15.57, inset: [39.11, 3.6, 53.76, 57.17], rotate: -6.13 },
  { angle: 13.04, inset: [50.15, -0.15, 36.1, 61.68], rotate: 16.32 },
  { angle: 35.39, inset: [56.75, 5.35, 18.06, 60.84], rotate: 35.78 },
  { angle: 59.46, inset: [58.11, 22.29, 7.88, 52.48], rotate: 55.26 },
  { angle: 145.11, inset: [51.3, 57.17, 27.36, 22.19], rotate: 133.38 },
  { angle: -67.14, inset: [4.39, 27.02, 59.76, 50.81], rotate: -60.78 },
  { angle: -56.92, inset: [6.33, 19.52, 63.06, 57.17], rotate: -54.56 },
  { angle: -29.72, inset: [24.63, 1.73, 57.74, 60.84], rotate: -22.56 },
  { angle: -21.29, inset: [33.75, 5.27, 58.27, 69.37], rotate: -11.59 },
  { angle: -6.89, inset: [44.7, 6.52, 52.01, 68.2], rotate: -0.57 },
  { angle: -77.52, inset: [9.03, 38, 65.82, 50.81], rotate: -71.26 },
  { angle: -114.25, inset: [6.44, 53.67, 59.66, 29.24], rotate: -113.31 },
  { angle: -0.41, inset: [46.59, 9.1, 46.93, 57.22], rotate: 6.83 },
  { angle: -159.82, inset: [35.02, 58.67, 52.81, 9.35], rotate: -163.18 },
  { angle: 26.14, inset: [49.56, 8.24, 26.82, 55.46], rotate: 31.61 },
  { angle: 172.84, inset: [47.27, 58.79, 41.02, 8.13], rotate: 164.55 },
  { angle: 47.9, inset: [51.84, 23.53, 20.4, 52.48], rotate: 50.45 },
  { angle: -90.19, inset: [5.42, 47.32, 60.56, 47.13], rotate: -85.78 },
  { angle: 79.63, inset: [53.87, 40.75, 12.48, 48.47], rotate: 76.82 },
  { angle: 94.34, inset: [59.3, 50.36, 6.8, 46.3], rotate: 89.44 },
  { angle: 105.11, inset: [66.24, 54.11, 0, 35.88], rotate: 101.83 },
  { angle: 128.28, inset: [56.75, 57.15, 13.17, 22.11], rotate: 122.18 },
  { angle: 155.68, inset: [51.84, 63.35, 26.9, 7.11], rotate: 145.63 },
  { angle: -175.07, inset: [45.57, 66.39, 51.18, 0.15], rotate: 179.65 },
  { angle: 177.92, inset: [48.79, 76.51, 46.38, 8.85], rotate: 172.67 },
  { angle: -167.62, inset: [39.98, 76.99, 54.77, 8.34], rotate: -170.9 },
  { angle: -148.43, inset: [24.64, 64.6, 58.36, 8.69], rotate: -149.93 },
  { angle: -134.59, inset: [20.86, 56.49, 56.5, 20.69], rotate: -134.83 },
  { angle: -124.93, inset: [11.02, 58.92, 63.54, 21.54], rotate: -125.39 },
  { angle: -142.36, inset: [17.77, 67.15, 63.04, 7.35], rotate: -144.44 },
  { angle: -101.45, inset: [4.4, 52.81, 66.16, 40.06], rotate: -98 },
  { angle: -107.32, inset: [1.67, 57, 74.67, 33.81], rotate: -105.11 },
  { angle: -93.34, inset: [0, 50.33, 76.19, 45.8], rotate: -87.95 },
];

export const QUOTES = BASE_QUOTES.map((text, index) => ({
  id: index + 1,
  text,
  angle: LAYOUT[index].angle,
}));

export default function CircularQuotes({ selectedId }) {
  return (
    <div className="relative h-full w-full overflow-visible pointer-events-none select-none">
      <div className="absolute left-0 top-0 h-full w-[98.142857%]">
        {LAYOUT.map((item, index) => {
          const isSelected = selectedId != null && index + 1 === selectedId;
          const [top, right, bottom, left] = item.inset;

          return (
            <div
              key={index + 1}
              className="absolute flex items-center justify-center"
              style={{
                top: `${top}%`,
                right: `${right}%`,
                bottom: `${bottom}%`,
                left: `${left}%`,
              }}
            >
              <div style={{ transform: `rotate(${item.rotate}deg)` }}>
            <p
              className={`whitespace-nowrap text-[0.625rem] leading-[1.125rem] tracking-[0.1em] transition-all duration-300 ${
                isSelected
                  ? "text-text font-medium opacity-100 scale-105"
                  : "text-text/55 font-light opacity-100"
              }`}
                >
                  {BASE_QUOTES[index]}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
