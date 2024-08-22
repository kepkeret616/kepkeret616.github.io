
var maxsem = 6;

var credits = 0;
var reqcredit = 180;

var numofall = 0;
var array;

function fetchJSONData() {
    fetch("../data.json")
        .then((res) => res.json())
        .then((data) => createTree(data))
        .catch((error) =>console.error("Unable to fetch data:", error));
}

function setstate(id) {
    t = document.getElementById("course" + id);
    if (t.classList.contains("closed")) return;
    if (t.classList.contains("finished")) {
        t.classList.remove("finished");
        credits -= array[id-1].credit;

        if (array[id-1].followup) {
            array[id-1].followup.forEach(f => {
                document.getElementById("course" + f).classList.add("closed");
                setstate(f);
            });
        }
    } else {
        t.classList.add("finished");
        credits += array[id-1].credit;

        if (array[id-1].followup) {
            array[id-1].followup.forEach(f => {
                document.getElementById("course" + f).classList.remove("closed");
            });
        }
    }
}

function updateBar() {
    var bar = document.getElementById("loadbarbody");
    bar.style.width = (credits / reqcredit) * 100 + "%";
}

function onclick(event) {
    var t = event.target;
    if (t.classList.contains("closed")) return;
    var id = t.id.replace("course", "");
    setstate(id);
    updateBar();
}

function mouseover(event) {
    var t = event.target;
    var id = t.id.replace("course", "");

    if (array[id-1].followup) {
        array[id-1].followup.forEach(f => {
            document.getElementById("course" + f).classList.add("highlight");
        });
    }
    if (array[id-1].requirements) {
        array[id-1].requirements.forEach(r => {
            document.getElementById("course" + r).classList.add("req");
        });
    }
}

function mouseout(event) {
    var t = event.target;
    var id = t.id.replace("course", "");

    if (array[id-1].followup) {
        array[id-1].followup.forEach(f => {
            document.getElementById("course" + f).classList.remove("highlight");
        });
    }
    if (array[id-1].requirements) {
        array[id-1].requirements.forEach(r => {
            document.getElementById("course" + r).classList.remove("req");
        });
    }
}

function createTree(data) {
    for (let i = 1; i <= maxsem; i++) {
        o = document.createElement("div");
        o.classList.add("semester");
        o.setAttribute("id", "sem" + i);
        o.style.width = 100/maxsem + "%";
        o.innerHTML = "Semester " + i;
        document.getElementById("tech-tree").appendChild(o);
    }

    array = data.courses;
    numofall = array.length;

    array.forEach(element => {
        a = element.requirements;
        a.forEach(req => {
            if(!array[req-1].followup) array[req-1].followup = [];
            array[req-1].followup.push(element.id);
        });

        s = element.semester;
        o = document.createElement("div");
        o.classList.add("item");
        o.setAttribute("id", "course" + element.id);
        //o.innerHTML = element.name;
        if (a.length > 0) {
            o.classList.add("closed");
        }
        o.addEventListener("click", onclick);
        o.addEventListener("mouseover", mouseover);
        o.addEventListener("mouseout", mouseout);

        d1 = document.createElement("div");
        d1.classList.add("name");
        dp = document.createElement("p");
        dp.innerHTML = element.name;
        d1.appendChild(dp);
        o.appendChild(d1);

        d1 = document.createElement("div");
        d1.classList.add("credit");
        dp = document.createElement("p");
        dp.innerHTML = element.credit;
        d1.appendChild(dp);
        o.appendChild(d1);

        d1 = document.createElement("div");
        d1.classList.add("type");
        dp = document.createElement("p");
        dp.innerHTML = 'K';
        d1.appendChild(dp);
        o.appendChild(d1);
        
        document.getElementById("sem"+s).appendChild(o);
    });
}

for (let i = 1; i < maxsem; i++) {
    o = document.createElement("div");
    o.style.width = i*100/maxsem + "%";
    o.classList.add("divider");
    document.getElementById("loadbar").appendChild(o);
}

fetchJSONData();
