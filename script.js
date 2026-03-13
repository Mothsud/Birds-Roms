function filterTable() {
    let input = document.getElementById("search");
    let filter = input.value.toUpperCase();
    let rows = document.querySelector("table").rows;
    for (let i = 1; i < rows.length; i++) {
        let name = rows[i].cells[0].innerText;
        rows[i].style.display = name.toUpperCase().indexOf(filter) > -1 ? "" : "none";
    }
}