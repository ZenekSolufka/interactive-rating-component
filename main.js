const ratings = document.querySelectorAll('.rating')

const btn = document.querySelector('button')
const ratingState = document.querySelector('.rating-state')
const thanksState = document.querySelector('.thanks-state')
const ratingValue = document.querySelector('.rating-value')

const selectedDegree = document.querySelector(".selected-degree")

ratings.forEach((rating) => {
    rating.addEventListener('click', () => {
        rating.style.background = 'gray'
        rating.style.color = '#fff'
        rating.classList.add('checked')
    })
    if (rating.classList.contains('checked')) {
        rating.classList.remove('checked')
    }
})

const submit = () => {
    ratingState.classList.add('hidden')
    thanksState.classList.remove('hidden')
}

ratings.forEach((ratiing) => {
    ratiing.addEventListener('click', () => {
        const checked = document.querySelector('.checked')
        if (ratiing.classList.contains('checked')) {
            ratingValue.textContent = ratiing.textContent
        }
    })
})

btn.addEventListener('click', submit)