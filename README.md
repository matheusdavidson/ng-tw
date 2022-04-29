> This lib is still under construction however some components are still working.

# Angular components for Tailwind CSS

ng-tw is a set of components to use tailwind css with angular, created with love to the community.

### Instructions, documentation and demo/playground

https://ng-tw.mtda.me

### Install

Add `ng-tw`, `tailwind` and `@angular/cdk` dependency to your project:

```bash 
npm install ng-tw @angular/cdk tailwindcss
````

We use `@angular/cdk` mostly for overlay components like notification, select and others, in order to make it work on a minimum setup you'll need to import their css in your style.scss:

```scss 
@import '@angular/cdk/overlay-prebuilt.css';
```

### Tailwind Config

First you'll need to setup tailwind on your angular project, to do that you can follow the setup documentation on tailwind website.

With angular +12 the process is pretty straight forward and since this lib was made with angular +13 you shouldn't have much problems to setup tailwind.

#### Color config

The theme design is based on a set of colors to make it easy to use inside components.

- primary
- secondary
- danger
- warning

#### Color config in `tailwind.config.js`

```typescript
const colors = require('tailwindcss/colors');

module.exports = {
    //...
    theme: {
        extend: {
            colors: {
                primary: { ...colors.indigo, DEFAULT: colors.indigo[500] },
                secondary: { ...colors.pink, DEFAULT: colors.pink[500] },
                danger: { ...colors.red, DEFAULT: colors.red[500] },
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
            backgroundColor: ['disabled'],
        },
    },
    //...
}
```

#### Disabled Variants

> It's also important to note that you should add the disabled variant for opacity and backgroundColor.

#### Content

Tailwind uses purge to make the bundle size smaller, you'll need to setup the lib in the `content` section of your `tailwind.config.js` to make it work

```js
module.exports = {
    //...
    content: [..., './node_modules/ng-tw/**/*'],
    //...
}
```

## Further documentation

For more instructions and documentation:

https://ng-tw.mtda.me
