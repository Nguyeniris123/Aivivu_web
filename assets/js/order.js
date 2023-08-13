
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

// function handleNextBtnClick(btn) {
//   document.getElementById(btn).click();
// }
function handleNextBtnClick(btn) {
  btn.click();
}


function handleSubmission() {
  var radios = document.getElementsByName('flight-type');
  var isRadioSelected = false;

  // Kiểm tra xem có ít nhất một radio được chọn
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      isRadioSelected = true;
      break;
    }
  }

  // Kiểm tra tất cả các mục yêu cầu
  var departure = document.getElementById('departure').value;
  var destination = document.getElementById('destination').value;
  var departing = document.getElementById('departing').value;
  var returning = document.getElementById('returning').value;

  var isRequiredFieldsFilled = departure && destination && departing && returning;

  // Hiển thị thông báo nếu không có radio nào được chọn hoặc các mục yêu cầu chưa được điền đúng
  if (!isRadioSelected) {
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
  } else {
    if (departure==="") {
      Swal.fire({
        text: 'Vui lòng chọn điểm khởi hành.',
        icon: 'warning',
        confirmButtonText: 'OK',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
    } else {
      if (destination==="") {
        Swal.fire({
          text: 'Vui lòng chọn điểm đến.',
          icon: 'warning',
          confirmButtonText: 'OK',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
      } else {
        if (departing==="") {
          Swal.fire({
            text: 'Vui lòng chọn ngày đi.',
            icon: 'warning',
            confirmButtonText: 'OK',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });
        } else {
          if (returning==="") {
            Swal.fire({
              text: 'Vui lòng chọn ngày về.',
              icon: 'warning',
              confirmButtonText: 'OK',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            });
          } else {
            if (isRequiredFieldsFilled) {
              // Gọi hàm animateContainers1()
              animateContainers1();
            }
          }
        }
      }
    }
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
    });2
  });
}

function animateContainers1() {
  const container1 = document.getElementById('container1');
  const container2 = document.getElementById('container2');

  setTimeout(() =>{
    container1.style.transition = '0.3s';
    container1.style.transform = 'scale(0.85)';
  
    setTimeout(() => {
      container1.style.transition = '0.3s';
      container1.style.left = '-100%';
    }, 300);

  },200);


  setTimeout(() => {
    container2.style.transition = '0.3s';
    container2.style.left = '0';
  
    setTimeout(() => {
      container2.style.transition = '0.3s';
      container2.style.transform = 'scale(1)';
    }, 300);

  }, 600);
}

function animateContainers2() {
  const container1 = document.getElementById('container1');
  const container2 = document.getElementById('container2');

  setTimeout(() => {
    container2.style.transition = '0.3s';
    container2.style.transform = 'scale(0.85)';

    setTimeout(() => {
      container2.style.transition = '0.3s';
      container2.style.left = '100%';
    }, 300);

  }, 200);

  setTimeout(() => {
    container1.style.transition = '0.3s';
    container1.style.left = '0';

    setTimeout(() => {
      container1.style.transition = '0.3s';
      container1.style.transform = 'scale(1)';
    }, 300);

  }, 600);
}

window.onload = function() {

  // Gọi hàm handleButtons để xử lý các nút 
  handleButtons();

  // Gọi function để thiết lập sự kiện trừ/giảm và cộng/tăng giá trị cho các input number
  setupIncrementDecrement();




  handleLiClick();

  };