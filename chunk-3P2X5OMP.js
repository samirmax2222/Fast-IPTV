import {
  WhatsNewService
} from "./chunk-22PGBF2V.js";
import {
  RecentPlaylistsComponent
} from "./chunk-77743P3T.js";
import {
  MatProgressBar,
  MatProgressBarModule,
  MatToolbar,
  MatToolbarModule,
  NgxWhatsNewComponent,
  NgxWhatsNewModule
} from "./chunk-BDFOKL7O.js";
import {
  ActivatedRoute,
  DataService,
  ERROR,
  MAT_DIALOG_DATA,
  MatCardModule,
  MatCheckbox,
  MatCheckboxModule,
  MatDialog,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatInput,
  MatInputModule,
  MatLabel,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatSnackBar,
  PLAYLIST_PARSE_BY_URL,
  PLAYLIST_PARSE_RESPONSE,
  Router,
  Store,
  addPlaylist,
  getFilenameFromUrl,
  parsePlaylist,
  selectActiveTypeFilters,
  setSelectedFilters,
  v4_default
} from "./chunk-T3L6IA2A.js";
import {
  AsyncPipe,
  DefaultValueAccessor,
  EventEmitter,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  MatButton,
  MatButtonModule,
  MatDivider,
  MatDividerModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  NgModel,
  NgZone,
  ReactiveFormsModule,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  Validators,
  __async,
  __spreadProps,
  __spreadValues,
  effect,
  inject,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UIAHAIJK.js";

// src/app/shared/components/about-dialog/about-dialog.component.ts
function AboutDialogComponent_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "\n                ");
    \u0275\u0275elementStart(2, "a", 4);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275element(5, "img", 5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\xA0\n                ");
    \u0275\u0275elementStart(8, "a", 6);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275text(10, "\n                    ");
    \u0275\u0275element(11, "img", 7);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275text(13, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n                ");
    \u0275\u0275elementStart(15, "a", 8);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementStart(18, "mat-icon");
    \u0275\u0275text(19, "local_cafe");
    \u0275\u0275elementEnd()();
    \u0275\u0275text(20, "\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(3, 7, "ABOUT.GITHUB_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(4, 9, "ABOUT.GITHUB_TOOLTIP"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(6, 11, "ABOUT.GITHUB_TOOLTIP"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(9, 13, "ABOUT.TWITTER_TOOLTIP"));
    \u0275\u0275advance(3);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(12, 15, "ABOUT.TWITTER_TOOLTIP"));
    \u0275\u0275advance(4);
    \u0275\u0275property("title", \u0275\u0275pipeBind1(16, 17, "ABOUT.BUY_ME_A_COFFEE_TOOLTIP"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(17, 19, "ABOUT.BUY_ME_A_COFFEE_TOOLTIP"));
  }
}
var AboutDialogComponent = class _AboutDialogComponent {
  constructor(appVersion) {
    this.appVersion = appVersion;
  }
  static {
    this.\u0275fac = function AboutDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AboutDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutDialogComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 11, consts: [["mat-dialog-content", ""], ["src", "./assets/icons/icon-tv-256.png", "width", "128"], ["mat-dialog-title", ""], [4, "ngIf"], ["href", "https://github.com/4gray/iptvnator", "target", "_blank", 3, "title"], ["src", "./assets/icons/github-light.png", 3, "title"], ["href", "http://twitter.com/share?text=IPTVnator \u2014 free cross-platform IPTV player. Available as PWA and as native application.&url=https://github.com/4gray/iptvnator&hashtags=iptv,m3u,video-player", 3, "title"], ["height", "32", "src", "./assets/icons/twitter-light.png", 3, "title"], ["href", "https://www.buymeacoffee.com/4gray", "target", "_blank", 3, "title"]], template: function AboutDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275text(0, "\n        ");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275text(2, "\n            ");
        \u0275\u0275element(3, "img", 1)(4, "br");
        \u0275\u0275text(5, "\n            ");
        \u0275\u0275elementStart(6, "h2", 2);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, "\n            ");
        \u0275\u0275elementStart(10, "p");
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, "\n            ");
        \u0275\u0275elementStart(14, "p");
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, "\n            ");
        \u0275\u0275template(18, AboutDialogComponent_p_18_Template, 21, 21, "p", 3);
        \u0275\u0275text(19, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, "\n    ");
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "ABOUT.TITLE"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 7, "ABOUT.DESCRIPTION"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(16, 9, "ABOUT.VERSION"), ": ", ctx.appVersion, "");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", false);
      }
    }, dependencies: [MatIconModule, MatIcon, TranslateModule, TranslatePipe], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\na[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutDialogComponent, { className: "AboutDialogComponent" });
})();

// src/app/home/file-upload/drag-drop-file-upload.directive.ts
var DragDropFileUploadDirective = class _DragDropFileUploadDirective {
  constructor() {
    this.defaultColor = "rgb(255 255 255 / 15%)";
    this.fileDropped = new EventEmitter();
    this.background = this.defaultColor;
  }
  dragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    this.background = "rgb(255 255 255 / 25%)";
  }
  dragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    this.background = this.defaultColor;
  }
  drop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.background = this.defaultColor;
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
  static {
    this.\u0275fac = function DragDropFileUploadDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DragDropFileUploadDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _DragDropFileUploadDirective, selectors: [["", "appDragDropFileUpload", ""]], hostVars: 2, hostBindings: function DragDropFileUploadDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("dragover", function DragDropFileUploadDirective_dragover_HostBindingHandler($event) {
          return ctx.dragOver($event);
        })("dragleave", function DragDropFileUploadDirective_dragleave_HostBindingHandler($event) {
          return ctx.dragLeave($event);
        })("drop", function DragDropFileUploadDirective_drop_HostBindingHandler($event) {
          return ctx.drop($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275styleProp("background-color", ctx.background);
      }
    }, outputs: { fileDropped: "fileDropped" }, standalone: true });
  }
};

// src/app/home/file-upload/file-upload.component.ts
var FileUploadComponent = class _FileUploadComponent {
  constructor() {
    this.fileSelected = new EventEmitter();
    this.fileRejected = new EventEmitter();
    this.addClicked = new EventEmitter();
    this.allowedContentTypes = [
      "application/mpegurl",
      "application/x-mpegurl",
      "application/octet-stream",
      "application/vnd.apple.mpegurl",
      "application/vnd.apple.mpegurl.audio",
      "audio/x-mpegurl",
      "audio/mpegurl"
    ];
  }
  upload(fileList) {
    if (!this.allowedContentTypes.includes(fileList[0].type)) {
      this.fileRejected.emit(fileList[0].name);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = (uploadEvent) => this.fileSelected.emit({
      uploadEvent,
      file: fileList[0]
    });
    fileReader.readAsText(fileList[0]);
    this.addClicked.emit();
  }
  static {
    this.\u0275fac = function FileUploadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FileUploadComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileUploadComponent, selectors: [["app-file-upload"]], outputs: { fileSelected: "fileSelected", fileRejected: "fileRejected", addClicked: "addClicked" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 8, consts: [["fileField", ""], ["appDragDropFileUpload", "", 1, "file-upload", 3, "click", "fileDropped"], [1, "upload-icon"], [1, "label"], ["type", "file", "name", "playlist", "accept", ".m3u,.m3u8", "hidden", "", "multiple", "", 3, "change"]], template: function FileUploadComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275listener("click", function FileUploadComponent_Template_div_click_0_listener() {
          \u0275\u0275restoreView(_r1);
          const fileField_r2 = \u0275\u0275reference(14);
          return \u0275\u0275resetView(fileField_r2.click());
        })("fileDropped", function FileUploadComponent_Template_div_fileDropped_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.upload($event));
        });
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "mat-icon", 2);
        \u0275\u0275text(3, "upload_file");
        \u0275\u0275elementEnd();
        \u0275\u0275text(4, "\n    ");
        \u0275\u0275elementStart(5, "span", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275element(9, "br");
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, "\n    ");
        \u0275\u0275elementStart(13, "input", 4, 0);
        \u0275\u0275listener("change", function FileUploadComponent_Template_input_change_13_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.upload($event.target.files));
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 2, "HOME.FILE_UPLOAD.DRAG_DROP") + " " + \u0275\u0275pipeBind1(8, 4, "HOME.FILE_UPLOAD.OR"), "\n        ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(11, 6, "HOME.FILE_UPLOAD.CHOOSE_PLAYLIST"), "");
      }
    }, dependencies: [DragDropFileUploadDirective, MatIconModule, MatIcon, TranslateModule, TranslatePipe], styles: ["\n\n.file-upload[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: 1px dashed #999;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 20px;\n  padding: 10px;\n  gap: 20px;\n}\n.file-upload[_ngcontent-%COMP%]   .upload-icon[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 60px;\n  width: 60px;\n  height: 60px;\n}\n.file-upload[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  color: #999;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileUploadComponent, { className: "FileUploadComponent" });
})();

// src/app/home/stalker-portal-import/stalker-portal-import.component.ts
var StalkerPortalImportComponent = class _StalkerPortalImportComponent {
  constructor() {
    this.addClicked = new EventEmitter();
    this.URL_REGEX = /^(http|https|file):\/\/[^ "]+$/;
    this.form = new FormGroup({
      _id: new FormControl(v4_default()),
      title: new FormControl("", [Validators.required]),
      macAddress: new FormControl("", [Validators.required]),
      password: new FormControl(""),
      username: new FormControl(""),
      portalUrl: new FormControl("", [
        Validators.required,
        Validators.pattern(this.URL_REGEX)
      ]),
      importDate: new FormControl((/* @__PURE__ */ new Date()).toISOString())
    });
    this.dataService = inject(DataService);
    this.store = inject(Store);
  }
  addPlaylist() {
    this.form.value.portalUrl = this.transformPortalUrl(this.form.value.portalUrl);
    this.store.dispatch(addPlaylist({ playlist: this.form.value }));
    this.addClicked.emit();
  }
  transformPortalUrl(url) {
    if (url.endsWith("/c")) {
      return url.replace("/c", "/portal.php");
    }
    if (url.endsWith("/stalker_portal")) {
      return url.replace("/stalker_portal/c", "/stalker_portal/server/load.php");
    }
    return url;
  }
  static {
    this.\u0275fac = function StalkerPortalImportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StalkerPortalImportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StalkerPortalImportComponent, selectors: [["app-stalker-portal-import"]], outputs: { addClicked: "addClicked" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 43, vars: 20, consts: [[3, "formGroup"], [1, "full-width"], ["for", "title"], ["matInput", "", "type", "text", "id", "title", "formControlName", "title"], ["subscriptSizing", "dynamic", 1, "full-width"], ["for", "portalUrl"], ["matInput", "", "type", "text", "id", "portalUrl", "formControlName", "portalUrl"], ["for", "macAddress"], ["matInput", "", "type", "text", "id", "macAddress", "formControlName", "macAddress"], ["mat-button", "", "type", "submit", 3, "click", "disabled"]], template: function StalkerPortalImportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 0);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "mat-form-field", 1);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "mat-label", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n        ");
        \u0275\u0275element(8, "input", 3);
        \u0275\u0275text(9, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n    ");
        \u0275\u0275elementStart(11, "mat-form-field", 4);
        \u0275\u0275text(12, "\n        ");
        \u0275\u0275elementStart(13, "mat-label", 5);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "\n        ");
        \u0275\u0275element(17, "input", 6);
        \u0275\u0275text(18, "\n        ");
        \u0275\u0275elementStart(19, "mat-hint");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, "\n        ");
        \u0275\u0275elementStart(23, "mat-error");
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, "\n    ");
        \u0275\u0275elementStart(28, "mat-form-field", 1);
        \u0275\u0275text(29, "\n        ");
        \u0275\u0275elementStart(30, "mat-label", 7);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, "\n        ");
        \u0275\u0275element(34, "input", 8);
        \u0275\u0275text(35, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, "\n    ");
        \u0275\u0275text(37, "\n    ");
        \u0275\u0275elementStart(38, "button", 9);
        \u0275\u0275listener("click", function StalkerPortalImportComponent_Template_button_click_38_listener() {
          return ctx.addPlaylist();
        });
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(41, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(42, "\n");
      }
      if (rf & 2) {
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 8, "HOME.STALKER_PORTAL.TITLE"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 10, "HOME.STALKER_PORTAL.SERVER_URL"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 12, "HOME.STALKER_PORTAL.URL_VALIDATION_ERROR"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 14, "SETTINGS.EPG_URL_ERROR"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 16, "HOME.STALKER_PORTAL.MAC_ADDRESS"));
        \u0275\u0275advance(7);
        \u0275\u0275property("disabled", !ctx.form.valid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(40, 18, "HOME.STALKER_PORTAL.ADD"), "\n    ");
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, MatFormFieldModule, MatFormField, MatLabel, MatHint, MatError, MatInputModule, MatInput, MatButtonModule, MatButton, TranslateModule, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  margin: 10px;\n  justify-content: center;\n}\nform[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StalkerPortalImportComponent, { className: "StalkerPortalImportComponent" });
})();

// src/app/home/text-import/text-import.component.ts
var TextImportComponent = class _TextImportComponent {
  constructor() {
    this.textAdded = new EventEmitter();
    this.textForm = new FormGroup({
      text: new FormControl("", Validators.required)
    });
  }
  static {
    this.\u0275fac = function TextImportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TextImportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TextImportComponent, selectors: [["app-text-import"]], outputs: { textAdded: "textAdded" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 8, consts: [[3, "ngSubmit", "formGroup"], ["appearance", "fill", 1, "full-width"], ["formControlName", "text", "matInput", "", "placeholder", "#EXTM3U url-tvg=..."], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"]], template: function TextImportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 0);
        \u0275\u0275listener("ngSubmit", function TextImportComponent_Template_form_ngSubmit_0_listener() {
          return ctx.textAdded.emit(ctx.textForm.value.text);
        });
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "mat-form-field", 1);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "mat-label");
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n        ");
        \u0275\u0275element(8, "textarea", 2);
        \u0275\u0275text(9, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n    ");
        \u0275\u0275elementStart(11, "button", 3);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(14, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, "\n");
      }
      if (rf & 2) {
        \u0275\u0275property("formGroup", ctx.textForm);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "HOME.TEXT_IMPORT.LABEL"));
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", !ctx.textForm.valid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(13, 6, "HOME.TEXT_IMPORT.BUTTON_LABEL"), "\n    ");
      }
    }, dependencies: [MatButtonModule, MatButton, MatInputModule, MatInput, MatFormField, MatLabel, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, TranslateModule, TranslatePipe], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  margin: 0 15px;\n}\ntextarea[_ngcontent-%COMP%] {\n  height: 300px !important;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TextImportComponent, { className: "TextImportComponent" });
})();

// src/app/home/url-upload/url-upload.component.ts
function UrlUploadComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.addUrlNote);
  }
}
function UrlUploadComponent_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(2, 1, "HOME.URL_UPLOAD.CORS_NOTE"), "\n    ");
  }
}
var UrlUploadComponent = class _UrlUploadComponent {
  constructor(fb, dataService) {
    this.fb = fb;
    this.dataService = dataService;
    this.urlAdded = new EventEmitter();
    this.isElectron = this.dataService.isElectron;
    this.addUrlNote = "";
  }
  ngOnInit() {
    return __async(this, null, function* () {
      const urlRegex = "(https?://.*?)";
      this.form = this.fb.group({
        playlistUrl: [
          "",
          [Validators.required, Validators.pattern(urlRegex)]
        ]
      });
      if (this.addUrlNote.length === 0) {
        const remoteConfig = yield this.dataService.getRemoteConfig();
        this.addUrlNote = remoteConfig.addUrlNote;
      }
    });
  }
  static {
    this.\u0275fac = function UrlUploadComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UrlUploadComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(DataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UrlUploadComponent, selectors: [["app-url-upload"]], outputs: { urlAdded: "urlAdded" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 10, consts: [[3, "ngSubmit", "formGroup"], [1, "full-width"], ["type", "url", "matInput", "", "formControlName", "playlistUrl", 3, "placeholder"], ["style", "user-select: text;", 4, "ngIf"], [4, "ngIf"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "add-button", 3, "disabled"], [2, "user-select", "text"]], template: function UrlUploadComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 0);
        \u0275\u0275listener("ngSubmit", function UrlUploadComponent_Template_form_ngSubmit_0_listener() {
          return ctx.urlAdded.emit(ctx.form.value.playlistUrl);
        });
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "mat-form-field", 1);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275element(4, "input", 2);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275text(6, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n    ");
        \u0275\u0275template(8, UrlUploadComponent_p_8_Template, 2, 1, "p", 3);
        \u0275\u0275text(9, "\n    ");
        \u0275\u0275template(10, UrlUploadComponent_p_10_Template, 3, 3, "p", 4);
        \u0275\u0275text(11, "\n    ");
        \u0275\u0275elementStart(12, "button", 5);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "\n");
      }
      if (rf & 2) {
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(4);
        \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 6, "HOME.URL_UPLOAD.PLAYLIST_URL"));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.addUrlNote);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.isElectron);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.form.valid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(14, 8, "HOME.URL_UPLOAD.ADD_PLAYLIST"), "\n    ");
      }
    }, dependencies: [
      MatButtonModule,
      MatButton,
      MatCardModule,
      MatInputModule,
      MatInput,
      MatFormField,
      NgIf,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      TranslateModule,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UrlUploadComponent, { className: "UrlUploadComponent" });
})();

// src/app/home/xtream-code-import/xtream-code-import.component.ts
var XtreamCodeImportComponent = class _XtreamCodeImportComponent {
  constructor() {
    this.addClicked = new EventEmitter();
    this.URL_REGEX = /^(http|https|file):\/\/[^ "]+$/;
    this.form = new FormGroup({
      _id: new FormControl(v4_default()),
      title: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required]),
      serverUrl: new FormControl("", [
        Validators.required,
        Validators.pattern(this.URL_REGEX)
      ]),
      importDate: new FormControl((/* @__PURE__ */ new Date()).toISOString())
    });
    this.dataService = inject(DataService);
    this.store = inject(Store);
  }
  addPlaylist() {
    const serverUrlAsString = this.form.value.serverUrl;
    const url = new URL(serverUrlAsString);
    const serverUrl = `${url.protocol}//${url.hostname}${url.port ? ":" + url.port : ""}`;
    this.store.dispatch(addPlaylist({
      playlist: __spreadProps(__spreadValues({}, this.form.value), {
        serverUrl
      })
    }));
    this.addClicked.emit();
  }
  extractParams(urlAsString) {
    if (this.form.get("username").value !== "" || this.form.get("password").value !== "")
      return;
    try {
      const url = new URL(urlAsString);
      const username = url.searchParams.get("username") || "";
      const password = url.searchParams.get("password") || "";
      this.form.get("username")?.setValue(username);
      this.form.get("password")?.setValue(password);
    } catch (error) {
      console.error("Invalid URL", error);
    }
  }
  static {
    this.\u0275fac = function XtreamCodeImportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _XtreamCodeImportComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _XtreamCodeImportComponent, selectors: [["app-xtream-code-import"]], outputs: { addClicked: "addClicked" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 51, vars: 23, consts: [[3, "formGroup"], [1, "full-width"], ["for", "title"], ["matInput", "", "type", "text", "id", "title", "formControlName", "title"], ["subscriptSizing", "dynamic", 1, "full-width"], ["for", "serverUrl"], ["matInput", "", "type", "text", "id", "serverUrl", "formControlName", "serverUrl", 3, "input"], ["for", "username"], ["matInput", "", "type", "text", "id", "username", "formControlName", "username"], ["for", "password"], ["matInput", "", "type", "text", "id", "password", "formControlName", "password"], ["mat-button", "", "type", "submit", 3, "click", "disabled"]], template: function XtreamCodeImportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 0);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "mat-form-field", 1);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "mat-label", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n        ");
        \u0275\u0275element(8, "input", 3);
        \u0275\u0275text(9, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n    ");
        \u0275\u0275elementStart(11, "mat-form-field", 4);
        \u0275\u0275text(12, "\n        ");
        \u0275\u0275elementStart(13, "mat-label", 5);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "\n        ");
        \u0275\u0275elementStart(17, "input", 6);
        \u0275\u0275listener("input", function XtreamCodeImportComponent_Template_input_input_17_listener() {
          return ctx.extractParams(ctx.form.value.serverUrl);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275text(18, "\n        ");
        \u0275\u0275elementStart(19, "mat-hint");
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, "\n        ");
        \u0275\u0275elementStart(23, "mat-error");
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, "\n    ");
        \u0275\u0275elementStart(28, "mat-form-field", 1);
        \u0275\u0275text(29, "\n        ");
        \u0275\u0275elementStart(30, "mat-label", 7);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, "\n        ");
        \u0275\u0275element(34, "input", 8);
        \u0275\u0275text(35, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, "\n    ");
        \u0275\u0275elementStart(37, "mat-form-field", 1);
        \u0275\u0275text(38, "\n        ");
        \u0275\u0275elementStart(39, "mat-label", 9);
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(42, "\n        ");
        \u0275\u0275element(43, "input", 10);
        \u0275\u0275text(44, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(45, "\n    ");
        \u0275\u0275elementStart(46, "button", 11);
        \u0275\u0275listener("click", function XtreamCodeImportComponent_Template_button_click_46_listener() {
          return ctx.addPlaylist();
        });
        \u0275\u0275text(47);
        \u0275\u0275pipe(48, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(49, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(50, "\n");
      }
      if (rf & 2) {
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "HOME.XTREAM_PLAYLIST.TITLE"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 11, "HOME.XTREAM_PLAYLIST.SERVER_URL"));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 13, "HOME.XTREAM_PLAYLIST.URL_VALIDATION_ERROR"));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 15, "SETTINGS.EPG_URL_ERROR"));
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 17, "HOME.XTREAM_PLAYLIST.USERNAME"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 19, "HOME.XTREAM_PLAYLIST.PASSWORD"));
        \u0275\u0275advance(6);
        \u0275\u0275property("disabled", !ctx.form.valid);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(48, 21, "HOME.XTREAM_PLAYLIST.ADD"), "\n    ");
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, MatFormFieldModule, MatFormField, MatLabel, MatHint, MatError, MatInputModule, MatInput, MatButtonModule, MatButton, TranslateModule, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  margin: 10px;\n  justify-content: center;\n}\nform[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(XtreamCodeImportComponent, { className: "XtreamCodeImportComponent" });
})();

// src/app/shared/components/add-playlist/add-playlist-dialog.component.ts
function AddPlaylistDialogComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "app-file-upload", 2);
    \u0275\u0275listener("fileRejected", function AddPlaylistDialogComponent_Conditional_6_Template_app_file_upload_fileRejected_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rejectFile($event));
    })("fileSelected", function AddPlaylistDialogComponent_Conditional_6_Template_app_file_upload_fileSelected_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.handlePlaylist($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n    ");
  }
}
function AddPlaylistDialogComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "app-url-upload", 3);
    \u0275\u0275listener("urlAdded", function AddPlaylistDialogComponent_Conditional_7_Template_app_url_upload_urlAdded_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendPlaylistsUrl($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n    ");
  }
}
function AddPlaylistDialogComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "app-text-import", 4);
    \u0275\u0275listener("textAdded", function AddPlaylistDialogComponent_Conditional_8_Template_app_text_import_textAdded_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.uploadAsText($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n    ");
  }
}
function AddPlaylistDialogComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "app-stalker-portal-import", 5);
    \u0275\u0275listener("addClicked", function AddPlaylistDialogComponent_Conditional_9_Template_app_stalker_portal_import_addClicked_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n    ");
  }
}
function AddPlaylistDialogComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "app-xtream-code-import", 5);
    \u0275\u0275listener("addClicked", function AddPlaylistDialogComponent_Conditional_10_Template_app_xtream_code_import_addClicked_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, "\n    ");
  }
}
var AddPlaylistDialogComponent = class _AddPlaylistDialogComponent {
  constructor(data, dataService, dialogRef, store, snackBar, translateService) {
    this.dataService = dataService;
    this.dialogRef = dialogRef;
    this.store = store;
    this.snackBar = snackBar;
    this.translateService = translateService;
    this.playlistType = data.type;
  }
  /**
   * Parse and store uploaded playlist
   * @param payload
   */
  handlePlaylist(payload) {
    const playlist = payload.uploadEvent.target.result;
    this.store.dispatch(parsePlaylist({
      uploadType: "FILE",
      playlist,
      title: payload.file.name,
      path: payload.file.path
    }));
    this.closeDialog();
  }
  rejectFile(filename) {
    this.snackBar.open(this.translateService.instant("HOME.FILE_UPLOAD.REJECTED", {
      filename
    }));
  }
  /**
   * Sends url of the playlist to the renderer process
   * @param playlistUrl url of the added playlist
   */
  sendPlaylistsUrl(playlistUrl) {
    this.dataService.sendIpcEvent(PLAYLIST_PARSE_BY_URL, {
      title: getFilenameFromUrl(playlistUrl),
      url: playlistUrl
    });
    this.closeDialog();
  }
  /**
   * Sends IPC event to the renderer process to parse playlist
   * @param text playlist as string
   */
  uploadAsText(playlist) {
    this.store.dispatch(parsePlaylist({
      uploadType: "TEXT",
      playlist,
      title: this.translateService.instant("HOME.IMPORTED_AS_TEXT")
    }));
    this.closeDialog();
  }
  closeDialog() {
    this.dialogRef.close();
  }
  static {
    this.\u0275fac = function AddPlaylistDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AddPlaylistDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(TranslateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddPlaylistDialogComponent, selectors: [["app-add-playlist"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 5, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [3, "fileRejected", "fileSelected"], [3, "urlAdded"], [3, "textAdded"], [3, "addClicked"]], template: function AddPlaylistDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(3, "\n");
        \u0275\u0275elementStart(4, "mat-dialog-content", 1);
        \u0275\u0275text(5, "\n    ");
        \u0275\u0275template(6, AddPlaylistDialogComponent_Conditional_6_Template, 3, 0)(7, AddPlaylistDialogComponent_Conditional_7_Template, 3, 0)(8, AddPlaylistDialogComponent_Conditional_8_Template, 3, 0)(9, AddPlaylistDialogComponent_Conditional_9_Template, 3, 0)(10, AddPlaylistDialogComponent_Conditional_10_Template, 3, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 3, "HOME.PLAYLISTS.ADD_PLAYLIST"), ": ", ctx.playlistType, "");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.playlistType === "file" ? 6 : ctx.playlistType === "url" ? 7 : ctx.playlistType === "text" ? 8 : ctx.playlistType === "stalker" ? 9 : ctx.playlistType === "xtream" ? 10 : -1);
      }
    }, dependencies: [
      MatButtonModule,
      MatDialogModule,
      MatDialogTitle,
      MatDialogContent,
      TranslateModule,
      TranslatePipe,
      FileUploadComponent,
      XtreamCodeImportComponent,
      StalkerPortalImportComponent,
      TextImportComponent,
      UrlUploadComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddPlaylistDialogComponent, { className: "AddPlaylistDialogComponent" });
})();

// src/app/shared/components/header/header.component.ts
function HeaderComponent_div_27_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, "\n        ");
    \u0275\u0275elementStart(2, "a", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n    ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r1.promotion ? ctx_r1.promotion.url : "", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.promotion ? ctx_r1.promotion.text : "");
  }
}
function HeaderComponent_div_27_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function HeaderComponent_div_27_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openSettings());
    });
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "MENU.SETTINGS"));
  }
}
function HeaderComponent_div_27_For_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                    ");
    \u0275\u0275elementStart(1, "p");
    \u0275\u0275text(2, "\n                        ");
    \u0275\u0275elementStart(3, "mat-checkbox", 25);
    \u0275\u0275listener("click", function HeaderComponent_div_27_For_31_Template_mat_checkbox_click_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    })("change", function HeaderComponent_div_27_For_31_Template_mat_checkbox_change_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPlaylistFilterChange());
    });
    \u0275\u0275twoWayListener("ngModelChange", function HeaderComponent_div_27_For_31_Template_mat_checkbox_ngModelChange_3_listener($event) {
      const type_r5 = \u0275\u0275restoreView(_r4).$implicit;
      \u0275\u0275twoWayBindingSet(type_r5.checked, $event) || (type_r5.checked = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                ");
  }
  if (rf & 2) {
    const type_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("checked", true);
    \u0275\u0275twoWayProperty("ngModel", type_r5.checked);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r5.title);
  }
}
function HeaderComponent_div_27_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function HeaderComponent_div_27_button_37_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openUrl(ctx_r1.searchUrl ? ctx_r1.searchUrl : "https://www.google.com/search?q=" + ctx_r1.searchKeyword));
    });
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 2, "HOME.TABS.SEARCH_FROM_INTERNET"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "HOME.TABS.SEARCH_FROM_INTERNET"));
  }
}
function HeaderComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, "\n    ");
    \u0275\u0275template(2, HeaderComponent_div_27_div_2_Template, 5, 2, "div", 15);
    \u0275\u0275text(3, "\n    ");
    \u0275\u0275elementStart(4, "button", 16);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275text(6, "\n        ");
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n    ");
    \u0275\u0275text(11, "\n        ");
    \u0275\u0275elementStart(12, "button", 17);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275text(14, "\n            ");
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "filter_list");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, "\n        ");
    \u0275\u0275template(19, HeaderComponent_div_27_button_19_Template, 6, 3, "button", 18);
    \u0275\u0275text(20, "\n\n        ");
    \u0275\u0275elementStart(21, "mat-menu", null, 1);
    \u0275\u0275text(23, "\n            ");
    \u0275\u0275elementStart(24, "section", 19);
    \u0275\u0275listener("click", function HeaderComponent_div_27_Template_section_click_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(25, "\n                ");
    \u0275\u0275elementStart(26, "h4");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, "\n                ");
    \u0275\u0275repeaterCreate(30, HeaderComponent_div_27_For_31_Template, 7, 3, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33, "\n\n    ");
    \u0275\u0275elementStart(34, "mat-menu", null, 2);
    \u0275\u0275text(36, "\n        ");
    \u0275\u0275template(37, HeaderComponent_div_27_button_37_Template, 10, 6, "button", 20);
    \u0275\u0275text(38, "\n        ");
    \u0275\u0275elementStart(39, "button", 21);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275listener("click", function HeaderComponent_div_27_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.opedAddPlaylistDialog("file"));
    });
    \u0275\u0275text(41, "\n            ");
    \u0275\u0275elementStart(42, "mat-icon");
    \u0275\u0275text(43, "attach_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, "\n            ");
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, "\n        ");
    \u0275\u0275elementStart(50, "button", 21);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275listener("click", function HeaderComponent_div_27_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.opedAddPlaylistDialog("url"));
    });
    \u0275\u0275text(52, "\n            ");
    \u0275\u0275elementStart(53, "mat-icon");
    \u0275\u0275text(54, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, "\n            ");
    \u0275\u0275elementStart(56, "span");
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(59, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, "\n\n            ");
    \u0275\u0275elementStart(61, "button", 21);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275listener("click", function HeaderComponent_div_27_Template_button_click_61_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.opedAddPlaylistDialog("text"));
    });
    \u0275\u0275text(63, "\n                ");
    \u0275\u0275elementStart(64, "mat-icon");
    \u0275\u0275text(65, "text_format");
    \u0275\u0275elementEnd();
    \u0275\u0275text(66, "\n                ");
    \u0275\u0275elementStart(67, "span");
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(70, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(71, "\n            ");
    \u0275\u0275element(72, "mat-divider");
    \u0275\u0275text(73, "\n            ");
    \u0275\u0275elementStart(74, "button", 21);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275listener("click", function HeaderComponent_div_27_Template_button_click_74_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.opedAddPlaylistDialog("xtream"));
    });
    \u0275\u0275text(76, "\n                ");
    \u0275\u0275elementStart(77, "mat-icon");
    \u0275\u0275text(78, "video_library");
    \u0275\u0275elementEnd();
    \u0275\u0275text(79, "\n                ");
    \u0275\u0275elementStart(80, "span");
    \u0275\u0275text(81);
    \u0275\u0275pipe(82, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(83, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(84, "\n            ");
    \u0275\u0275elementStart(85, "button", 21);
    \u0275\u0275pipe(86, "translate");
    \u0275\u0275listener("click", function HeaderComponent_div_27_Template_button_click_85_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.opedAddPlaylistDialog("stalker"));
    });
    \u0275\u0275text(87, "\n                ");
    \u0275\u0275elementStart(88, "mat-icon");
    \u0275\u0275text(89, "dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275text(90, "\n                ");
    \u0275\u0275elementStart(91, "span");
    \u0275\u0275text(92);
    \u0275\u0275pipe(93, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(94, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(95, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(96, "\n    ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const filterPlaylistMenu_r7 = \u0275\u0275reference(22);
    const addPlaylistMenu_r8 = \u0275\u0275reference(35);
    const ctx_r1 = \u0275\u0275nextContext();
    const pwaMenu_r9 = \u0275\u0275reference(31);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.promotion);
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", addPlaylistMenu_r8)("matTooltip", \u0275\u0275pipeBind1(5, 19, "HOME.URL_UPLOAD.ADD_PLAYLIST"));
    \u0275\u0275advance(8);
    \u0275\u0275property("matMenuTriggerFor", filterPlaylistMenu_r7)("matTooltip", \u0275\u0275pipeBind1(13, 21, "HOME.FILTER_BY_TYPE"));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isElectron)("ngIfElse", pwaMenu_r9);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(28, 23, "HOME.FILTER_BY_TYPE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.playlistTypes);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r1.isShowInternetSearch);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(40, 25, "HOME.TABS.FILE_UPLOAD"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 27, "HOME.TABS.FILE_UPLOAD"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(51, 29, "HOME.TABS.URL_UPLOAD"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 31, "HOME.TABS.URL_UPLOAD"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(62, 33, "HOME.TABS.TEXT_IMPORT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 35, "HOME.TABS.TEXT_IMPORT"));
    \u0275\u0275advance(6);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(75, 37, "HOME.TABS.XTREME_IMPORT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(82, 39, "HOME.TABS.XTREME_IMPORT"));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(86, 41, "HOME.TABS.STALKER_PORTAL_IMPORT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(93, 43, "HOME.TABS.STALKER_PORTAL_IMPORT"));
  }
}
function HeaderComponent_ng_template_30_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "button", 21);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("click", function HeaderComponent_ng_template_30_ng_container_11_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openSettings());
    });
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                ");
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "\n            ");
    \u0275\u0275element(13, "mat-divider");
    \u0275\u0275text(14, "\n        ");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 2, "MENU.SETTINGS_ARIA"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 4, "MENU.SETTINGS"));
  }
}
function HeaderComponent_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "button", 26);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275text(3, "\n        ");
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "menu");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n    ");
    \u0275\u0275elementStart(8, "mat-menu", null, 3);
    \u0275\u0275text(10, "\n        ");
    \u0275\u0275template(11, HeaderComponent_ng_template_30_ng_container_11_Template, 15, 6, "ng-container", 27);
    \u0275\u0275text(12, "\n        ");
    \u0275\u0275text(13, "\n        ");
    \u0275\u0275elementStart(14, "button", 21);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275listener("click", function HeaderComponent_ng_template_30_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openUrl("https://chromewebstore.google.com/detail/dbdgibnjfnomhihldbjcdbgddamjmboi/reviews"));
    });
    \u0275\u0275text(16, "\n            ");
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "thumb_up");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "\n            ");
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n        ");
    \u0275\u0275element(25, "mat-divider");
    \u0275\u0275text(26, "\n        ");
    \u0275\u0275elementStart(27, "button", 21);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275listener("click", function HeaderComponent_ng_template_30_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openUrl("https://chromewebstore.google.com/detail/dbdgibnjfnomhihldbjcdbgddamjmboi"));
    });
    \u0275\u0275text(29, "\n            ");
    \u0275\u0275elementStart(30, "mat-icon");
    \u0275\u0275text(31, "bug_report");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, "\n            ");
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(37, "\n        ");
    \u0275\u0275element(38, "mat-divider");
    \u0275\u0275text(39, "\n        ");
    \u0275\u0275text(40, "\n        ");
    \u0275\u0275elementStart(41, "button", 21);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275listener("click", function HeaderComponent_ng_template_30_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAboutDialog());
    });
    \u0275\u0275text(43, "\n            ");
    \u0275\u0275elementStart(44, "mat-icon");
    \u0275\u0275text(45, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, "\n            ");
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, "\n    ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(52, "\n");
  }
  if (rf & 2) {
    const menu_r12 = \u0275\u0275reference(9);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r12);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 9, "MENU.OPEN"));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r1.isHome);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(15, 11, "MENU.RATE_US"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 13, "MENU.RATE_US"));
    \u0275\u0275advance(6);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(28, 15, "MENU.BUG_REPORT"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 17, "MENU.BUG_REPORT"));
    \u0275\u0275advance(7);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(42, 19, "MENU.ABOUT_ARIA"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 21, "MENU.ABOUT"));
  }
}
function HeaderComponent_ngx_whats_new_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ngx-whats-new", 28);
    \u0275\u0275listener("closeModal", function HeaderComponent_ngx_whats_new_33_Template_ngx_whats_new_closeModal_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDialogVisibility(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("items", ctx_r1.modals)("options", ctx_r1.options);
  }
}
var HeaderComponent = class _HeaderComponent {
  constructor(activatedRoute, dialog, dataService, router, store, whatsNewService) {
    this.activatedRoute = activatedRoute;
    this.dialog = dialog;
    this.dataService = dataService;
    this.router = router;
    this.store = store;
    this.whatsNewService = whatsNewService;
    this.isElectron = this.dataService.isElectron;
    this.isDialogVisible$ = this.whatsNewService.dialogState$;
    this.options = this.whatsNewService.options;
    this.modals = this.whatsNewService.getLatestChanges();
    this.isHome = true;
    this.isShowInternetSearch = false;
    this.reviewUrl = "";
    this.searchUrl = "";
    this.searchKeyword = "iptv source";
    this.defaultSourceUrl = "";
    this.promotion = {};
    this.playlistTypes = [
      {
        title: "M3U (local, url, text)",
        id: "m3u",
        checked: true
      },
      {
        title: "Xtream",
        id: "xtream",
        checked: true
      },
      {
        title: "Stalker",
        id: "stalker",
        checked: true
      }
    ];
    this.selectedTypeFilters = this.store.selectSignal(selectActiveTypeFilters);
    effect(() => {
      if (this.selectedTypeFilters) {
        this.playlistTypes = this.playlistTypes.map((type) => {
          type.checked = this.selectedTypeFilters().includes(type.id);
          return type;
        });
      }
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this.isHome = this.activatedRoute.snapshot.component.name === HomeComponent.name;
      const remoteConfig = yield this.dataService.getRemoteConfig();
      this.reviewUrl = remoteConfig.reviewUrl;
      this.isShowInternetSearch = remoteConfig.isShowInternetSearch;
      this.searchUrl = remoteConfig.searchUrl;
      this.searchKeyword = remoteConfig.searchKeyword;
      this.promotion = remoteConfig.promotion;
    });
  }
  /**
   * Navigates to the settings page
   */
  openSettings() {
    this.router.navigate(["/settings"]);
  }
  /**
   * Opens the provided URL string in new browser window
   * @param url url to open
   */
  openUrl(url) {
    window.open(url, "_blank");
  }
  /**
   * Sets the visibility flag of the modal window
   * @param visible show/hide window flag
   */
  setDialogVisibility(visible) {
    if (this.modals.length > 0) {
      this.whatsNewService.changeDialogVisibleState(visible);
    }
  }
  /**
   * Opens the about dialog with description and version of
   * the app
   */
  openAboutDialog() {
    this.dialog.open(AboutDialogComponent, {
      panelClass: "about-dialog-overlay",
      width: "600px",
      data: this.dataService.getAppVersion()
    });
  }
  opedAddPlaylistDialog(type) {
    this.dialog.open(AddPlaylistDialogComponent, {
      width: "600px",
      data: { type }
    });
  }
  onPlaylistFilterChange() {
    this.store.dispatch(setSelectedFilters({
      selectedFilters: this.playlistTypes.filter((f) => f.checked).map((f) => f.id)
    }));
  }
  static {
    this.\u0275fac = function HeaderComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HeaderComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(WhatsNewService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], inputs: { title: "title", subtitle: "subtitle" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 10, consts: [["pwaMenu", ""], ["filterPlaylistMenu", "matMenu"], ["addPlaylistMenu", "matMenu"], ["menu", "matMenu"], [1, "logo"], ["href", "/index.html"], ["src", "./assets/icons/icon-tv-256.png", "height", "100"], [1, "main"], [1, "title"], [1, "subtitle"], [1, "rate-us"], ["target", "_blank", 3, "href"], ["class", "menu", 4, "ngIf"], [3, "items", "options", "closeModal", 4, "ngIf"], [1, "menu"], ["class", "promotion-banner", 4, "ngIf"], ["mat-icon-button", "", "data-test-id", "add-playlist", 1, "add-playlist-btn", 3, "matMenuTriggerFor", "matTooltip"], ["mat-icon-button", "", "data-test-id", "filter-playlist-by-type", 3, "matMenuTriggerFor", "matTooltip"], ["mat-icon-button", "", "data-test-id", "open-settings", 3, "matTooltip", "click", 4, "ngIf", "ngIfElse"], [1, "filter-container", 3, "click"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], [1, "promotion-banner"], ["target", "_blank", 1, "promotion-link", 3, "href"], ["mat-icon-button", "", "data-test-id", "open-settings", 3, "click", "matTooltip"], [3, "click", "change", "ngModelChange", "checked", "ngModel"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [4, "ngIf"], [3, "closeModal", "items", "options"]], template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "mat-toolbar");
        \u0275\u0275text(1, "\n");
        \u0275\u0275elementStart(2, "div", 4);
        \u0275\u0275text(3, "\n    ");
        \u0275\u0275elementStart(4, "a", 5);
        \u0275\u0275element(5, "img", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, "\n");
        \u0275\u0275elementStart(8, "div", 7);
        \u0275\u0275text(9, "\n    ");
        \u0275\u0275elementStart(10, "div", 8);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, "\n    ");
        \u0275\u0275elementStart(13, "div", 9);
        \u0275\u0275text(14, "\n        ");
        \u0275\u0275elementStart(15, "div");
        \u0275\u0275text(16);
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, "\n        ");
        \u0275\u0275elementStart(18, "div", 10);
        \u0275\u0275text(19, "\n            ");
        \u0275\u0275elementStart(20, "a", 11);
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, "\n");
        \u0275\u0275template(27, HeaderComponent_div_27_Template, 97, 45, "div", 12);
        \u0275\u0275text(28, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, "\n\n");
        \u0275\u0275template(30, HeaderComponent_ng_template_30_Template, 53, 23, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275text(32, "\n");
        \u0275\u0275template(33, HeaderComponent_ngx_whats_new_33_Template, 1, 2, "ngx-whats-new", 13);
        \u0275\u0275pipe(34, "async");
        \u0275\u0275text(35, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.subtitle);
        \u0275\u0275advance(4);
        \u0275\u0275property("href", ctx.reviewUrl ? ctx.reviewUrl : "https://chromewebstore.google.com/detail/dbdgibnjfnomhihldbjcdbgddamjmboi/reviews", \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\n                \u2764\n                ", \u0275\u0275pipeBind1(22, 6, "MENU.RATE_US"), "\n            ");
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.isHome);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(34, 8, !ctx.isElectron && ctx.isDialogVisible$));
      }
    }, dependencies: [
      AsyncPipe,
      MatButtonModule,
      MatIconButton,
      MatCheckboxModule,
      MatCheckbox,
      MatDividerModule,
      MatDivider,
      MatIconModule,
      MatIcon,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatToolbarModule,
      MatToolbar,
      MatTooltipModule,
      MatTooltip,
      NgIf,
      FormsModule,
      NgControlStatus,
      NgModel,
      NgxWhatsNewModule,
      NgxWhatsNewComponent,
      ReactiveFormsModule,
      TranslateModule,
      TranslatePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  background: #1b1c1c;\n  color: #fff;\n  display: flex;\n  width: 100%;\n  --mat-toolbar-standard-height: 100px;\n}\n.logo[_ngcontent-%COMP%] {\n  flex: 1 1 100px;\n  padding: 5px 10px;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n}\n.main[_ngcontent-%COMP%] {\n  place-content: center flex-start;\n  align-self: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  display: flex;\n  flex: 1 1 100%;\n  max-width: 100%;\n}\n.main[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: bolder;\n}\n.main[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 0.7em;\n  margin-top: 5px;\n  text-wrap: pretty;\n}\n.main[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]   .rate-us[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n.main[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]   .rate-us[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n.menu[_ngcontent-%COMP%] {\n  place-content: center;\n  align-self: center;\n  display: flex;\n}\n.filter-container[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n.add-playlist-btn[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: #fff;\n}\n@media (max-width: 599px) {\n  .subtitle[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .logo[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    height: 48px;\n  }\n}\n.promotion-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 10px;\n}\n.promotion-link[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 14px;\n}\n.mat-toolbar-row[_ngcontent-%COMP%], \n.mat-toolbar-single-row[_ngcontent-%COMP%] {\n  padding: 16px;\n  box-sizing: unset;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent" });
})();

// src/app/home/home.component.ts
function HomeComponent_mat_progress_bar_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 4);
  }
}
var HomeComponent = class _HomeComponent {
  constructor(dataService, ngZone, snackBar, store) {
    this.dataService = dataService;
    this.ngZone = ngZone;
    this.snackBar = snackBar;
    this.store = store;
    this.isLoading = false;
    this.commandsList = [
      {
        id: PLAYLIST_PARSE_RESPONSE,
        execute: (response) => {
          this.store.dispatch(addPlaylist({
            playlist: response.payload
          }));
        }
      },
      {
        id: ERROR,
        execute: (error) => {
          this.showNotification("Error: " + error.message);
        }
      }
    ];
    this.listeners = [];
    this.setRendererListeners();
  }
  /**
   * Set electrons main process listeners
   */
  setRendererListeners() {
    this.commandsList.forEach((command) => {
      if (this.dataService.isElectron) {
        this.dataService.listenOn(command.id, (event, response) => this.ngZone.run(() => command.execute(response)));
      } else {
        const cb = (response) => {
          if (response.data.type === command.id) {
            command.execute(response.data);
          }
        };
        this.dataService.listenOn(command.id, cb);
        this.listeners.push(cb);
      }
    });
  }
  /**
   * Shows snack bar notification with a given message
   * @param message message to show
   * @param duration visibility duration of the snackbar
   */
  showNotification(message, duration = 2e3) {
    this.snackBar.open(message, null, {
      duration
    });
  }
  /**
   * Remove ipcRenderer listeners after component destroy
   */
  ngOnDestroy() {
    if (this.dataService.isElectron) {
      this.commandsList.forEach((command) => this.dataService.removeAllListeners(command.id));
    } else {
      this.listeners.forEach((listener) => {
        window.removeEventListener("message", listener);
      });
    }
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 7, consts: [[1, "grid-container"], [3, "title", "subtitle"], [1, "recent-playlists"], ["mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275element(2, "app-header", 1);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275text(5, "\n    ");
        \u0275\u0275element(6, "app-recent-playlists", 2);
        \u0275\u0275text(7, "\n    ");
        \u0275\u0275template(8, HomeComponent_mat_progress_bar_8_Template, 1, 0, "mat-progress-bar", 3);
        \u0275\u0275text(9, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("title", \u0275\u0275pipeBind1(3, 3, "HOME.TITLE"))("subtitle", \u0275\u0275pipeBind1(4, 5, "HOME.SUBTITLE"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.isLoading);
      }
    }, dependencies: [
      HeaderComponent,
      MatProgressBarModule,
      MatProgressBar,
      NgIf,
      RecentPlaylistsComponent,
      TranslateModule,
      TranslatePipe
    ], styles: ["\n\n  .mat-tab-label-content {\n  text-transform: uppercase;\n}\n  .mat-tab-group.mat-background-primary .mat-tab-header-pagination {\n  display: none;\n}\n.playlists-container[_ngcontent-%COMP%] {\n  grid-area: playlists;\n}\n.recent-playlists[_ngcontent-%COMP%] {\n  height: calc(100vh - 106px);\n  overflow: auto;\n}\n@media only screen and (max-width: 480px) {\n  .tab-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent" });
})();

export {
  HeaderComponent,
  HomeComponent
};
