let mobile_icon = document.getElementById("mobile_icon");
let mobile_manu = document.getElementById("mobile_manu");

mobile_icon.addEventListener("click", () => {
    mobile_manu.classList.toggle('hidden');
})