(() => {
    const CHECKLIST = [
        {
            category: "필수",
            data: [
                { text: "여권/여권사본/여권사진", done: false },
                { text: "이심/유심", done: false },
                { text: "트래블월렛", done: false },
                { text: "현금", done: false },
                { text: "비상용 신용카드", done: false },
            ],
        },
        {
            category: "전자기기",
            data: [
                { text: "보조배터리(도킹형, 대용량)", done: false },
                { text: "멀티어댑터", done: false },
                { text: "충전기 어댑터", done: false },
                { text: "충전기 케이블", done: false },
                { text: "손풍기", done: false },
                { text: "전기 방석", done: false },
                { text: "러기지 체커", done: false },
            ],
        },
        {
            category: "욕실용품",
            data: [
                { text: "칫솔/치약/치실", done: false },
                { text: "샴푸", done: false },
                { text: "트리트먼트", done: false },
                { text: "바디워시", done: false },
                { text: "샤워타올", done: false },
                { text: "헤어오일", done: false },
                { text: "클렌징워터/클렌징폼", done: false },
                { text: "샤워백", done: false },
                { text: "샤워기 필터", done: false },
            ],
        },
        {
            category: "화장품",
            data: [
                { text: "토너패드", done: false },
                { text: "수분크림", done: false },
                { text: "썬크림/썬스프레이", done: false },
                { text: "알로에팩", done: false },
                { text: "립밤", done: false },
                { text: "면봉", done: false },
                { text: "빗", done: false },
                { text: "거울", done: false },
                { text: "손톱깍이", done: false },
                { text: "쪽집게", done: false },
                { text: "눈썹칼", done: false },
            ],
        },
        {
            category: "의류",
            data: [
                { text: "트레이닝바지(회색)", done: false },
                { text: "청바지(여름)", done: false },
                { text: "검정면바지(사계절)", done: false },
                { text: "검정슬랙스(겨울)", done: false },
                { text: "검정슬랙스(여름)", done: false },
                { text: "반팔티3", done: false },
                { text: "맨투맨1(회색)", done: false },
                { text: "긴발티1(흰색)", done: false },
                { text: "셔츠1", done: false },
                { text: "체크셔츠2", done: false },
                { text: "경량패딩", done: false },
                { text: "바람막이(두꺼운거)", done: false },
                { text: "히트텍 상하의2", done: false },
                { text: "잠옷", done: false },
                { text: "속옷5", done: false },
                { text: "양말5", done: false },
                { text: "두꺼운양말1", done: false },
                { text: "선글라스", done: false },
            ],
        },
        {
            category: "상비약",
            data: [
                { text: "종합감기약", done: false },
                { text: "지사제", done: false },
                { text: "소화제", done: false },
                { text: "멀미약", done: false },
                { text: "소염진통제", done: false },
                { text: "비염약", done: false },
                { text: "밴드", done: false },
                { text: "마데카솔", done: false },
                { text: "후시딘", done: false },
                { text: "글루콤", done: false },
                { text: "인공 눈물약", done: false },
            ],
        },
        {
            category: "기타",
            data: [
                { text: "우양산", done: false },
                { text: "휴족시간", done: false },
                { text: "가습마스크", done: false },
                { text: "종아리 압박 스타킹", done: false },
                { text: "목베개", done: false },
                { text: "귀마개/안대", done: false },
                { text: "휴대용 휴지", done: false },
                { text: "휴대용 물티슈", done: false },
                {
                    text:
                        "보안관련(자전거 자물쇠, 자물쇠, 카라비너 스프링줄, ...)",
                    done: false,
                },
                { text: "볼펜", done: false },
                { text: "핫팩", done: false },
            ],
        },
    ];

    const createCheckList = (checkList) => {
        checkList.forEach((category, idx1) => {
            let DIV = document.createElement("div");
            let LIST = document.createElement("ul");
            DIV.classList.add("box");
            DIV.innerHTML = `<div class="category">${category.category}</div>`;
            Array.from(category.data).forEach((item, idx2) => {
                const LI = document.createElement("li");
                LI.innerHTML = `
                    <input type="checkbox" name="" id="check-${idx1}-${idx2}" ${
                    item.done ? "checked" : ""
                }>
                    <label for="check-${idx1}-${idx2}">
                        <span class="check_ico">
                            <i class="fa-solid fa-check"></i>
                        </span>
                        ${item.text}
                    </label>`;
                LIST.append(LI);
            });
            DIV.append(LIST);
            document.getElementById("check_wrap").append(DIV);
        });
    };

    const updateCheckList = (checkList) => {
        // 체크박스 업데이트
        document.addEventListener("click", ({ target }) => {
            if (!target.closest("label")) return;

            const FOR = target.getAttribute("for");
            const INDEX_1 = FOR.split("-")[1];
            const INDEX_2 = FOR.split("-")[2];
            let CHECK_EL = document.querySelector(`#${FOR}`);

            checkList[INDEX_1].data[INDEX_2].done = !CHECK_EL.checked;
            localStorage.setItem("checkList", JSON.stringify(checkList));
        });
    };

    const checkInit = () => {
        let checkList = localStorage.getItem("checkList")
            ? JSON.parse(localStorage.getItem("checkList"))
            : CHECKLIST;

        createCheckList(checkList);
        updateCheckList(checkList);
    };

    checkInit();
})();
