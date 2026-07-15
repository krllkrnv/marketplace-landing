# Marketplace Landing

Десктопная светлая главная страница магазина цифровых товаров для геймеров.

## Live

GitHub Pages URL после публикации репозитория:

https://krllkrnv.github.io/marketplace-landing/

## Источники

- Figma: https://www.figma.com/design/xkBK4Io0V9MbAvZH085An5/
- Стек: чистые HTML / CSS / JavaScript
- Слайдер: Swiper CDN

## Ida-паттерны

- Banner carousel: `levelgroup` / `LandingBanner`, `polis-group-site` / `HeroSlider`
- Catalog open/close: `template_project` / `TheHeader` + `TheMenu`
- Currency toggle: `luzhnikicollection_copy` / `VCurrencySelector`
- Product card hover: `levelgroup` / `ParkingCard.scss`

## Чеклист ТЗ

- [x] Главная страница, desktop, светлая тема
- [x] Чистый HTML / CSS / JavaScript, без React/Vue/Angular
- [x] Баннер-карусель: autoplay, стрелки, активные dash-индикаторы
- [x] Меню «Каталог»: открытие по клику, закрытие повторным кликом / кликом вне / Escape
- [x] Переключатель валют в блоке «Пополнение Steam»: активное состояние `$ / ₸ / ₽`
- [x] Hover на иконках сервисов: тёмная подложка и белая обводка как у PUBG
- [x] Hover на карточках товара: подъём и усиление тени
- [x] Статичные ряды товаров, отзывы и футер по макету

## Примечание по ассетам

Figma MCP вернул экспортные URL для изображений и иконок. В текущей версии они подключены напрямую в HTML, потому что shell-среда не смогла скачать `figma.com` ассеты локально из-за DNS. Перед production-сдачей эти URL нужно переложить в `assets/`.

## Время

По факту: примерно 3 часа.
