# interactive-scroll-motion

브랜드 비주얼을 스크롤의 흐름에 맞춰 전개하는 인터랙티브 작업물입니다.
타이포그래피, 이미지, 비디오, 캔버스 이펙트가 섹션마다 다른 리듬으로 반응하도록 설계했고, GSAP과 React Three Fiber를 활용해 화면 전환과 WebGL 기반 왜곡 효과를 구현했습니다.

## Preview

<p align="center">
  <img src="./public/images/img-preview.png" alt="preview" width="100%" />
</p>

## Live Demo

https://interactive-scroll-motion.vercel.app/

## Tech Stack

- React 18
- TypeScript
- React Router DOM
- Sass / SCSS Modules
- classnames
- GSAP
- ScrollTrigger
- @gsap/react
- Lenis
- three.js
- @react-three/fiber
- @react-three/drei
- three-stdlib

## 프로젝트 구성

### 1. Hero Section

- 스크롤에 따라 6개의 비디오 패널이 순차적으로 전환되도록 구성했습니다.
- 상단 브랜드 타이틀이 스크롤 진행에 맞춰 위로 밀려나고, 다음 타이틀이 확대되며 등장하도록 구현했습니다.
- 하단 텍스트 리스트는 스크롤 구간에 따라 font-size가 줄어들며 자연스럽게 전환됩니다.
- 중앙 `&` 심볼은 섹션 구간에 맞춰 pin 처리하고, 배경/섹션 상태에 따라 색상과 블렌드 상태가 바뀌도록 구성했습니다.

### 2. Canvas Ripple Section

- React Three Fiber의 `Canvas` 위에 이미지 플레인을 배치하고, WebGL 기반 리플 후처리 이펙트를 적용했습니다.
- 스크롤 위치가 캔버스 영역에 들어왔을 때만 이펙트가 활성화되도록 처리해 불필요한 렌더링을 줄였습니다.
- `RipplePass`, `RippleRenderer`, `RippleScrollRenderer`를 분리해 일반 마우스 기반 이펙트와 스크롤 기반 이펙트를 각각 제어할 수 있게 구성했습니다.
- 브러시 텍스처를 displacement map처럼 활용해 화면이 물결치듯 흔들리는 효과를 만들었습니다.

### 3. Title List Section

- `pin`된 `&` 심볼을 중심축처럼 두고, 타이틀들이 그 주변을 물결 가르듯 스쳐 지나가는 흐름으로 인터랙션을 설계했습니다.
- 각 리스트 아이템은 스크롤 구간에 맞춰 좌우로 살짝 이동했다가 제자리로 돌아오는 모션을 적용했습니다.
- 텍스트와 이미지가 반복적으로 교차되도록 설계해 브랜드 쇼케이스 느낌을 강화했습니다.

### 4. Mask Section

- 좌우가 반대로 흐르는 행을 섞어 시각적인 리듬감을 만들었습니다.
- 섹션 진입 시 커스텀 커서를 활성화해 단순 텍스트 구간도 인터랙티브하게 보이도록 처리했습니다.
- 커서는 blur, mix-blend-mode를 사용해 번지는 형광 오브젝트처럼 보이도록 구현했습니다.

### 5. Font Interaction Section

- `EXHIBITION` 타이포그래피에 variable font weight 애니메이션을 적용해 스크롤에 따라 글자 굵기가 변하도록 구성했습니다.
- 여러 줄의 타이포를 순차적으로 반응시키며, 텍스트 스트로크와 채움 상태가 바뀌도록 연출했습니다.
- 대형 타이포 섹션이 다음 비주얼 구간으로 넘어가기 전 리듬을 만들어주는 전환 구간 역할을 하도록 구성했습니다.

### 6. Image Zoom Section

- 주변 이미지들은 각기 다른 방향으로 퍼져 나가며 등장하도록 설정해 전개형 레이아웃을 만들었습니다.
- 중앙 비디오는 스크롤 구간에서 pin 처리한 뒤 점점 확대되며 전체 화면을 채우도록 구현했습니다.
- 이미지 그룹과 중앙 비디오의 타임라인을 분리해 집합 확대와 개별 비디오 확장을 단계적으로 보여주도록 구성했습니다.

### 7. Ending Section

- 마지막 구간은 `R`과 `A` 두 글자로 마무리되는 대형 타이포 섹션으로 구성했습니다.
- 진입 시 텍스트가 아래에서 올라오며 opacity가 켜지고, 이후 font weight가 강하게 변하면서 존재감을 주도록 처리했습니다.
- 마우스 이동에 따라 좌우 텍스트의 굵기가 반대로 반응하도록 만들어 마지막까지 인터랙션이 이어지게 구성했습니다.

## 주요 구현 포인트

- Lenis를 사용해 전체 스크롤을 부드럽게 보정했습니다.
- GSAP ScrollTrigger의 `scrub`, `pin`, `timeline` 조합으로 섹션별 전환을 구성했습니다.
- Three.js 셰이더 패스를 직접 연결해 단순 CSS 효과가 아닌 WebGL 기반 왜곡 이펙트를 적용했습니다.
- 로컬 variable font와 외부 이미지/비디오 자산을 결합해 실험적인 쇼케이스 화면을 만들었습니다.

## 실행 방법

```bash
npm install
npm start
```

또는

```bash
yarn
yarn start
```

## 스크립트

- `npm start`: 개발 서버 실행
- `npm run build`: 배포용 빌드 생성
- `npm test`: 테스트 실행
