import {
  CdkDrag,
  CdkDragHandle,
  DragDropModule
} from "./chunk-33VEBIKZ.js";
import {
  MatListItem,
  MatListItemIcon,
  MatListItemLine,
  MatListItemMeta,
  MatListItemTitle,
  MatListModule
} from "./chunk-4D3XHEA7.js";
import {
  DatePipe,
  EventEmitter,
  MatButtonModule,
  MatDividerModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatTooltip,
  MatTooltipModule,
  NgIf,
  TranslateModule,
  TranslatePipe,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-UIAHAIJK.js";

// src/app/home/recent-playlists/playlist-item/playlist-item.component.ts
function PlaylistItemComponent_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2, "cloud");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "HOME.PLAYLISTS.ADDED_VIA_URL") + " " + (ctx_r1.item == null ? null : ctx_r1.item.url));
  }
}
function PlaylistItemComponent_mat_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2, "folder");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "HOME.PLAYLISTS.ADDED_VIA_FILE"));
  }
}
function PlaylistItemComponent_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2, "public");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "HOME.PLAYLISTS.XTREAM_PLAYLIST"));
  }
}
function PlaylistItemComponent_mat_icon_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2, "dashboard");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "HOME.PLAYLISTS.STALKER_PORTAL"));
  }
}
function PlaylistItemComponent_ng_container_18_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("\n                | ", \u0275\u0275pipeBind1(2, 2, "HOME.PLAYLISTS.ADDED"), ":\n                ", \u0275\u0275pipeBind1(3, 4, ctx_r1.item.importDate), "\n            ");
  }
}
function PlaylistItemComponent_ng_container_18_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("\n                | ", \u0275\u0275pipeBind1(2, 2, "HOME.PLAYLISTS.UPDATED"), ":\n                ", \u0275\u0275pipeBind2(3, 4, ctx_r1.item.updateDate, "MMMM d, yyyy, HH:mm"), "\n            ");
  }
}
function PlaylistItemComponent_ng_container_18_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\n                ");
    \u0275\u0275elementStart(2, "mat-icon", 10);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275text(4, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(3, 2, "HOME.PLAYLISTS.INFO_DIALOG.UPDATE_FAILED"))("inline", true);
  }
}
function PlaylistItemComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275template(3, PlaylistItemComponent_ng_container_18_ng_container_3_Template, 4, 6, "ng-container", 9);
    \u0275\u0275text(4, "\n            ");
    \u0275\u0275template(5, PlaylistItemComponent_ng_container_18_ng_container_5_Template, 4, 7, "ng-container", 9);
    \u0275\u0275text(6, "\n            ");
    \u0275\u0275template(7, PlaylistItemComponent_ng_container_18_ng_container_7_Template, 6, 4, "ng-container", 9);
    \u0275\u0275text(8, "\n        ");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("\n            ", \u0275\u0275pipeBind1(2, 5, "HOME.PLAYLISTS.CHANNELS"), ": ", ctx_r1.item.count, "\n            ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.item.importDate == null ? null : ctx_r1.item.importDate.length) > 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.item.updateDate);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.item.updateState === 2);
  }
}
function PlaylistItemComponent_ng_template_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                Stalker Portal\n            ");
  }
}
function PlaylistItemComponent_ng_template_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                Xtream Code Playlist\n            ");
  }
}
function PlaylistItemComponent_ng_template_20_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("\n                | ", \u0275\u0275pipeBind1(2, 2, "HOME.PLAYLISTS.ADDED"), ":\n                ", \u0275\u0275pipeBind1(3, 4, ctx_r1.item.importDate), "\n            ");
  }
}
function PlaylistItemComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275template(1, PlaylistItemComponent_ng_template_20_Conditional_1_Template, 1, 0)(2, PlaylistItemComponent_ng_template_20_Conditional_2_Template, 1, 0)(3, PlaylistItemComponent_ng_template_20_ng_container_3_Template, 4, 6, "ng-container", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.item == null ? null : ctx_r1.item.macAddress) ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.item.importDate == null ? null : ctx_r1.item.importDate.length) > 3);
  }
}
function PlaylistItemComponent_span_24_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function PlaylistItemComponent_span_24_button_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.refreshClicked.emit(ctx_r1.item));
    });
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "sync");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "HOME.PLAYLISTS.REFRESH"));
  }
}
function PlaylistItemComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1, "\n        ");
    \u0275\u0275template(2, PlaylistItemComponent_span_24_button_2_Template, 6, 3, "button", 12);
    \u0275\u0275text(3, "\n        ");
    \u0275\u0275elementStart(4, "button", 13);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("click", function PlaylistItemComponent_span_24_Template_button_click_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.editPlaylistClicked.emit(ctx_r1.item));
    });
    \u0275\u0275text(6, "\n            ");
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n\n        ");
    \u0275\u0275elementStart(11, "button", 14);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("click", function PlaylistItemComponent_span_24_Template_button_click_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r1.removeClicked.emit(ctx_r1.item._id));
    });
    \u0275\u0275text(13, "\n            ");
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "\n    ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.item.url || ctx_r1.item.filePath);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(5, 3, "HOME.PLAYLISTS.SHOW_DETAILS"));
    \u0275\u0275advance(7);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(12, 5, "HOME.PLAYLISTS.REMOVE"));
  }
}
var PlaylistItemComponent = class _PlaylistItemComponent {
  constructor() {
    this.showActions = true;
    this.editPlaylistClicked = new EventEmitter();
    this.playlistClicked = new EventEmitter();
    this.refreshClicked = new EventEmitter();
    this.removeClicked = new EventEmitter();
  }
  static {
    this.\u0275fac = function PlaylistItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistItemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistItemComponent, selectors: [["app-playlist-item"]], inputs: { item: "item", showActions: "showActions" }, outputs: { editPlaylistClicked: "editPlaylistClicked", playlistClicked: "playlistClicked", refreshClicked: "refreshClicked", removeClicked: "removeClicked" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 8, consts: [["xtreamPlaylist", ""], ["cdkDrag", "", 3, "click"], ["matListItemIcon", "", "cdkDragHandle", "", 1, "drag-icon"], ["matListItemIcon", "", "class", "upload-type-icon", 3, "matTooltip", 4, "ngIf"], ["matListItemTitle", ""], ["matListItemLine", "", 1, "meta"], [4, "ngIf", "ngIfElse"], ["matListItemMeta", "", "class", "action-buttons", 4, "ngIf"], ["matListItemIcon", "", 1, "upload-type-icon", 3, "matTooltip"], [4, "ngIf"], [3, "matTooltip", "inline"], ["matListItemMeta", "", 1, "action-buttons"], ["mat-icon-button", "", "class", "refresh-btn", "color", "accent", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", "color", "accent", 1, "edit-btn", 3, "click", "matTooltip"], ["mat-icon-button", "", "color", "accent", 1, "delete-btn", 3, "click", "matTooltip"], ["mat-icon-button", "", "color", "accent", 1, "refresh-btn", 3, "click", "matTooltip"]], template: function PlaylistItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "mat-list-item", 1);
        \u0275\u0275listener("click", function PlaylistItemComponent_Template_mat_list_item_click_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.playlistClicked.emit(ctx.item._id));
        });
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "mat-icon", 2);
        \u0275\u0275text(3, "drag_indicator");
        \u0275\u0275elementEnd();
        \u0275\u0275text(4, "\n    ");
        \u0275\u0275template(5, PlaylistItemComponent_mat_icon_5_Template, 3, 3, "mat-icon", 3);
        \u0275\u0275text(6, "\n    ");
        \u0275\u0275template(7, PlaylistItemComponent_mat_icon_7_Template, 3, 3, "mat-icon", 3);
        \u0275\u0275text(8, "\n    ");
        \u0275\u0275template(9, PlaylistItemComponent_mat_icon_9_Template, 3, 3, "mat-icon", 3);
        \u0275\u0275text(10, "\n    ");
        \u0275\u0275template(11, PlaylistItemComponent_mat_icon_11_Template, 3, 3, "mat-icon", 3);
        \u0275\u0275text(12, "\n    ");
        \u0275\u0275elementStart(13, "div", 4);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, "\n    ");
        \u0275\u0275elementStart(16, "div", 5);
        \u0275\u0275text(17, "\n        ");
        \u0275\u0275template(18, PlaylistItemComponent_ng_container_18_Template, 9, 7, "ng-container", 6);
        \u0275\u0275text(19, "\n        ");
        \u0275\u0275template(20, PlaylistItemComponent_ng_template_20_Template, 4, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275text(22, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, "\n\n    ");
        \u0275\u0275template(24, PlaylistItemComponent_span_24_Template, 18, 7, "span", 7);
        \u0275\u0275text(25, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, "\n");
      }
      if (rf & 2) {
        const xtreamPlaylist_r5 = \u0275\u0275reference(21);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.item == null ? null : ctx.item.url);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !(ctx.item == null ? null : ctx.item.url) && !ctx.item.serverUrl && !ctx.item.macAddress);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.item == null ? null : ctx.item.serverUrl);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.item == null ? null : ctx.item.macAddress);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.item.title || ctx.item.filename);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !ctx.item.serverUrl && !ctx.item.portalUrl)("ngIfElse", xtreamPlaylist_r5);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.showActions);
      }
    }, dependencies: [
      DatePipe,
      DragDropModule,
      CdkDrag,
      CdkDragHandle,
      MatButtonModule,
      MatIconButton,
      MatDividerModule,
      MatIconModule,
      MatIcon,
      MatListModule,
      MatListItem,
      MatListItemIcon,
      MatListItemLine,
      MatListItemTitle,
      MatListItemMeta,
      MatTooltipModule,
      MatTooltip,
      NgIf,
      TranslateModule,
      TranslatePipe
    ], styles: ["\n\nmat-list-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mat-list-base[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n}\n.meta[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  color: #666;\n  margin-top: 2px !important;\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 30px;\n  box-shadow:\n    0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(58, 58, 58, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.drag-icon[_ngcontent-%COMP%] {\n  cursor: move;\n  margin-right: 0;\n}\n@media only screen and (max-width: 480px) {\n    .main-container .favorites-icon, \n     .main-container .upload-type-icon, \n     .main-container .refresh-btn, \n     .main-container .edit-btn, \n     .main-container .delete-btn {\n    display: none;\n  }\n    .mdc-list-item__content {\n    padding-left: 20px;\n  }\n}\n.action-buttons[_ngcontent-%COMP%] {\n  align-self: center !important;\n}\n@media (max-width: 599px) {\n  .drag-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistItemComponent, { className: "PlaylistItemComponent" });
})();
export {
  PlaylistItemComponent
};
