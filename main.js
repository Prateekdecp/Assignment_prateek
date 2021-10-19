var btn = document.getElementById("change");
console.log(btn);
btn.addEventListener("click", makeChange)

function postData(formdata) {


    var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://api-notarize.herokuapp.com/customer/createPublicOrder", requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log("result:" + result);
            location.href = "newpage.html";
        })
        .catch(error => console.log('error', error));
}

function makeChange(event) {

    console.log("inside make Change");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phnnumber").value;
    const dropDown1 = document.getElementById("dropDownNot").value;
    const dropDown2 = document.getElementById("dropDownSign").value;
    console.log(name);
    console.log(name + email + phone + dropDown1);

    var formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("phoneNumber", phone);
    formdata.append("noOfSigners", dropDown1);
    formdata.append("noOfNotarizations", dropDown2);
    postData(formdata);
}