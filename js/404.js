const homeBtn = document.querySelector(".btn-home");
const discordBtn = document.querySelector(".btn-discord");
const creditsBtn = document.querySelector(".btn-credits");

homeBtn.addEventListener("click", () => {
    window.location.href = "/";
});

discordBtn.addEventListener("click", () => {
    window.location.href = "/";
    window.parent.open("https://discord.gg/gvbnx3RGR4");
});

creditsBtn.addEventListener("click", () => {
    window.location.href = "/CREDITS.txt"
})