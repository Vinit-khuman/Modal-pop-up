const modal = document.querySelector(".modal");
const openModalButton = document.querySelector(".openModalButton");
const closeModalButton = document.querySelector(".close_modal");

const openModal = () => {
    modal.classList.remove("close");
    document.body.classList.add("overflow");
};

const closeModal = () => {
    modal.classList.add("close");
    document.body.classList.remove("overflow");
};

openModalButton.addEventListener("click", () => {
    openModal();
});

closeModalButton.addEventListener("click", () => {
    closeModal();
});

modal.addEventListener("click", (e) => {
    const target = e.target.classList;
    if (target.contains("overlay") || target.contains("close_modal")) {
        closeModal();
    }
});
