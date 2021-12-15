document.addEventListener("DOMContentLoaded", (event) => {
    const dragArea = document.querySelector(".todos");
    new Sortable(dragArea, {
        animation: 150,
    })
});
