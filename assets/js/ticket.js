// xuất các vé khuyến mãi trong home
function loadVouchers() {
    fetch("./assets/js/vouchers.json"). then(res=>res.json()).then(data => {
        let h="";
        for(let p of data)
            h+=`
            <div class="voucher-ticket col l-4 m-12 c-12">
                    <a href="order.html" target="_blank"><img src="./assets/img/${p.image}" alt=""></a>
                    <a href="order.html" target="_blank">${p.name}</a>
            </div>
            `;
        let d = document.getElementById("voucher");
        d.innerHTML+= h;
    });
};

// xuất các vé combo trong home
function loadCombos() {
    fetch("./assets/js/combos.json"). then(res=>res.json()).then(data => {
        let h="";
        for(let d of data)
            h+=`
            <div class="combo-ticket col l-3 m-12 c-12">
                <a href="order.html" target="_blank"><img src="./assets/img/${d.image}" alt=""></a>
                <a href="order.html" target="_blank">${d.name}"</a>
                <div class="combo-ticket-sub">
                    <p> <i class="fa-solid fa-location-dot"></i> ${d.p1}</p>
                    <p> <i class="fa-solid fa-signs-post"></i> ${d.p2}</p>
                    <p> <i class="fa-solid fa-bus"></i> ${d.p3}</p>
                </div>
            </div>
            `;
        let d = document.getElementById("combo");
        d.innerHTML+= h;
    });
};

// xuất các vé giá rẻ trong home
function loadCheaps() {
    fetch("./assets/js/cheaps.json"). then(res=>res.json()).then(data => {
        let h="";
        for(let c of data)
            h+=`
            <div class="cheap-ticket col l-4 m-12 c-12">
                    <a href="order.html" target="_blank"><img src="./assets/img/${c.image}" alt=""></a>
                    <a href="order.html" target="_blank">${c.name}</a>
            </div>
            `;
        let d = document.getElementById("cheap");
        d.innerHTML+= h;
    });
};

window.onload =  function() {
    loadVouchers();
    loadCombos();
    loadCheaps();
}