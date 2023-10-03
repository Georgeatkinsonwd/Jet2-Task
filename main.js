const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".openModal");
const closeModalBtn = document.querySelector(".modalBottom_button--cancel");
const continueModalBtn = document.querySelector(".modalBottom_button--continue");


const openModal = () => {
    modal.classList.remove("modal--hidden")
    openModalBtn.classList.add("modal--hidden")

}

const closeModal =() => {
    modal.classList.add("modal--hidden")
    openModalBtn.classList.remove("modal--hidden")
    
}

openModalBtn.addEventListener('click' , () => {
    openModal()
})

closeModalBtn.addEventListener('click' , () => {
    closeModal()
})

continueModalBtn.addEventListener('click', () => {
    closeModal()
})