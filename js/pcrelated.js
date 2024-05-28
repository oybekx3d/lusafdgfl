function loadComputers(path) {
  fetch(("./data/"+path+".json")) 
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
            button.textContent = "More Information";
            let a = document.createElement('a');
            a.href = ("pc.html?id="+datum.id+"&category="+path);
            a.appendChild(button);
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
            contDiv.appendChild(a);
            parent.appendChild(contDiv);
        })
      );
  }

function loadPCInfo() {
  fetch(("data/"+category+".json"))
      .then(response => response.json())
      .then(data => {
        $(".cpu").html(data[id].cpu);
        $(".ram").html(data[id].ram);
        $(".gpu").html(data[id].gpu);
        $(".storage").html(data[id].storage);
        $(".mobo").html(data[id].mobo);
        $(".cooler").html(data[id].cooler);
        $(".case").html(data[id].case);
        $(".psu").html(data[id].psu);
        document.getElementById("price").textContent = data[id].pcPrice;
        document.getElementById("popUpImg").src = data[id].pcImg;
        document.getElementById("popUpDesc").textContent = data[id].pcDescription;
        document.getElementById("popUpName").textContent = data[id].pcName;
        document.getElementById("popUpBuyBtn").href = data[id].pcBuyLink;
        document.getElementById("popUpBuyBtn").setAttribute('onclick', 'buyPC('+id+')');
        }
    )
  }
function buyPC() {
  
}