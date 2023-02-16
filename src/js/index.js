async function submitForm(e) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const messages = document.getElementById("messages").value;

  if (name === "" || email === "" || subject === "" || messages === "") {
    iziToast.error({
      title: "Alert",
      message: "Please enter all input field.",
    });
  } else {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      data = {
        name,
        email,
        subject,
        messages,
      };

      let response = await fetch(
        "http://tradesmanserver-env-1.eba-hzwqbpu9.ap-northeast-1.elasticbeanstalk.com/sendMail",
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      let text = await response.text();
      iziToast.success({
        title: "OK",
        message: "Mail send successfully.",
      });
    } else {
      iziToast.error({
        title: "Alert",
        message: "Please enter a valid email.",
      });
    }
  }
}
async function submitSubscribe(e) {
  const name2 = document.getElementById("name2").value;
  const email2 = document.getElementById("email2").value;


  if (name2 === "" || email2 === "" ) {
    iziToast.error({
      title: "Alert",
      message: "Please enter all input field.",
    });
  } else {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email2)) {
      data = {
        name2,
        email2,
       
      };

      let response = await fetch(
        "http://tradesmanserver-env-1.eba-hzwqbpu9.ap-northeast-1.elasticbeanstalk.com/newsLetterMail",
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      let text = await response.text();
      console.log({text})
      iziToast.success({
        title: "OK",
        message: "Mail send successfully.",
      });
    } else {
      iziToast.error({
        title: "Alert",
        message: "Please enter a valid email.",
      });
    }
  }
}