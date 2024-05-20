# Мобильное веб-приложение: Mobile Drive (версия для водителей организации).

## Стек технологий

* Языки программирования :
    + JavaScript
    + Python
* СУБД :
    + PostgreSQL
* Фреймворки :
    + React
    + Django Rest Framework
* Инструменты для разработки :
    + Git Hub
    + Postman
    + Pg Admin
* Библиотеки и Директивы :
    + `React router dom` v6"action, loader, form"
    + `TanStack`
    + `Scss` предпроцессор   
    + `Tailwind`
    + `alias` для импортов 
    + `yup` для валидации формы
    + `ESLint, Prettier`

`Примечание: без подключенной БД будет работать только страница авторизации
`
## Работа Приложении.
###  1. Вход и Авторизация.

![Image alt](https://github.com/Yasuoqp/Mobile-Drive-app/blob/main/imgReadme/sign-in.png)
![Image alt](https://github.com/Yasuoqp/Mobile-Drive-app/blob/main/imgReadme/sign-up.png)

> - После успешного входа или регистрации получаем token, сохраняя его в localstorage, далее осуществляется redirect на главную страницу  
>   + При попытке пройти на любую из страниц без `token`  осуществлеяется `redirect` на авторизацию 

### 2. Список задач. `current tasks`

 #### Пользователь получает `tasks` по токену только для даннго юзера. `Картинка № 1`
> 
> В [Control Center](https://github.com/Yasuoqp/control-center) по умолчанию в объекте создаются ключи  `isActive: false` и `status: "Ожидание"`, `urgency: false`          
> 
> Затем приложение понимает, что заказ вновь создан и отображает его в `current-task` для текущих задач, ориентируясь на ключ `urgency` ставит цвет `border`
>

 #### При нажатии на `task` Открывается информация о поручении `Картинка № 2`
> 
> После открытия можно ознакомиться с полной информации объекта `task`.
> 
> - При нажатии на зеленую кнопку `Принять заказ`
>     + Поменяет свойства объекта 
>       + `status: "В пути"` для отображения в [Control Center](https://github.com/Yasuoqp/control-center) что водитель приступил к заказу
>       + `urgency: true` для смены цвета в `current-task` на зеленый
>       
> 
> - При нажатии на желтую кнопку `Поставить на удержание`   
>   + Поменяет `status` и `urgency` свойства по умолчанию для обозначения, что заказ в данный момент не выполняется
> 
> 
> - При нажатии на красную кнопку `Завершить заказ`
>   + Поменяет свойства объекта 
>    + `status: "Завершено"` 
>    + `isActive: true` Не спрашивайте почему так вышло :)
>   
> 
> 
> - Отправит на сервер 
>   + При успешной отправке, `action` в асинхроном режими сделает новый запрос на обновленный `current-tasks`
>   + затем `redirect` на главную страницу с уже обновленным `current-task`
>
>   
> 
1) ![Image alt](https://github.com/Yasuoqp/Mobile-Drive-app/blob/main/imgReadme/current-task.png) 
2.![Image alt](https://github.com/Yasuoqp/Mobile-Drive-app/blob/main/imgReadme/task-info.png) 

### Завершенные Задачи `completed tasks`

1)  ![Image alt](https://github.com/Yasuoqp/Mobile-Drive-app/blob/main/imgReadme/completed-task.png)

> На данном этапе это все, пока ведется просто отображение завершенных задач 
> 
> но функционал будет добавляться для возможности вернуть их в 'current task' 
> Дабы узбежать случайных ошибок после завершения заказа. 
> 
>


 ### Последняя кнопка на панели - это выход из приложения 

  - При нажатии на кнопку выхода 
    + Срабатывает `action` для удаления токена из `localstorage`
    + `loader` для отправки на бэк выход из системы 
  

### Краткое содержание 

> - Регистрация и авторизация по токену из собственно написанного бэкэнда.
Запрос осуществляется с наличием токена с целью получения информации для конкретного юзера.
> 
> 
>- Принцип работы:
>   + Водитель получает поручение в удобном интерфейсе с последующим просмотром всех деталей поручения.
>   + Также он может получить подтверждение или же самостоятельно поставить на удержание выполнение поручения.
> 
> 
> - Каждое событие водителя отображается в админ панели [Control Center](https://github.com/Yasuoqp/control-center) (далее проект Админ панель).
> 
> 
>- Изначально использовался` React, Redux toolkit, RTK Query, ant design.`
Затем было принято решение, избавиться от `Redux и RTK Query, ant design` из-за ненадобности и лишнего веса для простого
приложение. Таким образом, переписано приложение было на` React, React router dom v6"action, loader, form" , TanStack,
tailwind, контроль ESLint, Prettier.`
>Таким образом, приложение сократилось в объёме и количественно файлов.
