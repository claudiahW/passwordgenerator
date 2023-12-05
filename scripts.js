// function generatePass()
// {
//     let pass = '';
//     let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
//     'abcdefghijklmnopqrstuvwxyz0123456789@#$';
     
//     for (let i = 1; i <= 8; i++){
//         let char = Math.floor(Math.random()* str.length + 1);

//         pass += str.charAt(char)
//     }
//     return pass;    
// }

// console.log(generatePass());


    // get the form
    const form = document.querySelector('form');
    // add event listener to form
    form.addEventListener('submit', (e) => {
        // prevent default action
        e.preventDefault();
        // get the form data
        const formData = new FormData(form);
        // get the form data as an object
        const data = Object.fromEntries(formData);
        // get the password length
        const length = data.length;
        // get the checkbox values
        const uppercase = data.uppercase;
        const lowercase = data.lowercase;
        const numbers = data.numbers;
        const symbols = data.symbols;
        // create a password variable
        let password = '';
        // create a character set variable
        let characterSet = '';
        // create a character set for uppercase letters
        const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        // create a character set for lowercase letters
        const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        // create a character set for numbers
        const numberSet = '0123456789';
        // create a character set for symbols
        const symbolSet = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
        // check if uppercase is checked
        if(!uppercase && !lowercase && !numbers && !symbols) {
            // alert the user to check at least one checkbox
            alert('Please check at least one checkbox');
            // return to exit the function
            return;
        }
        if (uppercase) {
            // add uppercase letters to character set
            characterSet += uppercaseLetters;
        }
        // check if lowercase is checked
        if (lowercase) {
            // add lowercase letters to character set
            characterSet += lowercaseLetters;
        }
        // check if numbers is checked
        if (numbers) {
            // add numbers to character set
            characterSet += numberSet;
        }
        // check if symbols is checked
        if (symbols) {
            // add symbols to character set
            characterSet += symbolSet;
        }
        // loop through the character set
        for (let i = 0; i < length; i++) {
            // get a random character from the character set
            const character = characterSet.charAt(Math.floor(Math.random() * characterSet.length));
            // add the character to the password
            password += character;
        }
        // log the password to the console
        console.log(password);
        // get the password input
        const passwordInput = document.getElementById('password');
        // set the password input value
        for (let i = 0; i < length; i++) {
            passwordInput.value = password;
        }
        //save the password to the clipboard and alert the user
        navigator.clipboard.writeText(password).then(() => {
            alert('Password copied to clipboard');
        }); 
    });