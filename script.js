document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-input");
    const tableRows = document.querySelectorAll(".table tbody tr");

    if (searchInput) {
        searchInput.addEventListener("keyup", (e) => {
            const query = e.target.value.toLowerCase();

            tableRows.forEach((row) => {
                const text = row.textContent.toLowerCase();
                if (text.includes(query)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            });
        });
    }
});