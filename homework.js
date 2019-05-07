//mertebenin sayi//

var n,count;
n=Number(prompt("Ededi daxil edin:"))


if(!isNaN(n)){
    count=0;
while(n>0){
    n=(n-n%10)/10;
    count++;

}
    

console.log("Ededin mertebe sayi:",count);


}