function search() {
    let input = document.getElementById('search-input');
    let term = input.value.trim();
    if (term) {
        term = encodeURIComponent(term + '    ' + 'site:saferules.github.io');
        window.location.href = 'https://cn.bing.com/search?q=' + term;
        input.value = '';
    }
}

function onKeyDownForSearch(event) {
    if (event.key === 'Enter') {
        search();
    }
}

function onClickSearchIcon(elt) {
    search();
}
