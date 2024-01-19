const filterBox = document.querySelectorAll('.project__item');
const itemEl = document.querySelectorAll('.portfolio__item--content')
const btnAllEl = document.querySelector('[data-btn="all"]')


const filterBtn = (event) => {
    if (event.target.tagName !== "BUTTON") return false;
    let filterClass = event.target.dataset['btn'];
    itemEl.forEach(item => {
        if (item.classList.contains(filterClass)) {
            item.style.display = 'block';
            btnAllEl.classList.remove('portfolio__btn--current')
        } else {
            item.style.display = 'none';
        }
        if (event.target === btnAllEl) {
            item.style.display = 'block';
        }
    })

}

document.querySelector('body')
    .addEventListener('click', event => {
        filterBtn(event)
    });



