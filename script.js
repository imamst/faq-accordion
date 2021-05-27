let question_item_elements = document.getElementsByClassName("question-item");

Array.from(question_item_elements).forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle("active");

        let answer_item = element.lastElementChild;

        if(answer_item.style.maxHeight) {
            answer_item.style.maxHeight = null;
        }
        else {
            answer_item.style.maxHeight = answer_item.scrollHeight + "px";
        }
    })
});