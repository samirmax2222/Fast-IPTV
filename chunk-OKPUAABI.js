import {
  HtmlVideoPlayerComponent,
  VjsPlayerComponent
} from "./chunk-R3UJABRW.js";
import {
  FilterPipe
} from "./chunk-G3O2MXPG.js";
import {
  STORE_KEY,
  StorageMap,
  VideoPlayer
} from "./chunk-IF63ICDL.js";
import {
  DialogService,
  PlaylistInfoComponent
} from "./chunk-Y4JPU4RN.js";
import {
  ActivatedRoute,
  MAT_DIALOG_DATA,
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardModule,
  MatCheckbox,
  MatCheckboxModule,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatPrefix,
  MatSnackBar,
  PlaylistsService,
  Router,
  RouterLink,
  Store,
  getExtensionFromUrl,
  removePlaylist,
  selectCurrentPlaylist,
  toSignal
} from "./chunk-T3L6IA2A.js";
import {
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  DOCUMENT,
  DOWN_ARROW,
  DefaultValueAccessor,
  Directionality,
  Directive,
  DomSanitizer,
  EMPTY,
  ENTER,
  ElementRef,
  EventEmitter,
  FocusMonitor,
  FormsModule,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  LEFT_ARROW,
  MatButton,
  MatButtonModule,
  MatCommonModule,
  MatIcon,
  MatIconButton,
  MatIconModule,
  MatPseudoCheckbox,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgModule,
  NgOptimizedImage,
  NgZone,
  Observable,
  Optional,
  Output,
  RIGHT_ARROW,
  ReplaySubject,
  SPACE,
  SelectionModel,
  Subject,
  Subscription,
  TranslateModule,
  TranslatePipe,
  TranslateService,
  UP_ARROW,
  ViewChild,
  ViewEncapsulation$1,
  __spreadProps,
  __spreadValues,
  asapScheduler,
  booleanAttribute,
  catchError,
  combineLatest,
  computed,
  debounceTime,
  distinctUntilChanged,
  effect,
  forwardRef,
  inject,
  input,
  isDevMode,
  isObservable,
  map,
  observeOn,
  of,
  queueScheduler,
  scheduled,
  setClassMetadata,
  shareReplay,
  take,
  takeUntil,
  tap,
  throwError,
  withLatestFrom,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-UIAHAIJK.js";

// node_modules/.pnpm/@angular+material@18.2.1_@angular+animations@18.2.1_@angular+cdk@18.2.1_@angular+common@18.2._5t5ybbbshwwmxbsatflxvaci5a/node_modules/@angular/material/fesm2022/button-toggle.mjs
var _c0 = ["button"];
var _c1 = ["*"];
function MatButtonToggle_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-pseudo-checkbox", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.disabled);
  }
}
function MatButtonToggle_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-pseudo-checkbox", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.disabled);
  }
}
var MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", {
  providedIn: "root",
  factory: MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY
});
function MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY() {
  return {
    hideSingleSelectionIndicator: false,
    hideMultipleSelectionIndicator: false,
    disabledInteractive: false
  };
}
var MAT_BUTTON_TOGGLE_GROUP = new InjectionToken("MatButtonToggleGroup");
var MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatButtonToggleGroup),
  multi: true
};
var uniqueIdCounter = 0;
var MatButtonToggleChange = class {
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MatButtonToggleGroup = class _MatButtonToggleGroup {
  /** `name` attribute for the underlying `input` element. */
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this._markButtonsForCheck();
  }
  /** Value of the toggle group. */
  get value() {
    const selected = this._selectionModel ? this._selectionModel.selected : [];
    if (this.multiple) {
      return selected.map((toggle) => toggle.value);
    }
    return selected[0] ? selected[0].value : void 0;
  }
  set value(newValue) {
    this._setSelectionByValue(newValue);
    this.valueChange.emit(this.value);
  }
  /** Selected button toggles in the group. */
  get selected() {
    const selected = this._selectionModel ? this._selectionModel.selected : [];
    return this.multiple ? selected : selected[0] || null;
  }
  /** Whether multiple button toggles can be selected. */
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    this._multiple = value;
    this._markButtonsForCheck();
  }
  /** Whether multiple button toggle group is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._markButtonsForCheck();
  }
  /** Whether buttons in the group should be interactive while they're disabled. */
  get disabledInteractive() {
    return this._disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
    this._markButtonsForCheck();
  }
  /** The layout direction of the toggle button group. */
  get dir() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Whether checkmark indicator for single-selection button toggle groups is hidden. */
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._markButtonsForCheck();
  }
  /** Whether checkmark indicator for multiple-selection button toggle groups is hidden. */
  get hideMultipleSelectionIndicator() {
    return this._hideMultipleSelectionIndicator;
  }
  set hideMultipleSelectionIndicator(value) {
    this._hideMultipleSelectionIndicator = value;
    this._markButtonsForCheck();
  }
  constructor(_changeDetector, defaultOptions, _dir) {
    this._changeDetector = _changeDetector;
    this._dir = _dir;
    this._multiple = false;
    this._disabled = false;
    this._disabledInteractive = false;
    this._controlValueAccessorChangeFn = () => {
    };
    this._onTouched = () => {
    };
    this._name = `mat-button-toggle-group-${uniqueIdCounter++}`;
    this.valueChange = new EventEmitter();
    this.change = new EventEmitter();
    this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : "standard";
    this.hideSingleSelectionIndicator = defaultOptions?.hideSingleSelectionIndicator ?? false;
    this.hideMultipleSelectionIndicator = defaultOptions?.hideMultipleSelectionIndicator ?? false;
  }
  ngOnInit() {
    this._selectionModel = new SelectionModel(this.multiple, void 0, false);
  }
  ngAfterContentInit() {
    this._selectionModel.select(...this._buttonToggles.filter((toggle) => toggle.checked));
    if (!this.multiple) {
      this._initializeTabIndex();
    }
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value Value to be set to the model.
   */
  writeValue(value) {
    this.value = value;
    this._changeDetector.markForCheck();
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  /** Handle keydown event calling to single-select button toggle. */
  _keydown(event) {
    if (this.multiple || this.disabled) {
      return;
    }
    const target = event.target;
    const buttonId = target.id;
    const index = this._buttonToggles.toArray().findIndex((toggle) => {
      return toggle.buttonId === buttonId;
    });
    let nextButton = null;
    switch (event.keyCode) {
      case SPACE:
      case ENTER:
        nextButton = this._buttonToggles.get(index) || null;
        break;
      case UP_ARROW:
        nextButton = this._getNextButton(index, -1);
        break;
      case LEFT_ARROW:
        nextButton = this._getNextButton(index, this.dir === "ltr" ? -1 : 1);
        break;
      case DOWN_ARROW:
        nextButton = this._getNextButton(index, 1);
        break;
      case RIGHT_ARROW:
        nextButton = this._getNextButton(index, this.dir === "ltr" ? 1 : -1);
        break;
      default:
        return;
    }
    if (nextButton) {
      event.preventDefault();
      nextButton._onButtonClick();
      nextButton.focus();
    }
  }
  /** Dispatch change event with current selection and group value. */
  _emitChangeEvent(toggle) {
    const event = new MatButtonToggleChange(toggle, this.value);
    this._rawValue = event.value;
    this._controlValueAccessorChangeFn(event.value);
    this.change.emit(event);
  }
  /**
   * Syncs a button toggle's selected state with the model value.
   * @param toggle Toggle to be synced.
   * @param select Whether the toggle should be selected.
   * @param isUserInput Whether the change was a result of a user interaction.
   * @param deferEvents Whether to defer emitting the change events.
   */
  _syncButtonToggle(toggle, select, isUserInput = false, deferEvents = false) {
    if (!this.multiple && this.selected && !toggle.checked) {
      this.selected.checked = false;
    }
    if (this._selectionModel) {
      if (select) {
        this._selectionModel.select(toggle);
      } else {
        this._selectionModel.deselect(toggle);
      }
    } else {
      deferEvents = true;
    }
    if (deferEvents) {
      Promise.resolve().then(() => this._updateModelValue(toggle, isUserInput));
    } else {
      this._updateModelValue(toggle, isUserInput);
    }
  }
  /** Checks whether a button toggle is selected. */
  _isSelected(toggle) {
    return this._selectionModel && this._selectionModel.isSelected(toggle);
  }
  /** Determines whether a button toggle should be checked on init. */
  _isPrechecked(toggle) {
    if (typeof this._rawValue === "undefined") {
      return false;
    }
    if (this.multiple && Array.isArray(this._rawValue)) {
      return this._rawValue.some((value) => toggle.value != null && value === toggle.value);
    }
    return toggle.value === this._rawValue;
  }
  /** Initializes the tabindex attribute using the radio pattern. */
  _initializeTabIndex() {
    this._buttonToggles.forEach((toggle) => {
      toggle.tabIndex = -1;
    });
    if (this.selected) {
      this.selected.tabIndex = 0;
    } else {
      for (let i = 0; i < this._buttonToggles.length; i++) {
        const toggle = this._buttonToggles.get(i);
        if (!toggle.disabled) {
          toggle.tabIndex = 0;
          break;
        }
      }
    }
    this._markButtonsForCheck();
  }
  /** Obtain the subsequent toggle to which the focus shifts. */
  _getNextButton(startIndex, offset) {
    const items = this._buttonToggles;
    for (let i = 1; i <= items.length; i++) {
      const index = (startIndex + offset * i + items.length) % items.length;
      const item = items.get(index);
      if (item && !item.disabled) {
        return item;
      }
    }
    return null;
  }
  /** Updates the selection state of the toggles in the group based on a value. */
  _setSelectionByValue(value) {
    this._rawValue = value;
    if (!this._buttonToggles) {
      return;
    }
    if (this.multiple && value) {
      if (!Array.isArray(value) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("Value must be an array in multiple-selection mode.");
      }
      this._clearSelection();
      value.forEach((currentValue) => this._selectValue(currentValue));
    } else {
      this._clearSelection();
      this._selectValue(value);
    }
  }
  /** Clears the selected toggles. */
  _clearSelection() {
    this._selectionModel.clear();
    this._buttonToggles.forEach((toggle) => {
      toggle.checked = false;
      if (!this.multiple) {
        toggle.tabIndex = -1;
      }
    });
  }
  /** Selects a value if there's a toggle that corresponds to it. */
  _selectValue(value) {
    const correspondingOption = this._buttonToggles.find((toggle) => {
      return toggle.value != null && toggle.value === value;
    });
    if (correspondingOption) {
      correspondingOption.checked = true;
      this._selectionModel.select(correspondingOption);
      if (!this.multiple) {
        correspondingOption.tabIndex = 0;
      }
    }
  }
  /** Syncs up the group's value with the model and emits the change event. */
  _updateModelValue(toggle, isUserInput) {
    if (isUserInput) {
      this._emitChangeEvent(toggle);
    }
    this.valueChange.emit(this.value);
  }
  /** Marks all of the child button toggles to be checked. */
  _markButtonsForCheck() {
    this._buttonToggles?.forEach((toggle) => toggle._markForCheck());
  }
  static {
    this.\u0275fac = function MatButtonToggleGroup_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatButtonToggleGroup)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, 8), \u0275\u0275directiveInject(Directionality, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatButtonToggleGroup,
      selectors: [["mat-button-toggle-group"]],
      contentQueries: function MatButtonToggleGroup_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          \u0275\u0275contentQuery(dirIndex, MatButtonToggle, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._buttonToggles = _t);
        }
      },
      hostAttrs: [1, "mat-button-toggle-group"],
      hostVars: 6,
      hostBindings: function MatButtonToggleGroup_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("keydown", function MatButtonToggleGroup_keydown_HostBindingHandler($event) {
            return ctx._keydown($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("role", ctx.multiple ? "group" : "radiogroup")("aria-disabled", ctx.disabled);
          \u0275\u0275classProp("mat-button-toggle-vertical", ctx.vertical)("mat-button-toggle-group-appearance-standard", ctx.appearance === "standard");
        }
      },
      inputs: {
        appearance: "appearance",
        name: "name",
        vertical: [2, "vertical", "vertical", booleanAttribute],
        value: "value",
        multiple: [2, "multiple", "multiple", booleanAttribute],
        disabled: [2, "disabled", "disabled", booleanAttribute],
        disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute],
        hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute],
        hideMultipleSelectionIndicator: [2, "hideMultipleSelectionIndicator", "hideMultipleSelectionIndicator", booleanAttribute]
      },
      outputs: {
        valueChange: "valueChange",
        change: "change"
      },
      exportAs: ["matButtonToggleGroup"],
      standalone: true,
      features: [\u0275\u0275ProvidersFeature([MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
        provide: MAT_BUTTON_TOGGLE_GROUP,
        useExisting: _MatButtonToggleGroup
      }]), \u0275\u0275InputTransformsFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggleGroup, [{
    type: Directive,
    args: [{
      selector: "mat-button-toggle-group",
      providers: [MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
        provide: MAT_BUTTON_TOGGLE_GROUP,
        useExisting: MatButtonToggleGroup
      }],
      host: {
        "class": "mat-button-toggle-group",
        "(keydown)": "_keydown($event)",
        "[attr.role]": "multiple ? 'group' : 'radiogroup'",
        "[attr.aria-disabled]": "disabled",
        "[class.mat-button-toggle-vertical]": "vertical",
        "[class.mat-button-toggle-group-appearance-standard]": 'appearance === "standard"'
      },
      exportAs: "matButtonToggleGroup",
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    _buttonToggles: [{
      type: ContentChildren,
      args: [forwardRef(() => MatButtonToggle), {
        // Note that this would technically pick up toggles
        // from nested groups, but that's not a case that we support.
        descendants: true
      }]
    }],
    appearance: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    vertical: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    hideSingleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideMultipleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatButtonToggle = class _MatButtonToggle {
  /** Unique ID for the underlying `button` element. */
  get buttonId() {
    return `${this.id}-button`;
  }
  /** Tabindex of the toggle. */
  get tabIndex() {
    return this._tabIndex;
  }
  set tabIndex(value) {
    this._tabIndex = value;
    this._markForCheck();
  }
  /** The appearance style of the button. */
  get appearance() {
    return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
  }
  set appearance(value) {
    this._appearance = value;
  }
  /** Whether the button is checked. */
  get checked() {
    return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
  }
  set checked(value) {
    if (value !== this._checked) {
      this._checked = value;
      if (this.buttonToggleGroup) {
        this.buttonToggleGroup._syncButtonToggle(this, this._checked);
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Whether the button is disabled. */
  get disabled() {
    return this._disabled || this.buttonToggleGroup && this.buttonToggleGroup.disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  /** Whether the button should remain interactive when it is disabled. */
  get disabledInteractive() {
    return this._disabledInteractive || this.buttonToggleGroup !== null && this.buttonToggleGroup.disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
  }
  constructor(toggleGroup, _changeDetectorRef, _elementRef, _focusMonitor, defaultTabIndex, defaultOptions) {
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._focusMonitor = _focusMonitor;
    this._checked = false;
    this.ariaLabelledby = null;
    this._disabled = false;
    this.change = new EventEmitter();
    const parsedTabIndex = Number(defaultTabIndex);
    this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
    this.buttonToggleGroup = toggleGroup;
    this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : "standard";
    this.disabledInteractive = defaultOptions?.disabledInteractive ?? false;
  }
  ngOnInit() {
    const group = this.buttonToggleGroup;
    this.id = this.id || `mat-button-toggle-${uniqueIdCounter++}`;
    if (group) {
      if (group._isPrechecked(this)) {
        this.checked = true;
      } else if (group._isSelected(this) !== this._checked) {
        group._syncButtonToggle(this, this._checked);
      }
    }
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._elementRef, true);
  }
  ngOnDestroy() {
    const group = this.buttonToggleGroup;
    this._focusMonitor.stopMonitoring(this._elementRef);
    if (group && group._isSelected(this)) {
      group._syncButtonToggle(this, false, false, true);
    }
  }
  /** Focuses the button. */
  focus(options) {
    this._buttonElement.nativeElement.focus(options);
  }
  /** Checks the button toggle due to an interaction with the underlying native button. */
  _onButtonClick() {
    if (this.disabled) {
      return;
    }
    const newChecked = this.isSingleSelector() ? true : !this._checked;
    if (newChecked !== this._checked) {
      this._checked = newChecked;
      if (this.buttonToggleGroup) {
        this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);
        this.buttonToggleGroup._onTouched();
      }
    }
    if (this.isSingleSelector()) {
      const focusable = this.buttonToggleGroup._buttonToggles.find((toggle) => {
        return toggle.tabIndex === 0;
      });
      if (focusable) {
        focusable.tabIndex = -1;
      }
      this.tabIndex = 0;
    }
    this.change.emit(new MatButtonToggleChange(this, this.value));
  }
  /**
   * Marks the button toggle as needing checking for change detection.
   * This method is exposed because the parent button toggle group will directly
   * update bound properties of the radio button.
   */
  _markForCheck() {
    this._changeDetectorRef.markForCheck();
  }
  /** Gets the name that should be assigned to the inner DOM node. */
  _getButtonName() {
    if (this.isSingleSelector()) {
      return this.buttonToggleGroup.name;
    }
    return this.name || null;
  }
  /** Whether the toggle is in single selection mode. */
  isSingleSelector() {
    return this.buttonToggleGroup && !this.buttonToggleGroup.multiple;
  }
  static {
    this.\u0275fac = function MatButtonToggle_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatButtonToggle)(\u0275\u0275directiveInject(MAT_BUTTON_TOGGLE_GROUP, 8), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FocusMonitor), \u0275\u0275injectAttribute("tabindex"), \u0275\u0275directiveInject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatButtonToggle,
      selectors: [["mat-button-toggle"]],
      viewQuery: function MatButtonToggle_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(_c0, 5);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._buttonElement = _t.first);
        }
      },
      hostAttrs: ["role", "presentation", 1, "mat-button-toggle"],
      hostVars: 14,
      hostBindings: function MatButtonToggle_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("focus", function MatButtonToggle_focus_HostBindingHandler() {
            return ctx.focus();
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("aria-label", null)("aria-labelledby", null)("id", ctx.id)("name", null);
          \u0275\u0275classProp("mat-button-toggle-standalone", !ctx.buttonToggleGroup)("mat-button-toggle-checked", ctx.checked)("mat-button-toggle-disabled", ctx.disabled)("mat-button-toggle-disabled-interactive", ctx.disabledInteractive)("mat-button-toggle-appearance-standard", ctx.appearance === "standard");
        }
      },
      inputs: {
        ariaLabel: [0, "aria-label", "ariaLabel"],
        ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
        id: "id",
        name: "name",
        value: "value",
        tabIndex: "tabIndex",
        disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
        appearance: "appearance",
        checked: [2, "checked", "checked", booleanAttribute],
        disabled: [2, "disabled", "disabled", booleanAttribute],
        disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
      },
      outputs: {
        change: "change"
      },
      exportAs: ["matButtonToggle"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      ngContentSelectors: _c1,
      decls: 8,
      vars: 14,
      consts: [["button", ""], ["type", "button", 1, "mat-button-toggle-button", "mat-focus-indicator", 3, "click", "id", "disabled"], [1, "mat-button-toggle-label-content"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled"], [1, "mat-button-toggle-focus-overlay"], ["matRipple", "", 1, "mat-button-toggle-ripple", 3, "matRippleTrigger", "matRippleDisabled"]],
      template: function MatButtonToggle_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = \u0275\u0275getCurrentView();
          \u0275\u0275projectionDef();
          \u0275\u0275elementStart(0, "button", 1, 0);
          \u0275\u0275listener("click", function MatButtonToggle_Template_button_click_0_listener() {
            \u0275\u0275restoreView(_r1);
            return \u0275\u0275resetView(ctx._onButtonClick());
          });
          \u0275\u0275elementStart(2, "span", 2);
          \u0275\u0275template(3, MatButtonToggle_Conditional_3_Template, 1, 1, "mat-pseudo-checkbox", 3)(4, MatButtonToggle_Conditional_4_Template, 1, 1, "mat-pseudo-checkbox", 3);
          \u0275\u0275projection(5);
          \u0275\u0275elementEnd()();
          \u0275\u0275element(6, "span", 4)(7, "span", 5);
        }
        if (rf & 2) {
          const button_r3 = \u0275\u0275reference(1);
          \u0275\u0275property("id", ctx.buttonId)("disabled", ctx.disabled && !ctx.disabledInteractive || null);
          \u0275\u0275attribute("role", ctx.isSingleSelector() ? "radio" : "button")("tabindex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex)("aria-pressed", !ctx.isSingleSelector() ? ctx.checked : null)("aria-checked", ctx.isSingleSelector() ? ctx.checked : null)("name", ctx._getButtonName())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
          \u0275\u0275advance(3);
          \u0275\u0275conditional(ctx.buttonToggleGroup && ctx.checked && !ctx.buttonToggleGroup.multiple && !ctx.buttonToggleGroup.hideSingleSelectionIndicator ? 3 : -1);
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.buttonToggleGroup && ctx.checked && ctx.buttonToggleGroup.multiple && !ctx.buttonToggleGroup.hideMultipleSelectionIndicator ? 4 : -1);
          \u0275\u0275advance(3);
          \u0275\u0275property("matRippleTrigger", button_r3)("matRippleDisabled", ctx.disableRipple || ctx.disabled);
        }
      },
      dependencies: [MatRipple, MatPseudoCheckbox],
      styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);transform:translateZ(0);border-radius:var(--mat-legacy-button-toggle-shape)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-standard-button-toggle-shape, var(--mat-app-corner-full));border:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-app-outline))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-standard-button-toggle-selected-state-text-color, var(--mat-app-on-secondary-container))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-legacy-button-toggle-text-color);font-family:var(--mat-legacy-button-toggle-label-text-font);font-size:var(--mat-legacy-button-toggle-label-text-size);line-height:var(--mat-legacy-button-toggle-label-text-line-height);font-weight:var(--mat-legacy-button-toggle-label-text-weight);letter-spacing:var(--mat-legacy-button-toggle-label-text-tracking);--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-legacy-button-toggle-selected-state-text-color)}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-legacy-button-toggle-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle .mat-pseudo-checkbox{margin-right:12px}[dir=rtl] .mat-button-toggle .mat-pseudo-checkbox{margin-right:0;margin-left:12px}.mat-button-toggle-checked{color:var(--mat-legacy-button-toggle-selected-state-text-color);background-color:var(--mat-legacy-button-toggle-selected-state-background-color)}.mat-button-toggle-disabled{pointer-events:none;color:var(--mat-legacy-button-toggle-disabled-state-text-color);background-color:var(--mat-legacy-button-toggle-disabled-state-background-color);--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var(--mat-legacy-button-toggle-disabled-state-text-color)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-legacy-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-disabled-interactive{pointer-events:auto}.mat-button-toggle-appearance-standard{color:var(--mat-standard-button-toggle-text-color, var(--mat-app-on-surface));background-color:var(--mat-standard-button-toggle-background-color);font-family:var(--mat-standard-button-toggle-label-text-font, var(--mat-app-label-large-font));font-size:var(--mat-standard-button-toggle-label-text-size, var(--mat-app-label-large-size));line-height:var(--mat-standard-button-toggle-label-text-line-height, var(--mat-app-label-large-line-height));font-weight:var(--mat-standard-button-toggle-label-text-weight, var(--mat-app-label-large-weight));letter-spacing:var(--mat-standard-button-toggle-label-text-tracking, var(--mat-app-label-large-tracking))}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-app-outline))}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-app-outline))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-app-outline))}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-selected-state-text-color, var(--mat-app-on-secondary-container));background-color:var(--mat-standard-button-toggle-selected-state-background-color, var(--mat-app-secondary-container))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-standard-button-toggle-disabled-state-text-color);background-color:var(--mat-standard-button-toggle-disabled-state-background-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var(--mat-standard-button-toggle-disabled-selected-state-text-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-disabled-selected-state-text-color);background-color:var(--mat-standard-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-standard-button-toggle-state-layer-color, var(--mat-app-on-surface))}.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}@media(hover: none){.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-legacy-button-toggle-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-standard-button-toggle-height)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-legacy-button-toggle-state-layer-color)}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius:var(--mat-standard-button-toggle-shape, var(--mat-app-corner-full))}.mat-button-toggle-group-appearance-standard .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-app-corner-full));border-bottom-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-app-corner-full))}.mat-button-toggle-group-appearance-standard .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-app-corner-full));border-bottom-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-app-corner-full))}"],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggle, [{
    type: Component,
    args: [{
      selector: "mat-button-toggle",
      encapsulation: ViewEncapsulation$1.None,
      exportAs: "matButtonToggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.mat-button-toggle-standalone]": "!buttonToggleGroup",
        "[class.mat-button-toggle-checked]": "checked",
        "[class.mat-button-toggle-disabled]": "disabled",
        "[class.mat-button-toggle-disabled-interactive]": "disabledInteractive",
        "[class.mat-button-toggle-appearance-standard]": 'appearance === "standard"',
        "class": "mat-button-toggle",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.id]": "id",
        "[attr.name]": "null",
        "(focus)": "focus()",
        "role": "presentation"
      },
      standalone: true,
      imports: [MatRipple, MatPseudoCheckbox],
      template: `<button #button class="mat-button-toggle-button mat-focus-indicator"
        type="button"
        [id]="buttonId"
        [attr.role]="isSingleSelector() ? 'radio' : 'button'"
        [attr.tabindex]="disabled && !disabledInteractive ? -1 : tabIndex"
        [attr.aria-pressed]="!isSingleSelector() ? checked : null"
        [attr.aria-checked]="isSingleSelector() ? checked : null"
        [disabled]="(disabled && !disabledInteractive) || null"
        [attr.name]="_getButtonName()"
        [attr.aria-label]="ariaLabel"
        [attr.aria-labelledby]="ariaLabelledby"
        [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
        (click)="_onButtonClick()">
  <span class="mat-button-toggle-label-content">
    <!-- Render checkmark at the beginning for single-selection. -->
    @if (buttonToggleGroup && checked && !buttonToggleGroup.multiple && !buttonToggleGroup.hideSingleSelectionIndicator) {
      <mat-pseudo-checkbox
          class="mat-mdc-option-pseudo-checkbox"
          [disabled]="disabled"
          state="checked"
          aria-hidden="true"
          appearance="minimal"></mat-pseudo-checkbox>
    }
    <!-- Render checkmark at the beginning for multiple-selection. -->
    @if (buttonToggleGroup && checked && buttonToggleGroup.multiple && !buttonToggleGroup.hideMultipleSelectionIndicator) {
      <mat-pseudo-checkbox
          class="mat-mdc-option-pseudo-checkbox"
          [disabled]="disabled"
          state="checked"
          aria-hidden="true"
          appearance="minimal"></mat-pseudo-checkbox>
    }
    <ng-content></ng-content>
  </span>
</button>

<span class="mat-button-toggle-focus-overlay"></span>
<span class="mat-button-toggle-ripple" matRipple
     [matRippleTrigger]="button"
     [matRippleDisabled]="this.disableRipple || this.disabled">
</span>
`,
      styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);transform:translateZ(0);border-radius:var(--mat-legacy-button-toggle-shape)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-standard-button-toggle-shape, var(--mat-app-corner-full));border:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-app-outline))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-standard-button-toggle-selected-state-text-color, var(--mat-app-on-secondary-container))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-legacy-button-toggle-text-color);font-family:var(--mat-legacy-button-toggle-label-text-font);font-size:var(--mat-legacy-button-toggle-label-text-size);line-height:var(--mat-legacy-button-toggle-label-text-line-height);font-weight:var(--mat-legacy-button-toggle-label-text-weight);letter-spacing:var(--mat-legacy-button-toggle-label-text-tracking);--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-legacy-button-toggle-selected-state-text-color)}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-legacy-button-toggle-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle .mat-pseudo-checkbox{margin-right:12px}[dir=rtl] .mat-button-toggle .mat-pseudo-checkbox{margin-right:0;margin-left:12px}.mat-button-toggle-checked{color:var(--mat-legacy-button-toggle-selected-state-text-color);background-color:var(--mat-legacy-button-toggle-selected-state-background-color)}.mat-button-toggle-disabled{pointer-events:none;color:var(--mat-legacy-button-toggle-disabled-state-text-color);background-color:var(--mat-legacy-button-toggle-disabled-state-background-color);--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var(--mat-legacy-button-toggle-disabled-state-text-color)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-legacy-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-disabled-interactive{pointer-events:auto}.mat-button-toggle-appearance-standard{color:var(--mat-standard-button-toggle-text-color, var(--mat-app-on-surface));background-color:var(--mat-standard-button-toggle-background-color);font-family:var(--mat-standard-button-toggle-label-text-font, var(--mat-app-label-large-font));font-size:var(--mat-standard-button-toggle-label-text-size, var(--mat-app-label-large-size));line-height:var(--mat-standard-button-toggle-label-text-line-height, var(--mat-app-label-large-line-height));font-weight:var(--mat-standard-button-toggle-label-text-weight, var(--mat-app-label-large-weight));letter-spacing:var(--mat-standard-button-toggle-label-text-tracking, var(--mat-app-label-large-tracking))}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-app-outline))}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-app-outline))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-app-outline))}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-selected-state-text-color, var(--mat-app-on-secondary-container));background-color:var(--mat-standard-button-toggle-selected-state-background-color, var(--mat-app-secondary-container))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-standard-button-toggle-disabled-state-text-color);background-color:var(--mat-standard-button-toggle-disabled-state-background-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var(--mat-standard-button-toggle-disabled-selected-state-text-color)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-disabled-selected-state-text-color);background-color:var(--mat-standard-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-standard-button-toggle-state-layer-color, var(--mat-app-on-surface))}.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}@media(hover: none){.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-legacy-button-toggle-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-standard-button-toggle-height)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-legacy-button-toggle-state-layer-color)}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius:var(--mat-standard-button-toggle-shape, var(--mat-app-corner-full))}.mat-button-toggle-group-appearance-standard .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-app-corner-full));border-bottom-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-app-corner-full))}.mat-button-toggle-group-appearance-standard .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-app-corner-full));border-bottom-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-app-corner-full))}"]
    }]
  }], () => [{
    type: MatButtonToggleGroup,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_BUTTON_TOGGLE_GROUP]
    }]
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: FocusMonitor
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
    }]
  }], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    _buttonElement: [{
      type: ViewChild,
      args: ["button"]
    }],
    id: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appearance: [{
      type: Input
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }]
  });
})();
var MatButtonToggleModule = class _MatButtonToggleModule {
  static {
    this.\u0275fac = function MatButtonToggleModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatButtonToggleModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatButtonToggleModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatCommonModule, MatRippleModule, MatButtonToggle, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggleModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRippleModule, MatButtonToggleGroup, MatButtonToggle],
      exports: [MatCommonModule, MatButtonToggleGroup, MatButtonToggle]
    }]
  }], null, null);
})();

// src/app/xtream/playlist-error-view/playlist-error-view.component.ts
function PlaylistErrorViewComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275element(1, "img", 1);
    \u0275\u0275text(2, "\n    ");
  }
}
function PlaylistErrorViewComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275element(1, "img", 2);
    \u0275\u0275text(2, "\n    ");
  }
}
function PlaylistErrorViewComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "mat-icon", 3);
    \u0275\u0275text(2, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "\n    ");
  }
}
function PlaylistErrorViewComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n        ");
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2, "\n            ");
    \u0275\u0275elementStart(3, "button", 4);
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "home");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n            ");
    \u0275\u0275elementStart(10, "button", 5);
    \u0275\u0275listener("click", function PlaylistErrorViewComponent_Conditional_11_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPlaylistDetails());
    });
    \u0275\u0275text(11, "\n                ");
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "settings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "\n            ");
    \u0275\u0275elementStart(17, "button", 6);
    \u0275\u0275listener("click", function PlaylistErrorViewComponent_Conditional_11_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeClicked());
    });
    \u0275\u0275text(18, "\n                ");
    \u0275\u0275elementStart(19, "mat-icon");
    \u0275\u0275text(20, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, "\n        ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "\n    ");
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(8, 3, "PORTALS.ERROR_VIEW.HOME"), "\n            ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(15, 5, "PORTALS.ERROR_VIEW.PLAYLIST_SETTINGS"), "\n            ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(22, 7, "PORTALS.ERROR_VIEW.DELETE"), "\n            ");
  }
}
var PlaylistErrorViewComponent = class _PlaylistErrorViewComponent {
  constructor() {
    this.dialog = inject(MatDialog);
    this.dialogService = inject(DialogService);
    this.router = inject(Router);
    this.store = inject(Store);
    this.translate = inject(TranslateService);
    this.currentPlaylist = this.store.selectSignal(selectCurrentPlaylist);
    this.showActionButtons = true;
    this.viewType = "ERROR";
  }
  openPlaylistDetails() {
    this.dialog.open(PlaylistInfoComponent, {
      data: this.currentPlaylist()
    });
  }
  removeClicked() {
    this.dialogService.openConfirmDialog({
      title: this.translate.instant("HOME.PLAYLISTS.REMOVE_DIALOG.TITLE"),
      message: this.translate.instant("HOME.PLAYLISTS.REMOVE_DIALOG.MESSAGE"),
      onConfirm: () => this.removePlaylist(this.currentPlaylist()._id)
    });
  }
  removePlaylist(playlistId) {
    this.store.dispatch(removePlaylist({ playlistId }));
    this.router.navigate(["/"]);
  }
  static {
    this.\u0275fac = function PlaylistErrorViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistErrorViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistErrorViewComponent, selectors: [["app-playlist-error-view"]], inputs: { description: "description", showActionButtons: "showActionButtons", title: "title", viewType: "viewType" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 4, consts: [[1, "expired-account"], ["src", "./assets/images/broken-tv.svg"], ["src", "./assets/images/empty-category.svg", 2, "max-width", "350px"], [1, "icon"], ["mat-stroked-button", "", "routerLink", "/"], ["mat-stroked-button", "", 3, "click"], ["mat-stroked-button", "", "color", "warn", 3, "click"]], template: function PlaylistErrorViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275template(2, PlaylistErrorViewComponent_Conditional_2_Template, 3, 0)(3, PlaylistErrorViewComponent_Conditional_3_Template, 3, 0)(4, PlaylistErrorViewComponent_Conditional_4_Template, 4, 0);
        \u0275\u0275elementStart(5, "div");
        \u0275\u0275text(6, "\n        ");
        \u0275\u0275elementStart(7, "h3");
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n\n    ");
        \u0275\u0275template(11, PlaylistErrorViewComponent_Conditional_11_Template, 25, 9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.viewType === "ERROR" ? 2 : ctx.viewType === "EMPTY_CATEGORY" ? 3 : ctx.viewType === "NO_SEARCH_RESULTS" ? 4 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1("\n        ", ctx.description, "\n    ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.showActionButtons ? 11 : -1);
      }
    }, dependencies: [MatButtonModule, MatButton, MatIconModule, MatIcon, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n.expired-account[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  align-items: center;\n  gap: 10px;\n  text-align: center;\n}\n.expired-account[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: invert(80%);\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  height: 64px;\n  width: 64px;\n}\n  .dark-theme .expired-account img {\n  filter: invert(10%) !important;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistErrorViewComponent, { className: "PlaylistErrorViewComponent" });
})();

// node_modules/.pnpm/@ngrx+component-store@18.0.2_@angular+core@18.2.1_rxjs@7.8.1/node_modules/@ngrx/component-store/fesm2022/ngrx-component-store.mjs
function debounceSync() {
  return (source) => new Observable((observer) => {
    let actionSubscription;
    let actionValue;
    const rootSubscription = new Subscription();
    rootSubscription.add(source.subscribe({
      complete: () => {
        if (actionSubscription) {
          observer.next(actionValue);
        }
        observer.complete();
      },
      error: (error) => {
        observer.error(error);
      },
      next: (value) => {
        actionValue = value;
        if (!actionSubscription) {
          actionSubscription = asapScheduler.schedule(() => {
            observer.next(actionValue);
            actionSubscription = void 0;
          });
          rootSubscription.add(actionSubscription);
        }
      }
    }));
    return rootSubscription;
  });
}
function isOnStoreInitDefined(cs) {
  return typeof cs.ngrxOnStoreInit === "function";
}
function isOnStateInitDefined(cs) {
  return typeof cs.ngrxOnStateInit === "function";
}
var INITIAL_STATE_TOKEN = new InjectionToken("@ngrx/component-store Initial State");
var ComponentStore = class _ComponentStore {
  constructor(defaultState) {
    this.destroySubject$ = new ReplaySubject(1);
    this.destroy$ = this.destroySubject$.asObservable();
    this.stateSubject$ = new ReplaySubject(1);
    this.isInitialized = false;
    this.state$ = this.select((s) => s);
    this.state = toSignal(this.stateSubject$.pipe(takeUntil(this.destroy$)), {
      requireSync: false,
      manualCleanup: true
    });
    this.\u0275hasProvider = false;
    if (defaultState) {
      this.initState(defaultState);
    }
    this.checkProviderForHooks();
  }
  /** Completes all relevant Observable streams. */
  ngOnDestroy() {
    this.stateSubject$.complete();
    this.destroySubject$.next();
  }
  /**
   * Creates an updater.
   *
   * Throws an error if updater is called with synchronous values (either
   * imperative value or Observable that is synchronous) before ComponentStore
   * is initialized. If called with async Observable before initialization then
   * state will not be updated and subscription would be closed.
   *
   * @param updaterFn A static updater function that takes 2 parameters (the
   * current state and an argument object) and returns a new instance of the
   * state.
   * @return A function that accepts one argument which is forwarded as the
   *     second argument to `updaterFn`. Every time this function is called
   *     subscribers will be notified of the state change.
   */
  updater(updaterFn) {
    return (observableOrValue) => {
      let isSyncUpdate = true;
      let syncError;
      const observable$ = isObservable(observableOrValue) ? observableOrValue : of(observableOrValue);
      const subscription = observable$.pipe(
        // Push the value into queueScheduler
        observeOn(queueScheduler),
        // If the state is not initialized yet, we'll throw an error.
        tap(() => this.assertStateIsInitialized()),
        withLatestFrom(this.stateSubject$),
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        map(([value, currentState]) => updaterFn(currentState, value)),
        tap((newState) => this.stateSubject$.next(newState)),
        catchError((error) => {
          if (isSyncUpdate) {
            syncError = error;
            return EMPTY;
          }
          return throwError(error);
        }),
        takeUntil(this.destroy$)
      ).subscribe();
      if (syncError) {
        throw syncError;
      }
      isSyncUpdate = false;
      return subscription;
    };
  }
  /**
   * Initializes state. If it was already initialized then it resets the
   * state.
   */
  initState(state) {
    scheduled([state], queueScheduler).subscribe((s) => {
      this.isInitialized = true;
      this.stateSubject$.next(s);
    });
  }
  /**
   * Sets the state specific value.
   * @param stateOrUpdaterFn object of the same type as the state or an
   * updaterFn, returning such object.
   */
  setState(stateOrUpdaterFn) {
    if (typeof stateOrUpdaterFn !== "function") {
      this.initState(stateOrUpdaterFn);
    } else {
      this.updater(stateOrUpdaterFn)();
    }
  }
  /**
   * Patches the state with provided partial state.
   *
   * @param partialStateOrUpdaterFn a partial state or a partial updater
   * function that accepts the state and returns the partial state.
   * @throws Error if the state is not initialized.
   */
  patchState(partialStateOrUpdaterFn) {
    const patchedState = typeof partialStateOrUpdaterFn === "function" ? partialStateOrUpdaterFn(this.get()) : partialStateOrUpdaterFn;
    this.updater((state, partialState) => __spreadValues(__spreadValues({}, state), partialState))(patchedState);
  }
  get(projector) {
    this.assertStateIsInitialized();
    let value;
    this.stateSubject$.pipe(take(1)).subscribe((state) => {
      value = projector ? projector(state) : state;
    });
    return value;
  }
  select(...args) {
    const {
      observablesOrSelectorsObject,
      projector,
      config
    } = processSelectorArgs(args);
    const source$ = hasProjectFnOnly(observablesOrSelectorsObject, projector) ? this.stateSubject$ : combineLatest(observablesOrSelectorsObject);
    return source$.pipe(config.debounce ? debounceSync() : noopOperator(), projector ? map((projectorArgs) => (
      // projectorArgs could be an Array in case where the entire state is an Array, so adding this check
      observablesOrSelectorsObject.length > 0 && Array.isArray(projectorArgs) ? projector(...projectorArgs) : projector(projectorArgs)
    )) : noopOperator(), distinctUntilChanged(config.equal), shareReplay({
      refCount: true,
      bufferSize: 1
    }), takeUntil(this.destroy$));
  }
  selectSignal(...args) {
    const selectSignalArgs = [...args];
    const options = typeof selectSignalArgs[args.length - 1] === "object" ? selectSignalArgs.pop() : {};
    const projector = selectSignalArgs.pop();
    const signals = selectSignalArgs;
    const computation = signals.length === 0 ? () => projector(this.state()) : () => {
      const values = signals.map((signal) => signal());
      return projector(...values);
    };
    return computed(computation, options);
  }
  /**
   * Creates an effect.
   *
   * This effect is subscribed to throughout the lifecycle of the ComponentStore.
   * @param generator A function that takes an origin Observable input and
   *     returns an Observable. The Observable that is returned will be
   *     subscribed to for the life of the component.
   * @return A function that, when called, will trigger the origin Observable.
   */
  effect(generator) {
    const origin$ = new Subject();
    generator(origin$).pipe(takeUntil(this.destroy$)).subscribe();
    return (observableOrValue) => {
      const observable$ = isObservable(observableOrValue) ? observableOrValue : of(observableOrValue);
      return observable$.pipe(takeUntil(this.destroy$)).subscribe((value) => {
        origin$.next(value);
      });
    };
  }
  /**
   * Used to check if lifecycle hooks are defined
   * but not used with provideComponentStore()
   */
  checkProviderForHooks() {
    asapScheduler.schedule(() => {
      if (isDevMode() && (isOnStoreInitDefined(this) || isOnStateInitDefined(this)) && !this.\u0275hasProvider) {
        const warnings = [isOnStoreInitDefined(this) ? "OnStoreInit" : "", isOnStateInitDefined(this) ? "OnStateInit" : ""].filter((defined) => defined);
        console.warn(`@ngrx/component-store: ${this.constructor.name} has the ${warnings.join(" and ")} lifecycle hook(s) implemented without being provided using the provideComponentStore(${this.constructor.name}) function. To resolve this, provide the component store via provideComponentStore(${this.constructor.name})`);
      }
    });
  }
  assertStateIsInitialized() {
    if (!this.isInitialized) {
      throw new Error(`${this.constructor.name} has not been initialized yet. Please make sure it is initialized before updating/getting.`);
    }
  }
  static {
    this.\u0275fac = function ComponentStore_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ComponentStore)(\u0275\u0275inject(INITIAL_STATE_TOKEN, 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _ComponentStore,
      factory: _ComponentStore.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComponentStore, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [INITIAL_STATE_TOKEN]
    }]
  }], null);
})();
function processSelectorArgs(args) {
  const selectorArgs = Array.from(args);
  const defaultEqualityFn = (previous, current) => previous === current;
  let config = {
    debounce: false,
    equal: defaultEqualityFn
  };
  if (isSelectConfig(selectorArgs[selectorArgs.length - 1])) {
    config = __spreadValues(__spreadValues({}, config), selectorArgs.pop());
  }
  if (selectorArgs.length === 1 && typeof selectorArgs[0] !== "function") {
    return {
      observablesOrSelectorsObject: selectorArgs[0],
      projector: void 0,
      config
    };
  }
  const projector = selectorArgs.pop();
  const observables = selectorArgs;
  return {
    observablesOrSelectorsObject: observables,
    projector,
    config
  };
}
function isSelectConfig(arg) {
  const typedArg = arg;
  return typeof typedArg.debounce !== "undefined" || typeof typedArg.equal !== "undefined";
}
function hasProjectFnOnly(observablesOrSelectorsObject, projector) {
  return Array.isArray(observablesOrSelectorsObject) && observablesOrSelectorsObject.length === 0 && projector;
}
function noopOperator() {
  return (source$) => source$;
}

// src/app/xtream/portal.store.ts
var PortalStore = class _PortalStore extends ComponentStore {
  constructor() {
    super({
      searchPhrase: "",
      currentVod: void 0,
      currentSerial: void 0,
      content: [],
      hideExternalInfoDialog: localStorage.getItem("hideExternalInfoDialog") === "true",
      sortType: void 0
    });
    this.searchPhrase = this.selectSignal((state) => state.searchPhrase);
    this.currentSerial = this.selectSignal((state) => state.currentSerial);
    this.currentVod = this.selectSignal((state) => state.currentVod);
    this.hideExternalInfoDialog = this.selectSignal((state) => state.hideExternalInfoDialog);
    this.sortType = this.selectSignal((state) => state.sortType);
    this.getContentById = (id) => this.selectSignal((state) => state.content.find((i) => i.id === id));
    this.setSearchPhrase = this.updater((state, searchPhrase) => __spreadProps(__spreadValues({}, state), {
      searchPhrase
    }));
    this.setContent = this.updater((state, content) => __spreadProps(__spreadValues({}, state), {
      content
    }));
    this.setCurrentSerial = this.updater((state, currentSerial) => __spreadProps(__spreadValues({}, state), {
      currentSerial
    }));
    this.setCurrentVod = this.updater((state, currentVod) => __spreadProps(__spreadValues({}, state), {
      currentVod
    }));
    this.setHideExternalInfoDialog = this.updater((state, hideExternalInfoDialog) => {
      localStorage.setItem("hideExternalInfoDialog", hideExternalInfoDialog.toString());
      return __spreadProps(__spreadValues({}, state), { hideExternalInfoDialog });
    });
    this.setSortType = this.updater((state, sortType) => __spreadProps(__spreadValues({}, state), {
      sortType
    }));
  }
  static {
    this.\u0275fac = function PortalStore_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PortalStore)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PortalStore, factory: _PortalStore.\u0275fac, providedIn: "root" });
  }
};

// src/app/shared/pipes/sort.pipe.ts
var SortPipe = class _SortPipe {
  transform(array, sortType) {
    if (!array || !sortType) {
      return array;
    }
    return array.sort((a, b) => {
      if (sortType === "date") {
        return parseInt(b.added) - parseInt(a.added);
      } else if (sortType === "rating") {
        const ratingA = isNaN(parseFloat(a.rating)) ? 0 : parseFloat(a.rating);
        const ratingB = isNaN(parseFloat(b.rating)) ? 0 : parseFloat(b.rating);
        return ratingB - ratingA;
      } else if (sortType === "alpha") {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      } else {
        return 0;
      }
    });
  }
  static {
    this.\u0275fac = function SortPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SortPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "sortBy", type: _SortPipe, pure: true, standalone: true });
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SortPipe, factory: _SortPipe.\u0275fac });
  }
};

// src/app/xtream/category-content-view/category-content-view.component.ts
function CategoryContentViewComponent_Conditional_0_For_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                        ");
    \u0275\u0275element(1, "img", 3);
    \u0275\u0275text(2, "\n                    ");
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngSrc", item_r2.stream_icon || item_r2.cover || item_r2.logo);
  }
}
function CategoryContentViewComponent_Conditional_0_For_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                        ");
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275text(2, "\n                    ");
  }
}
function CategoryContentViewComponent_Conditional_0_For_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                        ");
    \u0275\u0275elementStart(1, "div", 5);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275text(3, "\n                            ");
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n                    ");
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "XTREAM.IMDB_RATING"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", item_r2.rating || item_r2.rating_imdb, "\n                        ");
  }
}
function CategoryContentViewComponent_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275elementStart(1, "mat-card", 1);
    \u0275\u0275listener("click", function CategoryContentViewComponent_Conditional_0_For_4_Template_mat_card_click_1_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.itemClicked.emit(item_r2));
    });
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275elementStart(3, "mat-card-content");
    \u0275\u0275text(4, "\n                    ");
    \u0275\u0275template(5, CategoryContentViewComponent_Conditional_0_For_4_Conditional_5_Template, 3, 1)(6, CategoryContentViewComponent_Conditional_0_For_4_Conditional_6_Template, 3, 0)(7, CategoryContentViewComponent_Conditional_0_For_4_Conditional_7_Template, 8, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n                ");
    \u0275\u0275elementStart(9, "mat-card-actions");
    \u0275\u0275text(10, "\n                    ");
    \u0275\u0275elementStart(11, "div", 2);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "\n        ");
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275conditional(item_r2.stream_icon || item_r2.cover || item_r2.logo ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!item_r2.stream_icon && !item_r2.cover && !item_r2.logo ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.rating || item_r2.rating_imdb ? 7 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(item_r2.name || "No name");
  }
}
function CategoryContentViewComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275element(1, "app-playlist-error-view", 6);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275text(3, "\n        ");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("description", \u0275\u0275pipeBind1(2, 3, "PORTALS.EMPTY_LIST_VIEW.NO_SEARCH_RESULTS"))("showActionButtons", false)("viewType", "NO_SEARCH_RESULTS");
  }
}
function CategoryContentViewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275text(2, "\n        ");
    \u0275\u0275repeaterCreate(3, CategoryContentViewComponent_Conditional_0_For_4_Template, 16, 4, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275pipe(5, "filterBy");
    \u0275\u0275pipe(6, "sortBy");
    \u0275\u0275template(7, CategoryContentViewComponent_Conditional_0_Conditional_7_Template, 4, 5);
    \u0275\u0275pipe(8, "filterBy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(6, 5, \u0275\u0275pipeBind3(5, 1, ctx_r2.items, ctx_r2.searchPhrase(), "name"), ctx_r2.sortType()));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!((tmp_2_0 = \u0275\u0275pipeBind3(8, 8, ctx_r2.items, ctx_r2.searchPhrase(), "name")) == null ? null : tmp_2_0.length) ? 7 : -1);
  }
}
function CategoryContentViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275element(1, "app-playlist-error-view", 7);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275text(4, "\n");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 4, "PORTALS.ERROR_VIEW.EMPTY_CATEGORY.TITLE"))("description", \u0275\u0275pipeBind1(3, 6, "PORTALS.ERROR_VIEW.EMPTY_CATEGORY.DESCRIPTION"))("showActionButtons", false)("viewType", "EMPTY_CATEGORY");
  }
}
var CategoryContentViewComponent = class _CategoryContentViewComponent {
  constructor() {
    this.itemClicked = new EventEmitter();
    this.portalStore = inject(PortalStore);
    this.searchPhrase = this.portalStore.searchPhrase;
    this.sortType = this.portalStore.sortType;
  }
  static {
    this.\u0275fac = function CategoryContentViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CategoryContentViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryContentViewComponent, selectors: [["app-category-content-view"]], inputs: { items: "items" }, outputs: { itemClicked: "itemClicked" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "grid"], [3, "click"], [1, "title"], ["fill", "", "priority", "", "placeholder", "", "placeholder", "data:image/png;base64,iVBORw0K...", 1, "stream-icon", 3, "ngSrc"], [1, "stream-icon-placeholder"], [1, "rating", 3, "matTooltip"], ["title", "No results", 3, "description", "showActionButtons", "viewType"], [3, "title", "description", "showActionButtons", "viewType"]], template: function CategoryContentViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, CategoryContentViewComponent_Conditional_0_Template, 10, 12)(1, CategoryContentViewComponent_Conditional_1_Template, 5, 8);
      }
      if (rf & 2) {
        \u0275\u0275conditional((ctx.items == null ? null : ctx.items.length) > 0 ? 0 : 1);
      }
    }, dependencies: [
      FilterPipe,
      SortPipe,
      MatCardModule,
      MatCard,
      MatCardActions,
      MatCardContent,
      MatIconModule,
      MatIcon,
      MatTooltipModule,
      MatTooltip,
      NgOptimizedImage,
      PlaylistErrorViewComponent,
      TranslateModule,
      TranslatePipe
    ], styles: ['\n\n[_nghost-%COMP%] {\n  overflow-y: auto;\n  padding: 10px;\n}\nmat-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  transition: all 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);\n  box-shadow: none;\n}\nmat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n.grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  justify-content: center;\n}\n.grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 170px;\n}\n.grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n.grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .stream-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative !important;\n  display: block;\n}\n.grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .stream-icon-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #999;\n  max-height: 300px;\n  min-height: 255px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .stream-icon-placeholder[_ngcontent-%COMP%]::after {\n  content: "No cover";\n}\n.grid[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  word-break: break-all;\n  text-align: center;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.rating[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 6px;\n  background-color: #3bb33b;\n  color: #fff;\n  font-size: 0.8em;\n  border-radius: 3px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 5px;\n}\n.rating[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  height: 18px;\n  width: 18px;\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryContentViewComponent, { className: "CategoryContentViewComponent" });
})();

// src/app/xtream/category-view/category-view.component.ts
function CategoryViewComponent_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "mat-card", 0);
    \u0275\u0275listener("click", function CategoryViewComponent_Conditional_1_For_2_Template_mat_card_click_1_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.categoryClicked.emit(item_r2));
    });
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "mat-card-content");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n                ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n            ");
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                        ", item_r2.category_name || item_r2.name || "No category name", "\n                    ");
  }
}
function CategoryViewComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275element(1, "app-playlist-error-view", 1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275text(3, "\n            ");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("description", \u0275\u0275pipeBind1(2, 3, "PORTALS.EMPTY_LIST_VIEW.NO_SEARCH_RESULTS"))("showActionButtons", false)("viewType", "NO_SEARCH_RESULTS");
  }
}
function CategoryViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275repeaterCreate(1, CategoryViewComponent_Conditional_1_For_2_Template, 7, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275pipe(3, "filterBy");
    \u0275\u0275template(4, CategoryViewComponent_Conditional_1_Conditional_4_Template, 4, 5);
    \u0275\u0275pipe(5, "filterBy");
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind3(3, 1, ctx_r2.items, ctx_r2.searchPhrase(), "category_name"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!((tmp_2_0 = \u0275\u0275pipeBind3(5, 5, ctx_r2.items, ctx_r2.searchPhrase(), "category_name")) == null ? null : tmp_2_0.length) ? 4 : -1);
  }
}
function CategoryViewComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275element(1, "app-playlist-error-view", 2);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275text(4, "\n        ");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275pipeBind1(2, 4, "PORTALS.ERROR_VIEW.EMPTY_CATEGORY.TITLE"))("description", \u0275\u0275pipeBind1(3, 6, "PORTALS.ERROR_VIEW.EMPTY_CATEGORY.DESCRIPTION"))("showActionButtons", false)("viewType", "EMPTY_CATEGORY");
  }
}
var CategoryViewComponent = class _CategoryViewComponent {
  constructor() {
    this.categoryClicked = new EventEmitter();
    this.portalStore = inject(PortalStore);
    this.searchPhrase = this.portalStore.searchPhrase;
  }
  static {
    this.\u0275fac = function CategoryViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CategoryViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryViewComponent, selectors: [["app-category-view"]], inputs: { items: "items" }, outputs: { categoryClicked: "categoryClicked" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [["appearance", "outlined", 1, "category-item", 3, "click"], ["title", "No results", 3, "description", "showActionButtons", "viewType"], [3, "title", "description", "showActionButtons", "viewType"]], template: function CategoryViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275text(0, "\n        ");
        \u0275\u0275template(1, CategoryViewComponent_Conditional_1_Template, 6, 9)(2, CategoryViewComponent_Conditional_2_Template, 5, 8);
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional((ctx.items == null ? null : ctx.items.length) > 0 ? 1 : 2);
      }
    }, dependencies: [
      FilterPipe,
      MatCardModule,
      MatCard,
      MatCardContent,
      MatIconModule,
      PlaylistErrorViewComponent,
      TranslateModule,
      TranslatePipe
    ], styles: ["\n\n[_nghost-%COMP%] {\n  overflow-y: auto;\n  padding: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: center;\n}\nmat-card-content[_ngcontent-%COMP%] {\n  overflow-wrap: break-word;\n}\n.category-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 200px;\n}\n@media (max-width: 800px) {\n  .category-item[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryViewComponent, { className: "CategoryViewComponent" });
})();

// src/app/xtream/content-type.enum.ts
var ContentType;
(function(ContentType2) {
  ContentType2["STB"] = "stb";
  ContentType2["VODS"] = "vod";
  ContentType2["SERIES"] = "series";
  ContentType2["ITV"] = "itv";
  ContentType2["FAVORITES"] = "favorites";
})(ContentType || (ContentType = {}));

// src/app/xtream/navigation-bar/navigation-bar.component.ts
function NavigationBarComponent_mat_button_toggle_group_12_mat_button_toggle_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-button-toggle", 18);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "mat-icon", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n            ");
    \u0275\u0275elementStart(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("value", item_r4.contentType);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.label);
  }
}
function NavigationBarComponent_mat_button_toggle_group_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-button-toggle-group", 16);
    \u0275\u0275listener("change", function NavigationBarComponent_mat_button_toggle_group_12_Template_mat_button_toggle_group_change_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeContentType($event.value));
    });
    \u0275\u0275text(1, "\n        ");
    \u0275\u0275template(2, NavigationBarComponent_mat_button_toggle_group_12_mat_button_toggle_2_Template, 8, 3, "mat-button-toggle", 17);
    \u0275\u0275text(3, "\n    ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r2.contentType);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.contentTypeNavigationItems)("ngForTrackBy", ctx_r2.trackByValue);
  }
}
function NavigationBarComponent_div_42_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "chevron_right");
    \u0275\u0275elementEnd();
  }
}
function NavigationBarComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function NavigationBarComponent_div_42_Template_div_click_0_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.processBreadcrumbClick(item_r6));
    });
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "\n            ");
    \u0275\u0275template(5, NavigationBarComponent_div_42_mat_icon_5_Template, 2, 0, "mat-icon", 21);
    \u0275\u0275text(6, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", i_r7 !== ctx_r2.breadcrumbs.length - 1);
  }
}
function NavigationBarComponent_button_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function NavigationBarComponent_button_49_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clickFavorites());
    });
    \u0275\u0275text(2, "\n                ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n            ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, "TOP_MENU.TOGGLE_FAVORITE_FLAG"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                    ", ctx_r2.isFavoriteStream ? "star" : "star_outline", "\n                ");
  }
}
function NavigationBarComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "button", 24);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275text(4, "\n                ");
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "sort");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const sortPlaylistMenu_r9 = \u0275\u0275reference(58);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(3, 2, "CHANNELS.SORT_BY"))("matMenuTriggerFor", sortPlaylistMenu_r9);
  }
}
function NavigationBarComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "mat-form-field", 26);
    \u0275\u0275text(3, "\n                ");
    \u0275\u0275elementStart(4, "mat-icon", 27);
    \u0275\u0275text(5, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, "\n                ");
    \u0275\u0275elementStart(7, "input", 28);
    \u0275\u0275listener("ngModelChange", function NavigationBarComponent_div_54_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.searchPhraseUpdate.next($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "\n            ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, "\n        ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r2.searchPhrase());
  }
}
var NavigationBarComponent = class _NavigationBarComponent {
  constructor() {
    this.searchVisible = true;
    this.sortVisible = false;
    this.clientSideSearch = true;
    this.showCategories = false;
    this.favoriteVisible = false;
    this.contentTypeChanged = new EventEmitter();
    this.breadcrumbClicked = new EventEmitter();
    this.favoritesClicked = new EventEmitter();
    this.searchTextChanged = new EventEmitter();
    this.addToFavoritesClicked = new EventEmitter();
    this.removeFromFavoritesClicked = new EventEmitter();
    this.ContentTypeEnum = ContentType;
    this.dialog = inject(MatDialog);
    this.portalStore = inject(PortalStore);
    this.store = inject(Store);
    this.searchPhrase = this.portalStore.searchPhrase;
    this.searchPhraseUpdate = new Subject();
    this.currentPlaylist = this.store.selectSignal(selectCurrentPlaylist);
    this.sortType = this.portalStore.sortType;
    this.isFavoriteStream = false;
    this.searchPhraseUpdate.pipe(debounceTime(600), distinctUntilChanged()).subscribe((value) => {
      this.setSearchText(value);
    });
  }
  openPlaylistDetails() {
    this.dialog.open(PlaylistInfoComponent, {
      data: this.currentPlaylist()
    });
  }
  processBreadcrumbClick(item) {
    this.setSearchText("");
    this.breadcrumbClicked.emit(item);
  }
  setSortType(type) {
    this.portalStore.setSortType(type);
  }
  setSearchText(text) {
    if (this.clientSideSearch)
      this.portalStore.setSearchPhrase(text);
    else
      this.searchTextChanged.emit(text);
  }
  changeContentType(type) {
    this.setSearchText("");
    this.contentTypeChanged.emit(type);
  }
  trackByValue(_i, value) {
    return value.contentType;
  }
  clickFavorites() {
    const item = this.activeLiveStream;
    if (!this.isFavoriteStream) {
      this.addToFavoritesClicked.emit({
        name: item.name,
        stream_id: item.stream_id,
        cover: item.stream_icon,
        stream_type: "live"
      });
      this.isFavoriteStream = true;
    } else {
      this.removeFromFavoritesClicked.emit(item.stream_id);
      this.isFavoriteStream = false;
    }
  }
  ngOnChanges(changes) {
    if (changes.activeLiveStream && this.activeLiveStream) {
      this.checkFavorite();
    }
  }
  checkFavorite() {
    const activeLiveStream = this.activeLiveStream;
    this.favoritesLiveStream$.pipe(map((favorites) => favorites.some((fav) => fav.stream_id === activeLiveStream.stream_id))).subscribe((isFavorite) => {
      this.isFavoriteStream = isFavorite;
    });
  }
  static {
    this.\u0275fac = function NavigationBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavigationBarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavigationBarComponent, selectors: [["app-navigation-bar"]], inputs: { breadcrumbs: "breadcrumbs", contentType: "contentType", searchVisible: "searchVisible", sortVisible: "sortVisible", contentTypeNavigationItems: "contentTypeNavigationItems", clientSideSearch: "clientSideSearch", showCategories: "showCategories", activeLiveStream: "activeLiveStream", favoritesLiveStream$: "favoritesLiveStream$", favoriteVisible: "favoriteVisible" }, outputs: { contentTypeChanged: "contentTypeChanged", breadcrumbClicked: "breadcrumbClicked", favoritesClicked: "favoritesClicked", searchTextChanged: "searchTextChanged", addToFavoritesClicked: "addToFavoritesClicked", removeFromFavoritesClicked: "removeFromFavoritesClicked" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 95, vars: 23, consts: [["sortPlaylistMenu", "matMenu"], ["id", "navigation"], ["mat-button", "", "routerLink", "/"], [1, "button-label"], ["name", "contentType", "aria-label", "Content Type", "hideSingleSelectionIndicator", "", 3, "value", "change", 4, "ngIf"], ["mat-button", "", 3, "click"], ["id", "sub-panel"], [1, "breadcrumbs"], [3, "click", 4, "ngFor", "ngForOf"], [1, "search-container"], [1, "favorite"], ["mat-icon-button", "", 3, "matTooltip", "click", 4, "ngIf"], ["class", "sort", 4, "ngIf"], ["class", "search", 4, "ngIf"], [3, "click"], ["mat-menu-item", "", 3, "click"], ["name", "contentType", "aria-label", "Content Type", "hideSingleSelectionIndicator", "", 3, "change", "value"], [3, "value", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "value"], [1, "icon"], [1, "label"], [4, "ngIf"], ["mat-icon-button", "", 3, "click", "matTooltip"], [1, "sort"], ["mat-icon-button", "", "data-test-id", "sort-playlist", 3, "matTooltip", "matMenuTriggerFor"], [1, "search"], [1, "search-input"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search by name", "type", "search", 3, "ngModelChange", "ngModel"]], template: function NavigationBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "button", 2);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275elementStart(4, "mat-icon");
        \u0275\u0275text(5, "home");
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, "\n        ");
        \u0275\u0275elementStart(7, "span", 3);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n\n    ");
        \u0275\u0275template(12, NavigationBarComponent_mat_button_toggle_group_12_Template, 4, 3, "mat-button-toggle-group", 4);
        \u0275\u0275text(13, "\n\n    ");
        \u0275\u0275elementStart(14, "div");
        \u0275\u0275text(15, "\n        ");
        \u0275\u0275elementStart(16, "button", 5);
        \u0275\u0275listener("click", function NavigationBarComponent_Template_button_click_16_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openPlaylistDetails());
        });
        \u0275\u0275text(17, "\n            ");
        \u0275\u0275elementStart(18, "mat-icon");
        \u0275\u0275text(19, "info");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, "\n            ");
        \u0275\u0275elementStart(21, "span", 3);
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, "\n\n        ");
        \u0275\u0275elementStart(26, "button", 5);
        \u0275\u0275listener("click", function NavigationBarComponent_Template_button_click_26_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.favoritesClicked.emit());
        });
        \u0275\u0275text(27, "\n            ");
        \u0275\u0275elementStart(28, "mat-icon");
        \u0275\u0275text(29, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, "\n            ");
        \u0275\u0275elementStart(31, "span", 3);
        \u0275\u0275text(32);
        \u0275\u0275pipe(33, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(37, "\n");
        \u0275\u0275elementStart(38, "div", 6);
        \u0275\u0275text(39, "\n    ");
        \u0275\u0275elementStart(40, "div", 7);
        \u0275\u0275text(41, "\n        ");
        \u0275\u0275template(42, NavigationBarComponent_div_42_Template, 7, 2, "div", 8);
        \u0275\u0275text(43, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(44, "\n    ");
        \u0275\u0275elementStart(45, "div", 9);
        \u0275\u0275text(46, "\n        ");
        \u0275\u0275elementStart(47, "div", 10);
        \u0275\u0275text(48, "\n            ");
        \u0275\u0275template(49, NavigationBarComponent_button_49_Template, 6, 4, "button", 11);
        \u0275\u0275text(50, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(51, "\n        ");
        \u0275\u0275template(52, NavigationBarComponent_div_52_Template, 9, 4, "div", 12);
        \u0275\u0275text(53, "\n        ");
        \u0275\u0275template(54, NavigationBarComponent_div_54_Template, 10, 1, "div", 13);
        \u0275\u0275text(55, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(56, "\n    ");
        \u0275\u0275elementStart(57, "mat-menu", null, 0);
        \u0275\u0275text(59, "\n        ");
        \u0275\u0275elementStart(60, "section", 14);
        \u0275\u0275listener("click", function NavigationBarComponent_Template_section_click_60_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView($event.stopPropagation());
        });
        \u0275\u0275text(61, "\n            ");
        \u0275\u0275elementStart(62, "button", 15);
        \u0275\u0275listener("click", function NavigationBarComponent_Template_button_click_62_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setSortType("date"));
        });
        \u0275\u0275text(63, "\n                ");
        \u0275\u0275elementStart(64, "mat-icon");
        \u0275\u0275text(65, "calendar_today");
        \u0275\u0275elementEnd();
        \u0275\u0275text(66, "\n                ");
        \u0275\u0275elementStart(67, "span");
        \u0275\u0275text(68);
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(70, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(71, "\n            ");
        \u0275\u0275elementStart(72, "button", 15);
        \u0275\u0275listener("click", function NavigationBarComponent_Template_button_click_72_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setSortType("rating"));
        });
        \u0275\u0275text(73, "\n                ");
        \u0275\u0275elementStart(74, "mat-icon");
        \u0275\u0275text(75, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275text(76, "\n                ");
        \u0275\u0275elementStart(77, "span");
        \u0275\u0275text(78);
        \u0275\u0275pipe(79, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(80, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(81, "\n            ");
        \u0275\u0275elementStart(82, "button", 15);
        \u0275\u0275listener("click", function NavigationBarComponent_Template_button_click_82_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setSortType("alpha"));
        });
        \u0275\u0275text(83, "\n                ");
        \u0275\u0275elementStart(84, "mat-icon");
        \u0275\u0275text(85, "sort_by_alpha");
        \u0275\u0275elementEnd();
        \u0275\u0275text(86, "\n                ");
        \u0275\u0275elementStart(87, "span");
        \u0275\u0275text(88);
        \u0275\u0275pipe(89, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(90, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(91, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(92, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(93, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(94, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, "PLAYLISTS"));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.showCategories);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 13, "Info"));
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 15, "CHANNELS.FAVORITES"));
        \u0275\u0275advance(10);
        \u0275\u0275property("ngForOf", ctx.breadcrumbs);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.favoriteVisible && ctx.activeLiveStream);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.sortVisible);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.searchVisible);
        \u0275\u0275advance(14);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 17, "CHANNELS.SORT_BY_DATE"));
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 19, "CHANNELS.SORT_BY_RATING"));
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(89, 21, "CHANNELS.SORT_BY_NAME"));
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatButtonToggleModule,
      MatButtonToggleGroup,
      MatButtonToggle,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatFormField,
      MatPrefix,
      MatFormFieldModule,
      NgForOf,
      NgIf,
      RouterLink,
      TranslateModule,
      TranslatePipe,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatCheckboxModule,
      MatTooltipModule,
      MatTooltip
    ], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n}\n#navigation[_ngcontent-%COMP%] {\n  height: 70px;\n  background: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px;\n}\n#sub-panel[_ngcontent-%COMP%] {\n  background: white;\n  border-bottom: 1px solid #ccc;\n  padding: 0 1em;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 40px;\n}\n#sub-panel[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%] {\n  display: flex;\n}\n#sub-panel[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n#sub-panel[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(:last-child)::after {\n  display: none;\n}\n#sub-panel[_ngcontent-%COMP%]   .breadcrumbs[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n#sub-panel[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n#sub-panel[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.search-input[_ngcontent-%COMP%] {\n  --mat-form-field-container-height: 36px;\n  --mat-form-field-filled-label-display: none;\n  --mat-form-field-container-vertical-padding: 6px;\n  --mat-form-field-filled-with-label-container-padding-top: 6px;\n  --mat-form-field-filled-with-label-container-padding-bottom: 6px;\n}\n  .search-input div {\n  border-radius: 20px;\n}\n  .dark-theme #navigation, \n  .dark-theme #sub-panel {\n  background: #1b1c1c;\n}\n  .dark-theme #sub-panel {\n  border-bottom: 1px solid #333;\n}\n  div[matformfieldlineripple] {\n  display: none;\n}\n@media (max-width: 800px) {\n  .button-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n  #sub-panel[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 10px 1em;\n  }\n  #sub-panel[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]    > .search-input[_ngcontent-%COMP%] {\n    width: 160px;\n  }\n  .breadcrumbs[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .label[_ngcontent-%COMP%] {\n    display: none;\n  }\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavigationBarComponent, { className: "NavigationBarComponent" });
})();

// src/app/xtream/vod-details/safe.pipe.ts
var SafePipe = class _SafePipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  static {
    this.\u0275fac = function SafePipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SafePipe)(\u0275\u0275directiveInject(DomSanitizer, 16));
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "safe", type: _SafePipe, pure: true, standalone: true });
  }
};

// src/app/xtream/vod-details/vod-details.component.ts
function VodDetailsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275text(2, "\n        ");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.item.info == null ? null : ctx_r1.item.info.movie_image, \u0275\u0275sanitizeUrl);
  }
}
function VodDetailsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n            ");
    \u0275\u0275element(1, "div", 10);
    \u0275\u0275text(2, "\n        ");
  }
}
function VodDetailsComponent_label_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\n            ", ctx_r1.item.info.description, "\n        ");
  }
}
function VodDetailsComponent_label_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 11);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 2, "XTREAM.RELEASE_DATE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n            ", ctx_r1.item.info.releasedate, "\n        ");
  }
}
function VodDetailsComponent_label_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 11);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 2, "XTREAM.GENRE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n            ", ctx_r1.item.info.genre, "\n        ");
  }
}
function VodDetailsComponent_label_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 11);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 2, "XTREAM.COUNTRY"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n            ", ctx_r1.item.info.country, "\n        ");
  }
}
function VodDetailsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 11);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 2, "XTREAM.ACTORS"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n            ", ctx_r1.item.info.actors, "\n        ");
  }
}
function VodDetailsComponent_label_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 11);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 2, "XTREAM.DIRECTOR"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n            ", ctx_r1.item.info.director, "\n        ");
  }
}
function VodDetailsComponent_label_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 11);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 2, "XTREAM.DURATION"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n            ", ctx_r1.item.info.duration, "\n        ");
  }
}
function VodDetailsComponent_label_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 11);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 2, "XTREAM.IMDB_RATING"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n            ", ctx_r1.item.info.rating_imdb, "\n        ");
  }
}
function VodDetailsComponent_label_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label");
    \u0275\u0275text(1, "\n            ");
    \u0275\u0275elementStart(2, "div", 11);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(4, 2, "XTREAM.KINOPOISK_RATING"), ":\n            ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\n            ", ctx_r1.item.info.rating_kinopoisk, "\n        ");
  }
}
function VodDetailsComponent_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function VodDetailsComponent_button_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFavorite());
    });
    \u0275\u0275text(1, "\n                ");
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "star_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(5, 1, "PORTALS.ADD_TO_FAVORITES"), "\n            ");
  }
}
function VodDetailsComponent_ng_template_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\n                ");
    \u0275\u0275elementStart(1, "button", 12);
    \u0275\u0275listener("click", function VodDetailsComponent_ng_template_41_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFavorite());
    });
    \u0275\u0275text(2, "\n                    ");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "\n            ");
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\n                    ", \u0275\u0275pipeBind1(6, 1, "PORTALS.REMOVE_FROM_FAVORITES"), "\n                ");
  }
}
function VodDetailsComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "\n    ");
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "\n    ");
    \u0275\u0275element(6, "iframe", 14);
    \u0275\u0275pipe(7, "safe");
    \u0275\u0275text(8, "\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "XTREAM.YOUTUBE_TRAILER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", \u0275\u0275pipeBind1(7, 4, "https://www.youtube.com/embed/" + (ctx_r1.item.info == null ? null : ctx_r1.item.info.youtube_trailer)), \u0275\u0275sanitizeResourceUrl);
  }
}
var VodDetailsComponent = class _VodDetailsComponent {
  constructor() {
    this.addToFavoritesClicked = new EventEmitter();
    this.playClicked = new EventEmitter();
    this.removeFromFavoritesClicked = new EventEmitter();
    this.playlistService = inject(PlaylistsService);
    this.route = inject(ActivatedRoute);
    this.portalId = this.route.snapshot.paramMap.get("id");
    this.isFavorite = false;
  }
  ngOnInit() {
    this.checkFavoriteStatus();
  }
  checkFavoriteStatus() {
    this.playlistService.getPortalFavorites(this.portalId).subscribe((favorites) => {
      this.isFavorite = favorites.some((i) => {
        const hasStreamId = i?.stream_id !== void 0 && this.item?.movie_data?.stream_id !== void 0;
        const hasId = i?.details?.id !== void 0 && this.item?.id !== void 0;
        return hasStreamId && i.stream_id === this.item.movie_data.stream_id || hasId && i.details.id === this.item.id;
      });
    });
  }
  toggleFavorite() {
    if (this.isFavorite) {
      this.removeFromFavoritesClicked.emit(this.item?.movie_data?.stream_id || this.item?.id);
    } else {
      if (this.item.cmd) {
        this.addToFavoritesClicked.emit({
          name: this.item.info.name,
          stream_id: this.item.id,
          cover: this.item.info.movie_image,
          cmd: this.item.cmd || "",
          details: this.item
        });
      } else {
        this.addToFavoritesClicked.emit({
          name: this.item.movie_data.name,
          stream_id: this.item.movie_data.stream_id,
          container_extension: this.item.movie_data.container_extension,
          cover: this.item.info.movie_image,
          stream_type: "movie"
        });
      }
    }
    this.isFavorite = !this.isFavorite;
  }
  static {
    this.\u0275fac = function VodDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VodDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VodDetailsComponent, selectors: [["app-vod-details"]], inputs: { item: "item" }, outputs: { addToFavoritesClicked: "addToFavoritesClicked", playClicked: "playClicked", removeFromFavoritesClicked: "removeFromFavoritesClicked" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 49, vars: 19, consts: [["removeFromFavoritesButton", ""], [1, "container"], [1, "image"], [1, "details"], [4, "ngIf"], [1, "action-buttons"], ["mat-flat-button", "", "color", "accent", 3, "click"], ["mat-stroked-button", "", "color", "accent", 3, "click", 4, "ngIf", "ngIfElse"], ["class", "youtube-trailer", 4, "ngIf"], [3, "src"], [1, "placeholder-cover"], [1, "label"], ["mat-stroked-button", "", "color", "accent", 3, "click"], [1, "youtube-trailer"], ["width", "100%", "height", "450", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", "", 3, "src"]], template: function VodDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275text(1, "\n    ");
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275text(3, "\n        ");
        \u0275\u0275template(4, VodDetailsComponent_Conditional_4_Template, 3, 1)(5, VodDetailsComponent_Conditional_5_Template, 3, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275text(6, "\n    ");
        \u0275\u0275elementStart(7, "div", 3);
        \u0275\u0275text(8, "\n        ");
        \u0275\u0275elementStart(9, "h2");
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n        ");
        \u0275\u0275template(12, VodDetailsComponent_label_12_Template, 2, 1, "label", 4);
        \u0275\u0275text(13, "\n        ");
        \u0275\u0275template(14, VodDetailsComponent_label_14_Template, 6, 4, "label", 4);
        \u0275\u0275text(15, "\n        ");
        \u0275\u0275template(16, VodDetailsComponent_label_16_Template, 6, 4, "label", 4);
        \u0275\u0275text(17, "\n        ");
        \u0275\u0275template(18, VodDetailsComponent_label_18_Template, 6, 4, "label", 4);
        \u0275\u0275text(19, "\n        ");
        \u0275\u0275template(20, VodDetailsComponent_div_20_Template, 6, 4, "div", 4);
        \u0275\u0275text(21, "\n        ");
        \u0275\u0275template(22, VodDetailsComponent_label_22_Template, 6, 4, "label", 4);
        \u0275\u0275text(23, "\n        ");
        \u0275\u0275template(24, VodDetailsComponent_label_24_Template, 6, 4, "label", 4);
        \u0275\u0275text(25, "\n        ");
        \u0275\u0275template(26, VodDetailsComponent_label_26_Template, 6, 4, "label", 4);
        \u0275\u0275text(27, "\n        ");
        \u0275\u0275template(28, VodDetailsComponent_label_28_Template, 6, 4, "label", 4);
        \u0275\u0275text(29, "\n        ");
        \u0275\u0275elementStart(30, "div", 5);
        \u0275\u0275text(31, "\n            ");
        \u0275\u0275elementStart(32, "button", 6);
        \u0275\u0275listener("click", function VodDetailsComponent_Template_button_click_32_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.playClicked.emit(ctx.item));
        });
        \u0275\u0275text(33, "\n                ");
        \u0275\u0275elementStart(34, "mat-icon");
        \u0275\u0275text(35, "play_arrow");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(38, "\xA0\n            ");
        \u0275\u0275template(39, VodDetailsComponent_button_39_Template, 6, 3, "button", 7);
        \u0275\u0275text(40, "\n\n            ");
        \u0275\u0275template(41, VodDetailsComponent_ng_template_41_Template, 8, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275text(43, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(44, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(45, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(46, "\n");
        \u0275\u0275template(47, VodDetailsComponent_div_47_Template, 9, 6, "div", 8);
        \u0275\u0275text(48, "\n");
      }
      if (rf & 2) {
        const removeFromFavoritesButton_r5 = \u0275\u0275reference(42);
        \u0275\u0275styleProp("background", (ctx.item == null ? null : ctx.item.info == null ? null : ctx.item.info.backdrop_path) && (ctx.item == null ? null : ctx.item.info == null ? null : ctx.item.info.backdrop_path.length) > 0 ? "linear-gradient(to top, rgba(29,29,29,1) 0%, rgba(0,0,0,0.5) 100%), url(" + (ctx.item == null ? null : ctx.item.info == null ? null : ctx.item.info.backdrop_path[0]) + ") repeat-x" : "none");
        \u0275\u0275advance(4);
        \u0275\u0275conditional((ctx.item.info == null ? null : ctx.item.info.movie_image) ? 4 : 5);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.item.info.name);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.item.info.description);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.item.info.releasedate);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.item.info.genre);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.item.info.country);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.item.info.actors);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.item.info.director);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.item.info.duration);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.item.info.rating_imdb);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.item.info.rating_kinopoisk);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(37, 17, "XTREAM.PLAY"), "");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.isFavorite)("ngIfElse", removeFromFavoritesButton_r5);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngIf", ctx.item.info.youtube_trailer);
      }
    }, dependencies: [MatButtonModule, MatButton, NgIf, MatIconModule, MatIcon, SafePipe, TranslateModule, TranslatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n.details[_ngcontent-%COMP%] {\n  color: #eee;\n}\n.details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n}\n.container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: 350px 450px;\n  justify-content: center;\n}\n.container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-size: cover;\n  z-index: -1;\n  background-repeat: no-repeat;\n}\n.seasons[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.seasons[_ngcontent-%COMP%]   .episodes[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.seasons[_ngcontent-%COMP%]   .episodes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.image[_ngcontent-%COMP%] {\n  width: 300px;\n  padding: 20px 10px;\n}\n.image[_ngcontent-%COMP%]   .placeholder-cover[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 500px;\n  background-color: #999;\n  border-radius: 5px;\n}\n.image[_ngcontent-%COMP%]   .placeholder-cover[_ngcontent-%COMP%]::after {\n  content: "No cover";\n  position: relative;\n  top: 230px;\n  left: 115px;\n}\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  border-radius: 5px;\n}\n@media (max-width: 800px) {\n  .container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0 auto;\n    max-width: 1200px;\n  }\n  .image[_ngcontent-%COMP%], \n   .details[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n  }\n  .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n   .details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    border-radius: 0;\n  }\n  .details[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n  .youtube-trailer[_ngcontent-%COMP%] {\n    width: 95% !important;\n  }\n}\n.label[_ngcontent-%COMP%] {\n  font-weight: 100;\n  font-size: 0.9em;\n  padding: 5px 0;\n  text-decoration: underline;\n  opacity: 0.6;\n}\n.action-buttons[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.youtube-trailer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-self: center;\n  width: 650px;\n}'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VodDetailsComponent, { className: "VodDetailsComponent" });
})();

// src/app/shared/components/external-player-info-dialog/external-player-info-dialog.component.ts
var ExternalPlayerInfoDialogComponent = class _ExternalPlayerInfoDialogComponent {
  constructor() {
    this.portalStore = inject(PortalStore);
  }
  openUrl(url) {
    window.open(url, "_blank");
  }
  setVisibility(value) {
    this.portalStore.setHideExternalInfoDialog(value);
  }
  static {
    this.\u0275fac = function ExternalPlayerInfoDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExternalPlayerInfoDialogComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExternalPlayerInfoDialogComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 37, vars: 6, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [1, "centered"], [1, "icon"], [2, "cursor", "pointer", 3, "click", "routerLink"], [2, "justify-content", "space-between"], [3, "change"], ["mat-button", "", "mat-dialog-close", "", "cdkFocusInitial", "", "color", "accent"]], template: function ExternalPlayerInfoDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275text(0, "\n        ");
        \u0275\u0275elementStart(1, "h2", 0);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(4, "\n        ");
        \u0275\u0275elementStart(5, "mat-dialog-content", 1);
        \u0275\u0275text(6, "\n            ");
        \u0275\u0275elementStart(7, "div", 2);
        \u0275\u0275text(8, "\n                ");
        \u0275\u0275elementStart(9, "mat-icon", 3);
        \u0275\u0275text(10, "live_tv");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n                ");
        \u0275\u0275elementStart(12, "div");
        \u0275\u0275text(13, "\n                    The video is playing in external player window.");
        \u0275\u0275element(14, "br");
        \u0275\u0275text(15, "\n                    Please make sure that mpv/vlc player is correctly installed\n                    on your system.");
        \u0275\u0275element(16, "br");
        \u0275\u0275text(17, "\n                    See\n                    ");
        \u0275\u0275elementStart(18, "a", 4);
        \u0275\u0275listener("click", function ExternalPlayerInfoDialogComponent_Template_a_click_18_listener() {
          return ctx.openUrl("https://github.com/4gray/iptvnator/wiki/What-is-mpv-video-player-and-how-to-install-it-on-different-operating-systems%3F");
        });
        \u0275\u0275text(19, "installation instructions");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, "\n                    for more details.\n                ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, "\n        ");
        \u0275\u0275elementStart(24, "mat-dialog-actions", 5);
        \u0275\u0275text(25, "\n            ");
        \u0275\u0275elementStart(26, "div");
        \u0275\u0275text(27, "\n                ");
        \u0275\u0275elementStart(28, "mat-checkbox", 6);
        \u0275\u0275listener("change", function ExternalPlayerInfoDialogComponent_Template_mat_checkbox_change_28_listener($event) {
          return ctx.setVisibility($event.checked);
        });
        \u0275\u0275text(29, "Don't show anymore");
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, "\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(31, "\n            ");
        \u0275\u0275elementStart(32, "button", 7);
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, "\n    ");
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "INFORMATION"));
        \u0275\u0275advance(31);
        \u0275\u0275textInterpolate1("\n                ", \u0275\u0275pipeBind1(34, 4, "CLOSE"), "\n            ");
      }
    }, dependencies: [
      MatButtonModule,
      MatButton,
      MatCheckboxModule,
      MatCheckbox,
      MatDialogModule,
      MatDialogClose,
      MatDialogTitle,
      MatDialogActions,
      MatDialogContent,
      MatIconModule,
      MatIcon,
      RouterLink,
      TranslateModule,
      TranslatePipe
    ], styles: ["\n\n.centered[_ngcontent-%COMP%] {\n  text-align: center;\n  line-height: 24px;\n  margin: 20px;\n}\n.centered[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 64px;\n  height: 64px;\n  width: 64px;\n}"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExternalPlayerInfoDialogComponent, { className: "ExternalPlayerInfoDialogComponent" });
})();

// node_modules/.pnpm/@angular+cdk@18.2.1_@angular+common@18.2.1_@angular+core@18.2.1_rxjs@7.8.1/node_modules/@angular/cdk/fesm2022/clipboard.mjs
var PendingCopy = class {
  constructor(text, _document) {
    this._document = _document;
    const textarea = this._textarea = this._document.createElement("textarea");
    const styles = textarea.style;
    styles.position = "fixed";
    styles.top = styles.opacity = "0";
    styles.left = "-999em";
    textarea.setAttribute("aria-hidden", "true");
    textarea.value = text;
    textarea.readOnly = true;
    (this._document.fullscreenElement || this._document.body).appendChild(textarea);
  }
  /** Finishes copying the text. */
  copy() {
    const textarea = this._textarea;
    let successful = false;
    try {
      if (textarea) {
        const currentFocus = this._document.activeElement;
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = this._document.execCommand("copy");
        if (currentFocus) {
          currentFocus.focus();
        }
      }
    } catch {
    }
    return successful;
  }
  /** Cleans up DOM changes used to perform the copy operation. */
  destroy() {
    const textarea = this._textarea;
    if (textarea) {
      textarea.remove();
      this._textarea = void 0;
    }
  }
};
var Clipboard = class _Clipboard {
  constructor(document) {
    this._document = document;
  }
  /**
   * Copies the provided text into the user's clipboard.
   *
   * @param text The string to copy.
   * @returns Whether the operation was successful.
   */
  copy(text) {
    const pendingCopy = this.beginCopy(text);
    const successful = pendingCopy.copy();
    pendingCopy.destroy();
    return successful;
  }
  /**
   * Prepares a string to be copied later. This is useful for large strings
   * which take too long to successfully render and be copied in the same tick.
   *
   * The caller must call `destroy` on the returned `PendingCopy`.
   *
   * @param text The string to copy.
   * @returns the pending copy operation.
   */
  beginCopy(text) {
    return new PendingCopy(text, this._document);
  }
  static {
    this.\u0275fac = function Clipboard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Clipboard)(\u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _Clipboard,
      factory: _Clipboard.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Clipboard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var CDK_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken("CDK_COPY_TO_CLIPBOARD_CONFIG");
var CdkCopyToClipboard = class _CdkCopyToClipboard {
  constructor(_clipboard, _ngZone, config) {
    this._clipboard = _clipboard;
    this._ngZone = _ngZone;
    this.text = "";
    this.attempts = 1;
    this.copied = new EventEmitter();
    this._pending = /* @__PURE__ */ new Set();
    if (config && config.attempts != null) {
      this.attempts = config.attempts;
    }
  }
  /** Copies the current text to the clipboard. */
  copy(attempts = this.attempts) {
    if (attempts > 1) {
      let remainingAttempts = attempts;
      const pending = this._clipboard.beginCopy(this.text);
      this._pending.add(pending);
      const attempt = () => {
        const successful = pending.copy();
        if (!successful && --remainingAttempts && !this._destroyed) {
          this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
        } else {
          this._currentTimeout = null;
          this._pending.delete(pending);
          pending.destroy();
          this.copied.emit(successful);
        }
      };
      attempt();
    } else {
      this.copied.emit(this._clipboard.copy(this.text));
    }
  }
  ngOnDestroy() {
    if (this._currentTimeout) {
      clearTimeout(this._currentTimeout);
    }
    this._pending.forEach((copy) => copy.destroy());
    this._pending.clear();
    this._destroyed = true;
  }
  static {
    this.\u0275fac = function CdkCopyToClipboard_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkCopyToClipboard)(\u0275\u0275directiveInject(Clipboard), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(CDK_COPY_TO_CLIPBOARD_CONFIG, 8));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _CdkCopyToClipboard,
      selectors: [["", "cdkCopyToClipboard", ""]],
      hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function CdkCopyToClipboard_click_HostBindingHandler() {
            return ctx.copy();
          });
        }
      },
      inputs: {
        text: [0, "cdkCopyToClipboard", "text"],
        attempts: [0, "cdkCopyToClipboardAttempts", "attempts"]
      },
      outputs: {
        copied: "cdkCopyToClipboardCopied"
      },
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCopyToClipboard, [{
    type: Directive,
    args: [{
      selector: "[cdkCopyToClipboard]",
      host: {
        "(click)": "copy()"
      },
      standalone: true
    }]
  }], () => [{
    type: Clipboard
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CDK_COPY_TO_CLIPBOARD_CONFIG]
    }]
  }], {
    text: [{
      type: Input,
      args: ["cdkCopyToClipboard"]
    }],
    attempts: [{
      type: Input,
      args: ["cdkCopyToClipboardAttempts"]
    }],
    copied: [{
      type: Output,
      args: ["cdkCopyToClipboardCopied"]
    }]
  });
})();
var ClipboardModule = class _ClipboardModule {
  static {
    this.\u0275fac = function ClipboardModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClipboardModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _ClipboardModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClipboardModule, [{
    type: NgModule,
    args: [{
      imports: [CdkCopyToClipboard],
      exports: [CdkCopyToClipboard]
    }]
  }], null, null);
})();

// src/app/portals/web-player-view/web-player-view.component.ts
function WebPlayerViewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275element(1, "app-vjs-player", 0);
    \u0275\u0275text(2, "\n");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r0.vjsOptions);
  }
}
function WebPlayerViewComponent_Conditional_1_app_html_video_player_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-html-video-player", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("channel", ctx_r0.channel);
  }
}
function WebPlayerViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\n    ");
    \u0275\u0275template(1, WebPlayerViewComponent_Conditional_1_app_html_video_player_1_Template, 1, 1, "app-html-video-player", 1);
    \u0275\u0275text(2, "\n");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.player === "html5");
  }
}
var WebPlayerViewComponent = class _WebPlayerViewComponent {
  constructor() {
    this.storage = inject(StorageMap);
    this.streamUrl = input.required();
    this.settings = toSignal(this.storage.get(STORE_KEY.Settings));
    effect(() => {
      this.player = this.settings()?.player ?? VideoPlayer.VideoJs;
      this.setChannel(this.streamUrl());
      this.setVjsOptions(this.streamUrl());
    }, { allowSignalWrites: true });
  }
  setVjsOptions(streamUrl) {
    const extension = getExtensionFromUrl(streamUrl);
    const mimeType = extension === "m3u" || extension === "m3u8" || extension === "ts" ? "application/x-mpegURL" : extension === "mpd" ? "application/dash+xml" : "video/mp4";
    this.vjsOptions = {
      sources: [{ src: streamUrl, type: mimeType }]
    };
  }
  setChannel(streamUrl) {
    this.channel = {
      url: streamUrl
    };
  }
  static {
    this.\u0275fac = function WebPlayerViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WebPlayerViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WebPlayerViewComponent, selectors: [["app-web-player-view"]], inputs: { streamUrl: [1, "streamUrl"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[3, "options"], [3, "channel", 4, "ngIf"], [3, "channel"]], template: function WebPlayerViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, WebPlayerViewComponent_Conditional_0_Template, 3, 1)(1, WebPlayerViewComponent_Conditional_1_Template, 3, 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.player === "videojs" ? 0 : ctx.player === "html5" ? 1 : -1);
      }
    }, dependencies: [HtmlVideoPlayerComponent, NgIf, VjsPlayerComponent], styles: ["/* src/app/portals/web-player-view/web-player-view.component.scss */\napp-vjs-player > .video-js {\n  height: 100%;\n}\n"], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WebPlayerViewComponent, { className: "WebPlayerViewComponent" });
})();

// src/app/xtream/player-dialog/player-dialog.component.ts
var PlayerDialogComponent = class _PlayerDialogComponent {
  constructor(data, snackBar, translateService) {
    this.snackBar = snackBar;
    this.translateService = translateService;
    this.streamUrl = data.streamUrl;
    this.title = data.title;
  }
  showCopyNotification() {
    this.snackBar.open(this.translateService.instant("PORTALS.STREAM_URL_COPIED"), null, {
      duration: 2e3
    });
  }
  static {
    this.\u0275fac = function PlayerDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlayerDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(TranslateService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlayerDialogComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 10, consts: [["mat-dialog-title", ""], [1, "content"], [3, "streamUrl"], [1, "link-input"], ["matInput", "", "formControlName", "streamUrl", "disabled", "", 3, "value"], [1, "align-actions"], ["mat-button", "", 3, "click", "cdkCopyToClipboard"], ["mat-button", "", "mat-dialog-close", "", "color", "accent"]], template: function PlayerDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "h2", 0);
        \u0275\u0275text(1);
        \u0275\u0275elementEnd();
        \u0275\u0275text(2, "\n");
        \u0275\u0275elementStart(3, "mat-dialog-content", 1);
        \u0275\u0275text(4, "\n    ");
        \u0275\u0275element(5, "app-web-player-view", 2);
        \u0275\u0275text(6, "\n    ");
        \u0275\u0275elementStart(7, "mat-form-field", 3);
        \u0275\u0275text(8, "\n        ");
        \u0275\u0275element(9, "input", 4);
        \u0275\u0275text(10, "\n    ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(11, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12, "\n");
        \u0275\u0275elementStart(13, "mat-dialog-actions", 5);
        \u0275\u0275text(14, "\n    ");
        \u0275\u0275elementStart(15, "button", 6);
        \u0275\u0275listener("click", function PlayerDialogComponent_Template_button_click_15_listener() {
          return ctx.showCopyNotification();
        });
        \u0275\u0275text(16, "\n        ");
        \u0275\u0275elementStart(17, "mat-icon");
        \u0275\u0275text(18, "content_copy");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, "\n    ");
        \u0275\u0275elementStart(22, "button", 7);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, "\n");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, "\n");
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance(4);
        \u0275\u0275property("streamUrl", ctx.streamUrl);
        \u0275\u0275advance(4);
        \u0275\u0275property("value", ctx.streamUrl);
        \u0275\u0275advance(6);
        \u0275\u0275property("cdkCopyToClipboard", ctx.streamUrl);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(20, 6, "PORTALS.COPY_STREAM_URL"), "\n    ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("\n        ", \u0275\u0275pipeBind1(24, 8, "CLOSE"), "\n    ");
      }
    }, dependencies: [ClipboardModule, CdkCopyToClipboard, MatButtonModule, MatButton, MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatFormFieldModule, MatFormField, MatIconModule, MatIcon, MatInputModule, MatInput, TranslateModule, TranslatePipe, WebPlayerViewComponent], styles: ["/* src/app/xtream/player-dialog/player-dialog.component.scss */\n.content {\n  overflow: hidden;\n  padding: 10px !important;\n}\n.link-input {\n  width: 98%;\n  padding-top: 5px;\n  --mat-form-field-container-height: 36px;\n  --mat-form-field-filled-label-display: none;\n  --mat-form-field-container-vertical-padding: 6px;\n  --mat-form-field-filled-with-label-container-padding-top: 6px;\n  --mat-form-field-filled-with-label-container-padding-bottom: 6px;\n}\n.align-actions {\n  justify-content: space-between;\n}\nmat-dialog-content .video-js {\n  height: 500px !important;\n}\n"], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlayerDialogComponent, { className: "PlayerDialogComponent" });
})();

export {
  MatButtonToggleModule,
  PlaylistErrorViewComponent,
  PortalStore,
  CategoryContentViewComponent,
  CategoryViewComponent,
  ContentType,
  NavigationBarComponent,
  VodDetailsComponent,
  WebPlayerViewComponent,
  ExternalPlayerInfoDialogComponent,
  PlayerDialogComponent
};
/*! Bundled license information:

@ngrx/component-store/fesm2022/ngrx-component-store.mjs:
  (**
   * @license MIT License
   *
   * Copyright (c) 2017-2020 Nicholas Jamieson and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *)
*/
