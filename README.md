# 컨설팅 포트폴리오 / Consulting Portfolio

전문 컨설턴트를 위한 모던하고 우아한 케이스북 웹 애플리케이션입니다.

## 🎯 주요 특징

- **풀페이지 스크롤링**: 부드러운 전체 페이지 네비게이션
- **모던 디자인**: 대형 컨설팅 펌 스타일의 세련된 UI/UX
- **데이터 시각화**: Recharts를 활용한 차트와 테이블
- **반응형**: 모바일, 태블릿, 데스크톱 최적화
- **한국어 최적화**: Pretendard와 Noto Serif KR 폰트
- **쉬운 콘텐츠 관리**: 단일 데이터 파일로 모든 내용 수정 가능

## 📁 프로젝트 구조

```
/
├── src/
│   ├── app/
│   │   ├── App.tsx                    # 메인 애플리케이션 컴포넌트
│   │   ├── components/                # React 컴포넌트들
│   │   │   ├── HeroSection.tsx        # 히어로 섹션 (포지셔닝 + 역량)
│   │   │   ├── CaseStudy.tsx          # 케이스 스터디 페이지
│   │   │   ├── Navigation.tsx         # 네비게이션 컨트롤
│   │   │   └── ui/                    # 재사용 가능한 UI 컴포넌트들
│   │   └── data/
│   │       └── portfolio-data.ts      # 📝 콘텐츠 데이터 (여기를 수정하세요!)
│   ├── hooks/
│   │   └── usePageNavigation.ts       # 페이지 네비게이션 커스텀 훅
│   ├── utils/
│   │   ├── analytics.ts               # 분석 유틸리티
│   │   └── format.ts                  # 포맷팅 유틸리티
│   ├── constants/
│   │   └── theme.ts                   # 테마 상수
│   ├── types/
│   │   └── portfolio.ts               # TypeScript 타입 정의
│   ├── styles/
│   │   ├── index.css                  # 메인 스타일 진입점
│   │   ├── fonts.css                  # 폰트 임포트
│   │   ├── tailwind.css               # Tailwind CSS
│   │   └── theme.css                  # 커스텀 테마 토큰
│   ├── main.tsx                       # React 애플리케이션 진입점
│   └── vite-env.d.ts                  # Vite 환경 변수 타입
├── index.html                         # HTML 진입점
├── package.json                       # 의존성 관리
├── vite.config.ts                     # Vite 설정
├── tsconfig.json                      # TypeScript 설정
└── .env.example                       # 환경 변수 예시
```

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
# 또는
pnpm install
# 또는
yarn install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

### 3. 프로덕션 빌드

```bash
npm run build
```

## ✏️ 콘텐츠 수정하기

모든 포트폴리오 콘텐츠는 **`/src/app/data/portfolio-data.ts`** 파일에서 관리됩니다.

### 포지셔닝 문구 변경

```typescript
export const positioning = "여기에 당신의 포지셔닝 문구를 입력하세요";
```

### 핵심 역량 수정

```typescript
export const coreCompetencies = [
  {
    title: "역량 제목",
    description: "역량에 대한 간단한 설명"
  },
  // 3개 권장
];
```

### 케이스 스터디 추가/수정

```typescript
export const caseStudies = [
  {
    year: "2024",
    company: "고객사명",
    topic: "프로젝트 주제",
    details: "프로젝트 개요",
    challenge: "해결한 문제",
    approach: ["접근 방법 1", "접근 방법 2", ...],
    impact: [
      {
        metric: "지표명",
        value: "+32%",
        description: "설명"
      }
    ],
    chartData: [...],    // 선택사항
    tableData: [...]     // 선택사항
  }
];
```

## 🎨 스타일 커스터마이징

### 색상 변경

`/src/constants/theme.ts` 파일에서 색상 팔레트를 수정할 수 있습니다.

### 폰트 변경

`/src/styles/fonts.css` 파일에서 폰트를 변경할 수 있습니다.

### 테마 토큰

`/src/styles/theme.css` 파일에서 Tailwind CSS 커스텀 토큰을 수정할 수 있습니다.

## 🔧 기술 스택

- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Vite** - 빌드 도구
- **Tailwind CSS** - 스타일링
- **Motion (Framer Motion)** - 애니메이션
- **Recharts** - 데이터 시각화
- **Lucide React** - 아이콘

## 📱 반응형 디자인

- **모바일**: < 768px
- **태블릿**: 768px - 1024px
- **데스크톱**: > 1024px

## ⌨️ 키보드 단축키

- `↓` 또는 `Page Down` - 다음 페이지
- `↑` 또는 `Page Up` - 이전 페이지

## 🌐 환경 변수

`.env.example` 파일을 `.env.local`로 복사하고 필요한 값을 설정하세요:

```env
VITE_APP_TITLE=Consulting Portfolio
VITE_APP_DESCRIPTION=Professional Consulting Casebook
```

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 용도로 자유롭게 사용 가능합니다.

## 🤝 기여

이슈나 개선 사항이 있다면 언제든지 PR을 보내주세요!

---

**Made with ❤️ for Professional Consultants**
