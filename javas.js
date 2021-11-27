var HappyArr = ['There is no path to happiness; happiness is the path.','I have chosen to be happy because its good for my health.','Happiness is a journey, not a destination.','No medicine cures what happiness cannot.'];
var SadArr=['Dont worry. Be happy',]
//array of 25-30 index
//fun- randome value of index
//
function randome(){
    return Math.floor(Math.random() *4 )
}
console.log(HappyArr[randome()]);