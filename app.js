const container = document.querySelector('.container');
const yes_btn = document.querySelector('.yes_btn');
const no_bton = document.querySelector('.no_bton');



no_bton.addEventListener('click', () => {
    no_bton.style.position = 'absolute'
    const random_left = Math.floor(Math.random() * container.clientWidth);
    const random_top = Math.floor(Math.random() * container.clientHeight);

    if (random_left >= container.clientWidth / 2)
        no_bton.style.left = `${random_left - no_bton.clientWidth}px`;
    
    if (random_top >= container.clientHeight / 2)
        no_bton.style.top = `${random_top - no_bton.clientHeight}px`;
})

yes_btn.addEventListener('click', () => {
    container.innerHTML = `<h2>
                            Мэдсиймаа <br>
                            Lool 😂😂😂 <br>
                            </h2>`
})