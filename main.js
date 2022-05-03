var faq = document.querySelectorAll('.quests');
for (i = 0; i<faq.length; i++){
    faq[i].addEventListener('click', function(){
        this.classList.toggle('active')
        
    })
}

const open = document.getElementById("open");
const secopen = document.getElementById("sec-open")
const modal = document.getElementById("modal");
const close = document.getElementById("back");
open.addEventListener('click', () => {
    modal.classList.add('show');
});
secopen.addEventListener('click', () => {
    modal.classList.add('show');
});
close.addEventListener('click', () => {
    modal.classList.remove('show');

})

const tel = document.querySelector('.tel')


tel.addEventListener('keypress', () => {
    let tellength = tel.value.length

    if (tellength === 3){
        tel.value += '('
    }
})











































