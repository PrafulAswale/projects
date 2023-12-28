let allColor = document.querySelectorAll('div');

const colorClicked = e =>{
    document.body.setAttribute('id', e.target.id);
}

allColor.forEach((ele)=>{
    ele.addEventListener("click", colorClicked);
})
