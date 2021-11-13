let array = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
let color_index="";
let main=document.getElementById("main")

function random_color(){
    color_index="";
    for (i=0;i<6;i=i+1){
        color_index = color_index + array[Math.floor(Math.random() * 16)];
    }
    main.innerHTML = `
    
    <div style="background-color:#`+color_index+`;width:100%;height:1000px">
    
    </span> mã màu #`+color_index+`
    </div>
    `
    console.log(color_index)

}
