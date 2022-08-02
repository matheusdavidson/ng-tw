"use strict";(self.webpackChunksandbox=self.webpackChunksandbox||[]).push([[726],{8726:(b,g,c)=>{c.r(g),c.d(g,{CNotificationRouteModule:()=>h});var r=c(9808),t=c(4893),s=c(3939);const p=function(o){return[o]},Z=function(){return{matrixParams:"exact",queryParams:"exact",paths:"exact",fragment:"exact"}};function T(o,e){if(1&o&&(t.TgZ(0,"li"),t.TgZ(1,"a",3),t._uU(2),t.qZA(),t.qZA()),2&o){const i=e.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(5,p,i.link))("routerLinkActive","active")("routerLinkActiveOptions",t.DdM(7,Z))("fragment",i.fragment||null),t.xp6(1),t.hij(" ",i.label," ")}}let k=(()=>{class o{constructor(){this.navigation=[{label:"Notification",alt:"",fragment:"notification",link:"/components/notification"},{label:"Basic Usage",alt:"",fragment:"basic-usage",link:"/components/notification"}]}ngOnInit(){}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-c-notification-side-route"]],decls:5,vars:1,consts:[[1,"side-navigation-container"],[1,"title"],[4,"ngFor","ngForOf"],[3,"routerLink","routerLinkActive","routerLinkActiveOptions","fragment"]],template:function(i,n){1&i&&(t.TgZ(0,"nav",0),t.TgZ(1,"p",1),t._uU(2,"On this page"),t.qZA(),t.TgZ(3,"ul"),t.YNc(4,T,3,8,"li",2),t.qZA(),t.qZA()),2&i&&(t.xp6(4),t.Q6J("ngForOf",n.navigation))},directives:[r.sg,s.yS,s.Od],styles:[""]}),o})();var l=c(208),f=c(3386);const d=function(o){return[o]};function v(o,e){if(1&o&&(t.TgZ(0,"a",22),t.O4$(),t.TgZ(1,"svg",23),t._UZ(2,"path",24),t.qZA(),t.kcU(),t.TgZ(3,"span",25),t._uU(4),t.qZA(),t.qZA()),2&o){const i=e.ngIf;t.Q6J("routerLink",t.VKq(2,d,i.link)),t.xp6(4),t.Oqu(i.label)}}function N(o,e){if(1&o&&(t.TgZ(0,"a",26),t.TgZ(1,"span",25),t._uU(2),t.qZA(),t.O4$(),t.TgZ(3,"svg",23),t._UZ(4,"path",27),t.qZA(),t.qZA()),2&o){const i=e.ngIf;t.Q6J("routerLink",t.VKq(2,d,i.link)),t.xp6(2),t.Oqu(i.label)}}const m=function(o){return{"dark:bg-gray-50 dark:bg-opacity-10":o}},_=[{path:"",component:(()=>{class o{constructor(i){this.notification=i,this.bottomNavigation={first:{label:"Dropdown",link:"/components/dropdown"},last:{label:"Progress Bar",link:"/components/progress-bar"}},this.markdownLoad="\n        ```typescript\n        import { TwNotificationModule } from 'ng-tw';\n\n        @NgModule({\n            imports: [..., TwNotificationModule.forRoot()],\n        });\n        ```\n    ",this.markdownUsageSegment="html",this.markdownUsageHTML='\n        ```html\n        <button\n            tw-button\n            (click)="openNotification()"\n        >\n            Show notification\n        </button>\n        ```\n    ',this.markdownUsageTS="\n        ```ts\n        constructor(private readonly notification: TwNotification) {}\n\n        showNotification() {\n            // \n            // Create notification properties\n            const notification: TwNotificationData = { type: 'success', title: 'Success', text: 'This is a success notification' };\n            // show notification\n            this.notification.show(notification);\n        }\n        ```\n    "}ngOnInit(){}openNotification(i,n=null,a=null){const u={type:i};n&&(u.title=n),a&&(u.text=a),this.notification.show(u)}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(l.Nh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-c-notification-route"]],decls:56,vars:12,consts:[[1,"prose","max-w-none","lg:px-8"],["id","notification"],[1,"tw-code"],[3,"data"],["id","basic-usage"],[1,"demo-container"],[1,"demo-row"],[1,"demo-row-title"],[1,"demo-row-content"],["tw-button","","color","primary",3,"click"],["tw-button","","color","primary","ignore","hover:bg-primary-50 text-primary",1,"hover:bg-green-100","text-green-600",3,"click"],["tw-button","","color","primary","ignore","hover:bg-primary-50 text-primary",1,"hover:bg-yellow-50","text-yellow-600",3,"click"],["tw-button","","color","danger",3,"click"],[1,"markdown-with-tabs","dark"],[1,"tabs-container","bg-[#3C3D37]","p-4","rounded-t","flex","space-x-4"],["tw-button","","size","xs",1,"dark:disabled:text-gray-200","dark:hover:bg-gray-50","dark:hover:bg-opacity-10","dark:text-gray-50",3,"ngClass","click"],[1,"has-tabs",3,"data"],[1,"content-footer"],[1,"bottom-navigation-container"],[3,"hidden"],["class","first",3,"routerLink",4,"ngIf"],["class","last",3,"routerLink",4,"ngIf"],[1,"first",3,"routerLink"],["fill","currentColor","viewBox","0 0 20 20"],["fill-rule","evenodd","d","M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z","clip-rule","evenodd"],[1,"truncate"],[1,"last",3,"routerLink"],["fill-rule","evenodd","d","M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule","evenodd"]],template:function(i,n){1&i&&(t.TgZ(0,"article",0),t.TgZ(1,"h1",1),t._uU(2," Notification "),t.qZA(),t.TgZ(3,"p"),t._uU(4,"To use the notification component you need to load it on "),t.TgZ(5,"code",2),t._uU(6,"app.module.ts"),t.qZA(),t._uU(7," using "),t.TgZ(8,"code",2),t._uU(9,"forRoot()"),t.qZA(),t._uU(10,":"),t.qZA(),t._UZ(11,"markdown",3),t.TgZ(12,"h2"),t._uU(13,"Demo"),t.qZA(),t.TgZ(14,"h3",4),t._uU(15,"Basic usage"),t.qZA(),t.TgZ(16,"div",5),t.TgZ(17,"div",6),t.TgZ(18,"div",7),t._uU(19,"Info"),t.qZA(),t.TgZ(20,"div",8),t.TgZ(21,"button",9),t.NdJ("click",function(){return n.openNotification("info","Notification","This is an info message")}),t._uU(22," Info notification "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(23,"div",6),t.TgZ(24,"div",7),t._uU(25,"Success"),t.qZA(),t.TgZ(26,"div",8),t.TgZ(27,"button",10),t.NdJ("click",function(){return n.openNotification("success","Notification","This is a success message")}),t._uU(28," Success notification "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(29,"div",6),t.TgZ(30,"div",7),t._uU(31,"Warning"),t.qZA(),t.TgZ(32,"div",8),t.TgZ(33,"button",11),t.NdJ("click",function(){return n.openNotification("warning","Notification","This is a warning message")}),t._uU(34," Warning notification "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(35,"div",6),t.TgZ(36,"div",7),t._uU(37,"Danger"),t.qZA(),t.TgZ(38,"div",8),t.TgZ(39,"button",12),t.NdJ("click",function(){return n.openNotification("danger","Notification","This is a danger message")}),t._uU(40," Danger notification "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(41,"h3"),t._uU(42,"Usage"),t.qZA(),t.TgZ(43,"div",13),t.TgZ(44,"div",14),t.TgZ(45,"button",15),t.NdJ("click",function(){return n.markdownUsageSegment="html"}),t._uU(46," page.html "),t.qZA(),t.TgZ(47,"button",15),t.NdJ("click",function(){return n.markdownUsageSegment="ts"}),t._uU(48," page.ts "),t.qZA(),t.qZA(),t._UZ(49,"markdown",16),t.qZA(),t.qZA(),t.TgZ(50,"div",17),t.TgZ(51,"div",18),t._UZ(52,"span",19),t.YNc(53,v,5,4,"a",20),t._UZ(54,"span",19),t.YNc(55,N,5,4,"a",21),t.qZA(),t.qZA()),2&i&&(t.xp6(11),t.Q6J("data",n.markdownLoad),t.xp6(34),t.Q6J("ngClass",t.VKq(8,m,"html"===n.markdownUsageSegment)),t.xp6(2),t.Q6J("ngClass",t.VKq(10,m,"ts"===n.markdownUsageSegment)),t.xp6(2),t.Q6J("data","html"===n.markdownUsageSegment?n.markdownUsageHTML:n.markdownUsageTS),t.xp6(3),t.Q6J("hidden",null!==(null==n.bottomNavigation?null:n.bottomNavigation.first)),t.xp6(1),t.Q6J("ngIf",null==n.bottomNavigation?null:n.bottomNavigation.first),t.xp6(1),t.Q6J("hidden",null!==(null==n.bottomNavigation?null:n.bottomNavigation.last)),t.xp6(1),t.Q6J("ngIf",null==n.bottomNavigation?null:n.bottomNavigation.last))},directives:[f.lF,l.r0,r.mk,r.O5,s.yS],styles:[""]}),o})()},{path:"",component:k,outlet:"side"}];let h=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[r.ez,s.Bz.forChild(_),f.JP,l.dX]]}),o})()}}]);