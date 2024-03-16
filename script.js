let a = +prompt("Xohlagan soningizni kiriting")

while (isNaN(a) || a==0){
    a = +prompt("Xatolik. Son kiriting")
}

if (a % 2 == 0) {
    alert("Siz juft son yozdingiz: " + a)
}

else if (a % 2 == 1) {
    alert("Siz toq son yozdingiz: " + a)
}
console.log(a)