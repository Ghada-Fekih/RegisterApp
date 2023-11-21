const n = document.querySelector(".nom");
const submit = document.querySelector(".submit");
const email = document.querySelector(".email");
const pw = document.querySelector(".password");
const conP = document.querySelector(".conPasse")
const error1 = document.querySelector(".error1");
const error2 = document.querySelector(".error2");
const error3 = document.querySelector(".error3");
const error4 = document.querySelector(".error4");
//test nom est vide

submit.addEventListener('click', (event) => {
  if (n.value == ""){
      error1.innerHTML = `<span>nom est vide</span> `;
      return;
  }
  else {error1.innerHTML = "";}
  if (email.value == ""){
    error2.innerHTML = `<span>mail est vide</span> `;
    return;
}
else {error2.innerHTML = "";}
if (pw.value == ""){
    error3.innerHTML = `<span>Password est vide</span> `;
    return;
}
if (!/^[0-9a-zA-z]+$/.test(pw)){
    error3.innerHTML=`password doit etre des numero `;
}
else {error3.innerHTML = "";}
if (conP.value != pw.value){
    error4.innerHTML = `<span>Password nest pas conforme</span> `;
return;}
else {error4.innerHTML = "";}
})

