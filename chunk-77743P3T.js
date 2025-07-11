import {
  CdkDropList,
  DragDropModule,
  moveItemInArray
} from "./chunk-33VEBIKZ.js";
import {
  MatListItem,
  MatListItemIcon,
  MatListItemLine,
  MatListItemTitle,
  MatListModule,
  MatNavList
} from "./chunk-4D3XHEA7.js";
import {
  NgxSkeletonLoaderComponent,
  NgxSkeletonLoaderModule
} from "./chunk-CZ6LWLN7.js";
import {
  DialogService,
  PlaylistInfoComponent
} from "./chunk-Y4JPU4RN.js";
import {
  AUTO_UPDATE_PLAYLISTS_RESPONSE,
  DELETE_ALL_PLAYLISTS,
  DataService,
  GLOBAL_FAVORITES_PLAYLIST_ID,
  IS_PLAYLISTS_MIGRATION_POSSIBLE,
  IS_PLAYLISTS_MIGRATION_POSSIBLE_RESPONSE,
  IpcCommand,
  MIGRATE_PLAYLISTS,
  MIGRATE_PLAYLISTS_RESPONSE,
  MatDialog,
  MatFormField,
  MatInput,
  MatInputModule,
  MatPrefix,
  MatSnackBar,
  PLAYLIST_UPDATE,
  PLAYLIST_UPDATE_RESPONSE,
  Router,
  Store,
  addManyPlaylists,
  removePlaylist,
  selectActiveTypeFilters,
  selectAllPlaylistsMeta,
  selectPlaylistsLoadingFlag,
  updateManyPlaylists,
  updatePlaylist,
  updatePlaylistPositions
} from "./chunk-T3L6IA2A.js";
import {
  AsyncPipe,
  BehaviorSubject,
  EventEmitter,
  MatButton,
  MatButtonModule,
  MatDividerModule,
  MatIcon,
  MatIconModule,
  NgForOf,
  NgIf,
  NgZone,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  __spreadValues,
  combineLatest,
  map,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefer,
  ɵɵdeferOnIdle,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UIAHAIJK.js";

// src/app/home/recent-playlists/recent-playlists.component.ts
var RecentPlaylistsComponent_Conditional_0_Defer_12_DepsFn = () => [
  AsyncPipe,
  CdkDropList,
  MatButton,
  MatIcon,
  MatNavList,
  MatListItem,
  MatListItemIcon,
  MatListItemLine,
  MatListItemTitle,
  NgForOf,
  NgIf,
  import("./chunk-LSYCYRCU.js").then((m) => m.PlaylistItemComponent),
  TranslatePipe
];
var _c0 = () => [];
var _c1 = () => ({ width: "30%", height: "20px" });
var _c2 = () => ({ width: "50%", height: "10px" });
function RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_mat_list_item_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-list-item");
    \u0275\u0275text(1, "\n                ");
    \u0275\u0275elementStart(2, "mat-icon", 8);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275elementStart(5, "div", 9);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n                ");
    \u0275\u0275elementStart(9, "div", 10);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(7, 2, "HOME.PLAYLISTS.NO_PLAYLISTS"), "\n                ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(11, 4, "HOME.PLAYLISTS.ADD_FIRST"), "\n                ");
  }
}
function RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_ng_template_4_app_playlist_item_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-playlist-item", 14);
    \u0275\u0275listener("editPlaylistClicked", function RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_ng_template_4_app_playlist_item_15_Template_app_playlist_item_editPlaylistClicked_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.openInfoDialog($event));
    })("playlistClicked", function RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_ng_template_4_app_playlist_item_15_Template_app_playlist_item_playlistClicked_0_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.getPlaylist(item_r8));
    })("refreshClicked", function RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_ng_template_4_app_playlist_item_15_Template_app_playlist_item_refreshClicked_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.refreshPlaylist($event));
    })("removeClicked", function RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_ng_template_4_app_playlist_item_15_Template_app_playlist_item_removeClicked_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.removeClicked($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("item", item_r8)("showActions", !ctx_r2.sidebarMode);
  }
}
function RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_ng_template_4_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, "\n                    ");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n                    ");
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275listener("click", function RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_ng_template_4_div_17_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.migratePlaylists());
    });
    \u0275\u0275text(6, "\n                        ");
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "playlist_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n                        Migrate playlists");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\xA0\n                    ");
    \u0275\u0275elementStart(11, "button", 16);
    \u0275\u0275listener("click", function RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_ng_template_4_div_17_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.deleteMigratedPlaylists());
    });
    \u0275\u0275text(12, "\n                        ");
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, "\n                ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.migrationMessage);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("\n                        ", \u0275\u0275pipeBind1(16, 2, "SETTINGS.REMOVE_DIALOG.TITLE"), "\n                    ");
  }
}
function RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "mat-list-item", 11);
    \u0275\u0275listener("click", function RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_ng_template_4_Template_mat_list_item_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.getGlobalFavorites());
    });
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "mat-icon", 8);
    \u0275\u0275text(4, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                    ");
    \u0275\u0275elementStart(6, "div", 9);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n                    ");
    \u0275\u0275elementStart(10, "div", 10);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n\n                ");
    \u0275\u0275template(15, RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_ng_template_4_app_playlist_item_15_Template, 1, 2, "app-playlist-item", 12);
    \u0275\u0275text(16, "\n\n                ");
    \u0275\u0275template(17, RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_ng_template_4_div_17_Template, 18, 4, "div", 13);
    \u0275\u0275text(18, "\n            ");
  }
  if (rf & 2) {
    const playlists_r5 = \u0275\u0275nextContext().ngIf;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\n                        ", \u0275\u0275pipeBind1(8, 5, "HOME.PLAYLISTS.GLOBAL_FAVORITES"), "\n                    ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                        ", \u0275\u0275pipeBind1(12, 7, "HOME.PLAYLISTS.GLOBAL_FAVORITES_DESCRIPTION"), "\n                    ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", playlists_r5)("ngForTrackBy", ctx_r2.trackByFn);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isMigrationPossible);
  }
}
function RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-nav-list", 6);
    \u0275\u0275listener("cdkDropListDropped", function RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_Template_mat_nav_list_cdkDropListDropped_0_listener($event) {
      const playlists_r5 = \u0275\u0275restoreView(_r4).ngIf;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.drop($event, playlists_r5));
    });
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275template(2, RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_mat_list_item_2_Template, 13, 6, "mat-list-item", 7);
    \u0275\u0275text(3, "\n\n            ");
    \u0275\u0275template(4, RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_ng_template_4_Template, 19, 9, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275text(6, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const playlists_r5 = ctx.ngIf;
    const playlistsTemplate_r10 = \u0275\u0275reference(5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", playlists_r5.length === 0)("ngIfElse", playlistsTemplate_r10);
  }
}
function RecentPlaylistsComponent_Conditional_0_Defer_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275template(1, RecentPlaylistsComponent_Conditional_0_Defer_10_mat_nav_list_1_Template, 7, 2, "mat-nav-list", 5);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275text(3, "\n    ");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r2.playlists$));
  }
}
function RecentPlaylistsComponent_Conditional_0_DeferPlaceholder_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, "\n                ");
    \u0275\u0275element(2, "ngx-skeleton-loader", 20);
    \u0275\u0275text(3, "\n                ");
    \u0275\u0275elementStart(4, "div", 21);
    \u0275\u0275text(5, "\n                    ");
    \u0275\u0275element(6, "ngx-skeleton-loader", 22);
    \u0275\u0275text(7, "\n                    ");
    \u0275\u0275element(8, "ngx-skeleton-loader", 22);
    \u0275\u0275text(9, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, "\n                ");
    \u0275\u0275elementStart(11, "div", 23);
    \u0275\u0275text(12, "\n                    ");
    \u0275\u0275element(13, "ngx-skeleton-loader", 24);
    \u0275\u0275text(14, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("theme", \u0275\u0275pureFunction0(2, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275property("theme", \u0275\u0275pureFunction0(3, _c2));
  }
}
function RecentPlaylistsComponent_Conditional_0_DeferPlaceholder_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275template(3, RecentPlaylistsComponent_Conditional_0_DeferPlaceholder_11_div_3_Template, 16, 4, "div", 18);
    \u0275\u0275text(4, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n    ");
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0).constructor(10));
  }
}
function RecentPlaylistsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "mat-form-field", 2);
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275elementStart(3, "mat-icon", 3);
    \u0275\u0275text(4, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n        ");
    \u0275\u0275elementStart(6, "input", 4, 0);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("input", function RecentPlaylistsComponent_Conditional_0_Template_input_input_6_listener() {
      \u0275\u0275restoreView(_r1);
      const searchQuery_r2 = \u0275\u0275reference(7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSearchQueryUpdate(searchQuery_r2.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275text(9, "\n    ");
    \u0275\u0275template(10, RecentPlaylistsComponent_Conditional_0_Defer_10_Template, 4, 3)(11, RecentPlaylistsComponent_Conditional_0_DeferPlaceholder_11_Template, 6, 2);
    \u0275\u0275defer(12, 10, RecentPlaylistsComponent_Conditional_0_Defer_12_DepsFn, null, 11);
    \u0275\u0275deferOnIdle();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 1, "HOME.PLAYLISTS.SEARCH_PLAYLISTS"));
  }
}
var RecentPlaylistsComponent = class _RecentPlaylistsComponent {
  constructor(dialog, dialogService, electronService, ngZone, router, snackBar, store, translate) {
    this.dialog = dialog;
    this.dialogService = dialogService;
    this.electronService = electronService;
    this.ngZone = ngZone;
    this.router = router;
    this.snackBar = snackBar;
    this.store = store;
    this.translate = translate;
    this.searchQuery = new BehaviorSubject("");
    this.playlists$ = combineLatest([
      this.store.select(selectAllPlaylistsMeta),
      this.searchQuery,
      // eslint-disable-next-line @ngrx/avoid-combining-selectors
      this.store.select(selectActiveTypeFilters)
    ]).pipe(map(([playlists, searchQuery, filters]) => playlists.filter((item) => {
      const isStalkerFilter = item.macAddress && filters.includes("stalker");
      const isXtreamFilter = item.username && item.password && item.serverUrl && filters.includes("xtream");
      const isM3uFilter = !item.username && !item.password && !item.serverUrl && !item.macAddress && filters.includes("m3u");
      return isStalkerFilter && filters.includes("stalker") || isXtreamFilter && filters.includes("xtream") || isM3uFilter && filters.includes("m3u");
    }).filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase())).sort((a, b) => a.position - b.position)));
    this.allPlaylistsLoaded = this.store.selectSignal(selectPlaylistsLoadingFlag);
    this.sidebarMode = false;
    this.playlistClicked = new EventEmitter();
    this.commandsList = [
      new IpcCommand(PLAYLIST_UPDATE_RESPONSE, (response) => {
        this.snackBar.open(response.message, null, { duration: 2e3 });
        this.store.dispatch(updatePlaylist({
          playlistId: response.playlist._id,
          playlist: response.playlist
        }));
      }),
      new IpcCommand(IS_PLAYLISTS_MIGRATION_POSSIBLE_RESPONSE, (response) => {
        this.isMigrationPossible = response.result;
        this.migrationMessage = response.message || "";
      }),
      new IpcCommand(MIGRATE_PLAYLISTS_RESPONSE, (response) => {
        this.store.dispatch(addManyPlaylists({
          playlists: response.payload
        }));
        this.snackBar.open(`${response.payload.length} playlists were successfully migrated`, null, { duration: 2e3 });
      }),
      new IpcCommand(AUTO_UPDATE_PLAYLISTS_RESPONSE, (playlists) => {
        this.store.dispatch(updateManyPlaylists({
          playlists
        }));
      })
    ];
    this.isMigrationPossible = false;
    this.migrationMessage = "";
  }
  ngOnInit() {
    this.setRendererListeners();
    if (this.electronService.isElectron) {
      this.electronService.sendIpcEvent(IS_PLAYLISTS_MIGRATION_POSSIBLE);
    }
  }
  /**
   * Set electrons main process listeners
   */
  setRendererListeners() {
    this.commandsList.forEach((command) => {
      if (this.electronService.isElectron) {
        this.electronService.listenOn(command.id, (event, response) => this.ngZone.run(() => command.callback(response)));
      }
    });
  }
  /**
   * Opens the details dialog with the information about the provided playlist
   * @param data selected playlist
   */
  openInfoDialog(data) {
    this.dialog.open(PlaylistInfoComponent, {
      data
    });
  }
  /**
   * Drop event handler - applies the new sort order to the playlists array
   * @param event drop event
   */
  drop(event, playlists) {
    moveItemInArray(playlists, event.previousIndex, event.currentIndex);
    this.store.dispatch(updatePlaylistPositions({
      positionUpdates: playlists.map((item, index) => ({
        id: item._id,
        changes: { position: index }
      }))
    }));
  }
  getGlobalFavorites() {
    this.router.navigate(["playlists", GLOBAL_FAVORITES_PLAYLIST_ID]);
    this.playlistClicked.emit(GLOBAL_FAVORITES_PLAYLIST_ID);
  }
  getPlaylist(playlistMeta) {
    if (playlistMeta.serverUrl) {
      this.router.navigate(["xtreams", playlistMeta._id]);
    } else if (playlistMeta.macAddress) {
      this.router.navigate(["portals", playlistMeta._id]);
    } else {
      this.router.navigate(["playlists", playlistMeta._id]);
      this.playlistClicked.emit(playlistMeta._id);
    }
  }
  /**
   * Triggers on remove click
   * @param playlistId playlist id to remove
   */
  removeClicked(playlistId) {
    this.dialogService.openConfirmDialog({
      title: this.translate.instant("HOME.PLAYLISTS.REMOVE_DIALOG.TITLE"),
      message: this.translate.instant("HOME.PLAYLISTS.REMOVE_DIALOG.MESSAGE"),
      onConfirm: () => this.removePlaylist(playlistId)
    });
  }
  /**
   * Removes the provided playlist from the database
   * @param playlistId playlist id to remove
   */
  removePlaylist(playlistId) {
    this.store.dispatch(removePlaylist({ playlistId }));
  }
  /**
   * Sends an IPC event with the playlist details to the main process to trigger the refresh operation
   * @param item playlist to update
   */
  refreshPlaylist(item) {
    this.electronService.sendIpcEvent(PLAYLIST_UPDATE, __spreadValues({
      id: item._id,
      title: item.title
    }, item.url ? { url: item.url } : { filePath: item.filePath }));
  }
  migratePlaylists() {
    this.electronService.sendIpcEvent(MIGRATE_PLAYLISTS);
  }
  deleteMigratedPlaylists() {
    this.electronService.sendIpcEvent(DELETE_ALL_PLAYLISTS);
  }
  /**
   * Removes command listeners on component destroy
   */
  ngOnDestroy() {
    if (this.electronService.isElectron) {
      this.commandsList.forEach((command) => this.electronService.removeAllListeners(command.id));
    }
  }
  trackByFn(_index, item) {
    return item._id;
  }
  onSearchQueryUpdate(searchQuery) {
    this.searchQuery.next(searchQuery);
  }
  static {
    this.\u0275fac = function RecentPlaylistsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RecentPlaylistsComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(DialogService), \u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(Store), \u0275\u0275directiveInject(TranslateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecentPlaylistsComponent, selectors: [["app-recent-playlists"]], inputs: { sidebarMode: "sidebarMode" }, outputs: { playlistClicked: "playlistClicked" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["searchQuery", ""], ["playlistsTemplate", ""], ["subscriptSizing", "dynamic", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "type", "search", 3, "input", "placeholder"], ["cdkDropList", "", "class", "playlists-list", 3, "cdkDropListDropped", 4, "ngIf"], ["cdkDropList", "", 1, "playlists-list", 3, "cdkDropListDropped"], [4, "ngIf", "ngIfElse"], ["matListItemIcon", "", 1, "favorites-icon"], ["matListItemTitle", ""], ["matListItemLine", "", 1, "meta"], [3, "click"], [3, "item", "showActions", "editPlaylistClicked", "playlistClicked", "refreshClicked", "removeClicked", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "migration-container", 4, "ngIf"], [3, "editPlaylistClicked", "playlistClicked", "refreshClicked", "removeClicked", "item", "showActions"], ["id", "migration-container"], ["mat-button", "", "color", "accent", 1, "migration-btn", 3, "click"], ["id", "skeleton-container"], ["class", "skeleton-item", 4, "ngFor", "ngForOf"], [1, "skeleton-item"], ["count", "1", "appearance", "circle"], [1, "text"], ["count", "1", 3, "theme"], [1, "actions"], ["count", "2", "appearance", "circle"]], template: function RecentPlaylistsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, RecentPlaylistsComponent_Conditional_0_Template, 14, 3);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.allPlaylistsLoaded() ? 0 : -1);
      }
    }, dependencies: [
      DragDropModule,
      MatButtonModule,
      MatDividerModule,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatFormField,
      MatPrefix,
      MatListModule,
      NgForOf,
      NgxSkeletonLoaderModule,
      NgxSkeletonLoaderComponent,
      TranslateModule,
      TranslatePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.mat-list-base[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n.playlists-list[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 100%;\n}\n.search-field[_ngcontent-%COMP%] {\n  width: 96%;\n  margin: 10px 0;\n}\n.meta[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  color: #666;\n  margin-top: 2px !important;\n}\n  div[matformfieldlineripple] {\n  display: none;\n}\n  .search-field > .mat-mdc-text-field-wrapper {\n  border-radius: 30px;\n}\n  .cdk-drag-preview .mat-list-item-content {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 0 16px;\n  position: relative;\n  height: inherit;\n  width: 100%;\n  justify-content: space-between;\n}\n  .cdk-drag-preview .mat-list-item-content .mat-list-text {\n  display: flex;\n  flex-direction: column;\n  flex: auto;\n  box-sizing: border-box;\n  overflow: hidden;\n  padding-left: 16px;\n}\n.favorites-icon[_ngcontent-%COMP%] {\n  padding-left: 36px;\n}\n#skeleton-container[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  width: 100%;\n}\n#skeleton-container[_ngcontent-%COMP%]   .skeleton-item[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0 20px;\n  height: 72px;\n}\n#skeleton-container[_ngcontent-%COMP%]   .skeleton-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  flex: 1;\n  align-self: center;\n  padding-left: 6px;\n  flex-direction: column;\n  display: flex;\n}\n#migration-container[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #999;\n  border-radius: 5px;\n  margin: 5px;\n}\n#migration-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n#migration-container[_ngcontent-%COMP%]   .migration-btn[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n@media (max-width: 599px) {\n  .favorites-icon[_ngcontent-%COMP%] {\n    padding-left: 0 !important;\n  }\n  .search-field[_ngcontent-%COMP%] {\n    --mat-form-field-container-height: 48px;\n    --mat-form-field-filled-label-display: none;\n    --mat-form-field-container-vertical-padding: 12px;\n    --mat-form-field-filled-with-label-container-padding-top: 12px;\n    --mat-form-field-filled-with-label-container-padding-bottom: 12px;\n  }\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecentPlaylistsComponent, { className: "RecentPlaylistsComponent" });
})();

export {
  RecentPlaylistsComponent
};
