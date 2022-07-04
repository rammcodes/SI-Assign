const playersTable = document.querySelector('.players-table-sec')
const pitch = document.querySelector('.pitch')
const bottomBar = document.querySelector('.bottom-bar')
const listBtn = document.querySelector('.main-stats__right-cont-btn--list')
const pitchBtn = document.querySelector('.main-stats__right-cont-btn--pitch')

pitch.style.display = 'none'
listBtn.classList.add('main-stats__right-cont-btn--active')

pitchBtn.addEventListener('click', () => {
  playersTable.style.display = 'none'
  bottomBar.style.display = 'none'
  pitch.style.display = 'block'

  listBtn.classList.remove('main-stats__right-cont-btn--active')
  pitchBtn.classList.add('main-stats__right-cont-btn--active')
})

listBtn.addEventListener('click', () => {
  playersTable.style.display = 'block'
  bottomBar.style.display = 'flex'
  pitch.style.display = 'none'
  pitchBtn.classList.remove('main-stats__right-cont-btn--active')
  listBtn.classList.add('main-stats__right-cont-btn--active')
})
