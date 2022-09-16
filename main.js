const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const navs = $$('.nav div')
const listProduct = $('.list-product')
navs.forEach((nav)=>{
    nav.onclick = function(){
        $('.nav .active').classList.remove('active')
        this.classList.add('active')
    }
})
const api = 'https://shoe-data.herokuapp.com/products'
const product = async ()=>{
    let data = await fetch(api).then((res)=>res.json())
        const htmls  = data.map((product)=>{
            const priceSale = Math.floor(product.salePrice / ((product.originalPrice)/100))
            const price = (product.originalPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            return `
            <div class="item">
                <img src="${product.image}" alt="">
                <div class="cart-info">
                    <div class="add-shopping-cart">Thêm vào giỏ hàng
                        <a href=""><i class="fas fa-cart-plus"></i></a>
                    </div>
                    <div class="detail"><i class="fas fa-eye"></i></div>
                </div>
                <div class="title">${product.title}</div>
                <div class="price">${price}₫<span>${priceSale} %</span></div>
            </div>`
        })
    
    const html = htmls.join('')
    listProduct.innerHTML = html

}
product()