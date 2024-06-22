let a = document.getElementById('i1')
let b = document.getElementById('i2')
let c = document.getElementById('btn4')
let d = document.getElementById('for1')
let e = document.getElementById('for2')
let f = document.getElementById('btn2')
let g = document.getElementById('h')
let h = document.getElementById('he')
let submit=document.querySelector('#btn1')

c.style.display = 'none'
e.style.display = 'none'
h.style.display = 'none'
f.addEventListener('click', () => {
    setTimeout(function () {

        e.style.display = 'block'
        f.style.display = 'none'
        g.style.display = 'none'
        h.style.display = 'block'
        c.style.display = 'block'
        e.style.display = 'flex'
        d.style.display = 'none'
    },1000)

})
c.addEventListener('click', () => {
    setTimeout(() => {

        e.style.display = 'none'
        d.style.display = 'block'
        c.style.display = 'none'
        f.style.display = 'block'
        g.style.display = 'block'
        h.style.display = 'none'
        d.style.display = 'flex'
    },1000)

})


submit.addEventListener('click',()=>{
    if(a.value=='' && b.value==''){
        alert('please fill the form')
    }

    a.value=''
    b.value=''
})


