const togglemenu = document.querySelector('nav>figure>i')
const titr = document.querySelector('nav>figure>figcaption>span')
const general = document.querySelector('.titr>h2')
const nav = document.querySelector('.menu')
const submenu = document.querySelectorAll('.titr>ul>li')

const submenu1 = document.querySelectorAll('.titr>ul>li>ul')
console.log(submenu1);

togglemenu.addEventListener('click' , ()=>{
    nav.classList.toggle('w-menu')
    titr.classList.toggle('w-menu1')
    togglemenu.classList.toggle('w-menu2')
    togglemenu.classList.toggle('w-menu3')
    general.classList.toggle('w-menu4')
    
})

submenu1.forEach((val)=>{
    val.setAttribute('data-h' , val.clientHeight)
    val.style.height = '0'
})

submenu.forEach((val, i)=>{
    val.addEventListener('click', ()=>{
        if(val.children[3] != undefined){

            submenu1.forEach((item, index)=>{
                if(index != i){
                    item.style.height='0'
                }else{
                    let myHeight = val.children[3].clientHeight
                    console.log(myHeight);
                    
                    if(myHeight == 20){
                        val.children[3].style.height = val.children[3].getAttribute('data-h')+'px'
                    }else{
                        val.children[3].style.height = '0px'
                    }
                }
            })
        }
    })
})

