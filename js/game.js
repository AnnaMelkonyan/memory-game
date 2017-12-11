
var Memory = {

	init: function(cards){
		this.$game = $(".game");
		this.$modal = $(".modal");
		this.$overlay = $(".modal-overlay");
		this.$restartButton = $("button.restart");
		this.cardsArray = $.merge(cards, cards);
		this.shuffleCards(this.cardsArray);
		this.setup();
	},

	shuffleCards: function(cardsArray){
		this.$cards = $(this.shuffle(this.cardsArray));
	},

	setup: function(){
		this.html = this.buildHTML();
		this.$game.html(this.html);
		this.$memoryCards = $(".card");
		this.binding();
		this.paused = false;
   		this.guess = null;
	},

	binding: function(){
		this.$memoryCards.on("click", this.cardClicked);
		this.$restartButton.on("click", $.proxy(this.reset, this));
	},

	cardClicked: function(){
		var _ = Memory;
		var $card = $(this);
		if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
			$card.find(".inside").addClass("picked");
			if(!_.guess){
				_.guess = $(this).attr("data-id");
			} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
				$(".picked").addClass("matched");
				_.guess = null;
			} else {
				_.guess = null;
				_.paused = true;
				setTimeout(function(){
					$(".picked").removeClass("picked");
					Memory.paused = false;
				}, 600);
			}
			if($(".matched").length == $(".card").length){
				_.win();
			}
		}
	},
	
	win: function(){
		this.paused = true;
		setTimeout(function(){
			Memory.showModal();
			Memory.$game.fadeOut();
		}, 1000);

		
		
	},

	showModal: function(){
		this.$overlay.show();
		this.$modal.fadeIn("slow");
	},

	hideModal: function(){
		this.$overlay.hide();
		this.$modal.hide();
	},

	reset: function(){
		this.hideModal();
		this.shuffleCards(this.cardsArray);
		this.setup();
		this.$game.show("slow");
	},

	shuffle: function(array){
		var counter = array.length, temp, index;
	  
	   	while (counter > 0) {
        	index = Math.floor(Math.random() * counter);	
        	counter--;
        	temp = array[counter];
        	array[counter] = array[index];
        	array[index] = temp;
	    }
	    return array;
	},

	buildHTML: function(){
		var frag = '';
		this.$cards.each(function(k, v){
		frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
				<div class="front"><img src="'+ v.img +'"\
				alt="'+ v.name +'" /></div>\
				<div class="back"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/codepen-logo.png"\
				alt="Codepen" /></div></div>\
				</div>';
		});
	
		return frag;
	}

	

	
};


var animals= [
	{
		name: "dog",
		img: "https://postfeed.net/wp-content/uploads/2017/04/postfeed.net_800x530x177523503.jpg.pagespeed.ic_.3nuvgzhlab-800x530.jpg",
		id: 1,
	},
	{
		name: "cat",
		img: "http://www.tridanim.com/images/www.wallpaperhd.pk/wp-content/uploads/2015/12/cute-little-cat-wallpaper.jpg",
		id: 2
	},
	{
		name: "rabbit",
		img: "http://www.thegryphon.co.uk/wp-content/uploads/2017/07/florida-white.jpg",
		id: 3
	},
	{
		name: "hamstres",
		img: "http://kjul1047.com/wp-content/uploads/sites/158/funny-hamsters.jpg",
		id: 4
	}, 
	{
		name: "chick",
		img: "https://i.cbc.ca/1.3786298.1475259380!/fileImage/httpImage/image.jpeg_gen/derivatives/original_620/baby-chicken-stock-photo.jpeg",
		id: 5
	},
	{
		name: "fish",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmMWah_CG-PKlLJCAJUyHDrzNoCRWpU-xCPkBqcRdF9J8cZ2y0",
		id: 6
	},
]

var flowers =  [
	{
	name: "blueRose",
	img: "https://i.pinimg.com/736x/8a/c8/0d/8ac80d5304abdcb1566e6f06e4299880--blue-roses-rose-flowers.jpg",
	id: 1,
	},
	{
		name: "lotos",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYE44Ll4jLkchbbTAFhBj6-0CDZtkY7BQ0EARYgW2iVkD-sNC",
		id: 2
	},
	{
		name: "redFlower",
		img: "http://cdn2.stylecraze.com/wp-content/uploads/2013/07/dahlia-flowers.jpg",
		id: 3
	},
	{
		name: "purpleFlower",
		img: "https://cdn.pixabay.com/photo/2013/11/23/01/46/small-flower-216260_960_720.jpg",
		id: 4
	}, 
	{
		name: "pinkFlower",
		img: "https://cdn.pixabay.com/photo/2010/12/13/09/57/northwest-1968_960_720.jpg",
		id: 5
	},
	{
		name: "whiteFlower",
		img: "https://maxpull-tlu7l6lqiu.stackpathdns.com/wp-content/uploads/2017/01/zone-5-gardenia-400x267.jpg",
		id: 6
	},
	{
		name: "blueFlower",
		img: "https://i.pinimg.com/736x/42/57/74/425774f7602fb65cd57596d51a560dd5--dahlia-flowers-flowers-garden.jpg",
		id: 7
	},
	{
		name: "oangeFlower",
		img: "https://upload.wikimedia.org/wikipedia/commons/4/41/Orange_flower_%287433774546%29.jpg",
		id: 8
	},
	{
		name: "red",
		img: "https://i.pinimg.com/736x/6a/12/01/6a120139a531ce04608db495e2b51d0b--red-flowers-flowers-garden.jpg",
		id: 9
	}
];

var fruits = [
	{
		name: "apple",
		img: "https://www.womenshealthmag.com/sites/womenshealthmag.com/files/2015/08/04/shutterstock_127612211_0_0.jpg",
		id: 1,
	},
	{
		name: "orange",
		img: "http://frutasfaustino.net/wp-content/uploads/2015/03/naranja.jpg",
		id: 2
	},
	{
		name: "avokado",
		img: "https://parentinghealthybabies.com/wp-content/uploads/2013/12/Winter-fruits-for-Kids-Avocado.jpg",
		id: 3
	},
	{
		name: "strawberry",
		img: "https://2.bp.blogspot.com/-z1sId3Z8cXQ/V1cv1hXSipI/AAAAAAAAGoI/7A36xhNDfugW5y84WspxGAIVDNBJhkcsgCLcB/s1600/Dollarphotoclub_41392100.jpg",
		id: 4
	}, 
	{
		name: "peach",
		img: "http://sweetfrog.com/images/uploads/updated-flavors/Georgia-Peach.jpg",
		id: 5
	},
	{
		name: "pineapple",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiyGagFmI4bH46pDe3DxMU0lw-TDDGRqNI11WENFT2sKCs5nqQ",
		id: 6
	},
    {
        name: "piar",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR77YDDZZdDl2PE3dIY710LLZnAXsQ5f41unvnbpAet9TN7j7zg",
        id: 7
    },
    {
        name: "pomegranat",
        img: "http://static1.squarespace.com/static/5706b5c1746fb94121bb2b3f/5994b0db37c581d2297774ac/57b4aa4320099e493d14e420/1502923357769/pomegranate.jpg?format=1000w",
        id: 8
    },
    {
        name: "mango",
        img: "https://www.specialfruit.com/en/thumbnail/productThumbBig/product-1422538408/mango-by-air.jpg",
        id: 9
    },
    {
        name: "blackberry",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNqnEdFfqo1hd8_PutZ1-ooM78t1dlP5cHqA4cJmSwNj7WHGAJ",
		id: 10        
	},
    {
        name: "respberry",
        img: "https://i0.wp.com/www.healthfitnessrevolution.com/wp-content/uploads/2016/02/ThinkstockPhotos-465161705.jpg?resize=685%2C511",
        id: 11
    },
    {
        name: "mandarin",
        img: "https://www.evaveda.com/wp-content/uploads/2014/05/shutterstock_906771821.jpg",
        id: 12
    }
];

let count = 0;
let rope = 0;

function timer(){
	count++;
	
	setTimeout('timer()',1000) ;
	if(count == 60){
		rope++;

		count = 0;
	}
	
	console.log(rope);
	console.log(count);

}
function firstLevel(){
	Memory.init(animals);
	timer();
	
	
	
	
}	

function secondLevel(){
	Memory.init(flowers);
	timer();
	
}

function thirdLevel() {
	Memory.init(fruits);
	timer();
	
}

	
$(document).ready(function(){
	$('.carousel').carousel();
  });