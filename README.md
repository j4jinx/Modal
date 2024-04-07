# Modal
Minimal Modal/Dialog React Component

![npm bundle size](https://img.shields.io/bundlephobia/min/@j4jinxx/modal)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@j4jinxx/modal)
![npm download](https://img.shields.io/npm/dm/@j4jinxx/modal.svg)

## Install
    npm i @j4jinxx/modal

## Import
    import Modal from '@j4jinxx/modal';


## Props
|   Name          |  Type  |   Default  | Description |
|-----------------|:-------|:-----------|:------------|
| opened          | bool   | false      | If true, the modal is open |
| title           | string |            | Modal Title |
| size            | string | md         | Modal size (sm, md, lg)  |
| onClose         | func   | ( ) => { } | Callback fired when the component requests to be closed |
| onOverlayClick  | func   | ( ) => { } | Callback fired when the Overlay is Clicked |
| children        | node   |            | Modal content |
| color           | string | #ffffff    | Modal Color |
| overlayColor    | string | #e0e0e0    | Overlay Color  |