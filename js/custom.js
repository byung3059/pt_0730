// DOM 콘텐츠가 완전히 로드된 후 스크립트를 실행합니다.
window.addEventListener("DOMContentLoaded", () => {
    const coverTimeline = gsap.timeline({
        delay: 0.5
    });

    CustomEase.create("myEase", "0.96, 0.02, 0.22, 0.96");

    coverTimeline
        .to(".cover_start_bg", {
            xPercent: -100,
            duration: 0.8,
            ease: "myEase"
        })
        .fromTo("#cover_ani .txt_box p span",
            { yPercent: 100, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 }
        )
        .to("#cover_ani", {
            delay: 0.5,
            width: 0,
            duration: 1,
            ease: "myEase"
        })
        .set(["#cover_ani"], {
            display: "none"
        });

    ScrollTrigger.create({
        trigger: "#sec_intro",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,

        onEnter: () => document.querySelector("#sec_intro").classList.add("on"),
        onLeaveBack: () => document.querySelector("#sec_intro").classList.remove("on"),
    });

    ScrollTrigger.create({
        trigger: "#pt_sec_tit",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,

        onEnter: () => document.querySelector("#pt_sec_tit").classList.add("on"),
        onLeaveBack: () => document.querySelector("#pt_sec_tit").classList.remove("on"),
    });

    ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
            const ptPanels = gsap.utils.toArray("#pt_sec .pt");
            const ptGap = 30;
            const ptPanelWidth = 1040;
            const ptPadding = 80;
            const ptTotalWidth = (ptPanelWidth * ptPanels.length) + (ptGap * (ptPanels.length - 1)) + (ptPadding * 2);
            const ptMoveX = ptTotalWidth - window.innerWidth;

            gsap.to("#pt_sec .inner", {
                x: -ptMoveX,
                scrollTrigger: {
                    trigger: "#pt_sec",
                    start: "top top",
                    end: `+=${ptMoveX}`,
                    pin: true,
                    scrub: 1,
                    onEnter: () => document.querySelector("#pt_sec").classList.add("on"),
                    onLeaveBack: () => document.querySelector("#pt_sec").classList.remove("on"),
                }
            });
        },

        "(max-width: 767px)": function () {
            const ptPanels = gsap.utils.toArray("#pt_sec .pt");

            ptPanels.forEach((panel) => {
                ScrollTrigger.create({
                    trigger: panel,
                    start: "top 80%",
                    end: "bottom 20%",

                });
            });
        }
    });


    ScrollTrigger.create({
        trigger: "#work_sec_tit",
        start: "top top",
        end: "bottom top",
        pin: true,

        pinSpacing: false,

        onEnter: () => document.querySelector("#work_sec_tit").classList.add("on"),
        onLeaveBack: () => document.querySelector("#work_sec_tit").classList.remove("on"),
    });

    ScrollTrigger.matchMedia({
        "(min-width: 768px)": function () {
            const workPanels = gsap.utils.toArray("#work_sec .pt");
            const workGap = 30;
            const workPanelWidth = 1040;
            const workPadding = 80;
            const workTotalWidth = (workPanelWidth * workPanels.length) + (workGap * (workPanels.length - 1)) + (workPadding * 2);
            const workMoveX = workTotalWidth - window.innerWidth;

            gsap.to("#work_sec .inner", {
                x: -workMoveX,
                scrollTrigger: {
                    trigger: "#work_sec",
                    start: "top top",
                    end: `+=${workMoveX}`,
                    pin: true,
                    scrub: 1,
                    onEnter: () => document.querySelector("#work_sec").classList.add("on"),
                    onLeaveBack: () => document.querySelector("#work_sec").classList.remove("on"),
                }
            });
        },

        "(max-width: 767px)": function () {
            const workPanels = gsap.utils.toArray("#work_sec .pt");

            workPanels.forEach((panel) => {
                ScrollTrigger.create({
                    trigger: panel,
                    start: "top 80%",
                    end: "bottom 20%",
                    // 원하는 효과 추가
                });
            });
        }
    });

    ScrollTrigger.create({
        trigger: "#profile",
        start: "top top",
        end: "+=100%",
        pin: true,


        onEnter: () => document.querySelector("#profile").classList.add("on"),
        onLeaveBack: () => document.querySelector("#profile").classList.remove("on"),
    });

    const T = document.querySelector('#to_top');
    T.addEventListener('click', () => {
        gsap.to(window, { scrollTo: 0, duration: 1 })
    });

    // --- 모바일 뷰포트 높이(vh) 보정 ---
    const setFullHeight = () => {
        const vh = window.innerHeight * 0.01; // 뷰포트 높이의 1% 계산
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', setFullHeight);
    setFullHeight();
});

$(function () {
    VANTA.WAVES({
        el: "#vanta_bg",      // 애니메이션을 적용할 요소
        mouseControls: true,   // 마우스 컨트롤 활성화
        touchControls: false,   // 터치 컨트롤 활성화
        gyroControls: false,   // 자이로 컨트롤 비활성화
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x050505,       // 파도 색상 (검정색)
        shininess: 8.00,       // 파도의 반짝임
        waveHeight: 40.00,     // 파도 높이
        waveSpeed: 0.5,        // 파도 속도
        zoom: 0.8             // 줌 레벨
    });
});