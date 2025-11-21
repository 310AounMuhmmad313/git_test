// function about() {
    
//    var name= prompt ("What is your name");
//    var add= prompt ("Enter your adderess");
//    var qty= prompt ("Enter Quantity"); 
//    alert( "Hey " + name + " Wellcome to our website Your Order Prize is 1000 Rupees" );
//    var qty= prompt ("Are You Sure to order");
// }


    function about() {
      var name = prompt("What is your name?");
      var address = prompt("Enter your address:");
      var qty = prompt("Enter quantity:");
         var pricePerItem = 1000;
      var totalPrice = qty * pricePerItem;
    alert("Hey " + name + ", welcome to our website! Your total order price is " + totalPrice + " Rupees.");

      var confirmation = confirm("Are you sure you want to order this food?");

      if (confirmation) {
        alert("Thank you! Your order will be delivered on your Address ' "  + address +  " ' in 30 minutes after 30 min you resive your order with your location. ' " +address + " ' Thank you!") ;
      }else {
  var secondConfirmation = confirm("Are you sure you want to cancel this order?");
  
  if (secondConfirmation) {
    alert("Order cancelled.");
  } else {
    alert("Thank you! Your order will be delivered on your Address '" + address + "' in 30 minutes." + address + " 'Thank You! "  );
  }
}
    }
// var data1= document.getElementById("V1");
// var data2= document.getElementById("V2");

// function GenerateTable() {
//     // console.log(data1.value);
//     // console.log(data2.value);

//     for (let i = 0 ; i <data1; i++ ) {
//         alert("i");
        
//     }
// }