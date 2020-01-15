# TaskTracker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Discription




Менеджер задач

Функционал:

  1. Вход по логину и паролю
    Пользователи: [
      {email: dima@mail.ru, password: 123456},
      {email: lena@mail.ru, password: 654321},
      {email: alex@mail.ru, password: qwerty}
    ]
       
 2. Создание задачи, редактирование задачи (при редактировании задачи появляется возможнось установить статус задачи на "Готово"
  
 3. Главная страница
  
    Отображение задач: подробный вид, краткий вид, scrum - доска (с использованием drug & drop библиотеки Angular Material. При
    перемещении задачи в соответствующую колонку меняется статус задачи)
  
    Сортировка и поиск задачи по названию
    
    Автообновление списка задач через каждую минуту.
  
  
  
