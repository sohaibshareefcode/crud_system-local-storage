var formData = [];
function mainresult() {
    var result = document.getElementById('displayData');
    result.innerHTML = '';
    if (localStorage.getItem('formData')) {

        formData = JSON.parse(localStorage.getItem('formData'));

        formData.forEach(function (entry, index) {
            var div = document.createElement('div');
            div.classList.add('data-entry');
            div.innerHTML = "<p><strong>Name:</strong> " + entry.email + "</p>" +
                "<p><strong>Email:</strong> " + entry.password + "</p>" +
                "<button onclick='editData(" + index + ")'>Edit</button>" +
                "<button onclick='deleteData(" + index + ")'>Delete</button>";
            result.appendChild(div);
        });
    }
}
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var email= document.getElementById('email').value;
    var password = document.getElementById('password').value;

    formData.push({ email: email, password: password });


    localStorage.setItem('formData', JSON.stringify(formData));

    mainresult();

    document.getElementById('myForm').reset();
});


function editData(index) {
    var newName = prompt("Enter new name:", formData[index].email);
    var newEmail = prompt("Enter new email:", formData[index].password);

    formData[index].email = newName;
    formData[index].password = newEmail;

    localStorage.setItem('formData', JSON.stringify(formData));

    mainresult();
}
function deleteData(index) {
    formData.splice(index, 1);
    localStorage.setItem('formData', JSON.stringify(formData));
    mainresult();
}
mainresult();
