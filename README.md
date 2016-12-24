# vue-component-boilerplate

> I've forked this because it has a nice, simple almost up-to-date setup making it a good starter base for Vue-2.x and an updated web-pack. It's also going to help me figure out the problem of separating components into their own repository and reconciling common dependencies that need be compiled but only when needed. Also inline vendor libs and other oddities. They all need to play nice in client only environments (window present no node), server environments (no window but node present) and runtime-compile or cross-context environments (wait for window and sometimes node.. maybe?). Best to document this all eh.

## Status

### Current Task 

> Needs updating to vue2.x and checks to see if that kills it. Doing that within origin reoo working directory created using vue-cli. Will stry npm i and then yarn


Below this line pending edits/replace
---
### Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
$ npm install -g vue-cli
$ vue init coffcer/component my-component
$ cd my-component
$ npm install
$ npm run dev
```

### What's Included

- `npm run dev`: Live the component in your local server.

- `npm run build`: Build the component to UMD js

- `npm run test`: Run test.

- `npm run build:demo`: Build the dev page, and then you can live it in github.


### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vue-cli`:

``` bash
vue init username/repo my-project
```
