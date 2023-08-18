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

// Hàm chuyển đổi ảnh slider
const slider = document.getElementById('slider');
const images = [
    './assets/img/slider1.jpg',
    './assets/img/slider2.jpg',
    './assets/img/slider3.jpg'
]; // Thêm đường dẫn các hình ảnh

let currentImageIndex = 0;

function changeBackgroundImageRight(obj) {
    slider.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    // currentImageIndex = (currentImageIndex + 1) % images.length;
    // Nếu currentImageIndex là 2 và images.length là 3
    // currentImageIndex sẽ trở thành 0, chuyển hình ảnh cuối cùng về hình ảnh đầu tiên.
}

function changeBackgroundImageLeft(obj) {
    slider.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }
}
// Đặt thời gian để thay đổi hình ảnh sau mỗi 2 giây (1000ms = 1s)
setInterval(changeBackgroundImageRight, 2000);

// Check search info begin
function validate(ele) {
    if (ele.value === '') {
        ele.classList.remove("error");
        setTimeout(() => ele.classList.add("error"), 5);
        return true;
    }
    return false;
}

function check() {
    let a = document.getElementById("place1");
    let b = document.getElementById("place2");
    let c = document.getElementById("time1");
    let d = document.getElementById("time2");
    let e = document.getElementById("people");

    if (a !== null && b != null && c != null && d != null && e != null) {
        if (validate(a) === true || validate(b) === true || validate(c) === true || validate(d) === true || validate(e) === true) {
            event.preventDefault();
            return;
        }
    }
}
// Check search info end

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

    //Gợi ý danh sách slider box tìm kiếm
    let suggestList = ['Hồ Chí Minh', 'Hà Nội', 'Đà nẵng', 'Huế', 'Nha Trang', 'Đà Lạt', 'Vũng Tàu', 'Sapa',
    'Phú Quý', 'Quy Nhơn', 'Đài Loan', 'Thái Lan', 'Hoa Kì', 'Đức', 'Úc', 'Malaysia', 'Campuchia', 'Pháp', 'Phan Thiết',
    'Canada', "Cà Mau", 'Nhật Bản', 'Trung Quốc', "Nga", "Anh", 'TP Vinh'
    ];

    function suggestions(inputId, suggestId) {
        $(inputId).on("keyup", function() {
            let t = $(this).val();
            let h = "";
            for (let c of suggestList)
                if (c.indexOf(t) >= 0)
                    h+=`<li>${c}</li>`;
            $(suggestId).html(h);
        });
    
        $(suggestId).on("click", "li", function() {
            let t = $(this).text();
            $(inputId).val(t);
            $(suggestId).html("");
        });
    }

    suggestions("#place1", "#suggest1");
    suggestions("#place2", "#suggest2");

    // Sự kiện click lắng nghe trên cả tài liệu để đóng danh sách gợi ý khi người dùng nhấn ra ngoài
    $("html").on("click", function() {
        $("#suggest1").html("");
        $("#suggest2").html("");
    });
    
    // sự kiện scroll ko thể dùng html, phải dùng window
    $(window).on("scroll", function() {
        $("#suggest1").html("");
        $("#suggest2").html("");
    });
});


  
  
  


    
