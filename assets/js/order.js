
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

function initDepartingInput() {
  const departingInput = document.getElementById('departing');

  const setDefaultDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }

    const formattedDate = `${year}-${month}-${day}`;
    departingInput.value = formattedDate;
  };

  setDefaultDate();

  departingInput.addEventListener('change', function(event) {
    const selectedDate = new Date(event.target.value);
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      setDefaultDate();
    }
  });
}


function preventPastDates() {
  const departingInput = document.getElementById('departing');
  const returningInput = document.getElementById('returning');
  
  departingInput.addEventListener('change', function(event) {
    const selectedDate = new Date(event.target.value);
    const returningDate = new Date(returningInput.value);
    
    if (selectedDate > returningDate) {
      returningInput.value = event.target.value;
    }
  });
  
  returningInput.addEventListener('change', function(event) {
    const selectedDate = new Date(event.target.value);
    const departingDate = new Date(departingInput.value);
    
    if (selectedDate < departingDate) {
      event.target.value = departingInput.value;
    }
  });
}


function setupIncrementDecrement() {
  // Lấy danh sách các nút "+" và "-" trong bảng
  var buttons = document.querySelectorAll(".td .sub, .td .add");

  // Lặp qua danh sách các nút và thêm sự kiện onclick
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
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
    });
  });
}





function animateContainers1() {
  const container1 = document.getElementById('container1');
  const container2 = document.getElementById('container2');

  setTimeout(() => {
      container1.style.transform = 'translate(-100%,0)';
  }, 100);


  setTimeout(() => {
      container2.style.transform = 'translate(0, -100%)';
  }, 500);
}

function animateContainers2() {
  const container1 = document.getElementById('container1');
  const container2 = document.getElementById('container2');

  setTimeout(() => {
    container2.style.transform = 'translate(100%, -100%)';
  }, 100);
  
  
  setTimeout(() => {
    container1.style.transform = 'translate(0,0)';
  }, 500);
}

// function animateContainers1() {
//   const container1 = document.getElementById('container1');
//   const container2 = document.getElementById('container2');

//   container1.style.transition = 'all 0.3s';
//   container1.style.transform = 'scale(0.85)';

//   container1.addEventListener('transitionend', function() {
//     container1.style.transition = 'all 0.3s';
//     container1.style.transform = 'translateX(-100%)';
//   });

//   container2.style.transition = 'all 0.3s';
//   container2.style.transform = 'translateX(-100%)';

//   container2.addEventListener('transitionend', function() {
//     container2.style.transition = 'all 0.3s';
//     container2.style.transform = 'scale(1)';
//   });
// }

// function animateContainers2() {
//   const container1 = document.getElementById('container1');
//   const container2 = document.getElementById('container2');

//   setTimeout(() => {
//     container2.style.transition = '0.3s';
//     container2.style.transform = 'scale(0.85)';

//     setTimeout(() => {
//       container2.style.transition = '0.3s';
//       container2.style.transform = 'translateX(100%)';
//     }, 300);

//   }, 200);

//   setTimeout(() => {
//     container1.style.transition = '0.3s';
//     container1.style.transform = 'translateX(0)';

//     setTimeout(() => {
//       container1.style.transition = '0.3s';
//       container1.style.transform = 'scale(1)';
//     }, 300);

//   }, 600);
// }



function validateBirthday() {
  const birthdayInput = document.getElementById('birthday');
  const birthdayValue = new Date(birthdayInput.value);
  const currentDate = new Date();
  const minimumAgeDate = new Date();
  minimumAgeDate.setFullYear(currentDate.getFullYear() - 18);
  minimumAgeDate.setMonth(currentDate.getMonth()); // Đặt tháng của ngày tối thiểu tuổi

  if (birthdayValue > minimumAgeDate) {
    // alert('Bạn phải có ít nhất 18 tuổi để tiếp tục!');
    Swal.fire({
      text: 'Bạn phải có ít nhất 18 tuổi để tiếp tục!',
      icon: 'warning',
      confirmButtonText: 'OK',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
    birthdayInput.value = '';
  }
}

function setupBirthdayValidation() {
  const birthdayInput = document.getElementById('birthday');
  birthdayInput.addEventListener('input', validateBirthday);
}






function handleSubmission2() {
  var fullName = document.getElementById('full-name').value;
  var birthday = document.getElementById('birthday').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;

  var isRequiredFieldsFilled = fullName && birthday && email && phone;

  if (fullName ==="" ){
    Swal.fire({
      text: 'Vui lòng nhập tên.',
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
    if (birthday ==="" ){
      Swal.fire({
        text: 'Vui lòng nhập ngày sinh.',
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
      if (email ==="" ){
        Swal.fire({
          text: 'Vui lòng nhập email.',
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
        if (phone ==="" ){
          Swal.fire({
            text: 'Vui lòng nhập số điện thoại.',
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
            showSweetAlertWithRedirect();
          }
        }
      }
    }
  }
}

function showSweetAlertWithRedirect() {
  Swal.fire({
    title: "Thông báo",
    text: "Đặt vé thành công!",
    showCancelButton: true,
    cancelButtonText: "Đặt vé tiếp",
    confirmButtonText: "Về trang chủ",
    showCloseButton: true,
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed || result.dismiss === Swal.DismissReason.close) {
      window.location.href = "index.html";
    } else {
      window.location.href = "order.html";
    }
  });
}

window.onload = function() {

  // Gọi hàm handleButtons để xử lý các nút 
  handleButtons();

  // Gọi hàm initDepartingInput để thiết lập và xử lý sự kiện cho ô nhập liệu
  initDepartingInput();

  // Gọi hàm preventPastDates để ngăn người dùng chọn ngày trước ngày của ô nhập liệu "departing"
  // cho ô nhập liệu "returning"
  preventPastDates()

  // Gọi function để thiết lập sự kiện trừ/giảm và cộng/tăng giá trị cho các input number
  setupIncrementDecrement();

  setupBirthdayValidation();


  handleLiClick();



};