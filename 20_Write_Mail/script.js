const submit = document.getElementById("submit");

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  const To = document.getElementById("TO").value;
  const From = document.getElementById("FROM").value;
  const Subject = document.getElementById("subject").value;
  const Body = document.getElementById("body").value;
  // console.log(To, From, Subject, Body);
  Email.send({
    SecureToken: "cd0dee10-b0f1-42b3-9588-0effb1bd2551", //add your token here
    To: To,
    From: From,
    Subject: Subject,
    Body: Body,
  }).then((message) => alert(message));
});
