"use strict";(self.webpackChunksandbox=self.webpackChunksandbox||[]).push([[946],{9946:(w,l,a)=>{a.r(l),a.d(l,{CProgressBarRouteModule:()=>b});var i=a(9808),e=a(4893),s=a(3939);const m=function(o){return[o]},c=function(){return{matrixParams:"exact",queryParams:"exact",paths:"exact",fragment:"exact"}};function p(o,r){if(1&o&&(e.TgZ(0,"li"),e.TgZ(1,"a",3),e._uU(2),e.qZA(),e.qZA()),2&o){const t=r.$implicit;e.xp6(1),e.Q6J("routerLink",e.VKq(5,m,t.link))("routerLinkActive","active")("routerLinkActiveOptions",e.DdM(7,c))("fragment",t.fragment||null),e.xp6(1),e.hij(" ",t.label," ")}}let f=(()=>{class o{constructor(){this.navigation=[{label:"Progress Bar",alt:"",fragment:"progress-bar",link:"/components/progress-bar"},{label:"Basic Usage",alt:"",fragment:"basic-usage",link:"/components/progress-bar"}]}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-c-progress-bar-side-route"]],decls:5,vars:1,consts:[[1,"side-navigation-container"],[1,"title"],[4,"ngFor","ngForOf"],[3,"routerLink","routerLinkActive","routerLinkActiveOptions","fragment"]],template:function(t,n){1&t&&(e.TgZ(0,"nav",0),e.TgZ(1,"p",1),e._uU(2,"On this page"),e.qZA(),e.TgZ(3,"ul"),e.YNc(4,p,3,8,"li",2),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngForOf",n.navigation))},directives:[i.sg,s.yS,s.Od],styles:[""]}),o})();var u=a(3386),d=a(208);const g=function(o){return[o]};function v(o,r){if(1&o&&(e.TgZ(0,"a",17),e.O4$(),e.TgZ(1,"svg",18),e._UZ(2,"path",19),e.qZA(),e.kcU(),e.TgZ(3,"span",20),e._uU(4),e.qZA(),e.qZA()),2&o){const t=r.ngIf;e.Q6J("routerLink",e.VKq(2,g,t.link)),e.xp6(4),e.Oqu(t.label)}}function Z(o,r){if(1&o&&(e.TgZ(0,"a",21),e.TgZ(1,"span",20),e._uU(2),e.qZA(),e.O4$(),e.TgZ(3,"svg",18),e._UZ(4,"path",22),e.qZA(),e.qZA()),2&o){const t=r.ngIf;e.Q6J("routerLink",e.VKq(2,g,t.link)),e.xp6(2),e.Oqu(t.label)}}const h=[{path:"",component:(()=>{class o{constructor(){this.bottomNavigation={first:{label:"Notification",link:"/components/notification"},last:{label:"Select",link:"/components/select"}},this.markdownLoad="\n        ```typescript\n        import { TwProgressBarModule } from 'ng-tw';\n\n        @NgModule({\n            imports: [..., TwProgressBarModule],\n        });\n        ```\n    ",this.markdownUsage='\n        ```html\n        <div class="demo-container">\n            <div class="demo-row">\n                <div class="demo-row-title">Determinate</div>\n\n                <div class="demo-row-content md:flex-1">\n                    <tw-progress-bar\n                        class="w-full"\n                        [height]="6"\n                        [value]="37"\n                    ></tw-progress-bar>\n                </div>\n            </div>\n\n            <div class="demo-row">\n                <div class="demo-row-title">Indeterminate</div>\n\n                <div class="demo-row-content md:flex-1">\n                    <tw-progress-bar\n                        class="w-full"\n                        [height]="6"\n                        mode="indeterminate"\n                    ></tw-progress-bar>\n                </div>\n            </div>\n\n            <div class="demo-row">\n                <div class="demo-row-title">Buffer</div>\n\n                <div class="demo-row-content md:flex-1">\n                    <tw-progress-bar\n                        class="w-full"\n                        mode="buffer"\n                        [height]="6"\n                        [value]="37"\n                        [bufferValue]="57"\n                    ></tw-progress-bar>\n                </div>\n            </div>\n        </div>\n        ```\n    '}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-c-progress-bar-route"]],decls:35,vars:12,consts:[[1,"prose","max-w-none","lg:px-8"],["id","progress-bar"],[3,"data"],["id","basic-usage"],[1,"demo-container"],[1,"demo-row"],[1,"demo-row-title"],[1,"demo-row-content","md:flex-1"],[1,"w-full",3,"height","value"],["mode","indeterminate",1,"w-full",3,"height"],["mode","buffer",1,"w-full",3,"height","value","bufferValue"],[1,"max-h-96","block","rounded","overflow-y-auto",3,"data"],[1,"content-footer"],[1,"bottom-navigation-container"],[3,"hidden"],["class","first",3,"routerLink",4,"ngIf"],["class","last",3,"routerLink",4,"ngIf"],[1,"first",3,"routerLink"],["fill","currentColor","viewBox","0 0 20 20"],["fill-rule","evenodd","d","M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z","clip-rule","evenodd"],[1,"truncate"],[1,"last",3,"routerLink"],["fill-rule","evenodd","d","M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule","evenodd"]],template:function(t,n){1&t&&(e.TgZ(0,"article",0),e.TgZ(1,"h1",1),e._uU(2," Progress Bar "),e.qZA(),e.TgZ(3,"p"),e._uU(4,"To use the progress bar component you need to load it in the module you'll use it:"),e.qZA(),e._UZ(5,"markdown",2),e.TgZ(6,"h2"),e._uU(7,"Demo"),e.qZA(),e.TgZ(8,"h3",3),e._uU(9,"Basic usage"),e.qZA(),e.TgZ(10,"div",4),e.TgZ(11,"div",5),e.TgZ(12,"div",6),e._uU(13,"Determinate"),e.qZA(),e.TgZ(14,"div",7),e._UZ(15,"tw-progress-bar",8),e.qZA(),e.qZA(),e.TgZ(16,"div",5),e.TgZ(17,"div",6),e._uU(18,"Indeterminate"),e.qZA(),e.TgZ(19,"div",7),e._UZ(20,"tw-progress-bar",9),e.qZA(),e.qZA(),e.TgZ(21,"div",5),e.TgZ(22,"div",6),e._uU(23,"Buffer"),e.qZA(),e.TgZ(24,"div",7),e._UZ(25,"tw-progress-bar",10),e.qZA(),e.qZA(),e.qZA(),e.TgZ(26,"h3"),e._uU(27,"Usage"),e.qZA(),e._UZ(28,"markdown",11),e.qZA(),e.TgZ(29,"div",12),e.TgZ(30,"div",13),e._UZ(31,"span",14),e.YNc(32,v,5,4,"a",15),e._UZ(33,"span",14),e.YNc(34,Z,5,4,"a",16),e.qZA(),e.qZA()),2&t&&(e.xp6(5),e.Q6J("data",n.markdownLoad),e.xp6(10),e.Q6J("height",6)("value",37),e.xp6(5),e.Q6J("height",6),e.xp6(5),e.Q6J("height",6)("value",37)("bufferValue",57),e.xp6(3),e.Q6J("data",n.markdownUsage),e.xp6(3),e.Q6J("hidden",null!==(null==n.bottomNavigation?null:n.bottomNavigation.first)),e.xp6(1),e.Q6J("ngIf",null==n.bottomNavigation?null:n.bottomNavigation.first),e.xp6(1),e.Q6J("hidden",null!==(null==n.bottomNavigation?null:n.bottomNavigation.last)),e.xp6(1),e.Q6J("ngIf",null==n.bottomNavigation?null:n.bottomNavigation.last))},directives:[u.lF,d.RI,i.O5,s.yS],styles:[""]}),o})()},{path:"",component:f,outlet:"side"}];let b=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[i.ez,s.Bz.forChild(h),u.JP,d.Is]]}),o})()}}]);