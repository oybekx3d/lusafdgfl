function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '0';
    }
  }
function updateGlobal() {
  fetch('data/global.json')
      .then(response => response.json())
      .then(data => {
        $("#announcement").html(data.announcement);
        $("#announcement").attr("href", data.announcementLink);
        });
  fetch('menu.txt')
      .then(response => response.text())
      .then(data => {
        $('#menu').html(data)
        });
  fetch('footer.txt')
      .then(response => response.text())
      .then(data => {
        $('footer').html(data)
        });
}
updateGlobal()