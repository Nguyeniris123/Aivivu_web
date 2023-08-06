function load() {
    fetch("assets/js/khuyenmai.json").then(res=>res.json()).then(data=> {
        let h="";
        for (let p of data)
        h+=`
    <div class="content-section">
        <img src="${p.img}" title="${p.title}">
        <h3>
            <a href="${p.link}">${p.title}</a>
        </h3>
        <div class="content">
            ${p.content}
        </div>
    </div>
    `;

        let e = document.querySelector(".container2");
        e.innerHTML = h;
    })
}


window.onload =function() {
    load();

    $("#backTop").hide();
    $("#backTop").click(()=>{ 
        $("html,body").animate({
            scrollTop:0
        },1000);
    });

    // $("#backTop").click(() => {
    //     $("html, body").animate({
    //         scrollTop: 0
    //     }, 1000, "easeInOutCubic");
    // });
    $(window).scroll(function() {
        if ($(this).scrollTop() >= ($(window).height() * 1)) {
            $("#backTop").show("slow");
        }
        else {
            $("#backTop").hide("slow");
        }
    });
}
