var showAll = document.querySelector('#all');
var portret = document.querySelector('#portret');
var story = document.querySelector('#story');
var report = document.querySelector('#report');
var projects = document.querySelector('#projects');

var elem = document.querySelectorAll('.photo__img');

function allPhotos() {
    for (i = 0; i < elem.length; i++) {
        elem[i].classList.remove("hide");
    }
}

showAll.onclick = allPhotos;

document.querySelector('.btn-show-photo').onclick = allPhotos;

portret.onclick = function () {
    for (i = 0; i < elem.length; i++) {
        if (elem[i].getAttribute('data-photo') != 'портрет') {
            elem[i].classList.add("hide");
        }
        if (elem[i].getAttribute('data-photo') == 'портрет') {
            elem[i].classList.remove("hide");
        }
    }
}
story.onclick = function () {
    for (i = 0; i < elem.length; i++) {
        if (elem[i].getAttribute('data-photo') != 'история') {
            elem[i].classList.add("hide");
        }
        if (elem[i].getAttribute('data-photo') == 'история') {
            elem[i].classList.remove("hide");
        }
    }
}
report.onclick = function () {
    for (i = 0; i < elem.length; i++) {
        if (elem[i].getAttribute('data-photo') != 'репортаж') {
            elem[i].classList.add("hide");
        }
        if (elem[i].getAttribute('data-photo') == 'репортаж') {
            elem[i].classList.remove("hide");
        }
    }
}
projects.onclick = function () {
    for (i = 0; i < elem.length; i++) {
        if (elem[i].getAttribute('data-photo') != 'проекты') {
            elem[i].classList.add("hide");
        }
        if (elem[i].getAttribute('data-photo') == 'проекты') {
            elem[i].classList.remove("hide");
        }
    }
}

var search = document.querySelector('.search');
var searchInput = document.querySelector('.search-input');

search.onclick = function () {
    search.classList.add('hide');
    searchInput.classList.remove('hide');
    searchInput.style.width = '200px';
}
searchInput.onblur = function () {
    search.classList.remove('hide');
    searchInput.classList.add('hide');
}
