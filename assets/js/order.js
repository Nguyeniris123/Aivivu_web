function setupIncrementDecrement() {
  // Lấy danh sách các nút "+" và "-" trong bảng
  var buttons = document.querySelectorAll("#lastrow .sub, #lastrow .add");

  // Lặp qua danh sách các nút và thêm sự kiện onclick
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Lấy ô cha chứa nút và input number
      var parent = this.parentNode;
      var input = parent.querySelector("input[type='number']");

      // Lấy giá trị hiện tại của input number
      var value = parseInt(input.value);

      // Lấy giá trị delta tương ứng với nút được ấn
      var delta = this.classList.contains("add") ? 1 : -1;

      // Tính toán giá trị mới
      var newValue = value + delta;

      // Giới hạn giá trị mới trong khoảng từ 0 đến 50
      newValue = Math.max(0, Math.min(50, newValue));

      // Cập nhật giá trị mới cho input number
      input.value = newValue;
    });
  });
}

window.onload = function() {
    // Chọn tất cả các nút radio
    var radioButtons = document.querySelectorAll('.box1 input[type="radio"]');
  
    // Lặp qua từng nút radio
    radioButtons.forEach(function(button) {
      // Gắn sự kiện "change" cho mỗi nút radio
      button.addEventListener('change', function() {
        // Lặp qua tất cả các nút radio
        radioButtons.forEach(function(btn) {
          // Tìm phần tử cha label gần nhất
          var label = btn.closest('label');
          if (label) {
            // Tìm phần tử span bên trong label
            var span = label.querySelector('span');
            if (span) {
              // Kiểm tra xem nút radio có được chọn hay không
              if (btn.checked) {
                // Thêm class "checkedButton" nếu nút được chọn
                span.classList.add('checkedButton');
              } else {
                // Xóa class "checkedButton" nếu nút không được chọn
                span.classList.remove('checkedButton');
              }
            }
          }
        });
      });
    });


    // Gọi function để thiết lập sự kiện trừ/giảm và cộng/tăng giá trị cho các input number
  setupIncrementDecrement();

  };