import {
  Injectable,
  InjectionToken,
  NgModule,
  Observable,
  PLATFORM_ID,
  ReplaySubject,
  asyncScheduler,
  catchError,
  first,
  from,
  fromEvent,
  inject,
  isPlatformBrowser,
  map,
  mergeMap,
  observeOn,
  of,
  race,
  setClassMetadata,
  takeWhile,
  tap,
  throwError,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-UIAHAIJK.js";

// node_modules/.pnpm/@ngx-pwa+local-storage@18.0.0_@angular+common@18.2.1_@angular+core@18.2.1_rxjs@7.8.1/node_modules/@ngx-pwa/local-storage/fesm2022/ngx-pwa-local-storage.mjs
var IDB_BROKEN_ERROR = "indexedDB is not working";
var IDBBrokenError = class extends Error {
  constructor() {
    super(...arguments);
    this.message = IDB_BROKEN_ERROR;
  }
};
var SERIALIZATION_ERROR = `The storage is currently localStorage,
where data must be serialized, and the provided data can't be serialized.`;
var SerializationError = class extends Error {
  constructor() {
    super(...arguments);
    this.message = SERIALIZATION_ERROR;
  }
};
var LS_PREFIX = new InjectionToken("localStoragePrefix", {
  providedIn: "root",
  factory: () => ""
});
var DEFAULT_IDB_DB_NAME = "ngStorage";
var IDB_DB_NAME = new InjectionToken("localStorageIDBDBName", {
  providedIn: "root",
  factory: () => DEFAULT_IDB_DB_NAME
});
var DEFAULT_IDB_DB_VERSION = 1;
var IDB_DB_VERSION = new InjectionToken("localStorageIDBDBVersion", {
  providedIn: "root",
  factory: () => DEFAULT_IDB_DB_VERSION
});
var DEFAULT_IDB_STORE_NAME = "localStorage";
var IDB_STORE_NAME = new InjectionToken("localStorageIDBStoreName", {
  providedIn: "root",
  factory: () => DEFAULT_IDB_STORE_NAME
});
var DEFAULT_IDB_NO_WRAP = true;
var IDB_NO_WRAP = new InjectionToken("localStorageIDBWrap", {
  providedIn: "root",
  factory: () => DEFAULT_IDB_NO_WRAP
});
var StorageModule = class _StorageModule {
  /**
   * Only useful to provide options, otherwise it does nothing.
   *
   * **Must be used at initialization, ie. in `AppModule`, and must not be loaded again in another module.**
   */
  static forRoot(config) {
    return {
      ngModule: _StorageModule,
      providers: [config.LSPrefix ? {
        provide: LS_PREFIX,
        useValue: config.LSPrefix
      } : [], config.IDBDBName ? {
        provide: IDB_DB_NAME,
        useValue: config.IDBDBName
      } : [], config.IDBStoreName ? {
        provide: IDB_STORE_NAME,
        useValue: config.IDBStoreName
      } : [], config.IDBDBVersion ? {
        provide: IDB_DB_VERSION,
        useValue: config.IDBDBVersion
      } : [], config.IDBNoWrap === false ? {
        provide: IDB_NO_WRAP,
        useValue: config.IDBNoWrap
      } : []]
    };
  }
  static {
    this.\u0275fac = function StorageModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StorageModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _StorageModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StorageModule, [{
    type: NgModule
  }], null, null);
})();
var VALIDATION_ERROR = `Data stored is not valid against the provided JSON schema.
Check your JSON schema, otherwise it means data has been corrupted.`;
var ValidationError = class extends Error {
  constructor() {
    super(...arguments);
    this.message = VALIDATION_ERROR;
  }
};
var LocalStorageDatabase = class _LocalStorageDatabase {
  constructor() {
    this.prefix = inject(LS_PREFIX) || "";
  }
  /**
   * Number of items in `localStorage`
   */
  get size() {
    return of(localStorage.length);
  }
  /**
   * Gets an item value in `localStorage`
   * @param key The item's key
   * @returns The item's value if the key exists, `undefined` otherwise, wrapped in a RxJS `Observable`
   */
  get(key) {
    const unparsedData = localStorage.getItem(this.prefixKey(key));
    if (unparsedData !== null) {
      try {
        const parsedData = JSON.parse(unparsedData);
        return of(parsedData);
      } catch (error) {
        return throwError(() => error);
      }
    }
    return of(void 0);
  }
  /**
   * Store an item in `localStorage`
   * @param key The item's key
   * @param data The item's value
   * @returns A RxJS `Observable` to wait the end of the operation
   */
  set(key, data) {
    let serializedData = null;
    const dataPrototype = Object.getPrototypeOf(data);
    if (typeof data === "object" && data !== null && !Array.isArray(data) && !(dataPrototype === Object.prototype || dataPrototype === null)) {
      return throwError(() => new SerializationError());
    }
    try {
      serializedData = JSON.stringify(data);
    } catch (error) {
      return throwError(() => error);
    }
    try {
      localStorage.setItem(this.prefixKey(key), serializedData);
    } catch (error) {
      return throwError(() => error);
    }
    return of(void 0);
  }
  /**
   * Deletes an item in `localStorage`
   * @param key The item's key
   * @returns A RxJS `Observable` to wait the end of the operation
   */
  delete(key) {
    localStorage.removeItem(this.prefixKey(key));
    return of(void 0);
  }
  /**
   * Deletes all items in `localStorage`
   * @returns A RxJS `Observable` to wait the end of the operation
   */
  clear() {
    localStorage.clear();
    return of(void 0);
  }
  /**
   * Get all keys in `localStorage`
   * Note the order of the keys may be inconsistent in Firefox
   * @returns A RxJS `Observable` iterating on keys
   */
  keys() {
    return new Observable((subscriber) => {
      for (let index = 0; index < localStorage.length; index += 1) {
        subscriber.next(this.getUnprefixedKey(index));
      }
      subscriber.complete();
    }).pipe(
      /* Required to work like other databases which are asynchronous */
      observeOn(asyncScheduler)
    );
  }
  /**
   * Check if a key exists in `localStorage`
   * @param key The item's key
   * @returns A RxJS `Observable` telling if the key exists or not
   */
  has(key) {
    for (let index = 0; index < localStorage.length; index += 1) {
      if (key === this.getUnprefixedKey(index)) {
        return of(true);
      }
    }
    return of(false);
  }
  /**
   * Get an unprefixed key
   * @param index Index of the key
   * @returns The unprefixed key name if exists, `null` otherwise
   */
  getUnprefixedKey(index) {
    const prefixedKey = localStorage.key(index);
    if (prefixedKey !== null) {
      return !this.prefix ? prefixedKey : prefixedKey.substring(this.prefix.length);
    }
    return null;
  }
  /**
   * Add the prefix to a key
   * @param key The key name
   * @returns The prefixed key name
   */
  prefixKey(key) {
    return `${this.prefix}${key}`;
  }
  static {
    this.\u0275fac = function LocalStorageDatabase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LocalStorageDatabase)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _LocalStorageDatabase,
      factory: _LocalStorageDatabase.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalStorageDatabase, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var MemoryDatabase = class _MemoryDatabase {
  constructor() {
    this.memoryStorage = /* @__PURE__ */ new Map();
  }
  /**
   * Number of items in memory
   */
  get size() {
    return of(this.memoryStorage.size);
  }
  /**
   * Gets an item value in memory
   * @param key The item's key
   * @returns The item's value if the key exists, `undefined` otherwise, wrapped in a RxJS `Observable`
   */
  get(key) {
    return of(this.memoryStorage.get(key));
  }
  /**
   * Sets an item in memory
   * @param key The item's key
   * @param data The item's value
   * @returns A RxJS `Observable` to wait the end of the operation
   */
  set(key, data) {
    this.memoryStorage.set(key, data);
    return of(void 0);
  }
  /**
   * Deletes an item in memory
   * @param key The item's key
   * @returns A RxJS `Observable` to wait the end of the operation
   */
  delete(key) {
    this.memoryStorage.delete(key);
    return of(void 0);
  }
  /**
   * Deletes all items in memory
   * @returns A RxJS `Observable` to wait the end of the operation
   */
  clear() {
    this.memoryStorage.clear();
    return of(void 0);
  }
  /**
   * Get all keys in memory
   * @returns A RxJS `Observable` iterating on keys
   */
  keys() {
    return from(this.memoryStorage.keys());
  }
  /**
   * Check if a key exists in memory
   * @param key Key name
   * @returns a RxJS `Observable` telling if the key exists or not
   */
  has(key) {
    return of(this.memoryStorage.has(key));
  }
  static {
    this.\u0275fac = function MemoryDatabase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MemoryDatabase)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _MemoryDatabase,
      factory: _MemoryDatabase.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MemoryDatabase, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function localDatabaseFactory() {
  const platformId = inject(PLATFORM_ID);
  try {
    if (isPlatformBrowser(platformId) && indexedDB !== void 0 && indexedDB !== null && "open" in indexedDB) {
      return new IndexedDBDatabase();
    } else if (isPlatformBrowser(platformId) && localStorage !== void 0 && localStorage !== null && "getItem" in localStorage) {
      return new LocalStorageDatabase();
    }
  } catch {
  }
  return new MemoryDatabase();
}
var LocalDatabase = class _LocalDatabase {
  static {
    this.\u0275fac = function LocalDatabase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LocalDatabase)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _LocalDatabase,
      factory: () => localDatabaseFactory(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalDatabase, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: localDatabaseFactory
    }]
  }], null, null);
})();
var IndexedDBDatabase = class _IndexedDBDatabase {
  constructor() {
    this.database = new ReplaySubject(1);
    this.wrapIndex = "value";
    this.dbName = inject(IDB_DB_NAME);
    this.storeName = inject(IDB_STORE_NAME);
    this.dbVersion = inject(IDB_DB_VERSION);
    this.noWrap = inject(IDB_NO_WRAP);
    this.connect();
  }
  /**
   * Information about `indexedDB` connection. *Only useful for interoperability.*
   * @returns `indexedDB` database name, store name and database version
   */
  get backingStore() {
    return {
      database: this.dbName,
      store: this.storeName,
      version: this.dbVersion
    };
  }
  /**
   * Number of items in our `indexedDB` database and object store
   */
  get size() {
    return this.transaction("readonly").pipe(
      mergeMap((transactionData) => {
        const {
          store,
          events
        } = transactionData;
        const request = store.count();
        return events.pipe(map(() => request.result));
      }),
      /* The observable will complete after the first value */
      first()
    );
  }
  /**
   * Gets an item value in our `indexedDB` store
   * @param key The item's key
   * @returns The item's value if the key exists, `undefined` otherwise, wrapped in an RxJS `Observable`
   */
  get(key) {
    return this.transaction("readonly").pipe(
      mergeMap((transactionData) => {
        const {
          store,
          events
        } = transactionData;
        const request = store.get(key);
        return events.pipe(map(() => {
          if (request.result !== void 0 && request.result !== null) {
            if (!this.noWrap && typeof request.result === "object" && this.wrapIndex in request.result && // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- Required by indexedDb behavior
            request.result[this.wrapIndex] !== void 0 && request.result[this.wrapIndex] !== null) {
              return request.result[this.wrapIndex];
            } else {
              return request.result;
            }
          }
          return void 0;
        }));
      }),
      /* The observable will complete after the first value */
      first()
    );
  }
  /**
   * Sets an item in our `indexedDB` store
   * @param key The item's key
   * @param data The item's value
   * @returns An RxJS `Observable` to wait the end of the operation
   */
  set(key, data) {
    if (data === void 0) {
      return this.delete(key);
    }
    return this.transaction("readwrite").pipe(
      mergeMap((transactionData) => {
        const {
          store,
          events
        } = transactionData;
        const dataToStore = this.noWrap ? data : {
          [this.wrapIndex]: data
        };
        store.put(dataToStore, key);
        return events.pipe(map(() => void 0));
      }),
      /* The observable will complete after the first value */
      first()
    );
  }
  /**
   * Deletes an item in our `indexedDB` store
   * @param key The item's key
   * @returns An RxJS `Observable` to wait the end of the operation
   */
  delete(key) {
    return this.transaction("readwrite").pipe(
      mergeMap((transactionData) => {
        const {
          store,
          events
        } = transactionData;
        store.delete(key);
        return events.pipe(map(() => void 0));
      }),
      /* The observable will complete after the first value */
      first()
    );
  }
  /**
   * Deletes all items from our `indexedDB` objet store
   * @returns An RxJS `Observable` to wait the end of the operation
   */
  clear() {
    return this.transaction("readwrite").pipe(
      mergeMap((transactionData) => {
        const {
          store,
          events
        } = transactionData;
        store.clear();
        return events.pipe(map(() => void 0));
      }),
      /* The observable will complete */
      first()
    );
  }
  /**
   * Get all the keys in our `indexedDB` store
   * @returns An RxJS `Observable` iterating on each key
   */
  keys() {
    return this.transaction("readonly").pipe(
      /* `first()` is used as the final operator in other methods to complete the `Observable`
       * (as it all starts from a `ReplaySubject` which never ends),
       * but as this method is iterating over multiple values, `first()` **must** be used here */
      first(),
      mergeMap((transactionData) => {
        const {
          store
        } = transactionData;
        const request = store.openKeyCursor();
        const success$ = fromEvent(request, "success").pipe(
          /* Stop the `Observable` when the cursor is `null` */
          // eslint-disable-next-line rxjs/no-ignored-takewhile-value -- Required by indexedDb behavior, getting the result from the event does not always work
          takeWhile(() => request.result !== null),
          /* This lib only allows string keys, but user could have added other types of keys from outside
           * It's OK to cast as the cursor as been tested in the previous operator */
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-base-to-string -- Required by indexedDb behavior, and strings are enforced by the lib
          map(() => request.result.key.toString()),
          /* Iterate on the cursor */
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- Required by indexedDb behavior
          tap(() => {
            request.result.continue();
          })
        );
        const error$ = this.listenError(request);
        return race([success$, error$]);
      })
    );
  }
  /**
   * Check if a key exists in our `indexedDB` store
   * @returns An RxJS `Observable` telling if the key exists or not
   */
  has(key) {
    return this.transaction("readonly").pipe(
      mergeMap((transactionData) => {
        const {
          store,
          events
        } = transactionData;
        const request = store.getKey(key);
        return events.pipe(map(() => request.result !== void 0 ? true : false));
      }),
      /* The observable will complete */
      first()
    );
  }
  /**
   * Connects to `indexedDB` and creates the object store on first time
   */
  connect() {
    let request;
    try {
      request = indexedDB.open(this.dbName, this.dbVersion);
    } catch {
      this.database.error(new IDBBrokenError());
      return;
    }
    this.createStore(request);
    const success$ = fromEvent(request, "success");
    const error$ = this.listenError(request);
    race([success$, error$]).pipe(first()).subscribe({
      next: () => {
        this.database.next(request.result);
      },
      error: () => {
        this.database.error(new IDBBrokenError());
      }
    });
  }
  /**
   * Create store on first use of `indexedDB`
   * @param request `indexedDB` database opening request
   */
  createStore(request) {
    fromEvent(request, "upgradeneeded").pipe(first()).subscribe({
      next: () => {
        if (!request.result.objectStoreNames.contains(this.storeName)) {
          request.result.createObjectStore(this.storeName);
        }
      }
    });
  }
  /**
   * Open an `indexedDB` transaction and get our store
   * @param mode `readonly` or `readwrite`
   * @returns An `indexedDB` transaction store and events, wrapped in an RxJS `Observable`
   */
  transaction(mode) {
    return this.database.pipe(mergeMap((database) => {
      let transaction;
      try {
        transaction = database.transaction([this.storeName], mode);
      } catch (error) {
        return throwError(() => error);
      }
      const store = transaction.objectStore(this.storeName);
      const events = this.listenTransactionEvents(transaction);
      return of({
        store,
        events
      });
    }));
  }
  /**
   * Listen errors on a transaction or request, and throw if trigerred
   * @param transactionOrRequest `indexedDb` transaction or request to listen
   * @returns An `Observable` listening to errors
   */
  listenError(transactionOrRequest) {
    return fromEvent(transactionOrRequest, "error").pipe(
      /* Throw on error to be able to catch errors in RxJS way.
       * Here `event.target` must be used, as `transactionOrRequest.error` will be `null`
       * if we are on the request and the error is only triggered later by the transaction */
      mergeMap((event) => throwError(() => event.target?.error))
    );
  }
  /**
   * Listen transaction `complete` and `error` events
   * @param transaction Transaction to listen
   * @returns An `Observable` listening to transaction `complete` and `error` events
   */
  listenTransactionEvents(transaction) {
    const complete$ = fromEvent(transaction, "complete");
    const error$ = this.listenError(transaction);
    return race([complete$, error$]);
  }
  static {
    this.\u0275fac = function IndexedDBDatabase_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IndexedDBDatabase)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _IndexedDBDatabase,
      factory: _IndexedDBDatabase.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IndexedDBDatabase, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var JSONValidator = class _JSONValidator {
  /**
   * Validate a JSON data against a Jsubset of the JSON Schema standard.
   * Types are enforced to validate everything: each schema must
   * @param data JSON data to validate
   * @param schema Subset of JSON Schema. Must have a `type`.
   * @returns If data is valid: `true`, if it is invalid: `false`
   * @see {@link https://github.com/cyrilletuzi/angular-async-local-storage/blob/main/docs/VALIDATION.md}
   */
  validate(data, schema) {
    switch (schema.type) {
      case "string":
        return this.validateString(data, schema);
      case "number":
      case "integer":
        return this.validateNumber(data, schema);
      case "boolean":
        return this.validateBoolean(data, schema);
      case "array":
        return this.validateArray(data, schema);
      case "object":
        return this.validateObject(data, schema);
    }
  }
  /**
   * Validate a string
   * @param data Data to validate
   * @param schema Schema describing the string
   * @returns If data is valid: `true`, if it is invalid: `false`
   */
  validateString(data, schema) {
    if (typeof data !== "string") {
      return false;
    }
    if (!this.validateConst(data, schema)) {
      return false;
    }
    if (!this.validateEnum(data, schema)) {
      return false;
    }
    if (schema.maxLength !== void 0 && data.length > schema.maxLength) {
      return false;
    }
    if (schema.minLength !== void 0 && data.length < schema.minLength) {
      return false;
    }
    if (schema.pattern) {
      try {
        const regularExpression = new RegExp(schema.pattern);
        if (!regularExpression.test(data)) {
          return false;
        }
      } catch {
      }
    }
    return true;
  }
  /**
   * Validate a number or an integer
   * @param data Data to validate
   * @param schema Schema describing the number or integer
   * @returns If data is valid: `true`, if it is invalid: `false`
   */
  validateNumber(data, schema) {
    if (typeof data !== "number") {
      return false;
    }
    if (schema.type === "integer" && !Number.isInteger(data)) {
      return false;
    }
    if (!this.validateConst(data, schema)) {
      return false;
    }
    if (!this.validateEnum(data, schema)) {
      return false;
    }
    if (schema.multipleOf && !Number.isInteger(data / schema.multipleOf)) {
      return false;
    }
    if (schema.maximum !== void 0 && data > schema.maximum) {
      return false;
    }
    if (schema.exclusiveMaximum !== void 0 && data >= schema.exclusiveMaximum) {
      return false;
    }
    if (schema.minimum !== void 0 && data < schema.minimum) {
      return false;
    }
    if (schema.exclusiveMinimum !== void 0 && data <= schema.exclusiveMinimum) {
      return false;
    }
    return true;
  }
  /**
   * Validate a boolean
   * @param data Data to validate
   * @param schema Schema describing the boolean
   * @returns If data is valid: `true`, if it is invalid: `false`
   */
  validateBoolean(data, schema) {
    if (typeof data !== "boolean") {
      return false;
    }
    if (!this.validateConst(data, schema)) {
      return false;
    }
    return true;
  }
  /**
   * Validate an array
   * @param data Data to validate
   * @param schema Schema describing the array
   * @returns If data is valid: `true`, if it is invalid: `false`
   */
  validateArray(data, schema) {
    if (!Array.isArray(data)) {
      return false;
    }
    if (schema.maxItems !== void 0 && data.length > schema.maxItems) {
      return false;
    }
    if (schema.minItems !== void 0 && data.length < schema.minItems) {
      return false;
    }
    if (schema.uniqueItems) {
      const dataSet = new Set(data);
      if (data.length !== dataSet.size) {
        return false;
      }
    }
    if (Array.isArray(schema.items) || schema.items === void 0) {
      return this.validateTuple(data, schema.items);
    }
    for (const value of data) {
      if (!this.validate(value, schema.items)) {
        return false;
      }
    }
    return true;
  }
  /**
   * Validate a tuple (array with fixed length and multiple types)
   * @param data Data to validate
   * @param schemas Schemas describing the tuple
   * @returns If data is valid: `true`, if it is invalid: `false`
   */
  validateTuple(data, schemas) {
    const lengthToCheck = schemas ? schemas.length : 0;
    if (data.length !== lengthToCheck) {
      return false;
    }
    if (schemas) {
      for (const [index, schema] of schemas.entries()) {
        if (!this.validate(data[index], schema)) {
          return false;
        }
      }
    }
    return true;
  }
  /**
   * Validate an object
   * @param data Data to validate
   * @param schema JSON schema describing the object
   * @returns If data is valid: `true`, if it is invalid: `false`
   */
  validateObject(data, schema) {
    if (typeof data !== "object" || data === null) {
      return false;
    }
    if (Object.keys(schema.properties).length < Object.keys(data).length) {
      return false;
    }
    if (schema.required) {
      for (const requiredProp of schema.required) {
        if (!Object.hasOwn(data, requiredProp)) {
          return false;
        }
      }
    }
    for (const property in schema.properties) {
      if (Object.hasOwn(schema.properties, property) && Object.hasOwn(data, property)) {
        if (!this.validate(data[property], schema.properties[property])) {
          return false;
        }
      }
    }
    return true;
  }
  /**
   * Validate a constant
   * @param data Data ta validate
   * @param schema JSON schema describing the constant
   * @returns If data is valid: `true`, if it is invalid: `false`
   */
  validateConst(data, schema) {
    if (!schema.const) {
      return true;
    }
    return data === schema.const;
  }
  /**
   * Validate an enum
   * @param data Data ta validate
   * @param schema JSON schema describing the enum
   * @returns If data is valid: `true`, if it is invalid: `false`
   */
  validateEnum(data, schema) {
    if (!schema.enum) {
      return true;
    }
    return schema.enum.includes(data);
  }
  static {
    this.\u0275fac = function JSONValidator_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JSONValidator)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _JSONValidator,
      factory: _JSONValidator.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JSONValidator, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var StorageMap = class _StorageMap {
  #database;
  #jsonValidator;
  #notifiers = /* @__PURE__ */ new Map();
  /**
   * Constructor params are provided by Angular (but can also be passed manually in tests)
   * @param database Storage to use
   */
  constructor(database) {
    this.#database = database;
    this.#jsonValidator = new JSONValidator();
  }
  /**
   * **Number of items** in storage, wrapped in an Observable.
   *
   * Note you do *not* need to unsubscribe (it is a self-completing Observable).
   *
   * @example
   * this.storageMap.size.subscribe((size) => {
   *   console.log(size);
   * });
   */
  get size() {
    return this.#database.size.pipe(this.#catchIDBBroken(() => this.#database.size));
  }
  /**
   * Tells you which storage engine is used.
   *
   * *Only useful for interoperability.*
   *
   * Note that due to some browsers issues in some special contexts
   * (like Safari cross-origin iframes),
   * **this information may be wrong at initialization,**
   * as the storage could fallback from `indexedDB` to `localStorage`
   * only after a first read or write operation.
   * @returns Storage engine used
   *
   * @see {@link https://github.com/cyrilletuzi/angular-async-local-storage/blob/main/docs/INTEROPERABILITY.md}
   *
   * @example
   * if (this.storageMap.backingEngine === 'indexedDB') {}
   */
  get backingEngine() {
    if (this.#database instanceof IndexedDBDatabase) {
      return "indexedDB";
    } else if (this.#database instanceof LocalStorageDatabase) {
      return "localStorage";
    } else if (this.#database instanceof MemoryDatabase) {
      return "memory";
    } else {
      return "unknown";
    }
  }
  /**
   * Information about `indexedDB` database.
   *
   * *Only useful for interoperability.*
   *
   * @returns `indexedDB` database name, store name and database version.
   * **Values will be empty if the storage is not `indexedDB`, so it should be used after an engine check**.
   *
   * @see {@link https://github.com/cyrilletuzi/angular-async-local-storage/blob/main/docs/INTEROPERABILITY.md}
   *
   * @example
   * if (this.storageMap.backingEngine === 'indexedDB') {
   *   const { database, store, version } = this.storageMap.backingStore;
   * }
   */
  get backingStore() {
    return this.#database instanceof IndexedDBDatabase ? this.#database.backingStore : {
      database: "",
      store: "",
      version: 0
    };
  }
  /**
   * Information about `localStorage` fallback storage.
   *
   * *Only useful for interoperability.*
   *
   * @returns `localStorage` prefix.
   * **Values will be empty if the storage is not `localStorage`, so it should be used after an engine check**.
   *
   * @see {@link https://github.com/cyrilletuzi/angular-async-local-storage/blob/main/docs/INTEROPERABILITY.md}
   *
   * @example
   * if (this.storageMap.backingEngine === 'localStorage') {
   *   const { prefix } = this.storageMap.fallbackBackingStore;
   * }
   */
  get fallbackBackingStore() {
    return this.#database instanceof LocalStorageDatabase ? {
      prefix: this.#database.prefix
    } : {
      prefix: ""
    };
  }
  get(key, schema) {
    return this.#database.get(key).pipe(
      /* Check if `indexedDb` is broken */
      this.#catchIDBBroken(() => this.#database.get(key)),
      mergeMap((data) => {
        if (data === void 0 || data === null) {
          return of(void 0);
        } else if (schema) {
          if (!this.#jsonValidator.validate(data, schema)) {
            return throwError(() => new ValidationError());
          }
          return of(data);
        }
        return of(data);
      })
    );
  }
  /**
   * Store an item in storage.
   *
   * Note that:
   * * you *do* need to subscribe, even if you do not have something specific to do after writing in storage, otherwise nothing happens (because it is how RxJS Observables work),
   * * but you do *not* need to unsubscribe (it is a self-completing Observable),
   * * setting `null` or `undefined` will remove the item to avoid some browsers issues,
   * * you should stick to serializable JSON data, meaning primitive types, arrays and literal objects. Date, Map, Set, Blob and other special structures can cause issues in some scenarios.
   * @see {@link https://github.com/cyrilletuzi/angular-async-local-storage/blob/main/docs/SERIALIZATION.md}
   *
   * @param key The item's key
   * @param data The item's value
   * @param schema Optional JSON schema to validate the data
   * @returns A RxJS Observable to wait the end of the operation
   *
   * @example
   * this.storageMap.set('key', 'value').subscribe(() => {});
   */
  set(key, data, schema) {
    if (data === void 0 || data === null) {
      return this.delete(key);
    }
    if (schema && !this.#jsonValidator.validate(data, schema)) {
      return throwError(() => new ValidationError());
    }
    return this.#database.set(key, data).pipe(
      /* Catch if `indexedDb` is broken */
      this.#catchIDBBroken(() => this.#database.set(key, data)),
      /* Notify watchers (must be last because it should only happen if the operation succeeds) */
      tap(() => {
        this.#notify(key, data);
      })
    );
  }
  /**
   * Delete an item in storage.
   *
   * Note that:
   * * you *do* need to subscribe, even if you do not have something specific to do after deleting, otherwise nothing happens (because it is how RxJS Observables work),
   * * but you do *not* need to unsubscribe (it is a self-completing Observable).
   *
   * @param key The item's key
   * @returns A RxJS Observable to wait the end of the operation
   *
   * @example
   * this.storageMap.delete('key').subscribe(() => {});
   */
  delete(key) {
    return this.#database.delete(key).pipe(
      /* Catch if `indexedDb` is broken */
      this.#catchIDBBroken(() => this.#database.delete(key)),
      /* Notify watchers (must be last because it should only happen if the operation succeeds) */
      tap(() => {
        this.#notify(key, void 0);
      })
    );
  }
  /**
   * Delete all items in storage.
   *
   * Note that:
   * * you *do* need to subscribe, even if you do not have something specific to do after clearing, otherwise nothing happens (because it is how RxJS Observables work),
   * * but you do *not* need to unsubscribe (it is a self-completing Observable).
   *
   * @returns A RxJS Observable to wait the end of the operation
   *
   * @example
   * this.storageMap.clear().subscribe(() => {});
   */
  clear() {
    return this.#database.clear().pipe(
      /* Catch if `indexedDb` is broken */
      this.#catchIDBBroken(() => this.#database.clear()),
      /* Notify watchers (must be last because it should only happen if the operation succeeds) */
      tap(() => {
        for (const key of this.#notifiers.keys()) {
          this.#notify(key, void 0);
        }
      })
    );
  }
  /**
   * Get all keys stored in storage.
   *
   * Note **this is an *iterating* Observable**:
   * * if there is no key, the `next` callback will not be invoked,
   * * if you need to wait the whole operation to end, be sure to act in the `complete` callback,
   * as this Observable can emit several values and so will invoke the `next` callback several times,
   * * you do *not* need to unsubscribe (it is a self-completing Observable).
   *
   * @returns A list of the keys wrapped in a RxJS Observable
   *
   * @example
   * this.storageMap.keys().subscribe({
   *   next: (key) => { console.log(key); },
   *   complete: () => { console.log('Done'); },
   * });
   */
  keys() {
    return this.#database.keys().pipe(this.#catchIDBBroken(() => this.#database.keys()));
  }
  /**
   * Tells if a key exists in storage.
   *
   * Note you do *not* need to unsubscribe (it is a self-completing Observable).
   *
   * @returns A RxJS Observable telling if the key exists
   *
   * @example
   * this.storageMap.has('key').subscribe((hasKey) => {
   *   if (hasKey) {}
   * });
   */
  has(key) {
    return this.#database.has(key).pipe(this.#catchIDBBroken(() => this.#database.has(key)));
  }
  watch(key, schema) {
    if (!this.#notifiers.has(key)) {
      this.#notifiers.set(key, new ReplaySubject(1));
    }
    const notifier = this.#notifiers.get(key);
    (schema ? this.get(key, schema) : this.get(key)).subscribe({
      next: (result) => {
        notifier.next(result);
      },
      error: (error) => {
        notifier.error(error);
      }
    });
    return schema ? notifier.asObservable() : notifier.asObservable();
  }
  /**
   * Notify when a value changes
   * @param key The item's key
   * @param data The new value
   */
  #notify(key, value) {
    const notifier = this.#notifiers.get(key);
    if (notifier) {
      notifier.next(value);
    }
  }
  /**
   * RxJS operator to catch if `indexedDB` is broken
   * @param operationCallback Callback with the operation to redo
   */
  #catchIDBBroken(operationCallback) {
    return catchError((error) => {
      if (error !== void 0 && error !== null && typeof error === "object" && "message" in error && error.message === IDB_BROKEN_ERROR) {
        try {
          if ("getItem" in localStorage) {
            this.#database = new LocalStorageDatabase();
          } else {
            this.#database = new MemoryDatabase();
          }
        } catch {
          this.#database = new MemoryDatabase();
        }
        return operationCallback();
      } else {
        return throwError(() => error);
      }
    });
  }
  /**
   * THIS METHOD IS FOR INTERNAL PURPOSE ONLY AND MUST NOT BE USED,
   * IT CAN BE REMOVED AT ANY TIME AND MESSING WITH IT CAN CAUSE ISSUES
   * @private
   * @ignore
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error -- Silence the not used error, it is used in tests
  // @ts-ignore
  \u0275internalGetDatabase() {
    return this.#database;
  }
  static {
    this.\u0275fac = function StorageMap_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StorageMap)(\u0275\u0275inject(LocalDatabase));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _StorageMap,
      factory: _StorageMap.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StorageMap, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: LocalDatabase
  }], null);
})();

// src/app/settings/settings.interface.ts
var VideoPlayer;
(function(VideoPlayer2) {
  VideoPlayer2["VideoJs"] = "videojs";
  VideoPlayer2["Html5Player"] = "html5";
  VideoPlayer2["MPV"] = "mpv";
  VideoPlayer2["VLC"] = "vlc";
})(VideoPlayer || (VideoPlayer = {}));

// src/app/shared/enums/store-keys.enum.ts
var STORE_KEY;
(function(STORE_KEY2) {
  STORE_KEY2["Settings"] = "settings";
  STORE_KEY2["Version"] = "version";
})(STORE_KEY || (STORE_KEY = {}));

export {
  StorageMap,
  VideoPlayer,
  STORE_KEY
};
