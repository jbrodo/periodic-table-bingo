function onElementClick() {
  let number = this.getAttribute('data-number')
  let element = window.tableData[number - 1]
  //showElementDetails(element)
}

function showElementDetails(element) {
  let url = element.url.replace('https://api.github.com/repos/', 'http://github.com/')
  let urlLabel = url.replace('http://github.com/', '')
  //document.querySelector('#cardNumber').innerHTML = element.number
  //document.querySelector('#cardSymbol').innerHTML = element.symbol
  //document.querySelector('#cardLink').innerHTML = `<a href="${url}">github.com/${urlLabel}</a>`
  //document.querySelector('#cardStars').innerHTML = `★ ${element.stargazers_count}`
  //document.querySelector('#cardBlurb').innerHTML = element.description
}

function getStarRank(count) {
  return Math.ceil(Math.min(count, 1000) / 200)
}

const colors = {
  0: '#eee',
  1: '#dcffcc',
  2: '#c6e48b',
  3: '#7bc96f',
  4: '#239a3b',
  5: '#196127',
  6: '#196127'
}

function addElementToTable(data, tableDiv,fiveRandomMembers) {
  let elDiv = document.createElement('div')
  let symbol = document.createTextNode(data.symbol)
  let bgColor = colors[getStarRank(data.stargazers_count)]

	console.info(fiveRandomMembers)
	console.info(data.number)
  if(fiveRandomMembers.includes(data.number)){
	elDiv.appendChild(symbol)
  } else{
	elDiv.appendChild(document.createTextNode(""))
  }
  elDiv.setAttribute('class', 'table-element')
  elDiv.setAttribute('style', `grid-column:${data.col}; grid-row:${data.row}; background-color:'#fff'`)
  //elDiv.setAttribute('style', `grid-column:${data.col}; grid-row:${data.row}; background-color:${bgColor}`)
  elDiv.setAttribute('data-number', data.number)
  tableDiv.appendChild(elDiv)
  elDiv.addEventListener('click', onElementClick)
}

function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

var x = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88];

 $(document).ready(function() { 
          
          
        }); 

window.onload = () => {
  let tableDiv = document.querySelector('#periodic-table')
  let fiveRandomMembers = getRandomSubarray(x, 23);
  window.tableData.forEach((e) => {
    addElementToTable(e, tableDiv, fiveRandomMembers)
  })
 // Global variable 
    
  //showElementDetails(window.tableData[0])
   html2canvas(document.querySelector("#container")).then(canvas => {
    document.body.appendChild(canvas)
});
}
