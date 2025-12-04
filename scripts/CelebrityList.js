import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener("click", (clickEvent) => {
    const celebrityClicked = clickEvent.target

    if (celebrityClicked.dataset.type === "celebrity") {
        for (const celebrity of celebrities) {
            if (parseInt(celebrityClicked.dataset.id) === celebrity.id) {
                window.alert(`${celebrity.name} plays ${celebrity.sport}`)
            }
        }
    }
})

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}
