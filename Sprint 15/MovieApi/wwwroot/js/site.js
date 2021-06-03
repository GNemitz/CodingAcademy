const uri = 'api/Movies';
let movies = [];

function getMovies() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayMovies(data))
        .catch(error => console.error('Unable to get movies.', error));
}

function addMovie() {
    const addTitleTextbox = document.getElementById('add-title');
    //const addGenreTextbox = document.getElementById('add-genre');
    const addGenreTextbox = document.getElementById('add-genre');

    const movie = {
        watched: false,
        title: addTitleTextbox.value.trim(),
        genre: addGenreTextbox.value.trim()
    };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify(movie)
    })
        .then(response => response.json())
        .then(() => {
            getMovies();
            addTitleTextbox.value = '';
            addGenreTextbox.value = '';
        })
        .catch(error => console.error('Unable to add movie.', error));
}

function deleteMovie(id) {
    fetch(`${uri}/${id}`, {
        method: 'DELETE'
    })
        .then(() => getMovies())
        .catch(error => console.error('Unable to delete movie.', error));
}

function displayEditForm(id) {
    const movie = movies.find(movie => movie.id === id);

    document.getElementById('edit-id').value = movie.id;
    document.getElementById('edit-title').value = movie.title;
    document.getElementById('edit-genre').value = movie.genre;
    document.getElementById('edit-watched').checked = movie.watched;
    document.getElementById('editForm').style.display = 'block';
}

function updateMovie() {
    const movieId = document.getElementById('edit-id').value;
    const movie = {
        id: parseInt(movieId, 10),
        title: document.getElementById('edit-title').value.trim(),
        genre: document.getElementById('edit-genre').value.trim(),
        watched: document.getElementById('edit-watched').checked
    };

    fetch(`${uri}/${movieId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    })
    .then(() => getMovies())
    .catch(error => console.error('Unable to update movie.', error));

    closeInput();

    return false;
}

function closeInput() {
    document.getElementById('editForm').style.display = 'none';
}

function _displayCount(movieCount) {
    const title = (movieCount === 1) ? 'movie' : 'movies';

    document.getElementById('counter').innerText = `${movieCount} ${title}`;
}

function _displayMovies(data) {
    const tBody = document.getElementById('movies');
    tBody.innerHTML = '';

    _displayCount(data.length);

    const button = document.createElement('button');

    data.forEach(movie => {
        let watchedCheckbox = document.createElement('input');
        watchedCheckbox.type = 'checkbox';
        watchedCheckbox.disabled = true;
        watchedCheckbox.checked = movie.watched;

        let editButton = button.cloneNode(false);
        editButton.innerText = 'Edit';
        editButton.setAttribute('onclick', `displayEditForm(${movie.id})`);

        let deleteButton = button.cloneNode(false);
        deleteButton.innerText = 'Delete';
        deleteButton.setAttribute('onclick', `deleteMovie(${movie.id})`);

        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        let textNode = document.createTextNode(movie.title);
        td1.appendChild(textNode);

        let td2 = tr.insertCell(1);
        let textNode1 = document.createTextNode(movie.genre);
        td2.appendChild(textNode1);

        let td3 = tr.insertCell(2);
        td3.appendChild(watchedCheckbox);

        let td4 = tr.insertCell(3);
        td4.appendChild(editButton);

        let td5 = tr.insertCell(4);
        td5.appendChild(deleteButton);
    });

    movies = data;
}