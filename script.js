let inputTitle = document.getElementById("inputTitle");
let inputAuthor = document.getElementById("inputAuthor");
let inputPublisher = document.getElementById("inputPublisher");
let inputYear = document.getElementById("inputYear");
let inputPages = document.getElementById("inputPages");
let inputSeries = document.getElementById("inputSeries");
let inputSeriesNum = document.getElementById("inputSeriesNum");
let inputIsbn = document.getElementById("inputIsbn");
let btnSubmit = document.getElementById("submitForm");

let inputs = document.getElementsByClassName("formInput");
let result = document.getElementById("resultTable");

class Book {
    constructor(title, author, publisher, year, pages, series, seriesNum, isbn){
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.year = year;
        this.pages = pages;
        this.series = series || "";
        this.seriesNum = seriesNum || "";
        this.isbn = isbn;
    }
}

let books = [];
let booksSorted = [];

document.getElementById("btnBook").addEventListener("click", function(){
    document.getElementById("formWrap2").classList.add('hidden');   
    document.getElementById("formWrap1").classList.remove('hidden');
})

document.getElementById("btnNovel").addEventListener("click", function(){
    document.getElementById("formWrap1").classList.add('hidden');
    document.getElementById("formWrap2").classList.remove('hidden');
})

btnSubmit.addEventListener("click", function(e){
    e.preventDefault();
    let book = new Book();
    book.author = inputAuthor.value;
    book.title = inputTitle.value;
    book.publisher = inputPublisher.value;
    book.year = inputYear.value;
    book.series = inputSeries.value;
    book.seriesNum = inputSeriesNum.value;
    book.pages = inputPages.value;
    book.isbn = inputIsbn.value;

    console.log(book);
    books.push(book);
    writeInTable(books);
    for(let i = 0; i < inputs.length; i++){
        inputs[i].value = "";
    }
});

document.getElementById("sortYear").addEventListener("click", function(){
    booksSorted = books.sort((x, y) => { return x - y});
    writeInTable(booksSorted);
})
function writeInTable(books){
    result.innerHTML = `
    <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Publisher</th>
        <th>Year</th>
        <th>Pages</th>
        <th>Series</th>
        <th>Series Number</th>
        <th>ISBN</th>
    </tr>
    `;

    books.forEach(book => {
        result.innerHTML += `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.publisher}</td>
            <td>${book.year}</td>
            <td>${book.pages}</td>
            <td>${book.series}</td>
            <td>${book.seriesNum}</td>
            <td>${book.isbn}</td>
        </tr>
        `
    });
}