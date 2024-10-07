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

const checkInit = (CHECKLIST) => {
    let checkList = localStorage.getItem("checkList")
        ? JSON.parse(localStorage.getItem("checkList"))
        : CHECKLIST;

    createCheckList(checkList);
    updateCheckList(checkList);
};

const resetCheckList = (checkList) => {
    document.getElementById("check_reset").addEventListener("click", () => {
        localStorage.removeItem("checkList");
        document.getElementById("check_wrap").innerHTML = "";
        checkInit(checkList);
    });
};
