const n = document.querySelector(".nom");
const submit = document.querySelector(".submit");
const m = document.querySelector(".mail");

submit.addEventListener('click', (event) => {
    console.log(n.value);
    console.log(m.value)
})

