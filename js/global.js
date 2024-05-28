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
          document.getElementById("announcement").textContent = data.announcement;
          document.getElementById("announcement").href = data.announcementLink;
        })
}
updateGlobal()