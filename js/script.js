window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').classList.add('scrolled');
    } else {
        document.querySelector('.navbar').classList.remove('scrolled');
    }
});

const countDownDate = new Date("December 1, 2024 10:00:00").getTime();

const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".countdown").innerHTML = `
            <h2 class="font text-white">EVENT TELAH DIMULAI!</h2>
            <p>Terima kasih telah menunggu. Mari bergabung dalam acara kami!</p>
        `;
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);