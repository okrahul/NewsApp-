console.log("hello Rahul");
//Initialize 
let source = 'bbc-news';
let apikey = 'e7c9c843d470490790726e0916c1589e';
let id = 'google-news-in';


let newsAccordion = document.getElementById('newsAccordion');
// creat the get ajax
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`, true);

// xhr.open('GET', 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=e7c9c843d470490790726e0916c1589e', true);

xhr.onload = function () {
    if(this.status === 200){

       let json = JSON.parse(this.responseText);
       let articles = json.articles;
       console.log(articles);


       let newsHtml = " ";

       articles.forEach(function(element, index) {
        // console.log("this is");
          console.log(element, index);

           let news = `<div class="accordion-item">
                <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                    aria-expanded="true" aria-controls="collapse${index}">
                     ${element["title"]}
                </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                data-bs-parent="#newsAccordion">
                <div class="accordion-body">  ${element["content"]}. <a href="${element['url']}" target="_blank">Read more here</a> </div>
        </div>
      </div>  `;

      newsHtml += news;

    });


       newsAccordion.innerHTML = newsHtml;
    }
    else{
        console.log("Some error occured");
    }
}

xhr.send();










    


// grab the new 

      