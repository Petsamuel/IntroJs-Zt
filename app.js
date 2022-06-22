function Name(params) {
    var name = params
    return name
}

function Heights(params) {
    var heights = params
    return heights
}

function Country(params) {
    var country = params
    return country
}
// logs the result on console 
console.log('Name:', Name('Peter Samuel'));
console.log('Heights:', Heights(4.45), 'ft');
console.log('Country:', Country('Nigeria'));

//logs the result on document, 
//use strictly with index.html !important
document.write('Name:', Name('Peter Samuel'), '\n');
document.write('Heights:', Heights(4.45), 'ft', '\n');
document.write('Country:', Country('Nigeria'), '\n');
document.querySelector('.name').innerHTML = 'Peter Samuel'
document.querySelector('.info').innerHTML = `heights:4.45 \n country: Nigeria`