let elm = document.getElementById('display-username');

let soundingChars = ['a', 'i', 'e', 'y', 'o', 'u'];
let nonSoundingChars = ['q', 'w', 'b', 'r', 't', 'z', 'p', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'x', 'c', 'v', 'b', 'n', 'm'];
let name = '';
let charType = true;

generateUsername();

function generateUsername(){
    let nameSize = Math.floor(Math.random() * 3) + 4;
    let currentNameStep = 0;
    while(currentNameStep < nameSize){
        if(getCharType()){
            if(currentNameStep == 0) name = name + nonSoundingChars[Math.floor(Math.random() * nonSoundingChars.length)].toUpperCase();
            else name = name + nonSoundingChars[Math.floor(Math.random() * nonSoundingChars.length)];
        }else{
            if(currentNameStep == 0) name = name + soundingChars[Math.floor(Math.random() * soundingChars.length)].toUpperCase();
            else name = name + soundingChars[Math.floor(Math.random() * soundingChars.length)];
        }
        currentNameStep++;
    }
    elm.innerHTML = name;
    name = '';
}
function getCharType(){
    if(charType){
        charType = false;
        return charType;
    }else{
        charType = true;
        return charType;
    }
}
