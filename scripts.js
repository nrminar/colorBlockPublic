$( document ).ready(redNow);
$( document ).ready(yelNow);
$( document ).ready(bluNow);
$( document ).ready(greNow);

let redCount = 0;
let yelCount = 0;
let bluCount = 0;
let greCount = 0;

function redNow(){
    $( '#redButton' ).on( 'click', addRed)
}
function yelNow(){
    $( '#yellowButton' ).on( 'click', addYel)
}
function bluNow(){
    $( '#blueButton' ).on( 'click', addBlu)
}
function greNow(){
    $( '#greenButton' ).on( 'click', addGre)
}

function addRed(){
    redCount++;
    let rCountIn = $( '#redCount' );
    rCountIn.empty();
    rCountIn.append('Red Count:',redCount);
    let colorCon = $( '#colorContainer' );
    colorCon.append('<p id="redBox"></p>');
    console.log('added red');
}
function addYel(){
    yelCount++;
    let yCountIn = $( '#yellowCount' );
    yCountIn.empty();
    yCountIn.append('Yellow Count:',yelCount);
    let colorCon = $( '#colorContainer' );
    colorCon.append('<p id="yelBox"></p>');
    console.log('added yellow');
}
function addBlu(){
    bluCount++;
    let bCountIn = $( '#blueCount' );
    bCountIn.empty();
    bCountIn.append('Blue Count:',bluCount);
    let colorCon = $( '#colorContainer' );
    colorCon.append('<p id="bluBox"></p>');
    console.log('added blue');
}
function addGre(){
    greCount++;
    let gCountIn = $( '#greenCount' );
    gCountIn.empty();
    gCountIn.append('Green Count:',greCount);
    let colorCon = $( '#colorContainer' );
    colorCon.append('<p id="greBox"></p>');
    console.log('added green');
}