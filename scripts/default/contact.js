(function () {
  "use strict";
  var forms = document.querySelector("#submit-contact");
  forms.addEventListener(
    "click",
    function (e) {
      e.preventDefault();
      let name = document.querySelector("#name").value;
      let email = document.querySelector("#email").value;
      let msg = document.querySelector("#msg").value;
      let contactMsg = name + "<br><br>" + email + "<br><br>" + msg;
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "immoywu@gmail.com",
        Password: "48F0DD44EA8ACEF1ACB37F92DB7B33A601E1",
        To: "moywudesign@gmail.com",
        From: "immoywu@gmail.com",
        Subject: "來自Cai Design的來信",
        Body: contactMsg,
      }).then(function (message) {
        alert(message);
        // alert('感謝！您的聯絡訊息已送出。');
        window.location.href = "index.html";
      });
    },
    false
  );
})();
