// get elements

const body = document.body;
const input = document.querySelector('input[type=text]');
const overlay = document.querySelector('.overlay');

// functions

function showFloater() {
    body.classList.add('show-floater');
    console.log('Focus');
}

function closeFloater() {
    if (body.classList.contains('show-floater')) {
    body.classList.remove('show-floater');
        console.log('closing show floater');
    }else {
        console.log('floater already closed');
    }
}

// event listeners

input.addEventListener('focusin', showFloater);
input.addEventListener('focusout', closeFloater);
overlay.addEventListener('click', closeFloater);

// -------------------------------

// things needed

const bookmarkList = document.querySelector('.bookmarks-list');
const bookmarkForm = document.querySelector('.bookmark-form');
const bookmarkInput = bookmarkForm.querySelector('input[type=text]');
const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
const apiUrl = 'https://opengraph.io/api/1.0/site';
const appId = '59750136b3c8780b0080643e';

const myUrl = encodeURIComponent('https://mynintendonews.com');


fillBookmarksList(bookmarks);

// functions



function createBookmark(e) {
    event.preventDefault();
    
    if(!bookmarkInput.value) {
        alert('You must enter a URL!');
        return;
    }
    
    const url = encodeURIComponent(bookmarkInput.value);
    fetch(apiUrl + '/' + url + '?app_id=' + appId)
    .then(response => response.json())
    .then(data => {
        const title = data.hybridGraph.title;
        console.log(data.hybridGraph.title);
        
        const bookmark = {
        title: data.hybridGraph.title,
        image: data.hybridGraph.image,
        link: data.hybridGraph.url
    };
    bookmarks.push(bookmark);
    fillBookmarksList(bookmarks);
    storeBookmarks(bookmarks);
    bookmarkForm.reset();
    })
    
    .catch(error => {
          alert('There was a problem.  Check the URL or try again!'); 
    });
    
    
}
    
function fillBookmarksList(bookmarks = []) {
    const bookmarksHTML = bookmarks.map((bookmark, i) => {
        console.log(bookmarks.title);
        return `
         <div class="bookmark" data-id="${i}">
            <div class="img" style="background-image:url('${bookmark.image}')"></div>
            <a href="${bookmark.link}" class="title">${bookmark.title}</a>
        
        <span class="bookmark glyphicon glyphicon-remove"></span>
        </div>
          `;
    }).join('');
    console.log(bookmarksHTML);
    bookmarkList.innerHTML = bookmarksHTML;  
    
}

function storeBookmarks (bookmarks = []) {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks)); 
} 

function removeBookmark(e) {
   
    if (!e.target.matches('.glyphicon-remove')) return;
   
    console.log('hello');
    
    const index = e.target.parentNode.dataset.id;
    bookmarks.splice(index, 1);
    storeBookmarks(bookmarks);
    fillBookmarksList(bookmarks);
    
    console.log(index);
}
    

//event listeners

bookmarkForm.addEventListener('submit', createBookmark);
bookmarkList.addEventListener('click', removeBookmark);