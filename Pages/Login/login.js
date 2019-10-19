var i;

//Navbar search bar 
const searchInput = document.getElementById("menu-search-input");

searchInput.addEventListener("focus",changePlaceholderOfSearchInput);
searchInput.addEventListener("focusout",reversePlaceholderToDefault);

function changePlaceholderOfSearchInput()
{
    searchInput.placeholder="Search in products...";
}

function reversePlaceholderToDefault()
{
    searchInput.placeholder="Click to open..."
}
//Navbar search bar END

//Navigation on the login menu
const loginBoxMenuButtons = document.getElementsByClassName("login-box-menu-button");

const menuSignInButton = loginBoxMenuButtons[0];

//Setting a default style for the menuSignInButton
menuSignInButton.style.backgroundColor = "yellowgreen";
menuSignInButton.style.border = "3px solid slateblue";

const menuSignUpButton = loginBoxMenuButtons[1];

menuSignInButton.addEventListener("click", setSignInButtonActive);
menuSignUpButton.addEventListener("click", setSignUpButtonActive);


//Content of the login box
//odd elements are the login/sign in elements
const signInInputs = document.querySelectorAll(".login-box-input:nth-child(odd)");

//even elements are the sign up elements
const signUpInputs = document.querySelectorAll(".login-box-input:nth-child(even)");

const loginButtons = document.getElementsByClassName("login-box-button");

const loginButton = loginButtons[0];
const signUpButton = loginButtons[1];

const errorLabels = document.getElementsByClassName("login-box-error-message");


function setSignInButtonActive()
{
    if( menuSignInButton.style.backgroundColor != "yellowgreen")
    {
        menuSignInButton.style.backgroundColor = "yellowgreen";
        menuSignInButton.style.border = "3px solid slateblue";

        menuSignUpButton.style.backgroundColor = "cornflowerblue";
        menuSignUpButton.style.border = "2px solid  slateblue";

        for(elem of signInInputs)
        {
            elem.style.display = "block";
            elem.value = "";
        }
        
        //hiding the other menu's elements and setting the value to ""
        for(elem of signUpInputs)
        {
            elem.style.display = "none";
            elem.value = "";
        }

        for(elem of errorLabels)
        {
            elem.value = "";
        }

        loginButton.style.display = "block";
        signUpButton.style.display = "none";
    }
}

function setSignUpButtonActive()
{
    if(menuSignUpButton.style.backgroundColor != "yellowgreen")
    {
        menuSignUpButton.style.backgroundColor = "yellowgreen";
        menuSignUpButton.style.border = "3px solid slateblue";

        menuSignInButton.style.backgroundColor = "cornflowerblue";
        menuSignInButton.style.border = "2px solid  slateblue";

        //hiding the other menu's elements and setting the value to ""
        for(elem of signInInputs)
        {
            elem.style.display = "none";
            elem.value= "";
        }
        
        for(elem of signUpInputs)
        {
            elem.style.display = "block";
            elem.value = "";
        }

        for(elem of errorLabels)
        {
            elem.value = "";
        }

        signUpButton.style.display = "block";
        loginButton.style.display = "none";
        
    }
}