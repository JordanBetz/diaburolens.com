document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const popup = document.getElementById("success-popup");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(form);

        fetch('contact.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            popup.textContent = "Message sent successfully";
            popup.style.backgroundColor = "#4B0082";
            popup.style.display = "block";
            setTimeout(() => popup.style.display = "none", 2000);
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            popup.textContent = "An error occurred";
            popup.style.backgroundColor = "red";
            popup.style.display = "block";
            setTimeout(() => popup.style.display = "none", 2000);
        });
    });

    const logoContainer = document.getElementById("logo-container");
    const backToTopButton = document.getElementById("back-to-top");

    function handleScroll() {
        const scrollTop = window.scrollY;
        if (scrollTop > logoContainer.offsetHeight) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }

    window.addEventListener("scroll", handleScroll);
    backToTopButton.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));

    const moreText = document.getElementById("more-text");
    const btn = document.getElementById("show-more");

    btn.addEventListener('click', () => {
        const isHidden = moreText.style.display === "none";
        moreText.style.display = isHidden ? "block" : "none";
        btn.textContent = isHidden ? "Show less" : "Show more";
    });

    // Funktion, um die Höhe des Hintergrundes anzupassen
    function setBackgroundHeight() {
        const bodyHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        document.querySelector('.background').style.minHeight = `${bodyHeight}px`;
    }

    setBackgroundHeight(); // Rufe die Funktion beim Laden auf
    window.addEventListener('resize', setBackgroundHeight); // Rufe die Funktion beim Skalieren des Fensters auf
    window.addEventListener('load', setBackgroundHeight); // Rufe die Funktion nach dem Laden der Seite auf
});
document.addEventListener('DOMContentLoaded', function () {
    var moreText = document.getElementById("more-text");
    var btn = document.getElementById("show-more");

    btn.addEventListener('click', function () {
        if (moreText.style.display === "none") {
            moreText.style.display = "block"; 
            btn.textContent = "Show less"; 
        } else {
            moreText.style.display = "none"; 
            btn.textContent = "Show more"; 
        }
    });
});