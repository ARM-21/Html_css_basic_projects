const roleModify = document.querySelector('.role');
const roles = ["Software Developer", "fresher", "react developer"];

let count =0;
let innerCounter =0;
setInterval(()=>{
  if(count >= roles.length){
    count =0;
    roleModify.innerText = ""

  }
  else{
    if(innerCounter >= roles[count].length){
        innerCounter = 0;
        roleModify.innerText = ""
        count++
    }
    else{
      console.log(roles[count][innerCounter])
      roleModify.innerHTML += roles[count][innerCounter];
      innerCounter++;
      
    }
  }
},400)