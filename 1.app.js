const searchSongs = () => {
    const searchText = document.getElementById('search-field').value;

    url = `https://api.lyrics.ovh/suggest/${searchText}`
    console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
}