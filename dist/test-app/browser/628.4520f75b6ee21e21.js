"use strict";(self.webpackChunktest_app=self.webpackChunktest_app||[]).push([[628],{628:(m,o,s)=>{s.r(o),s.d(o,{ArticlesDetailsModule:()=>u});var n=s(814),r=s(72),t=s(946),c=s(593);const p=[{path:":id",component:(()=>{class e{constructor(a,i,l){this.meta=a,this.title=i,this.route=l}ngOnInit(){console.log("test"),this.articleId=this.route.snapshot.params.id,this.articleTitle="Sample Article Title",this.articleDescription="This is a description of the sample article.",this.articleImage="https://i.ytimg.com/vi/RDkx4J__-QY/maxresdefault.jpg",this.updateMetaTags()}updateMetaTags(){this.title.setTitle(this.articleTitle),this.meta.updateTag({name:"description",content:this.articleDescription}),this.meta.updateTag({property:"og:title",content:this.articleTitle}),this.meta.updateTag({property:"og:description",content:this.articleDescription}),this.meta.updateTag({property:"og:image",content:this.articleImage}),this.meta.updateTag({property:"og:url",content:`https://hps-journalistsportal-ane2b9b2d4fjgrd7.canadacentral-01.azurewebsites.net/article/${this.articleId}`}),this.meta.updateTag({property:"og:type",content:"website"})}static#t=this.\u0275fac=function(i){return new(i||e)(t.Y36(c.h_),t.Y36(c.Dx),t.Y36(r.gz))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-article-details"]],decls:5,vars:0,template:function(i,l){1&i&&(t.TgZ(0,"h1"),t._uU(1,"Article Details"),t.qZA(),t._UZ(2,"br"),t.TgZ(3,"p"),t._uU(4,"article-details works!"),t.qZA())}})}return e})()}];let h=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[r.Bz.forChild(p),r.Bz]})}return e})(),u=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[n.ez,h]})}return e})()}}]);