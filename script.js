fetch("./templates/header.html")
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        document.getElementById("header-placeholder").innerHTML = doc.querySelector("header").innerHTML;
        // document.getElementById("footer-placeholder").innerHTML = doc.querySelector("footer").innerHTML;
});

document.addEventListener("DOMContentLoaded", function() {
    fetch("./templates/footer.html")
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, "text/html");
            document.getElementById("footer-placeholder").innerHTML = doc.querySelector("footer").innerHTML;
    });
});