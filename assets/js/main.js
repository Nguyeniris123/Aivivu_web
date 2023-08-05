function navMobile (obj) {
    var e = document.getElementById("mobile");
    var f = document.getElementById("overlay");
    e.style.transform = "translateX(0%)";
    f.style.display = "block";
};

function closeNav (obj) {
    var y = document.getElementById("mobile");
    var z = document.getElementById("overlay");
    y.style.transform = "translateX(-100%)";
    z.style.display = "none";
};

const slider = document.getElementById('slider');
const images = [
    './assets/img/slider1.jpg',
    './assets/img/slider2.jpg',
    './assets/img/slider3.jpg'
]; // Thêm đường dẫn các hình ảnh

let currentImageIndex = 0;

function changeBackgroundImage(obj) {
    slider.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    // Nếu currentImageIndex là 2 và images.length là 3
    // currentImageIndex sẽ trở thành 0, chuyển hình ảnh cuối cùng về hình ảnh đầu tiên.
}
// Đặt thời gian để thay đổi hình ảnh sau mỗi 2 giây (1000ms = 1s)
setInterval(changeBackgroundImage, 2000);

// request-box (requestcathay.html) begin
function validate(ele) {
    if (ele.value === '') {
        ele.classList.remove("error");
        setTimeout(() => ele.classList.add("error"), 5);
        return true;
    }
    return false;
}

function send() {
    let a = document.getElementById("booking-code");
    if (a !== null) {
        if (validate(a) === true ) {
            let k = "- Quý khách vui lòng nhập CMND/ Hộ chiếu/ Mã booking";
            let kq = document.getElementById("kq");
            if (kq !== null ) {
                kq.innerHTML = `<h3 style="color:red;">${k}</h3>`;
            } else 
            alert(kq);
            return;
        }
        else {
            let kq = document.getElementById("kq");
            let h ="Chúng tôi sẽ xem xét trong thời gian sớm nhất và thông báo xác nhận đến bạn qua email"
            if (kq !== null ) {
                kq.innerHTML = `<h3 style="color:red;">${h}</h3>`;
            } else 
            alert(kq);
        }
    }
}
// request-box (requestcathay.html) end

// JQUERY
$(document).ready(function() {
    $(window).scroll(function() {
      if($(this).scrollTop()) {
          $("#backTop").fadeIn();
      }
      else{
          $("#backTop").fadeOut();
      }
      });
  
    $("#backTop").click(function() {
        $('html').animate({scrollTop: 0}, 150);
    });

    $(".header-number").click(function() {
        event.preventDefault(); // ngăn chặn mở liên kết mặc định của a
        alert("Call this number 1900 6696")
    });
});


  
  
  


    
