
let addTask = document.querySelector("[data-open-modal");
let closeModal = document.querySelector("[data-close-modal");
let modal = document.querySelector("[data-modal]");

addTask?.addEventListener("click", () =>{
    modal.showModal();
});
closeModal?.addEventListener("click", () =>{
    modal.close();
});


