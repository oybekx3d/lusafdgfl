function loadAccs() {
    let i = 1;
    fetch("data/accs.json") 
        .then(response => response.json())
        .then(data =>
            Object.values(data).forEach(datum => {
              let parent = document.getElementById('accList');
              let contDiv = document.createElement('div');
              contDiv.id = "accCont";
              contDiv.className = 'filter';
              let img = document.createElement('img');
              img.src = datum.accImg;
              let header = document.createElement('h2');
              header.textContent = datum.accName;
              let description = document.createElement('p');
              description.textContent = datum.accInfo;
              let price = document.createElement('h3');
              price.textContent = datum.accPrice;
              let button = document.createElement('button');
              button.setAttribute('onclick', 'openAccPopUp('+i+')');
              i = i+1;
              button.textContent = "More Information";
              contDiv.appendChild(img);
              contDiv.appendChild(header);
              contDiv.appendChild(description);
              contDiv.appendChild(price);
              contDiv.appendChild(button);
              parent.appendChild(contDiv);
          })
        );
    }
    function openAccPopUp(id) {
        fetch(jsonName)
            .then(response => response.json())
            .then(data => {
                document.getElementById("accImg").src = data[id].accImg;
                document.getElementById("accHeader").textContent = data[id].accname;
                document.getElementById("accDesc").textContent = data[id].accInfo;
                document.getElementById("accPrice").textContent = data[id].accPrice;
                document.getElementById("accBuyBtn").setAttribute('onclick', 'window.open('+id+')');
            })
        document.getElementById("accPopUp").style.display = "flex";
        }