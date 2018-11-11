function Card(someArray, name, suit, image) {
    this.name = name;
    this.suit = suit;
    this.image = image;
    someArray.push(this);
    this.pickCard = function () {
        var cardImg = document.createElement('img');
        cardImg.setAttribute('src', "" + this.image + "");
        cardImg.className = "m-1";
        cardImg.style.height = "200px";
        document.body.appendChild(cardImg);
    }
}

var myArray = [];


var aHeart = new Card(myArray, 'Ace', 'Hearts', 'img/AH.png');
var aSpade = new Card(myArray, 'Ace', 'Spades', 'img/AS.png');
var aDiamond = new Card(myArray, 'Ace', 'Diamonds', 'img/AD.png');
var aClub = new Card(myArray, 'Ace', 'Clubs', 'img/AC.png');

var kHeart = new Card(myArray, 'King', 'Hearts', 'img/KH.png');
var kSpade = new Card(myArray, 'King', 'Spades', 'img/KS.png');
var kDiamond = new Card(myArray, 'King', 'Diamonds', 'img/KD.png');
var kClub = new Card(myArray, 'King', 'Clubs', 'img/KC.png');

var qHeart = new Card(myArray, 'Queen', 'Hearts', 'img/QH.png');
var qSpade = new Card(myArray, 'Queen', 'Spades', 'img/QS.png');
var qDiamond = new Card(myArray, 'Queen', 'Diamonds', 'img/QD.png');
var qClub = new Card(myArray, 'Queen', 'Clubs', 'img/QC.png');

var jHeart = new Card(myArray, 'Jack', 'Hearts', 'img/JH.png');
var jSpade = new Card(myArray, 'Jack', 'Spades', 'img/JS.png');
var jDiamond = new Card(myArray, 'Jack', 'Diamonds', 'img/JD.png');
var jClub = new Card(myArray, 'Jack', 'Clubs', 'img/JC.png');

var tenHeart = new Card(myArray, 10, 'Hearts', 'img/10H.png');
var tenSpade = new Card(myArray, 10, 'Spades', 'img/10S.png');
var tenDiamond = new Card(myArray, 10, 'Diamonds', 'img/10D.png');
var tenClub = new Card(myArray, 10, 'Clubs', 'img/10C.png');

var nineHeart = new Card(myArray, 9, 'Hearts', 'img/9H.png');
var nineSpade = new Card(myArray, 9, 'Spades', 'img/9S.png');
var nineDiamond = new Card(myArray, 9, 'Diamonds', 'img/9D.png');
var nineClub = new Card(myArray, 9, 'Clubs', 'img/9C.png');

var eightHeart = new Card(myArray, 8, 'Hearts', 'img/8H.png');
var eightSpade = new Card(myArray, 8, 'Spades', 'img/8S.png');
var eightDiamond = new Card(myArray, 8, 'Diamonds', 'img/8D.png');
var eightClub = new Card(myArray, 8, 'Clubs', 'img/8C.png');

var sevenHeart = new Card(myArray, 7, 'Hearts', 'img/7H.png');
var sevenSpade = new Card(myArray, 7, 'Spades', 'img/7S.png');
var sevenDiamond = new Card(myArray, 7, 'Diamonds', 'img/7D.png');
var sevenClub = new Card(myArray, 7, 'Clubs', 'img/7C.png');

var sixHeart = new Card(myArray, 6, 'Hearts', 'img/6H.png');
var sixSpade = new Card(myArray, 6, 'Spades', 'img/6S.png');
var sixDiamond = new Card(myArray, 6, 'Diamonds', 'img/6D.png');
var sixClub = new Card(myArray, 6, 'Clubs', 'img/6C.png');

var fiveHeart = new Card(myArray, 5, 'Hearts', 'img/5H.png');
var fiveSpade = new Card(myArray, 5, 'Spades', 'img/5S.png');
var fiveDiamond = new Card(myArray, 5, 'Diamonds', 'img/5D.png');
var fiveClub = new Card(myArray, 5, 'Clubs', 'img/5C.png');

var fourHeart = new Card(myArray, 4, 'Hearts', 'img/4H.png');
var fourSpade = new Card(myArray, 4, 'Spades', 'img/4S.png');
var fourDiamond = new Card(myArray, 4, 'Diamonds', 'img/4D.png');
var fourClub = new Card(myArray, 4, 'Clubs', 'img/4C.png');

var threeHeart = new Card(myArray, 3, 'Hearts', 'img/3H.png');
var threeSpade = new Card(myArray, 3, 'Spades', 'img/3S.png');
var threeDiamond = new Card(myArray, 3, 'Diamonds', 'img/3D.png');
var threeClub = new Card(myArray, 3, 'Clubs', 'img/3C.png');

var twoHeart = new Card(myArray, 2, 'Hearts', 'img/2H.png');
var twoSpade = new Card(myArray, 2, 'Spades', 'img/2S.png');
var twoDiamond = new Card(myArray, 2, 'Diamonds', 'img/2D.png');
var twoClub = new Card(myArray, 2, 'Clubs', 'img/2C.png');


function addRandomCard() {
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    console.log(Math.floor(Math.random() * myArray.length));
    rand.pickCard();
}
