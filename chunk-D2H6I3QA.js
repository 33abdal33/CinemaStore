import{a as ue}from"./chunk-RUVNAOVV.js";import{a as oe}from"./chunk-2SAUJIYL.js";import{d as Ht,f as qt,k as lt,n as $t}from"./chunk-YATRG2RC.js";import{a as R,l as xt,m as ae,n as re,o as V,q as se,r as ft,s as L,u as w}from"./chunk-HEU4WAFH.js";import{a as le,b as ce,g as de,h as me,j as he,k as pe}from"./chunk-UL67DKGA.js";import{b as Qt,f as Wt,g as Zt,i as Kt,k as Jt,l as Xt,m as te,t as ee,u as ie,w as ne}from"./chunk-E6TKU66B.js";import{a as ut,c as gt}from"./chunk-TJSGGWVD.js";import{B as Dt,a as Yt,e as ct,h as dt,j as Ct,u as mt,v as ht,y as pt}from"./chunk-MSGP6OJQ.js";import{a as F}from"./chunk-4I3MVLZY.js";import{d as rt,f as Gt,m as st}from"./chunk-J7ILPO5N.js";import{$ as y,$a as u,Ba as Tt,C as St,Ca as X,D as B,Db as r,Ea as tt,Eb as l,F as Q,Fb as p,J as W,Jb as ot,Ka as bt,Kb as Lt,Mb as N,Ob as jt,Sb as Bt,T as Z,Tb as Nt,Ub as Vt,Xa as kt,Xb as yt,Yb as c,Zb as S,_a as h,_b as v,a as D,b as Et,bb as Pt,ca as O,dc as b,ea as g,fa as m,hc as P,i as q,ic as at,ja as _,jb as et,jc as zt,l as x,lb as it,ma as Mt,pb as C,q as T,rb as Ft,sb as nt,ta as K,tb as k,u as $,ua as J,uc as Ut,vb as Rt,yb as E,z as Y,za as I}from"./chunk-273GLWW4.js";var ge=(()=>{class n{constructor(){this.http=m(F),this.baseUrl=R.baseUrl}getData(t){let e=this.baseUrl+"/api/movies/"+t;return this.http.get(e)}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function Le(n,a){}var M=class{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0,this.closeOnOverlayDetachments=!0}};var It=(()=>{class n extends re{constructor(t,e,i,o,d,s,f,j){super(),this._elementRef=t,this._focusTrapFactory=e,this._config=o,this._interactivityChecker=d,this._ngZone=s,this._overlayRef=f,this._focusMonitor=j,this._platform=m(Yt),this._focusTrap=null,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this._ariaLabelledByQueue=[],this._changeDetectorRef=m(Ut),this._injector=m(I),this._isDestroyed=!1,this.attachDomPortal=vt=>{this._portalOutlet.hasAttached();let Se=this._portalOutlet.attachDomPortal(vt);return this._contentAttached(),Se},this._document=i,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(t){this._ariaLabelledByQueue.push(t),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(t){let e=this._ariaLabelledByQueue.indexOf(t);e>-1&&(this._ariaLabelledByQueue.splice(e,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),e}attachTemplatePortal(t){this._portalOutlet.hasAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),e}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{t.removeEventListener("blur",i),t.removeEventListener("mousedown",i),t.removeAttribute("tabindex")};t.addEventListener("blur",i),t.addEventListener("mousedown",i)})),t.focus(e)}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,e)}_trapFocus(){this._isDestroyed||Ft(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus();break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement()||this._focusDialogContainer();break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus);break}},{injector:this._injector})}_restoreFocus(){let t=this._config.restoreFocus,e=null;if(typeof t=="string"?e=this._document.querySelector(t):typeof t=="boolean"?e=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(e=t),this._config.restoreFocus&&e&&typeof e.focus=="function"){let i=ct(),o=this._elementRef.nativeElement;(!i||i===this._document.body||i===o||o.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(e,this._closeInteractionType),this._closeInteractionType=null):e.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){let t=this._elementRef.nativeElement,e=ct();return t===e||t.contains(e)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=ct()))}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}static{this.\u0275fac=function(e){return new(e||n)(u(tt),u(ht),u(rt,8),u(M),u(mt),u(X),u(L),u(pt))}}static{this.\u0275cmp=_({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(e,i){if(e&1&&Bt(V,7),e&2){let o;Nt(o=Vt())&&(i._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,i){e&2&&nt("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},standalone:!0,features:[it,b],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,i){e&1&&C(0,Le,0,0,"ng-template",0)},dependencies:[V],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2})}}return n})(),z=class{constructor(a,t){this.overlayRef=a,this.config=t,this.closed=new x,this.disableClose=t.disableClose,this.backdropClick=a.backdropClick(),this.keydownEvents=a.keydownEvents(),this.outsidePointerEvents=a.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(e=>{e.keyCode===27&&!this.disableClose&&!dt(e)&&(e.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})}),this._detachSubscription=a.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(a,t){if(this.containerInstance){let e=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),e.next(a),e.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(a="",t=""){return this.overlayRef.updateSize({width:a,height:t}),this}addPanelClass(a){return this.overlayRef.addPanelClass(a),this}removePanelClass(a){return this.overlayRef.removePanelClass(a),this}},je=new O("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=m(w);return()=>n.scrollStrategies.block()}}),Be=new O("DialogData"),Ne=new O("DefaultDialogConfig");var Ve=0,fe=(()=>{class n{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}constructor(t,e,i,o,d,s){this._overlay=t,this._injector=e,this._defaultOptions=i,this._parentDialog=o,this._overlayContainer=d,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new x,this._afterOpenedAtThisLevel=new x,this._ariaHiddenElements=new Map,this.afterAllClosed=Y(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Z(void 0))),this._scrollStrategy=s}open(t,e){let i=this._defaultOptions||new M;e=D(D({},i),e),e.id=e.id||`cdk-dialog-${Ve++}`,e.id&&this.getDialogById(e.id);let o=this._getOverlayConfig(e),d=this._overlay.create(o),s=new z(d,e),f=this._attachContainer(d,s,e);return s.containerInstance=f,this._attachDialogContent(t,s,f,e),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){At(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){At(this._openDialogsAtThisLevel,t=>{t.config.closeOnDestroy===!1&&this._removeOpenDialog(t,!1)}),At(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){let e=new se({positionStrategy:t.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(e.backdropClass=t.backdropClass),e}_attachContainer(t,e,i){let o=i.injector||i.viewContainerRef?.injector,d=[{provide:M,useValue:i},{provide:z,useValue:e},{provide:L,useValue:t}],s;i.container?typeof i.container=="function"?s=i.container:(s=i.container.type,d.push(...i.container.providers(i))):s=It;let f=new xt(s,i.viewContainerRef,I.create({parent:o||this._injector,providers:d}),i.componentFactoryResolver);return t.attach(f).instance}_attachDialogContent(t,e,i,o){if(t instanceof Pt){let d=this._createInjector(o,e,i,void 0),s={$implicit:o.data,dialogRef:e};o.templateContext&&(s=D(D({},s),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),i.attachTemplatePortal(new ae(t,null,s,d))}else{let d=this._createInjector(o,e,i,this._injector),s=i.attachComponentPortal(new xt(t,o.viewContainerRef,d,o.componentFactoryResolver));e.componentRef=s,e.componentInstance=s.instance}}_createInjector(t,e,i,o){let d=t.injector||t.viewContainerRef?.injector,s=[{provide:Be,useValue:t.data},{provide:z,useValue:e}];return t.providers&&(typeof t.providers=="function"?s.push(...t.providers(e,t,i)):s.push(...t.providers)),t.direction&&(!d||!d.get(Dt,null,{optional:!0}))&&s.push({provide:Dt,useValue:{value:t.direction,change:T()}}),I.create({parent:d||o,providers:s})}_removeOpenDialog(t,e){let i=this.openDialogs.indexOf(t);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,d)=>{o?d.setAttribute("aria-hidden",o):d.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),e&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){let t=this._overlayContainer.getContainerElement();if(t.parentElement){let e=t.parentElement.children;for(let i=e.length-1;i>-1;i--){let o=e[i];o!==t&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}static{this.\u0275fac=function(e){return new(e||n)(g(w),g(I),g(Ne,8),g(n,12),g(ft),g(je))}}static{this.\u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function At(n,a){let t=n.length;for(;t--;)a(n[t])}function ze(n,a){}var U=class{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0}},wt="mdc-dialog--open",_e="mdc-dialog--opening",ve="mdc-dialog--closing",Ue=150,Ge=75,He=(()=>{class n extends It{constructor(t,e,i,o,d,s,f,j,vt){super(t,e,i,o,d,s,f,vt),this._animationMode=j,this._animationStateChanged=new Tt,this._animationsEnabled=this._animationMode!=="NoopAnimations",this._actionSectionCount=0,this._hostElement=this._elementRef.nativeElement,this._enterAnimationDuration=this._animationsEnabled?ye(this._config.enterAnimationDuration)??Ue:0,this._exitAnimationDuration=this._animationsEnabled?ye(this._config.exitAnimationDuration)??Ge:0,this._animationTimer=null,this._finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)},this._finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})}}_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(be,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(_e,wt)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(wt),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(wt),this._animationsEnabled?(this._hostElement.style.setProperty(be,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ve)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(t){this._actionSectionCount+=t,this._changeDetectorRef.markForCheck()}_clearAnimationClasses(){this._hostElement.classList.remove(_e,ve)}_waitForAnimationToComplete(t,e){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(e,t)}_requestAnimationFrame(t){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(t):t()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(t){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:t})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(t){let e=super.attachComponentPortal(t);return e.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),e}static{this.\u0275fac=function(e){return new(e||n)(u(tt),u(ht),u(rt,8),u(U),u(mt),u(X),u(L),u(bt,8),u(pt))}}static{this.\u0275cmp=_({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(e,i){e&2&&(Lt("id",i._config.id),nt("aria-modal",i._config.ariaModal)("role",i._config.role)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null),Rt("_mat-animation-noopable",!i._animationsEnabled)("mat-mdc-dialog-container-with-actions",i._actionSectionCount>0))},standalone:!0,features:[it,b],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,i){e&1&&(r(0,"div",0)(1,"div",1),C(2,ze,0,0,"ng-template",2),l()())},dependencies:[V],styles:['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12));border-radius:var(--mdc-dialog-container-shape, var(--mat-app-corner-extra-large, 4px));background-color:var(--mdc-dialog-container-color, var(--mat-app-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mdc-dialog-subhead-font, var(--mat-app-headline-small-font, inherit));line-height:var(--mdc-dialog-subhead-line-height, var(--mat-app-headline-small-line-height, 1.5rem));font-size:var(--mdc-dialog-subhead-size, var(--mat-app-headline-small-size, 1rem));font-weight:var(--mdc-dialog-subhead-weight, var(--mat-app-headline-small-weight, 400));letter-spacing:var(--mdc-dialog-subhead-tracking, var(--mat-app-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, var(--mat-app-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mdc-dialog-supporting-text-font, var(--mat-app-body-medium-font, inherit));line-height:var(--mdc-dialog-supporting-text-line-height, var(--mat-app-body-medium-line-height, 1.5rem));font-size:var(--mdc-dialog-supporting-text-size, var(--mat-app-body-medium-size, 1rem));font-weight:var(--mdc-dialog-supporting-text-weight, var(--mat-app-body-medium-weight, 400));letter-spacing:var(--mdc-dialog-supporting-text-tracking, var(--mat-app-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.cdk-high-contrast-active .mat-mdc-dialog-actions{border-top-color:CanvasText}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}'],encapsulation:2})}}return n})(),be="--mat-dialog-transition-duration";function ye(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?Ct(n.substring(0,n.length-2)):n.endsWith("s")?Ct(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var _t=function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n}(_t||{}),G=class{constructor(a,t,e){this._ref=a,this._containerInstance=e,this._afterOpened=new x,this._beforeClosed=new x,this._state=_t.OPEN,this.disableClose=t.disableClose,this.id=a.id,a.addPanelClass("mat-mdc-dialog-panel"),e._animationStateChanged.pipe(B(i=>i.state==="opened"),W(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),e._animationStateChanged.pipe(B(i=>i.state==="closed"),W(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),a.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),St(this.backdropClick(),this.keydownEvents().pipe(B(i=>i.keyCode===27&&!this.disableClose&&!dt(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),qe(this,i.type==="keydown"?"keyboard":"mouse"))})}close(a){this._result=a,this._containerInstance._animationStateChanged.pipe(B(t=>t.state==="closing"),W(1)).subscribe(t=>{this._beforeClosed.next(a),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=_t.CLOSING,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(a){let t=this._ref.config.positionStrategy;return a&&(a.left||a.right)?a.left?t.left(a.left):t.right(a.right):t.centerHorizontally(),a&&(a.top||a.bottom)?a.top?t.top(a.top):t.bottom(a.bottom):t.centerVertically(),this._ref.updatePosition(),this}updateSize(a="",t=""){return this._ref.updateSize(a,t),this}addPanelClass(a){return this._ref.addPanelClass(a),this}removePanelClass(a){return this._ref.removePanelClass(a),this}getState(){return this._state}_finishDialogClose(){this._state=_t.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function qe(n,a,t){return n._closeInteractionType=a,n.close(t)}var H=new O("MatMdcDialogData"),$e=new O("mat-mdc-dialog-default-options"),Ye=new O("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=m(w);return()=>n.scrollStrategies.block()}});var Qe=0,Ce=(()=>{class n{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}constructor(t,e,i,o,d,s,f,j){this._overlay=t,this._defaultOptions=o,this._scrollStrategy=d,this._parentDialog=s,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new x,this._afterOpenedAtThisLevel=new x,this.dialogConfigClass=U,this.afterAllClosed=Y(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(Z(void 0))),this._dialog=e.get(fe),this._dialogRefConstructor=G,this._dialogContainerType=He,this._dialogDataToken=H}open(t,e){let i;e=D(D({},this._defaultOptions||new U),e),e.id=e.id||`mat-mdc-dialog-${Qe++}`,e.scrollStrategy=e.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(t,Et(D({},e),{positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:e},{provide:M,useValue:e}]},templateContext:()=>({dialogRef:i}),providers:(d,s,f)=>(i=new this._dialogRefConstructor(d,e,f),i.updatePosition(e?.position),[{provide:this._dialogContainerType,useValue:f},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:i}])}));return i.componentRef=o.componentRef,i.componentInstance=o.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let d=this.openDialogs.indexOf(i);d>-1&&(this.openDialogs.splice(d,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(t){return this.openDialogs.find(e=>e.id===t)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(t){let e=t.length;for(;e--;)t[e].close()}static{this.\u0275fac=function(e){return new(e||n)(g(w),g(I),g(Gt,8),g($e,8),g(Ye),g(n,12),g(ft),g(bt,8))}}static{this.\u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var De={saleId:0,dateEvent:"",timeEvent:"",genre:"",imageUrl:"",title:"",operationNumber:"",fullName:"",quantity:0,saleDate:"",total:0};var xe=(()=>{class n{constructor(){this.http=m(F),this.baseUrl=R.baseUrl,this.loading=et(!1)}getData(t){let e=this.baseUrl+"/api/Sales/"+t;return this.http.get(e).pipe(Q(i=>{let o={data:De,success:!1,errorMessage:i.error.errorMessage||"Unknown error"};return T(o)}))}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function We(n,a){if(n&1&&(r(0,"h1",1),c(1,"VOUCHER"),l(),r(2,"div",2)(3,"span",3),c(4,"Nro. Operaci\xF3n"),l(),p(5,"br"),r(6,"span",4),c(7),l(),p(8,"br")(9,"br"),r(10,"span",3),c(11,"Cliente"),l(),p(12,"br"),r(13,"span",4),c(14),l(),p(15,"br")(16,"br"),r(17,"span",3),c(18,"Nro. Tickets"),l(),p(19,"br"),r(20,"span",4),c(21),l(),p(22,"br")(23,"br"),r(24,"span",3),c(25,"Fecha de Pago"),l(),p(26,"br"),r(27,"span",4),c(28),l(),p(29,"br"),l(),p(30,"br"),r(31,"span",5),c(32,"Total: "),r(33,"span",6),c(34),l()()),n&2){let t=a;h(7),S(t.operationNumber),h(7),S(t.fullName),h(7),S(t.quantity),h(7),S(t.saleDate),h(6),v("S/ ",t.total.toFixed(2),"")}}var Ae=(()=>{class n{constructor(){this.data=m(H),this.voucherService=m(xe),this.sale$=new q}ngOnInit(){this.sale$=this.voucherService.getData(this.data.saleId).pipe($(t=>t.data))}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=_({type:n,selectors:[["app-voucher-dialog"]],standalone:!0,features:[b],decls:3,vars:3,consts:[[2,"width","240px","height","360px","background-color","var(--secondary-color)","padding","20px","font-weight","500","color","white","font-size","16px","line-height","22px"],[2,"color","var(--primary-color)"],[2,"padding-top","8px","padding-bottom","8px"],[1,"title"],[1,"data"],[2,"color","var(--primary-color)","font-size","18px"],[2,"color","var(--accent-color)","margin-left","4px"]],template:function(e,i){if(e&1&&(r(0,"div",0),C(1,We,35,5),P(2,"async"),l()),e&2){let o;h(),E((o=at(2,1,i.sale$))?1:-1,o)}},dependencies:[st],styles:[".title[_ngcontent-%COMP%]{color:var(--primary-color)}.data[_ngcontent-%COMP%]{color:#fff}"]})}}return n})();var Oe=(()=>{class n{transform(t,...e){let i=50;e.length>0&&(i=e[0]);let o=t;return t.length>i&&(o=t.slice(0,i)+"..."),o}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275pipe=Mt({name:"textLimiter",type:n,pure:!0,standalone:!0})}}return n})();var Ie=(()=>{class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=_({type:n,selectors:[["app-event-card"]],inputs:{data:"data"},standalone:!0,features:[b],decls:18,vars:7,consts:[[1,"cartelera"],[1,"container"],[1,"movies"],[1,"superior"],["alt","event image",3,"src"],[1,"middle"],[1,"bottom"],[1,"genre-time-container"],[1,"genre"],[1,"time"],[1,"button"],[1,"btn"]],template:function(e,i){e&1&&(r(0,"section",0)(1,"div",1)(2,"div",2)(3,"section",3),p(4,"img",4),l(),r(5,"section",5)(6,"h3"),c(7),P(8,"textLimiter"),l()(),r(9,"section",6)(10,"div",7)(11,"span",8),c(12),l(),r(13,"span",9),c(14),l()(),r(15,"div",10)(16,"a",11),c(17,"Comprar Boletos"),l()()()()()()),e&2&&(h(4),k("src",i.data.imagenUrl,kt),h(3),v("",zt(8,4,i.data.title,30)," "),h(5),v(" ",i.data.genre," |"),h(2),v(" ",i.data.timeEvent,""))},dependencies:[Oe],styles:[".container[_ngcontent-%COMP%]{width:90%;max-width:1200px;margin:0 auto}.cartelera[_ngcontent-%COMP%]{padding:2rem 0;background:#fff}.cartelera[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]{display:flex;gap:1.5rem;flex-wrap:wrap;justify-content:center;background:#f4f4f4;padding:1rem;border-radius:8px;text-align:center;max-width:300px;box-shadow:0 2px 5px #0000001a}.cartelera[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .superior[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:350px;border-radius:8px;object-fit:cover}.cartelera[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]{margin:-1rem 0 -2rem}.cartelera[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:1rem .5rem;font-size:1.2rem}.cartelera[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{padding:1rem;overflow:hidden}.cartelera[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .genre-time-container[_ngcontent-%COMP%]{margin-bottom:1rem;font-size:1rem;color:#666;display:flex;flex-wrap:wrap;justify-content:center}.cartelera[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{background:#2a9d8f;color:#fff;padding:.5rem 1rem;border:none;text-decoration:none;border-radius:5px;transition:background .3s;cursor:pointer}.cartelera[_ngcontent-%COMP%]   .movies[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover{background:#21867a}"]})}}return n})();var we=(()=>{class n{constructor(){this.http=m(F),this.baseUrl=R.baseUrl,this.loading=et(!1)}buy(t,e){let i=this.baseUrl+"/api/Sales",o={movieId:t,ticketsQuantity:e};return this.http.post(i,o).pipe(Q(d=>{let s={data:0,success:!1,errorMessage:d.error.errorMessage||"Unknown error"};return T(s)}))}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function Ke(n,a){n&1&&(r(0,"mat-error"),c(1,"Campo "),r(2,"b"),c(3,"requerido"),l()())}function Je(n,a){n&1&&(r(0,"mat-error")(1,"b"),c(2,"10 Compras"),l(),c(3," como m\xE1ximo"),l())}var Ee=(()=>{class n{constructor(){this.data=m(H),this.buyService=m(we),this.matDialogRef=m(G),this.notifications=m(lt)}buyTickets(t){this.buyService.buy(this.data.id.toString(),t.toString()).subscribe(e=>{e.success?this.matDialogRef.close(e.data):this.notifications.error("Error",e.errorMessage)})}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=_({type:n,selectors:[["app-buy-dialog"]],standalone:!0,features:[b],decls:24,vars:6,consts:[["quantity","ngModel"],[2,"width","240px","height","360px","display","flex","flex-direction","column","justify-content","space-between","align-items","center","background-color","var(--secondary-color)","padding","20px"],[2,"display","flex","flex-direction","column","justify-content","center","align-items","center"],[2,"color","black","text-align","center","font-size","24px"],[2,"font-size","18px","color","black","font-weight","500"],[2,"color","var(--accent-color)"],["appearance","outline"],["matInput","","type","number","ngModel","","name","quantity","max","10","required",""],[2,"font-size","18px","color","white","font-weight","500"],[2,"width","100%"],["mat-raised-button","","color","primary",2,"width","100%",3,"click","disabled"]],template:function(e,i){if(e&1){let o=ot();r(0,"div",1)(1,"section",2)(2,"span",3),c(3),l(),p(4,"br"),r(5,"span",4),c(6,"PRECIO: "),r(7,"span",5),c(8),l()()(),r(9,"form",2)(10,"mat-form-field",6)(11,"mat-label"),c(12,"Cantidad"),l(),p(13,"input",7,0),C(15,Ke,4,0,"mat-error")(16,Je,4,0,"mat-error"),l(),p(17,"br"),r(18,"div")(19,"span",8),c(20),l()()(),r(21,"section",9)(22,"button",10),N("click",function(){K(o);let s=yt(14);return J(i.buyTickets(s.value))}),c(23," PAGAR "),l()()()}if(e&2){let o=yt(14);h(3),v(" ",i.data.title," "),h(5),v("S/",i.data.unitPrice.toFixed(2),""),h(7),E(o.errors!=null&&o.errors.required?15:-1),h(),E(!(o.errors!=null&&o.errors.required)&&(o.errors!=null&&o.errors.max)?16:-1),h(4),v("TOTAL: S/",i.data.unitPrice*(o.value?o.value:0)," "),h(2),k("disabled",o.invalid)}},dependencies:[ne,Xt,Qt,te,Wt,Zt,ie,ee,Jt,Kt,gt,ut,me,de,le,ce,pe,he]})}}return n})();function Xe(n,a){if(n&1){let t=ot();p(0,"app-event-card",4),r(1,"div",5)(2,"div",6)(3,"span",7),c(4,"Acerca del evento"),l(),p(5,"br")(6,"br"),r(7,"p",8),c(8),l()(),r(9,"div",6)(10,"span",9),c(11,"Precio: "),r(12,"span",10),c(13),l()(),r(14,"button",11),N("click",function(){K(t);let i=jt();return J(i.openDialog())}),c(15," COMPRAR ENTRADA "),l()()()}if(n&2){let t=a;k("data",t),h(8),S(t.description),h(5),v("S/",t.unitPrice.toFixed(2),"")}}var Xn=(()=>{class n{constructor(){this.eventId="",this.activatedRoute=m(Ht),this.router=m(qt),this.eventDetailService=m(ge),this.matDialog=m(Ce),this.authService=m($t),this.data$=new q,this.notifications=m(lt)}ngOnInit(){this.eventId=this.activatedRoute.snapshot.paramMap.get("id"),this.data$=this.eventDetailService.getData(this.eventId).pipe($(t=>(this.movieData=t.data,t.data)))}openDialog(){if(!this.authService.loggedIn()){this.notifications.warn("Inicia sesi\xF3n","Debes iniciar sesi\xF3n para comprar entradas"),this.router.navigate(["/login"]);return}if(this.authService.isAdministrator()){this.notifications.warn("No autorizado","No puedes comprar entradas siendo administrador");return}this.matDialog.open(Ee,{data:this.movieData}).afterClosed().subscribe(e=>{e&&(this.notifications.success("Compra exitosa!","Voucher generado"),this.matDialog.open(Ae,{data:{saleId:e}}).afterClosed().subscribe(()=>{this.router.navigate(["/home"])}))})}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=_({type:n,selectors:[["app-event-detail"]],standalone:!0,features:[b],decls:10,vars:3,consts:[[1,"event-detail-container"],[1,"container"],[2,"max-width","1000px","width","100%","font-size","16px","font-weight","500","margin-top","40px","margin-bottom","60px"],[2,"max-width","1000px","width","100%","display","flex"],[3,"data"],[2,"width","750px","height","360px","background-color","var(--secondary-color)","margin-left","30px","display","flex","flex-direction","column","justify-content","space-between"],[2,"margin","20px"],[2,"color","var(--primary-color)","font-weight","500","font-size","16px"],[2,"color","black"],[2,"color","black","margin-right","20px","font-size","16px","font-weight","500"],[2,"color","var(--accent-color)"],["mat-raised-button","","color","primary",3,"click"]],template:function(e,i){if(e&1&&(r(0,"div",0),p(1,"app-simple-header"),r(2,"div",1)(3,"section",2)(4,"span"),c(5,"Compra tus entradas y disfruta!"),l()(),r(6,"section",3),C(7,Xe,16,3),P(8,"async"),l()(),p(9,"app-footer"),l()),e&2){let o;h(7),E((o=at(8,1,i.data$))?7:-1,o)}},dependencies:[ue,oe,Ie,st,gt,ut],styles:[".event-detail-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.event-detail-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;height:100%}"]})}}return n})();export{Xn as a,Ie as b};
