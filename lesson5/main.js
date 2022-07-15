var students = [
    { name: 'Long', point: 10},
    { name: 'Thanh', point: 9},
    { name: 'Quang', point: 9.5},
    { name: 'Minh', point: 9.3},
    { name: 'Anh', point: 8},
    { name: 'Chinh', point: 5},
    { name: 'Huong', point: 6},
    { name: 'Thinh', point: 7},
    { name: 'Loi', point: 6.5},
    { name: 'Vu', point: 6.3},
    { name: 'Truong', point: 8.2}
];

function showInfoStudents(){
    var hang="";
    for (x in students) {
        hang+="<tr>" + "<td>"+ students[x]["name"] + "</td>" + "<td>" + students[x]["point"] + "</td>" + "</tr>";
    }
    document.getElementById("table__body").innerHTML=hang;
};

showInfoStudents();

function sortByName() {
    students.sort(function(a,b){
        if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
            return -1;
        }
        else if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
            return 1;
        }
        else return 0;
    });
    showInfoStudents();
};

function sortByPoint() {
    students.sort(function(a,b){
        return a.point - b.point;
    });
    showInfoStudents();
};