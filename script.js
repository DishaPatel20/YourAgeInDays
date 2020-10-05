
function ageInDays() {
    var birthyear = prompt('What year were you born..... Good Friend ?');
    var ageInDays = (2018 - birthyear) * 365;

    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are' + ' ' + ageInDays + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flexbox-result').appendChild(h1);
    
}

function reset() {
    document.getElementById('ageInDays').remove();
}
