document.querySelectorAll('.box').forEach(function(box){
  function toggle(){
    var on = box.classList.contains('say');
    document.querySelectorAll('.box.say').forEach(function(b){b.classList.remove('say')});
    if(!on) box.classList.add('say');
  }
  box.addEventListener('click', toggle);
  box.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle();} });
});
