const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];


  /*=======================================
    Est-ce que tous les livres ont été 
    au moins empruntés une fois ?
 =======================================*/
  bookRented = false;
  books.forEach(item => {
    
    if (item.rented > 1){
        bookRented = true;
    }
})
if (bookRented == true){
    console.log('tous les livres ont été au moins empruntés une fois')
}

 /*=======================================
    Quel est livre le plus emprunté ?
 =======================================*/

let maxRentedBook = books.reduce((max, book) => max.rented > book.rented ? max : book);
console.log(`Le livre le plus loué est ${maxRentedBook.title}`);

 /*=======================================
    Quel est le livre le moins emprunté ?
 =======================================*/

let minRentedBook = books.reduce((min, book) => min.rented < book.rented ? min : book);
console.log(`Le livre le moin loué est ${minRentedBook.title}`);

 /*=======================================
    Trouve le livre avec l'ID: 873495 ;
 =======================================*/

function check_id(book) {
    return book.id == 873495;
}
let bookId = books.find(check_id)
console.log(`Le livre avec l'id 873495 est ${bookId.title}`);


/*=======================================
    Supprime le livre avec l'ID: 133712;
 =======================================*/

books.forEach(book =>  book.id == 133712 ? delete book.b : null)


 function compareTitles( a, b ) {
    if ( a.title < b.title ){
      return -1;
    }
    if ( a.title > b.title ){
      return 1;
    }
    return 0;
  }
  books.sort(compareTitles)
  console.log(`Tableau des livres triés par ordre alphabétique de titre :`);
  console.log(books)
  let output = "<h5>Livres classés par ordre alphabétique par titre: :</h5> <br />";
  for (let i =0; i < books.length; i++){
    output += books[i].title + ", id:  " + books[i].id + ", rented " + books[i].rented + " times  <br />";
  }
  $('#result6').html(output);

});
