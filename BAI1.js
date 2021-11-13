let array=[];
let array_2=[];

while (true){
    let n = prompt("nhập chuỗi ")
    if (n!= -1){
        array.push(n)
    }
    else {
        break
    }
}

let max_length=0;

for (i=0;i<array.length;i=i+1){
    if (max_length < array[i].length){
        max_length = array[i].length
    }
}

for (m=0;m<array.length;m=m+1){
    if (array[m].length === max_length){
        array_2.push(array[m])
    }
}

console.log("chuỗi có độ dài lớn nhất là",array_2)