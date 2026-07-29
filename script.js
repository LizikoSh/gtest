const products=[
['product-8.png','Човник для прикормки Deeper Quest Bait Boat','103 399 грн','hit'],
['product-3.png','Розумний тонометр Garmin Index BPM','10 779 грн','hit'],
['product-4.png','Велокомп’ютер Garmin Edge 540 Solar','23 715 грн','hit new'],
['product-5.png','Смарт-годинник Garmin Forerunner 970','36 431 грн','hit new'],
['product-6.png','Хронограф Garmin Xero C1 Pro','27 983 грн','hit sale'],
['product-2.png','Смарт-годинник Garmin Descent Mk3','85 499 грн','hit']
];
const cats=['Garmin Fenix 8','Тактичні годинники','Годинники для бігу','Годинники для фітнесу','Велокомп’ютери','Радари та світло','GPS навігатори','Супутникові комунікатори'];
const icons=['product-1.png','product-2.png','product-5.png','product-6.png','product-4.png','product-8.png','product-7.png','product-3.png'];
categoryRow.innerHTML=cats.map((x,i)=>`<a class="category-card"><img src="images/products/${icons[i]}" alt=""><span>${x}</span></a>`).join('');
function render(tab='hit',query=''){const list=products.filter(x=>x[3].includes(tab)&&x[1].toLowerCase().includes(query.toLowerCase()));productRow.innerHTML=list.map((x,i)=>`<article class="product-card"><img src="images/products/${x[0]}" alt="${x[1]}"><p class="sku">Артикул: 010-02${690+i}4-0${i}</p><div class="rating">★★★★★</div><h3>${x[1]}</h3><div class="price-line"><span>${x[2]}</span><button class="buy">Купити</button></div><p class="stock">В наявності</p></article>`).join('');document.querySelector('.no-results').hidden=!!list.length}
render();
document.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>{document.querySelector('.tabs .active').classList.remove('active');b.classList.add('active');render(b.dataset.tab,search.value)});
search.oninput=()=>render(document.querySelector('.tabs .active').dataset.tab,search.value);
catalog.onclick=()=>menu.hidden=!menu.hidden;
const benefitData=[['◇','Офіційний продавець Garmin'],['▣','Працюємо з 2019 р. 10 000+ покупців'],['♬','Професійна консультація'],['▰','Обмін, повернення'],['▱','Швидка доставка'],['▧','Зручна оплата']];
benefits.innerHTML=benefitData.map(x=>`<div class="benefit"><i>${x[0]}</i><span>${x[1]}</span></div>`).join('');
const posts=['Гаджети без екранів та годинники-водолази','Схоже, Garmin готується представити Fenix 9','Garmin Enduro 4 засвітився в Garmin Connect','Garmin CIRQA офіційно представлений','10 функцій Garmin для здоров’я','Garmin Forerunner 70 та 170'];
blogRow.innerHTML=posts.map((x,i)=>`<article class="post"><img src="images/products/${icons[i]}" alt=""><small>${26-i*2} липня 2026</small><p>${x}</p></article>`).join('');
const infos=['Смарт-годинники Garmin','Тактичні годинники Garmin','Пульсометри та спортивні датчики','Велонавігатори та радари Garmin','GPS-навігатори і комунікатори','Відеореєстратори Garmin','Морські пристрої Garmin','Аксесуари Garmin'];
const card=x=>`<article class="info-card"><h3>${x}</h3><p>Надійні пристрої, точні дані та практичні функції для щоденного використання.</p></article>`;
infoCategories.innerHTML=infos.map(card).join('');
audiences.innerHTML=['Для спорту і тренувань','Для подорожей і туризму','Для служби і складних умов','Для авто і дороги','Для риболовлі та води','Для щоденного використання'].map(card).join('');
reasons.innerHTML=['Офіційний дилер Garmin','Професійна консультація','Гарантія 12–24 місяці','Безкоштовна доставка','Спеціалізована підтримка','Фірмовий магазин у Києві'].map(card).join('');
