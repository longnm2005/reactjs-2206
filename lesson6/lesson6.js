// var fruits, text, fLen, i;
// fruits = ["Banana", "Orange", "Apple", "Mango"];
// fLen = fruits.length;

// text = "<ul>";
// for (i = 0; i < fLen; i++) {
//     text += "<li>" + fruits[i] + "</li>";
// }
// text += "</ul>";
// document.getElementById("content").innerHTML=text;
function myFuction() {
    var text = '';
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.forEach((e,i) => {
        text += `<tr>
                <th>${i+1}</th>
                <td>${e}</td>
                </tr>`;
    });
    document.getElementById("content").innerHTML=text;
}
myFuction();