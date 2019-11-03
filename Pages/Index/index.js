//global variable for: for loops
var i;

//I had to set a timeout function, otherwise the jquery file would load in later. Yes the jquery file IS BEFORE this one (not the best solution I agree)
setTimeout(function(){
    const searchInput = document.getElementById("menu-search-input");

    searchInput.addEventListener("focus",changePlaceholderOfSearchInput);
    searchInput.addEventListener("focusout",reversePlaceholderToDefault);

    function changePlaceholderOfSearchInput()
    {
        searchInput.placeholder="Search in products...";
    }

    function reversePlaceholderToDefault()
    {
        searchInput.placeholder="Click to open...";
    }
}, 100);


