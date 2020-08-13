document.querySelector("#remove-time")

.addEventListener("click",removeField)

function removeField() {
    var newContainers = document.getElementsByClassName("schedule-item");
    console.log(newContainers)

    if (newContainers.length > 1) {
        document.querySelector(".schedule-item:last-child").remove()
    }
}