import {
  DataService,
  MAT_DIALOG_DATA,
  MatCheckbox,
  MatCheckboxModule,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle,
  MatFormField,
  MatHint,
  MatInput,
  MatInputModule,
  MatLabel,
  PlaylistsService,
  Store,
  updatePlaylistMeta
} from "./chunk-T3L6IA2A.js";
import {
  CommonModule,
  DatePipe,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroupDirective,
  MatButton,
  MatButtonModule,
  MatIconModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  ReactiveFormsModule,
  TranslateModule,
  TranslatePipe,
  UntypedFormBuilder,
  Validators,
  __async,
  firstValueFrom,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UIAHAIJK.js";

// src/app/shared/components/confirm-dialog/confirm-dialog.component.ts
var ConfirmDialogComponent = class _ConfirmDialogComponent {
  constructor(data) {
    this.dialogData = data;
  }
  static {
    this.\u0275fac = function ConfirmDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmDialogComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 9, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", "cdkFocusInitial", "", "color", "accent"], ["mat-flat-button", "", "color", "accent", 3, "mat-dialog-close"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275text(0, "\n        ");
        \u0275\u0275elementStart(1, "h2", 0);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "mat-dialog-content", 1);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, "\n        ");
        \u0275\u0275elementStart(7, "mat-dialog-actions", 2);
        \u0275\u0275text(8, "\n            ");
        \u0275\u0275elementStart(9, "button", 3);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, "\n            ");
        \u0275\u0275elementStart(13, "button", 4);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, "\n    ");
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("\n            ", ctx.dialogData.title, "\n        ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n            ", ctx.dialogData.message, "\n        ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(11, 5, (ctx.dialogData == null ? null : ctx.dialogData.cancelLabel) || "NO"), "\n            ");
        \u0275\u0275advance(3);
        \u0275\u0275property("mat-dialog-close", true);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(15, 7, (ctx.dialogData == null ? null : ctx.dialogData.confirmLabel) || "YES"), "\n            ");
      }
    }, dependencies: [MatButtonModule, MatButton, MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, TranslateModule, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmDialogComponent, { className: "ConfirmDialogComponent" });
})();

// src/app/services/dialog.service.ts
var DialogService = class _DialogService {
  constructor(dialog) {
    this.dialog = dialog;
  }
  /**
   * Opens the confirm dialog with provided data
   * @param data dialog meta info
   */
  openConfirmDialog(data) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data,
      width: "300px"
    });
    dialogRef.afterClosed().subscribe((result) => result ? data.onConfirm() : null);
  }
  static {
    this.\u0275fac = function DialogService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DialogService)(\u0275\u0275inject(MatDialog));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DialogService, factory: _DialogService.\u0275fac, providedIn: "root" });
  }
};

// src/app/home/recent-playlists/playlist-info/playlist-info.component.ts
function PlaylistInfoComponent_mat_form_field_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 3);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275element(6, "input", 14);
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "HOME.PLAYLISTS.INFO_DIALOG.SERVER_URL"));
  }
}
function PlaylistInfoComponent_mat_form_field_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 3);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275element(6, "input", 15);
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "HOME.PLAYLISTS.INFO_DIALOG.MAC_ADDRESS"));
  }
}
function PlaylistInfoComponent_mat_form_field_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 3);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275element(6, "input", 16);
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "HOME.PLAYLISTS.INFO_DIALOG.SERVER_URL"));
  }
}
function PlaylistInfoComponent_mat_form_field_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 3);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275element(6, "input", 17);
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "HOME.PLAYLISTS.INFO_DIALOG.USERNAME"));
  }
}
function PlaylistInfoComponent_mat_form_field_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 3);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275element(6, "input", 18);
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "HOME.PLAYLISTS.INFO_DIALOG.PASSWORD"));
  }
}
function PlaylistInfoComponent_mat_form_field_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 3);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275element(6, "input", 19);
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "HOME.PLAYLISTS.INFO_DIALOG.FROM_URL"));
  }
}
function PlaylistInfoComponent_mat_form_field_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 3);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275element(6, "input", 20);
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "HOME.PLAYLISTS.INFO_DIALOG.ORIGINAL_FILENAME"));
  }
}
function PlaylistInfoComponent_mat_form_field_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 3);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275element(6, "input", 21);
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "HOME.PLAYLISTS.INFO_DIALOG.CHANNELS"));
  }
}
function PlaylistInfoComponent_mat_form_field_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 22);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275element(6, "input", 23);
    \u0275\u0275text(7, "\n            ");
    \u0275\u0275elementStart(8, "mat-hint");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "HOME.PLAYLISTS.INFO_DIALOG.USER_AGENT"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 4, "HOME.PLAYLISTS.INFO_DIALOG.CUSTOM_USER_AGENT"));
  }
}
function PlaylistInfoComponent_mat_form_field_44_mat_hint_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-hint");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(2, 1, "HOME.PLAYLISTS.INFO_DIALOG.UPDATE_FAILED"), "\n            ");
  }
}
function PlaylistInfoComponent_mat_form_field_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 3);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275element(6, "input", 24);
    \u0275\u0275text(7, "\n            ");
    \u0275\u0275template(8, PlaylistInfoComponent_mat_form_field_44_mat_hint_8_Template, 3, 3, "mat-hint", 8);
    \u0275\u0275text(9, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(4, 2, "HOME.PLAYLISTS.INFO_DIALOG.FILE_PATH"), "\n            ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.playlist.updateState === 2);
  }
}
function PlaylistInfoComponent_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "mat-checkbox", 25);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n        ");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(4, 2, "HOME.PLAYLISTS.INFO_DIALOG.AUTO_UPDATE"), "\n            ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(8, 4, "HOME.PLAYLISTS.INFO_DIALOG.AUTO_UPDATE_DESCRIPTION"), "\n            ");
  }
}
function PlaylistInfoComponent_button_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function PlaylistInfoComponent_button_51_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.exportPlaylist());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind1(2, 1, "HOME.PLAYLISTS.INFO_DIALOG.EXPORT_PLAYLIST"), "\n        ");
  }
}
var PlaylistInfoComponent = class _PlaylistInfoComponent {
  constructor(datePipe, formBuilder, dataService, playlist, playlistService, store) {
    this.datePipe = datePipe;
    this.formBuilder = formBuilder;
    this.dataService = dataService;
    this.playlistService = playlistService;
    this.store = store;
    this.isElectron = this.dataService.isElectron;
    this.playlist = playlist;
  }
  /**
   * Create the form and set initial data on component init
   */
  ngOnInit() {
    this.playlistDetails = this.formBuilder.group({
      _id: this.playlist._id,
      title: new FormControl(this.playlist.title, Validators.required),
      userAgent: this.playlist.userAgent || "",
      filename: new FormControl({
        value: this.playlist.filename || "",
        disabled: true
      }),
      count: new FormControl({
        value: this.playlist.count,
        disabled: true
      }),
      importDate: new FormControl({
        value: this.datePipe.transform(this.playlist.importDate),
        disabled: true
      }),
      url: new FormControl({
        value: this.playlist.url,
        disabled: true
      }),
      filePath: new FormControl({
        value: this.playlist.filePath,
        disabled: true
      }),
      autoRefresh: new FormControl(this.playlist.autoRefresh),
      serverUrl: new FormControl(this.playlist.serverUrl),
      username: new FormControl(this.playlist.username),
      password: new FormControl(this.playlist.password),
      macAddress: new FormControl(this.playlist.macAddress),
      portalUrl: new FormControl(this.playlist.portalUrl)
    });
  }
  saveChanges(playlist) {
    this.store.dispatch(updatePlaylistMeta({ playlist }));
  }
  exportPlaylist() {
    return __async(this, null, function* () {
      const playlistAsString = yield firstValueFrom(this.playlistService.getRawPlaylistById(this.playlist._id));
      const element = document.createElement("a");
      element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(playlistAsString));
      element.setAttribute("download", this.playlist.title || "exported.m3u");
      element.style.display = "none";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    });
  }
  static {
    this.\u0275fac = function PlaylistInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistInfoComponent)(\u0275\u0275directiveInject(DatePipe), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(PlaylistsService), \u0275\u0275directiveInject(Store));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistInfoComponent, selectors: [["app-playlist-info"]], standalone: true, features: [\u0275\u0275ProvidersFeature([DatePipe]), \u0275\u0275StandaloneFeature], decls: 65, vars: 29, consts: [[3, "ngSubmit", "formGroup"], ["mat-dialog-title", ""], [1, "mat-typography"], [1, "full-width"], ["formControlName", "title", "matInput", ""], ["class", "full-width", 4, "ngIf"], ["matInput", "", "formControlName", "importDate"], ["class", "full-width mb-10", 4, "ngIf"], [4, "ngIf"], ["align", "end"], ["mat-flat-button", "", "color", "accent", 3, "click", 4, "ngIf"], [1, "spacer"], ["mat-button", "", "mat-dialog-close", "", "cdkFocusInitial", "", "color", "accent"], ["mat-flat-button", "", "mat-dialog-close", "", "color", "accent", "type", "submit", 3, "disabled"], ["matInput", "", "formControlName", "portalUrl"], ["matInput", "", "formControlName", "macAddress"], ["matInput", "", "formControlName", "serverUrl"], ["matInput", "", "formControlName", "username"], ["matInput", "", "formControlName", "password"], ["matInput", "", "formControlName", "url"], ["matInput", "", "formControlName", "filename"], ["matInput", "", "formControlName", "count"], [1, "full-width", "mb-10"], ["formControlName", "userAgent", "matInput", ""], ["formControlName", "filePath", "matInput", ""], ["formControlName", "autoRefresh", 1, "full-width"], ["mat-flat-button", "", "color", "accent", 3, "click"]], template: function PlaylistInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "form", 0);
        \u0275\u0275listener("ngSubmit", function PlaylistInfoComponent_Template_form_ngSubmit_0_listener() {
          return ctx.saveChanges(ctx.playlistDetails.value);
        });
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "h2", 1);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(5, "\n    ");
        \u0275\u0275elementStart(6, "mat-dialog-content", 2);
        \u0275\u0275text(7, "\n        ");
        \u0275\u0275elementStart(8, "mat-form-field", 3);
        \u0275\u0275text(9, "\n            ");
        \u0275\u0275elementStart(10, "mat-label");
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(13, "\n            ");
        \u0275\u0275element(14, "input", 4);
        \u0275\u0275text(15, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, "\n        ");
        \u0275\u0275template(17, PlaylistInfoComponent_mat_form_field_17_Template, 8, 3, "mat-form-field", 5);
        \u0275\u0275text(18, "\n        ");
        \u0275\u0275template(19, PlaylistInfoComponent_mat_form_field_19_Template, 8, 3, "mat-form-field", 5);
        \u0275\u0275text(20, "\n        ");
        \u0275\u0275template(21, PlaylistInfoComponent_mat_form_field_21_Template, 8, 3, "mat-form-field", 5);
        \u0275\u0275text(22, "\n        ");
        \u0275\u0275template(23, PlaylistInfoComponent_mat_form_field_23_Template, 8, 3, "mat-form-field", 5);
        \u0275\u0275text(24, "\n        ");
        \u0275\u0275template(25, PlaylistInfoComponent_mat_form_field_25_Template, 8, 3, "mat-form-field", 5);
        \u0275\u0275text(26, "\n        ");
        \u0275\u0275template(27, PlaylistInfoComponent_mat_form_field_27_Template, 8, 3, "mat-form-field", 5);
        \u0275\u0275text(28, "\n        ");
        \u0275\u0275template(29, PlaylistInfoComponent_mat_form_field_29_Template, 8, 3, "mat-form-field", 5);
        \u0275\u0275text(30, "\n        ");
        \u0275\u0275elementStart(31, "mat-form-field", 3);
        \u0275\u0275text(32, "\n            ");
        \u0275\u0275elementStart(33, "mat-label");
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, "\n            ");
        \u0275\u0275element(37, "input", 6);
        \u0275\u0275text(38, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(39, "\n        ");
        \u0275\u0275template(40, PlaylistInfoComponent_mat_form_field_40_Template, 8, 3, "mat-form-field", 5);
        \u0275\u0275text(41, "\n        ");
        \u0275\u0275template(42, PlaylistInfoComponent_mat_form_field_42_Template, 12, 6, "mat-form-field", 7);
        \u0275\u0275text(43, "\n        ");
        \u0275\u0275template(44, PlaylistInfoComponent_mat_form_field_44_Template, 10, 4, "mat-form-field", 5);
        \u0275\u0275text(45, "\n        ");
        \u0275\u0275template(46, PlaylistInfoComponent_ng_container_46_Template, 10, 6, "ng-container", 8);
        \u0275\u0275text(47, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, "\n    ");
        \u0275\u0275elementStart(49, "mat-dialog-actions", 9);
        \u0275\u0275text(50, "\n        ");
        \u0275\u0275template(51, PlaylistInfoComponent_button_51_Template, 3, 3, "button", 10);
        \u0275\u0275text(52, "\n        ");
        \u0275\u0275element(53, "div", 11);
        \u0275\u0275text(54, "\n        ");
        \u0275\u0275elementStart(55, "button", 12);
        \u0275\u0275text(56);
        \u0275\u0275pipe(57, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(58, "\n        ");
        \u0275\u0275elementStart(59, "button", 13);
        \u0275\u0275text(60);
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(62, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(63, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(64, "\n");
      }
      if (rf & 2) {
        \u0275\u0275property("formGroup", ctx.playlistDetails);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(4, 19, "HOME.PLAYLISTS.INFO_DIALOG.PLAYLIST_DETAILS"), "\n    ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 21, "HOME.PLAYLISTS.INFO_DIALOG.TITLE"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.playlist.portalUrl);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.playlist.macAddress);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.playlist.serverUrl);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.playlist.username);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.playlist.password);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.playlist.url);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.playlist.filename);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 23, "HOME.PLAYLISTS.INFO_DIALOG.IMPORT_DATE"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.playlist.count);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isElectron);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.playlist.filePath);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isElectron && (ctx.playlist.url || ctx.playlist.filePath));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", !ctx.playlist.serverUrl && !ctx.playlist.portalUrl);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind1(57, 25, "HOME.PLAYLISTS.INFO_DIALOG.CLOSE"), "\n        ");
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", !ctx.playlistDetails.valid || ctx.playlistDetails.pristine);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\n            ", \u0275\u0275pipeBind1(61, 27, "HOME.PLAYLISTS.INFO_DIALOG.SAVE"), "\n        ");
      }
    }, dependencies: [
      TranslateModule,
      TranslatePipe,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatInputModule,
      MatInput,
      MatFormField,
      MatLabel,
      MatHint,
      MatCheckboxModule,
      MatCheckbox,
      CommonModule,
      NgIf,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      MatDialogModule,
      MatDialogClose,
      MatDialogTitle,
      MatDialogActions,
      MatDialogContent
    ], styles: ["\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistInfoComponent, { className: "PlaylistInfoComponent" });
})();

export {
  DialogService,
  PlaylistInfoComponent
};
