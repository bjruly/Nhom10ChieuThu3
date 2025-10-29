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
function deleteProduct()
  {
    if (confirm("Bạn có chắc muốn xóa này không?")) 
      {
        alert("✅ Đã xóa thành công!");
        // Nếu bạn muốn xóa thật, có thể thêm dòng xử lý ở đây (ví dụ: gửi request hoặc xóa phần tử)
      }
  }