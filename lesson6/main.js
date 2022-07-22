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

function showInfoStudents(arr){
    var hang="";
    for (x in arr) {
        hang += `<tr>
                    <td>${arr[x]["name"]}</td>
                    <td>${arr[x]["point"]}</td>
                </tr>`;
    }
    document.getElementById("table__body").innerHTML=hang;
};

showInfoStudents(students);

function sortByName() {
    var sortName = students;
    sortName.sort((a,b) => {
        if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
            return -1;
        }
        else if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
            return 1;
        }
        else return 0;
    });
    showInfoStudents(sortName);
};

function sortByPoint() {
    var sortPoint = students;
    sortPoint.sort((a,b) => {
        return a.point - b.point;
    });
    showInfoStudents(sortPoint);
};
function resetTable() {
    location.reload();
}

function statistical(minPoint, maxPoint) {
    var student = students.filter((student) =>{
        return student.point>=minPoint && student.point<=maxPoint;
    });
    if (student != 0) {
        showInfoStudents(student);
    }
    else {
        document.getElementById("table__body").innerHTML=`<tr><td colspan="2">Không có học sinh thoả mãn điều kiện!</td></tr>`;
    }
}
function searchName(){
    var findName = document.getElementById('searchName').value.toLowerCase();
    var student = students.filter((student) =>{
        return student.name.toLowerCase() == findName;
    });
    if (student != 0) {
        showInfoStudents(student);
    }
    else {
        document.getElementById("table__body").innerHTML=`<tr><td colspan="2">Không có học sinh thoả mãn điều kiện!</td></tr>`;
    }
    
}

function resetTable() {
    showInfoStudents(students);
}