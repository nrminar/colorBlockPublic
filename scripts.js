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
function removeBlock(rBlock){
    $(rBlock).remove();
    let rCountIn = $( '#redCount' );
    let yCountIn = $( '#yellowCount' );
    let bCountIn = $( '#blueCount' );
    let gCountIn = $( '#greenCount' );
    console.log('removed Block');
    console.log(rBlock);
    if(rBlock.id == 'redBox'){
        redCount -= 1;
        rCountIn.empty();
        rCountIn.append('Red Count:',redCount);
    }else if(rBlock.id == 'yelBox'){
        yelCount -= 1;
        yCountIn.empty();
        yCountIn.append('Yellow Count:',yelCount);
    }else if(rBlock.id == 'bluBox'){
        bluCount -= 1;
        bCountIn.empty();
        bCountIn.append('Blue Count:',bluCount);

    }else if(rBlock.id == 'greBox'){
        greCount -= 1;
        gCountIn.empty();
        gCountIn.append('Green Count:',greCount);
    }
}
function addRed(){
    let blockMultiplier = $( '#multiBlock' ).val();
    let rCountIn = $( '#redCount' );
    let colorCon = $( '#colorContainer' );
    if(blockMultiplier != ''){
        for(i=0; i<blockMultiplier; i++){
            redCount++;
            rCountIn.empty();
            rCountIn.append('Red Count:',redCount);
            colorCon.append('<button id="redBox" onclick="removeBlock(this)"></button>');
            console.log('added red');
        }
    }else{
        redCount++;
        rCountIn.empty();
        rCountIn.append('Red Count:',redCount);
        colorCon.append('<button id="redBox" onclick="removeBlock(this)"></button>');
        console.log('added red');
    }
    $( '#multiBlock' ).val( '' );
}
function addYel(){
    let blockMultiplier = $( '#multiBlock' ).val();
    let yCountIn = $( '#yellowCount' );
    let colorCon = $( '#colorContainer' );
    if(blockMultiplier != ''){
        for(i=0; i<blockMultiplier; i++){
            yelCount++;
            yCountIn.empty();
            yCountIn.append('Yellow Count:',yelCount);
            colorCon.append('<button id="yelBox"  onclick="removeBlock(this)"></button>');
            console.log('added yellow');
        }
    }else{
        yelCount++;
        yCountIn.empty();
        yCountIn.append('Yellow Count:',yelCount);
        colorCon.append('<button id="yelBox"  onclick="removeBlock(this)"></button>');
        console.log('added yellow');
    }
    $( '#multiBlock' ).val( '' );
}
function addBlu(){
    let blockMultiplier = $( '#multiBlock' ).val();
    let bCountIn = $( '#blueCount' );
    let colorCon = $( '#colorContainer' );

    if(blockMultiplier != ''){
        for(i=0; i<blockMultiplier; i++){
            bluCount++;
            bCountIn.empty();
            bCountIn.append('Blue Count:',bluCount);
            colorCon.append('<button id="bluBox"  onclick="removeBlock(this)"></button>');
            console.log('added blue');
        }
    }else{
        bluCount++;
        bCountIn.empty();
        bCountIn.append('Blue Count:',bluCount);
        colorCon.append('<button id="bluBox"  onclick="removeBlock(this)"></button>');
        console.log('added blue');
    }
    $( '#multiBlock' ).val( '' );
}
function addGre(){
    let blockMultiplier = $( '#multiBlock' ).val();
    let gCountIn = $( '#greenCount' );
    let colorCon = $( '#colorContainer' );
    if(blockMultiplier != ''){
        for(i=0; i<blockMultiplier; i++){
            greCount++;
            gCountIn.empty();
            gCountIn.append('Green Count:',greCount);
            colorCon.append('<button id="greBox"  onclick="removeBlock(this)"></button>');
            console.log('added green');
        }
    }else{
        greCount++;
        gCountIn.empty();
        gCountIn.append('Green Count:',greCount);
        colorCon.append('<button id="greBox"  onclick="removeBlock(this)"></button>');
        console.log('added green');
    }
    $( '#multiBlock' ).val( '' );
}