var dropdown = document.getElementById('dropdown');
var searchBtn = document.getElementById('search-btn');
var searchBar = document.getElementById('search-bar');

var items = ['SCORPION', 'FORTUNER', 'DEFENDER 110', 'MAYBACH GLS600', 'AUDI RS5 SPORT', 'BMW 7 SERIES', 'VERNA', 'ENDEAVOUR SPORT', 'ROLLS ROYCE PHANTOM'];

function showDropdown() {
    var inputValue = searchBar.value.toLowerCase();
    dropdown.innerHTML = '';

    for (var i = 0; i < items.length; i++) {
        var item = items[i].toLowerCase();

        if (item.indexOf(inputValue) !== -1) {
            var option = document.createElement('div');
            option.textContent = items[i];
            option.className = 'dropdown-item';
            dropdown.appendChild(option);
        }
    }
    if (dropdown.children.length > 0) {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}

searchBtn.addEventListener('click', function () {
    showDropdown();
});

searchBar.addEventListener('input', function () {
    showDropdown();
});

dropdown.addEventListener('click',function(event) {
    if(event.target.className !== 'dropdown-item') {
    searchBar.value = event.target.textContent;
    dropdown.style.display = 'none';
}
});


document.addEventListener('click', function (event) {
    if (!event.target.matches('#search-bar') && !event.target.matches('.dropdown-item')) {
        dropdown.style.display = 'none';
    }
    });

    searchBtn.addEventListener('click', function () {
        // Assuming you want to display the first item in the dropdown when the button is clicked
        if (dropdown.children.length > 0) {
            searchBar.value = dropdown.children[0].textContent;
            dropdown.style.display = 'none';
        }
    });
    

