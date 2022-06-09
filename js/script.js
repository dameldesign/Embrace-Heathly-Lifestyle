let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let popup = document.querySelector(".backdrop");

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

const form = document.getElementById("form")

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wc3qcon",
        "template_qu8q3dk",
        form,
        "vjYKPeoBp6DqPx85o"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();

    setTimeout(() => {
        popup.classList.add("open-popup");
    }, 100);
    setTimeout(() => {
        popup.classList.remove("open-popup");
    }, 3000);
  };

  form.addEventListener("submit", sendEmail)
