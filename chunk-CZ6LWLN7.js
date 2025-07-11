import {
  ChangeDetectionStrategy,
  CommonModule,
  Component,
  Inject,
  InjectionToken,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  Optional,
  __spreadValues,
  isDevMode,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction5,
  ɵɵtemplate
} from "./chunk-UIAHAIJK.js";

// node_modules/.pnpm/ngx-skeleton-loader@8.1.0_@angular+common@18.2.1_@angular+core@18.2.1/node_modules/ngx-skeleton-loader/fesm2022/ngx-skeleton-loader.mjs
var _c0 = ["*"];
var _c1 = (a0, a1, a2, a3, a4) => ({
  "custom-content": a0,
  circle: a1,
  progress: a2,
  "progress-dark": a3,
  pulse: a4
});
function NgxSkeletonLoaderComponent_div_0_ng_content_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 0, ["*ngIf", "appearance  === 'custom-content'"]);
  }
}
function NgxSkeletonLoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, NgxSkeletonLoaderComponent_div_0_ng_content_1_Template, 1, 0, "ng-content", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(5, _c1, ctx_r0.appearance === "custom-content", ctx_r0.appearance === "circle", ctx_r0.animation === "progress", ctx_r0.animation === "progress-dark", ctx_r0.animation === "pulse"))("ngStyle", ctx_r0.theme);
    \u0275\u0275attribute("aria-label", ctx_r0.ariaLabel)("aria-valuetext", ctx_r0.loadingText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.appearance === "custom-content");
  }
}
var NGX_SKELETON_LOADER_CONFIG = new InjectionToken("ngx-skeleton-loader.config");
var NgxSkeletonLoaderComponent = class _NgxSkeletonLoaderComponent {
  constructor(config) {
    this.config = config;
    const {
      appearance = "line",
      animation = "progress",
      theme = null,
      loadingText = "Loading...",
      count = 1,
      ariaLabel = "loading"
    } = config || {};
    this.appearance = appearance;
    this.animation = animation;
    this.theme = theme;
    this.loadingText = loadingText;
    this.count = count;
    this.items = [];
    this.ariaLabel = ariaLabel;
  }
  ngOnInit() {
    this.validateInputValues();
  }
  validateInputValues() {
    if (!/^\d+$/.test(`${this.count}`)) {
      if (isDevMode()) {
        console.error(`\`NgxSkeletonLoaderComponent\` need to receive 'count' a numeric value. Forcing default to "1".`);
      }
      this.count = 1;
    }
    if (this.appearance === "custom-content") {
      if (isDevMode() && this.count !== 1) {
        console.error(`\`NgxSkeletonLoaderComponent\` enforces elements with "custom-content" appearance as DOM nodes. Forcing "count" to "1".`);
        this.count = 1;
      }
    }
    this.items.length = this.count;
    const allowedAnimations = ["progress", "progress-dark", "pulse", "false"];
    if (allowedAnimations.indexOf(String(this.animation)) === -1) {
      if (isDevMode()) {
        console.error(`\`NgxSkeletonLoaderComponent\` need to receive 'animation' as: ${allowedAnimations.join(", ")}. Forcing default to "progress".`);
      }
      this.animation = "progress";
    }
    if (["circle", "line", "custom-content", ""].indexOf(String(this.appearance)) === -1) {
      if (isDevMode()) {
        console.error(`\`NgxSkeletonLoaderComponent\` need to receive 'appearance' as: circle or line or custom-content or empty string. Forcing default to "''".`);
      }
      this.appearance = "";
    }
    const {
      theme
    } = this.config || {};
    if (!!theme && !!theme.extendsFromRoot && this.theme !== null) {
      this.theme = __spreadValues(__spreadValues({}, this.config.theme), this.theme);
    }
  }
  ngOnChanges(changes) {
    if (["count", "animation", "appearance"].find((key) => changes[key] && (changes[key].isFirstChange() || changes[key].previousValue === changes[key].currentValue))) {
      return;
    }
    this.validateInputValues();
  }
  static {
    this.\u0275fac = function NgxSkeletonLoaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxSkeletonLoaderComponent)(\u0275\u0275directiveInject(NGX_SKELETON_LOADER_CONFIG, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _NgxSkeletonLoaderComponent,
      selectors: [["ngx-skeleton-loader"]],
      inputs: {
        count: "count",
        loadingText: "loadingText",
        appearance: "appearance",
        animation: "animation",
        ariaLabel: "ariaLabel",
        theme: "theme"
      },
      features: [\u0275\u0275NgOnChangesFeature],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 1,
      consts: [["class", "skeleton-loader", "aria-busy", "true", "aria-valuemin", "0", "aria-valuemax", "100", "role", "progressbar", "tabindex", "-1", 3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], ["aria-busy", "true", "aria-valuemin", "0", "aria-valuemax", "100", "role", "progressbar", "tabindex", "-1", 1, "skeleton-loader", 3, "ngClass", "ngStyle"], [4, "ngIf"]],
      template: function NgxSkeletonLoaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275projectionDef();
          \u0275\u0275template(0, NgxSkeletonLoaderComponent_div_0_Template, 2, 11, "div", 0);
        }
        if (rf & 2) {
          \u0275\u0275property("ngForOf", ctx.items);
        }
      },
      dependencies: [NgClass, NgForOf, NgIf, NgStyle],
      styles: ['.skeleton-loader[_ngcontent-%COMP%]{box-sizing:border-box;overflow:hidden;position:relative;background:rgb(239,241,246) no-repeat;border-radius:4px;width:100%;height:20px;display:inline-block;margin-bottom:10px;will-change:transform}.skeleton-loader[_ngcontent-%COMP%]:after, .skeleton-loader[_ngcontent-%COMP%]:before{box-sizing:border-box}.skeleton-loader.circle[_ngcontent-%COMP%]{width:40px;height:40px;margin:5px;border-radius:50%}.skeleton-loader.progress[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%]{transform:translateZ(0)}.skeleton-loader.progress[_ngcontent-%COMP%]:after, .skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:after, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{box-sizing:border-box}.skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{animation:_ngcontent-%COMP%_progress 2s ease-in-out infinite;background-size:200px 100%;position:absolute;z-index:1;top:0;left:0;width:200px;height:100%;content:""}.skeleton-loader.progress[_ngcontent-%COMP%]:before{background-image:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.6),rgba(255,255,255,0))}.skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{background-image:linear-gradient(90deg,transparent,rgba(0,0,0,.2),transparent)}.skeleton-loader.pulse[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_pulse 1.5s cubic-bezier(.4,0,.2,1) infinite;animation-delay:.5s}.skeleton-loader.custom-content[_ngcontent-%COMP%]{height:100%;background:none}@media (prefers-reduced-motion: reduce){.skeleton-loader.pulse[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%], .skeleton-loader.custom-content[_ngcontent-%COMP%], .skeleton-loader.progress[_ngcontent-%COMP%]:before{animation:none}.skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%], .skeleton-loader.custom-content[_ngcontent-%COMP%]{background-image:none}}@media screen and (min-device-width: 1200px){.skeleton-loader[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;cursor:wait}}@keyframes _ngcontent-%COMP%_progress{0%{transform:translate3d(-200px,0,0)}to{transform:translate3d(calc(200px + 100vw),0,0)}}@keyframes _ngcontent-%COMP%_pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}'],
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSkeletonLoaderComponent, [{
    type: Component,
    args: [{
      selector: "ngx-skeleton-loader",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div
  *ngFor="let item of items"
  class="skeleton-loader"
  [attr.aria-label]="ariaLabel"
  aria-busy="true"
  aria-valuemin="0"
  aria-valuemax="100"
  [attr.aria-valuetext]="loadingText"
  role="progressbar"
  tabindex="-1"
  [ngClass]="{
    'custom-content': appearance === 'custom-content',
    circle: appearance === 'circle',
    progress: animation === 'progress',
    'progress-dark': animation === 'progress-dark',
    pulse: animation === 'pulse'
  }"
  [ngStyle]="theme"
>
  <ng-content *ngIf="appearance  === 'custom-content'"></ng-content>
</div>
`,
      styles: ['.skeleton-loader{box-sizing:border-box;overflow:hidden;position:relative;background:rgb(239,241,246) no-repeat;border-radius:4px;width:100%;height:20px;display:inline-block;margin-bottom:10px;will-change:transform}.skeleton-loader:after,.skeleton-loader:before{box-sizing:border-box}.skeleton-loader.circle{width:40px;height:40px;margin:5px;border-radius:50%}.skeleton-loader.progress,.skeleton-loader.progress-dark{transform:translateZ(0)}.skeleton-loader.progress:after,.skeleton-loader.progress:before,.skeleton-loader.progress-dark:after,.skeleton-loader.progress-dark:before{box-sizing:border-box}.skeleton-loader.progress:before,.skeleton-loader.progress-dark:before{animation:progress 2s ease-in-out infinite;background-size:200px 100%;position:absolute;z-index:1;top:0;left:0;width:200px;height:100%;content:""}.skeleton-loader.progress:before{background-image:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.6),rgba(255,255,255,0))}.skeleton-loader.progress-dark:before{background-image:linear-gradient(90deg,transparent,rgba(0,0,0,.2),transparent)}.skeleton-loader.pulse{animation:pulse 1.5s cubic-bezier(.4,0,.2,1) infinite;animation-delay:.5s}.skeleton-loader.custom-content{height:100%;background:none}@media (prefers-reduced-motion: reduce){.skeleton-loader.pulse,.skeleton-loader.progress-dark,.skeleton-loader.custom-content,.skeleton-loader.progress:before{animation:none}.skeleton-loader.progress:before,.skeleton-loader.progress-dark,.skeleton-loader.custom-content{background-image:none}}@media screen and (min-device-width: 1200px){.skeleton-loader{-webkit-user-select:none;user-select:none;cursor:wait}}@keyframes progress{0%{transform:translate3d(-200px,0,0)}to{transform:translate3d(calc(200px + 100vw),0,0)}}@keyframes pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}\n']
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [NGX_SKELETON_LOADER_CONFIG]
      }, {
        type: Optional
      }]
    }];
  }, {
    count: [{
      type: Input
    }],
    loadingText: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }],
    animation: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    theme: [{
      type: Input
    }]
  });
})();
var NgxSkeletonLoaderModule = class _NgxSkeletonLoaderModule {
  static forRoot(config) {
    return {
      ngModule: _NgxSkeletonLoaderModule,
      providers: [{
        provide: NGX_SKELETON_LOADER_CONFIG,
        useValue: config
      }]
    };
  }
  static {
    this.\u0275fac = function NgxSkeletonLoaderModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NgxSkeletonLoaderModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NgxSkeletonLoaderModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [CommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSkeletonLoaderModule, [{
    type: NgModule,
    args: [{
      declarations: [NgxSkeletonLoaderComponent],
      imports: [CommonModule],
      exports: [NgxSkeletonLoaderComponent]
    }]
  }], null, null);
})();

export {
  NgxSkeletonLoaderComponent,
  NgxSkeletonLoaderModule
};
