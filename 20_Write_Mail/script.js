const submit = document.getElementById("submit");

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  const To = document.getElementById("TO").value;
  const From = document.getElementById("FROM").value;
  const Subject = document.getElementById("subject").value;
  const Body = document.getElementById("body").value;
  // console.log(To, From, Subject, Body);
  Email.send({
    SecureToken: "", //add your token here
    To: To,
    From: From,
    Subject: Subject,
    Body: Body,
  }).then((message) => alert(message));
});
