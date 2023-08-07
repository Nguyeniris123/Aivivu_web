function load() {
    fetch("assets/js/tour.json").then(res=>res.json()).then(data=> {
        let h="";
        for (let p of data)
        h+=`
        <div class="col l-4 m-6 c-12">
                <div class="imgBox">
                    <img src="${p.image}" alt="${p.alt}" title="${p.title}">
                    <div class="goodPrice">
                        Giá tốt: <span class="price">${p.price}</span>
                    </div>
                </div>

                <h3>
                    <a href="${p.link}" title="${p.title}">${p.title}</a>
                </h3>

                <div>
                    <i class="fa-solid fa-location-dot"></i>
                    <span class="fp">Điểm xuất phát:</span>
                    <span class="lp">${p.departure}</span>
                </div>

                <div>
                    <i class="fa-solid fa-signs-post"></i>
                    <span class="fp">Điểm đến:</span>
                    <span class="lp">${p.destination}</span>
                </div>

                <div>
                    <i class="fa-solid fa-bus"></i>
                    <span class="fp">Phương tiện:</span>
                    <span class="lp">${p.vehicle}</span>
                </div>
            </div>
    `;

        let e = document.querySelector(".grid");
        e.innerHTML = h;
    })
}

window.onload =function() {
    load();
};