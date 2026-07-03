document.addEventListener("DOMContentLoaded", () => {
    
    // Live Dynamic Broadcast Target for Match M02 (5 July 2026)
    const countdownTarget = new Date("July 5, 2026 00:00:00").getTime();
    
    const timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const difference = countdownTarget - now;

        if (difference < 0) {
            clearInterval(timerInterval);
            const timerBox = document.getElementById("countdown-timer");
            if (timerBox) timerBox.innerHTML = "<span class='text-red-500 font-black text-xs uppercase tracking-widest'>🔴 EVALUATION PANELS ENGAGED</span>";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        if(document.getElementById("days")) {
            document.getElementById("days").innerText = String(days).padStart(2, '0');
            document.getElementById("hours").innerText = String(hours).padStart(2, '0');
            document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        }
    }, 1000);

    // Accordion Logic for Rulebook
    const triggers = document.querySelectorAll(".accordion-trigger");
    triggers.forEach(trigger => {
        trigger.addEventListener("click", () => {
            const content = trigger.nextElementSibling;
            const icon = trigger.querySelector("i");
            content.classList.toggle("hidden");
            icon.classList.toggle("rotate-180");
        });
    });
});