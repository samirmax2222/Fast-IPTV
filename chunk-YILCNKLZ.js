import {
  EpgService,
  Language,
  SettingsService,
  Theme,
  require_semver
} from "./chunk-B35M7VA6.js";
import {
  HeaderComponent
} from "./chunk-3P2X5OMP.js";
import "./chunk-22PGBF2V.js";
import "./chunk-77743P3T.js";
import "./chunk-BDFOKL7O.js";
import "./chunk-33VEBIKZ.js";
import "./chunk-4D3XHEA7.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-BZW6CPKB.js";
import "./chunk-CZ6LWLN7.js";
import {
  STORE_KEY,
  VideoPlayer
} from "./chunk-IF63ICDL.js";
import {
  DialogService
} from "./chunk-Y4JPU4RN.js";
import {
  DataService,
  EPG_FORCE_FETCH,
  MatCheckbox,
  MatCheckboxModule,
  MatError,
  MatFormField,
  MatInput,
  MatInputModule,
  MatLabel,
  MatSnackBar,
  PlaylistsService,
  Router,
  SETTINGS_UPDATE,
  SET_MPV_PLAYER_PATH,
  SET_VLC_PLAYER_PATH,
  Store,
  addManyPlaylists,
  removeAllPlaylists,
  selectIsEpgAvailable
} from "./chunk-T3L6IA2A.js";
import {
  CommonModule,
  DefaultValueAccessor,
  FormArray,
  FormArrayName,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  KeyValuePipe,
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
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  ReactiveFormsModule,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  Validators,
  __spreadProps,
  __spreadValues,
  __toESM,
  take,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UIAHAIJK.js";

// src/app/settings/settings.component.ts
var semver = __toESM(require_semver());
function SettingsComponent_ng_container_9_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1, "\n                        ");
    \u0275\u0275elementStart(2, "mat-form-field", 25);
    \u0275\u0275text(3, "\n                            ");
    \u0275\u0275elementStart(4, "mat-label");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                            ");
    \u0275\u0275element(8, "input", 26, 0);
    \u0275\u0275text(10, "\n                            ");
    \u0275\u0275elementStart(11, "mat-error");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n                        ");
    \u0275\u0275elementStart(16, "button", 27);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275listener("click", function SettingsComponent_ng_container_9_div_13_Template_button_click_16_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.refreshEpg(ctx_r3.epgUrl.value[i_r3]));
    });
    \u0275\u0275text(18, "\n                            ");
    \u0275\u0275elementStart(19, "mat-icon");
    \u0275\u0275text(20, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, "\n                        ");
    \u0275\u0275elementStart(23, "button", 28);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275listener("click", function SettingsComponent_ng_container_9_div_13_Template_button_click_23_listener() {
      const i_r3 = \u0275\u0275restoreView(_r2).index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeEpgSource(i_r3));
    });
    \u0275\u0275text(25, "\n                            ");
    \u0275\u0275elementStart(26, "mat-icon");
    \u0275\u0275text(27, "remove");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, "\n                        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, "\n                    ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    const epgField_r5 = \u0275\u0275reference(9);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "SETTINGS.EPG_URL_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formControlName", i_r3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 8, "SETTINGS.EPG_URL_ERROR"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 10, "SETTINGS.REFRESH_EPG"))("disabled", epgField_r5.value === "");
    \u0275\u0275advance(7);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(24, 12, "SETTINGS.REFRESH_EPG"));
  }
}
function SettingsComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0, 21);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 5);
    \u0275\u0275text(3, "\n                ");
    \u0275\u0275elementStart(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Add single or multiple URLs as EPG sources");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n                ");
    \u0275\u0275elementStart(11, "div", 6);
    \u0275\u0275text(12, "\n                    ");
    \u0275\u0275template(13, SettingsComponent_ng_container_9_div_13_Template, 30, 14, "div", 22);
    \u0275\u0275text(14, "\n                    ");
    \u0275\u0275elementStart(15, "button", 23);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_9_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addEpgSource());
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "\n            ");
    \u0275\u0275element(21, "mat-divider");
    \u0275\u0275text(22, "\n        ");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(6, 3, "SETTINGS.EPG_URL_LABEL"), "\n                    ");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r3.epgUrl.controls);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                        ", \u0275\u0275pipeBind1(17, 5, "SETTINGS.ADD_EPG_SOURCE"), "\n                    ");
  }
}
function SettingsComponent_mat_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const player_r6 = ctx.$implicit;
    \u0275\u0275property("value", player_r6.id);
    \u0275\u0275attribute("data-test-id", player_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", player_r6.label, "\n                        ");
  }
}
function SettingsComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n            ");
    \u0275\u0275elementStart(10, "div", 6);
    \u0275\u0275text(11, "\n                ");
    \u0275\u0275elementStart(12, "mat-form-field", 7);
    \u0275\u0275text(13, "\n                    ");
    \u0275\u0275elementStart(14, "mat-label", 30);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "\n                    ");
    \u0275\u0275element(18, "input", 31);
    \u0275\u0275text(19, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n            ");
    \u0275\u0275element(22, "mat-divider");
    \u0275\u0275text(23, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(4, 3, "SETTINGS.MPV_PLAYER_PATH_LABEL"), "\n                ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "SETTINGS.MPV_PLAYER_PATH_DESCRIPTION"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 7, "SETTINGS.MPV_PLAYER_PATH"));
  }
}
function SettingsComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n            ");
    \u0275\u0275elementStart(10, "div", 6);
    \u0275\u0275text(11, "\n                ");
    \u0275\u0275elementStart(12, "mat-form-field", 7);
    \u0275\u0275text(13, "\n                    ");
    \u0275\u0275elementStart(14, "mat-label", 32);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "\n                    ");
    \u0275\u0275element(18, "input", 33);
    \u0275\u0275text(19, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, "\n            ");
    \u0275\u0275element(22, "mat-divider");
    \u0275\u0275text(23, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(4, 3, "SETTINGS.VLC_PLAYER_PATH_LABEL"), "\n                ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "SETTINGS.VLC_PLAYER_PATH_DESCRIPTION"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 7, "SETTINGS.VLC_PLAYER_PATH"));
  }
}
function SettingsComponent_mat_option_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const language_r7 = ctx.$implicit;
    \u0275\u0275property("value", language_r7.value);
    \u0275\u0275attribute("data-test-id", language_r7.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "LANGUAGES." + language_r7.key));
  }
}
function SettingsComponent_mat_option_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const theme_r8 = ctx.$implicit;
    \u0275\u0275property("value", theme_r8.value);
    \u0275\u0275attribute("data-test-id", theme_r8.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 3, "THEMES." + theme_r8.value));
  }
}
function SettingsComponent_mat_divider_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-divider");
  }
}
function SettingsComponent_div_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n            ");
    \u0275\u0275elementStart(10, "div", 13);
    \u0275\u0275text(11, "\n                ");
    \u0275\u0275element(12, "mat-checkbox", 34);
    \u0275\u0275text(13, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(4, 2, "SETTINGS.REMOTE_CONTROL"), "\n                ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "SETTINGS.REMOTE_CONTROL_DESCRIPTION"));
  }
}
function SettingsComponent_mat_divider_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-divider");
  }
}
function SettingsComponent_div_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n            ");
    \u0275\u0275elementStart(10, "div", 13);
    \u0275\u0275text(11, "\n                ");
    \u0275\u0275elementStart(12, "mat-form-field", 25);
    \u0275\u0275text(13, "\n                    ");
    \u0275\u0275element(14, "input", 35);
    \u0275\u0275text(15, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(4, 2, "SETTINGS.REMOTE_CONTROL_PORT"), "\n                ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "SETTINGS.REMOTE_CONTROL_PORT_DESCRIPTION"));
  }
}
var SettingsComponent = class _SettingsComponent {
  /**
   * Creates an instance of SettingsComponent and injects
   * required dependencies into the component
   */
  constructor(dialogService, electronService, epgService, formBuilder, playlistsService, router, settingsService, snackBar, store, translate) {
    this.dialogService = dialogService;
    this.electronService = electronService;
    this.epgService = epgService;
    this.formBuilder = formBuilder;
    this.playlistsService = playlistsService;
    this.router = router;
    this.settingsService = settingsService;
    this.snackBar = snackBar;
    this.store = store;
    this.translate = translate;
    this.languageEnum = Language;
    this.isElectron = this.electronService.isElectron;
    this.electronPlayers = [
      {
        id: VideoPlayer.MPV,
        label: "MPV Player"
      },
      {
        id: VideoPlayer.VLC,
        label: "VLC"
      }
    ];
    this.players = [
      {
        id: VideoPlayer.Html5Player,
        label: "HTML5 Video Player"
      },
      {
        id: VideoPlayer.VideoJs,
        label: "VideoJs Player"
      },
      ...this.isElectron ? this.electronPlayers : []
    ];
    this.epgAvailable$ = this.store.select(selectIsEpgAvailable);
    this.themeEnum = Theme;
    this.settingsForm = this.formBuilder.group(__spreadProps(__spreadValues({
      player: [VideoPlayer.VideoJs]
    }, this.isElectron ? { epgUrl: new FormArray([]) } : {}), {
      language: Language.ENGLISH,
      showCaptions: false,
      theme: Theme.LightTheme,
      mpvPlayerPath: "",
      vlcPlayerPath: "",
      remoteControl: false,
      remoteControlPort: 3e3
    }));
    this.epgUrl = this.settingsForm.get("epgUrl");
  }
  /**
   * Reads the config object from the browsers
   * storage (indexed db)
   */
  ngOnInit() {
    this.setSettings();
    this.checkAppVersion();
  }
  /**
   * Sets saved settings from the indexed db store
   */
  setSettings() {
    this.settingsService.getValueFromLocalStorage(STORE_KEY.Settings).subscribe((settings) => {
      if (settings) {
        try {
          this.settingsForm.setValue(__spreadProps(__spreadValues({
            player: settings.player ? settings.player : VideoPlayer.VideoJs
          }, this.isElectron ? { epgUrl: [] } : {}), {
            language: settings.language ?? Language.ENGLISH,
            showCaptions: settings.showCaptions ?? false,
            theme: settings.theme ?? Theme.LightTheme,
            mpvPlayerPath: settings.mpvPlayerPath ?? "",
            vlcPlayerPath: settings.vlcPlayerPath ?? "",
            remoteControl: settings.remoteControl ?? false,
            remoteControlPort: settings.remoteControlPort ?? 3e3
          }));
        } catch (error) {
          throw new Error(error);
        }
        if (this.isElectron) {
          this.setEpgUrls(settings.epgUrl);
        }
      }
    });
  }
  /**
   * Sets the epg urls to the form array
   * @param epgUrls urls of the EPG sources
   */
  setEpgUrls(epgUrls) {
    const URL_REGEX = /^(http|https|file):\/\/[^ "]+$/;
    const urls = Array.isArray(epgUrls) ? epgUrls : [epgUrls];
    const filteredUrls = urls.filter((url) => url !== "");
    filteredUrls.forEach((url) => {
      this.epgUrl.push(new FormControl(url, [Validators.pattern(URL_REGEX)]));
    });
  }
  /**
   * Checks whether the latest version of the application
   * is used and updates the version message in the
   * settings UI
   */
  checkAppVersion() {
    this.settingsService.getAppVersion().pipe(take(1)).subscribe((version) => this.showVersionInformation(version));
  }
  /**
   * Updates the message in settings UI about the used
   * version of the app
   * @param currentVersion current version of the application
   */
  showVersionInformation(currentVersion) {
    const isOutdated = this.isCurrentVersionOutdated(currentVersion);
    if (isOutdated) {
      this.updateMessage = `${this.translate.instant("SETTINGS.NEW_VERSION_AVAILABLE")}: ${currentVersion}`;
    } else {
      this.updateMessage = this.translate.instant("SETTINGS.LATEST_VERSION");
    }
  }
  /**
   * Compares actual with latest version of the
   * application
   * @param latestVersion latest version
   * @returns returns true if an update is available
   */
  isCurrentVersionOutdated(latestVersion) {
    this.version = this.electronService.getAppVersion();
    return semver.lt(this.version, latestVersion);
  }
  /**
   * Triggers on form submit and saves the config object to
   * the indexed db store
   */
  onSubmit() {
    this.settingsService.setValueToLocalStorage(STORE_KEY.Settings, this.settingsForm.value, true).pipe(take(1)).subscribe(() => {
      this.applyChangedSettings();
    });
    this.electronService.sendIpcEvent(SETTINGS_UPDATE, this.settingsForm.value);
    this.electronService.sendIpcEvent(SET_MPV_PLAYER_PATH, this.settingsForm.value.mpvPlayerPath);
    this.electronService.sendIpcEvent(SET_VLC_PLAYER_PATH, this.settingsForm.value.mpvPlayerPath);
  }
  /**
   * Applies the changed settings to the app
   */
  applyChangedSettings() {
    this.settingsForm.markAsPristine();
    if (this.isElectron) {
      let epgUrls = this.settingsForm.value.epgUrl;
      if (epgUrls) {
        if (!Array.isArray(epgUrls)) {
          epgUrls = [epgUrls];
        }
        epgUrls = epgUrls.filter((url) => url !== "");
        this.epgService.fetchEpg(epgUrls);
      }
    }
    this.translate.use(this.settingsForm.value.language);
    this.settingsService.changeTheme(this.settingsForm.value.theme);
    this.snackBar.open(this.translate.instant("SETTINGS.SETTINGS_SAVED"), null, {
      duration: 2e3,
      horizontalPosition: "start"
    });
  }
  /**
   * Navigates back to the applications homepage
   */
  backToHome() {
    this.router.navigateByUrl("/");
  }
  /**
   * Fetches and updates EPG from the given URL
   * @param url epg source url
   */
  refreshEpg(url) {
    this.electronService.sendIpcEvent(EPG_FORCE_FETCH, url);
    this.epgService.showFetchSnackbar();
  }
  /**
   * Initializes new entry in form array for EPG URL
   */
  addEpgSource() {
    this.epgUrl.insert(this.epgUrl.length, new FormControl(""));
  }
  /**
   * Removes entry from form array for EPG URL
   * @param index index of the item to remove
   */
  removeEpgSource(index) {
    this.epgUrl.removeAt(index);
    this.settingsForm.markAsDirty();
  }
  exportData() {
    this.playlistsService.getAllData().pipe(take(1)).subscribe((data) => {
      const blob = new Blob([JSON.stringify(data)], {
        type: "text/plain"
      });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "playlists.json";
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }
  importData() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";
    input.addEventListener("change", (event) => {
      const target = event.target;
      const file = target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          const contents = reader.result;
          try {
            const parsedPlaylists = JSON.parse(contents.toString());
            if (!Array.isArray(parsedPlaylists)) {
              this.snackBar.open(this.translate.instant("SETTINGS.IMPORT_ERROR"), null, {
                duration: 2e3
              });
            } else {
              this.store.dispatch(addManyPlaylists({
                playlists: parsedPlaylists
              }));
            }
          } catch (error) {
            this.snackBar.open(this.translate.instant("SETTINGS.IMPORT_ERROR"), null, {
              duration: 2e3
            });
          }
        };
        reader.readAsText(file);
      }
    });
    input.click();
  }
  removeAll() {
    this.dialogService.openConfirmDialog({
      title: this.translate.instant("SETTINGS.REMOVE_DIALOG.TITLE"),
      message: this.translate.instant("SETTINGS.REMOVE_DIALOG.MESSAGE"),
      onConfirm: () => this.store.dispatch(removeAllPlaylists())
    });
  }
  static {
    this.\u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsComponent)(\u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(EpgService), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(PlaylistsService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(TranslateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 208, vars: 91, consts: [["epgField", ""], [3, "title", "subtitle"], ["data-test-id", "settings-container", 1, "settings-container"], ["novalidate", "", 3, "ngSubmit", "formGroup"], ["formArrayName", "epgUrl", 4, "ngIf"], [1, "row"], [1, "column"], ["appearance", "outline"], ["formControlName", "player", "data-test-id", "select-video-player"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], ["formControlName", "language", "data-test-id", "select-language"], ["formControlName", "theme", "data-test-id", "select-theme"], [1, "column", 2, "margin-right", "10px"], ["formControlName", "showCaptions", 1, "column"], [4, "ngIf"], ["mat-button", "", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], ["align", "end", 1, "action-buttons"], ["mat-button", "", "color", "accent", "type", "reset", "data-test-id", "back-to-home", 3, "click"], ["mat-button", "", "color", "accent", "type", "submit", "data-test-id", "save-settings", 3, "disabled"], ["formArrayName", "epgUrl"], ["style", "display: flex", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "accent", "type", "button", 3, "click"], [2, "display", "flex"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "url", 3, "formControlName"], ["matLine", "", "mat-icon-button", "", "color", "accent", "type", "button", 3, "click", "matTooltip", "disabled"], ["mat-icon-button", "", "matLine", "", "color", "accent", "type", "button", 3, "click", "matTooltip"], [3, "value"], ["for", "mpvPlayerPath"], ["matInput", "", "type", "text", "id", "mpvPlayerPath", "formControlName", "mpvPlayerPath"], ["for", "vlcPlayerPath"], ["matInput", "", "type", "text", "id", "vlcPlayerPath", "formControlName", "vlcPlayerPath"], ["formControlName", "remoteControl", 1, "column"], ["matInput", "", "type", "text", "id", "remoteControlPort", "formControlName", "remoteControlPort"]], template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-header", 1);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275text(4, "\n\n");
        \u0275\u0275elementStart(5, "div", 2);
        \u0275\u0275text(6, "\n    ");
        \u0275\u0275elementStart(7, "form", 3);
        \u0275\u0275listener("ngSubmit", function SettingsComponent_Template_form_ngSubmit_7_listener() {
          return ctx.onSubmit();
        });
        \u0275\u0275text(8, "\n        ");
        \u0275\u0275template(9, SettingsComponent_ng_container_9_Template, 23, 7, "ng-container", 4);
        \u0275\u0275text(10, "\n        ");
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275text(12, "\n            ");
        \u0275\u0275elementStart(13, "div", 6);
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementStart(16, "p");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, "\n            ");
        \u0275\u0275elementStart(21, "div", 6);
        \u0275\u0275text(22, "\n                ");
        \u0275\u0275elementStart(23, "mat-form-field", 7);
        \u0275\u0275text(24, "\n                    ");
        \u0275\u0275elementStart(25, "mat-label");
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, "\n                    ");
        \u0275\u0275elementStart(29, "mat-select", 8);
        \u0275\u0275text(30, "\n                        ");
        \u0275\u0275template(31, SettingsComponent_mat_option_31_Template, 2, 3, "mat-option", 9);
        \u0275\u0275text(32, "\n                    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, "\n                ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, "\n        ");
        \u0275\u0275element(37, "mat-divider");
        \u0275\u0275text(38, "\n        ");
        \u0275\u0275template(39, SettingsComponent_div_39_Template, 24, 9, "div", 10);
        \u0275\u0275text(40, "\n        ");
        \u0275\u0275template(41, SettingsComponent_div_41_Template, 24, 9, "div", 10);
        \u0275\u0275text(42, "\n        ");
        \u0275\u0275elementStart(43, "div", 5);
        \u0275\u0275text(44, "\n            ");
        \u0275\u0275elementStart(45, "div", 6);
        \u0275\u0275text(46);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275elementStart(48, "p");
        \u0275\u0275text(49);
        \u0275\u0275pipe(50, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(51, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(52, "\n            ");
        \u0275\u0275elementStart(53, "div", 6);
        \u0275\u0275text(54, "\n                ");
        \u0275\u0275elementStart(55, "mat-form-field", 7);
        \u0275\u0275text(56, "\n                    ");
        \u0275\u0275elementStart(57, "mat-label");
        \u0275\u0275text(58);
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(60, "\n                    ");
        \u0275\u0275elementStart(61, "mat-select", 11);
        \u0275\u0275text(62, "\n                        ");
        \u0275\u0275template(63, SettingsComponent_mat_option_63_Template, 3, 5, "mat-option", 9);
        \u0275\u0275pipe(64, "keyvalue");
        \u0275\u0275text(65, "\n                    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(66, "\n                ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(67, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(68, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(69, "\n        ");
        \u0275\u0275element(70, "mat-divider");
        \u0275\u0275text(71, "\n        ");
        \u0275\u0275elementStart(72, "div", 5);
        \u0275\u0275text(73, "\n            ");
        \u0275\u0275elementStart(74, "div", 6);
        \u0275\u0275text(75);
        \u0275\u0275pipe(76, "translate");
        \u0275\u0275elementStart(77, "p");
        \u0275\u0275text(78);
        \u0275\u0275pipe(79, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(80, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(81, "\n            ");
        \u0275\u0275elementStart(82, "div", 6);
        \u0275\u0275text(83, "\n                ");
        \u0275\u0275elementStart(84, "mat-form-field", 7);
        \u0275\u0275text(85, "\n                    ");
        \u0275\u0275elementStart(86, "mat-label");
        \u0275\u0275text(87);
        \u0275\u0275pipe(88, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(89, "\n                    ");
        \u0275\u0275elementStart(90, "mat-select", 12);
        \u0275\u0275text(91, "\n                        ");
        \u0275\u0275template(92, SettingsComponent_mat_option_92_Template, 3, 5, "mat-option", 9);
        \u0275\u0275pipe(93, "keyvalue");
        \u0275\u0275text(94, "\n                    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(95, "\n                ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(96, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(97, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(98, "\n        ");
        \u0275\u0275element(99, "mat-divider");
        \u0275\u0275text(100, "\n        ");
        \u0275\u0275elementStart(101, "div", 5);
        \u0275\u0275text(102, "\n            ");
        \u0275\u0275elementStart(103, "div", 6);
        \u0275\u0275text(104);
        \u0275\u0275pipe(105, "translate");
        \u0275\u0275elementStart(106, "p");
        \u0275\u0275text(107);
        \u0275\u0275pipe(108, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(109, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(110, "\n            ");
        \u0275\u0275elementStart(111, "div", 13);
        \u0275\u0275text(112, "\n                ");
        \u0275\u0275element(113, "mat-checkbox", 14);
        \u0275\u0275text(114, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(115, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(116, "\n        ");
        \u0275\u0275template(117, SettingsComponent_mat_divider_117_Template, 1, 0, "mat-divider", 15);
        \u0275\u0275text(118, "\n        ");
        \u0275\u0275template(119, SettingsComponent_div_119_Template, 15, 6, "div", 10);
        \u0275\u0275text(120, "\n        ");
        \u0275\u0275template(121, SettingsComponent_mat_divider_121_Template, 1, 0, "mat-divider", 15);
        \u0275\u0275text(122, "\n        ");
        \u0275\u0275template(123, SettingsComponent_div_123_Template, 18, 6, "div", 10);
        \u0275\u0275text(124, "\n        ");
        \u0275\u0275element(125, "mat-divider");
        \u0275\u0275text(126, "\n        ");
        \u0275\u0275elementStart(127, "div", 5);
        \u0275\u0275text(128, "\n            ");
        \u0275\u0275elementStart(129, "div", 6);
        \u0275\u0275text(130);
        \u0275\u0275pipe(131, "translate");
        \u0275\u0275elementStart(132, "p");
        \u0275\u0275text(133);
        \u0275\u0275pipe(134, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(135, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(136, "\n            ");
        \u0275\u0275elementStart(137, "div", 6);
        \u0275\u0275text(138);
        \u0275\u0275element(139, "br");
        \u0275\u0275text(140, "\n                ");
        \u0275\u0275text(141, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(142, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(143, "\n        ");
        \u0275\u0275element(144, "mat-divider");
        \u0275\u0275text(145, "\n        ");
        \u0275\u0275elementStart(146, "div", 5);
        \u0275\u0275text(147, "\n            ");
        \u0275\u0275elementStart(148, "div", 6);
        \u0275\u0275text(149);
        \u0275\u0275pipe(150, "translate");
        \u0275\u0275elementStart(151, "p");
        \u0275\u0275text(152);
        \u0275\u0275pipe(153, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(154, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(155, "\n            ");
        \u0275\u0275elementStart(156, "div", 6);
        \u0275\u0275text(157, "\n                ");
        \u0275\u0275elementStart(158, "button", 16);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_158_listener($event) {
          $event.preventDefault();
          $event.stopPropagation();
          return ctx.importData();
        });
        \u0275\u0275text(159);
        \u0275\u0275pipe(160, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(161, "\n                ");
        \u0275\u0275elementStart(162, "button", 16);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_162_listener($event) {
          $event.preventDefault();
          $event.stopPropagation();
          return ctx.exportData();
        });
        \u0275\u0275text(163);
        \u0275\u0275pipe(164, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(165, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(166, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(167, "\n\n        ");
        \u0275\u0275elementStart(168, "div", 5);
        \u0275\u0275text(169, "\n            ");
        \u0275\u0275elementStart(170, "div", 6);
        \u0275\u0275text(171);
        \u0275\u0275pipe(172, "translate");
        \u0275\u0275elementStart(173, "p");
        \u0275\u0275text(174);
        \u0275\u0275pipe(175, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(176, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(177, "\n            ");
        \u0275\u0275elementStart(178, "div", 6);
        \u0275\u0275text(179, "\n                ");
        \u0275\u0275elementStart(180, "button", 17);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_180_listener($event) {
          $event.preventDefault();
          $event.stopPropagation();
          return ctx.removeAll();
        });
        \u0275\u0275text(181);
        \u0275\u0275pipe(182, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(183, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(184, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(185, "\n\n        ");
        \u0275\u0275text(186, "\n\n        ");
        \u0275\u0275element(187, "mat-divider");
        \u0275\u0275text(188, "\n        ");
        \u0275\u0275elementStart(189, "div", 18);
        \u0275\u0275text(190, "\n            ");
        \u0275\u0275elementStart(191, "button", 19);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_191_listener() {
          return ctx.backToHome();
        });
        \u0275\u0275text(192, "\n                ");
        \u0275\u0275elementStart(193, "mat-icon");
        \u0275\u0275text(194, "chevron_left");
        \u0275\u0275elementEnd();
        \u0275\u0275text(195);
        \u0275\u0275pipe(196, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(197, "\n            ");
        \u0275\u0275elementStart(198, "button", 20);
        \u0275\u0275text(199, "\n                ");
        \u0275\u0275elementStart(200, "mat-icon");
        \u0275\u0275text(201, "save");
        \u0275\u0275elementEnd();
        \u0275\u0275text(202);
        \u0275\u0275pipe(203, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(204, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(205, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(206, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(207, "\n");
      }
      if (rf & 2) {
        \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 37, "SETTINGS.TITLE"))("subtitle", \u0275\u0275pipeBind1(2, 39, "SETTINGS.SUBTITLE") + ". " + \u0275\u0275pipeBind1(3, 41, "SETTINGS.DESCRIPTION"));
        \u0275\u0275advance(7);
        \u0275\u0275property("formGroup", ctx.settingsForm);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.isElectron);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(15, 43, "SETTINGS.VIDEO_PLAYER_LABEL"), "\n                ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 45, "SETTINGS.VIDEO_PLAYER_DESCRIPTION"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 47, "SETTINGS.VIDEO_PLAYER_PLACEHOLDER"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.players);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.settingsForm.value.player === "mpv");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.settingsForm.value.player === "vlc");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(47, 49, "SETTINGS.LANGUAGE"), "\n                ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 51, "SETTINGS.LANGUAGE_DESCRIPTION"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 53, "SETTINGS.VIDEO_PLAYER_PLACEHOLDER"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(64, 55, ctx.languageEnum));
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(76, 57, "SETTINGS.THEME"), "\n                ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 59, "SETTINGS.THEME_DESCRIPTION"));
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(88, 61, "SETTINGS.VIDEO_PLAYER_PLACEHOLDER"));
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(93, 63, ctx.themeEnum));
        \u0275\u0275advance(12);
        \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(105, 65, "SETTINGS.SHOW_CAPTIONS"), "\n                ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(108, 67, "SETTINGS.SHOW_CAPTIONS_DESCRIPTION"));
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", false);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", false);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", false);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.settingsForm.value.remoteControl === true);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(131, 69, "SETTINGS.VERSION"), "\n                ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(134, 71, "SETTINGS.VERSION_DESCRIPTION"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("\n                ", ctx.version, " ");
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(150, 73, "SETTINGS.IMPORT_EXPORT_DATA"), "\n                ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(153, 75, "SETTINGS.IMPORT_EXPORT_DATA_DESCRIPTION"), "\n                ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(160, 77, "SETTINGS.IMPORT_DATA"), "\n                ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(164, 79, "SETTINGS.EXPORT_DATA"), "\n                ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(172, 81, "SETTINGS.REMOVE_ALL"), "\n                ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(175, 83, "SETTINGS.REMOVE_ALL_DESCRIPTION"), "\n                ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(182, 85, "SETTINGS.REMOVE_ALL_BUTTON"), "\n                ");
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(196, 87, "SETTINGS.BACK_TO_HOME"), "\n            ");
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.settingsForm.pristine || !ctx.settingsForm.valid);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(203, 89, "SETTINGS.SAVE_CHANGES"), "\n            ");
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      KeyValuePipe,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      HeaderComponent,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatCheckboxModule,
      MatCheckbox,
      MatDividerModule,
      MatDivider,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatFormField,
      MatLabel,
      MatError,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatTooltipModule,
      MatTooltip,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      FormArrayName,
      TranslateModule,
      TranslatePipe
    ], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n  text-transform: uppercase;\n}\n.settings-container[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: calc(100vh - 140px);\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 10px;\n}\n.row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  text-align: right;\n}\n.row[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2)   mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.column[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.column[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  opacity: 0.6;\n  padding: 2px 0;\n  margin: 0;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent" });
})();
export {
  SettingsComponent
};
