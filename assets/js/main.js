


console.log('hello js');


  const login = document.querySelector('.login');
  const loginCon = document.querySelector('.loginModal');

  const signup = document.querySelector('.Sign-up');
  const signupCon = document.querySelector('.signUPModal');

  const closeButtons = document.querySelectorAll('.close');

  login.addEventListener('click', () => {
    loginCon.classList.add('log');
    signupCon.classList.remove('sig');
  });

  signup.addEventListener('click', () => {
    signupCon.classList.add('sig');
    loginCon.classList.remove('log');
  });

  {/* // Add event listeners for close buttons */}
  closeButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
      loginCon.classList.remove('log');
      signupCon.classList.remove('sig');
    });
  });


   