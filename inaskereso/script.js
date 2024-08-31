
var filenames = ['Női Diszkoszvetés',
    'Női 5000 méter fedett pálya',
    'Férfi 200 méter',
    'Női 1 mérföld',
    'Női 6 km utcai futás',
    'Női 80 méter',
    'Férfi 1000 méter fedett pálya',
    'Női Hárompróba (100 méter gát, Távolugrás, Súlylökés)',
    'Férfi 20 km gyaloglás',
    'Női 4x100 méter',
    'Női 800 méter',
    'Női Hegyifutás',
    'Női 300 méter gát',
    'Férfi 10,000 méter gyaloglás',
    'Férfi 3000 méter  rövidpálya',
    'Női 3000 méter',
    'Női 400 méter rövidpálya',
    'Női 5 km utcai futás',
    'Férfi Hárompróba (100 méter, Távolugrás, Gerelyhajítás)',
    'Férfi 4x200 méter',
    'Női 5000 méter gyaloglás',
    'Férfi 1 mérföld rövidpálya',
    'Női 35 km gyaloglás',
    'Női 500 méter fedett pálya',
    'Férfi Ötösugrás',
    'Női Mezei futás',
    'Férfi Diszkoszvetés',
    'Férfi 110 méter gát',
    'Női 200 méter fedett pálya',
    'Női Terepfutás',
    'Férfi 4x400 méter rövidpálya',
    'Férfi 15 km gyaloglás',
    'Férfi 80 méter',
    'Női Sprintváltó (svédváltó)',
    'Női 1500 méter rövidpálya',
    'Női 1500 méter',
    'Férfi 12 óra',
    'Női Hárompróba (60m gát, Távolugrás, Súlylökés) fedett pálya',
    'Női 3000 méter akadály',
    'Női Ötpróba fedett pálya (60m gát fp., Magasugrás fp., Súlylökés fp., Távolugrás fp., 800m fp.)',
    'Férfi 400 méter',
    'Női 60 méter gát fedett pálya',
    'Női 300 méter rövidpálya',
    'Női Hármasugrás fedett pálya',
    'Férfi 300 méter',
    'Női Ötösugrás fedett pálya',
    'Női Hárompróba (Magasugrás, Gerelyhajítás, 200 méter)',
    'Női 50 km utcai futás',
    'Férfi 10 km utcai futás',
    'Női 50 méter fedett pálya',
    'Férfi 110 méter gát fedett pálya',
    'Férfi 10 km gyaloglás',
    'Férfi Ötösugrás – helyből fedett pálya',
    'Férfi Félmaraton',
    'Férfi 600 méter rövidpálya',
    'Férfi 4x400 méter',
    'Férfi Ötösugrás fedett pálya',
    'Férfi 6 napos futás',
    'Férfi 3000 méter gyaloglás',
    'Női 1000 méter fedett pálya',
    'Férfi 400 méter gát',
    'Női 300 méter fedett pálya',
    'Női Hétpróba (100m gát, Magasugrás, Súlylökés, 200m, Távolugrás, Gerelyhajítás, 800m)',
    'Férfi Hármasugrás',
    'Női Maraton',
    'Férfi 300 méter rövidpálya',
    'Női 15 km utcai futás',
    'Férfi 6 óra',
    'Női Rúdugrás fedett pálya',
    'Férfi Hárompróba (60m gát, Súlylökés, Rúdugrás) fedett pálya',
    'Férfi 2000 méter',
    'Férfi 6 km utcai futás',
    'Férfi 5000 méter fedett pálya',
    'Női 100 méter gát',
    'Női 20,000 méter gyaloglás',
    'Női Súlylökés',
    'Női 600 méter rövidpálya',
    'Férfi 4x1500 méter',
    'Férfi Hármasugrás fedett pálya',
    'Női 1000 méter rövidpálya',
    'Férfi 5 km utcai futás',
    'Női 2000 méter akadály',
    'Férfi 50 méter fedett pálya',
    'Férfi Magasugrás',
    'Női 300 méter',
    'Női 400 méter gát',
    'Férfi 600 méter fedett pálya',
    'Női 400 méter',
    'Férfi Nehézkalapács-vetés (15,88kg)',
    'Férfi Tízpróba (100m, Távolugrás, Súlylökés, Magasugrás, 400m, 110m gát, Diszkoszvetés, Rúdugrás, Gerelyhajítás, 1500m)',
    'Női 3000 méter gyaloglás fedett pálya',
    'Férfi 60 méter gát',
    'Női 100 méter gát fedett pálya',
    'Női 4x400 méter rövidpálya',
    'Női Hárompróba (100 méter gát, Távolugrás, Gerelyhajítás)',
    'Női 55 méter gát fedett pálya',
    'Férfi 50 km utcai futás',
    'Női 10 km utcai futás',
    'Férfi 4x800 méter',
    'Férfi 5000 méter',
    'Női Hármasugrás',
    'Női 60 méter gát',
    'Női 200 méter',
    'Férfi 1000 méter',
    'Női 400 méter fedett pálya',
    'Férfi 400 méter rövidpálya',
    'Női 800 méter fedett pálya',
    'Férfi Hárompróba (100 méter, Magasugrás, Súlylökés)',
    'Női 50 km gyaloglás',
    'Női Távolugrás',
    'Férfi 800 méter',
    'Férfi Hétpróba rövidpálya (60m, Távolugrás, Súlylökés, Magasugrás, 60m gát, Rúdugrás, 1000m rp.)',
    'Férfi Ötösugrás – helyből',
    'Férfi Súlylökés',
    'Férfi Hárompróba (Rúdugrás, Súlylökés, 400 méter)',
    'Női 60 méter fedett pálya',
    'Női Gerelyhajítás',
    'Férfi 1 mérföld fedett pálya',
    'Férfi Kalapácsvetés',
    'Női Félmaraton',
    'Férfi 4x200 méter fedett pálya',
    'Férfi Hárompróba (Magasugrás, Diszkoszvetés, 400 méter)',
    'Férfi 50 km gyaloglás',
    'Női Kalapácsvetés',
    'Férfi Gerelyhajítás',
    'Férfi 400 méter fedett pálya',
    'Női 50 méter',
    'Férfi 5000 méter gyaloglás',
    'Férfi Hétpróba fedett pálya (60m fp., Távolugrás fp., Súlylökés fp., Magasugrás fp., 60m gát fp., Rúdugrás fp., 1000m fp.)',
    'Férfi Terepfutás',
    'Férfi 800 méter fedett pálya',
    'Női 4x200 méter fedett pálya',
    'Női 3000 méter rövidpálya',
    'Női 800 méter rövidpálya',
    'Férfi 1500 méter',
    'Férfi 2000 méter akadály',
    'Férfi 100 km utcai futás',
    'Férfi 3000 méter',
    'Férfi Rúdugrás fedett pálya',
    'Férfi 5000 méter gyaloglás rövidpálya',
    'Férfi Nehézkalapács-vetés (14,5kg – 61cm)',
    'Férfi Távolugrás',
    'Férfi 3000 méter fedett pálya',
    'Férfi 300 méter fedett pálya',
    'Női Magasugrás fedett pálya',
    'Női 4x200 méter rövidpálya',
    'Férfi 5 km gyaloglás',
    'Női 2000 méter fedett pálya',
    'Női 600 méter fedett pálya',
    'Női Hárompróba (Távolugrás, Súlylökés, 200 méter)',
    'Női 5 km gyaloglás',
    'Férfi 1 mérföld',
    'Férfi Rúdugrás',
    'Férfi 60 méter gát fedett pálya',
    'Női 1500 méter fedett pálya',
    'Férfi 50 méter',
    'Férfi 1000 méter rövidpálya',
    'Női 600 méter',
    'Női 100 méter',
    'Férfi Hegyifutás',
    'Férfi Maraton',
    'Férfi 3000 méter gyaloglás rövidpálya',
    'Női 4x800 méter',
    'Női 6 óra',
    'Férfi 20,000 méter gyaloglás',
    'Férfi Sprintváltó (svédváltó)',
    'Női Hárompróba (100 méter gát, Magasugrás,Gerelyhajítás)',
    'Férfi 200 méter rövidpálya',
    'Női 4x200 méter',
    'Női 3 km gyaloglás',
    'Női 1 mérföld fedett pálya',
    'Férfi 1500 méter rövidpálya',
    'Női Rúdugrás',
    'Női 4x400 méter fedett pálya',
    'Férfi 60 méter',
    'Női Távolugrás fedett pálya',
    'Női 5000 méter',
    'Női Ötösugrás – helyből fedett pálya',
    'Női Ötösugrás',
    'Női 3000 méter gyaloglás rövidpálya',
    'Női 15 km gyaloglás',
    'Férfi Mezei futás',
    'Férfi 100 méter',
    'Férfi 600 méter',
    'Női 1000 méter',
    'Női 3000 méter gyaloglás',
    'Férfi Hárompróba (Magasugrás, Súlylökés, 400 méter)',
    'Férfi 200 méter fedett pálya',
    'Férfi Hárompróba (Távolugrás, Diszkoszvetés, 400 méter)',
    'Női 10,000 méter',
    'Női Ötpróba rövidpálya (60m gát, Magasugrás, Súlylökés, Távolugrás, 800m rp.)',
    'Női Nehézkalapács-vetés (9,07kg)',
    'Férfi Hárompróba (100 méter, Magasugrás, Gerelyhajítás)',
    'Férfi 4x400 méter fedett pálya',
    'Női 200 méter rövidpálya',
    'Férfi Távolugrás fedett pálya',
    'Női 12 óra',
    'Férfi 4x100 méter',
    'Női 1 óra',
    'Női 10 km gyaloglás',
    'Férfi 5000 méter gyaloglás fedett pálya',
    'Férfi 3 km gyaloglás',
    'Női 100 km utcai futás',
    'Férfi Hárompróba (100 méter, Távolugrás, Diszkoszvetés)',
    'Női Hárompróba (100 méter gát, Súlylökés, Távolugrás)',
    'Női 30 méter',
    'Férfi 3000 méter akadály',
    'Női 20 km gyaloglás',
    'Női 3000 méter fedett pálya',
    'Férfi 60 méter fedett pálya',
    'Férfi Magasugrás fedett pálya',
    'Férfi 4x200 méter rövidpálya',
    'Női Nehézkalapács-vetés (7,26kg – 61cm)',
    'Férfi Hárompróba (110 méter gát, Súlylökés, Magasugrás)',
    'Férfi Súlylökés fedett pálya',
    'Női 60 méter',
    'Női 4x400 méter',
    'Női Magasugrás',
    'Női 10 mérföld utcai futás',
    'Női Ötösugrás – helyből',
    'Férfi 3000 méter gyaloglás fedett pálya',
    'Férfi 500 méter fedett pálya',
    'Férfi 30 méter',
    'Női 1 mérföld rövidpálya',
    'Férfi 800 méter rövidpálya',
    'Férfi 35 km gyaloglás',
    'Férfi 2000 méter fedett pálya',
    'Női Súlylökés fedett pálya',
    'Férfi 10,000 méter',
    'Női 10,000 méter gyaloglás',
    'Női 2000 méter',
    'Férfi 1500 méter fedett pálya']


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


    /*filenames.forEach(function (filename) {
        var csv = readTextFile('toplists/' + filename + '.csv');
        var lines = csv.split("\n");
        var result = [];
        var headers = lines[0].split(",");
        for (var i = 1; i < lines.length; i++) {
            var obj = {};
            var currentline = lines[i].split(",");
            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }
            result.push(obj);
        }
        allData[filename] = result;
    });*/

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
