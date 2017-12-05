let dayBlocks = document.querySelectorAll(".shadow");

dayBlocks.forEach(function(item){

  if(item.dataset.lock == undefined){
    item.addEventListener('click', function(e){
      let children = e.currentTarget.children;
      children[0].classList.toggle('transparent');
      children[1].classList.toggle('transparent');
    })
  }
});