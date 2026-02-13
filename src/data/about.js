/**
 * About 페이지 데이터
 * - ROADMAP: 오른쪽 텍스트 + 왼쪽 이미지 슬라이드에 공통 사용
 * - 한 "활동" = 로드맵 항목 1개 = 왼쪽 이미지 한 줄(세 장)
 * - 이미지 이름 {활동순번}-{사진순번}.webp (예: 1-1 = id 0인 첫 활동의 첫 번째 사진)
 */

const aboutAssetModules = import.meta.glob(
  "../features/About/assets/*.webp",
  { eager: true, import: "default" }
);

/** 활동 id(0~15)별 이미지 3장 [url, url, url] */
const ACTIVITY_IMAGES = Array.from({ length: 16 }, (_, id) => {
  const n = id + 1;
  return [
    aboutAssetModules[`../features/About/assets/${n}-1.webp`],
    aboutAssetModules[`../features/About/assets/${n}-2.webp`],
    aboutAssetModules[`../features/About/assets/${n}-3.webp`],
  ];
});

/**
 * 로드맵 섹션 (오른쪽 콘텐츠 구조)
 * 각 activity.images 는 왼쪽 비주얼 한 줄에 들어갈 이미지 3장 [url, url, url]
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
      },
      {
        id: 1,
        label: "공통 교육 세션",
        images: ACTIVITY_IMAGES[1],
      },
      {
        id: 2,
        label: "파트별 교육 세션",
        images: ACTIVITY_IMAGES[2],
      },
      {
        id: 3,
        label: "중앙 아이디어톤",
        isKeyEvent: true,
        images: ACTIVITY_IMAGES[3],
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
      },
      {
        id: 5,
        label: "스터디",
        images: ACTIVITY_IMAGES[5],
      },
      {
        id: 6,
        label: "중앙 해커톤",
        isKeyEvent: true,
        images: ACTIVITY_IMAGES[6],
      },
      {
        id: 7,
        label: "하계 봉사 활동",
        images: ACTIVITY_IMAGES[7],
      },
      {
        id: 8,
        label: "어흥콘",
        isKeyEvent: true,
        images: ACTIVITY_IMAGES[8],
      },
    ],
  },
  {
    id: "semester2",
    title: "2학기",
    activities: [
      {
        id: 9,
        label: "겨울잠",
        isKeyEvent: true,
        images: ACTIVITY_IMAGES[9],
      },
      {
        id: 10,
        label: "홈커밍데이",
        images: ACTIVITY_IMAGES[10],
      },
      {
        id: 11,
        label: "권역별 연합 해커톤",
        images: ACTIVITY_IMAGES[11],
      },
      {
        id: 12,
        label: "기업 연계 해커톤",
        images: ACTIVITY_IMAGES[12],
      },
      {
        id: 13,
        label: "겨울잠 최종 발표",
        images: ACTIVITY_IMAGES[13],
      },
      {
        id: 14,
        label: "14기 수료식",
        isKeyEvent: true,
        images: ACTIVITY_IMAGES[14],
      },
      {
        id: 15,
        label: "우수 활동자 기업 탐방",
        images: ACTIVITY_IMAGES[15],
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
export const CORE_VALUES = ["열정", "책임", "협업"];
