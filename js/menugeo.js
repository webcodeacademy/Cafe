const sheetID = "11B6ZDunv1Aac0f1mA2XzojEVDfxfSm-6mnvv39TNqfw";
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName = "Categories";
const query = encodeURIComponent('Select *');
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const data = [];
document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log("ready");
    fetch(url)
        .then(res => res.text())
        .then(rep => {
            // console.log(rep);
            const jsData = JSON.parse(rep.substring(47).slice(0, -2));
            console.log(jsData);

            // const solumns = [];
            // const row = [];
            // jsData.table.cols.forEach(heading => {
            //     if(heading.label.toLowerCase().replace(/\s/g, ""));
            // })

            // jsData.table.rows.forEach(main => {


            //     solumns.forEach((ele, ind) =>{
            //         row[ele] = (main.c[ind] != null) ? main.c[ind].v : '';

            //     })
            //     data.push(row);



            // });

            jsData.table.rows.forEach(element => {
                document.getElementById("menulist").innerHTML = jsData.table.rows.length;
                // console.log(Object.values(element.c[0]));

                let menuitem = document.createElement('article');
                menuitem.className = "menuitem";

                
                let menuitemimg = document.createElement('div');
                menuitemimg.className = "menuitemimg";
                let image = document.createElement('img');
                image.setAttribute("src", 'img/' + Object.values(element.c[2]));
                menuitemimg.appendChild(image);


                let menuitemname = document.createElement('p');
                menuitemname.className = "menuitemname";
                let menuitemnametext = document.createTextNode(Object.values(element.c[1]));

                
                let menuitemlink = document.createElement('a');
                menuitemlink.className = "menuitemlink";
                menuitemlink.setAttribute("href", Object.values(element.c[3]));

                
                menuitem.appendChild(menuitemimg);
                menuitem.appendChild(menuitemname);
                menuitem.appendChild(menuitemlink);

                document.getElementById("menulist").append(menuitem);
            });
        })

}
