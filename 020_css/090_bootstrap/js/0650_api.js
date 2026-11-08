/*
 * 0650_api.js — загрузка каталога товаров и вывод его на странице shop.html.
 *
 * Как это работает:
 *   1. Скрипт запрашивает файл ./data/shop.json (fetch) — «имитацию» API.
 *   2. Из полученного массива берутся первые MAX_PRODUCTS товаров.
 *   3. Для каждого товара формируется карточка <li>, все карточки
 *      вставляются в <ul id="node_for_insert"> за ОДНУ операцию.
 *
 * Важно: fetch к локальному файлу работает только через HTTP-сервер
 * (Live Server в VS Code, GitHub Pages и т.п.). При открытии страницы
 * двойным кликом (протокол file://) браузер заблокирует запрос.
 */

// Путь к данным указан относительно страницы shop.html, а не этого скрипта.
const PRODUCTS_URL = "./data/shop.json";

// Сколько товаров показывать на странице (в shop.json их 11, показываем 9).
const MAX_PRODUCTS = 9;

// Идентификатор контейнера (<ul>) в shop.html, куда вставляются карточки.
const CONTAINER_ID = "node_for_insert";

/**
 * Экранирует спецсимволы HTML.
 * Данные из JSON вставляются в разметку через innerHTML; без экранирования
 * значение вида «<script>…</script>» в названии товара было бы выполнено
 * браузером (XSS). Приводим к строке, чтобы корректно обработать и числа.
 *
 * @param {*} value — произвольное значение из JSON
 * @returns {string} безопасная для вставки в HTML строка
 */
function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

/**
 * Формирует HTML-код одной карточки товара.
 *
 * Поля товара в shop.json:
 *   id          — внутренний идентификатор (здесь не выводится);
 *   title       — название;
 *   description — краткое описание;
 *   price       — цена в рублях;
 *   img         — путь к изображению (относительно shop.html);
 *   vendor_code — артикул, передаётся на сервер скрытым полем формы.
 *
 * Поля vendor_code и amount повторяются в каждой карточке; при отправке
 * формы они уходят парами (vendor_code=…&amount=…) в порядке следования.
 *
 * @param {{title:string, description:string, price:number, img:string, vendor_code:string}} product
 * @returns {string} HTML карточки
 */
function renderProduct(product) {
    // Все значения атрибутов берём в кавычки: без них пробел в значении
    // (например, в пути к файлу) «ломал» бы разметку.
    return `
        <li style="width: 210px" class="d-flex flex-column m-1 p-1 border bg-body">
            <img style="width: 180px" class="align-self-center"
                 src="${escapeHtml(product.img)}" alt="${escapeHtml(product.title)}">
            <h5 class="card-subtitle">${escapeHtml(product.title)}</h5>
            <p class="card-text">${escapeHtml(product.description)}. Цена ${escapeHtml(product.price)} р.</p>
            <input type="hidden" name="vendor_code" value="${escapeHtml(product.vendor_code)}">
            <p class="card-text">Заказать
                <input class="w-25" type="number" name="amount" value="0" min="0">
            </p>
        </li>`;
}

/**
 * Загружает список товаров и выводит его в контейнер на странице.
 * Асинхронная функция: ждёт ответа сервера, не блокируя интерфейс.
 */
async function loadProducts() {
    const container = document.getElementById(CONTAINER_ID);
    if (!container) {
        // Скрипт подключён на странице без контейнера — делать нечего.
        console.error(`Элемент #${CONTAINER_ID} не найден на странице`);
        return;
    }

    try {
        const response = await fetch(PRODUCTS_URL);

        // fetch НЕ выбрасывает ошибку на ответах 404/500 — проверяем вручную.
        if (!response.ok) {
            throw new Error(`HTTP ${response.status} при загрузке ${PRODUCTS_URL}`);
        }

        // Разбираем тело ответа как JSON (ожидается массив товаров).
        const products = await response.json();

        // slice, в отличие от splice, не изменяет исходный массив.
        const visible = products.slice(0, MAX_PRODUCTS);

        // Собираем всю разметку в одну строку и вставляем одним присваиванием.
        // Вариант «innerHTML += …» в цикле заставлял бы браузер заново
        // разбирать весь список на каждой итерации (и терял бы состояние
        // уже созданных элементов).
        container.innerHTML = visible.map(renderProduct).join("");
    } catch (error) {
        // Сетевая ошибка, неверный JSON, блокировка file:// и т.п.
        console.error("Не удалось загрузить каталог товаров:", error);
        container.innerHTML =
            '<li class="text-danger p-2">Не удалось загрузить каталог товаров. Попробуйте позже.</li>';
    }
}

// Точка входа: скрипт подключён с атрибутом defer, поэтому к моменту
// выполнения DOM уже построен и контейнер существует.
loadProducts();
