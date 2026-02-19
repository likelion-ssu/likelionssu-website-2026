/**
 * About 페이지 데이터
 * - ROADMAP: 오른쪽 텍스트 + 왼쪽 이미지 슬라이드에 공통 사용
 * - 한 "활동" = 로드맵 항목 1개 = 왼쪽 이미지 한 줄(세 장)
 * - 이미지 이름 {활동순번}-{사진순번}.webp (예: 1-1 = id 0인 첫 활동의 첫 번째 사진)
 */

const aboutAssetModules = import.meta.glob(
  "../features/About/assets/thumbnails/*.webp",
  { eager: true, import: "default" },
);

/** 활동 id(0~14)별 이미지 3장 [url, url, url] */
const ACTIVITY_IMAGES = Array.from({ length: 15 }, (_, id) => {
  const n = id + 1;
  return [
    aboutAssetModules[`../features/About/assets/thumbnails/${n}-1.webp`],
    aboutAssetModules[`../features/About/assets/thumbnails/${n}-2.webp`],
    aboutAssetModules[`../features/About/assets/thumbnails/${n}-3.webp`],
  ];
});

/**
 * 로드맵 섹션 (오른쪽 콘텐츠 구조)
 * 각 activity.images 는 왼쪽 비주얼 한 줄에 들어갈 이미지 3장 [url, url, url]
 * activity.imageCaptions: 이미지 클릭 시 오버레이 위에 표시할 텍스트 [1번, 2번, 3번]
 * isKeyEvent: true → 오른쪽 로드맵에 별표(*) 표시 (주요 행사/이미지 있음)
 */
export const ROADMAP_SECTIONS = [
  {
    id: "semester1",
    title: "1학기",
    activities: [
      {
        id: 0,
        label: "회원선발 및 OT",
        isKeyEvent: true,
        images: ACTIVITY_IMAGES[0],
        imageCaptions: [
          "처음 만납니다\n안녕 아기사자들!",
          "첫인사를 나누며\n친해지는 자리를\n가져요",
          "앞으로 잘 부탁해!",
        ],
      },
      {
        id: 1,
        label: "공통 교육 세션",
        images: ACTIVITY_IMAGES[1],
        imageCaptions: [
          "핵심 스킬을 익혀요",
          "파트장의 열정으로\n준비한 강연으로\n열심히 성장하기!",
          "밤 10시까지\n집 못가용",
        ],
      },
      {
        id: 2,
        label: "파트별 교육 세션",
        images: ACTIVITY_IMAGES[2],
        imageCaptions: [
          "공통 세션 후\n파트별 세션이\n진행돼요",
          "파트끼리 뭉쳐서\n머리를 싸매봅시다",
          "세션이 끝나고\n자신감을 얻은 사자들!",
        ],
      },
      {
        id: 3,
        label: "중앙 아이디어톤",
        isKeyEvent: true,
        images: ACTIVITY_IMAGES[3],
        imageCaptions: [
          "반짝이는 아이디어를\n뽐내는 시간!",
          "모두 열심히\n준비한 첫 프로젝트",
          "뭐가 됐든\n흥미롭고 재밌는\n시간이랍니다",
        ],
      },
    ],
  },
  {
    id: "summer",
    title: "여름방학",
    activities: [
      {
        id: 4,
        label: "MT",
        images: ACTIVITY_IMAGES[4],
        imageCaptions: [
          "대망의 MT에 왔어요\n항상 맛있는 거\n많이 먹어요",
          "전설의 레크레이션\n사자가 있어요",
          "하룻밤 지나고 나면\n소중한 추억들이\n한가득!",
        ],
      },
      {
        id: 5,
        label: "스터디",
        images: ACTIVITY_IMAGES[5],
        imageCaptions: [
          "여름 방학엔\n다양한 스터디!",
          "함께 하면\n무엇도 두렵지 않아~",
          "1등으로 성장하고\n1등으로 즐겨요!",
        ],
      },
      {
        id: 6,
        label: "중앙 해커톤",
        isKeyEvent: true,
        images: ACTIVITY_IMAGES[6],
        imageCaptions: [
          "기다리고 고대하던\n중앙 해커톤이에요",
          "모든 멋사가 모이는\n무박 2일!!",
          "짧은 기간 동안\n열정을 불태우는\n짜릿한 경험이랍니다",
        ],
      },
      {
        id: 7,
        label: "하계 봉사 활동",
        images: ACTIVITY_IMAGES[7],
        imageCaptions: [
          "나랑 같이\n하계 봉사 갈 사람~?",
          "꼬옥 가고 싶은\n너무 좋은 활동이에요",
          "소중한 기억으로\n방학을 마무리해요",
        ],
      },
      {
        id: 8,
        label: "어흥콘",
        isKeyEvent: true,
        images: ACTIVITY_IMAGES[8],
        imageCaptions: [
          "각 대학에서\n프로젝트를 출품해요",
          "시연과 공유를 통해\n아이디어를 나누는\n행사예요",
          "각 학교 학생들과\n자유롭게 교류해봐요",
        ],
      },
    ],
  },
  {
    id: "semester2",
    title: "2학기",
    activities: [
      {
        id: 9,
        label: "기획 경진 대회",
        images: ACTIVITY_IMAGES[9],
        imageCaptions: [
          "저희 개강했어요",
          "기획 경진 대회로\n하반기를 시작해요",
          "또 한 번\n즐거운 시간!",
        ],
      },
      {
        id: 10,
        label: "겨울잠",
        isKeyEvent: true,
        images: ACTIVITY_IMAGES[10],
        imageCaptions: [
          "겨울잠은 3개월 동안\n진행되는 멋사의\n장기 프로젝트예요",
          "의견을 나누며\n완성도를 높이기!",
          "겨울잠\n너 거기서~!!",
        ],
      },
      {
        id: 11,
        label: "홈커밍데이",
        images: ACTIVITY_IMAGES[11],
        imageCaptions: [
          "선배 사자들과\n함께하는 시간",
          "강연도 듣고,\n의견도 나눌 수 있는\n유익한 시간이에요",
          "아기사자들은\n조용히 성장 중!",
        ],
      },
      {
        id: 12,
        label: "대학 연합 해커톤",
        isKeyEvent: true,
        images: ACTIVITY_IMAGES[12],
        imageCaptions: [
          "올해는 권역별\n연합 해커톤이\n진행될 예정이에요",
          "여러 대학들과\n함께하는 대회!",
          "다 같이 성장하는\n귀한 시간이랍니다",
        ],
      },
      {
        id: 13,
        label: "14기 수료식",
        images: ACTIVITY_IMAGES[13],
        imageCaptions: [
          "겨울잠 최종 발표와\n함께 수료식을\n진행해요",
          "멋사는 1년을\n그 무엇보다\n알차게 만들어줘요",
          "벌써 1년이라니!",
        ],
      },
      {
        id: 14,
        label: "우수 활동자 기업 탐방",
        images: ACTIVITY_IMAGES[14],
        imageCaptions: [
          "우수 활동자는\n미국 실리콘밸리에 가요",
          "현지 스타트업 방문과\n해외 대학 교류 대회로\n넓은 시야를 갖춰요",
          "준비 되셨나요!",
        ],
      },
    ],
  },
];

/**
 * 왼쪽 비주얼용 플랫 리스트 (activeIndex로 접근)
 * ActivityVisual에서 activities[i] 로 한 줄(세 장) 렌더링
 */
export const ROADMAP_ACTIVITIES_FLAT = ROADMAP_SECTIONS.flatMap(
  (section) => section.activities
);

/** ABOUT US 상단 소개 문단 */
export const ABOUT_INTRO =
  `숭실대학교 멋쟁이사자처럼에서는 혁신적인 서비스를 창출하는 수준 높은 프로젝트를 경험할 수 있습니다.
PM, DE, FE, BE 파트별 집중 교육세션을 거치고 중앙 아이디어톤과 무박 2일 동안 121개 대학과 약 1600명 규모의 인원이 참여하는 중앙 해커톤, 마지막으로 3개월간의 겨울잠 장기 프로젝트를 진행합니다.
교육세션을 통해 성장한 파트별 역량을 바탕으로 회원들 간의 유대감을 강화하고 팀워크를 다지며, 단순한 IT 동아리를 넘어 창의적이고 협력적인 커뮤니티로 자리 잡았습니다.`;

/** YeonHheok 연혁 목록 */
export const YEONHHEOK_ITEMS = [
  "2013 Birthday!",
  "2024 숭실대학교 우수 동아리 1위",
  "2025 숭실대학교 우수 동아리 1위",
];

/** Core Values */
export const CORE_VALUES = ["열정", "책임", "능동"];
