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
  };