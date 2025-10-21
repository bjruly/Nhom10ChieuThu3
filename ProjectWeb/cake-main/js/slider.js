isLoggedIn = false;
function checkLogin(event) {
  if (!isLoggedIn) {
    event.preventDefault(); // chặn chuyển trang

    // Bước 1: cảnh báo ban đầu
    alert("⚠️ Bạn phải đăng nhập trước khi xem chi tiết!");

    // Bước 2: hỏi người dùng có muốn đăng nhập không
    const confirmLogin = confirm("Bạn có muốn đến trang đăng nhập không?");

    if (confirmLogin) {
      // Nếu người dùng bấm OK → chuyển sang trang đăng nhập
      window.location.href = "login.html";
    }
  }
}