isLoggedIn = false;
function checkLogin(event) {
  if (!isLoggedIn) {
    event.preventDefault();
    alert("⚠️ Bạn phải đăng nhập trước khi xem chi tiết!");
    const confirmLogin = confirm("Bạn có muốn đến trang đăng nhập không?");
    if (confirmLogin) {
      window.location.href = "login.html";
    }
  }
}