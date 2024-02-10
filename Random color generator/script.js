function colorGenerate(){
    const chars = '0123456789abcdef';
let color = '#';
 for(let i=0; i<6 ;i++){
    var randcolor = Math.random()*chars.length;
    color+= chars[Math.floor(randcolor)];
 }
 return color;
}
console.log(colorGenerate());