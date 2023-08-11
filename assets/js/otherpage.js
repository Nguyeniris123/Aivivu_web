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
    // nút lướt lên đầu
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

    // nhấn vào số đt thì hiện thông báo
    $(".header-number").click(function() {
        event.preventDefault(); // ngăn chặn mở liên kết mặc định của a
        alert("Call this number 1900 6696")
    });

    // đang ở trang html nav nào thì đỏ lên
    // Lấy đường dẫn của trang hiện tại
    var currentPath = window.location.pathname.split("/").pop().split(".")[0];
    // Thêm class "active" vào thẻ <a> tương ứng với trang hiện tại
    $('.nav a[href="' + currentPath + '.html"]').addClass('active');

    //Nhấn vào mũi tên thì ẩn hiện câu trả lời - question.html
    $(".fa-solid.fa-arrows-up-down").click(function() {
        $(this).parent().next("p").slideToggle(200); //sử dụng .parent() để truy cập phần tử chứa biểu tượng mũi tên, sau đó sử dụng .next("p") để tìm phần tử <p>
    });
});
