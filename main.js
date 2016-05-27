// 1.) Avg price

function ans1() {
  priceArr = items.map(function(el, idx, arr){
    return el.price
  })
  var sum = 0
  for (i=0; i < priceArr.length; i++) {
     sum = sum + priceArr[i];
  }
  return sum/priceArr.length
}
document.getElementById('answer1').innerHTML = ans1();

// 1GBP = 1.47 USD
gbpToUsd = function () {
gbpPriceArr = items.filter(function(el,idx,arr){
    return el.currency_code === "GBP"
  }).map(function (el,idx,arr) {
    return el.price
  })
  return gbpPriceArr[0]*1.47
}


// 2.) items in USD b/w 14 and 18
function ans2() {
  btw = items.filter(function(el,idx,arr){
  return el.currency_code === "USD" && el.price >= 14 && el.price <= 18;
}).map(function(el,idx,arr){
  return el.title
})
  return `Title: "${btw[0]}", <br>Title: "${btw[1]}", <br>Title: "${btw[2]}", <br>Title: "${btw[3]}"`
}
document.getElementById('answer2').innerHTML = `[${ans2()}]`;

// 3.) display GBP item name and price

function ans3() {
gbpObj = items.filter(function(el,idx,arr){
    return el.currency_code === "GBP"
  }).map(function(el,idx,arr){
    return `<u>Name</u>: ${el.title} <br><u>Price</u>: £${el.price}`
  })
  return gbpObj[0]
}
document.getElementById('answer3').innerHTML = ans3();

// 4.) list of items made of wood

function ans4() {
  woodItem = items.filter(function(el,idx,arr){
    return el.materials.indexOf("wood") !== -1
  }).map(function(el,idx,arr){
    return el.title
  })
  return `<ul><li>${woodItem[0]}</li><li>${woodItem[1]}</li><li>${woodItem[2]}</li></ul>`
}
document.getElementById('answer4').innerHTML = ans4();

// 5.) items w/ 8 or more materials. Display name,# of items, and materials

function ans5() {
  lotsOfMaterials = items.filter(function(el,idx,arr){
    return el.materials.length >= 8
  }).map(function(el,idx,arr){
    return [el.title, el.quantity, el.materials]
    //`${el.title} ${el.quantity} ${el.materials}`
  })

  return lotsOfMaterials
}
document.getElementById('answer5').innerHTML =
`<u>Item 1 Name:</u> ${ans5()[0][0]}<br><u>Item 1 Quantity:</u> ${ans5()[0][1]}<br><u>Item 1 Materials:</u> ${ans5()[0][2]}<br>
<u>Item 2 Name:</u> ${ans5()[1][0]}<br><u>Item 2 Quantity:</u> ${ans5()[1][1]}<br><u>Item 2 Materials:</u> ${ans5()[1][2]}<br>`;

// 6.) How many items were made by their sellers

  function ans6() {
    theirSellers = items.filter(function(el,idx,arr){
      return el.who_made === "i_did"
    })
    return theirSellers.length
  }
document.getElementById('answer6').innerHTML = ans6();
