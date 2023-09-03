document.getElementById("sendMessageButton").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior if this button is inside a form
  sendMail(); // Call the sendMail() function
});

  const sendMail = () => {
    const params = {
      name: document.getElementById("formName").value,
      email: document.getElementById('formEmail').value,
      message: document.getElementById('formMessage').value,
    };
    const serviceID = "service_jydllid"
    const templateID = "template_sjc4tgo"

    emailjs.send(serviceID, templateID, params)
      .then(
        res => {
          document.getElementById("formName").value = "",

            document.getElementById('formEmail').value = "";

          document.getElementById('formMessage').value = "";
          console.log(res)
          alert("your message sent succesfully")

        }
      )
      .catch(err => console.log(err));
  };



