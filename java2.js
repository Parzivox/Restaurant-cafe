const foods = [
  { id: 1, name: "Salmon Sushi", category: "japanese", price: 189, emoji: "🍣", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80" },
  { id: 2, name: "Black Pepper Beef", category: "thai", price: 159, emoji: "🥩", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80" },
  { id: 3, name: "Chicken Teriyaki", category: "japanese", price: 149, emoji: "🍗", image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=80" },
  { id: 4, name: "Tom Yum Goong", category: "thai", price: 169, emoji: "🍲", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80" },
  { id: 5, name: "Classic Burger", category: "burger", price: 129, emoji: "🍔", image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=900&q=80" },
  { id: 6, name: "Cheese Burger", category: "burger", price: 149, emoji: "🍔", image: "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=80" },
  { id: 7, name: "Margherita Pizza", category: "pizza", price: 199, emoji: "🍕", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=80" },
  { id: 8, name: "Pepperoni Pizza", category: "pizza", price: 229, emoji: "🍕", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80" },
  { id: 9, name: "Mango Sticky Rice", category: "dessert", price: 89, emoji: "🥭", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80" },
  { id: 10, name: "Chocolate Cake", category: "dessert", price: 99, emoji: "🍰", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80" },
  { id: 11, name: "Pad Thai", category: "thai", price: 119, emoji: "🍜", image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=900&q=80" },
  { id: 12, name: "Japanese Ramen", category: "japanese", price: 179, emoji: "🍜", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80" }
];

const categories = ["all", "japanese", "thai", "burger", "pizza", "dessert"];

const translations = {
  th: {
    brandSub: "Cafe & Food Delivery",
    cart: "ตะกร้า",
    themeTitle: "เปลี่ยนธีม",
    heroTitle: "What are you<br><span>craving today?</span>",
    heroText: "เลือกอาหารจานโปรด แล้วให้เราจัดส่งให้ถึงหน้าบ้านคุณ",
    browse: "เลือกอาหารเลย →",
    menuTitle: "เมนูอาหาร",
    menu: "เมนู",
    home: "หน้าแรก",
    searchPlaceholder: "ค้นหาอาหาร เช่น Sushi, Burger...",
    noMenu: "ไม่พบเมนูที่ค้นหา 😢",
    yourOrder: "Your order",
    myCart: "ตะกร้าของฉัน",
    emptyCartTitle: "ยังไม่มีอาหารในตะกร้า",
    emptyCartText: "เลือกเมนูที่ชอบแล้วกดเพิ่มลงตะกร้าได้เลย",
    foodCost: "ค่าอาหาร",
    deliveryFee: "ค่าส่ง",
    grandTotal: "รวมทั้งหมด",
    checkout: "สั่งซื้ออาหาร",
    confirmTitle: "ยืนยันคำสั่งซื้อ",
    confirmText: "อาหารจะถูกจัดเตรียมและส่งไปยังที่อยู่ของคุณ",
    recipient: "ชื่อผู้รับ",
    address: "ที่อยู่จัดส่ง",
    namePlaceholder: "กรอกชื่อ",
    addressPlaceholder: "บ้านเลขที่ / ถนน / แขวง / เขต",
    amountDue: "ยอดชำระ",
    confirmOrder: "ยืนยันและสั่งอาหาร",
    addToCart: "เพิ่มลงตะกร้า",
    remove: "ลบ",
    perItem: "/ ชิ้น",
    added: "เพิ่มอาหารลงตะกร้าแล้ว ✓",
    needCart: "กรุณาเพิ่มอาหารลงตะกร้าก่อน",
    needInfo: "กรุณากรอกชื่อและที่อยู่จัดส่ง",
    orderSuccess: "สั่งซื้อสำเร็จ! เลขออเดอร์",
    resultUnit: "เมนู",
    categories: { all: "ทั้งหมด", japanese: "🍣 ญี่ปุ่น", thai: "🍛 ไทย", burger: "🍔 เบอร์เกอร์", pizza: "🍕 พิซซ่า", dessert: "🍰 ของหวาน" }
  },
  lo: {
    brandSub: "ຄາເຟ & ບໍລິການສົ່ງອາຫານ",
    cart: "ກະຕ່າ",
    themeTitle: "ປ່ຽນທີມ",
    heroTitle: "ມື້ນີ້ຢາກກິນຫຍັງ?<br><span>ເລືອກເລີຍ!</span>",
    heroText: "ເລືອກອາຫານຈານໂປດ ແລ້ວໃຫ້ພວກເຮົາຈັດສົ່ງເຖິງໜ້າບ້ານທ່ານ",
    browse: "ເລືອກອາຫານ →",
    menuTitle: "ເມນູອາຫານ",
    menu: "ເມນູ",
    home: "ໜ້າຫຼັກ",
    searchPlaceholder: "ຄົ້ນຫາອາຫານ ເຊັ່ນ Sushi, Burger...",
    noMenu: "ບໍ່ພົບເມນູທີ່ຄົ້ນຫາ 😢",
    yourOrder: "ລາຍການສັ່ງຊື້",
    myCart: "ກະຕ່າຂອງຂ້ອຍ",
    emptyCartTitle: "ຍັງບໍ່ມີອາຫານໃນກະຕ່າ",
    emptyCartText: "ເລືອກເມນູທີ່ມັກ ແລ້ວກົດເພີ່ມໃສ່ກະຕ່າ",
    foodCost: "ຄ່າອາຫານ",
    deliveryFee: "ຄ່າສົ່ງ",
    grandTotal: "ລວມທັງໝົດ",
    checkout: "ສັ່ງອາຫານ",
    confirmTitle: "ຢືນຢັນຄຳສັ່ງຊື້",
    confirmText: "ອາຫານຈະຖືກຈັດກຽມ ແລະ ສົ່ງໄປຍັງທີ່ຢູ່ຂອງທ່ານ",
    recipient: "ຊື່ຜູ້ຮັບ",
    address: "ທີ່ຢູ່ຈັດສົ່ງ",
    namePlaceholder: "ປ້ອນຊື່",
    addressPlaceholder: "ເຮືອນເລກທີ / ຖະໜົນ / ບ້ານ / ເມືອງ",
    amountDue: "ຍອດຊຳລະ",
    confirmOrder: "ຢືນຢັນ ແລະ ສັ່ງອາຫານ",
    addToCart: "ເພີ່ມໃສ່ກະຕ່າ",
    remove: "ລົບ",
    perItem: "/ ຊິ້ນ",
    added: "ເພີ່ມອາຫານໃສ່ກະຕ່າແລ້ວ ✓",
    needCart: "ກະລຸນາເພີ່ມອາຫານໃສ່ກະຕ່າກ່ອນ",
    needInfo: "ກະລຸນາປ້ອນຊື່ ແລະ ທີ່ຢູ່ຈັດສົ່ງ",
    orderSuccess: "ສັ່ງຊື້ສຳເລັດ! ເລກອໍເດີ",
    resultUnit: "ເມນູ",
    categories: { all: "ທັງໝົດ", japanese: "🍣 ຍີ່ປຸ່ນ", thai: "🍛 ໄທ", burger: "🍔 ເບີເກີ", pizza: "🍕 ພິດຊ່າ", dessert: "🍰 ຂອງຫວານ" }
  }
};

let currentLanguage = localStorage.getItem("vanDerLinLanguage") || "th";
let cart = JSON.parse(localStorage.getItem("vanDerLinCart") || "[]");
let selectedCategory = "all";

const foodGrid = document.getElementById("foodGrid");
const searchInput = document.getElementById("searchInput");
const resultText = document.getElementById("resultText");
const emptyState = document.getElementById("emptyState");
const cartPanel = document.getElementById("cartPanel");
const overlay = document.getElementById("overlay");
const cartItems = document.getElementById("cartItems");
const cartEmpty = document.getElementById("cartEmpty");
const cartCount = document.getElementById("cartCount");
const subtotal = document.getElementById("subtotal");
const deliveryFee = document.getElementById("deliveryFee");
const total = document.getElementById("total");
const toast = document.getElementById("toast");
const languageSelect = document.getElementById("languageSelect");

function t(key) {
  return translations[currentLanguage][key] || key;
}

function money(number) {
  return "฿" + number.toLocaleString("th-TH");
}

function categoryLabel(category) {
  return translations[currentLanguage].categories[category] || category;
}

function renderCategories() {
  document.getElementById("categories").innerHTML = categories.map(category => `
    <button class="category ${selectedCategory === category ? "active" : ""}" data-category="${category}">${categoryLabel(category)}</button>
  `).join("");

  document.querySelectorAll(".category").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".category").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      selectedCategory = button.dataset.category;
      renderFoods();
    });
  });
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage === "lo" ? "lo" : "th";
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (translations[currentLanguage][key]) element.innerHTML = translations[currentLanguage][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const key = element.dataset.i18nPlaceholder;
    if (translations[currentLanguage][key]) element.placeholder = translations[currentLanguage][key];
  });

  document.getElementById("themeBtn").title = t("themeTitle");
  renderCategories();
  renderFoods();
  renderCart();
}

function setLanguage(language) {
  currentLanguage = translations[language] ? language : "th";
  localStorage.setItem("vanDerLinLanguage", currentLanguage);
  languageSelect.value = currentLanguage;
  applyTranslations();
}

function saveCart() {
  localStorage.setItem("vanDerLinCart", JSON.stringify(cart));
}

function renderFoods() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = foods.filter(food => {
    const categoryOK = selectedCategory === "all" || food.category === selectedCategory;
    const categoryText = categoryLabel(food.category).toLowerCase();
    const searchOK = food.name.toLowerCase().includes(query) || categoryText.includes(query);
    return categoryOK && searchOK;
  });

  resultText.textContent = `${filtered.length} ${t("resultUnit")}`;
  emptyState.classList.toggle("hidden", filtered.length !== 0);

  foodGrid.innerHTML = filtered.map(food => `
    <article class="food-card">
      <div class="food-image"><img src="${food.image}" alt="${food.name}" loading="lazy" onerror="this.style.display='none'; this.parentElement.classList.add('image-fallback'); this.parentElement.textContent='${food.emoji}';"></div>
      <div class="food-info">
        <h3>${food.name}</h3>
        <div class="food-category">${categoryLabel(food.category)}</div>
        <div class="food-bottom">
          <span class="price">${money(food.price)}</span>
          <button class="add-btn" onclick="addToCart(${food.id})" title="${t("addToCart")}">+</button>
        </div>
      </div>
    </article>
  `).join("");
}

function addToCart(id) {
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }

  saveCart();
  renderCart();
  showToast(t("added"));
}

function changeQty(id, amount) {
  const item = cart.find(item => item.id === id);
  if (!item) return;

  item.qty += amount;

  if (item.qty <= 0) {
    cart = cart.filter(item => item.id !== id);
  }

  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const foodItems = cart.map(item => {
    const food = foods.find(f => f.id === item.id);
    return food ? { ...food, qty: item.qty } : null;
  }).filter(Boolean);

  const sub = foodItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const fee = sub > 0 ? 25 : 0;

  cartCount.textContent = count;
  subtotal.textContent = money(sub);
  deliveryFee.textContent = money(fee);
  total.textContent = money(sub + fee);
  document.getElementById("checkoutTotal").textContent = money(sub + fee);

  cartEmpty.classList.toggle("hidden", foodItems.length !== 0);

  cartItems.innerHTML = foodItems.map(item => `
    <div class="cart-item">
      <div class="cart-emoji"><img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.style.display='none'; this.parentElement.classList.add('image-fallback'); this.parentElement.textContent='${item.emoji}';"></div>
      <div>
        <h4>${item.name}</h4>
        <small>${money(item.price)} ${t("perItem")}</small>
        <div class="qty">
          <button onclick="changeQty(${item.id}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <div style="text-align:right">
        <b>${money(item.price * item.qty)}</b>
        <br>
        <button class="remove-btn" onclick="removeFromCart(${item.id})">${t("remove")}</button>
      </div>
    </div>
  `).join("");
}

function openCart() {
  cartPanel.classList.add("open");
  overlay.classList.remove("hidden");
}

function closeCart() {
  cartPanel.classList.remove("open");
  overlay.classList.add("hidden");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

searchInput.addEventListener("input", renderFoods);

languageSelect.addEventListener("change", (event) => setLanguage(event.target.value));

document.getElementById("clearSearch").addEventListener("click", () => {
  searchInput.value = "";
  renderFoods();
  searchInput.focus();
});

document.getElementById("browseBtn").addEventListener("click", () => {
  document.getElementById("menuSection").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("cartTopBtn").addEventListener("click", openCart);
document.getElementById("cartNav").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("vanDerLinDarkMode", isDark);
  document.getElementById("themeBtn").textContent = isDark ? "☀️" : "🌙";
});

if (localStorage.getItem("vanDerLinDarkMode") === "true") {
  document.body.classList.add("dark");
  document.getElementById("themeBtn").textContent = "☀️";
}

document.getElementById("menuNav").addEventListener("click", () => {
  document.getElementById("menuSection").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("homeNav").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    showToast(t("needCart"));
    return;
  }

  document.getElementById("checkoutModal").classList.remove("hidden");
});

document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("checkoutModal").classList.add("hidden");
});

document.getElementById("confirmOrder").addEventListener("click", () => {
  const name = document.getElementById("customerName").value.trim();
  const address = document.getElementById("customerAddress").value.trim();

  if (!name || !address) {
    showToast(t("needInfo"));
    return;
  }

  const orderNumber = "KP" + Math.floor(100000 + Math.random() * 900000);

  cart = [];
  saveCart();
  renderCart();

  document.getElementById("checkoutModal").classList.add("hidden");
  closeCart();

  showToast(`${t("orderSuccess")} #${orderNumber}`);
  document.getElementById("customerName").value = "";
  document.getElementById("customerAddress").value = "";
});

languageSelect.value = currentLanguage;
applyTranslations();
