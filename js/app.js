const btn = document.querySelector("#btn")
const modal = document.querySelector('#modal')
const close = document.querySelector('#close')
const close1 = document.querySelector('#close1')

btn.addEventListener('click', ()=> {
    console.log(btn.innerHTML)
    if (btn.innerHTML == 'Active') {
        btn.innerHTML = 'No active'
        modal.classList.add('active')
    }
    else {
        btn.innerHTML = 'Active'
        modal.classList.remove('active')
    }

})

close.addEventListener('click', ()=> {
    modal.classList.remove('active')
    if (btn.innerHTML == 'No active') {
        btn.innerHTML = 'Active'
    }
})

close1.addEventListener('click', ()=> {
    modal.classList.remove('active')
    if (btn.innerHTML == 'No active') {
        btn.innerHTML = 'Active'
    }
})