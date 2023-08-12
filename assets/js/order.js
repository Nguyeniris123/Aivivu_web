
// CONTAINER 1
function handleButtons() {
  var radiobtns = document.querySelectorAll('.labelBox input[type="radio"]');
  var selectedRadiobtn = null;

  radiobtns.forEach(function(radiobtn) {
    radiobtn.addEventListener('change', function() {
      var label = this.closest('label');
      var span = label.querySelector('span');

      if (selectedRadiobtn) {
        var selectedLabel = selectedRadiobtn.closest('label');
        var selectedSpan = selectedLabel.querySelector('span');
        selectedSpan.classList.remove('checkedButton');
      }

      if (span) {
        if (this.checked) {
          span.classList.add('checkedButton');
        } else {
          span.classList.remove('checkedButton');
        }
      }

      selectedRadiobtn = this;
    });
  });
}

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

function handleNextBtnClick(btn) {
  document.getElementById(btn).click();
}

// function handleSubmission() {
//   var radios = document.getElementsByName('flight-type');
//   var numInputs = document.getElementsByClassName('num');
//   var isRadioSelected = false;
//   var isNumInputValid = false;

//   // Kiểm tra xem có ít nhất một radio được chọn
//   for (var i = 0; i < radios.length; i++) {
//     if (radios[i].checked) {
//       isRadioSelected = true;
//       break;
//     }
//   }

//   // Kiểm tra xem có ít nhất một số khác 0 trong các input có class "num"
//   for (var i = 0; i < numInputs.length; i++) {
//     if (parseInt(numInputs[i].value) !== 0) {
//       isNumInputValid = true;
//       break;
//     }
//   }

//   // Hiển thị thông báo nếu không thỏa mãn các điều kiện
//   if (!isRadioSelected) {
//     alert('Vui lòng chọn ít nhất một loại vé.');
//   }
//   if (!isNumInputValid) {
//     alert('Vui lòng nhập số lượng vé.');
//   }

//   // // Tiếp tục xử lý khi tất cả các điều kiện đều thỏa mãn
//   // if (isRadioSelected && isNumInputValid) {
//   //   // Thực hiện các hành động khác ở đây sau khi submit thành công
//   //   // ...
//   // }
// }

function handleSubmission() {
  var radios = document.getElementsByName('flight-type');
  var numInputs = document.getElementsByClassName('num');
  var isRadioSelected = false;
  var isNumInputValid = false;

  // Kiểm tra xem có ít nhất một radio được chọn
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      isRadioSelected = true;
      break;
    }
  }

  // Kiểm tra xem có ít nhất một số khác 0 trong các input có class "num"
  for (var i = 0; i < numInputs.length; i++) {
    if (parseInt(numInputs[i].value) !== 0) {
      isNumInputValid = true;
      break;
    }
  }

// Hiển thị thông báo nếu không thỏa mãn các điều kiện
if (!isRadioSelected && !isNumInputValid) {
  Swal.fire({
    text: 'Vui lòng chọn ít nhất một loại vé và nhập số lượng vé.',
    icon: 'warning',
    confirmButtonText: 'OK',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  });
} else if (!isRadioSelected) {
  Swal.fire({
    text: 'Vui lòng chọn ít nhất một loại vé.',
    icon: 'warning',
    confirmButtonText: 'OK',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  });
} else if (!isNumInputValid) {
  Swal.fire({
    text: 'Vui lòng nhập số lượng vé.',
    icon: 'warning',
    confirmButtonText: 'OK',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  });
}

  // Tiếp tục xử lý khi tất cả các điều kiện đều thỏa mãn
  if (isRadioSelected && isNumInputValid) {
    // Thực hiện các hành động khác ở đây sau khi submit thành công
    // ...
  }
}






// CONTAINER 2
function handleLiClick() {
  const liElements = document.querySelectorAll("#sex li");

  liElements.forEach((li) => {
    li.addEventListener("click", () => {
      // Xóa class "checkedButton" khỏi tất cả các li
      liElements.forEach((item) => {
        item.classList.remove("active");
      });

      // Thêm class "checkedButton" vào li được click
      li.classList.add("active");
    });
  });
}

window.onload = function() {

  // Gọi hàm handleButtons để xử lý các nút 
  handleButtons();

  // Gọi function để thiết lập sự kiện trừ/giảm và cộng/tăng giá trị cho các input number
  setupIncrementDecrement();




  handleLiClick();

  };