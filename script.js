const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

//Toggle nav
toggle.addEventListener('click', ()=> 
    document.body.classList.toggle('show-nav')
);

//Show Modal
// open.addEventListener('click',() =>
//     modal.classList.add('show-modal')
// );

//Show Modal and close Nav
open.addEventListener('click', () => {
    // Check if the navigation is open
    if (document.body.classList.contains('show-nav')) {
      // Close the navigation
      document.body.classList.remove('show-nav');
    }
  
    // Add the "show-modal" class to display the modal
    modal.classList.add('show-modal');
  });

//Hide Modal
close.addEventListener('click',() =>
    modal.classList.remove('show-modal')
);

//Hide Modal outside click
window.addEventListener('click', e => 
    e.target == modal ? modal.classList.remove('show-modal') :false
);