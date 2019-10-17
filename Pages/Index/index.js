var i;

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

