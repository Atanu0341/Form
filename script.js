const btn = document.querySelector(".btn");
        btn.addEventListener("click", (e) => {
            e.preventDefault();

            const name = document.getElementById('formName').value;
            const email = document.getElementById('formEmail').value;
            const message = document.getElementById('formMessage').value;
            const body = `name: ${name} <br /> email: ${email} <br /> message : ${message}`;

            Email.send({
                SecureToken: "97a795ae-4446-4ff1-a881-2173d93172dc",
                To: "atanumajumder@gmail.com",
                From: "atanumajumder2004@gmail.com",
                Subject: "Contact Message",
                Body: body,
            }).then((message) => alert(message));
        });
