# burger app: Eat Da Burger

Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

This node application uses the following npm packages: 
[express](https://www.npmjs.com/package/express)
[body-parser](https://www.npmjs.com/package/body-parser) 
[express-handlebars](https://www.npmjs.com/package/express-handlebars)
[method-override](https://www.npmjs.com/package/method-override)
[mysql](https://www.npmjs.com/package/mysql)

#### Directory structure

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── styles.css
│   │   │   └── reset.css
│   │   └── img
│   │       └── burger.jpg
│   │       └── demoapp.gif
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

![demo of app](https://github.com/r-ruiz/burger/blob/master/public/assets/img/demoapp.gif)