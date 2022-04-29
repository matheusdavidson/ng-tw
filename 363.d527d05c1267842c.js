"use strict";(self.webpackChunksandbox=self.webpackChunksandbox||[]).push([[363],{7895:(A,r,e)=>{e.r(r),e.d(r,{InstallationRouteModule:()=>h});var s=e(9808),t=e(4893),u=e(3386),l=e(3939);const d=function(n){return[n]};function c(n,i){if(1&n&&(t.TgZ(0,"a",12),t.O4$(),t.TgZ(1,"svg",13),t._UZ(2,"path",14),t.qZA(),t.kcU(),t.TgZ(3,"span",15),t._uU(4),t.qZA(),t.qZA()),2&n){const o=i.ngIf;t.Q6J("routerLink",t.VKq(2,d,o.link)),t.xp6(4),t.Oqu(o.label)}}function g(n,i){if(1&n&&(t.TgZ(0,"a",16),t.TgZ(1,"span",15),t._uU(2),t.qZA(),t.O4$(),t.TgZ(3,"svg",13),t._UZ(4,"path",17),t.qZA(),t.qZA()),2&n){const o=i.ngIf;t.Q6J("routerLink",t.VKq(2,d,o.link)),t.xp6(2),t.Oqu(o.label)}}const m=function(n){return[n]},Z=function(){return{matrixParams:"exact",queryParams:"exact",paths:"exact",fragment:"exact"}};function f(n,i){if(1&n&&(t.TgZ(0,"li"),t.TgZ(1,"a",3),t._uU(2),t.qZA(),t.qZA()),2&n){const o=i.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(5,m,o.link))("routerLinkActive","active")("routerLinkActiveOptions",t.DdM(7,Z))("fragment",o.fragment||null),t.xp6(1),t.hij(" ",o.label," ")}}const T=[{path:"",component:(()=>{class n{constructor(){this.bottomNavigation={first:{label:"Introduction",link:"/"},last:{label:"Button",link:"/components/button"}},this.markdownInstall="\n        ```bash\n        $ npm install ng-tw @angular/cdk\n        ```\n    ",this.markdownCDKCSSImport="\n        ```scss\n        @import '@angular/cdk/overlay-prebuilt.css';\n        ```\n    ",this.markdownTailwindColorConfig="\n        ```js\n        const colors = require('tailwindcss/colors');\n\n        module.exports = {\n            //...\n            theme: {\n                extend: {\n                    colors: {\n                        primary: { ...colors.indigo, DEFAULT: colors.indigo[500] },\n                        secondary: { ...colors.pink, DEFAULT: colors.pink[500] },\n                        danger: { ...colors.red, DEFAULT: colors.red[500] },\n                    },\n                },\n            },\n            variants: {\n                extend: {\n                    opacity: ['disabled'],\n                    backgroundColor: ['disabled'],\n                },\n            },\n            //...\n        }\n        ```\n\n        ### Disabled Variants\n        > It's also important to note that you should add the `disabled` variant for `opacity` and `backgroundColor`.\n    ",this.markdownTailwindContentConfig="\n        ```js\n        module.exports = {\n            //...\n            content: [..., './node_modules/ng-tw/**/*'],\n            //...\n        }\n        ```\n    "}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-installation-route"]],decls:70,vars:8,consts:[[1,"prose","max-w-none","lg:px-8"],["id","installation"],[1,"tw-code"],[3,"data"],["id","tailwind-config"],["href","https://tailwindcss.com/docs/guides/angular","target","_blank",1,"text-primary","underline"],[1,"list-disc","list-inside"],[1,"content-footer"],[1,"bottom-navigation-container"],[3,"hidden"],["class","first",3,"routerLink",4,"ngIf"],["class","last",3,"routerLink",4,"ngIf"],[1,"first",3,"routerLink"],["fill","currentColor","viewBox","0 0 20 20"],["fill-rule","evenodd","d","M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z","clip-rule","evenodd"],[1,"truncate"],[1,"last",3,"routerLink"],["fill-rule","evenodd","d","M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule","evenodd"]],template:function(o,a){1&o&&(t.TgZ(0,"article",0),t.TgZ(1,"h1",1),t._uU(2," Installation "),t.qZA(),t.TgZ(3,"p"),t._uU(4,"Add "),t.TgZ(5,"code",2),t._uU(6,"ng-tw"),t.qZA(),t._uU(7,", "),t.TgZ(8,"code",2),t._uU(9,"tailwind"),t.qZA(),t._uU(10," and "),t.TgZ(11,"code",2),t._uU(12,"@angular/cdk"),t.qZA(),t._uU(13," dependency to your project:"),t.qZA(),t._UZ(14,"markdown",3),t._UZ(15,"br"),t.TgZ(16,"p"),t._uU(17,"We use "),t.TgZ(18,"code",2),t._uU(19,"@angular/cdk"),t.qZA(),t._uU(20," mostly for overlay components like notification, select and others, in order to make it work on a minimum setup you'll need to import their css in your "),t.TgZ(21,"code",2),t._uU(22,"style.scss"),t.qZA(),t._uU(23,":"),t.qZA(),t._UZ(24,"markdown",3),t.TgZ(25,"h2",4),t._uU(26," Tailwind Config "),t.qZA(),t.TgZ(27,"p"),t._uU(28," First you'll need to setup tailwind on your angular project, to do that you can follow the "),t.TgZ(29,"a",5),t._uU(30,"setup documentation"),t.qZA(),t._uU(31," on tailwind website. "),t.qZA(),t.TgZ(32,"p"),t._uU(33,"With angular +12 the process is pretty straight forward and since this lib was made with angular +13 you shouldn't have much problems to setup tailwind."),t.qZA(),t.TgZ(34,"h4"),t._uU(35,"Color Config"),t.qZA(),t.TgZ(36,"p"),t._uU(37,"The theme design is based on a set of colors to make it easy to use inside components."),t.qZA(),t.TgZ(38,"ul",6),t.TgZ(39,"li"),t.TgZ(40,"code",2),t._uU(41,"primary"),t.qZA(),t.qZA(),t.TgZ(42,"li"),t.TgZ(43,"code",2),t._uU(44,"secondary"),t.qZA(),t.qZA(),t.TgZ(45,"li"),t.TgZ(46,"code",2),t._uU(47,"danger"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(48,"h4"),t._uU(49,"Color config in "),t.TgZ(50,"code",2),t._uU(51,"tailwind.config.js"),t.qZA(),t.qZA(),t._UZ(52,"markdown",3),t.TgZ(53,"h4"),t._uU(54,"Content"),t.qZA(),t.TgZ(55,"p"),t._uU(56,"Tailwind uses purge to make the bundle size smaller, you'll need to setup the lib in the "),t.TgZ(57,"code",2),t._uU(58,"content"),t.qZA(),t._uU(59," section of your "),t.TgZ(60,"code",2),t._uU(61,"tailwind.config.js"),t.qZA(),t._uU(62," to make it work"),t.qZA(),t._UZ(63,"markdown",3),t.qZA(),t.TgZ(64,"div",7),t.TgZ(65,"div",8),t._UZ(66,"span",9),t.YNc(67,c,5,4,"a",10),t._UZ(68,"span",9),t.YNc(69,g,5,4,"a",11),t.qZA(),t.qZA()),2&o&&(t.xp6(14),t.Q6J("data",a.markdownInstall),t.xp6(10),t.Q6J("data",a.markdownCDKCSSImport),t.xp6(28),t.Q6J("data",a.markdownTailwindColorConfig),t.xp6(11),t.Q6J("data",a.markdownTailwindContentConfig),t.xp6(3),t.Q6J("hidden",null!==(null==a.bottomNavigation?null:a.bottomNavigation.first)),t.xp6(1),t.Q6J("ngIf",null==a.bottomNavigation?null:a.bottomNavigation.first),t.xp6(1),t.Q6J("hidden",null!==(null==a.bottomNavigation?null:a.bottomNavigation.last)),t.xp6(1),t.Q6J("ngIf",null==a.bottomNavigation?null:a.bottomNavigation.last))},directives:[u.lF,s.O5,l.yS],styles:[""]}),n})()},{path:"",component:(()=>{class n{constructor(){this.navigation=[{label:"Installation",alt:"",fragment:"installation",link:"/installation"},{label:"Tailwind Config",alt:"",fragment:"tailwind-config",link:"/installation"}]}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-installation-side-route"]],decls:5,vars:1,consts:[[1,"side-navigation-container"],[1,"title"],[4,"ngFor","ngForOf"],[3,"routerLink","routerLinkActive","routerLinkActiveOptions","fragment"]],template:function(o,a){1&o&&(t.TgZ(0,"nav",0),t.TgZ(1,"p",1),t._uU(2,"On this page"),t.qZA(),t.TgZ(3,"ul"),t.YNc(4,f,3,8,"li",2),t.qZA(),t.qZA()),2&o&&(t.xp6(4),t.Q6J("ngForOf",a.navigation))},directives:[s.sg,l.yS,l.Od],styles:[""]}),n})(),outlet:"side"}];let h=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[s.ez,l.Bz.forChild(T),u.JP]]}),n})()}}]);