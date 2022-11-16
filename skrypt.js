function openImg(fileName){
    let lanzar = document.getElementById('lanzar');
    lanzar.src = fileName

}
let count = 0;
function changeImg(){
    let off = document.getElementById('off');
    count++;
    if (count%2 == 0){
        off.src = 'icon-on.png';
    }
    else{
        off.src = 'icon-off.png';
    }
}