function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '0';
    }
  }



  let jsonName = "";
function loadComputers(path) {
  jsonName = path;
  let i = 1;
  fetch(jsonName) 
      .then(response => response.json())
      .then(data =>
          Object.values(data).forEach(datum => {
            let parent = document.getElementById('PCList');
            let contDiv = document.createElement('div');
            contDiv.className = "pcContainer";
            let img = document.createElement('img');
            img.src = datum.pcImg;
            let header = document.createElement('h2');
            header.textContent = datum.pcName;
            let description = document.createElement('p');
            description.textContent = datum.pcDescription;
            let price = document.createElement('h3');
            price.textContent = datum.pcPrice;
            let button = document.createElement('button');
            button.setAttribute('onclick', 'openPopUp('+i+')');
            i = i+1;
            button.textContent = "More Information";
            let ol = document.createElement('ol');
            let cpu = document.createElement('li');
            cpu.textContent = datum.cpu;
            let gpu = document.createElement('li');
            gpu.textContent = datum.gpu;
            let ram = document.createElement('li');
            ram.textContent = datum.ram;
            let storage = document.createElement('li');
            storage.textContent = datum.storage;
            ol.appendChild(cpu);
            ol.appendChild(gpu);
            ol.appendChild(ram);
            ol.appendChild(storage);
            contDiv.appendChild(img);
            contDiv.appendChild(header);
            contDiv.appendChild(description);
            contDiv.appendChild(ol);
            contDiv.appendChild(price);
            contDiv.appendChild(button);
            parent.appendChild(contDiv);
        })
      );
  }


function openPopUp(id) {
  fetch(jsonName)
      .then(response => response.json())
      .then(data => {
          document.getElementById("cpu").textContent = data[id].cpu;
          document.getElementById("gpu").textContent = data[id].gpu;
          document.getElementById("ram").textContent = data[id].ram;
          document.getElementById("storage").textContent = data[id].storage;
          document.getElementById("mobo").textContent = data[id].mobo;
          document.getElementById("cooler").textContent = data[id].cooler;
          document.getElementById("case").textContent = data[id].case;
          document.getElementById("psu").textContent = data[id].psu;
          document.getElementById("price").textContent = data[id].pcPrice;
          document.getElementById("popUpImg").src = data[id].pcImg;
          document.getElementById("popUpDesc").textContent = data[id].pcDescription;
          document.getElementById("popUpName").textContent = data[id].pcName;
          document.getElementById("popUpBuyBtn").href = data[id].pcBuyLink;
          document.getElementById("popUpBuyBtn").setAttribute('onclick', 'buyPC('+id+')');
        })
  document.getElementById("PCPopUp").style.display = "flex";
  }
function closePopUp(id) {
document.getElementById(id).style.display = "none";
}

function buyPC(id) {
  fetch(jsonName)
      .then(response => response.json())
      .then(data => { 
         window.open(data[id].cpuBuyLink);
})}

function updateGlobal() {
  fetch('data/global.json')
      .then(response => response.json())
      .then(data => {
          document.getElementById("announcement").textContent = data.announcement;
          document.getElementById("announcement").href = data.announcementLink;
        })
}
updateGlobal()