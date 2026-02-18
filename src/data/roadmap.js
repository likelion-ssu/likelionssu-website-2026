import ot1 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_ot_1.webp";
import ot2 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_ot_2.webp";
import ot3 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_ot_3.webp";
import session1 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_session_1.webp";
import session2 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_session_2.webp";
import session3 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_session_3.webp";
import idea1 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_idea_1.webp";
import idea2 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_idea_2.webp";
import idea3 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_idea_3.webp";
import study1 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_study_1.webp";
import study2 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_study_2.webp";
import study3 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_study_3.webp";
import hack1 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_hack_1.webp";
import hack2 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_hack_2.webp";
import hack3 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_hack_3.webp";
import lion1 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_lion_1.webp";
import lion2 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_lion_2.webp";
import lion3 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_lion_3.webp";
import sleep1 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_sleep_1.webp";
import sleep2 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_sleep_2.webp";
import sleep3 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_sleep_3.webp";
import homecoming1 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_homecoming_1.webp";
import homecoming2 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_homecoming_2.webp";
import homecoming3 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_homecoming_3.webp";
import newhack1 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_newhack_1.webp";
import newhack2 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_newhack_2.webp";
import newhack3 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_newhack_3.webp";
import end1 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_end_1.webp";
import end2 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_end_2.webp";
import end3 from "../features/Recruit/assets/roadmap-webp/RoadmapSection_end_3.webp";

export const ROADMAP_ITEMS = [
  {
    id: "회원선발",
    label: "회원 선발 및 OT",
    labelLines: ["회원 선발", "및 OT"],
    hasAsterisk: false,
    content: {
      title: "3월",
      description:
        "아기사자들을 모집한 후 OT에서 함께 모여요! 첫인사를 하며 친해지는 시간을 가집니다. 앞으로 1년 동안 잘 부탁해!",
      images: [ot1, ot2, ot3],
    },
  },
  {
    id: "교육세션",
    label: "교육세션",
    hasAsterisk: false,
    content: {
      title: "3월",
      description:
        "프로젝트에 필요한 핵심 스킬을 체계적으로 익혀요. 파트장의 생생한 경험이 담긴 강연과 파트원들의 활발한 소통을 통해 함께 성장하는 시간!",
      images: [session1, session2, session3],
    },
  },
  {
    id: "중앙아이디어톤",
    label: "중앙 아이디어톤",
    labelLines: ["중앙", "아이디어톤"],
    hasAsterisk: false,
    content: {
      title: "5월",
      description:
        "아이디어톤은 첫 번째로 진행되는 프로젝트가 될 거예요. 팀원들과 생각을 나누고, 합을 맞춰보면 어느새 마무리 되어 있는..! 재밌는 시간이에요.",
      images: [idea1, idea2, idea3],
    },
  },
  {
    id: "하계스터디",
    label: "하계 스터디",
    labelLines: ["하계", "스터디"],
    hasAsterisk: false,
    content: {
      title: "6월",
      description:
        "여름방학 동안 다양한 스터디를 진행하며, 함께 성장해요. 공부도, 노는 것도 다같이 하면 효과는 2배~ 1등으로 성장하고 1등으로 즐겨요!",
      images: [study1, study2, study3],
    },
  },
  {
    id: "중앙해커톤",
    label: "중앙 해커톤",
    labelLines: ["중앙", "해커톤"],
    hasAsterisk: false,
    content: {
      title: "8월",
      description:
        "중앙 해커톤은 무박 2일 동안 모든 멋사가 모여 개발하는 연례 행사예요. 짧은 기간 동안 열정을 불태워 팀원들과 함께 아이디어를 현실로 구현하는 짜릿한 경험!",
      images: [hack1, hack2, hack3],
    },
  },
  {
    id: "어흥콘",
    label: "어흥콘",
    hasAsterisk: true,
    content: {
      title: "9월",
      description:
        "어흥콘에선 각 대학에서 진행한 프로젝트를 출품해요. 행사장에서 시연과 공유를 통해 아이디어를 나누는 행사예요. 각 학교 학생들과 자유롭게 교류하며 다양한 아이디어를 얻을 수 있답니다.",
      images: [lion1, lion2, lion3],
    },
  },
  {
    id: "겨울잠",
    label: "겨울잠",
    hasAsterisk: true,
    content: {
      title: "9월",
      description:
        "겨울잠은 숭실대 멋쟁이사자처럼 내에서 진행되는 장기프로젝트입니다. 하반기에 3개월간 진행되며, 숭멋사의 꽃이라 할 수 있답니다.",
      images: [sleep1, sleep2, sleep3],
    },
  },
  {
    id: "홈커밍데이",
    label: "홈커밍데이",
    hasAsterisk: false,
    content: {
      title: "11월",
      description:
        "숭멋사를 졸업한 선배 사자과 이야기를 나눌 수 있는 시간이에요. 강연도 듣고 다양한 피드백도 받을 수 있답니다. ",
      images: [homecoming1, homecoming2, homecoming3],
    },
  },
  {
    id: "대학연합해커톤",
    label: "대학 연합 해커톤",
    labelLines: ["대학 연합", "해커톤"],
    hasAsterisk: false,
    content: {
      title: "12월",
      description:
        "대학 연합 해커톤은 여러 대학과 함께하는 대회에요. 이번 해에 추가된 행사인데요, 함께 교류하며 다 같이 성장하는 시간이랍니다.",
      images: [newhack1, newhack2, newhack3],
    },
  },
  {
    id: "수료식",
    label: "수료식",
    hasAsterisk: false,
    content: {
      title: "12월",
      description:
        "겨울잠 최종 발표와 함께 수료식을 진행해요. 멋사는 1년을 그 무엇보다 알차게 만들어줘요. 벌써 1년이라니!",
      images: [end1, end2, end3],
    },
  },
];
