let total_weight_team_1=0;
let total_weight_team_2=0;
let array = []
let array2=[]

while (true){
    let n = prompt("nhập cân nặng ")
    if (n > 0){
        array.push(n)
    }
    else {
        break
    }
}
console.log("Cân nặng của mọi người là ", array)

for (let m = 0;m<array.length;m=m+1){
    if (m % 2 === 0){
        total_weight_team_1 = total_weight_team_1+ parseInt(array[m])
    }
    else {
        total_weight_team_2 = total_weight_team_2 + parseInt(array[m])
    }
}

array2.push(total_weight_team_1)
array2.push(total_weight_team_2)

console.log("Tổng cân nặng 2 team ",array2)