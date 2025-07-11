import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle
} from "./chunk-T3L6IA2A.js";
import {
  MatButton,
  MatButtonModule,
  NgIf,
  TranslateModule,
  TranslatePipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-UIAHAIJK.js";

// src/app/player/components/epg-list/epg-item-description/epg-item-description.component.ts
function EpgItemDescriptionComponent_ng_container_6_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind1(2, 1, "EPG.PROGRAM_DIALOG.LANGUAGE"), "\n        ");
  }
}
function EpgItemDescriptionComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\n        ");
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
    \u0275\u0275elementStart(6, "p", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n        ");
    \u0275\u0275template(9, EpgItemDescriptionComponent_ng_container_6_div_9_Template, 3, 3, "div", 7);
    \u0275\u0275text(10, "\n        ");
    \u0275\u0275elementStart(11, "p", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n    ");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind1(4, 4, "EPG.PROGRAM_DIALOG.TITLE"), "\n        ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.epgProgram.title[0].value);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.epgProgram.title[0].lang);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.epgProgram.title[0].lang);
  }
}
function EpgItemDescriptionComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\n        ");
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
    \u0275\u0275elementStart(6, "p", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n    ");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind1(4, 2, "EPG.PROGRAM_DIALOG.CATEGORY"), "\n        ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.epgProgram.category[0].value);
  }
}
function EpgItemDescriptionComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\n        ");
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
    \u0275\u0275elementStart(6, "p", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n    ");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind1(4, 2, "EPG.PROGRAM_DIALOG.DESCRIPTION"), "\n        ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.epgProgram.desc[0].value);
  }
}
function EpgItemDescriptionComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\n        ");
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
    \u0275\u0275elementStart(6, "p", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n    ");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind1(4, 3, "EPG.PROGRAM_DIALOG.PARENTAL_RATING_SYSTEM"), "\n        ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("\n            ", ctx_r0.epgProgram.rating[0].value, " [", ctx_r0.epgProgram.rating[0].system, "]\n        ");
  }
}
var EpgItemDescriptionComponent = class _EpgItemDescriptionComponent {
  /**
   * Creates an instance of the component and injects the program of the clicked epg program
   * @param epgProgram epg program
   */
  constructor(epgProgram) {
    this.epgProgram = epgProgram;
  }
  static {
    this.\u0275fac = function EpgItemDescriptionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EpgItemDescriptionComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EpgItemDescriptionComponent, selectors: [["app-epg-item-description"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 10, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [4, "ngIf"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "cdkFocusInitial", "", "color", "accent"], [1, "subheading-2"], ["data-test", "title"], ["class", "subheading-2", 4, "ngIf"], ["data-test", "lang"], ["data-test", "category"], ["data-test", "desc"], ["data-test", "rating"]], template: function EpgItemDescriptionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(3, "\n");
        \u0275\u0275elementStart(4, "mat-dialog-content", 1);
        \u0275\u0275text(5, "\n    ");
        \u0275\u0275template(6, EpgItemDescriptionComponent_ng_container_6_Template, 14, 6, "ng-container", 2);
        \u0275\u0275text(7, "\n    ");
        \u0275\u0275template(8, EpgItemDescriptionComponent_ng_container_8_Template, 9, 4, "ng-container", 2);
        \u0275\u0275text(9, "\n    ");
        \u0275\u0275template(10, EpgItemDescriptionComponent_ng_container_10_Template, 9, 4, "ng-container", 2);
        \u0275\u0275text(11, "\n    ");
        \u0275\u0275template(12, EpgItemDescriptionComponent_ng_container_12_Template, 9, 5, "ng-container", 2);
        \u0275\u0275text(13, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, "\n");
        \u0275\u0275elementStart(15, "mat-dialog-actions", 3);
        \u0275\u0275text(16, "\n    ");
        \u0275\u0275elementStart(17, "button", 4);
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\n    ", \u0275\u0275pipeBind1(2, 6, "EPG.PROGRAM_DIALOG.PROGRAM_DETAILS"), "\n");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", (ctx.epgProgram == null ? null : ctx.epgProgram.title == null ? null : ctx.epgProgram.title.length) > 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (ctx.epgProgram == null ? null : ctx.epgProgram.category == null ? null : ctx.epgProgram.category.length) > 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (ctx.epgProgram == null ? null : ctx.epgProgram.desc == null ? null : ctx.epgProgram.desc.length) > 0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", (ctx.epgProgram == null ? null : ctx.epgProgram.rating == null ? null : ctx.epgProgram.rating.length) > 0);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(19, 8, "HOME.PLAYLISTS.INFO_DIALOG.CLOSE"), "\n    ");
      }
    }, dependencies: [MatButtonModule, MatButton, MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, NgIf, TranslateModule, TranslatePipe], styles: ["\n\n.subheading-2[_ngcontent-%COMP%] {\n  color: #666;\n  text-decoration: underline;\n  text-transform: uppercase;\n  font-weight: 900;\n  font-size: 0.9em;\n}\n  .dark-theme .subheading-2 {\n  color: #bdbdbd;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EpgItemDescriptionComponent, { className: "EpgItemDescriptionComponent" });
})();

export {
  EpgItemDescriptionComponent
};
