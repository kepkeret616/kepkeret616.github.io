
allData = {};

function init() {

    var csv = readTextFile('all.csv');
    var lines = csv.split("\n");
    var key = lines[1];
    var headers = lines[2].split(",");
    var result = [];
    for (var i = 3; i < lines.length; i++) {

        if (lines[i] == "NEW") {
            allData[key] = result;
            key = lines[i+1];
            headers = lines[i+2].split(",");
            result = [];
            i+=2;
            continue;
        }

        var currentline = lines[i].split(",");
        var obj = {};
        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }

    var allnames = findNames();

    var list = document.getElementById("dlist");
    allnames.forEach(function(item){
        var option = document.createElement('option');
        option.value = item;
        list.appendChild(option);
    });

}
function findNames() {
    var allname = []

    for (var key in allData) {
        var names = allData[key].map(x => x['Atléta']);
        allname = allname.concat(names);
    }

    allname = [...new Set(allname)];
    return allname;
}

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    var allText = '';
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return allText;
}

function onInput() {
    var obj = document.getElementById("input");
    var val = obj.value;
    var opts = document.getElementById('dlist').children;
    for (var i = 0; i < opts.length; i++) {
      if (opts[i].value === val) {
        // An item was selected from the list!
        // yourCallbackHere()

        if (obj.classList.contains('first')) { 
            obj.classList.remove('first');
            document.getElementById("input2").classList.remove('first');
        }

        var keys = getKeys(val);
        changeKeys(keys);

        var input2 = document.getElementById("input2");
        input2.value = 'All';
        onInput2();

        break;
      }
    }
}

function getKeys(name) {
    var keys = [];
    var years = [];
    var clubs = [];
    for (var key in allData) {
        var data = allData[key].filter(x => x['Atléta'] === name);
        if (data.length > 0) {
            years = years.concat(data.map(x => parseInt(x['Szül'])));
            clubs = clubs.concat(data.map(x => x['Klub']));
            var k = {name: key, len: data.length};
            keys.push(k);
        }
    }
    years = [...new Set(years)];
    clubs = [...new Set(clubs)];
    return keys;
}

function changeKeys(keys) {
    var list = document.getElementById("dlist2");
    list.innerHTML = '';

    var option = document.createElement('option');
    option.value = 'All';
    list.appendChild(option);

    keys.forEach(function(item){
        option = document.createElement('option');
        option.value = item.name;
        list.appendChild(option);
     });
}

function onInput2() {
    tablecount = 0;

    var val = document.getElementById("input2").value;
    var opts = document.getElementById('dlist2').children;
    var container = document.getElementById("plots");
    var name = document.getElementById("input").value;
    container.innerHTML = '';
    for (var i = 0; i < opts.length; i++) {
      if (val === 'All') {

        var keys = getKeys(name);
        keys.sort((a, b) => (a.len < b.len) ? 1 : -1);


        for (var j = 0; j < keys.length; j++) {
            var div = document.createElement('div');
            div.setAttribute('class', 'container');
            div.id = "div"+j;
            container.appendChild(div);
            ChangePlot(name, keys[j].name, div.id);
        }


        break;
    } else if (opts[i].value === val) {
        var div = document.createElement('div');
        div.setAttribute('class', 'container');
        div.id = "div0";
        container.appendChild(div);
        ChangePlot(name, val, div.id);
        break;
      }
    }
}

var tablecount = 0;

function ChangePlot(name, key, div) {
    var data = allData[key].filter(x => x['Atléta'] === name);
    var eredmeny = data.map(x => x['Eredmény']);
    var date = data.map(x => x['Dátum']);

    for (var i = 0; i < eredmeny.length; i++) {
        if (eredmeny[i].includes(':')) {
            var u = eredmeny[i].split(':');
            console.log(u);
            var t = u[1].split('.');
            var time = new Date(0, 0, 0, 0, u[0], t[0], t[1]*10);
            eredmeny[i] = time;
        }
    }

    var timestamp = []
    for (var i = 0; i < date.length; i++) {
        u = date[i].split('.');
        var d = new Date(u[0], u[1], u[2]);
        timestamp.push(d);
    }

    var trace1 = {
        x: timestamp,
        y: eredmeny,
        mode: 'markers',
        type: 'scatter'
    };

    var layout = {
        title: key,
        xaxis: {
            title: 'Dátum'
        },
        yaxis: {
            title: 'Eredmény',
            tickformat: '%H:%M:%S.%f'
        }
    };

    var div = document.getElementById(div);
    var plot = document.createElement('div');
    plot.setAttribute('class', 'plot');
    div.appendChild(plot);
    Plotly.newPlot(plot, [trace1], layout);

    div2 = document.createElement('div');
    div2.setAttribute('class', 'table');
    var table = document.createElement('table');
    table.id = 'table'+tablecount;
    table.innerHTML = '';
    
    var header = table.createTHead();
    var row = header.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell2.innerHTML = 'Dátum';
    cell1.innerHTML = 'Eredmény';
    cell3.innerHTML = 'Helyszín';
    cell4.innerHTML = 'Klub';

    var body = table.createTBody();
    for (var i = 0; i < eredmeny.length; i++) {
        row = body.insertRow(i);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
        cell4 = row.insertCell(3);
        cell2.innerHTML = timestamp[i].toLocaleDateString("hu");
        if (typeof eredmeny[i] === 'object') {
            cell1.innerHTML = eredmeny[i].getMinutes() + ':' + eredmeny[i].getSeconds() + '.' + eredmeny[i].getMilliseconds();
        } else {
            cell1.innerHTML = eredmeny[i];
        }
        cell3.innerHTML = data[i]['Helyszín'];
        cell4.innerHTML = data[i]['Klub'];
    }
    table.setAttribute('class', 'display');
    div2.appendChild(table);
    div.appendChild(div2);

    var u = plot.offsetHeight*0.8;
    console.log(u);

    new DataTable('#table'+tablecount, {
        searching: false,
        paging: false,
        scrollCollapse: true,
        info: false,
        scrollY: u+'px',
        footer: false,
        order: [0, 'desc']
    });
    tablecount++;
}
