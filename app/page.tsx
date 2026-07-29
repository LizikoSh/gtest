"use client";

import { useMemo, useState } from "react";

type IconName =
  | "grid"
  | "search"
  | "heart"
  | "compare"
  | "cart"
  | "clock"
  | "phone"
  | "pin"
  | "shield"
  | "truck"
  | "users"
  | "card"
  | "menu"
  | "x"
  | "chevron"
  | "arrow";

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </>
    ),
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
    compare: <><circle cx="6" cy="18" r="3" /><circle cx="18" cy="6" r="3" /><path d="M8.5 16.5 15.5 7.5M9 6h6M18 9v6" /></>,
    cart: <><path d="M3 4h2l2.4 10.4a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" /><circle cx="10" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    phone: <path d="M6.6 2h3l1.5 5-2 1.4a16 16 0 0 0 6.5 6.5l1.4-2 5 1.5v3c0 2.2-1.8 4-4 4C9.2 21.4 2.6 14.8 2.6 6c0-2.2 1.8-4 4-4Z" />,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    shield: <path d="M12 3 4 6v6c0 5 3.4 8 8 10 4.6-2 8-5 8-10V6l-8-3Z" />,
    truck: <><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7z" /><circle cx="7" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></>,
    users: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="10" r="2" /><path d="M3 20c0-4 2.7-7 6-7s6 3 6 7M15 15c3 0 5 2 5 5" /></>,
    card: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h4" /></>,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    x: <path d="m5 5 14 14M19 5 5 19" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
  };
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

const products = [
  { name: "Garmin fēnix 8 AMOLED 47 mm", sku: "010-02904-11", price: "55 571 грн", image: "/images/products/product-1.png", badge: "Хіт" },
  { name: "Garmin Descent Mk3 51 mm", sku: "010-02706-11", price: "85 499 грн", image: "/images/products/product-2.png" },
  { name: "Розумні ваги Garmin Index S2", sku: "010-02294-13", price: "8 271 грн", image: "/images/products/product-3.png" },
  { name: "Хронограф Garmin Xero C1 Pro", sku: "010-02618-00", price: "27 983 грн", image: "/images/products/product-4.png" },
  { name: "Garmin Venu 3 для спорту й здоров’я", sku: "010-02784-00", price: "20 503 грн", image: "/images/products/product-5.png" },
  { name: "Garmin tactix 7 AMOLED Edition", sku: "010-02931-01", oldPrice: "38 810 грн", price: "25 471 грн", image: "/images/products/product-6.png", badge: "-32%" },
];

const categories = [
  ["Garmin fēnix 8", "/images/products/product-7.png"],
  ["Тактичні годинники", "/images/products/product-2.png"],
  ["Годинники для бігу", "/images/products/product-5.png"],
  ["Годинники для фітнесу", "/images/products/product-1.png"],
  ["Велокомп’ютери", "/images/products/product-4.png"],
  ["Радари та світло", "/images/products/product-8.png"],
  ["GPS навігатори", "/images/products/product-7.png"],
  ["Супутникові комунікатори", "/images/products/product-8.png"],
];

const benefits = [
  { icon: "shield" as IconName, title: "Офіційна гарантія", text: "2 роки сервісу в Україні" },
  { icon: "truck" as IconName, title: "Безкоштовна доставка", text: "по Україні" },
  { icon: "clock" as IconName, title: "Працюємо з 2019 року", text: "понад 10 000 покупців" },
  { icon: "users" as IconName, title: "Експертний підбір", text: "під ваші потреби" },
  { icon: "card" as IconName, title: "Зручна оплата", text: "обмін та повернення" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Хіти продажів");
  const [cartCount, setCartCount] = useState(0);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [compare, setCompare] = useState<number[]>([]);

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("uk");
    if (!q) return products;
    return products.filter((product) => product.name.toLocaleLowerCase("uk").includes(q));
  }, [query]);

  const toggle = (list: number[], setter: (value: number[]) => void, index: number) => {
    setter(list.includes(index) ? list.filter((item) => item !== index) : [...list, index]);
  };

  const scrollToProducts = () => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main>
      <div className="topbar">
        <div className="shell topbar__inner">
          <span>◆ Офіційний дилер Garmin в Україні</span>
          <span className="topbar__desktop"><Icon name="pin" size={16} /> Шоурум у Києві: вул. Сікорського, 9</span>
          <span className="topbar__spacer" />
          <span><Icon name="clock" size={16} /> 09:00–19:00</span>
          <a href="tel:+380971709090"><Icon name="phone" size={16} /> (097) 170-90-90</a>
          <span className="language">УКР</span>
        </div>
      </div>

      <header className="header shell">
        <a className="brand" href="#" aria-label="4Garmin — головна">
          <span className="brand__four">4</span>
          <span className="brand__text"><strong>GARMIN</strong><small>4GARMIN.COM</small></span>
        </a>
        <button className="catalog-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>
          <Icon name="grid" /> <span>КАТАЛОГ</span><span className="catalog-button__chevron">⌄</span>
        </button>
        <label className="search">
          <Icon name="search" size={20} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Пошук товарів" aria-label="Пошук товарів" />
          {query && <button onClick={() => setQuery("")} aria-label="Очистити пошук"><Icon name="x" size={17} /></button>}
        </label>
        <div className="quick-actions">
          <button className={wishlist.length ? "is-active" : ""}><span className="icon-with-count"><Icon name="heart" />{wishlist.length > 0 && <b>{wishlist.length}</b>}</span><small>Обране</small></button>
          <button className={compare.length ? "is-active" : ""}><span className="icon-with-count"><Icon name="compare" />{compare.length > 0 && <b>{compare.length}</b>}</span><small>Порівняння</small></button>
          <button className="cart-button"><span className="icon-with-count"><Icon name="cart" />{cartCount > 0 && <b>{cartCount}</b>}</span><span><small>Кошик</small><strong>{cartCount ? `${cartCount} товарів` : "порожній"}</strong></span></button>
        </div>
        <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Відкрити меню">
          <Icon name={menuOpen ? "x" : "menu"} />
        </button>
        {menuOpen && (
          <nav className="catalog-menu" aria-label="Каталог">
            {["Смарт-годинники", "Для бігу", "Outdoor", "Тактичні", "Велотовари", "Навігація", "Аксесуари"].map((item) => <a href="#categories" key={item} onClick={() => setMenuOpen(false)}>{item}<Icon name="chevron" size={16} /></a>)}
          </nav>
        )}
      </header>

      <section className="hero shell" aria-label="Головні пропозиції">
        <article className="hero__main">
          <div className="hero__overlay" />
          <div className="hero__content">
            <p className="eyebrow">GARMIN OUTDOOR</p>
            <h1>Надійність.<br />Точність. Garmin.</h1>
            <p>Для тих, хто обирає пригоди без компромісів.</p>
            <button className="primary-button" onClick={scrollToProducts}>Відкрити каталог <Icon name="arrow" size={18} /></button>
          </div>
        </article>
        <div className="hero__side">
          <article className="mini-banner mini-banner--light">
            <div><h2>Навігатори<br />для походів</h2><button onClick={scrollToProducts}>Дивитись</button></div>
            <img src="/images/products/product-8.png" alt="Туристичний навігатор" />
          </article>
          <article className="mini-banner mini-banner--dark">
            <div><h2>Смарт-годинники</h2><button onClick={scrollToProducts}>Дивитись</button></div>
            <img src="/images/products/product-2.png" alt="Смарт-годинник Garmin" />
          </article>
        </div>
      </section>

      <section className="benefits shell" aria-label="Переваги">
        {benefits.map((item) => (
          <article key={item.title}>
            <span className="benefit-icon"><Icon name={item.icon} /></span>
            <div><h3>{item.title}</h3><p>{item.text}</p></div>
          </article>
        ))}
      </section>

      <section id="products" className="products-section shell">
        <div className="tabs" role="tablist">
          {["Хіти продажів", "Знижки", "Новинки"].map((tab) => (
            <button key={tab} role="tab" aria-selected={activeTab === tab} className={activeTab === tab ? "active" : ""} onClick={() => setActiveTab(tab)}>{tab}</button>
          ))}
        </div>
        <div className="product-panel">
          {filteredProducts.length ? (
            <div className="product-grid">
              {filteredProducts.map((product, index) => (
                <article className="product-card" key={product.sku}>
                  <div className="product-card__media">
                    {product.badge && <span className={product.badge.startsWith("-") ? "sale-badge" : "hit-badge"}>{product.badge}</span>}
                    <div className="product-card__tools">
                      <button className={wishlist.includes(index) ? "active" : ""} aria-label="Додати в обране" onClick={() => toggle(wishlist, setWishlist, index)}><Icon name="heart" size={18} /></button>
                      <button className={compare.includes(index) ? "active" : ""} aria-label="Додати до порівняння" onClick={() => toggle(compare, setCompare, index)}><Icon name="compare" size={18} /></button>
                    </div>
                    <img src={product.image} alt={product.name} />
                  </div>
                  <p className="sku">Артикул: {product.sku}</p>
                  <h3>{product.name}</h3>
                  <div className="rating" aria-label="Рейтинг 5 з 5">★★★★★ <span>0</span></div>
                  <div className="price-row">
                    <div>{product.oldPrice && <del>{product.oldPrice}</del>}<strong>{product.price}</strong></div>
                    <button onClick={() => setCartCount(cartCount + 1)}>Купити</button>
                  </div>
                  <p className="availability">В наявності</p>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-search"><Icon name="search" size={36} /><h3>Нічого не знайдено</h3><p>Спробуйте коротший запит — Garmin любить точність, але не телепатію.</p></div>
          )}
        </div>
      </section>

      <section id="categories" className="categories shell">
        <h2>Популярні категорії</h2>
        <div className="category-grid">
          {categories.map(([name, image]) => (
            <a href="#products" className="category-card" key={name}>
              <span><img src={image} alt="" /></span>
              <strong>{name}</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="promo-grid shell">
        <article className="promo promo--tactical">
          <div><h2><span>Тактичні</span> годинники</h2><p>Створені для місій.<br />Готові до екстриму.</p><button onClick={scrollToProducts}>До каталогу <Icon name="arrow" size={17} /></button></div>
        </article>
        <article className="promo promo--straps">
          <div><h2><span>Ремінці</span> для годинників</h2><p>Стильно. Надійно.<br />Комфортно.</p><button onClick={scrollToProducts}>До каталогу <Icon name="arrow" size={17} /></button></div>
          <img src="/images/products/product-7.png" alt="Ремінці та годинник" />
        </article>
        <article className="promo promo--fenix">
          <div><h2>GARMIN <span>fēnix 8</span></h2><p>Сучасні технології<br />на вашому зап’ясті</p><button onClick={scrollToProducts}>До каталогу <Icon name="arrow" size={17} /></button></div>
          <img src="/images/products/product-1.png" alt="Garmin fēnix 8" />
        </article>
        <article className="promo promo--sensor">
          <div><h2><span>Нагрудні</span> датчики</h2><p>Ще точніші дані<br />про ваш пульс</p><button onClick={scrollToProducts}>До каталогу <Icon name="arrow" size={17} /></button></div>
          <img src="/images/products/product-8.png" alt="Нагрудний датчик Garmin" />
        </article>
      </section>

      <section className="youtube shell">
        <div className="youtube__intro">
          <p className="eyebrow">4GARMIN НА YOUTUBE</p>
          <h2>Garmin — зрозуміло<br />і без зайвої води</h2>
          <p>Огляди, порівняння, налаштування та практичні поради.</p>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">Дивитися відео <Icon name="arrow" size={18} /></a>
        </div>
        <div className="video-grid">
          <article><div className="video-thumb video-thumb--one"><img src="/images/products/product-7.png" alt="" /><span>▶</span></div><h3>Розпаковка Garmin Instinct 3 Solar</h3></article>
          <article><div className="video-thumb video-thumb--two"><img src="/images/products/product-6.png" alt="" /><span>▶</span></div><h3>Новий Garmin tactix: перші враження</h3></article>
          <article><div className="video-thumb video-thumb--three"><img src="/images/products/product-8.png" alt="" /><span>▶</span></div><h3>Порівнюємо дисплеї навігаторів</h3></article>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <a className="brand brand--footer" href="#"><span className="brand__four">4</span><span className="brand__text"><strong>GARMIN</strong><small>4GARMIN.COM</small></span></a>
          <p>Демонстраційний адаптивний макет інтернет-магазину.</p>
          <a href="tel:+380971709090">(097) 170-90-90</a>
        </div>
      </footer>
    </main>
  );
}
