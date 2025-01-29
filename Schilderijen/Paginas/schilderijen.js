const ticketInput = document.getElementById("ticketAantal");
const prijsSpan = document.getElementById("prijs");
const prijsPerTicket = 10;

ticketInput.addEventListener("input", updatePrijs);

function updatePrijs() {
    let aantalTickets = parseInt(ticketInput.value);
    if (aantalTickets < 1) {
        ticketInput.value = 1; 
        aantalTickets = 1;
    }
    prijsSpan.textContent = aantalTickets * prijsPerTicket;
}

function betaalTickets() {
    const naam = document.getElementById("naam").value;
    const email = document.getElementById("email").value;
    const datum = document.getElementById("datum").value;
    const aantalTickets = document.getElementById("ticketAantal").value;
    const betaalmethode = document.getElementById("betaalmethode").value;

    if (!naam || !email || !datum || !aantalTickets || !betaalmethode) {
        alert("Alle velden zijn verplicht.");
        return;
    }

    const totalePrijs = aantalTickets * prijsPerTicket;
    alert(`Je hebt ${aantalTickets} tickets gekocht voor een totaal van €${totalePrijs}. Bedankt ${naam}!`);
}

function toggleMode() {
    const body = document.body;
    const modeButton = document.getElementById('modeToggle');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modeButton.textContent = '🌙';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        modeButton.textContent = '🌞';
    }
}
