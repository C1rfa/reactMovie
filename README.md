# React Movie

Маленький проект по поиску игр/сериалов/фильмов. Сделан в процессе обучения реакту. Использует открытый API [OMDB] (http://www.omdbapi.com/) (Open Movie Database).
Репозиторий имеет три ветки:
1. MovieProject - код проекта, написанный с применением классовых компонентов.
2. MovieProjectFunc - код проекта, написанный с применением функциональных компонентов, контекста и хуков.
3. gh-pages - нужна для хоста проекта на gitHub pages. Посмотреть вживую на проект можно [тут] (https://c1rfa.github.io/reactMovie/).
Для отправки запроса и обработки ответа использовалась библиотека AXIOS.
Проект адаптирован для просмотра с мобильных устройств.

## API Endpoints

Из-за особенностей API, в качестве эндпоинта выступает всего одна URL-ссылка, в конец которой присоединяются get-параметры. 
Используемые GET-параметры:
* s - поисковый запрос (например, название фильма, сериала или видеоигры);
* type - указатель на области поиска (например, можно искать только в фильмах, сериалах или играх);
* page - номер страницы результатов поиска, которую надо вернуть.
Посмотреть формирование URL-ссылки запроса и обработки ответа можно по пути:  
1. ./src/context.js , функция SendRequest для ветки movieProjectFunc.
2. ./src/layout/Main.jsx , функция SendRequest для ветки movieProject

## Компоненты

Описание компонент, находяшихся в директории ./src/layout 
* Error.jsx - компонента для отрисовки ошибок, которые могут возникнуть при выполнении запроса;
* Footer.jsx - компонентя для отрисовки футера или подвала сайта;
* Header.jsx - компонентя для отрисовки хэдера или шапки сайта;
* Main.jsx - HOC(High Order Component)-компонента для отрисовки главной страницы сайта;
* Preloader.jsx - прелоадер для отображения во время загрузки данных с сервера.
Описание компонент, находящихся по пути ./src/components
* MovieCard.jsx - компонента для отрисовки карточки фильма;
* MovieList.jsx - HOC-компонента, контейнер для агрегации всех карточек фильмов;
* Pagination.jsx - компонента для отрисовки полоски выбора страницы;
* Search.jsx - компонента для отрисовки панели поиска.

## Контекст

В корне каталога ветки MovieProjectFunc содержаться два дополнительных файла: context.js и reducer.js.
context.js содержит описание изначального стейта проекта и методов с его работой, а в reducer.js определены action-type, которые описывают сценарии изменения стейта.
