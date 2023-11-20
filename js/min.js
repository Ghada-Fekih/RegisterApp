const nom = document.querySelector ('.nom');
console.log(nom.value);
const submit = document.querySelector('.submit');
function validateName(nom){
    if(!nom){
        return "name is required"
    }
}
submit.addEventListener('click', (event) => {
    if(validateName(nom.value) !== null){
        alert(validateName(nom.value))
    }

})
 