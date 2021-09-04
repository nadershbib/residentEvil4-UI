let costumes = document.querySelectorAll("h1");
let costumesImgs = document.querySelectorAll(".costumes-img-container > img");

let i = 0;

document.addEventListener('keydown',e=>{
    console.log(i)
    if(e.key === 'ArrowDown'){
        i++;
        validateIndex(i)
       removeAndAddClasses()
    }
    else if (e.key === 'ArrowUp'){
        i--;
        validateIndex(i)
        removeAndAddClasses()
    }
})

function removeAndAddClasses(){
    removeTextAndCostume()
    costumes[i].classList.add("selected-costume")
    costumesImgs[i].classList.add("show")
}

function removeTextAndCostume(){
    costumes.forEach(costume=>costume.classList.remove("selected-costume"))
    costumesImgs.forEach(img=>img.classList.remove("show"))
}



function validateIndex(Index){
    if(Index>=costumes.length){
        i=0;
    }
    if(Index<0){
        i=costumes.length - 1;
    }
}










