const students = [
    { name: 'Long', point: 10 },
    { name: 'Thanh', point: 9 },
    { name: 'Quang', point: 9.5 },
    { name: 'Minh', point: 9.3 },
    { name: 'Anh', point: 8 },
    { name: 'Chinh', point: 5 },
    { name: 'Huong', point: 6 },
    { name: 'Thinh', point: 7 },
    { name: 'Loi', point: 6.5 },
    { name: 'Vu', point: 6.3 },
    { name: 'John', point: 8 },
    { name: 'Ryu', point: 0 },
    { name: 'Peter', point: 9.8 },
    { name: 'Sasuke', point: 10 },
    { name: 'Rich', point: 9.3 },
    { name: 'Fancy', point: 8 },
    { name: 'Yj', point: 4 },
    { name: 'Yasuo', point: 10 },
    { name: 'Zed', point: 10 },

];

let perPage = 5;
let currentPage = 1;
let start = 0;
let end = perPage;
const pages = Math.ceil(students.length / perPage);

function showInfo() {
    let info = "";
    const content = students.map((student, index) => {
        if (index >= start && index < end) {
            info += `<tr>
                    <td>${student.name}</td>
                    <td>${student.point}</td>
                </tr>`;
            return info;
        }
    });
    $('tbody').html(info);
};

showInfo();

$('.btn__next').click(function () {
    currentPage++;
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
    if (pages == currentPage) {
        $('.btn__next').hide();
    }
    if (currentPage > 1) {
        $('.btn__pre').show();
    }
    showInfo();
});


$('.btn__pre').hide();

$('.btn__pre').click(function () {
    currentPage--;
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
    if (currentPage == 1) {
        $('.btn__pre').hide();
    }
    if (pages != currentPage) {
        $('.btn__next').show();
    }
    showInfo();
});