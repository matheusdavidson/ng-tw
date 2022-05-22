"use strict";(self.webpackChunksandbox=self.webpackChunksandbox||[]).push([[740],{4740:(v,i,u)=>{u.r(i),u.d(i,{CButtonRouteModule:()=>T});var l=u(9808),t=u(4893),d=u(3386),s=u(208),r=u(3939);const b=function(o){return[o]};function g(o,a){if(1&o&&(t.TgZ(0,"a",51),t.O4$(),t.TgZ(1,"svg",52),t._UZ(2,"path",53),t.qZA(),t.kcU(),t.TgZ(3,"span",54),t._uU(4),t.qZA(),t.qZA()),2&o){const n=a.ngIf;t.Q6J("routerLink",t.VKq(2,b,n.link)),t.xp6(4),t.Oqu(n.label)}}function c(o,a){if(1&o&&(t.TgZ(0,"a",55),t.TgZ(1,"span",54),t._uU(2),t.qZA(),t.O4$(),t.TgZ(3,"svg",52),t._UZ(4,"path",56),t.qZA(),t.qZA()),2&o){const n=a.ngIf;t.Q6J("routerLink",t.VKq(2,b,n.link)),t.xp6(2),t.Oqu(n.label)}}const m=function(o){return[o]},w=function(){return{matrixParams:"exact",queryParams:"exact",paths:"exact",fragment:"exact"}};function y(o,a){if(1&o&&(t.TgZ(0,"li"),t.TgZ(1,"a",3),t._uU(2),t.qZA(),t.qZA()),2&o){const n=a.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(5,m,n.link))("routerLinkActive","active")("routerLinkActiveOptions",t.DdM(7,w))("fragment",n.fragment||null),t.xp6(1),t.hij(" ",n.label," ")}}const p=[{path:"",component:(()=>{class o{constructor(){this.bottomNavigation={first:{label:"Installation",link:"/installation"},last:{label:"Dropdown",link:"/components/dropdown"}},this.markdownLoad="\n        ```typescript\n        import { TwButtonModule } from 'ng-tw';\n\n        @NgModule({\n            imports: [..., TwButtonModule],\n        });\n        ```\n    ",this.markdownCustomizePaddingColor='\n        ```html\n        <button\n            tw-button\n            layout="raised"\n            color="primary"\n            ignore="bg-primary text-white py-2"\n            class="bg-yellow-500 text-black py-8"\n        >\n            Custon button\n        </button>\n        ```\n    ',this.markdownLayoutAndColor='\n        ```html\n        <div class="demo-container">\n\n            <div class="demo-row">\n                <div class="demo-row-title">Basic</div>\n\n                <div class="demo-row-content">\n                    <button tw-button>\n                        Basic\n                    </button>\n\n                    <button\n                        tw-button\n                        color="primary"\n                    >\n                        Primary\n                    </button>\n\n                    <button\n                        tw-button\n                        color="secondary"\n                    >\n                        Secondary\n                    </button>\n\n                    <button\n                        tw-button\n                        color="danger"\n                    >\n                        Danger\n                    </button>\n\n                    <button\n                        tw-button\n                        disabled\n                    >\n                        Disabled\n                    </button>\n\n                    <a\n                        tw-button\n                        disabled\n                        href="https://www.google.com"\n                        target="_blank"\n                    >\n                        Link\n                    </a>\n                </div>\n            </div>\n\n            <div class="demo-row">\n                <div class="demo-row-title">Raised</div>\n\n                <div class="demo-row-content">\n                    <button\n                        tw-button\n                        layout="raised"\n                    >\n                        Basic\n                    </button>\n\n                    <button\n                        tw-button\n                        color="primary"\n                        layout="raised"\n                    >\n                        Primary\n                    </button>\n\n                    <button\n                        tw-button\n                        color="secondary"\n                        layout="raised"\n                    >\n                        Secondary\n                    </button>\n\n                    <button\n                        tw-button\n                        color="danger"\n                        layout="raised"\n                    >\n                        Danger\n                    </button>\n\n                    <button\n                        tw-button\n                        layout="raised"\n                        disabled\n                    >\n                        Disabled\n                    </button>\n\n                    <a\n                        tw-button\n                        disabled\n                        layout="raised"\n                        href="https://www.google.com"\n                        target="_blank"\n                    >\n                        Link\n                    </a>\n                </div>\n            </div>\n\n            <div class="demo-row">\n                <div class="demo-row-title">Stroked</div>\n\n                <div class="demo-row-content">\n                    <button\n                        tw-button\n                        layout="stroked"\n                    >\n                        Basic\n                    </button>\n\n                    <button\n                        tw-button\n                        color="primary"\n                        layout="stroked"\n                    >\n                        Primary\n                    </button>\n\n                    <button\n                        tw-button\n                        color="secondary"\n                        layout="stroked"\n                    >\n                        Secondary\n                    </button>\n\n                    <button\n                        tw-button\n                        color="danger"\n                        layout="stroked"\n                    >\n                        Danger\n                    </button>\n\n                    <button\n                        tw-button\n                        layout="stroked"\n                        disabled\n                    >\n                        Disabled\n                    </button>\n\n                    <a\n                        tw-button\n                        disabled\n                        layout="stroked"\n                        href="https://www.google.com"\n                        target="_blank"\n                    >\n                        Link\n                    </a>\n                </div>\n            </div>\n\n            <div class="demo-row">\n                <div class="demo-row-title">Flat</div>\n\n                <div class="demo-row-content">\n                    <button\n                        tw-button\n                        layout="flat"\n                    >\n                        Basic\n                    </button>\n\n                    <button\n                        tw-button\n                        color="primary"\n                        layout="flat"\n                    >\n                        Primary\n                    </button>\n\n                    <button\n                        tw-button\n                        color="secondary"\n                        layout="flat"\n                    >\n                        Secondary\n                    </button>\n\n                    <button\n                        tw-button\n                        color="danger"\n                        layout="flat"\n                    >\n                        Danger\n                    </button>\n\n                    <button\n                        tw-button\n                        layout="flat"\n                        disabled\n                    >\n                        Disabled\n                    </button>\n\n                    <a\n                        tw-button\n                        disabled\n                        layout="flat"\n                        href="https://www.google.com"\n                        target="_blank"\n                    >\n                        Link\n                    </a>\n                </div>\n            </div>\n\n        </div>\n\n        ```\n    ',this.markdownButtonGroup='\n        ```html\n        <div class="flex items-center">\n            <button\n                tw-button\n                layout="stroked"\n                ignore="rounded border"\n                class="rounded-l border-y border-l"\n            >\n                Left\n            </button>\n            <button\n                tw-button\n                layout="stroked"\n                ignore="rounded"\n            >\n                Center\n            </button>\n            <button\n                tw-button\n                layout="stroked"\n                ignore="rounded border"\n                class="rounded-r border-y border-r"\n            >\n                Right\n            </button>\n        </div>\n        ```\n    '}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-c-button-route"]],decls:138,vars:8,consts:[[1,"prose","max-w-none","lg:px-8"],["id","button"],[3,"data"],["id","layout-and-colors"],[1,"demo-container"],[1,"demo-row"],[1,"demo-row-title"],[1,"demo-row-content"],["tw-button",""],["tw-button","","color","primary"],["tw-button","","color","secondary"],["tw-button","","color","danger"],["tw-button","","disabled",""],["tw-button","","disabled","","href","https://www.google.com","target","_blank"],["tw-button","","layout","raised"],["tw-button","","color","primary","layout","raised"],["tw-button","","color","secondary","layout","raised"],["tw-button","","color","danger","layout","raised"],["tw-button","","layout","raised","disabled",""],["tw-button","","disabled","","layout","raised","href","https://www.google.com","target","_blank"],["tw-button","","layout","stroked"],["tw-button","","color","primary","layout","stroked"],["tw-button","","color","secondary","layout","stroked"],["tw-button","","color","danger","layout","stroked"],["tw-button","","layout","stroked","disabled",""],["tw-button","","disabled","","layout","stroked","href","https://www.google.com","target","_blank"],["tw-button","","layout","flat"],["tw-button","","color","primary","layout","flat"],["tw-button","","color","secondary","layout","flat"],["tw-button","","color","danger","layout","flat"],["tw-button","","layout","flat","disabled",""],["tw-button","","disabled","","layout","flat","href","https://www.google.com","target","_blank"],["tw-button","","layout","flat","color","primary","size","xs"],["tw-button","","layout","flat","color","primary","size","sm"],["tw-button","","layout","flat","color","primary","size","md"],["tw-button","","layout","flat","color","primary","size","lg"],["tw-button","","layout","flat","color","primary","size","xl"],[1,"max-h-96","block","rounded","overflow-y-auto",3,"data"],["id","customizing"],[1,"tw-code"],["tw-button","","layout","raised","color","primary","ignore","bg-primary text-white py-2",1,"bg-yellow-500","text-black","py-8"],[1,"w-full",3,"data"],[1,"flex","items-center"],["tw-button","","layout","stroked","ignore","rounded border",1,"rounded-l","border-y","border-l"],["tw-button","","layout","stroked","ignore","rounded"],["tw-button","","layout","stroked","ignore","rounded border",1,"rounded-r","border-y","border-r"],[1,"content-footer"],[1,"bottom-navigation-container"],[3,"hidden"],["class","first",3,"routerLink",4,"ngIf"],["class","last",3,"routerLink",4,"ngIf"],[1,"first",3,"routerLink"],["fill","currentColor","viewBox","0 0 20 20"],["fill-rule","evenodd","d","M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z","clip-rule","evenodd"],[1,"truncate"],[1,"last",3,"routerLink"],["fill-rule","evenodd","d","M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule","evenodd"]],template:function(n,e){1&n&&(t.TgZ(0,"article",0),t.TgZ(1,"h1",1),t._uU(2," Button "),t.qZA(),t.TgZ(3,"p"),t._uU(4,"To use the button component you need to load on your module:"),t.qZA(),t._UZ(5,"markdown",2),t.TgZ(6,"h2"),t._uU(7,"Demo"),t.qZA(),t.TgZ(8,"h3",3),t._uU(9,"Layout and Colors"),t.qZA(),t.TgZ(10,"div",4),t.TgZ(11,"div",5),t.TgZ(12,"div",6),t._uU(13,"Basic"),t.qZA(),t.TgZ(14,"div",7),t.TgZ(15,"button",8),t._uU(16," Basic "),t.qZA(),t.TgZ(17,"button",9),t._uU(18," Primary "),t.qZA(),t.TgZ(19,"button",10),t._uU(20," Secondary "),t.qZA(),t.TgZ(21,"button",11),t._uU(22," Danger "),t.qZA(),t.TgZ(23,"button",12),t._uU(24," Disabled "),t.qZA(),t.TgZ(25,"a",13),t._uU(26," Link "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"div",5),t.TgZ(28,"div",6),t._uU(29,"Raised"),t.qZA(),t.TgZ(30,"div",7),t.TgZ(31,"button",14),t._uU(32," Basic "),t.qZA(),t.TgZ(33,"button",15),t._uU(34," Primary "),t.qZA(),t.TgZ(35,"button",16),t._uU(36," Secondary "),t.qZA(),t.TgZ(37,"button",17),t._uU(38," Danger "),t.qZA(),t.TgZ(39,"button",18),t._uU(40," Disabled "),t.qZA(),t.TgZ(41,"a",19),t._uU(42," Link "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(43,"div",5),t.TgZ(44,"div",6),t._uU(45,"Stroked"),t.qZA(),t.TgZ(46,"div",7),t.TgZ(47,"button",20),t._uU(48," Basic "),t.qZA(),t.TgZ(49,"button",21),t._uU(50," Primary "),t.qZA(),t.TgZ(51,"button",22),t._uU(52," Secondary "),t.qZA(),t.TgZ(53,"button",23),t._uU(54," Danger "),t.qZA(),t.TgZ(55,"button",24),t._uU(56," Disabled "),t.qZA(),t.TgZ(57,"a",25),t._uU(58," Link "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(59,"div",5),t.TgZ(60,"div",6),t._uU(61,"Flat"),t.qZA(),t.TgZ(62,"div",7),t.TgZ(63,"button",26),t._uU(64," Basic "),t.qZA(),t.TgZ(65,"button",27),t._uU(66," Primary "),t.qZA(),t.TgZ(67,"button",28),t._uU(68," Secondary "),t.qZA(),t.TgZ(69,"button",29),t._uU(70," Danger "),t.qZA(),t.TgZ(71,"button",30),t._uU(72," Disabled "),t.qZA(),t.TgZ(73,"a",31),t._uU(74," Link "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(75,"h3"),t._uU(76,"Sizes"),t.qZA(),t.TgZ(77,"div",4),t.TgZ(78,"div",5),t.TgZ(79,"button",32),t._uU(80," Button size "),t.qZA(),t.TgZ(81,"button",33),t._uU(82," Button size "),t.qZA(),t.TgZ(83,"button",34),t._uU(84," Button size "),t.qZA(),t.TgZ(85,"button",35),t._uU(86," Button size "),t.qZA(),t.TgZ(87,"button",36),t._uU(88," Button size "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(89,"h3"),t._uU(90,"Usage"),t.qZA(),t._UZ(91,"markdown",37),t.TgZ(92,"h2",38),t._uU(93,"Customizing"),t.qZA(),t.TgZ(94,"p"),t._uU(95,"In an utility first environment it's tricky to build customizable components, we must have a default state first but also being able to customize things around, with that in mind "),t.TgZ(96,"code",39),t._uU(97,"ng-tw"),t.qZA(),t._uU(98," uses as a role an "),t.TgZ(99,"code",39),t._uU(100,"@Input"),t.qZA(),t._uU(101," called "),t.TgZ(102,"code",39),t._uU(103,"ignore"),t.qZA(),t._uU(104," and "),t.TgZ(105,"code",39),t._uU(106,"class"),t.qZA(),t._uU(107,", this will let you take advantage of the current classes applied but still being able to customize the component around the tailwind classes you want."),t.qZA(),t.TgZ(108,"p"),t._uU(109,"The role here is: Ignore what you don't want and add in your classes"),t.qZA(),t.TgZ(110,"h4"),t._uU(111,"Customize padding and colors"),t.qZA(),t.TgZ(112,"p"),t._uU(113,"Padding and color can be customized with pre made values, the purpose of this section is to show how you could customize if needed"),t.qZA(),t.TgZ(114,"button",40),t._uU(115," Custom button "),t.qZA(),t._UZ(116,"markdown",41),t.TgZ(117,"p"),t._uU(118,"You can ignore any class generated by "),t.TgZ(119,"code",39),t._uU(120,"ng-tw"),t.qZA(),t._uU(121,", anything, just have a look on developer tools, ignore and add the class you want."),t.qZA(),t.TgZ(122,"h4"),t._uU(123,"Button group"),t.qZA(),t.TgZ(124,"div",42),t.TgZ(125,"button",43),t._uU(126," Left "),t.qZA(),t.TgZ(127,"button",44),t._uU(128," Center "),t.qZA(),t.TgZ(129,"button",45),t._uU(130," Right "),t.qZA(),t.qZA(),t._UZ(131,"markdown",2),t.qZA(),t.TgZ(132,"div",46),t.TgZ(133,"div",47),t._UZ(134,"span",48),t.YNc(135,g,5,4,"a",49),t._UZ(136,"span",48),t.YNc(137,c,5,4,"a",50),t.qZA(),t.qZA()),2&n&&(t.xp6(5),t.Q6J("data",e.markdownLoad),t.xp6(86),t.Q6J("data",e.markdownLayoutAndColor),t.xp6(25),t.Q6J("data",e.markdownCustomizePaddingColor),t.xp6(15),t.Q6J("data",e.markdownButtonGroup),t.xp6(3),t.Q6J("hidden",null!==(null==e.bottomNavigation?null:e.bottomNavigation.first)),t.xp6(1),t.Q6J("ngIf",null==e.bottomNavigation?null:e.bottomNavigation.first),t.xp6(1),t.Q6J("hidden",null!==(null==e.bottomNavigation?null:e.bottomNavigation.last)),t.xp6(1),t.Q6J("ngIf",null==e.bottomNavigation?null:e.bottomNavigation.last))},directives:[d.lF,s.r0,l.O5,r.yS],styles:[""]}),o})()},{path:"",component:(()=>{class o{constructor(){this.navigation=[{label:"Button",alt:"",fragment:"button",link:"/components/button"},{label:"Layout and Colors",alt:"",fragment:"layout-and-colors",link:"/components/button"},{label:"Customizing",alt:"",fragment:"customizing",link:"/components/button"}]}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-c-button-side-route"]],decls:5,vars:1,consts:[[1,"side-navigation-container"],[1,"title"],[4,"ngFor","ngForOf"],[3,"routerLink","routerLinkActive","routerLinkActiveOptions","fragment"]],template:function(n,e){1&n&&(t.TgZ(0,"nav",0),t.TgZ(1,"p",1),t._uU(2,"On this page"),t.qZA(),t.TgZ(3,"ul"),t.YNc(4,y,3,8,"li",2),t.qZA(),t.qZA()),2&n&&(t.xp6(4),t.Q6J("ngForOf",e.navigation))},directives:[l.sg,r.yS,r.Od],styles:[""]}),o})(),outlet:"side"}];let T=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[l.ez,r.Bz.forChild(p),d.JP,s.dX]]}),o})()}}]);