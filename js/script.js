let dayBlocks = document.querySelectorAll(".shadow");

dayBlocks.forEach(function(item){
  item.addEventListener('click', function(e){
    let children = e.currentTarget.children;
    console.log(e.currentTarget.dataset.day);
    children[0].classList.toggle('transparent');
    children[1].classList.toggle('transparent');
  })
});