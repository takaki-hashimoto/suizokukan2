$('#wave').wavify({
    height: 100,
    bones: 3,
    amplitude: 70,
    color: '#72b8ff',
    speed: .40
  });

  function toggleMenu() {
    var menu = document.querySelector('.nav');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  }
  
  