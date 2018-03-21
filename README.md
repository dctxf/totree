# Totree

扁平结构数据转换成树形结构数据

## Installation

use npm:

```
npm i totree --save
``` 

use yarn:

```
yarn add totree
```

## Usage

```js
const totree = require('totree')
const data = [{
    id: 371,
    pid: 0,
    menuname: "菜单1"
  },
  {
    id: 372,
    pid: 371,
    menuname: "菜单1-1"
  },
  {
    id: 374,
    pid: 0,
    menuname: "菜单2"
  },
  {
    id: 375,
    pid: 374,
    menuname: "菜单2-1"
  },
  {
    id: 376,
    pid: 0,
    menuname: "菜单3"
  },
  {
    id: 377,
    pid: 376,
    menuname: "菜单3-1"
  },
  {
    id: 378,
    pid: 376,
    menuname: "菜单3-2"
  },
  {
    id: 379,
    pid: 376,
    menuname: "菜单3-3"
  },
  {
    id: 380,
    pid: 376,
    menuname: "菜单3-4"
  },
  {
    id: 381,
    pid: 0,
    menuname: "菜单4"
  },
  {
    id: 382,
    pid: 381,
    menuname: "菜单4-1"
  },
  {
    id: 383,
    pid: 381,
    menuname: "菜单4-2"
  }
]
totree(data)
```
输出

```js
[{
    id: 371,
    pid: 0,
    menuname: "菜单1",
    children: [{
      id: 372,
      pid: 371,
      menuname: "菜单1-1"
    }]
  },
  {
    id: 374,
    pid: 0,
    menuname: "菜单2",
    children: [{
      id: 375,
      pid: 374,
      menuname: "菜单2-1"
    }]
  },
  {
    id: 376,
    pid: 0,
    menuname: "菜单3",
    children: [{
        id: 377,
        pid: 376,
        menuname: "菜单3-1"
      },
      {
        id: 378,
        pid: 376,
        menuname: "菜单3-2"
      },
      {
        id: 379,
        pid: 376,
        menuname: "菜单3-3"
      },
      {
        id: 380,
        pid: 376,
        menuname: "菜单3-4"
      }
    ]
  },
  {
    id: 381,
    pid: 0,
    menuname: "菜单4",
    children: [{
        id: 382,
        pid: 381,
        menuname: "菜单4-1"
      },
      {
        id: 383,
        pid: 381,
        menuname: "菜单4-2"
      }
    ]
  }
]
```