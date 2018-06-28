class Modal {
    constructor() {
        this.openModalButton = document.querySelectorAll('.open-modal');
        this.modal = document.querySelector('.modal');
        this.closeModalBtn = document.querySelector('.modal-close');
        this.events();
    }

    events() {
        //console.log(this.openModalButton);
        this.openModalButton.forEach(e => 
            e.addEventListener('click', this.openModal.bind(this))
        );
        this.closeModalBtn.addEventListener('click', this.closeModal.bind(this));
        document.addEventListener('keydown', this.keyPressHandler.bind(this))
    }

    openModal(e) {
        console.log(this.modal);
        this.modal.classList.add('modal-visible');
        e.preventDefault();  
    }

    closeModal() {
        this.modal.classList.remove('modal-visible');
    }

    keyPressHandler(e){
        if (e.keyCode ==27){
            this.closeModal();
        }
    }
}

export default Modal