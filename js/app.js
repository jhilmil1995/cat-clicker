'use strict'

var menu = document.querySelector('.menu');
var menuContent = document.querySelector('.menu-content');
var imgs = ["cat1", "cat2", "cat3", "cat4", "cat5"];

createNav();
createImg();
function createNav() {
    for (var thisImg of imgs) {

        var li = document.createElement('li');
        
        // Set text of element
        li.textContent = thisImg;
        li.setAttribute('class', 'menu-btn');
        li.setAttribute('class', thisImg);
        // Append this element to its parent
        menu.appendChild(li);
    }
}

function createImg() {
    for (var thisImg of imgs) {
        var img = document.createElement('img');
        // Set text of element
        img.src= './img/' +thisImg + '.jpg';
        img.alt = thisImg;

        var num = 0
       
        var h1 = document.createElement('h1');
        h1.textContent = 'Click count = ' + num;

        var countDiv = document.createElement('div');
        countDiv.appendChild(h1);

        img.addEventListener('click', (function(numCopy, h1Copy) {
            return function() {
                h1Copy.textContent = 'Click count = ' + numCopy++;
            };
        })(num,h1));


        var div = document.createElement('div');
        div.setAttribute('class', 'article-content ' + thisImg);
        div.appendChild(countDiv);
        div.appendChild(img);

        // Append this element to its parent
        menuContent.appendChild(div);
    }
}

function showContent(type) {
    var listArticleContent = document.getElementsByClassName("article-content");
    for (var i=0; i<listArticleContent.length; i++){
        listArticleContent[i].style.display = "none";
    }
    listArticleContent = Array.prototype.filter.call(listArticleContent, function(element, index, aElements) {
        var classNames = element.className.split(' ');
        return classNames.indexOf(type) > -1;
    });
      listArticleContent[0].style.display = "block";
}
  
menu.addEventListener('click', function(e) {
    showContent(e.target.classList[0]);
}); 

showContent('about');