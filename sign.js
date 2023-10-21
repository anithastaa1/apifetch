const forms1 =document.querySelector('#forms1')
const username =document.querySelector('#username');
const email =document.querySelector('#email');
const password =document.querySelector('#password');
const cpassword =document.querySelector('#cpassword');

forms1.addEventListener('submit',(e)=>{
     e.preventDefault();
     validateInputs();
})

function validateInputs(){
      const usernameVal = username.value.trim()
      const emailVal = email.value.trim();
       const passwordVal = password.value.trim();
       const cpasswordVal = cpassword.value.trim();

      if (usernameVal === ''){
           setError(username,'Username is required!')
      }
      else{
           setSuccess(username)
      }

      if(emailVal ===''){
            setError(email,'Email is required!')

      }
      else if(!validateEmail(emailVal)){
           setError(email,'Please enter a valid email!')
           }
      else{
          setSuccess(email)
       }

       if(passwordVal === ''){
           setError(password,'Password is required!')
        }
       else if(passwordVal.length<8){
           setError(password,'Password must be atleast 8 characters!')
       }

       else{
           setSuccess(password)
        }

       if(cpasswordVal === ''){
           setError(cpassword,'Confirm password is required!')
         }
       else if(cpasswordVal!== passwordVal){
            setError(password,'Password does not match!')
         }
       else{
            setSuccess(cpassword)
         }



}

function validate(){
     var password = document.getElementById("password");
     var length = document.getElementById("length");
     if (password.value.length >= 8){
          alert('Signup Successfully');
          window.location.replace("login.html");
          return false;
     }
     else{
          alert('Login Failed');
      }
           }

function setError(element,message){
     const inputGroup= element.parentElement;
     const errorElement = inputGroup.querySelector('.error');

      errorElement.innerText = message;
      inputGroup.classList.add('error')
      inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup= element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

     errorElement.innerText = '';
     inputGroup.classList.add('success')
     inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
       return String(email)
       .toLowerCase()
       .match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
       );
       };