import {
  MatSelect,
  MatSelectModule
} from "./chunk-BZW6CPKB.js";
import {
  NgxSkeletonLoaderComponent,
  NgxSkeletonLoaderModule
} from "./chunk-CZ6LWLN7.js";
import {
  CategoryContentViewComponent,
  CategoryViewComponent,
  ContentType,
  ExternalPlayerInfoDialogComponent,
  NavigationBarComponent,
  PlayerDialogComponent,
  PlaylistErrorViewComponent,
  PortalStore,
  VodDetailsComponent
} from "./chunk-OKPUAABI.js";
import "./chunk-R3UJABRW.js";
import "./chunk-G3O2MXPG.js";
import {
  STORE_KEY,
  StorageMap,
  VideoPlayer
} from "./chunk-IF63ICDL.js";
import "./chunk-Y4JPU4RN.js";
import {
  ActivatedRoute,
  DataService,
  ERROR,
  IpcCommand,
  MatDialog,
  MatFormField,
  MatSnackBar,
  OPEN_MPV_PLAYER,
  OPEN_VLC_PLAYER,
  PlaylistsService,
  Router,
  STALKER_REQUEST,
  STALKER_RESPONSE,
  Store,
  selectCurrentPlaylist,
  toSignal
} from "./chunk-T3L6IA2A.js";
import {
  AsyncPipe,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  MatButton,
  MatButtonModule,
  MatDivider,
  MatDividerModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatOption,
  MatTooltip,
  MatTooltipModule,
  NgIf,
  NgModule,
  NgOptimizedImage,
  NgZone,
  Optional,
  Output,
  ReplaySubject,
  SkipSelf,
  Subject,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  ViewEncapsulation$1,
  __spreadProps,
  __spreadValues,
  booleanAttribute,
  effect,
  inject,
  input,
  numberAttribute,
  output,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-UIAHAIJK.js";

// node_modules/.pnpm/@angular+material@18.2.1_@angular+animations@18.2.1_@angular+cdk@18.2.1_@angular+common@18.2._5t5ybbbshwwmxbsatflxvaci5a/node_modules/@angular/material/fesm2022/paginator.mjs
function MatPaginator_Conditional_2_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pageSizeOption_r3 = ctx.$implicit;
    \u0275\u0275property("value", pageSizeOption_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pageSizeOption_r3, " ");
  }
}
function MatPaginator_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 14)(1, "mat-select", 16, 0);
    \u0275\u0275listener("selectionChange", function MatPaginator_Conditional_2_Conditional_3_Template_mat_select_selectionChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1._changePageSize($event.value));
    });
    \u0275\u0275repeaterCreate(3, MatPaginator_Conditional_2_Conditional_3_For_4_Template, 2, 2, "mat-option", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18);
    \u0275\u0275listener("click", function MatPaginator_Conditional_2_Conditional_3_Template_div_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const selectRef_r4 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(selectRef_r4.open());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("appearance", ctx_r1._formFieldAppearance)("color", ctx_r1.color);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.pageSize)("disabled", ctx_r1.disabled)("aria-labelledby", ctx_r1._pageSizeLabelId)("panelClass", ctx_r1.selectConfig.panelClass || "")("disableOptionCentering", ctx_r1.selectConfig.disableOptionCentering);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1._displayedPageSizeOptions);
  }
}
function MatPaginator_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pageSize);
  }
}
function MatPaginator_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, MatPaginator_Conditional_2_Conditional_3_Template, 6, 7, "mat-form-field", 14)(4, MatPaginator_Conditional_2_Conditional_4_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("id", ctx_r1._pageSizeLabelId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1._intl.itemsPerPageLabel, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1._displayedPageSizeOptions.length > 1 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1._displayedPageSizeOptions.length <= 1 ? 4 : -1);
  }
}
function MatPaginator_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function MatPaginator_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.firstPage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 8);
    \u0275\u0275element(2, "path", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._previousButtonsDisabled());
    \u0275\u0275attribute("aria-label", ctx_r1._intl.firstPageLabel);
  }
}
function MatPaginator_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function MatPaginator_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.lastPage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 8);
    \u0275\u0275element(2, "path", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r1._intl.lastPageLabel)("matTooltipDisabled", ctx_r1._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx_r1._nextButtonsDisabled());
    \u0275\u0275attribute("aria-label", ctx_r1._intl.lastPageLabel);
  }
}
var MatPaginatorIntl = class _MatPaginatorIntl {
  constructor() {
    this.changes = new Subject();
    this.itemsPerPageLabel = "Items per page:";
    this.nextPageLabel = "Next page";
    this.previousPageLabel = "Previous page";
    this.firstPageLabel = "First page";
    this.lastPageLabel = "Last page";
    this.getRangeLabel = (page, pageSize, length) => {
      if (length == 0 || pageSize == 0) {
        return `0 of ${length}`;
      }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return `${startIndex + 1} \u2013 ${endIndex} of ${length}`;
    };
  }
  static {
    this.\u0275fac = function MatPaginatorIntl_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatPaginatorIntl)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _MatPaginatorIntl,
      factory: _MatPaginatorIntl.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginatorIntl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatPaginatorIntl();
}
var MAT_PAGINATOR_INTL_PROVIDER = {
  // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
  provide: MatPaginatorIntl,
  deps: [[new Optional(), new SkipSelf(), MatPaginatorIntl]],
  useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
};
var DEFAULT_PAGE_SIZE = 50;
var MAT_PAGINATOR_DEFAULT_OPTIONS = new InjectionToken("MAT_PAGINATOR_DEFAULT_OPTIONS");
var nextUniqueId = 0;
var MatPaginator = class _MatPaginator {
  /** The zero-based page index of the displayed list of items. Defaulted to 0. */
  get pageIndex() {
    return this._pageIndex;
  }
  set pageIndex(value) {
    this._pageIndex = Math.max(value || 0, 0);
    this._changeDetectorRef.markForCheck();
  }
  /** The length of the total number of items that are being paginated. Defaulted to 0. */
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value || 0;
    this._changeDetectorRef.markForCheck();
  }
  /** Number of items to display on a page. By default set to 50. */
  get pageSize() {
    return this._pageSize;
  }
  set pageSize(value) {
    this._pageSize = Math.max(value || 0, 0);
    this._updateDisplayedPageSizeOptions();
  }
  /** The set of provided page size options to display to the user. */
  get pageSizeOptions() {
    return this._pageSizeOptions;
  }
  set pageSizeOptions(value) {
    this._pageSizeOptions = (value || []).map((p) => numberAttribute(p, 0));
    this._updateDisplayedPageSizeOptions();
  }
  constructor(_intl, _changeDetectorRef, defaults) {
    this._intl = _intl;
    this._changeDetectorRef = _changeDetectorRef;
    this._pageSizeLabelId = `mat-paginator-page-size-label-${nextUniqueId++}`;
    this._isInitialized = false;
    this._initializedStream = new ReplaySubject(1);
    this._pageIndex = 0;
    this._length = 0;
    this._pageSizeOptions = [];
    this.hidePageSize = false;
    this.showFirstLastButtons = false;
    this.selectConfig = {};
    this.disabled = false;
    this.page = new EventEmitter();
    this.initialized = this._initializedStream;
    this._intlChanges = _intl.changes.subscribe(() => this._changeDetectorRef.markForCheck());
    if (defaults) {
      const {
        pageSize,
        pageSizeOptions,
        hidePageSize,
        showFirstLastButtons
      } = defaults;
      if (pageSize != null) {
        this._pageSize = pageSize;
      }
      if (pageSizeOptions != null) {
        this._pageSizeOptions = pageSizeOptions;
      }
      if (hidePageSize != null) {
        this.hidePageSize = hidePageSize;
      }
      if (showFirstLastButtons != null) {
        this.showFirstLastButtons = showFirstLastButtons;
      }
    }
    this._formFieldAppearance = defaults?.formFieldAppearance || "outline";
  }
  ngOnInit() {
    this._isInitialized = true;
    this._updateDisplayedPageSizeOptions();
    this._initializedStream.next();
  }
  ngOnDestroy() {
    this._initializedStream.complete();
    this._intlChanges.unsubscribe();
  }
  /** Advances to the next page if it exists. */
  nextPage() {
    if (!this.hasNextPage()) {
      return;
    }
    const previousPageIndex = this.pageIndex;
    this.pageIndex = this.pageIndex + 1;
    this._emitPageEvent(previousPageIndex);
  }
  /** Move back to the previous page if it exists. */
  previousPage() {
    if (!this.hasPreviousPage()) {
      return;
    }
    const previousPageIndex = this.pageIndex;
    this.pageIndex = this.pageIndex - 1;
    this._emitPageEvent(previousPageIndex);
  }
  /** Move to the first page if not already there. */
  firstPage() {
    if (!this.hasPreviousPage()) {
      return;
    }
    const previousPageIndex = this.pageIndex;
    this.pageIndex = 0;
    this._emitPageEvent(previousPageIndex);
  }
  /** Move to the last page if not already there. */
  lastPage() {
    if (!this.hasNextPage()) {
      return;
    }
    const previousPageIndex = this.pageIndex;
    this.pageIndex = this.getNumberOfPages() - 1;
    this._emitPageEvent(previousPageIndex);
  }
  /** Whether there is a previous page. */
  hasPreviousPage() {
    return this.pageIndex >= 1 && this.pageSize != 0;
  }
  /** Whether there is a next page. */
  hasNextPage() {
    const maxPageIndex = this.getNumberOfPages() - 1;
    return this.pageIndex < maxPageIndex && this.pageSize != 0;
  }
  /** Calculate the number of pages */
  getNumberOfPages() {
    if (!this.pageSize) {
      return 0;
    }
    return Math.ceil(this.length / this.pageSize);
  }
  /**
   * Changes the page size so that the first item displayed on the page will still be
   * displayed using the new page size.
   *
   * For example, if the page size is 10 and on the second page (items indexed 10-19) then
   * switching so that the page size is 5 will set the third page as the current page so
   * that the 10th item will still be displayed.
   */
  _changePageSize(pageSize) {
    const startIndex = this.pageIndex * this.pageSize;
    const previousPageIndex = this.pageIndex;
    this.pageIndex = Math.floor(startIndex / pageSize) || 0;
    this.pageSize = pageSize;
    this._emitPageEvent(previousPageIndex);
  }
  /** Checks whether the buttons for going forwards should be disabled. */
  _nextButtonsDisabled() {
    return this.disabled || !this.hasNextPage();
  }
  /** Checks whether the buttons for going backwards should be disabled. */
  _previousButtonsDisabled() {
    return this.disabled || !this.hasPreviousPage();
  }
  /**
   * Updates the list of page size options to display to the user. Includes making sure that
   * the page size is an option and that the list is sorted.
   */
  _updateDisplayedPageSizeOptions() {
    if (!this._isInitialized) {
      return;
    }
    if (!this.pageSize) {
      this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
    }
    this._displayedPageSizeOptions = this.pageSizeOptions.slice();
    if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
      this._displayedPageSizeOptions.push(this.pageSize);
    }
    this._displayedPageSizeOptions.sort((a, b) => a - b);
    this._changeDetectorRef.markForCheck();
  }
  /** Emits an event notifying that a change of the paginator's properties has been triggered. */
  _emitPageEvent(previousPageIndex) {
    this.page.emit({
      previousPageIndex,
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      length: this.length
    });
  }
  static {
    this.\u0275fac = function MatPaginator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatPaginator)(\u0275\u0275directiveInject(MatPaginatorIntl), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MAT_PAGINATOR_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatPaginator,
      selectors: [["mat-paginator"]],
      hostAttrs: ["role", "group", 1, "mat-mdc-paginator"],
      inputs: {
        color: "color",
        pageIndex: [2, "pageIndex", "pageIndex", numberAttribute],
        length: [2, "length", "length", numberAttribute],
        pageSize: [2, "pageSize", "pageSize", numberAttribute],
        pageSizeOptions: "pageSizeOptions",
        hidePageSize: [2, "hidePageSize", "hidePageSize", booleanAttribute],
        showFirstLastButtons: [2, "showFirstLastButtons", "showFirstLastButtons", booleanAttribute],
        selectConfig: "selectConfig",
        disabled: [2, "disabled", "disabled", booleanAttribute]
      },
      outputs: {
        page: "page"
      },
      exportAs: ["matPaginator"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      decls: 14,
      vars: 14,
      consts: [["selectRef", ""], [1, "mat-mdc-paginator-outer-container"], [1, "mat-mdc-paginator-container"], [1, "mat-mdc-paginator-page-size"], [1, "mat-mdc-paginator-range-actions"], ["aria-live", "polite", 1, "mat-mdc-paginator-range-label"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-previous", 3, "click", "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["viewBox", "0 0 24 24", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-next", 3, "click", "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], [1, "mat-mdc-paginator-page-size-label"], [1, "mat-mdc-paginator-page-size-select", 3, "appearance", "color"], [1, "mat-mdc-paginator-page-size-value"], ["hideSingleSelectionIndicator", "", 3, "selectionChange", "value", "disabled", "aria-labelledby", "panelClass", "disableOptionCentering"], [3, "value"], [1, "mat-mdc-paginator-touch-target", 3, "click"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-first", 3, "click", "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["mat-icon-button", "", "type", "button", 1, "mat-mdc-paginator-navigation-last", 3, "click", "matTooltip", "matTooltipDisabled", "matTooltipPosition", "disabled"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],
      template: function MatPaginator_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
          \u0275\u0275template(2, MatPaginator_Conditional_2_Template, 5, 4, "div", 3);
          \u0275\u0275elementStart(3, "div", 4)(4, "div", 5);
          \u0275\u0275text(5);
          \u0275\u0275elementEnd();
          \u0275\u0275template(6, MatPaginator_Conditional_6_Template, 3, 5, "button", 6);
          \u0275\u0275elementStart(7, "button", 7);
          \u0275\u0275listener("click", function MatPaginator_Template_button_click_7_listener() {
            return ctx.previousPage();
          });
          \u0275\u0275namespaceSVG();
          \u0275\u0275elementStart(8, "svg", 8);
          \u0275\u0275element(9, "path", 9);
          \u0275\u0275elementEnd()();
          \u0275\u0275namespaceHTML();
          \u0275\u0275elementStart(10, "button", 10);
          \u0275\u0275listener("click", function MatPaginator_Template_button_click_10_listener() {
            return ctx.nextPage();
          });
          \u0275\u0275namespaceSVG();
          \u0275\u0275elementStart(11, "svg", 8);
          \u0275\u0275element(12, "path", 11);
          \u0275\u0275elementEnd()();
          \u0275\u0275template(13, MatPaginator_Conditional_13_Template, 3, 5, "button", 12);
          \u0275\u0275elementEnd()()();
        }
        if (rf & 2) {
          \u0275\u0275advance(2);
          \u0275\u0275conditional(!ctx.hidePageSize ? 2 : -1);
          \u0275\u0275advance(3);
          \u0275\u0275textInterpolate1(" ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), " ");
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.showFirstLastButtons ? 6 : -1);
          \u0275\u0275advance();
          \u0275\u0275property("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._previousButtonsDisabled());
          \u0275\u0275attribute("aria-label", ctx._intl.previousPageLabel);
          \u0275\u0275advance(3);
          \u0275\u0275property("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("matTooltipPosition", "above")("disabled", ctx._nextButtonsDisabled());
          \u0275\u0275attribute("aria-label", ctx._intl.nextPageLabel);
          \u0275\u0275advance(3);
          \u0275\u0275conditional(ctx.showFirstLastButtons ? 13 : -1);
        }
      },
      dependencies: [MatFormField, MatSelect, MatOption, MatIconButton, MatTooltip],
      styles: [".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color, var(--mat-app-on-surface));background-color:var(--mat-paginator-container-background-color, var(--mat-app-surface));font-family:var(--mat-paginator-container-text-font, var(--mat-app-body-small-font));line-height:var(--mat-paginator-container-text-line-height, var(--mat-app-body-small-line-height));font-size:var(--mat-paginator-container-text-size, var(--mat-app-body-small-size));font-weight:var(--mat-paginator-container-text-weight, var(--mat-app-body-small-weight));letter-spacing:var(--mat-paginator-container-text-tracking, var(--mat-app-body-small-tracking));--mat-form-field-container-height:var(--mat-paginator-form-field-container-height);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size, var(--mat-app-body-small-size))}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color)}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.cdk-high-contrast-active .mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.cdk-high-contrast-active .mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}.mat-mdc-paginator-touch-target{display:var(--mat-paginator-touch-target-display);position:absolute;top:50%;left:50%;width:84px;height:48px;background-color:rgba(0,0,0,0);transform:translate(-50%, -50%);cursor:pointer}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginator, [{
    type: Component,
    args: [{
      selector: "mat-paginator",
      exportAs: "matPaginator",
      host: {
        "class": "mat-mdc-paginator",
        "role": "group"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      imports: [MatFormField, MatSelect, MatOption, MatIconButton, MatTooltip],
      template: `<div class="mat-mdc-paginator-outer-container">
  <div class="mat-mdc-paginator-container">
    @if (!hidePageSize) {
      <div class="mat-mdc-paginator-page-size">
        <div class="mat-mdc-paginator-page-size-label" [attr.id]="_pageSizeLabelId">
          {{_intl.itemsPerPageLabel}}
        </div>

        @if (_displayedPageSizeOptions.length > 1) {
          <mat-form-field
            [appearance]="_formFieldAppearance!"
            [color]="color"
            class="mat-mdc-paginator-page-size-select">
            <mat-select
              #selectRef
              [value]="pageSize"
              [disabled]="disabled"
              [aria-labelledby]="_pageSizeLabelId"
              [panelClass]="selectConfig.panelClass || ''"
              [disableOptionCentering]="selectConfig.disableOptionCentering"
              (selectionChange)="_changePageSize($event.value)"
              hideSingleSelectionIndicator>
              @for (pageSizeOption of _displayedPageSizeOptions; track pageSizeOption) {
                <mat-option [value]="pageSizeOption">
                  {{pageSizeOption}}
                </mat-option>
              }
            </mat-select>
          <div class="mat-mdc-paginator-touch-target" (click)="selectRef.open()"></div>
          </mat-form-field>
        }

        @if (_displayedPageSizeOptions.length <= 1) {
          <div class="mat-mdc-paginator-page-size-value">{{pageSize}}</div>
        }
      </div>
    }

    <div class="mat-mdc-paginator-range-actions">
      <div class="mat-mdc-paginator-range-label" aria-live="polite">
        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}
      </div>

      @if (showFirstLastButtons) {
        <button mat-icon-button type="button"
                class="mat-mdc-paginator-navigation-first"
                (click)="firstPage()"
                [attr.aria-label]="_intl.firstPageLabel"
                [matTooltip]="_intl.firstPageLabel"
                [matTooltipDisabled]="_previousButtonsDisabled()"
                [matTooltipPosition]="'above'"
                [disabled]="_previousButtonsDisabled()">
          <svg class="mat-mdc-paginator-icon"
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true">
            <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>
          </svg>
        </button>
      }
      <button mat-icon-button type="button"
              class="mat-mdc-paginator-navigation-previous"
              (click)="previousPage()"
              [attr.aria-label]="_intl.previousPageLabel"
              [matTooltip]="_intl.previousPageLabel"
              [matTooltipDisabled]="_previousButtonsDisabled()"
              [matTooltipPosition]="'above'"
              [disabled]="_previousButtonsDisabled()">
        <svg class="mat-mdc-paginator-icon"
             viewBox="0 0 24 24"
             focusable="false"
             aria-hidden="true">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>
      <button mat-icon-button type="button"
              class="mat-mdc-paginator-navigation-next"
              (click)="nextPage()"
              [attr.aria-label]="_intl.nextPageLabel"
              [matTooltip]="_intl.nextPageLabel"
              [matTooltipDisabled]="_nextButtonsDisabled()"
              [matTooltipPosition]="'above'"
              [disabled]="_nextButtonsDisabled()">
        <svg class="mat-mdc-paginator-icon"
             viewBox="0 0 24 24"
             focusable="false"
             aria-hidden="true">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </button>
      @if (showFirstLastButtons) {
        <button mat-icon-button type="button"
                class="mat-mdc-paginator-navigation-last"
                (click)="lastPage()"
                [attr.aria-label]="_intl.lastPageLabel"
                [matTooltip]="_intl.lastPageLabel"
                [matTooltipDisabled]="_nextButtonsDisabled()"
                [matTooltipPosition]="'above'"
                [disabled]="_nextButtonsDisabled()">
          <svg class="mat-mdc-paginator-icon"
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true">
            <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>
          </svg>
        </button>
      }
    </div>
  </div>
</div>
`,
      styles: [".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color, var(--mat-app-on-surface));background-color:var(--mat-paginator-container-background-color, var(--mat-app-surface));font-family:var(--mat-paginator-container-text-font, var(--mat-app-body-small-font));line-height:var(--mat-paginator-container-text-line-height, var(--mat-app-body-small-line-height));font-size:var(--mat-paginator-container-text-size, var(--mat-app-body-small-size));font-weight:var(--mat-paginator-container-text-weight, var(--mat-app-body-small-weight));letter-spacing:var(--mat-paginator-container-text-tracking, var(--mat-app-body-small-tracking));--mat-form-field-container-height:var(--mat-paginator-form-field-container-height);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size, var(--mat-app-body-small-size))}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color)}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}.cdk-high-contrast-active .mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.cdk-high-contrast-active .mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.cdk-high-contrast-active .mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}.mat-mdc-paginator-touch-target{display:var(--mat-paginator-touch-target-display);position:absolute;top:50%;left:50%;width:84px;height:48px;background-color:rgba(0,0,0,0);transform:translate(-50%, -50%);cursor:pointer}"]
    }]
  }], () => [{
    type: MatPaginatorIntl
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_PAGINATOR_DEFAULT_OPTIONS]
    }]
  }], {
    color: [{
      type: Input
    }],
    pageIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    length: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    pageSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    pageSizeOptions: [{
      type: Input
    }],
    hidePageSize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showFirstLastButtons: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectConfig: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    page: [{
      type: Output
    }]
  });
})();
var MatPaginatorModule = class _MatPaginatorModule {
  static {
    this.\u0275fac = function MatPaginatorModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatPaginatorModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatPaginatorModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [MAT_PAGINATOR_INTL_PROVIDER],
      imports: [MatButtonModule, MatSelectModule, MatTooltipModule, MatPaginator]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginatorModule, [{
    type: NgModule,
    args: [{
      imports: [MatButtonModule, MatSelectModule, MatTooltipModule, MatPaginator],
      exports: [MatPaginator],
      providers: [MAT_PAGINATOR_INTL_PROVIDER]
    }]
  }], null, null);
})();

// shared/stalker-portal-actions.enum.ts
var StalkerPortalActions;
(function(StalkerPortalActions2) {
  StalkerPortalActions2["GetCategories"] = "get_categories";
  StalkerPortalActions2["GetGenres"] = "get_genres";
  StalkerPortalActions2["CreateLink"] = "create_link";
  StalkerPortalActions2["GetOrderedList"] = "get_ordered_list";
  StalkerPortalActions2["Favorites"] = "favorites";
  StalkerPortalActions2["Handshake"] = "handshake";
  StalkerPortalActions2["DoAuth"] = "do_auth";
})(StalkerPortalActions || (StalkerPortalActions = {}));

// src/app/stalker/stalker-content-types.ts
var StalkerContentTypes = {
  stb: {
    doAuth: "do_auth",
    handshake: "handshake"
  },
  itv: {
    title: "Live streams",
    getContentAction: StalkerPortalActions.GetOrderedList,
    getCategoryAction: StalkerPortalActions.GetGenres,
    getLink: StalkerPortalActions.CreateLink
  },
  vod: {
    title: "VOD streams",
    getContentAction: StalkerPortalActions.GetOrderedList,
    getCategoryAction: StalkerPortalActions.GetCategories,
    getLink: StalkerPortalActions.CreateLink
  },
  series: {
    title: "Series",
    getContentAction: StalkerPortalActions.GetOrderedList,
    getCategoryAction: StalkerPortalActions.GetCategories,
    getLink: StalkerPortalActions.CreateLink
  }
  /* radio: {
      title: 'Radio',
      getContentAction: StalkerPortalActions.GetOrderedList,
      getCategoryAction: StalkerPortalActions.GetOrderedList,
      getLink: StalkerPortalActions.CreateLink,
  }, */
};

// src/app/stalker/favorites-button/favorites-button.component.ts
function FavoritesButtonComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function FavoritesButtonComponent_button_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addToFavorites());
    });
    \u0275\u0275text(1, "\n    ");
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "star_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n    ", \u0275\u0275pipeBind1(5, 1, "PORTALS.ADD_TO_FAVORITES"), "\n");
  }
}
function FavoritesButtonComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "button", 3);
    \u0275\u0275listener("click", function FavoritesButtonComponent_ng_template_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeFromFavorites());
    });
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n");
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(6, 1, "PORTALS.REMOVE_FROM_FAVORITES"), "\n    ");
  }
}
var FavoritesButtonComponent = class _FavoritesButtonComponent {
  constructor() {
    this.playlistService = inject(PlaylistsService);
    this.route = inject(ActivatedRoute);
    this.snackBar = inject(MatSnackBar);
    this.translateService = inject(TranslateService);
    this.portalId = this.route.snapshot.paramMap.get("id");
    this.serialMeta = input.required();
    this.isFavorite = false;
  }
  ngOnInit() {
    this.checkFavoriteStatus();
  }
  checkFavoriteStatus() {
    this.playlistService.getPortalFavorites(this.portalId).subscribe((favorites) => {
      this.isFavorite = favorites.some((i) => i.movie_id === this.serialMeta().movie_id);
    });
  }
  toggleFavorites(isFav) {
    if (isFav)
      this.removeFromFavorites();
    else
      this.addToFavorites();
  }
  removeFromFavorites() {
    this.playlistService.removeFromPortalFavorites(this.portalId, this.serialMeta().movie_id).subscribe(() => {
      this.snackBar.open(this.translateService.instant("PORTALS.REMOVED_FROM_FAVORITES"), null, {
        duration: 1e3
      });
      this.checkFavoriteStatus();
    });
  }
  addToFavorites() {
    this.playlistService.addPortalFavorite(this.portalId, this.serialMeta()).subscribe(() => {
      this.snackBar.open(this.translateService.instant("PORTALS.ADDED_TO_FAVORITES"), null, {
        duration: 1e3
      });
      this.checkFavoriteStatus();
    });
  }
  static {
    this.\u0275fac = function FavoritesButtonComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FavoritesButtonComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FavoritesButtonComponent, selectors: [["app-favorites-button"]], inputs: { serialMeta: [1, "serialMeta"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 2, consts: [["removeFromFavoritesButton", ""], ["mat-flat-button", "", "color", "accent", 3, "click", 4, "ngIf", "ngIfElse"], ["mat-flat-button", "", "color", "accent", 3, "click"], ["mat-stroked-button", "", "color", "accent", 3, "click"]], template: function FavoritesButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, FavoritesButtonComponent_button_0_Template, 6, 3, "button", 1);
        \u0275\u0275text(1, "\n\n");
        \u0275\u0275template(2, FavoritesButtonComponent_ng_template_2_Template, 8, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275text(4, "\n");
      }
      if (rf & 2) {
        const removeFromFavoritesButton_r4 = \u0275\u0275reference(3);
        \u0275\u0275property("ngIf", !ctx.isFavorite)("ngIfElse", removeFromFavoritesButton_r4);
      }
    }, dependencies: [MatButtonModule, MatButton, MatIconModule, MatIcon, NgIf, TranslateModule, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FavoritesButtonComponent, { className: "FavoritesButtonComponent" });
})();

// src/app/stalker/stalker-series-view/stalker-series-view.component.ts
var _c0 = (a0, a1, a2) => ({ movie_id: a0, name: a1, cover: a2 });
function StalkerSeriesViewComponent_Conditional_2_img_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 9);
  }
  if (rf & 2) {
    const serial_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngSrc", serial_r1.screenshot_uri);
  }
}
function StalkerSeriesViewComponent_Conditional_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275text(2, "\n            ");
  }
}
function StalkerSeriesViewComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275template(3, StalkerSeriesViewComponent_Conditional_2_img_3_Template, 1, 1, "img", 4);
    \u0275\u0275text(4, "\n            ");
    \u0275\u0275template(5, StalkerSeriesViewComponent_Conditional_2_ng_template_5_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n\n        ");
    \u0275\u0275elementStart(9, "div", 5);
    \u0275\u0275text(10, "\n            ");
    \u0275\u0275elementStart(11, "h2");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n            ");
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n            ");
    \u0275\u0275elementStart(17, "div");
    \u0275\u0275text(18, "\n                ");
    \u0275\u0275elementStart(19, "div", 6);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n            ");
    \u0275\u0275elementStart(24, "div");
    \u0275\u0275text(25, "\n                ");
    \u0275\u0275elementStart(26, "div", 6);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, "\n            ");
    \u0275\u0275elementStart(31, "div");
    \u0275\u0275text(32, "\n                ");
    \u0275\u0275elementStart(33, "div", 6);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, "\n            ");
    \u0275\u0275elementStart(38, "div");
    \u0275\u0275text(39, "\n                ");
    \u0275\u0275elementStart(40, "div", 6);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(43);
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, "\n            ");
    \u0275\u0275elementStart(45, "div");
    \u0275\u0275text(46, "\n                ");
    \u0275\u0275elementStart(47, "div", 6);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50);
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, "\n            ");
    \u0275\u0275elementStart(52, "div");
    \u0275\u0275text(53, "\n                ");
    \u0275\u0275elementStart(54, "div", 6);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57);
    \u0275\u0275elementEnd();
    \u0275\u0275text(58, "\n            ");
    \u0275\u0275elementStart(59, "div");
    \u0275\u0275text(60, "\n                ");
    \u0275\u0275elementStart(61, "div", 6);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64);
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, "\n            ");
    \u0275\u0275elementStart(66, "div");
    \u0275\u0275text(67, "\n                ");
    \u0275\u0275elementStart(68, "div", 6);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(71);
    \u0275\u0275elementEnd();
    \u0275\u0275text(72, "\n            ");
    \u0275\u0275elementStart(73, "div", 7);
    \u0275\u0275text(74, "\n                ");
    \u0275\u0275element(75, "app-favorites-button", 8);
    \u0275\u0275text(76, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(77, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(78, "\n    ");
  }
  if (rf & 2) {
    const serial_r1 = ctx;
    const placeholderCover_r2 = \u0275\u0275reference(6);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", serial_r1.screenshot_uri)("ngIfElse", placeholderCover_r2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(serial_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                ", serial_r1.description, "\n            ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(21, 21, "XTREAM.DIRECTOR"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                ", serial_r1.director, "\n            ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(28, 23, "XTREAM.ACTORS"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                ", serial_r1.actors, "\n            ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(35, 25, "XTREAM.YEAR"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                ", serial_r1.year, "\n            ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(42, 27, "XTREAM.GENRE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                ", serial_r1.genres_str, "\n            ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(49, 29, "XTREAM.AGE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                ", serial_r1.age, "\n            ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(56, 31, "XTREAM.IMDB_RATING"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                ", serial_r1.rating_imdb, "\n            ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(63, 33, "XTREAM.KINOPOISK_RATING"), ":\n                ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                ", serial_r1.rating_kinopoisk, "\n            ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(70, 35, "HOME.PLAYLISTS.ADDED"), ":\n                ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n                ", serial_r1.added, "\n            ");
    \u0275\u0275advance(4);
    \u0275\u0275property("serialMeta", \u0275\u0275pureFunction3(37, _c0, serial_r1.id, serial_r1.name, serial_r1.screenshot_uri));
  }
}
function StalkerSeriesViewComponent_For_7_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "button", 12);
    \u0275\u0275listener("click", function StalkerSeriesViewComponent_For_7_For_9_Template_button_click_1_listener() {
      const episode_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const item_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.playEpisode.emit({ series: episode_r4, cmd: item_r5.cmd }));
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n            ");
  }
  if (rf & 2) {
    const episode_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("\n                    ", \u0275\u0275pipeBind1(3, 2, "XTREAM.EPISODE"), " ", episode_r4, "\n                ");
  }
}
function StalkerSeriesViewComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275element(1, "mat-divider");
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
    \u0275\u0275elementStart(6, "div", 11);
    \u0275\u0275text(7, "\n            ");
    \u0275\u0275repeaterCreate(8, StalkerSeriesViewComponent_For_7_For_9_Template, 5, 4, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n    ");
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r5.name);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(item_r5.series);
  }
}
function sortByNumericValue(array) {
  if (!array)
    return [];
  const key = "name";
  return array.sort((a, b) => {
    const numericA = extractNumericValue(a[key]);
    const numericB = extractNumericValue(b[key]);
    return numericA - numericB;
  });
}
function extractNumericValue(str) {
  const matches = str.match(/\d+/);
  if (matches) {
    return parseInt(matches[0], 10);
  }
  return 0;
}
var StalkerSeriesViewComponent = class _StalkerSeriesViewComponent {
  constructor() {
    this.seasons = input.required({
      transform: sortByNumericValue
    });
    this.playEpisode = output();
  }
  static {
    this.\u0275fac = function StalkerSeriesViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StalkerSeriesViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StalkerSeriesViewComponent, selectors: [["app-stalker-series-view"]], inputs: { seasons: [1, "seasons"] }, outputs: { playEpisode: "playEpisode" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 1, consts: [["placeholderCover", ""], [1, "container"], [1, "seasons"], [1, "image"], ["style", "position: relative", "fill", "", 3, "ngSrc", 4, "ngIf", "ngIfElse"], [1, "details"], [1, "label"], [1, "action-buttons"], [3, "serialMeta"], ["fill", "", 2, "position", "relative", 3, "ngSrc"], [1, "placeholder-cover"], [1, "episodes"], ["mat-stroked-button", "", 3, "click"]], template: function StalkerSeriesViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275template(2, StalkerSeriesViewComponent_Conditional_2_Template, 79, 41);
        \u0275\u0275elementEnd();
        \u0275\u0275text(3, "\n");
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275text(5, "\n    ");
        \u0275\u0275repeaterCreate(6, StalkerSeriesViewComponent_For_7_Template, 11, 1, null, null, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275elementEnd();
        \u0275\u0275text(8, "\n");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_0_0 = ctx.seasons()[0]) ? 2 : -1, tmp_0_0);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.seasons());
      }
    }, dependencies: [
      FavoritesButtonComponent,
      MatButtonModule,
      MatButton,
      MatDividerModule,
      MatDivider,
      NgIf,
      NgOptimizedImage,
      TranslateModule,
      TranslatePipe
    ], styles: ['\n\n[_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n.details[_ngcontent-%COMP%] {\n  color: #eee;\n}\n.details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: 350px 450px;\n  justify-content: center;\n}\n.container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  z-index: -1;\n  background-repeat: no-repeat;\n}\n.seasons[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.seasons[_ngcontent-%COMP%]   .episodes[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.seasons[_ngcontent-%COMP%]   .episodes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.image[_ngcontent-%COMP%] {\n  width: 300px;\n  padding: 20px 10px;\n}\n.image[_ngcontent-%COMP%]   .placeholder-cover[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 500px;\n  background-color: #999;\n  border-radius: 5px;\n}\n.image[_ngcontent-%COMP%]   .placeholder-cover[_ngcontent-%COMP%]::after {\n  content: "No cover";\n  position: relative;\n  top: 230px;\n  left: 115px;\n}\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  border-radius: 5px;\n}\n@media (max-width: 800px) {\n  .container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0 auto;\n    max-width: 1200px;\n  }\n  .image[_ngcontent-%COMP%], \n   .details[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n  }\n  .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n   .details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n  .details[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n  .youtube-trailer[_ngcontent-%COMP%] {\n    width: 95% !important;\n  }\n}\n.label[_ngcontent-%COMP%] {\n  font-weight: 100;\n  font-size: 0.9em;\n  padding: 5px 0;\n  text-decoration: underline;\n  opacity: 0.6;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.youtube-trailer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-self: center;\n  width: 650px;\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StalkerSeriesViewComponent, { className: "StalkerSeriesViewComponent" });
})();

// src/app/stalker/stalker-main-container.component.ts
var _c02 = () => [];
var _c1 = () => ({ width: "170px", height: "270px" });
var _c2 = () => ({ width: "60%", height: "30px" });
var _c3 = () => ({ width: "170px", height: "51px" });
function StalkerMainContainerComponent_Conditional_2_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275text(2, "\n                        ");
    \u0275\u0275element(3, "ngx-skeleton-loader", 4);
    \u0275\u0275text(4, "\n                        ");
    \u0275\u0275element(5, "ngx-skeleton-loader", 4);
    \u0275\u0275text(6, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                ");
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("theme", \u0275\u0275pureFunction0(2, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275property("theme", \u0275\u0275pureFunction0(3, _c2));
  }
}
function StalkerMainContainerComponent_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275repeaterCreate(3, StalkerMainContainerComponent_Conditional_2_Conditional_3_For_4_Template, 8, 4, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c02).constructor(14));
  }
}
function StalkerMainContainerComponent_Conditional_2_Conditional_4_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275element(1, "ngx-skeleton-loader", 4);
    \u0275\u0275text(2, "\n                ");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("theme", \u0275\u0275pureFunction0(1, _c3));
  }
}
function StalkerMainContainerComponent_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "div", 5);
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275repeaterCreate(3, StalkerMainContainerComponent_Conditional_2_Conditional_4_For_4_Template, 3, 2, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(0, _c02).constructor(14));
  }
}
function StalkerMainContainerComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275template(3, StalkerMainContainerComponent_Conditional_2_Conditional_3_Template, 6, 1)(4, StalkerMainContainerComponent_Conditional_2_Conditional_4_Template, 6, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.currentLayout === "category_content" ? 3 : ctx_r0.currentLayout === "category" ? 4 : -1);
  }
}
function StalkerMainContainerComponent_Conditional_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "app-category-view", 6);
    \u0275\u0275listener("categoryClicked", function StalkerMainContainerComponent_Conditional_3_Case_1_Template_app_category_view_categoryClicked_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.categoryClicked($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n        ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r0.items);
  }
}
function StalkerMainContainerComponent_Conditional_3_Case_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "mat-paginator", 8);
    \u0275\u0275listener("page", function StalkerMainContainerComponent_Conditional_3_Case_2_Conditional_3_Template_mat_paginator_page_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.handlePageChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n            ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx_r0.length)("pageIndex", ctx_r0.pageIndex)("pageSize", ctx_r0.pageSize);
  }
}
function StalkerMainContainerComponent_Conditional_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "app-category-content-view", 7);
    \u0275\u0275listener("itemClicked", function StalkerMainContainerComponent_Conditional_3_Case_2_Template_app_category_content_view_itemClicked_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.itemClicked($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275template(3, StalkerMainContainerComponent_Conditional_3_Case_2_Conditional_3_Template, 3, 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("items", ctx_r0.items);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.currentLayout === "category_content" && ctx_r0.length && ctx_r0.length > 0 ? 3 : -1);
  }
}
function StalkerMainContainerComponent_Conditional_3_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "app-vod-details", 9);
    \u0275\u0275listener("playClicked", function StalkerMainContainerComponent_Conditional_3_Case_3_Template_app_vod_details_playClicked_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.createLinkToPlayVod(ctx_r0.itemDetails.cmd));
    })("addToFavoritesClicked", function StalkerMainContainerComponent_Conditional_3_Case_3_Template_app_vod_details_addToFavoritesClicked_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.addToFavorites($event));
    })("removeFromFavoritesClicked", function StalkerMainContainerComponent_Conditional_3_Case_3_Template_app_vod_details_removeFromFavoritesClicked_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeFromFavorites($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n        ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("item", ctx_r0.itemDetails);
  }
}
function StalkerMainContainerComponent_Conditional_3_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "app-stalker-series-view", 10);
    \u0275\u0275listener("playEpisode", function StalkerMainContainerComponent_Conditional_3_Case_4_Template_app_stalker_series_view_playEpisode_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.createLinkToPlayEpisode($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n        ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("seasons", ctx_r0.seasons);
  }
}
function StalkerMainContainerComponent_Conditional_3_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "app-category-content-view", 7);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("itemClicked", function StalkerMainContainerComponent_Conditional_3_Case_5_Template_app_category_content_view_itemClicked_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.favoriteClicked($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n        ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("items", \u0275\u0275pipeBind1(2, 1, ctx_r0.favorites$));
  }
}
function StalkerMainContainerComponent_Conditional_3_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275element(1, "app-playlist-error-view", 11);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275text(4, "\n        ");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 2, "PORTALS.ERROR_VIEW.ACCOUNT_EXPIRED.TITLE"))("description", \u0275\u0275pipeBind1(3, 4, "PORTALS.ERROR_VIEW.ACCOUNT_EXPIRED.DESCRIPTION"));
  }
}
function StalkerMainContainerComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275template(1, StalkerMainContainerComponent_Conditional_3_Case_1_Template, 3, 1)(2, StalkerMainContainerComponent_Conditional_3_Case_2_Template, 4, 2)(3, StalkerMainContainerComponent_Conditional_3_Case_3_Template, 3, 1)(4, StalkerMainContainerComponent_Conditional_3_Case_4_Template, 3, 1)(5, StalkerMainContainerComponent_Conditional_3_Case_5_Template, 4, 3)(6, StalkerMainContainerComponent_Conditional_3_Case_6_Template, 5, 6);
    \u0275\u0275text(7, "\n");
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_1_0 = ctx_r0.currentLayout) === "category" ? 1 : tmp_1_0 === "category_content" ? 2 : tmp_1_0 === "vod-details" ? 3 : tmp_1_0 === "serial-details" ? 4 : tmp_1_0 === "favorites" ? 5 : tmp_1_0 === "not-available" ? 6 : -1);
  }
}
var StalkerMainContainerComponent = class _StalkerMainContainerComponent {
  constructor(activatedRoute, dataService, dialog, ngZone, playlistService, portalStore, router, snackBar, storage, store, translate) {
    this.activatedRoute = activatedRoute;
    this.dataService = dataService;
    this.dialog = dialog;
    this.ngZone = ngZone;
    this.playlistService = playlistService;
    this.portalStore = portalStore;
    this.router = router;
    this.snackBar = snackBar;
    this.storage = storage;
    this.store = store;
    this.translate = translate;
    this.breadcrumbs = [];
    this.currentPlaylist = this.store.selectSignal(selectCurrentPlaylist);
    this.listeners = [];
    this.isLoading = true;
    this.selectedContentType = ContentType.VODS;
    this.currentLayout = "category";
    this.searchPhrase = this.portalStore.searchPhrase();
    this.settings = toSignal(this.storage.get(STORE_KEY.Settings));
    this.items = [];
    this.navigationContentTypes = [
      {
        contentType: ContentType.ITV,
        label: "Live Streams",
        icon: "live_tv"
      },
      {
        contentType: ContentType.VODS,
        label: "VOD Streams",
        icon: "movie"
      },
      {
        contentType: ContentType.SERIES,
        label: "Series",
        icon: "video_library"
      }
      /* {
          contentType: ContentType.RADIO,
          label: 'Radio',
      }, */
    ];
    this.hideExternalInfoDialog = this.portalStore.hideExternalInfoDialog;
    this.length = 0;
    this.pageSize = 14;
    this.pageIndex = 0;
    this.seasons = [];
    this.commandsList = [
      new IpcCommand(STALKER_RESPONSE, (response) => this.handleResponse(response)),
      new IpcCommand(ERROR, (response) => {
        this.currentLayout = "not-available";
        this.showErrorAsNotification(response);
        this.isLoading = false;
      })
    ];
    effect(() => {
      if (this.currentPlaylist()) {
        if (this.currentPlaylist().password && this.currentPlaylist().username) {
          this.handshake();
        } else {
          this.selectedContentType = this.activatedRoute.snapshot.queryParams.type ?? ContentType.VODS;
          const action = this.activatedRoute.snapshot.queryParams.action ?? StalkerPortalActions.GetCategories;
          const { category, movie_id } = this.activatedRoute.snapshot.queryParams;
          if (action === StalkerPortalActions.GetCategories) {
            this.getCategories(this.selectedContentType);
          } else if (action === StalkerPortalActions.GetOrderedList && (category || movie_id)) {
            this.getOrderedList(this.selectedContentType, category, movie_id);
          }
        }
        this.favorites$ = this.playlistService.getPortalFavorites(this.currentPlaylist()._id);
      }
    }, { allowSignalWrites: true });
    this.portalStore.setSearchPhrase("");
  }
  ngOnInit() {
    this.commandsList.forEach((command) => {
      if (this.dataService.isElectron) {
        this.dataService.listenOn(command.id, (_event, response) => this.ngZone.run(() => command.callback(response)));
      } else {
        const cb = (response) => {
          if (response.data.type === command.id) {
            command.callback(response.data);
          }
        };
        this.dataService.listenOn(command.id, cb);
        this.listeners.push(cb);
      }
    });
  }
  handshake() {
    this.sendRequest({
      action: StalkerPortalActions.Handshake,
      type: ContentType.STB
    });
  }
  setInitialBreadcrumb(action, title) {
    this.breadcrumbs = [{ title, action }];
  }
  getCategories(contentType) {
    this.router.navigate([], { queryParams: { type: contentType } });
    this.selectedContentType = contentType;
    this.currentLayout = "category";
    const action = StalkerContentTypes[contentType].getCategoryAction;
    this.pageIndex = 0;
    this.setInitialBreadcrumb(action, this.translate.instant("PORTALS.ALL_CATEGORIES"));
    this.sendRequest({ action, type: contentType });
  }
  getOrderedList(type, category, movieId) {
    if (!movieId) {
      this.currentLayout = "category_content";
    } else {
      if (type === ContentType.SERIES) {
        this.currentLayout = "serial-details";
      } else if (type === ContentType.VODS) {
        this.currentLayout = "vod-details";
      }
    }
    const action = StalkerPortalActions.GetOrderedList;
    this.setInitialBreadcrumb(action, this.translate.instant("PORTALS.ALL_CATEGORIES"));
    this.sendRequest(__spreadValues({
      action,
      type,
      category
    }, movieId ? { movie_id: movieId } : {}));
  }
  sendRequest(params) {
    if (params.action !== StalkerPortalActions.CreateLink) {
      this.isLoading = true;
      this.items = [];
    }
    const { portalUrl, macAddress } = this.currentPlaylist();
    let token = {};
    if (sessionStorage.getItem(this.currentPlaylist()._id)) {
      token = sessionStorage.getItem(this.currentPlaylist()._id);
    }
    this.updateRoute(params);
    this.dataService.sendIpcEvent(STALKER_REQUEST, {
      url: portalUrl,
      macAddress,
      params: __spreadProps(__spreadValues({}, params), {
        token
      })
    });
  }
  updateRoute(params) {
    let queryParams;
    if (params.action === StalkerPortalActions.GetCategories) {
      queryParams = {
        action: params.action,
        type: params.type
      };
    } else if (params.action === StalkerPortalActions.GetOrderedList) {
      queryParams = __spreadValues(__spreadValues({
        action: params.action,
        type: params.type
      }, params.category ? { category: params.category } : {}), params.movie_id ? { movie_id: params.movie_id } : {});
    }
    this.router.navigate([], {
      queryParams
    });
  }
  showErrorAsNotification(response) {
    this.snackBar.open(`Error: ${response?.message ?? "Something went wrong"} (Status: ${response?.status ?? 0})`, null, { duration: 4e3 });
    this.isLoading = false;
  }
  handleResponse(response) {
    if (typeof response.payload !== "object") {
      this.isLoading = false;
      return;
    }
    if (this.currentLayout === "serial-details" && response.action !== StalkerPortalActions.CreateLink) {
      this.seasons = response.payload.js.data;
      this.portalStore.setCurrentSerial(this.seasons);
    }
    if (response.action === StalkerPortalActions.GetCategories || response.action === StalkerPortalActions.GetGenres) {
      this.items = response.payload.js.map((item) => ({
        category_name: item.title,
        category_id: item.id
      }));
    } else if (response.action === StalkerPortalActions.GetOrderedList) {
      if (response.payload.js.data && response.payload.js.data.length > 0)
        this.portalStore.setContent(response.payload.js.data);
      this.items = response.payload.js.data.map((item) => __spreadProps(__spreadValues({}, item), {
        cover: item.screenshot_uri
      }));
      this.length = response.payload.js.total_items;
    } else if (response.action === StalkerPortalActions.CreateLink) {
      let url = response.payload.js.cmd;
      if (url?.startsWith("ffmpeg")) {
        url = url.split(" ")[1];
      }
      this.openPlayer(url);
    } else if (response.action === StalkerPortalActions.Handshake) {
      const token = response.payload.js.token;
      sessionStorage.setItem(this.currentPlaylist()._id, token);
      this.sendRequest({
        action: StalkerPortalActions.DoAuth,
        login: this.currentPlaylist().username,
        password: this.currentPlaylist().password,
        type: ContentType.STB,
        token
      });
    } else if (response.action === StalkerPortalActions.DoAuth) {
      this.getCategories(this.selectedContentType);
    }
    this.isLoading = false;
  }
  openPlayer(streamUrl) {
    const player = this.settings()?.player ?? VideoPlayer.VideoJs;
    if (player === VideoPlayer.MPV) {
      if (!this.hideExternalInfoDialog())
        this.dialog.open(ExternalPlayerInfoDialogComponent);
      this.dataService.sendIpcEvent(OPEN_MPV_PLAYER, {
        url: streamUrl
      });
    } else if (player === VideoPlayer.VLC) {
      if (!this.hideExternalInfoDialog())
        this.dialog.open(ExternalPlayerInfoDialogComponent);
      this.dataService.sendIpcEvent(OPEN_VLC_PLAYER, {
        url: streamUrl
      });
    } else {
      this.dialog.open(PlayerDialogComponent, {
        data: {
          streamUrl,
          title: this.itvTitle
        },
        width: "80%"
      });
    }
  }
  categoryClicked(item) {
    this.currentLayout = "category_content";
    this.currentCategoryId = item.category_id;
    const action = StalkerContentTypes[this.selectedContentType].getContentAction;
    this.portalStore.setSearchPhrase("");
    this.breadcrumbs.push({
      title: item.category_name,
      category_id: item.category_id,
      action
    });
    this.sendRequest({
      action,
      type: this.selectedContentType,
      category: item.category_id,
      genre: item.category_id
    });
  }
  favoriteClicked(item) {
    if (item.movie_id) {
      this.getSerialDetails(item);
    } else if (item.stream_id && item.details) {
      this.itemDetails = item.details;
      this.breadcrumbs.push({
        title: this.itemDetails?.info?.name,
        action: StalkerPortalActions.GetOrderedList
      });
      this.currentLayout = "vod-details";
    } else {
      this.snackBar.open("Something went wrong, id is missing.");
    }
  }
  getSerialDetails(item) {
    this.sendRequest({
      action: StalkerPortalActions.GetOrderedList,
      type: ContentType.SERIES,
      movie_id: item.id ?? item.movie_id
    });
    this.breadcrumbs.push({
      title: item.name,
      action: StalkerPortalActions.GetCategories
    });
    this.currentLayout = "serial-details";
  }
  getVodDetails(item) {
    const selectedContent = this.portalStore.getContentById(item.id)();
    this.itemDetails = {
      id: item.id,
      cmd: selectedContent.cmd,
      info: {
        movie_image: selectedContent.screenshot_uri,
        description: selectedContent.description,
        name: selectedContent.name,
        director: selectedContent.director,
        releasedate: selectedContent.year,
        genre: selectedContent.genres_str,
        actors: selectedContent.actors,
        rating_imdb: selectedContent.rating_imdb,
        rating_kinopoisk: selectedContent.rating_kinopoisk
      }
    };
    this.breadcrumbs.push({
      title: this.itemDetails?.info?.name,
      action: StalkerPortalActions.GetOrderedList
    });
    this.currentLayout = "vod-details";
  }
  itemClicked(item) {
    this.itvTitle = item.name;
    if (this.selectedContentType === ContentType.SERIES) {
      this.getSerialDetails(item);
    } else if (this.selectedContentType === ContentType.ITV) {
      this.createLinkToPlayVod(item.cmd);
    } else if (this.selectedContentType === ContentType.VODS) {
      this.getVodDetails(item);
    }
  }
  createLinkToPlayEpisode(payload) {
    this.sendRequest({
      action: StalkerPortalActions.CreateLink,
      type: ContentType.VODS,
      cmd: payload.cmd,
      series: payload.series,
      forced_storage: "undefined",
      disable_ad: "0",
      JsHttpRequest: "1-xml"
    });
  }
  createLinkToPlayVod(cmd) {
    this.sendRequest({
      action: StalkerPortalActions.CreateLink,
      type: this.selectedContentType,
      cmd: cmd ?? this.itemDetails.cmd,
      forced_storage: "undefined",
      disable_ad: "0",
      JsHttpRequest: "1-xml"
    });
  }
  breadcrumbClicked(breadcrumb) {
    const itemIndex = this.breadcrumbs.findIndex((i) => i === breadcrumb);
    if (itemIndex === this.breadcrumbs.length - 1)
      return;
    this.breadcrumbs.splice(itemIndex + 1, this.breadcrumbs.length - itemIndex - 1);
    if (breadcrumb.action === StalkerPortalActions.GetOrderedList) {
      this.currentLayout = "category_content";
    } else if (breadcrumb.action === StalkerPortalActions.GetCategories || breadcrumb.action === StalkerPortalActions.GetGenres) {
      this.pageIndex = 0;
      this.currentLayout = "category";
    } else if (breadcrumb.action === StalkerPortalActions.Favorites) {
      this.currentLayout = "favorites";
    }
    this.currentCategoryId = breadcrumb.category_id;
    this.sendRequest(__spreadValues({
      action: breadcrumb.action,
      type: this.selectedContentType
    }, breadcrumb.category_id ? {
      category: breadcrumb.category_id,
      genre: breadcrumb.category_id
    } : {}));
  }
  addToFavorites(item) {
    this.playlistService.addPortalFavorite(this.currentPlaylist()._id, item).subscribe(() => {
      this.snackBar.open(this.translate.instant("PORTALS.ADDED_TO_FAVORITES"), null, {
        duration: 1e3
      });
    });
  }
  removeFromFavorites(favoriteId) {
    this.playlistService.removeFromPortalFavorites(this.currentPlaylist()._id, favoriteId).subscribe(() => {
      this.snackBar.open(this.translate.instant("PORTALS.REMOVED_FROM_FAVORITES"), null, {
        duration: 1e3
      });
    });
  }
  setSearchPhrase(searchPhrase) {
    if (this.currentLayout === "category_content" && this.searchPhrase !== searchPhrase) {
      this.pageIndex = 0;
      this.searchPhrase = searchPhrase;
      this.sendRequest(__spreadValues({
        action: StalkerContentTypes[this.selectedContentType].getContentAction,
        type: this.selectedContentType,
        search: searchPhrase
      }, this.currentCategoryId ? {
        category: this.currentCategoryId,
        genre: this.currentCategoryId
      } : {}));
    }
  }
  handlePageChange(event) {
    this.pageIndex = Number(event.pageIndex);
    this.sendRequest({
      action: StalkerPortalActions.GetOrderedList,
      type: this.selectedContentType,
      category: this.currentCategoryId,
      genre: this.currentCategoryId,
      p: this.pageIndex + 1
    });
  }
  favoriteViewClicked() {
    this.currentLayout = "favorites";
    this.setInitialBreadcrumb(StalkerPortalActions.Favorites, this.translate.instant("PORTALS.MY_FAVORITES"));
  }
  ngOnDestroy() {
    this.portalStore.setSearchPhrase("");
    if (this.dataService.isElectron) {
      this.commandsList.forEach((command) => this.dataService.removeAllListeners(command.id));
    } else {
      this.listeners.forEach((listener) => {
        window.removeEventListener("message", listener);
      });
    }
  }
  static {
    this.\u0275fac = function StalkerMainContainerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StalkerMainContainerComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(PlaylistsService), \u0275\u0275directiveInject(PortalStore), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(StorageMap), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(TranslateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StalkerMainContainerComponent, selectors: [["app-stalker-main-container"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 8, consts: [[3, "searchTextChanged", "contentTypeChanged", "breadcrumbClicked", "favoritesClicked", "breadcrumbs", "contentType", "clientSideSearch", "searchVisible", "contentTypeNavigationItems", "showCategories"], [1, "loading-wrapper"], [1, "loading-container", "category-content-view"], [1, "skeleton-item"], ["count", "1", 3, "theme"], [1, "loading-container", "category-view"], [3, "categoryClicked", "items"], [3, "itemClicked", "items"], ["aria-label", "Select page", 3, "page", "length", "pageIndex", "pageSize"], [3, "playClicked", "addToFavoritesClicked", "removeFromFavoritesClicked", "item"], [3, "playEpisode", "seasons"], [3, "title", "description"]], template: function StalkerMainContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "app-navigation-bar", 0);
        \u0275\u0275listener("searchTextChanged", function StalkerMainContainerComponent_Template_app_navigation_bar_searchTextChanged_0_listener($event) {
          return ctx.setSearchPhrase($event);
        })("contentTypeChanged", function StalkerMainContainerComponent_Template_app_navigation_bar_contentTypeChanged_0_listener($event) {
          return ctx.getCategories($event);
        })("breadcrumbClicked", function StalkerMainContainerComponent_Template_app_navigation_bar_breadcrumbClicked_0_listener($event) {
          return ctx.breadcrumbClicked($event);
        })("favoritesClicked", function StalkerMainContainerComponent_Template_app_navigation_bar_favoritesClicked_0_listener() {
          return ctx.favoriteViewClicked();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(1, "\n\n");
        \u0275\u0275template(2, StalkerMainContainerComponent_Conditional_2_Template, 6, 1)(3, StalkerMainContainerComponent_Conditional_3_Template, 8, 1);
      }
      if (rf & 2) {
        \u0275\u0275property("breadcrumbs", ctx.breadcrumbs)("contentType", ctx.selectedContentType)("clientSideSearch", ctx.currentLayout === "category_content" ? false : true)("searchVisible", (ctx.currentLayout === "category" || ctx.currentLayout === "category_content") && (ctx.items == null ? null : ctx.items.length) > 0)("contentTypeNavigationItems", ctx.navigationContentTypes)("contentType", ctx.selectedContentType)("showCategories", true);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isLoading ? 2 : 3);
      }
    }, dependencies: [
      AsyncPipe,
      CategoryContentViewComponent,
      CategoryViewComponent,
      MatPaginatorModule,
      MatPaginator,
      NavigationBarComponent,
      NgxSkeletonLoaderModule,
      NgxSkeletonLoaderComponent,
      PlaylistErrorViewComponent,
      StalkerSeriesViewComponent,
      TranslateModule,
      TranslatePipe,
      VodDetailsComponent
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  height: 100%;\n  justify-content: flex-start;\n}\n.loading-wrapper[_ngcontent-%COMP%] {\n  display: block;\n  padding: 20px;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.category-content-view[_ngcontent-%COMP%] {\n  gap: 30px;\n}\n.category-view[_ngcontent-%COMP%] {\n  gap: 10px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StalkerMainContainerComponent, { className: "StalkerMainContainerComponent" });
})();
export {
  StalkerMainContainerComponent
};
