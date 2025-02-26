async function fetchCatFact() {
    try {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        document.getElementById("cat-fact").innerText = data.fact;
    } catch (error) {
        document.getElementById("cat-fact").innerText = "Oops! Could not fetch a cat fact.";
        console.error("Error fetching cat fact:",error);
    }
}

document.getElementById("fetch-fact").addEventListener("click", fetchCatFact);

fetchCatFact();

document.addEventListener("mousemove", function(event) {
    let x = event.clientX / window.innerWidth;
    let y = event.clientY / window.innerHeight;

    let hue = Math.floor(x * 360);
    let lightness = 70 + (y * 10);

    document.body.style.backgroundColor = `hsl(${hue}, 100%, ${lightness}%)`;
});


document.getElementById("fetch-fact").addEventListener("click", function() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 } 
    });
});


