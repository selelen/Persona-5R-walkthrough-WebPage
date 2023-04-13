//DISPLAY THE XML TABLE WHEN OPEN THE PAGE
document.addEventListener('DOMContentLoaded', search(), false);
//Calling search function everytime page is loaded

function search() {
    let mementosTable = document.getElementById("table"); //the html Table we created
    //to avoid repeat elements on the table, each time we call the function we will delete the result of the previous filtering 

    while (mementosTable.children[1].firstChild) {
        mementosTable.children[1].removeChild(mementosTable.children[1].firstChild);
    }
    var rankFilter = document.getElementById("rank").value; //the selected option of mission rank
    var typeFilter = document.getElementById("type").value; //the selected option of mission type
    var locationFilter = document.getElementById("location").value; //the selected option of location type

    let myXML = '';

    fetch('./XML/missionTable.xml').then((response) => {
        response.text().then((xml) => {
            myXML = xml;
            let parser = new DOMParser();
            let xmlDOM = parser.parseFromString(myXML, 'application/xml');


            if (rankFilter != 'any') {
                if (typeFilter != 'any') {

                    if (locationFilter != 'any') { //if location, rank and type filters
                        path = "//mission[rank[contains (text(),\"" + rankFilter + "\")] and type[contains (text(),\"" + typeFilter + "\")]and location[contains (text(),\"" + locationFilter + "\")]]"
                    }
                    else { //if rank and type filters
                        path = '//mission[rank[contains (text(),\'' + rankFilter + '\')] and type[contains (text(),\'' + typeFilter + '\')]]'
                    }
                }
                else {
                    if (locationFilter != 'any') { //if location and rank filters
                        path = "//mission[rank[contains (text(),\"" + rankFilter + "\")] and location[contains (text(),\"" + locationFilter + "\")]]"
                    }
                    else { //if rank filter
                        path = '//mission[rank[contains (text(),\'' + rankFilter + '\')]]'
                    }
                }
            }
            else {
                if (typeFilter != 'any') {
                    if (locationFilter != 'any') { //if location and type filters
                        path = "//mission[type[contains (text(),\"" + typeFilter + "\")] and location[contains (text(),\"" + locationFilter + "\")]]"
                    }
                    else { //if only type filter
                        path = '//mission[type[contains (text(),\'' + typeFilter + '\')]]'
                    }
                }
                else {
                    if (locationFilter != 'any') { //if only location filter
                        path = "//mission[location[contains (text(),\"" + locationFilter + "\")]]"
                    }
                    else {//if there are no filters
                        path = '//mission'
                    }
                }
            }

            var missions = document.evaluate(path, xmlDOM, null, XPathResult.ANY_TYPE, null);
            var thisMission = missions.iterateNext();

            while (thisMission) { //while a mission exists

                //put the results on the html table     
                let row = document.createElement('tr');
                //name
                let td = document.createElement('td');
                td.innerText = thisMission.children[0].innerHTML;

                row.appendChild(td);
                //rank
                td = document.createElement('td');
                td.innerText = thisMission.children[1].innerHTML; //rank
                row.appendChild(td);
                //location
                td = document.createElement('td');
                td.innerText = thisMission.children[2].innerHTML; //location
                row.appendChild(td);
                //reward
                td = document.createElement('td');
                td.innerText = thisMission.children[3].innerHTML; //reward
                row.appendChild(td);
                //availability
                td = document.createElement('td');
                td.innerText = thisMission.children[4].innerHTML; //availability
                row.appendChild(td);
                //type
                td = document.createElement('td');
                td.innerText = thisMission.children[5].innerHTML; //type
                row.appendChild(td);

                mementosTable.children[1].appendChild(row);


                thisMission = missions.iterateNext()
            }
            if (mementosTable.children[1].childNodes.length == 0) { //if no results with the specified filters
                document.getElementById("demo").innerHTML = "No results found"

            }
            if (mementosTable.children[1].childNodes.length > 0) {
                document.getElementById("demo").innerHTML = ""

            }
        })

    })
}










