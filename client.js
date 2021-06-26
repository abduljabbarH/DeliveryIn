//making a list array for the order summary a global variable and counter to be used later
let list=[];
let count =0;

let aragorn = {
	name: "Aragorn's Orc BBQ", //The name of the restaurant
	min_order: 20, //The minimum order amount required to place an order
	delivery_charge: 5, //The delivery charge for this restaurant
	//The menu
	menu: {
		//First category
		"Appetizers": {
			//First item of this category
			0: {
				name: "Orc feet",
				description: "Seasoned and grilled over an open flame.", //
				price: 5.50

			},
			1: {
				name: "Pickled Orc fingers",
				description: "Served with warm bread, 5 per order.",
				price: 4.00
			},
			2: { //Thank you Kiratchii
				name: "Sauron's Lava Soup",
				description: "It's just really spicy water.",
				price: 7.50
			},
			3: {
				name: "Eowyn's (In)Famous Stew",
				description: "Bet you can't eat it all.",
				price: 0.50
			},
			4: {
				name: "The 9 rings of men.",
				description: "The finest of onion rings served with 9 different dipping sauces.",
				price: 14.50
			}
		},
		"Combos": {
			5: {
				name: "Buying the Farm",
				description: "An arm and a leg, a side of cheek meat, and a buttered biscuit.",
				price: 15.99
			},
			6: {
				name: "The Black Gate Box",
				description: "Lots of unidentified pieces. Serves 50.",
				price: 65.00
			},
			7: {//Thanks to M_Sabeyon
				name: "Mount Doom Roast Special with Side of Precious Onion Rings.",
				description: "Smeagol's favorite.",
				price: 15.75
			},
			8: { //Thanks Shar[TA]
				name: "Morgoth's Scorched Burgers with Chips",
				description: "Blackened beyond recognition.",
				price: 13.33
				
			},
			9: {
				name: "Slab of Lurtz Meat with Greens.",
				description: "Get it while supplies last.",
				price: 17.50
			},
			10: {
				name: "Rangers Field Feast.",
				description: "Is it chicken? Is it rabbit? Or...",
				price: 5.99
			}
		},
		"Drinks": {
			11: {
				name: "Orc's Blood Mead",
				description: "It's actually raspberries - Orc's blood would be gross.",
				price: 5.99
			},
			12: {
				name: "Gondorian Grenache",
				description: "A fine rose wine.",
				price: 7.99
			},
			13: {
				name: "Mordor Mourvedre",
				description: "A less-fine rose wine.",
				price: 5.99
			}
		}	
	}
};

let legolas = {
	name: "Lembas by Legolas",
	min_order: 15,
	delivery_charge: 3.99,
	menu: {
		"Lembas": {
			0: {
				name: "Single",
				description: "One piece of lembas.",
				price: 3
			},
			1: {
				name: "Double",
				description: "Two pieces of lembas.",
				price: 5.50
			},
			2: { 
				name: "Triple",
				description: "Three pieces, which should be more than enough.",
				price: 8.00
			}
		},
		"Combos": {
			3: {
				name: "Second Breakfast",
				description: "Two pieces of lembas with honey.",
				price: 7.50
			},
			4: {
				name: "There and Back Again",
				description: "All you need for a long journey - 6 pieces of lembas, salted pork, and a flagon of wine.",
				price: 25.99
			},
			5: {
				name: "Best Friends Forever",
				description: "Lembas and a heavy stout.",
				price: 6.60
			}
		}
	}
};

let frodo = {
	name: "Frodo's Flapjacks",
	min_order: 35,
	delivery_charge: 6,
	menu: {
		"Breakfast": { 
			0: {
				name: "Hobbit Hash",
				description: "Five flapjacks, potatoes, leeks, garlic, cheese.",
				price: 9.00
			},
			1: {
				name: "The Full Flapjack Breakfast",
				description: "Eight flapjacks, two sausages, 3 eggs, 4 slices of bacon, beans, and a coffee.",
				price: 14.00
			},
			2: { 
				name: "Southfarthing Slammer",
				description: "15 flapjacks and 2 pints of syrup.",
				price: 12.00
			}
			
		},
		"Second Breakfast": {
			3: {
				name: "Beorning Breakfast",
				description: "6 flapjacks smothers in honey.",
				price: 7.50
			},
			4: {
				name: "Shire Strawberry Special",
				description: "6 flapjacks and a hearty serving of strawberry jam.",
				price: 8
			},
			5: {
				name: "Buckland Blackberry Breakfast",
				description: "6 flapjacks covered in fresh blackberries. Served with a large side of sausage.",
				price: 14.99
			}
		},
		"Elevenses": {
			6: {
				name: "Lembas",
				description: "Three pieces of traditional Elvish Waybread",
				price: 7.70
			},
			7: {
				name: "Muffins of the Marish",
				description: "A variety of 8 different types of muffins, served with tea.",
				price: 9.00
			},
			8: {
				name: "Hasty Hobbit Hash",
				description: "Potatoes with onions and cheese. Served with coffee.",
				price: 5.00
			}
		},
		"Luncheon": {
			9: {
				name: "Shepherd's Pie",
				description: "A classic. Includes 3 pies.",
				price: 15.99
			},
			10: {
				name: "Roast Pork",
				description: "An entire pig slow-roasted over a fire.",
				price: 27.99
			},
			11: {
				name: "Fish and Chips",
				description: "Fish - fried. Chips - nice and crispy.",
				price: 5.99
			}
		},
		"Afternoon Tea": {
			12: {
				name: "Tea",
				description: "Served with sugar and cream.",
				price: 3
			},
			13: {
				name: "Coffee",
				description: "Served with sugar and cream.",
				price: 3.50
			},
			14: {
				name: "Cookies and Cream",
				description: "A dozen cookies served with a vat of cream.",
				price: 15.99
			},
			15: {
				name: "Mixed Berry Pie",
				description: "Fresh baked daily.",
				price: 7.00
			}
		},
		"Dinner": {
			16: {
				name: "Po-ta-to Platter",
				description: "Boiled. Mashed. Stuck in a stew.",
				price: 6
			},
			17: {
				name: "Bree and Apple",
				description: "One wheel of brie with slices of apple.",
				price: 7.99
			},
			18: {
				name: "Maggot's Mushroom Mashup",
				description: "It sounds disgusting, but its pretty good",
				price: 6.50
			},
			19: {
				name: "Fresh Baked Bread",
				description: "A whole loaf of the finest bread the Shire has to offer.",
				price: 6
			},
			20: {
				name: "Pint of Ale",
				description: "Yes, it comes in pints.",
				price: 5
			}
		},
		"Supper": {
			21: {
				name: "Sausage Sandwich",
				description: "Six whole sausages served on a loaf of bread. Covered in onions, mushrooms and gravy.",
				price: 15.99
			},
			22: {
				name: "Shire Supper",
				description: "End the day as you started it, with a dozen flapjacks, 5 eggs, 3 sausages, 7 pieces of bacon, and a pint of ale.",
				price: 37.99
			}
		}
	}
};
let restaurants = [aragorn, legolas,frodo];

//Here is where a dyanmically make my dropdown menu onload;
function inIt(){
	
	let myRestaurant = document.getElementById("res");

	for(let i=0;i<restaurants.length;i++){
		let option=document.createElement("option");
		option.value= restaurants[i].name;
		console.log(option.value);
		option.text=restaurants[i].name;
		myRestaurant.appendChild(option);

	}
}

//This is a variable that holds the previous restaurant
let preres;

//This Function is called every time a new restaurant is selected and display the info of the restaurant (i.e delviery charge)
function displayInfo(){

	// This if statment makesure that there are no orders in the current page before changing restaurants
	if (document.getElementById("final").childNodes.length!=0){

		//here I make sure that the user really wants to cancel the current order
		if(confirm("Are you sure you want to cancel your current order")==false){
			//the confirm alert returns false if the user changed his mind and i reset the selection value to the previous value
			document.getElementById("res").value=preres;
			return;
		}

	}

	//Here get the current restaurant select and store it in a variable 
	let res = document.getElementById("res").value;
	preres=res;
	console.log(res);
	let br = document.createElement("BR");
	
	// if select restaurant is clicked I reset the page
	if(res=="Select Restaurant"){	
		location.reload();
	}else{
		//here is where I iam looping through to see where the restaurant names from the slection and the array match
		for(let i=0;i<restaurants.length;i++){
			//Once I find the match I clear the current page first and reset all my values
			if(restaurants[i].name==res){
				list=[];
				document.getElementById("info").innerHTML ="";
				document.getElementById("meal").innerHTML="";
				document.getElementById("order").innerHTML="";
				document.getElementById("final").innerHTML="";
				count=0;

				//Here I am creating my divs for everything (i.e min_ord, and deleivery charge)
				let minOrd=document.createElement("div");
				let ord= document.createElement("span");
				ord.id=restaurants[i].name+" Order #";
				ord.append(restaurants[i].min_order.toFixed(2));
				minOrd.append("Minimum Order: $");
				minOrd.appendChild(ord);
			
				document.getElementById("info").appendChild(minOrd);

				let minDel=document.createElement("div");
				let del = document.createElement("span");
				del.id=restaurants[i].name+" del #";
				del.append(restaurants[i].delivery_charge.toFixed(2));
				minDel.append("Delivery charge: $ ");
				minDel.appendChild(del);
				
				document.getElementById("info").appendChild(minDel);

				//here I am calling my function to display the current restaurants menu
				displayMenu(restaurants[i]);
				//break out of loop when done
				break;
			}
		}
	}

}

//displaying menu of current restuarant
function displayMenu(res){

	//this counter is used as an id and is reset everytime a display menu is calle
	let count = 0;
	//putting the categorys in a array called menul
	let menul=Object.keys(res.menu);
	
	  
	for ( let i =0; i<menul.length;i++){

		//Putting each category into its on span and styling it
		let textc = document.createElement("span");
		textc.innerHTML = menul[i];
		textc.id=menul[i];
		textc.style.fontSize="xx-large";
		textc.style.color="#cccccc";

		//putting the item number into an array
		let itemsNum = Object.keys(res.menu[menul[i]]);

		//Here I making my Anchor links and styling them
		let links = document.createElement("A");
		links.setAttribute("href","#"+menul[i]);
		links.innerHTML=menul[i];
		links.style.color="#cccccc";


		//Placing my anchor links into my webpage in the info column
		document.getElementById("info").appendChild(document.createElement("br"));
		document.getElementById("info").appendChild(links);
	
		//Placing the categorys into my webpage in the meal column
		document.getElementById("meal").appendChild(textc);
		document.getElementById("meal").append(document.createElement("br")); 

		//Here I loop through each item and display there Value (i.e display item #0's name, description and price with and add button)
		for(let j = 0; j<itemsNum.length;j++){
			//here I make a button from an image plus giving it the id count that I declare at the begining of this function
			let button = document.createElement("IMG");
  			button.setAttribute("src", "add.jpg");
  			button.setAttribute("width", "20");
			button.setAttribute("height", "20");
			button.id=count;

			//Creating a div to hold name, description,price and the button (also giving it an id)
			let pdiv = document.createElement("div");
			pdiv.id=menul[i]+" Order"+count;

			//creating an price span and appending the items price
			let price = document.createElement("span");
			price.append(res.menu[menul[i]][count].price.toFixed(2));;
			
			//Creating a name div to hold the name
			let n = document.createElement("div");
			n.innerHTML= "name: "+res.menu[menul[i]][count].name;

			//creating a description div to hold the description
			let des = document.createElement("div");
			des.innerHTML ="  "+ "description: "+res.menu[menul[i]][count].description;

			// creating a div to hold the price and giving it an id 
			let pr = document.createElement("div");
			pr.append("  "+"price: $");pr.appendChild(price) ;
			pr.id="price"+count;

			
			//Appending my name, description,price and button and appending that to the meal colomn
			pdiv.appendChild(n); pdiv.appendChild(des); pdiv.appendChild(pr); pdiv.appendChild(button);
			document.getElementById("meal").appendChild(pdiv);
			document.getElementById("meal").append(document.createElement("br")); 
			
			//adding an event listener to my button to call a function
			document.getElementById(count).addEventListener("click",displayOrder);

			//incrementing my count that is being used as an id
			count++;
		}

		document.getElementById("meal").appendChild(document.createElement("br"));
	}
}



function displayOrder(event){
	// making a variable that the quantity of each item
	let q =1;
	 
	//finding out which button called the event
	let addb =event.srcElement;

	//here I make a  remove button from an image plus giving it the id count + rem 
	let remb = document.createElement("img");
	remb.setAttribute("src", "remove.jpg");
  	remb.setAttribute("width", "15");
	remb.setAttribute("height", "15");
	remb.id=addb.id+"rem";

	//I find the parent node of the button and clone it I also decided to remove the add button (design choice)
	let parent =addb.parentNode;
	let clone = parent.cloneNode(true);
	console.log(clone.childNodes[3]);
	clone.removeChild(clone.childNodes[3]);
	
	//here I make a div to hold the quantity of my items and did some extra stuff using span to make it easier to access later
	let quantity = document.createElement("div");
	let amount=document.createElement("span");
	amount.append(q);
	amount.id=clone.id +"why";
	quantity.append("quantity: ");quantity.appendChild(amount);

	//I appended the quantity and the remove button to the clone
	clone.appendChild(quantity);
	clone.appendChild(remb);
	
	//here I go into the for loop to make sure I dont coninously append the same item rather change the quantity value and return
	for(let i = 0;i<list.length;i++){
		if(list[i].id===clone.id){	
			q= ++list[i].count;
			document.getElementById(clone.id +"why").innerHTML=q;
			//calling displaySum whenever the same item is being added to the order
			displaySum(clone);
			return;
		}
	}

	clone.appendChild(document.createElement("br"));

	
	
	//pushing the order to the list created in line 1 of my code for manipulating and removing things much easier
	list.push({item: clone, count:q, id: clone.id, price: clone.childNodes[2].childNodes[1].textContent});

	//appending Iteam object in my list to the order column on my page
	document.getElementById("order").appendChild(list[list.length-1].item);
	clone.appendChild(document.createElement("br"));

	//Calling displaySum whenever a new item is being added to the order
	displaySum(clone);

	//This is the event listener for the remove button
	document.getElementById(remb.id).addEventListener("click", function(event) {
			
			//finding out which button called the event and getting its parent
			let ev = event.srcElement.parentNode;

			//going through a loop the size of list and remove an item or simply changing its quantity (Also called displaySum since the quantity is being changed)
			for (let j = 0;j<list.length;j++){
				if(list[j].item===ev){
					
					document.getElementById(list[j].item.id +"why").innerHTML=(--list[j].count);
					displaySum(clone);

				}
				if(list[j].count==0){
					document.getElementById("order").removeChild(list[j].item);
					list.splice(j,1);
				
					return;
				}
			}

	});


	
}



function displaySum(){
	
	//Here I am creating my submit button
	let submit = document.createElement("button");
	submit.innerHTML="submit";
	submit.id="submit";
	
	//Making a variable to hold the all the items final dollar amounf
	let subTotal = 0;

	//getting the delivery charge of the restaurant and th minimun order of the restaurant
	let del = document.getElementById("info").childNodes[1].childNodes[1].textContent;
	let minOrder = document.getElementById("info").childNodes[0].childNodes[1].textContent;

	//making a seperate div for the subtotal, delivery charge, hst, total charge and minimum ordr
	let sumdiv=document.createElement("div");
	sumdiv.id="subtotal";

	let deldiv=document.createElement("div");
	deldiv.id="deltotal";

	let taxdiv=document.createElement("div");
	taxdiv.id="taxtotal";

	let orddiv=document.createElement("div");
	orddiv.id="ordtotal";

	
	let mindiv=document.createElement("div");
	mindiv.id="mintotal";
	
	//Eveluating the subtotal
	for(let i=0;i<list.length;i++){
		subTotal+=list[i].price*list[i].count;
	} 

	
	//Making sure the everything is appenped to the final colum once and not multiple times
	if(count==0){
		document.getElementById("final").appendChild(document.createElement("br"));
		document.getElementById("final").appendChild(document.createElement("br"));
		document.getElementById("final").appendChild(sumdiv);
		document.getElementById("final").appendChild(deldiv);
		document.getElementById("final").appendChild(taxdiv);
		document.getElementById("final").appendChild(orddiv);
		document.getElementById("final").appendChild(mindiv);
		count++;
	}
	// if the total goes down to 0 resetting all the values to null if subtotal is 0;  
	if(subTotal==0){
		document.getElementById("subtotal").innerHTML="";
		document.getElementById("deltotal").innerHTML="";
		document.getElementById("taxtotal").innerHTML="";
		document.getElementById("ordtotal").innerHTML="";
		document.getElementById("mintotal").innerHTML="";

	}else{
		//Here is where I manipulate the inner html of each div 
		document.getElementById("subtotal").innerHTML="SubTotal:     $"+subTotal.toFixed(2) ;
		document.getElementById("deltotal").innerHTML="Delviery fee :$"+parseInt(del).toFixed(2)
		document.getElementById("taxtotal").innerHTML="HST:          $"+(subTotal*.1).toFixed(2);
		document.getElementById("ordtotal").innerHTML="Total:        $"+((subTotal*.1)+subTotal+parseInt(del)).toFixed(2);

		//Here is where I make sure the submit appears only when the subtotal reaches the minimum order amount;
		if(parseInt(minOrder)>subTotal){
			document.getElementById("mintotal").innerHTML="Add $" + ((parseInt(minOrder)-subTotal)).toFixed(2)+" more to order";
		}else{
			document.getElementById("mintotal").innerHTML="";
			document.getElementById("mintotal").appendChild(submit);

			//adding an event listner to the submit button
			document.getElementById("submit").addEventListener("click", function(event) {
				//making sure the user is okay with his final order
				if(confirm("Is this your final order")==false){
					return;
				}
				location.reload();
			})
		}

	}
	
}



