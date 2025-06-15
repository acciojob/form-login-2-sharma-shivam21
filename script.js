//your JS code here. If required.
document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault(); // Prevent page reload

      const form = e.target;
      const firstName = form["First Name"].value;
      const lastName = form["Last Name"].value;
      const phoneNumber = form["Phone Number"].value;
      const email = form["Email ID"].value;

      const message = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${email}`;
      alert(message);
    });
  </script>