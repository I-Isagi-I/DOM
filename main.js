const colorBlocks = document.querySelectorAll('.color-block');

colorBlocks.forEach(block => {
  block.addEventListener('click', (event) => {
    if (!event.target.classList.contains('close')) {
      document.body.style.backgroundColor = getComputedStyle(block).backgroundColor;
    }
  });

  const closeBtn = block.querySelector('.close');
  closeBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    document.body.style.backgroundColor = '';
  });
});



const itemColors = document.querySelectorAll('.item-color');

itemColors.forEach(item => {
    item.addEventListener('click', (event) => {
        if (!event.target.classList.contains('close')) {
            let newColor = getComputedStyle(item).backgroundColor;
            let colorKubs = document.querySelectorAll('.item__color-kub');

            colorKubs.forEach(colorKub => {
                colorKub.style.backgroundColor = newColor;
            });
        }
    });
});

