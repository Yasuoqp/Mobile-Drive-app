# Мобильное веб-приложение: Mobile Drive (версия для водителей организации).

## Стек технологий

* Языки программирования :
    + JavaScript
    + Python
* СУБД :
    + Postgresql
* Фрейморки :
    + React
    + Django Rest Framework
* Инструменты для разработки :
    + Git Hub
    + Postman
    + Pg Admin
* Технологии :
    + React router dom v6"action, loader, form"
    + TanStack
    + Tailwind
    + ESLint, Prettier

## Работа Приложени.
### Вход в приложение и Авторизация 

![Image alt](https://github.com/Yasuoqp/Mobile-Drive-app/blob/main/imgReadme/sign-in.png)
![Image alt](https://github.com/Yasuoqp/Mobile-Drive-app/blob/main/imgReadme/sign-up.png)
Регистрация и авторизация по токену из собственно написанного бэкэнда.
Токен сохраняется в локал сторедж.
Запрос осуществляется с наличием токена с целью получения информации для конкретного юзера.

Принцип работы:
Водитель получает поручение в удобном интерфейсе с последующим просмотром всех деталей поручения.
Также он может получить подтверждение или же самостоятельно поставить на удержание выполнение поручения.

Каждое событие водителя отображается в админ панели (далее проект Админ панель).

Технологии:
Изначально использовался React, Redux toolkit, RTK Query, ant design.
Затем было принято решение, избавиться от Redux и RTK Query, ant design из-за ненадобности и лишнего веса для простого
приложение. Таким образом, переписан приложение было на React, React router dom v6"action, loader, form" , TanStack,
tailwind, контроль ESLint, Prettier.
Таким образом, приложение сократилось в объёме и количественно файлов.