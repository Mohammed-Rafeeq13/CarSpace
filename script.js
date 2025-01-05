let search= document.querySelector('.search-box');
document.querySelector('#search-icon').onclick = () => {
  search.classList.toggle('active');
}

//Header
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow',window.scrollY > 0);
});
// const form = document.getElementById('myForm');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const errorMessage = document.getElementById('errorMessage');

// form.addEventListener('submit', (e) => {
//   if (!email.validity.valid || !password.validity.valid) {
//     e.preventDefault();
//     errorMessage.textContent = 'Please check your email and password';
//   } else {
//     errorMessage.textContent = '';
//   }
// });

// email.addEventListener('input', () => {
//   if (email.validity.valid) {
//     errorMessage.textContent = '';
//   }
// });

// password.addEventListener('input', () => {
//   if (password.validity.valid) {
//     errorMessage.textContent = '';
//   }
// });