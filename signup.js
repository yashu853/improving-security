fetch("http://localhost:3000/signup", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email: "test@example.com", password: "12345" })
})
.then(res => {
  if (res.status === 201) {
    alert("Successfully signed up");
  } else if (res.status === 409) {
    alert("User already exists, Please Login");
  } else {
    alert("Something went wrong");
  }
});
