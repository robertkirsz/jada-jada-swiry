const actions = {
  '🤔1': { start: 9.3, duration: 1.45 },
  '🤔2': { start: 14.8, duration: 0.8 },
  '🤔3': { start: 22, duration: 1.2 },
  pojada: { start: 12.5, duration: 1.9 },
  pojechali: { start: 53.7, duration: 1.6 },
  '🍺': { start: 55.5, duration: 2 },
  '💥': { start: 34, duration: 6.7 }
}

const buttons = [...document.querySelectorAll('button')]
const video = document.querySelector('video')

let clickTimeout = null

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const action = actions[button.dataset.action]

    clearTimeout(clickTimeout)
    video.currentTime = action.start
    video.play()

    clickTimeout = setTimeout(() => {
      video.pause()
    }, action.duration * 1000)
  })
})

console.log('Jebnie czy nie jebnie?')
