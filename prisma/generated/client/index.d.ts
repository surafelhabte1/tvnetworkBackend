
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model categorie
 * 
 */
export type categorie = $Result.DefaultSelection<Prisma.$categoriePayload>
/**
 * Model channel
 * 
 */
export type channel = $Result.DefaultSelection<Prisma.$channelPayload>
/**
 * Model favorite
 * 
 */
export type favorite = $Result.DefaultSelection<Prisma.$favoritePayload>
/**
 * Model program
 * 
 */
export type program = $Result.DefaultSelection<Prisma.$programPayload>
/**
 * Model type
 * 
 */
export type type = $Result.DefaultSelection<Prisma.$typePayload>
/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model watchlater
 * 
 */
export type watchlater = $Result.DefaultSelection<Prisma.$watchlaterPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.categorie.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.categorie.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.categorie`: Exposes CRUD operations for the **categorie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categorie.findMany()
    * ```
    */
  get categorie(): Prisma.categorieDelegate<ExtArgs>;

  /**
   * `prisma.channel`: Exposes CRUD operations for the **channel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Channels
    * const channels = await prisma.channel.findMany()
    * ```
    */
  get channel(): Prisma.channelDelegate<ExtArgs>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.favoriteDelegate<ExtArgs>;

  /**
   * `prisma.program`: Exposes CRUD operations for the **program** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Programs
    * const programs = await prisma.program.findMany()
    * ```
    */
  get program(): Prisma.programDelegate<ExtArgs>;

  /**
   * `prisma.type`: Exposes CRUD operations for the **type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Types
    * const types = await prisma.type.findMany()
    * ```
    */
  get type(): Prisma.typeDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.watchlater`: Exposes CRUD operations for the **watchlater** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Watchlaters
    * const watchlaters = await prisma.watchlater.findMany()
    * ```
    */
  get watchlater(): Prisma.watchlaterDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    categorie: 'categorie',
    channel: 'channel',
    favorite: 'favorite',
    program: 'program',
    type: 'type',
    user: 'user',
    watchlater: 'watchlater'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'categorie' | 'channel' | 'favorite' | 'program' | 'type' | 'user' | 'watchlater'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      categorie: {
        payload: Prisma.$categoriePayload<ExtArgs>
        fields: Prisma.categorieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categorieFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categorieFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>
          }
          findFirst: {
            args: Prisma.categorieFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categorieFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>
          }
          findMany: {
            args: Prisma.categorieFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>[]
          }
          create: {
            args: Prisma.categorieCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>
          }
          createMany: {
            args: Prisma.categorieCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categorieCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>[]
          }
          delete: {
            args: Prisma.categorieDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>
          }
          update: {
            args: Prisma.categorieUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>
          }
          deleteMany: {
            args: Prisma.categorieDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.categorieUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.categorieUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$categoriePayload>
          }
          aggregate: {
            args: Prisma.CategorieAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategorie>
          }
          groupBy: {
            args: Prisma.categorieGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategorieGroupByOutputType>[]
          }
          count: {
            args: Prisma.categorieCountArgs<ExtArgs>,
            result: $Utils.Optional<CategorieCountAggregateOutputType> | number
          }
        }
      }
      channel: {
        payload: Prisma.$channelPayload<ExtArgs>
        fields: Prisma.channelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.channelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.channelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelPayload>
          }
          findFirst: {
            args: Prisma.channelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.channelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelPayload>
          }
          findMany: {
            args: Prisma.channelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelPayload>[]
          }
          create: {
            args: Prisma.channelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelPayload>
          }
          createMany: {
            args: Prisma.channelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.channelCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelPayload>[]
          }
          delete: {
            args: Prisma.channelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelPayload>
          }
          update: {
            args: Prisma.channelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelPayload>
          }
          deleteMany: {
            args: Prisma.channelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.channelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.channelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$channelPayload>
          }
          aggregate: {
            args: Prisma.ChannelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChannel>
          }
          groupBy: {
            args: Prisma.channelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.channelCountArgs<ExtArgs>,
            result: $Utils.Optional<ChannelCountAggregateOutputType> | number
          }
        }
      }
      favorite: {
        payload: Prisma.$favoritePayload<ExtArgs>
        fields: Prisma.favoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.favoriteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$favoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.favoriteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>
          }
          findFirst: {
            args: Prisma.favoriteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$favoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.favoriteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>
          }
          findMany: {
            args: Prisma.favoriteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>[]
          }
          create: {
            args: Prisma.favoriteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>
          }
          createMany: {
            args: Prisma.favoriteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.favoriteCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>[]
          }
          delete: {
            args: Prisma.favoriteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>
          }
          update: {
            args: Prisma.favoriteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>
          }
          deleteMany: {
            args: Prisma.favoriteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.favoriteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.favoriteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$favoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.favoriteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.favoriteCountArgs<ExtArgs>,
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
      program: {
        payload: Prisma.$programPayload<ExtArgs>
        fields: Prisma.programFieldRefs
        operations: {
          findUnique: {
            args: Prisma.programFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$programPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.programFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$programPayload>
          }
          findFirst: {
            args: Prisma.programFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$programPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.programFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$programPayload>
          }
          findMany: {
            args: Prisma.programFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$programPayload>[]
          }
          create: {
            args: Prisma.programCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$programPayload>
          }
          createMany: {
            args: Prisma.programCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.programCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$programPayload>[]
          }
          delete: {
            args: Prisma.programDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$programPayload>
          }
          update: {
            args: Prisma.programUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$programPayload>
          }
          deleteMany: {
            args: Prisma.programDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.programUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.programUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$programPayload>
          }
          aggregate: {
            args: Prisma.ProgramAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProgram>
          }
          groupBy: {
            args: Prisma.programGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.programCountArgs<ExtArgs>,
            result: $Utils.Optional<ProgramCountAggregateOutputType> | number
          }
        }
      }
      type: {
        payload: Prisma.$typePayload<ExtArgs>
        fields: Prisma.typeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.typeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$typePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.typeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$typePayload>
          }
          findFirst: {
            args: Prisma.typeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$typePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.typeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$typePayload>
          }
          findMany: {
            args: Prisma.typeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$typePayload>[]
          }
          create: {
            args: Prisma.typeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$typePayload>
          }
          createMany: {
            args: Prisma.typeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.typeCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$typePayload>[]
          }
          delete: {
            args: Prisma.typeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$typePayload>
          }
          update: {
            args: Prisma.typeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$typePayload>
          }
          deleteMany: {
            args: Prisma.typeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.typeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.typeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$typePayload>
          }
          aggregate: {
            args: Prisma.TypeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateType>
          }
          groupBy: {
            args: Prisma.typeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.typeCountArgs<ExtArgs>,
            result: $Utils.Optional<TypeCountAggregateOutputType> | number
          }
        }
      }
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      watchlater: {
        payload: Prisma.$watchlaterPayload<ExtArgs>
        fields: Prisma.watchlaterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.watchlaterFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$watchlaterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.watchlaterFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$watchlaterPayload>
          }
          findFirst: {
            args: Prisma.watchlaterFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$watchlaterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.watchlaterFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$watchlaterPayload>
          }
          findMany: {
            args: Prisma.watchlaterFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$watchlaterPayload>[]
          }
          create: {
            args: Prisma.watchlaterCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$watchlaterPayload>
          }
          createMany: {
            args: Prisma.watchlaterCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.watchlaterCreateManyAndReturnArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$watchlaterPayload>[]
          }
          delete: {
            args: Prisma.watchlaterDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$watchlaterPayload>
          }
          update: {
            args: Prisma.watchlaterUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$watchlaterPayload>
          }
          deleteMany: {
            args: Prisma.watchlaterDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.watchlaterUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.watchlaterUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$watchlaterPayload>
          }
          aggregate: {
            args: Prisma.WatchlaterAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWatchlater>
          }
          groupBy: {
            args: Prisma.watchlaterGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WatchlaterGroupByOutputType>[]
          }
          count: {
            args: Prisma.watchlaterCountArgs<ExtArgs>,
            result: $Utils.Optional<WatchlaterCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategorieCountOutputType
   */

  export type CategorieCountOutputType = {
    program: number
  }

  export type CategorieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | CategorieCountOutputTypeCountProgramArgs
  }

  // Custom InputTypes
  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieCountOutputType
     */
    select?: CategorieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeCountProgramArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: programWhereInput
  }


  /**
   * Count Type ProgramCountOutputType
   */

  export type ProgramCountOutputType = {
    favorite: number
    watchlater: number
  }

  export type ProgramCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorite?: boolean | ProgramCountOutputTypeCountFavoriteArgs
    watchlater?: boolean | ProgramCountOutputTypeCountWatchlaterArgs
  }

  // Custom InputTypes
  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramCountOutputType
     */
    select?: ProgramCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountFavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favoriteWhereInput
  }

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountWatchlaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: watchlaterWhereInput
  }


  /**
   * Count Type TypeCountOutputType
   */

  export type TypeCountOutputType = {
    program: number
  }

  export type TypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | TypeCountOutputTypeCountProgramArgs
  }

  // Custom InputTypes
  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCountOutputType
     */
    select?: TypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeCountProgramArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: programWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    favorite: number
    watchlater: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorite?: boolean | UserCountOutputTypeCountFavoriteArgs
    watchlater?: boolean | UserCountOutputTypeCountWatchlaterArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favoriteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWatchlaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: watchlaterWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categorie
   */

  export type AggregateCategorie = {
    _count: CategorieCountAggregateOutputType | null
    _avg: CategorieAvgAggregateOutputType | null
    _sum: CategorieSumAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  export type CategorieAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorieSumAggregateOutputType = {
    id: number | null
  }

  export type CategorieMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategorieMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategorieCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategorieAvgAggregateInputType = {
    id?: true
  }

  export type CategorieSumAggregateInputType = {
    id?: true
  }

  export type CategorieMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategorieMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategorieCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategorieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorie to aggregate.
     */
    where?: categorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categorieOrderByWithRelationInput | categorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategorieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategorieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategorieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategorieMaxAggregateInputType
  }

  export type GetCategorieAggregateType<T extends CategorieAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorie[P]>
      : GetScalarType<T[P], AggregateCategorie[P]>
  }




  export type categorieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categorieWhereInput
    orderBy?: categorieOrderByWithAggregationInput | categorieOrderByWithAggregationInput[]
    by: CategorieScalarFieldEnum[] | CategorieScalarFieldEnum
    having?: categorieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategorieCountAggregateInputType | true
    _avg?: CategorieAvgAggregateInputType
    _sum?: CategorieSumAggregateInputType
    _min?: CategorieMinAggregateInputType
    _max?: CategorieMaxAggregateInputType
  }

  export type CategorieGroupByOutputType = {
    id: number
    name: string
    _count: CategorieCountAggregateOutputType | null
    _avg: CategorieAvgAggregateOutputType | null
    _sum: CategorieSumAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  type GetCategorieGroupByPayload<T extends categorieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategorieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategorieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategorieGroupByOutputType[P]>
            : GetScalarType<T[P], CategorieGroupByOutputType[P]>
        }
      >
    >


  export type categorieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    program?: boolean | categorie$programArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorie"]>

  export type categorieSelectScalar = {
    id?: boolean
    name?: boolean
  }


  export type categorieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | categorie$programArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $categoriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categorie"
    objects: {
      program: Prisma.$programPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["categorie"]>
    composites: {}
  }


  type categorieGetPayload<S extends boolean | null | undefined | categorieDefaultArgs> = $Result.GetResult<Prisma.$categoriePayload, S>

  type categorieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<categorieFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategorieCountAggregateInputType | true
    }

  export interface categorieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categorie'], meta: { name: 'categorie' } }
    /**
     * Find zero or one Categorie that matches the filter.
     * @param {categorieFindUniqueArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends categorieFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, categorieFindUniqueArgs<ExtArgs>>
    ): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Categorie that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {categorieFindUniqueOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends categorieFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, categorieFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Categorie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorieFindFirstArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends categorieFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, categorieFindFirstArgs<ExtArgs>>
    ): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Categorie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorieFindFirstOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends categorieFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, categorieFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categorie.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categorie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categorieWithIdOnly = await prisma.categorie.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends categorieFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categorieFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Categorie.
     * @param {categorieCreateArgs} args - Arguments to create a Categorie.
     * @example
     * // Create one Categorie
     * const Categorie = await prisma.categorie.create({
     *   data: {
     *     // ... data to create a Categorie
     *   }
     * })
     * 
    **/
    create<T extends categorieCreateArgs<ExtArgs>>(
      args: SelectSubset<T, categorieCreateArgs<ExtArgs>>
    ): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {categorieCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categorie = await prisma.categorie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends categorieCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categorieCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categorieCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categorie = await prisma.categorie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categorieWithIdOnly = await prisma.categorie.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends categorieCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, categorieCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Categorie.
     * @param {categorieDeleteArgs} args - Arguments to delete one Categorie.
     * @example
     * // Delete one Categorie
     * const Categorie = await prisma.categorie.delete({
     *   where: {
     *     // ... filter to delete one Categorie
     *   }
     * })
     * 
    **/
    delete<T extends categorieDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, categorieDeleteArgs<ExtArgs>>
    ): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Categorie.
     * @param {categorieUpdateArgs} args - Arguments to update one Categorie.
     * @example
     * // Update one Categorie
     * const categorie = await prisma.categorie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends categorieUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, categorieUpdateArgs<ExtArgs>>
    ): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {categorieDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categorie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends categorieDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categorieDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categorie = await prisma.categorie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends categorieUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, categorieUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Categorie.
     * @param {categorieUpsertArgs} args - Arguments to update or create a Categorie.
     * @example
     * // Update or create a Categorie
     * const categorie = await prisma.categorie.upsert({
     *   create: {
     *     // ... data to create a Categorie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorie we want to update
     *   }
     * })
    **/
    upsert<T extends categorieUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, categorieUpsertArgs<ExtArgs>>
    ): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorieCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categorie.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categorieCountArgs>(
      args?: Subset<T, categorieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategorieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategorieAggregateArgs>(args: Subset<T, CategorieAggregateArgs>): Prisma.PrismaPromise<GetCategorieAggregateType<T>>

    /**
     * Group by Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categorieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categorieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categorieGroupByArgs['orderBy'] }
        : { orderBy?: categorieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categorieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categorie model
   */
  readonly fields: categorieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categorie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categorieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    program<T extends categorie$programArgs<ExtArgs> = {}>(args?: Subset<T, categorie$programArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the categorie model
   */ 
  interface categorieFieldRefs {
    readonly id: FieldRef<"categorie", 'Int'>
    readonly name: FieldRef<"categorie", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categorie findUnique
   */
  export type categorieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * Filter, which categorie to fetch.
     */
    where: categorieWhereUniqueInput
  }

  /**
   * categorie findUniqueOrThrow
   */
  export type categorieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * Filter, which categorie to fetch.
     */
    where: categorieWhereUniqueInput
  }

  /**
   * categorie findFirst
   */
  export type categorieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * Filter, which categorie to fetch.
     */
    where?: categorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categorieOrderByWithRelationInput | categorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * categorie findFirstOrThrow
   */
  export type categorieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * Filter, which categorie to fetch.
     */
    where?: categorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categorieOrderByWithRelationInput | categorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * categorie findMany
   */
  export type categorieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categorieOrderByWithRelationInput | categorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * categorie create
   */
  export type categorieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * The data needed to create a categorie.
     */
    data: XOR<categorieCreateInput, categorieUncheckedCreateInput>
  }

  /**
   * categorie createMany
   */
  export type categorieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categorieCreateManyInput | categorieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categorie createManyAndReturn
   */
  export type categorieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categorieCreateManyInput | categorieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categorie update
   */
  export type categorieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * The data needed to update a categorie.
     */
    data: XOR<categorieUpdateInput, categorieUncheckedUpdateInput>
    /**
     * Choose, which categorie to update.
     */
    where: categorieWhereUniqueInput
  }

  /**
   * categorie updateMany
   */
  export type categorieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categorieUpdateManyMutationInput, categorieUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categorieWhereInput
  }

  /**
   * categorie upsert
   */
  export type categorieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * The filter to search for the categorie to update in case it exists.
     */
    where: categorieWhereUniqueInput
    /**
     * In case the categorie found by the `where` argument doesn't exist, create a new categorie with this data.
     */
    create: XOR<categorieCreateInput, categorieUncheckedCreateInput>
    /**
     * In case the categorie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categorieUpdateInput, categorieUncheckedUpdateInput>
  }

  /**
   * categorie delete
   */
  export type categorieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
    /**
     * Filter which categorie to delete.
     */
    where: categorieWhereUniqueInput
  }

  /**
   * categorie deleteMany
   */
  export type categorieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categorieWhereInput
  }

  /**
   * categorie.program
   */
  export type categorie$programArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
    where?: programWhereInput
    orderBy?: programOrderByWithRelationInput | programOrderByWithRelationInput[]
    cursor?: programWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * categorie without action
   */
  export type categorieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorie
     */
    select?: categorieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categorieInclude<ExtArgs> | null
  }


  /**
   * Model channel
   */

  export type AggregateChannel = {
    _count: ChannelCountAggregateOutputType | null
    _avg: ChannelAvgAggregateOutputType | null
    _sum: ChannelSumAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  export type ChannelAvgAggregateOutputType = {
    id: number | null
  }

  export type ChannelSumAggregateOutputType = {
    id: number | null
  }

  export type ChannelMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdat: Date | null
    status: boolean | null
  }

  export type ChannelMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdat: Date | null
    status: boolean | null
  }

  export type ChannelCountAggregateOutputType = {
    id: number
    name: number
    createdat: number
    status: number
    _all: number
  }


  export type ChannelAvgAggregateInputType = {
    id?: true
  }

  export type ChannelSumAggregateInputType = {
    id?: true
  }

  export type ChannelMinAggregateInputType = {
    id?: true
    name?: true
    createdat?: true
    status?: true
  }

  export type ChannelMaxAggregateInputType = {
    id?: true
    name?: true
    createdat?: true
    status?: true
  }

  export type ChannelCountAggregateInputType = {
    id?: true
    name?: true
    createdat?: true
    status?: true
    _all?: true
  }

  export type ChannelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which channel to aggregate.
     */
    where?: channelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of channels to fetch.
     */
    orderBy?: channelOrderByWithRelationInput | channelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: channelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned channels
    **/
    _count?: true | ChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChannelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChannelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelMaxAggregateInputType
  }

  export type GetChannelAggregateType<T extends ChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannel[P]>
      : GetScalarType<T[P], AggregateChannel[P]>
  }




  export type channelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: channelWhereInput
    orderBy?: channelOrderByWithAggregationInput | channelOrderByWithAggregationInput[]
    by: ChannelScalarFieldEnum[] | ChannelScalarFieldEnum
    having?: channelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelCountAggregateInputType | true
    _avg?: ChannelAvgAggregateInputType
    _sum?: ChannelSumAggregateInputType
    _min?: ChannelMinAggregateInputType
    _max?: ChannelMaxAggregateInputType
  }

  export type ChannelGroupByOutputType = {
    id: number
    name: string
    createdat: Date
    status: boolean
    _count: ChannelCountAggregateOutputType | null
    _avg: ChannelAvgAggregateOutputType | null
    _sum: ChannelSumAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  type GetChannelGroupByPayload<T extends channelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelGroupByOutputType[P]>
        }
      >
    >


  export type channelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdat?: boolean
    status?: boolean
    program?: boolean | channel$programArgs<ExtArgs>
  }, ExtArgs["result"]["channel"]>

  export type channelSelectScalar = {
    id?: boolean
    name?: boolean
    createdat?: boolean
    status?: boolean
  }


  export type channelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | channel$programArgs<ExtArgs>
  }


  export type $channelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "channel"
    objects: {
      program: Prisma.$programPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdat: Date
      status: boolean
    }, ExtArgs["result"]["channel"]>
    composites: {}
  }


  type channelGetPayload<S extends boolean | null | undefined | channelDefaultArgs> = $Result.GetResult<Prisma.$channelPayload, S>

  type channelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<channelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChannelCountAggregateInputType | true
    }

  export interface channelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['channel'], meta: { name: 'channel' } }
    /**
     * Find zero or one Channel that matches the filter.
     * @param {channelFindUniqueArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends channelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, channelFindUniqueArgs<ExtArgs>>
    ): Prisma__channelClient<$Result.GetResult<Prisma.$channelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Channel that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {channelFindUniqueOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends channelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, channelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__channelClient<$Result.GetResult<Prisma.$channelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Channel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelFindFirstArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends channelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, channelFindFirstArgs<ExtArgs>>
    ): Prisma__channelClient<$Result.GetResult<Prisma.$channelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Channel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelFindFirstOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends channelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, channelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__channelClient<$Result.GetResult<Prisma.$channelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Channels
     * const channels = await prisma.channel.findMany()
     * 
     * // Get first 10 Channels
     * const channels = await prisma.channel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelWithIdOnly = await prisma.channel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends channelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, channelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$channelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Channel.
     * @param {channelCreateArgs} args - Arguments to create a Channel.
     * @example
     * // Create one Channel
     * const Channel = await prisma.channel.create({
     *   data: {
     *     // ... data to create a Channel
     *   }
     * })
     * 
    **/
    create<T extends channelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, channelCreateArgs<ExtArgs>>
    ): Prisma__channelClient<$Result.GetResult<Prisma.$channelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Channels.
     * @param {channelCreateManyArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channel = await prisma.channel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends channelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, channelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Channels and returns the data saved in the database.
     * @param {channelCreateManyAndReturnArgs} args - Arguments to create many Channels.
     * @example
     * // Create many Channels
     * const channel = await prisma.channel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Channels and only return the `id`
     * const channelWithIdOnly = await prisma.channel.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends channelCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, channelCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$channelPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Channel.
     * @param {channelDeleteArgs} args - Arguments to delete one Channel.
     * @example
     * // Delete one Channel
     * const Channel = await prisma.channel.delete({
     *   where: {
     *     // ... filter to delete one Channel
     *   }
     * })
     * 
    **/
    delete<T extends channelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, channelDeleteArgs<ExtArgs>>
    ): Prisma__channelClient<$Result.GetResult<Prisma.$channelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Channel.
     * @param {channelUpdateArgs} args - Arguments to update one Channel.
     * @example
     * // Update one Channel
     * const channel = await prisma.channel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends channelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, channelUpdateArgs<ExtArgs>>
    ): Prisma__channelClient<$Result.GetResult<Prisma.$channelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Channels.
     * @param {channelDeleteManyArgs} args - Arguments to filter Channels to delete.
     * @example
     * // Delete a few Channels
     * const { count } = await prisma.channel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends channelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, channelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Channels
     * const channel = await prisma.channel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends channelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, channelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Channel.
     * @param {channelUpsertArgs} args - Arguments to update or create a Channel.
     * @example
     * // Update or create a Channel
     * const channel = await prisma.channel.upsert({
     *   create: {
     *     // ... data to create a Channel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Channel we want to update
     *   }
     * })
    **/
    upsert<T extends channelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, channelUpsertArgs<ExtArgs>>
    ): Prisma__channelClient<$Result.GetResult<Prisma.$channelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelCountArgs} args - Arguments to filter Channels to count.
     * @example
     * // Count the number of Channels
     * const count = await prisma.channel.count({
     *   where: {
     *     // ... the filter for the Channels we want to count
     *   }
     * })
    **/
    count<T extends channelCountArgs>(
      args?: Subset<T, channelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChannelAggregateArgs>(args: Subset<T, ChannelAggregateArgs>): Prisma.PrismaPromise<GetChannelAggregateType<T>>

    /**
     * Group by Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {channelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends channelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: channelGroupByArgs['orderBy'] }
        : { orderBy?: channelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, channelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the channel model
   */
  readonly fields: channelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for channel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__channelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    program<T extends channel$programArgs<ExtArgs> = {}>(args?: Subset<T, channel$programArgs<ExtArgs>>): Prisma__programClient<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the channel model
   */ 
  interface channelFieldRefs {
    readonly id: FieldRef<"channel", 'Int'>
    readonly name: FieldRef<"channel", 'String'>
    readonly createdat: FieldRef<"channel", 'DateTime'>
    readonly status: FieldRef<"channel", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * channel findUnique
   */
  export type channelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channel
     */
    select?: channelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: channelInclude<ExtArgs> | null
    /**
     * Filter, which channel to fetch.
     */
    where: channelWhereUniqueInput
  }

  /**
   * channel findUniqueOrThrow
   */
  export type channelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channel
     */
    select?: channelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: channelInclude<ExtArgs> | null
    /**
     * Filter, which channel to fetch.
     */
    where: channelWhereUniqueInput
  }

  /**
   * channel findFirst
   */
  export type channelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channel
     */
    select?: channelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: channelInclude<ExtArgs> | null
    /**
     * Filter, which channel to fetch.
     */
    where?: channelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of channels to fetch.
     */
    orderBy?: channelOrderByWithRelationInput | channelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for channels.
     */
    cursor?: channelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * channel findFirstOrThrow
   */
  export type channelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channel
     */
    select?: channelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: channelInclude<ExtArgs> | null
    /**
     * Filter, which channel to fetch.
     */
    where?: channelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of channels to fetch.
     */
    orderBy?: channelOrderByWithRelationInput | channelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for channels.
     */
    cursor?: channelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of channels.
     */
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * channel findMany
   */
  export type channelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channel
     */
    select?: channelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: channelInclude<ExtArgs> | null
    /**
     * Filter, which channels to fetch.
     */
    where?: channelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of channels to fetch.
     */
    orderBy?: channelOrderByWithRelationInput | channelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing channels.
     */
    cursor?: channelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` channels.
     */
    skip?: number
    distinct?: ChannelScalarFieldEnum | ChannelScalarFieldEnum[]
  }

  /**
   * channel create
   */
  export type channelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channel
     */
    select?: channelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: channelInclude<ExtArgs> | null
    /**
     * The data needed to create a channel.
     */
    data: XOR<channelCreateInput, channelUncheckedCreateInput>
  }

  /**
   * channel createMany
   */
  export type channelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many channels.
     */
    data: channelCreateManyInput | channelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * channel createManyAndReturn
   */
  export type channelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channel
     */
    select?: channelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: channelInclude<ExtArgs> | null
    /**
     * The data used to create many channels.
     */
    data: channelCreateManyInput | channelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * channel update
   */
  export type channelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channel
     */
    select?: channelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: channelInclude<ExtArgs> | null
    /**
     * The data needed to update a channel.
     */
    data: XOR<channelUpdateInput, channelUncheckedUpdateInput>
    /**
     * Choose, which channel to update.
     */
    where: channelWhereUniqueInput
  }

  /**
   * channel updateMany
   */
  export type channelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update channels.
     */
    data: XOR<channelUpdateManyMutationInput, channelUncheckedUpdateManyInput>
    /**
     * Filter which channels to update
     */
    where?: channelWhereInput
  }

  /**
   * channel upsert
   */
  export type channelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channel
     */
    select?: channelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: channelInclude<ExtArgs> | null
    /**
     * The filter to search for the channel to update in case it exists.
     */
    where: channelWhereUniqueInput
    /**
     * In case the channel found by the `where` argument doesn't exist, create a new channel with this data.
     */
    create: XOR<channelCreateInput, channelUncheckedCreateInput>
    /**
     * In case the channel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<channelUpdateInput, channelUncheckedUpdateInput>
  }

  /**
   * channel delete
   */
  export type channelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channel
     */
    select?: channelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: channelInclude<ExtArgs> | null
    /**
     * Filter which channel to delete.
     */
    where: channelWhereUniqueInput
  }

  /**
   * channel deleteMany
   */
  export type channelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which channels to delete
     */
    where?: channelWhereInput
  }

  /**
   * channel.program
   */
  export type channel$programArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
    where?: programWhereInput
  }

  /**
   * channel without action
   */
  export type channelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the channel
     */
    select?: channelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: channelInclude<ExtArgs> | null
  }


  /**
   * Model favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteAvgAggregateOutputType = {
    id: number | null
    userid: number | null
    programid: number | null
  }

  export type FavoriteSumAggregateOutputType = {
    id: number | null
    userid: number | null
    programid: number | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: number | null
    userid: number | null
    programid: number | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: number | null
    userid: number | null
    programid: number | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    userid: number
    programid: number
    _all: number
  }


  export type FavoriteAvgAggregateInputType = {
    id?: true
    userid?: true
    programid?: true
  }

  export type FavoriteSumAggregateInputType = {
    id?: true
    userid?: true
    programid?: true
  }

  export type FavoriteMinAggregateInputType = {
    id?: true
    userid?: true
    programid?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    userid?: true
    programid?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    userid?: true
    programid?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which favorite to aggregate.
     */
    where?: favoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorites to fetch.
     */
    orderBy?: favoriteOrderByWithRelationInput | favoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: favoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type favoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: favoriteWhereInput
    orderBy?: favoriteOrderByWithAggregationInput | favoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: favoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _avg?: FavoriteAvgAggregateInputType
    _sum?: FavoriteSumAggregateInputType
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    id: number
    userid: number
    programid: number
    _count: FavoriteCountAggregateOutputType | null
    _avg: FavoriteAvgAggregateOutputType | null
    _sum: FavoriteSumAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends favoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type favoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    programid?: boolean
    program?: boolean | programDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type favoriteSelectScalar = {
    id?: boolean
    userid?: boolean
    programid?: boolean
  }


  export type favoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | programDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }


  export type $favoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "favorite"
    objects: {
      program: Prisma.$programPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userid: number
      programid: number
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }


  type favoriteGetPayload<S extends boolean | null | undefined | favoriteDefaultArgs> = $Result.GetResult<Prisma.$favoritePayload, S>

  type favoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<favoriteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface favoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['favorite'], meta: { name: 'favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {favoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends favoriteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, favoriteFindUniqueArgs<ExtArgs>>
    ): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {favoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends favoriteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, favoriteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends favoriteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, favoriteFindFirstArgs<ExtArgs>>
    ): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends favoriteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, favoriteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends favoriteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, favoriteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Favorite.
     * @param {favoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
    **/
    create<T extends favoriteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, favoriteCreateArgs<ExtArgs>>
    ): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Favorites.
     * @param {favoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends favoriteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, favoriteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {favoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends favoriteCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, favoriteCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Favorite.
     * @param {favoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
    **/
    delete<T extends favoriteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, favoriteDeleteArgs<ExtArgs>>
    ): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Favorite.
     * @param {favoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends favoriteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, favoriteUpdateArgs<ExtArgs>>
    ): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Favorites.
     * @param {favoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends favoriteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, favoriteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends favoriteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, favoriteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Favorite.
     * @param {favoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
    **/
    upsert<T extends favoriteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, favoriteUpsertArgs<ExtArgs>>
    ): Prisma__favoriteClient<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends favoriteCountArgs>(
      args?: Subset<T, favoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {favoriteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends favoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: favoriteGroupByArgs['orderBy'] }
        : { orderBy?: favoriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, favoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the favorite model
   */
  readonly fields: favoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__favoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    program<T extends programDefaultArgs<ExtArgs> = {}>(args?: Subset<T, programDefaultArgs<ExtArgs>>): Prisma__programClient<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the favorite model
   */ 
  interface favoriteFieldRefs {
    readonly id: FieldRef<"favorite", 'Int'>
    readonly userid: FieldRef<"favorite", 'Int'>
    readonly programid: FieldRef<"favorite", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * favorite findUnique
   */
  export type favoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * Filter, which favorite to fetch.
     */
    where: favoriteWhereUniqueInput
  }

  /**
   * favorite findUniqueOrThrow
   */
  export type favoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * Filter, which favorite to fetch.
     */
    where: favoriteWhereUniqueInput
  }

  /**
   * favorite findFirst
   */
  export type favoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * Filter, which favorite to fetch.
     */
    where?: favoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorites to fetch.
     */
    orderBy?: favoriteOrderByWithRelationInput | favoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for favorites.
     */
    cursor?: favoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * favorite findFirstOrThrow
   */
  export type favoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * Filter, which favorite to fetch.
     */
    where?: favoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorites to fetch.
     */
    orderBy?: favoriteOrderByWithRelationInput | favoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for favorites.
     */
    cursor?: favoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * favorite findMany
   */
  export type favoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * Filter, which favorites to fetch.
     */
    where?: favoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of favorites to fetch.
     */
    orderBy?: favoriteOrderByWithRelationInput | favoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing favorites.
     */
    cursor?: favoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` favorites.
     */
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * favorite create
   */
  export type favoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a favorite.
     */
    data: XOR<favoriteCreateInput, favoriteUncheckedCreateInput>
  }

  /**
   * favorite createMany
   */
  export type favoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many favorites.
     */
    data: favoriteCreateManyInput | favoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * favorite createManyAndReturn
   */
  export type favoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * The data used to create many favorites.
     */
    data: favoriteCreateManyInput | favoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * favorite update
   */
  export type favoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a favorite.
     */
    data: XOR<favoriteUpdateInput, favoriteUncheckedUpdateInput>
    /**
     * Choose, which favorite to update.
     */
    where: favoriteWhereUniqueInput
  }

  /**
   * favorite updateMany
   */
  export type favoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update favorites.
     */
    data: XOR<favoriteUpdateManyMutationInput, favoriteUncheckedUpdateManyInput>
    /**
     * Filter which favorites to update
     */
    where?: favoriteWhereInput
  }

  /**
   * favorite upsert
   */
  export type favoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the favorite to update in case it exists.
     */
    where: favoriteWhereUniqueInput
    /**
     * In case the favorite found by the `where` argument doesn't exist, create a new favorite with this data.
     */
    create: XOR<favoriteCreateInput, favoriteUncheckedCreateInput>
    /**
     * In case the favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<favoriteUpdateInput, favoriteUncheckedUpdateInput>
  }

  /**
   * favorite delete
   */
  export type favoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    /**
     * Filter which favorite to delete.
     */
    where: favoriteWhereUniqueInput
  }

  /**
   * favorite deleteMany
   */
  export type favoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which favorites to delete
     */
    where?: favoriteWhereInput
  }

  /**
   * favorite without action
   */
  export type favoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
  }


  /**
   * Model program
   */

  export type AggregateProgram = {
    _count: ProgramCountAggregateOutputType | null
    _avg: ProgramAvgAggregateOutputType | null
    _sum: ProgramSumAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  export type ProgramAvgAggregateOutputType = {
    id: number | null
    channelid: number | null
    typeid: number | null
    categoryid: number | null
  }

  export type ProgramSumAggregateOutputType = {
    id: number | null
    channelid: number | null
    typeid: number | null
    categoryid: number | null
  }

  export type ProgramMinAggregateOutputType = {
    id: number | null
    title: string | null
    duration: string | null
    description: string | null
    channelid: number | null
    typeid: number | null
    categoryid: number | null
    videourl: string | null
    thumbnailurl: string | null
    createdat: Date | null
    status: boolean | null
  }

  export type ProgramMaxAggregateOutputType = {
    id: number | null
    title: string | null
    duration: string | null
    description: string | null
    channelid: number | null
    typeid: number | null
    categoryid: number | null
    videourl: string | null
    thumbnailurl: string | null
    createdat: Date | null
    status: boolean | null
  }

  export type ProgramCountAggregateOutputType = {
    id: number
    title: number
    duration: number
    description: number
    channelid: number
    typeid: number
    categoryid: number
    videourl: number
    thumbnailurl: number
    createdat: number
    status: number
    _all: number
  }


  export type ProgramAvgAggregateInputType = {
    id?: true
    channelid?: true
    typeid?: true
    categoryid?: true
  }

  export type ProgramSumAggregateInputType = {
    id?: true
    channelid?: true
    typeid?: true
    categoryid?: true
  }

  export type ProgramMinAggregateInputType = {
    id?: true
    title?: true
    duration?: true
    description?: true
    channelid?: true
    typeid?: true
    categoryid?: true
    videourl?: true
    thumbnailurl?: true
    createdat?: true
    status?: true
  }

  export type ProgramMaxAggregateInputType = {
    id?: true
    title?: true
    duration?: true
    description?: true
    channelid?: true
    typeid?: true
    categoryid?: true
    videourl?: true
    thumbnailurl?: true
    createdat?: true
    status?: true
  }

  export type ProgramCountAggregateInputType = {
    id?: true
    title?: true
    duration?: true
    description?: true
    channelid?: true
    typeid?: true
    categoryid?: true
    videourl?: true
    thumbnailurl?: true
    createdat?: true
    status?: true
    _all?: true
  }

  export type ProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which program to aggregate.
     */
    where?: programWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of programs to fetch.
     */
    orderBy?: programOrderByWithRelationInput | programOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: programWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned programs
    **/
    _count?: true | ProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgramAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgramSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramMaxAggregateInputType
  }

  export type GetProgramAggregateType<T extends ProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgram[P]>
      : GetScalarType<T[P], AggregateProgram[P]>
  }




  export type programGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: programWhereInput
    orderBy?: programOrderByWithAggregationInput | programOrderByWithAggregationInput[]
    by: ProgramScalarFieldEnum[] | ProgramScalarFieldEnum
    having?: programScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramCountAggregateInputType | true
    _avg?: ProgramAvgAggregateInputType
    _sum?: ProgramSumAggregateInputType
    _min?: ProgramMinAggregateInputType
    _max?: ProgramMaxAggregateInputType
  }

  export type ProgramGroupByOutputType = {
    id: number
    title: string
    duration: string
    description: string
    channelid: number
    typeid: number
    categoryid: number
    videourl: string
    thumbnailurl: string
    createdat: Date
    status: boolean
    _count: ProgramCountAggregateOutputType | null
    _avg: ProgramAvgAggregateOutputType | null
    _sum: ProgramSumAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  type GetProgramGroupByPayload<T extends programGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramGroupByOutputType[P]>
        }
      >
    >


  export type programSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    duration?: boolean
    description?: boolean
    channelid?: boolean
    typeid?: boolean
    categoryid?: boolean
    videourl?: boolean
    thumbnailurl?: boolean
    createdat?: boolean
    status?: boolean
    favorite?: boolean | program$favoriteArgs<ExtArgs>
    categorie?: boolean | categorieDefaultArgs<ExtArgs>
    channel?: boolean | channelDefaultArgs<ExtArgs>
    type?: boolean | typeDefaultArgs<ExtArgs>
    watchlater?: boolean | program$watchlaterArgs<ExtArgs>
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["program"]>

  export type programSelectScalar = {
    id?: boolean
    title?: boolean
    duration?: boolean
    description?: boolean
    channelid?: boolean
    typeid?: boolean
    categoryid?: boolean
    videourl?: boolean
    thumbnailurl?: boolean
    createdat?: boolean
    status?: boolean
  }


  export type programInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorite?: boolean | program$favoriteArgs<ExtArgs>
    categorie?: boolean | categorieDefaultArgs<ExtArgs>
    channel?: boolean | channelDefaultArgs<ExtArgs>
    type?: boolean | typeDefaultArgs<ExtArgs>
    watchlater?: boolean | program$watchlaterArgs<ExtArgs>
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $programPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "program"
    objects: {
      favorite: Prisma.$favoritePayload<ExtArgs>[]
      categorie: Prisma.$categoriePayload<ExtArgs>
      channel: Prisma.$channelPayload<ExtArgs>
      type: Prisma.$typePayload<ExtArgs>
      watchlater: Prisma.$watchlaterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      duration: string
      description: string
      channelid: number
      typeid: number
      categoryid: number
      videourl: string
      thumbnailurl: string
      createdat: Date
      status: boolean
    }, ExtArgs["result"]["program"]>
    composites: {}
  }


  type programGetPayload<S extends boolean | null | undefined | programDefaultArgs> = $Result.GetResult<Prisma.$programPayload, S>

  type programCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<programFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProgramCountAggregateInputType | true
    }

  export interface programDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['program'], meta: { name: 'program' } }
    /**
     * Find zero or one Program that matches the filter.
     * @param {programFindUniqueArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends programFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, programFindUniqueArgs<ExtArgs>>
    ): Prisma__programClient<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Program that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {programFindUniqueOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends programFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, programFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__programClient<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Program that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programFindFirstArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends programFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, programFindFirstArgs<ExtArgs>>
    ): Prisma__programClient<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Program that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programFindFirstOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends programFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, programFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__programClient<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Programs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Programs
     * const programs = await prisma.program.findMany()
     * 
     * // Get first 10 Programs
     * const programs = await prisma.program.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programWithIdOnly = await prisma.program.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends programFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, programFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Program.
     * @param {programCreateArgs} args - Arguments to create a Program.
     * @example
     * // Create one Program
     * const Program = await prisma.program.create({
     *   data: {
     *     // ... data to create a Program
     *   }
     * })
     * 
    **/
    create<T extends programCreateArgs<ExtArgs>>(
      args: SelectSubset<T, programCreateArgs<ExtArgs>>
    ): Prisma__programClient<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Programs.
     * @param {programCreateManyArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends programCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, programCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Programs and returns the data saved in the database.
     * @param {programCreateManyAndReturnArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Programs and only return the `id`
     * const programWithIdOnly = await prisma.program.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends programCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, programCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Program.
     * @param {programDeleteArgs} args - Arguments to delete one Program.
     * @example
     * // Delete one Program
     * const Program = await prisma.program.delete({
     *   where: {
     *     // ... filter to delete one Program
     *   }
     * })
     * 
    **/
    delete<T extends programDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, programDeleteArgs<ExtArgs>>
    ): Prisma__programClient<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Program.
     * @param {programUpdateArgs} args - Arguments to update one Program.
     * @example
     * // Update one Program
     * const program = await prisma.program.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends programUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, programUpdateArgs<ExtArgs>>
    ): Prisma__programClient<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Programs.
     * @param {programDeleteManyArgs} args - Arguments to filter Programs to delete.
     * @example
     * // Delete a few Programs
     * const { count } = await prisma.program.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends programDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, programDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends programUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, programUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Program.
     * @param {programUpsertArgs} args - Arguments to update or create a Program.
     * @example
     * // Update or create a Program
     * const program = await prisma.program.upsert({
     *   create: {
     *     // ... data to create a Program
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Program we want to update
     *   }
     * })
    **/
    upsert<T extends programUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, programUpsertArgs<ExtArgs>>
    ): Prisma__programClient<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programCountArgs} args - Arguments to filter Programs to count.
     * @example
     * // Count the number of Programs
     * const count = await prisma.program.count({
     *   where: {
     *     // ... the filter for the Programs we want to count
     *   }
     * })
    **/
    count<T extends programCountArgs>(
      args?: Subset<T, programCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProgramAggregateArgs>(args: Subset<T, ProgramAggregateArgs>): Prisma.PrismaPromise<GetProgramAggregateType<T>>

    /**
     * Group by Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends programGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: programGroupByArgs['orderBy'] }
        : { orderBy?: programGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, programGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the program model
   */
  readonly fields: programFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for program.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__programClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    favorite<T extends program$favoriteArgs<ExtArgs> = {}>(args?: Subset<T, program$favoriteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, 'findMany'> | Null>;

    categorie<T extends categorieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categorieDefaultArgs<ExtArgs>>): Prisma__categorieClient<$Result.GetResult<Prisma.$categoriePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    channel<T extends channelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, channelDefaultArgs<ExtArgs>>): Prisma__channelClient<$Result.GetResult<Prisma.$channelPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    type<T extends typeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, typeDefaultArgs<ExtArgs>>): Prisma__typeClient<$Result.GetResult<Prisma.$typePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    watchlater<T extends program$watchlaterArgs<ExtArgs> = {}>(args?: Subset<T, program$watchlaterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$watchlaterPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the program model
   */ 
  interface programFieldRefs {
    readonly id: FieldRef<"program", 'Int'>
    readonly title: FieldRef<"program", 'String'>
    readonly duration: FieldRef<"program", 'String'>
    readonly description: FieldRef<"program", 'String'>
    readonly channelid: FieldRef<"program", 'Int'>
    readonly typeid: FieldRef<"program", 'Int'>
    readonly categoryid: FieldRef<"program", 'Int'>
    readonly videourl: FieldRef<"program", 'String'>
    readonly thumbnailurl: FieldRef<"program", 'String'>
    readonly createdat: FieldRef<"program", 'DateTime'>
    readonly status: FieldRef<"program", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * program findUnique
   */
  export type programFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
    /**
     * Filter, which program to fetch.
     */
    where: programWhereUniqueInput
  }

  /**
   * program findUniqueOrThrow
   */
  export type programFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
    /**
     * Filter, which program to fetch.
     */
    where: programWhereUniqueInput
  }

  /**
   * program findFirst
   */
  export type programFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
    /**
     * Filter, which program to fetch.
     */
    where?: programWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of programs to fetch.
     */
    orderBy?: programOrderByWithRelationInput | programOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for programs.
     */
    cursor?: programWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * program findFirstOrThrow
   */
  export type programFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
    /**
     * Filter, which program to fetch.
     */
    where?: programWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of programs to fetch.
     */
    orderBy?: programOrderByWithRelationInput | programOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for programs.
     */
    cursor?: programWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * program findMany
   */
  export type programFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
    /**
     * Filter, which programs to fetch.
     */
    where?: programWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of programs to fetch.
     */
    orderBy?: programOrderByWithRelationInput | programOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing programs.
     */
    cursor?: programWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` programs.
     */
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * program create
   */
  export type programCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
    /**
     * The data needed to create a program.
     */
    data: XOR<programCreateInput, programUncheckedCreateInput>
  }

  /**
   * program createMany
   */
  export type programCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many programs.
     */
    data: programCreateManyInput | programCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * program createManyAndReturn
   */
  export type programCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
    /**
     * The data used to create many programs.
     */
    data: programCreateManyInput | programCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * program update
   */
  export type programUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
    /**
     * The data needed to update a program.
     */
    data: XOR<programUpdateInput, programUncheckedUpdateInput>
    /**
     * Choose, which program to update.
     */
    where: programWhereUniqueInput
  }

  /**
   * program updateMany
   */
  export type programUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update programs.
     */
    data: XOR<programUpdateManyMutationInput, programUncheckedUpdateManyInput>
    /**
     * Filter which programs to update
     */
    where?: programWhereInput
  }

  /**
   * program upsert
   */
  export type programUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
    /**
     * The filter to search for the program to update in case it exists.
     */
    where: programWhereUniqueInput
    /**
     * In case the program found by the `where` argument doesn't exist, create a new program with this data.
     */
    create: XOR<programCreateInput, programUncheckedCreateInput>
    /**
     * In case the program was found with the provided `where` argument, update it with this data.
     */
    update: XOR<programUpdateInput, programUncheckedUpdateInput>
  }

  /**
   * program delete
   */
  export type programDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
    /**
     * Filter which program to delete.
     */
    where: programWhereUniqueInput
  }

  /**
   * program deleteMany
   */
  export type programDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which programs to delete
     */
    where?: programWhereInput
  }

  /**
   * program.favorite
   */
  export type program$favoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    where?: favoriteWhereInput
    orderBy?: favoriteOrderByWithRelationInput | favoriteOrderByWithRelationInput[]
    cursor?: favoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * program.watchlater
   */
  export type program$watchlaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlater
     */
    select?: watchlaterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watchlaterInclude<ExtArgs> | null
    where?: watchlaterWhereInput
    orderBy?: watchlaterOrderByWithRelationInput | watchlaterOrderByWithRelationInput[]
    cursor?: watchlaterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchlaterScalarFieldEnum | WatchlaterScalarFieldEnum[]
  }

  /**
   * program without action
   */
  export type programDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
  }


  /**
   * Model type
   */

  export type AggregateType = {
    _count: TypeCountAggregateOutputType | null
    _avg: TypeAvgAggregateOutputType | null
    _sum: TypeSumAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  export type TypeAvgAggregateOutputType = {
    id: number | null
  }

  export type TypeSumAggregateOutputType = {
    id: number | null
  }

  export type TypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TypeAvgAggregateInputType = {
    id?: true
  }

  export type TypeSumAggregateInputType = {
    id?: true
  }

  export type TypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which type to aggregate.
     */
    where?: typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of types to fetch.
     */
    orderBy?: typeOrderByWithRelationInput | typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned types
    **/
    _count?: true | TypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeMaxAggregateInputType
  }

  export type GetTypeAggregateType<T extends TypeAggregateArgs> = {
        [P in keyof T & keyof AggregateType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateType[P]>
      : GetScalarType<T[P], AggregateType[P]>
  }




  export type typeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: typeWhereInput
    orderBy?: typeOrderByWithAggregationInput | typeOrderByWithAggregationInput[]
    by: TypeScalarFieldEnum[] | TypeScalarFieldEnum
    having?: typeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeCountAggregateInputType | true
    _avg?: TypeAvgAggregateInputType
    _sum?: TypeSumAggregateInputType
    _min?: TypeMinAggregateInputType
    _max?: TypeMaxAggregateInputType
  }

  export type TypeGroupByOutputType = {
    id: number
    name: string
    _count: TypeCountAggregateOutputType | null
    _avg: TypeAvgAggregateOutputType | null
    _sum: TypeSumAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  type GetTypeGroupByPayload<T extends typeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeGroupByOutputType[P]>
            : GetScalarType<T[P], TypeGroupByOutputType[P]>
        }
      >
    >


  export type typeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    program?: boolean | type$programArgs<ExtArgs>
    _count?: boolean | TypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["type"]>

  export type typeSelectScalar = {
    id?: boolean
    name?: boolean
  }


  export type typeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | type$programArgs<ExtArgs>
    _count?: boolean | TypeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $typePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "type"
    objects: {
      program: Prisma.$programPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["type"]>
    composites: {}
  }


  type typeGetPayload<S extends boolean | null | undefined | typeDefaultArgs> = $Result.GetResult<Prisma.$typePayload, S>

  type typeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<typeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TypeCountAggregateInputType | true
    }

  export interface typeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['type'], meta: { name: 'type' } }
    /**
     * Find zero or one Type that matches the filter.
     * @param {typeFindUniqueArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends typeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, typeFindUniqueArgs<ExtArgs>>
    ): Prisma__typeClient<$Result.GetResult<Prisma.$typePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Type that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {typeFindUniqueOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends typeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, typeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__typeClient<$Result.GetResult<Prisma.$typePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typeFindFirstArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends typeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, typeFindFirstArgs<ExtArgs>>
    ): Prisma__typeClient<$Result.GetResult<Prisma.$typePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typeFindFirstOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends typeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, typeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__typeClient<$Result.GetResult<Prisma.$typePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Types
     * const types = await prisma.type.findMany()
     * 
     * // Get first 10 Types
     * const types = await prisma.type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typeWithIdOnly = await prisma.type.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends typeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, typeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$typePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Type.
     * @param {typeCreateArgs} args - Arguments to create a Type.
     * @example
     * // Create one Type
     * const Type = await prisma.type.create({
     *   data: {
     *     // ... data to create a Type
     *   }
     * })
     * 
    **/
    create<T extends typeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, typeCreateArgs<ExtArgs>>
    ): Prisma__typeClient<$Result.GetResult<Prisma.$typePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Types.
     * @param {typeCreateManyArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const type = await prisma.type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends typeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, typeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Types and returns the data saved in the database.
     * @param {typeCreateManyAndReturnArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const type = await prisma.type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Types and only return the `id`
     * const typeWithIdOnly = await prisma.type.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends typeCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, typeCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$typePayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Type.
     * @param {typeDeleteArgs} args - Arguments to delete one Type.
     * @example
     * // Delete one Type
     * const Type = await prisma.type.delete({
     *   where: {
     *     // ... filter to delete one Type
     *   }
     * })
     * 
    **/
    delete<T extends typeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, typeDeleteArgs<ExtArgs>>
    ): Prisma__typeClient<$Result.GetResult<Prisma.$typePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Type.
     * @param {typeUpdateArgs} args - Arguments to update one Type.
     * @example
     * // Update one Type
     * const type = await prisma.type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends typeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, typeUpdateArgs<ExtArgs>>
    ): Prisma__typeClient<$Result.GetResult<Prisma.$typePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Types.
     * @param {typeDeleteManyArgs} args - Arguments to filter Types to delete.
     * @example
     * // Delete a few Types
     * const { count } = await prisma.type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends typeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, typeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Types
     * const type = await prisma.type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends typeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, typeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Type.
     * @param {typeUpsertArgs} args - Arguments to update or create a Type.
     * @example
     * // Update or create a Type
     * const type = await prisma.type.upsert({
     *   create: {
     *     // ... data to create a Type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Type we want to update
     *   }
     * })
    **/
    upsert<T extends typeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, typeUpsertArgs<ExtArgs>>
    ): Prisma__typeClient<$Result.GetResult<Prisma.$typePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typeCountArgs} args - Arguments to filter Types to count.
     * @example
     * // Count the number of Types
     * const count = await prisma.type.count({
     *   where: {
     *     // ... the filter for the Types we want to count
     *   }
     * })
    **/
    count<T extends typeCountArgs>(
      args?: Subset<T, typeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TypeAggregateArgs>(args: Subset<T, TypeAggregateArgs>): Prisma.PrismaPromise<GetTypeAggregateType<T>>

    /**
     * Group by Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {typeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends typeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: typeGroupByArgs['orderBy'] }
        : { orderBy?: typeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the type model
   */
  readonly fields: typeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__typeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    program<T extends type$programArgs<ExtArgs> = {}>(args?: Subset<T, type$programArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the type model
   */ 
  interface typeFieldRefs {
    readonly id: FieldRef<"type", 'Int'>
    readonly name: FieldRef<"type", 'String'>
  }
    

  // Custom InputTypes
  /**
   * type findUnique
   */
  export type typeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type
     */
    select?: typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typeInclude<ExtArgs> | null
    /**
     * Filter, which type to fetch.
     */
    where: typeWhereUniqueInput
  }

  /**
   * type findUniqueOrThrow
   */
  export type typeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type
     */
    select?: typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typeInclude<ExtArgs> | null
    /**
     * Filter, which type to fetch.
     */
    where: typeWhereUniqueInput
  }

  /**
   * type findFirst
   */
  export type typeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type
     */
    select?: typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typeInclude<ExtArgs> | null
    /**
     * Filter, which type to fetch.
     */
    where?: typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of types to fetch.
     */
    orderBy?: typeOrderByWithRelationInput | typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for types.
     */
    cursor?: typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * type findFirstOrThrow
   */
  export type typeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type
     */
    select?: typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typeInclude<ExtArgs> | null
    /**
     * Filter, which type to fetch.
     */
    where?: typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of types to fetch.
     */
    orderBy?: typeOrderByWithRelationInput | typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for types.
     */
    cursor?: typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * type findMany
   */
  export type typeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type
     */
    select?: typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typeInclude<ExtArgs> | null
    /**
     * Filter, which types to fetch.
     */
    where?: typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of types to fetch.
     */
    orderBy?: typeOrderByWithRelationInput | typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing types.
     */
    cursor?: typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` types.
     */
    skip?: number
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * type create
   */
  export type typeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type
     */
    select?: typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typeInclude<ExtArgs> | null
    /**
     * The data needed to create a type.
     */
    data: XOR<typeCreateInput, typeUncheckedCreateInput>
  }

  /**
   * type createMany
   */
  export type typeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many types.
     */
    data: typeCreateManyInput | typeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * type createManyAndReturn
   */
  export type typeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type
     */
    select?: typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typeInclude<ExtArgs> | null
    /**
     * The data used to create many types.
     */
    data: typeCreateManyInput | typeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * type update
   */
  export type typeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type
     */
    select?: typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typeInclude<ExtArgs> | null
    /**
     * The data needed to update a type.
     */
    data: XOR<typeUpdateInput, typeUncheckedUpdateInput>
    /**
     * Choose, which type to update.
     */
    where: typeWhereUniqueInput
  }

  /**
   * type updateMany
   */
  export type typeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update types.
     */
    data: XOR<typeUpdateManyMutationInput, typeUncheckedUpdateManyInput>
    /**
     * Filter which types to update
     */
    where?: typeWhereInput
  }

  /**
   * type upsert
   */
  export type typeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type
     */
    select?: typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typeInclude<ExtArgs> | null
    /**
     * The filter to search for the type to update in case it exists.
     */
    where: typeWhereUniqueInput
    /**
     * In case the type found by the `where` argument doesn't exist, create a new type with this data.
     */
    create: XOR<typeCreateInput, typeUncheckedCreateInput>
    /**
     * In case the type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<typeUpdateInput, typeUncheckedUpdateInput>
  }

  /**
   * type delete
   */
  export type typeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type
     */
    select?: typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typeInclude<ExtArgs> | null
    /**
     * Filter which type to delete.
     */
    where: typeWhereUniqueInput
  }

  /**
   * type deleteMany
   */
  export type typeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which types to delete
     */
    where?: typeWhereInput
  }

  /**
   * type.program
   */
  export type type$programArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the program
     */
    select?: programSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programInclude<ExtArgs> | null
    where?: programWhereInput
    orderBy?: programOrderByWithRelationInput | programOrderByWithRelationInput[]
    cursor?: programWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * type without action
   */
  export type typeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the type
     */
    select?: typeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: typeInclude<ExtArgs> | null
  }


  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    createdat: Date | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    createdat: Date | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullname: number
    email: number
    createdat: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    createdat?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    createdat?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    createdat?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    fullname: string
    email: string
    createdat: Date
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    createdat?: boolean
    password?: boolean
    favorite?: boolean | user$favoriteArgs<ExtArgs>
    watchlater?: boolean | user$watchlaterArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    fullname?: boolean
    email?: boolean
    createdat?: boolean
    password?: boolean
  }


  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favorite?: boolean | user$favoriteArgs<ExtArgs>
    watchlater?: boolean | user$watchlaterArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      favorite: Prisma.$favoritePayload<ExtArgs>[]
      watchlater: Prisma.$watchlaterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      email: string
      createdat: Date
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends userCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    favorite<T extends user$favoriteArgs<ExtArgs> = {}>(args?: Subset<T, user$favoriteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$favoritePayload<ExtArgs>, T, 'findMany'> | Null>;

    watchlater<T extends user$watchlaterArgs<ExtArgs> = {}>(args?: Subset<T, user$watchlaterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$watchlaterPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the user model
   */ 
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly fullname: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly createdat: FieldRef<"user", 'DateTime'>
    readonly password: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
  }

  /**
   * user.favorite
   */
  export type user$favoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the favorite
     */
    select?: favoriteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: favoriteInclude<ExtArgs> | null
    where?: favoriteWhereInput
    orderBy?: favoriteOrderByWithRelationInput | favoriteOrderByWithRelationInput[]
    cursor?: favoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * user.watchlater
   */
  export type user$watchlaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlater
     */
    select?: watchlaterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watchlaterInclude<ExtArgs> | null
    where?: watchlaterWhereInput
    orderBy?: watchlaterOrderByWithRelationInput | watchlaterOrderByWithRelationInput[]
    cursor?: watchlaterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WatchlaterScalarFieldEnum | WatchlaterScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model watchlater
   */

  export type AggregateWatchlater = {
    _count: WatchlaterCountAggregateOutputType | null
    _avg: WatchlaterAvgAggregateOutputType | null
    _sum: WatchlaterSumAggregateOutputType | null
    _min: WatchlaterMinAggregateOutputType | null
    _max: WatchlaterMaxAggregateOutputType | null
  }

  export type WatchlaterAvgAggregateOutputType = {
    id: number | null
    userid: number | null
    programid: number | null
  }

  export type WatchlaterSumAggregateOutputType = {
    id: number | null
    userid: number | null
    programid: number | null
  }

  export type WatchlaterMinAggregateOutputType = {
    id: number | null
    userid: number | null
    programid: number | null
  }

  export type WatchlaterMaxAggregateOutputType = {
    id: number | null
    userid: number | null
    programid: number | null
  }

  export type WatchlaterCountAggregateOutputType = {
    id: number
    userid: number
    programid: number
    _all: number
  }


  export type WatchlaterAvgAggregateInputType = {
    id?: true
    userid?: true
    programid?: true
  }

  export type WatchlaterSumAggregateInputType = {
    id?: true
    userid?: true
    programid?: true
  }

  export type WatchlaterMinAggregateInputType = {
    id?: true
    userid?: true
    programid?: true
  }

  export type WatchlaterMaxAggregateInputType = {
    id?: true
    userid?: true
    programid?: true
  }

  export type WatchlaterCountAggregateInputType = {
    id?: true
    userid?: true
    programid?: true
    _all?: true
  }

  export type WatchlaterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which watchlater to aggregate.
     */
    where?: watchlaterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of watchlaters to fetch.
     */
    orderBy?: watchlaterOrderByWithRelationInput | watchlaterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: watchlaterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` watchlaters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` watchlaters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned watchlaters
    **/
    _count?: true | WatchlaterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WatchlaterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WatchlaterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatchlaterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatchlaterMaxAggregateInputType
  }

  export type GetWatchlaterAggregateType<T extends WatchlaterAggregateArgs> = {
        [P in keyof T & keyof AggregateWatchlater]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatchlater[P]>
      : GetScalarType<T[P], AggregateWatchlater[P]>
  }




  export type watchlaterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: watchlaterWhereInput
    orderBy?: watchlaterOrderByWithAggregationInput | watchlaterOrderByWithAggregationInput[]
    by: WatchlaterScalarFieldEnum[] | WatchlaterScalarFieldEnum
    having?: watchlaterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatchlaterCountAggregateInputType | true
    _avg?: WatchlaterAvgAggregateInputType
    _sum?: WatchlaterSumAggregateInputType
    _min?: WatchlaterMinAggregateInputType
    _max?: WatchlaterMaxAggregateInputType
  }

  export type WatchlaterGroupByOutputType = {
    id: number
    userid: number
    programid: number
    _count: WatchlaterCountAggregateOutputType | null
    _avg: WatchlaterAvgAggregateOutputType | null
    _sum: WatchlaterSumAggregateOutputType | null
    _min: WatchlaterMinAggregateOutputType | null
    _max: WatchlaterMaxAggregateOutputType | null
  }

  type GetWatchlaterGroupByPayload<T extends watchlaterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatchlaterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatchlaterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatchlaterGroupByOutputType[P]>
            : GetScalarType<T[P], WatchlaterGroupByOutputType[P]>
        }
      >
    >


  export type watchlaterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    programid?: boolean
    program?: boolean | programDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["watchlater"]>

  export type watchlaterSelectScalar = {
    id?: boolean
    userid?: boolean
    programid?: boolean
  }


  export type watchlaterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    program?: boolean | programDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }


  export type $watchlaterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "watchlater"
    objects: {
      program: Prisma.$programPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userid: number
      programid: number
    }, ExtArgs["result"]["watchlater"]>
    composites: {}
  }


  type watchlaterGetPayload<S extends boolean | null | undefined | watchlaterDefaultArgs> = $Result.GetResult<Prisma.$watchlaterPayload, S>

  type watchlaterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<watchlaterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WatchlaterCountAggregateInputType | true
    }

  export interface watchlaterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['watchlater'], meta: { name: 'watchlater' } }
    /**
     * Find zero or one Watchlater that matches the filter.
     * @param {watchlaterFindUniqueArgs} args - Arguments to find a Watchlater
     * @example
     * // Get one Watchlater
     * const watchlater = await prisma.watchlater.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends watchlaterFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, watchlaterFindUniqueArgs<ExtArgs>>
    ): Prisma__watchlaterClient<$Result.GetResult<Prisma.$watchlaterPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Watchlater that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {watchlaterFindUniqueOrThrowArgs} args - Arguments to find a Watchlater
     * @example
     * // Get one Watchlater
     * const watchlater = await prisma.watchlater.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends watchlaterFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, watchlaterFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__watchlaterClient<$Result.GetResult<Prisma.$watchlaterPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Watchlater that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watchlaterFindFirstArgs} args - Arguments to find a Watchlater
     * @example
     * // Get one Watchlater
     * const watchlater = await prisma.watchlater.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends watchlaterFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, watchlaterFindFirstArgs<ExtArgs>>
    ): Prisma__watchlaterClient<$Result.GetResult<Prisma.$watchlaterPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Watchlater that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watchlaterFindFirstOrThrowArgs} args - Arguments to find a Watchlater
     * @example
     * // Get one Watchlater
     * const watchlater = await prisma.watchlater.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends watchlaterFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, watchlaterFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__watchlaterClient<$Result.GetResult<Prisma.$watchlaterPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Watchlaters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watchlaterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Watchlaters
     * const watchlaters = await prisma.watchlater.findMany()
     * 
     * // Get first 10 Watchlaters
     * const watchlaters = await prisma.watchlater.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watchlaterWithIdOnly = await prisma.watchlater.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends watchlaterFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, watchlaterFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$watchlaterPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Watchlater.
     * @param {watchlaterCreateArgs} args - Arguments to create a Watchlater.
     * @example
     * // Create one Watchlater
     * const Watchlater = await prisma.watchlater.create({
     *   data: {
     *     // ... data to create a Watchlater
     *   }
     * })
     * 
    **/
    create<T extends watchlaterCreateArgs<ExtArgs>>(
      args: SelectSubset<T, watchlaterCreateArgs<ExtArgs>>
    ): Prisma__watchlaterClient<$Result.GetResult<Prisma.$watchlaterPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Watchlaters.
     * @param {watchlaterCreateManyArgs} args - Arguments to create many Watchlaters.
     * @example
     * // Create many Watchlaters
     * const watchlater = await prisma.watchlater.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends watchlaterCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, watchlaterCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Watchlaters and returns the data saved in the database.
     * @param {watchlaterCreateManyAndReturnArgs} args - Arguments to create many Watchlaters.
     * @example
     * // Create many Watchlaters
     * const watchlater = await prisma.watchlater.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Watchlaters and only return the `id`
     * const watchlaterWithIdOnly = await prisma.watchlater.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
    **/
    createManyAndReturn<T extends watchlaterCreateManyAndReturnArgs<ExtArgs>>(
      args?: SelectSubset<T, watchlaterCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$watchlaterPayload<ExtArgs>, T, 'createManyAndReturn'>>

    /**
     * Delete a Watchlater.
     * @param {watchlaterDeleteArgs} args - Arguments to delete one Watchlater.
     * @example
     * // Delete one Watchlater
     * const Watchlater = await prisma.watchlater.delete({
     *   where: {
     *     // ... filter to delete one Watchlater
     *   }
     * })
     * 
    **/
    delete<T extends watchlaterDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, watchlaterDeleteArgs<ExtArgs>>
    ): Prisma__watchlaterClient<$Result.GetResult<Prisma.$watchlaterPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Watchlater.
     * @param {watchlaterUpdateArgs} args - Arguments to update one Watchlater.
     * @example
     * // Update one Watchlater
     * const watchlater = await prisma.watchlater.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends watchlaterUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, watchlaterUpdateArgs<ExtArgs>>
    ): Prisma__watchlaterClient<$Result.GetResult<Prisma.$watchlaterPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Watchlaters.
     * @param {watchlaterDeleteManyArgs} args - Arguments to filter Watchlaters to delete.
     * @example
     * // Delete a few Watchlaters
     * const { count } = await prisma.watchlater.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends watchlaterDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, watchlaterDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watchlaters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watchlaterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Watchlaters
     * const watchlater = await prisma.watchlater.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends watchlaterUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, watchlaterUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Watchlater.
     * @param {watchlaterUpsertArgs} args - Arguments to update or create a Watchlater.
     * @example
     * // Update or create a Watchlater
     * const watchlater = await prisma.watchlater.upsert({
     *   create: {
     *     // ... data to create a Watchlater
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Watchlater we want to update
     *   }
     * })
    **/
    upsert<T extends watchlaterUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, watchlaterUpsertArgs<ExtArgs>>
    ): Prisma__watchlaterClient<$Result.GetResult<Prisma.$watchlaterPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Watchlaters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watchlaterCountArgs} args - Arguments to filter Watchlaters to count.
     * @example
     * // Count the number of Watchlaters
     * const count = await prisma.watchlater.count({
     *   where: {
     *     // ... the filter for the Watchlaters we want to count
     *   }
     * })
    **/
    count<T extends watchlaterCountArgs>(
      args?: Subset<T, watchlaterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatchlaterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Watchlater.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatchlaterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WatchlaterAggregateArgs>(args: Subset<T, WatchlaterAggregateArgs>): Prisma.PrismaPromise<GetWatchlaterAggregateType<T>>

    /**
     * Group by Watchlater.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {watchlaterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends watchlaterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: watchlaterGroupByArgs['orderBy'] }
        : { orderBy?: watchlaterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, watchlaterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatchlaterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the watchlater model
   */
  readonly fields: watchlaterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for watchlater.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__watchlaterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    program<T extends programDefaultArgs<ExtArgs> = {}>(args?: Subset<T, programDefaultArgs<ExtArgs>>): Prisma__programClient<$Result.GetResult<Prisma.$programPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the watchlater model
   */ 
  interface watchlaterFieldRefs {
    readonly id: FieldRef<"watchlater", 'Int'>
    readonly userid: FieldRef<"watchlater", 'Int'>
    readonly programid: FieldRef<"watchlater", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * watchlater findUnique
   */
  export type watchlaterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlater
     */
    select?: watchlaterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watchlaterInclude<ExtArgs> | null
    /**
     * Filter, which watchlater to fetch.
     */
    where: watchlaterWhereUniqueInput
  }

  /**
   * watchlater findUniqueOrThrow
   */
  export type watchlaterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlater
     */
    select?: watchlaterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watchlaterInclude<ExtArgs> | null
    /**
     * Filter, which watchlater to fetch.
     */
    where: watchlaterWhereUniqueInput
  }

  /**
   * watchlater findFirst
   */
  export type watchlaterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlater
     */
    select?: watchlaterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watchlaterInclude<ExtArgs> | null
    /**
     * Filter, which watchlater to fetch.
     */
    where?: watchlaterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of watchlaters to fetch.
     */
    orderBy?: watchlaterOrderByWithRelationInput | watchlaterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for watchlaters.
     */
    cursor?: watchlaterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` watchlaters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` watchlaters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of watchlaters.
     */
    distinct?: WatchlaterScalarFieldEnum | WatchlaterScalarFieldEnum[]
  }

  /**
   * watchlater findFirstOrThrow
   */
  export type watchlaterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlater
     */
    select?: watchlaterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watchlaterInclude<ExtArgs> | null
    /**
     * Filter, which watchlater to fetch.
     */
    where?: watchlaterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of watchlaters to fetch.
     */
    orderBy?: watchlaterOrderByWithRelationInput | watchlaterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for watchlaters.
     */
    cursor?: watchlaterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` watchlaters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` watchlaters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of watchlaters.
     */
    distinct?: WatchlaterScalarFieldEnum | WatchlaterScalarFieldEnum[]
  }

  /**
   * watchlater findMany
   */
  export type watchlaterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlater
     */
    select?: watchlaterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watchlaterInclude<ExtArgs> | null
    /**
     * Filter, which watchlaters to fetch.
     */
    where?: watchlaterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of watchlaters to fetch.
     */
    orderBy?: watchlaterOrderByWithRelationInput | watchlaterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing watchlaters.
     */
    cursor?: watchlaterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` watchlaters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` watchlaters.
     */
    skip?: number
    distinct?: WatchlaterScalarFieldEnum | WatchlaterScalarFieldEnum[]
  }

  /**
   * watchlater create
   */
  export type watchlaterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlater
     */
    select?: watchlaterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watchlaterInclude<ExtArgs> | null
    /**
     * The data needed to create a watchlater.
     */
    data: XOR<watchlaterCreateInput, watchlaterUncheckedCreateInput>
  }

  /**
   * watchlater createMany
   */
  export type watchlaterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many watchlaters.
     */
    data: watchlaterCreateManyInput | watchlaterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * watchlater createManyAndReturn
   */
  export type watchlaterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlater
     */
    select?: watchlaterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watchlaterInclude<ExtArgs> | null
    /**
     * The data used to create many watchlaters.
     */
    data: watchlaterCreateManyInput | watchlaterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * watchlater update
   */
  export type watchlaterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlater
     */
    select?: watchlaterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watchlaterInclude<ExtArgs> | null
    /**
     * The data needed to update a watchlater.
     */
    data: XOR<watchlaterUpdateInput, watchlaterUncheckedUpdateInput>
    /**
     * Choose, which watchlater to update.
     */
    where: watchlaterWhereUniqueInput
  }

  /**
   * watchlater updateMany
   */
  export type watchlaterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update watchlaters.
     */
    data: XOR<watchlaterUpdateManyMutationInput, watchlaterUncheckedUpdateManyInput>
    /**
     * Filter which watchlaters to update
     */
    where?: watchlaterWhereInput
  }

  /**
   * watchlater upsert
   */
  export type watchlaterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlater
     */
    select?: watchlaterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watchlaterInclude<ExtArgs> | null
    /**
     * The filter to search for the watchlater to update in case it exists.
     */
    where: watchlaterWhereUniqueInput
    /**
     * In case the watchlater found by the `where` argument doesn't exist, create a new watchlater with this data.
     */
    create: XOR<watchlaterCreateInput, watchlaterUncheckedCreateInput>
    /**
     * In case the watchlater was found with the provided `where` argument, update it with this data.
     */
    update: XOR<watchlaterUpdateInput, watchlaterUncheckedUpdateInput>
  }

  /**
   * watchlater delete
   */
  export type watchlaterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlater
     */
    select?: watchlaterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watchlaterInclude<ExtArgs> | null
    /**
     * Filter which watchlater to delete.
     */
    where: watchlaterWhereUniqueInput
  }

  /**
   * watchlater deleteMany
   */
  export type watchlaterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which watchlaters to delete
     */
    where?: watchlaterWhereInput
  }

  /**
   * watchlater without action
   */
  export type watchlaterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the watchlater
     */
    select?: watchlaterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: watchlaterInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategorieScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategorieScalarFieldEnum = (typeof CategorieScalarFieldEnum)[keyof typeof CategorieScalarFieldEnum]


  export const ChannelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdat: 'createdat',
    status: 'status'
  };

  export type ChannelScalarFieldEnum = (typeof ChannelScalarFieldEnum)[keyof typeof ChannelScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    userid: 'userid',
    programid: 'programid'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const ProgramScalarFieldEnum: {
    id: 'id',
    title: 'title',
    duration: 'duration',
    description: 'description',
    channelid: 'channelid',
    typeid: 'typeid',
    categoryid: 'categoryid',
    videourl: 'videourl',
    thumbnailurl: 'thumbnailurl',
    createdat: 'createdat',
    status: 'status'
  };

  export type ProgramScalarFieldEnum = (typeof ProgramScalarFieldEnum)[keyof typeof ProgramScalarFieldEnum]


  export const TypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TypeScalarFieldEnum = (typeof TypeScalarFieldEnum)[keyof typeof TypeScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    createdat: 'createdat',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WatchlaterScalarFieldEnum: {
    id: 'id',
    userid: 'userid',
    programid: 'programid'
  };

  export type WatchlaterScalarFieldEnum = (typeof WatchlaterScalarFieldEnum)[keyof typeof WatchlaterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type categorieWhereInput = {
    AND?: categorieWhereInput | categorieWhereInput[]
    OR?: categorieWhereInput[]
    NOT?: categorieWhereInput | categorieWhereInput[]
    id?: IntFilter<"categorie"> | number
    name?: StringFilter<"categorie"> | string
    program?: ProgramListRelationFilter
  }

  export type categorieOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    program?: programOrderByRelationAggregateInput
  }

  export type categorieWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: categorieWhereInput | categorieWhereInput[]
    OR?: categorieWhereInput[]
    NOT?: categorieWhereInput | categorieWhereInput[]
    name?: StringFilter<"categorie"> | string
    program?: ProgramListRelationFilter
  }, "id">

  export type categorieOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: categorieCountOrderByAggregateInput
    _avg?: categorieAvgOrderByAggregateInput
    _max?: categorieMaxOrderByAggregateInput
    _min?: categorieMinOrderByAggregateInput
    _sum?: categorieSumOrderByAggregateInput
  }

  export type categorieScalarWhereWithAggregatesInput = {
    AND?: categorieScalarWhereWithAggregatesInput | categorieScalarWhereWithAggregatesInput[]
    OR?: categorieScalarWhereWithAggregatesInput[]
    NOT?: categorieScalarWhereWithAggregatesInput | categorieScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categorie"> | number
    name?: StringWithAggregatesFilter<"categorie"> | string
  }

  export type channelWhereInput = {
    AND?: channelWhereInput | channelWhereInput[]
    OR?: channelWhereInput[]
    NOT?: channelWhereInput | channelWhereInput[]
    id?: IntFilter<"channel"> | number
    name?: StringFilter<"channel"> | string
    createdat?: DateTimeFilter<"channel"> | Date | string
    status?: BoolFilter<"channel"> | boolean
    program?: XOR<ProgramNullableRelationFilter, programWhereInput> | null
  }

  export type channelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdat?: SortOrder
    status?: SortOrder
    program?: programOrderByWithRelationInput
  }

  export type channelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: channelWhereInput | channelWhereInput[]
    OR?: channelWhereInput[]
    NOT?: channelWhereInput | channelWhereInput[]
    name?: StringFilter<"channel"> | string
    createdat?: DateTimeFilter<"channel"> | Date | string
    status?: BoolFilter<"channel"> | boolean
    program?: XOR<ProgramNullableRelationFilter, programWhereInput> | null
  }, "id">

  export type channelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdat?: SortOrder
    status?: SortOrder
    _count?: channelCountOrderByAggregateInput
    _avg?: channelAvgOrderByAggregateInput
    _max?: channelMaxOrderByAggregateInput
    _min?: channelMinOrderByAggregateInput
    _sum?: channelSumOrderByAggregateInput
  }

  export type channelScalarWhereWithAggregatesInput = {
    AND?: channelScalarWhereWithAggregatesInput | channelScalarWhereWithAggregatesInput[]
    OR?: channelScalarWhereWithAggregatesInput[]
    NOT?: channelScalarWhereWithAggregatesInput | channelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"channel"> | number
    name?: StringWithAggregatesFilter<"channel"> | string
    createdat?: DateTimeWithAggregatesFilter<"channel"> | Date | string
    status?: BoolWithAggregatesFilter<"channel"> | boolean
  }

  export type favoriteWhereInput = {
    AND?: favoriteWhereInput | favoriteWhereInput[]
    OR?: favoriteWhereInput[]
    NOT?: favoriteWhereInput | favoriteWhereInput[]
    id?: IntFilter<"favorite"> | number
    userid?: IntFilter<"favorite"> | number
    programid?: IntFilter<"favorite"> | number
    program?: XOR<ProgramRelationFilter, programWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type favoriteOrderByWithRelationInput = {
    id?: SortOrder
    userid?: SortOrder
    programid?: SortOrder
    program?: programOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type favoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: favoriteWhereInput | favoriteWhereInput[]
    OR?: favoriteWhereInput[]
    NOT?: favoriteWhereInput | favoriteWhereInput[]
    userid?: IntFilter<"favorite"> | number
    programid?: IntFilter<"favorite"> | number
    program?: XOR<ProgramRelationFilter, programWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
  }, "id">

  export type favoriteOrderByWithAggregationInput = {
    id?: SortOrder
    userid?: SortOrder
    programid?: SortOrder
    _count?: favoriteCountOrderByAggregateInput
    _avg?: favoriteAvgOrderByAggregateInput
    _max?: favoriteMaxOrderByAggregateInput
    _min?: favoriteMinOrderByAggregateInput
    _sum?: favoriteSumOrderByAggregateInput
  }

  export type favoriteScalarWhereWithAggregatesInput = {
    AND?: favoriteScalarWhereWithAggregatesInput | favoriteScalarWhereWithAggregatesInput[]
    OR?: favoriteScalarWhereWithAggregatesInput[]
    NOT?: favoriteScalarWhereWithAggregatesInput | favoriteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"favorite"> | number
    userid?: IntWithAggregatesFilter<"favorite"> | number
    programid?: IntWithAggregatesFilter<"favorite"> | number
  }

  export type programWhereInput = {
    AND?: programWhereInput | programWhereInput[]
    OR?: programWhereInput[]
    NOT?: programWhereInput | programWhereInput[]
    id?: IntFilter<"program"> | number
    title?: StringFilter<"program"> | string
    duration?: StringFilter<"program"> | string
    description?: StringFilter<"program"> | string
    channelid?: IntFilter<"program"> | number
    typeid?: IntFilter<"program"> | number
    categoryid?: IntFilter<"program"> | number
    videourl?: StringFilter<"program"> | string
    thumbnailurl?: StringFilter<"program"> | string
    createdat?: DateTimeFilter<"program"> | Date | string
    status?: BoolFilter<"program"> | boolean
    favorite?: FavoriteListRelationFilter
    categorie?: XOR<CategorieRelationFilter, categorieWhereInput>
    channel?: XOR<ChannelRelationFilter, channelWhereInput>
    type?: XOR<TypeRelationFilter, typeWhereInput>
    watchlater?: WatchlaterListRelationFilter
  }

  export type programOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    description?: SortOrder
    channelid?: SortOrder
    typeid?: SortOrder
    categoryid?: SortOrder
    videourl?: SortOrder
    thumbnailurl?: SortOrder
    createdat?: SortOrder
    status?: SortOrder
    favorite?: favoriteOrderByRelationAggregateInput
    categorie?: categorieOrderByWithRelationInput
    channel?: channelOrderByWithRelationInput
    type?: typeOrderByWithRelationInput
    watchlater?: watchlaterOrderByRelationAggregateInput
  }

  export type programWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: programWhereInput | programWhereInput[]
    OR?: programWhereInput[]
    NOT?: programWhereInput | programWhereInput[]
    title?: StringFilter<"program"> | string
    duration?: StringFilter<"program"> | string
    description?: StringFilter<"program"> | string
    channelid?: IntFilter<"program"> | number
    typeid?: IntFilter<"program"> | number
    categoryid?: IntFilter<"program"> | number
    videourl?: StringFilter<"program"> | string
    thumbnailurl?: StringFilter<"program"> | string
    createdat?: DateTimeFilter<"program"> | Date | string
    status?: BoolFilter<"program"> | boolean
    favorite?: FavoriteListRelationFilter
    categorie?: XOR<CategorieRelationFilter, categorieWhereInput>
    channel?: XOR<ChannelRelationFilter, channelWhereInput>
    type?: XOR<TypeRelationFilter, typeWhereInput>
    watchlater?: WatchlaterListRelationFilter
  }, "id">

  export type programOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    description?: SortOrder
    channelid?: SortOrder
    typeid?: SortOrder
    categoryid?: SortOrder
    videourl?: SortOrder
    thumbnailurl?: SortOrder
    createdat?: SortOrder
    status?: SortOrder
    _count?: programCountOrderByAggregateInput
    _avg?: programAvgOrderByAggregateInput
    _max?: programMaxOrderByAggregateInput
    _min?: programMinOrderByAggregateInput
    _sum?: programSumOrderByAggregateInput
  }

  export type programScalarWhereWithAggregatesInput = {
    AND?: programScalarWhereWithAggregatesInput | programScalarWhereWithAggregatesInput[]
    OR?: programScalarWhereWithAggregatesInput[]
    NOT?: programScalarWhereWithAggregatesInput | programScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"program"> | number
    title?: StringWithAggregatesFilter<"program"> | string
    duration?: StringWithAggregatesFilter<"program"> | string
    description?: StringWithAggregatesFilter<"program"> | string
    channelid?: IntWithAggregatesFilter<"program"> | number
    typeid?: IntWithAggregatesFilter<"program"> | number
    categoryid?: IntWithAggregatesFilter<"program"> | number
    videourl?: StringWithAggregatesFilter<"program"> | string
    thumbnailurl?: StringWithAggregatesFilter<"program"> | string
    createdat?: DateTimeWithAggregatesFilter<"program"> | Date | string
    status?: BoolWithAggregatesFilter<"program"> | boolean
  }

  export type typeWhereInput = {
    AND?: typeWhereInput | typeWhereInput[]
    OR?: typeWhereInput[]
    NOT?: typeWhereInput | typeWhereInput[]
    id?: IntFilter<"type"> | number
    name?: StringFilter<"type"> | string
    program?: ProgramListRelationFilter
  }

  export type typeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    program?: programOrderByRelationAggregateInput
  }

  export type typeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: typeWhereInput | typeWhereInput[]
    OR?: typeWhereInput[]
    NOT?: typeWhereInput | typeWhereInput[]
    name?: StringFilter<"type"> | string
    program?: ProgramListRelationFilter
  }, "id">

  export type typeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: typeCountOrderByAggregateInput
    _avg?: typeAvgOrderByAggregateInput
    _max?: typeMaxOrderByAggregateInput
    _min?: typeMinOrderByAggregateInput
    _sum?: typeSumOrderByAggregateInput
  }

  export type typeScalarWhereWithAggregatesInput = {
    AND?: typeScalarWhereWithAggregatesInput | typeScalarWhereWithAggregatesInput[]
    OR?: typeScalarWhereWithAggregatesInput[]
    NOT?: typeScalarWhereWithAggregatesInput | typeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"type"> | number
    name?: StringWithAggregatesFilter<"type"> | string
  }

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    fullname?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    createdat?: DateTimeFilter<"user"> | Date | string
    password?: StringFilter<"user"> | string
    favorite?: FavoriteListRelationFilter
    watchlater?: WatchlaterListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    createdat?: SortOrder
    password?: SortOrder
    favorite?: favoriteOrderByRelationAggregateInput
    watchlater?: watchlaterOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    fullname?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    createdat?: DateTimeFilter<"user"> | Date | string
    password?: StringFilter<"user"> | string
    favorite?: FavoriteListRelationFilter
    watchlater?: WatchlaterListRelationFilter
  }, "id">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    createdat?: SortOrder
    password?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    fullname?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    createdat?: DateTimeWithAggregatesFilter<"user"> | Date | string
    password?: StringWithAggregatesFilter<"user"> | string
  }

  export type watchlaterWhereInput = {
    AND?: watchlaterWhereInput | watchlaterWhereInput[]
    OR?: watchlaterWhereInput[]
    NOT?: watchlaterWhereInput | watchlaterWhereInput[]
    id?: IntFilter<"watchlater"> | number
    userid?: IntFilter<"watchlater"> | number
    programid?: IntFilter<"watchlater"> | number
    program?: XOR<ProgramRelationFilter, programWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
  }

  export type watchlaterOrderByWithRelationInput = {
    id?: SortOrder
    userid?: SortOrder
    programid?: SortOrder
    program?: programOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type watchlaterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: watchlaterWhereInput | watchlaterWhereInput[]
    OR?: watchlaterWhereInput[]
    NOT?: watchlaterWhereInput | watchlaterWhereInput[]
    userid?: IntFilter<"watchlater"> | number
    programid?: IntFilter<"watchlater"> | number
    program?: XOR<ProgramRelationFilter, programWhereInput>
    user?: XOR<UserRelationFilter, userWhereInput>
  }, "id">

  export type watchlaterOrderByWithAggregationInput = {
    id?: SortOrder
    userid?: SortOrder
    programid?: SortOrder
    _count?: watchlaterCountOrderByAggregateInput
    _avg?: watchlaterAvgOrderByAggregateInput
    _max?: watchlaterMaxOrderByAggregateInput
    _min?: watchlaterMinOrderByAggregateInput
    _sum?: watchlaterSumOrderByAggregateInput
  }

  export type watchlaterScalarWhereWithAggregatesInput = {
    AND?: watchlaterScalarWhereWithAggregatesInput | watchlaterScalarWhereWithAggregatesInput[]
    OR?: watchlaterScalarWhereWithAggregatesInput[]
    NOT?: watchlaterScalarWhereWithAggregatesInput | watchlaterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"watchlater"> | number
    userid?: IntWithAggregatesFilter<"watchlater"> | number
    programid?: IntWithAggregatesFilter<"watchlater"> | number
  }

  export type categorieCreateInput = {
    name: string
    program?: programCreateNestedManyWithoutCategorieInput
  }

  export type categorieUncheckedCreateInput = {
    id?: number
    name: string
    program?: programUncheckedCreateNestedManyWithoutCategorieInput
  }

  export type categorieUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    program?: programUpdateManyWithoutCategorieNestedInput
  }

  export type categorieUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    program?: programUncheckedUpdateManyWithoutCategorieNestedInput
  }

  export type categorieCreateManyInput = {
    id?: number
    name: string
  }

  export type categorieUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categorieUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type channelCreateInput = {
    name: string
    createdat?: Date | string
    status?: boolean
    program?: programCreateNestedOneWithoutChannelInput
  }

  export type channelUncheckedCreateInput = {
    id?: number
    name: string
    createdat?: Date | string
    status?: boolean
    program?: programUncheckedCreateNestedOneWithoutChannelInput
  }

  export type channelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    program?: programUpdateOneWithoutChannelNestedInput
  }

  export type channelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    program?: programUncheckedUpdateOneWithoutChannelNestedInput
  }

  export type channelCreateManyInput = {
    id?: number
    name: string
    createdat?: Date | string
    status?: boolean
  }

  export type channelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type channelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type favoriteCreateInput = {
    program: programCreateNestedOneWithoutFavoriteInput
    user: userCreateNestedOneWithoutFavoriteInput
  }

  export type favoriteUncheckedCreateInput = {
    id?: number
    userid: number
    programid: number
  }

  export type favoriteUpdateInput = {
    program?: programUpdateOneRequiredWithoutFavoriteNestedInput
    user?: userUpdateOneRequiredWithoutFavoriteNestedInput
  }

  export type favoriteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    programid?: IntFieldUpdateOperationsInput | number
  }

  export type favoriteCreateManyInput = {
    id?: number
    userid: number
    programid: number
  }

  export type favoriteUpdateManyMutationInput = {

  }

  export type favoriteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    programid?: IntFieldUpdateOperationsInput | number
  }

  export type programCreateInput = {
    title: string
    duration: string
    description: string
    channelid: number
    videourl: string
    thumbnailurl: string
    createdat?: Date | string
    status?: boolean
    favorite?: favoriteCreateNestedManyWithoutProgramInput
    categorie: categorieCreateNestedOneWithoutProgramInput
    channel?: channelCreateNestedOneWithoutProgramInput
    type: typeCreateNestedOneWithoutProgramInput
    watchlater?: watchlaterCreateNestedManyWithoutProgramInput
  }

  export type programUncheckedCreateInput = {
    id?: number
    title: string
    duration: string
    description: string
    channelid: number
    typeid: number
    categoryid: number
    videourl: string
    thumbnailurl: string
    createdat?: Date | string
    status?: boolean
    favorite?: favoriteUncheckedCreateNestedManyWithoutProgramInput
    watchlater?: watchlaterUncheckedCreateNestedManyWithoutProgramInput
  }

  export type programUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    channelid?: IntFieldUpdateOperationsInput | number
    videourl?: StringFieldUpdateOperationsInput | string
    thumbnailurl?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    favorite?: favoriteUpdateManyWithoutProgramNestedInput
    categorie?: categorieUpdateOneRequiredWithoutProgramNestedInput
    channel?: channelUpdateOneRequiredWithoutProgramNestedInput
    type?: typeUpdateOneRequiredWithoutProgramNestedInput
    watchlater?: watchlaterUpdateManyWithoutProgramNestedInput
  }

  export type programUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    channelid?: IntFieldUpdateOperationsInput | number
    typeid?: IntFieldUpdateOperationsInput | number
    categoryid?: IntFieldUpdateOperationsInput | number
    videourl?: StringFieldUpdateOperationsInput | string
    thumbnailurl?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    favorite?: favoriteUncheckedUpdateManyWithoutProgramNestedInput
    watchlater?: watchlaterUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type programCreateManyInput = {
    id?: number
    title: string
    duration: string
    description: string
    channelid: number
    typeid: number
    categoryid: number
    videourl: string
    thumbnailurl: string
    createdat?: Date | string
    status?: boolean
  }

  export type programUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    channelid?: IntFieldUpdateOperationsInput | number
    videourl?: StringFieldUpdateOperationsInput | string
    thumbnailurl?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type programUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    channelid?: IntFieldUpdateOperationsInput | number
    typeid?: IntFieldUpdateOperationsInput | number
    categoryid?: IntFieldUpdateOperationsInput | number
    videourl?: StringFieldUpdateOperationsInput | string
    thumbnailurl?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type typeCreateInput = {
    name: string
    program?: programCreateNestedManyWithoutTypeInput
  }

  export type typeUncheckedCreateInput = {
    id?: number
    name: string
    program?: programUncheckedCreateNestedManyWithoutTypeInput
  }

  export type typeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    program?: programUpdateManyWithoutTypeNestedInput
  }

  export type typeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    program?: programUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type typeCreateManyInput = {
    id?: number
    name: string
  }

  export type typeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type typeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type userCreateInput = {
    fullname: string
    email: string
    createdat?: Date | string
    password: string
    favorite?: favoriteCreateNestedManyWithoutUserInput
    watchlater?: watchlaterCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    fullname: string
    email: string
    createdat?: Date | string
    password: string
    favorite?: favoriteUncheckedCreateNestedManyWithoutUserInput
    watchlater?: watchlaterUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    favorite?: favoriteUpdateManyWithoutUserNestedInput
    watchlater?: watchlaterUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    favorite?: favoriteUncheckedUpdateManyWithoutUserNestedInput
    watchlater?: watchlaterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    fullname: string
    email: string
    createdat?: Date | string
    password: string
  }

  export type userUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type watchlaterCreateInput = {
    program: programCreateNestedOneWithoutWatchlaterInput
    user: userCreateNestedOneWithoutWatchlaterInput
  }

  export type watchlaterUncheckedCreateInput = {
    id?: number
    userid: number
    programid: number
  }

  export type watchlaterUpdateInput = {
    program?: programUpdateOneRequiredWithoutWatchlaterNestedInput
    user?: userUpdateOneRequiredWithoutWatchlaterNestedInput
  }

  export type watchlaterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    programid?: IntFieldUpdateOperationsInput | number
  }

  export type watchlaterCreateManyInput = {
    id?: number
    userid: number
    programid: number
  }

  export type watchlaterUpdateManyMutationInput = {

  }

  export type watchlaterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    programid?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProgramListRelationFilter = {
    every?: programWhereInput
    some?: programWhereInput
    none?: programWhereInput
  }

  export type programOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categorieCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categorieAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categorieMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categorieMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type categorieSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProgramNullableRelationFilter = {
    is?: programWhereInput | null
    isNot?: programWhereInput | null
  }

  export type channelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdat?: SortOrder
    status?: SortOrder
  }

  export type channelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type channelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdat?: SortOrder
    status?: SortOrder
  }

  export type channelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdat?: SortOrder
    status?: SortOrder
  }

  export type channelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProgramRelationFilter = {
    is?: programWhereInput
    isNot?: programWhereInput
  }

  export type UserRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type favoriteCountOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    programid?: SortOrder
  }

  export type favoriteAvgOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    programid?: SortOrder
  }

  export type favoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    programid?: SortOrder
  }

  export type favoriteMinOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    programid?: SortOrder
  }

  export type favoriteSumOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    programid?: SortOrder
  }

  export type FavoriteListRelationFilter = {
    every?: favoriteWhereInput
    some?: favoriteWhereInput
    none?: favoriteWhereInput
  }

  export type CategorieRelationFilter = {
    is?: categorieWhereInput
    isNot?: categorieWhereInput
  }

  export type ChannelRelationFilter = {
    is?: channelWhereInput
    isNot?: channelWhereInput
  }

  export type TypeRelationFilter = {
    is?: typeWhereInput
    isNot?: typeWhereInput
  }

  export type WatchlaterListRelationFilter = {
    every?: watchlaterWhereInput
    some?: watchlaterWhereInput
    none?: watchlaterWhereInput
  }

  export type favoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type watchlaterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type programCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    description?: SortOrder
    channelid?: SortOrder
    typeid?: SortOrder
    categoryid?: SortOrder
    videourl?: SortOrder
    thumbnailurl?: SortOrder
    createdat?: SortOrder
    status?: SortOrder
  }

  export type programAvgOrderByAggregateInput = {
    id?: SortOrder
    channelid?: SortOrder
    typeid?: SortOrder
    categoryid?: SortOrder
  }

  export type programMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    description?: SortOrder
    channelid?: SortOrder
    typeid?: SortOrder
    categoryid?: SortOrder
    videourl?: SortOrder
    thumbnailurl?: SortOrder
    createdat?: SortOrder
    status?: SortOrder
  }

  export type programMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    description?: SortOrder
    channelid?: SortOrder
    typeid?: SortOrder
    categoryid?: SortOrder
    videourl?: SortOrder
    thumbnailurl?: SortOrder
    createdat?: SortOrder
    status?: SortOrder
  }

  export type programSumOrderByAggregateInput = {
    id?: SortOrder
    channelid?: SortOrder
    typeid?: SortOrder
    categoryid?: SortOrder
  }

  export type typeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type typeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type typeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type typeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type typeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    createdat?: SortOrder
    password?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    createdat?: SortOrder
    password?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    createdat?: SortOrder
    password?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type watchlaterCountOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    programid?: SortOrder
  }

  export type watchlaterAvgOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    programid?: SortOrder
  }

  export type watchlaterMaxOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    programid?: SortOrder
  }

  export type watchlaterMinOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    programid?: SortOrder
  }

  export type watchlaterSumOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    programid?: SortOrder
  }

  export type programCreateNestedManyWithoutCategorieInput = {
    create?: XOR<programCreateWithoutCategorieInput, programUncheckedCreateWithoutCategorieInput> | programCreateWithoutCategorieInput[] | programUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: programCreateOrConnectWithoutCategorieInput | programCreateOrConnectWithoutCategorieInput[]
    createMany?: programCreateManyCategorieInputEnvelope
    connect?: programWhereUniqueInput | programWhereUniqueInput[]
  }

  export type programUncheckedCreateNestedManyWithoutCategorieInput = {
    create?: XOR<programCreateWithoutCategorieInput, programUncheckedCreateWithoutCategorieInput> | programCreateWithoutCategorieInput[] | programUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: programCreateOrConnectWithoutCategorieInput | programCreateOrConnectWithoutCategorieInput[]
    createMany?: programCreateManyCategorieInputEnvelope
    connect?: programWhereUniqueInput | programWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type programUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<programCreateWithoutCategorieInput, programUncheckedCreateWithoutCategorieInput> | programCreateWithoutCategorieInput[] | programUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: programCreateOrConnectWithoutCategorieInput | programCreateOrConnectWithoutCategorieInput[]
    upsert?: programUpsertWithWhereUniqueWithoutCategorieInput | programUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: programCreateManyCategorieInputEnvelope
    set?: programWhereUniqueInput | programWhereUniqueInput[]
    disconnect?: programWhereUniqueInput | programWhereUniqueInput[]
    delete?: programWhereUniqueInput | programWhereUniqueInput[]
    connect?: programWhereUniqueInput | programWhereUniqueInput[]
    update?: programUpdateWithWhereUniqueWithoutCategorieInput | programUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: programUpdateManyWithWhereWithoutCategorieInput | programUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: programScalarWhereInput | programScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type programUncheckedUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<programCreateWithoutCategorieInput, programUncheckedCreateWithoutCategorieInput> | programCreateWithoutCategorieInput[] | programUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: programCreateOrConnectWithoutCategorieInput | programCreateOrConnectWithoutCategorieInput[]
    upsert?: programUpsertWithWhereUniqueWithoutCategorieInput | programUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: programCreateManyCategorieInputEnvelope
    set?: programWhereUniqueInput | programWhereUniqueInput[]
    disconnect?: programWhereUniqueInput | programWhereUniqueInput[]
    delete?: programWhereUniqueInput | programWhereUniqueInput[]
    connect?: programWhereUniqueInput | programWhereUniqueInput[]
    update?: programUpdateWithWhereUniqueWithoutCategorieInput | programUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: programUpdateManyWithWhereWithoutCategorieInput | programUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: programScalarWhereInput | programScalarWhereInput[]
  }

  export type programCreateNestedOneWithoutChannelInput = {
    create?: XOR<programCreateWithoutChannelInput, programUncheckedCreateWithoutChannelInput>
    connectOrCreate?: programCreateOrConnectWithoutChannelInput
    connect?: programWhereUniqueInput
  }

  export type programUncheckedCreateNestedOneWithoutChannelInput = {
    create?: XOR<programCreateWithoutChannelInput, programUncheckedCreateWithoutChannelInput>
    connectOrCreate?: programCreateOrConnectWithoutChannelInput
    connect?: programWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type programUpdateOneWithoutChannelNestedInput = {
    create?: XOR<programCreateWithoutChannelInput, programUncheckedCreateWithoutChannelInput>
    connectOrCreate?: programCreateOrConnectWithoutChannelInput
    upsert?: programUpsertWithoutChannelInput
    disconnect?: programWhereInput | boolean
    delete?: programWhereInput | boolean
    connect?: programWhereUniqueInput
    update?: XOR<XOR<programUpdateToOneWithWhereWithoutChannelInput, programUpdateWithoutChannelInput>, programUncheckedUpdateWithoutChannelInput>
  }

  export type programUncheckedUpdateOneWithoutChannelNestedInput = {
    create?: XOR<programCreateWithoutChannelInput, programUncheckedCreateWithoutChannelInput>
    connectOrCreate?: programCreateOrConnectWithoutChannelInput
    upsert?: programUpsertWithoutChannelInput
    disconnect?: programWhereInput | boolean
    delete?: programWhereInput | boolean
    connect?: programWhereUniqueInput
    update?: XOR<XOR<programUpdateToOneWithWhereWithoutChannelInput, programUpdateWithoutChannelInput>, programUncheckedUpdateWithoutChannelInput>
  }

  export type programCreateNestedOneWithoutFavoriteInput = {
    create?: XOR<programCreateWithoutFavoriteInput, programUncheckedCreateWithoutFavoriteInput>
    connectOrCreate?: programCreateOrConnectWithoutFavoriteInput
    connect?: programWhereUniqueInput
  }

  export type userCreateNestedOneWithoutFavoriteInput = {
    create?: XOR<userCreateWithoutFavoriteInput, userUncheckedCreateWithoutFavoriteInput>
    connectOrCreate?: userCreateOrConnectWithoutFavoriteInput
    connect?: userWhereUniqueInput
  }

  export type programUpdateOneRequiredWithoutFavoriteNestedInput = {
    create?: XOR<programCreateWithoutFavoriteInput, programUncheckedCreateWithoutFavoriteInput>
    connectOrCreate?: programCreateOrConnectWithoutFavoriteInput
    upsert?: programUpsertWithoutFavoriteInput
    connect?: programWhereUniqueInput
    update?: XOR<XOR<programUpdateToOneWithWhereWithoutFavoriteInput, programUpdateWithoutFavoriteInput>, programUncheckedUpdateWithoutFavoriteInput>
  }

  export type userUpdateOneRequiredWithoutFavoriteNestedInput = {
    create?: XOR<userCreateWithoutFavoriteInput, userUncheckedCreateWithoutFavoriteInput>
    connectOrCreate?: userCreateOrConnectWithoutFavoriteInput
    upsert?: userUpsertWithoutFavoriteInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutFavoriteInput, userUpdateWithoutFavoriteInput>, userUncheckedUpdateWithoutFavoriteInput>
  }

  export type favoriteCreateNestedManyWithoutProgramInput = {
    create?: XOR<favoriteCreateWithoutProgramInput, favoriteUncheckedCreateWithoutProgramInput> | favoriteCreateWithoutProgramInput[] | favoriteUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: favoriteCreateOrConnectWithoutProgramInput | favoriteCreateOrConnectWithoutProgramInput[]
    createMany?: favoriteCreateManyProgramInputEnvelope
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
  }

  export type categorieCreateNestedOneWithoutProgramInput = {
    create?: XOR<categorieCreateWithoutProgramInput, categorieUncheckedCreateWithoutProgramInput>
    connectOrCreate?: categorieCreateOrConnectWithoutProgramInput
    connect?: categorieWhereUniqueInput
  }

  export type channelCreateNestedOneWithoutProgramInput = {
    create?: XOR<channelCreateWithoutProgramInput, channelUncheckedCreateWithoutProgramInput>
    connectOrCreate?: channelCreateOrConnectWithoutProgramInput
    connect?: channelWhereUniqueInput
  }

  export type typeCreateNestedOneWithoutProgramInput = {
    create?: XOR<typeCreateWithoutProgramInput, typeUncheckedCreateWithoutProgramInput>
    connectOrCreate?: typeCreateOrConnectWithoutProgramInput
    connect?: typeWhereUniqueInput
  }

  export type watchlaterCreateNestedManyWithoutProgramInput = {
    create?: XOR<watchlaterCreateWithoutProgramInput, watchlaterUncheckedCreateWithoutProgramInput> | watchlaterCreateWithoutProgramInput[] | watchlaterUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: watchlaterCreateOrConnectWithoutProgramInput | watchlaterCreateOrConnectWithoutProgramInput[]
    createMany?: watchlaterCreateManyProgramInputEnvelope
    connect?: watchlaterWhereUniqueInput | watchlaterWhereUniqueInput[]
  }

  export type favoriteUncheckedCreateNestedManyWithoutProgramInput = {
    create?: XOR<favoriteCreateWithoutProgramInput, favoriteUncheckedCreateWithoutProgramInput> | favoriteCreateWithoutProgramInput[] | favoriteUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: favoriteCreateOrConnectWithoutProgramInput | favoriteCreateOrConnectWithoutProgramInput[]
    createMany?: favoriteCreateManyProgramInputEnvelope
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
  }

  export type watchlaterUncheckedCreateNestedManyWithoutProgramInput = {
    create?: XOR<watchlaterCreateWithoutProgramInput, watchlaterUncheckedCreateWithoutProgramInput> | watchlaterCreateWithoutProgramInput[] | watchlaterUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: watchlaterCreateOrConnectWithoutProgramInput | watchlaterCreateOrConnectWithoutProgramInput[]
    createMany?: watchlaterCreateManyProgramInputEnvelope
    connect?: watchlaterWhereUniqueInput | watchlaterWhereUniqueInput[]
  }

  export type favoriteUpdateManyWithoutProgramNestedInput = {
    create?: XOR<favoriteCreateWithoutProgramInput, favoriteUncheckedCreateWithoutProgramInput> | favoriteCreateWithoutProgramInput[] | favoriteUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: favoriteCreateOrConnectWithoutProgramInput | favoriteCreateOrConnectWithoutProgramInput[]
    upsert?: favoriteUpsertWithWhereUniqueWithoutProgramInput | favoriteUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: favoriteCreateManyProgramInputEnvelope
    set?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    disconnect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    delete?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    update?: favoriteUpdateWithWhereUniqueWithoutProgramInput | favoriteUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: favoriteUpdateManyWithWhereWithoutProgramInput | favoriteUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: favoriteScalarWhereInput | favoriteScalarWhereInput[]
  }

  export type categorieUpdateOneRequiredWithoutProgramNestedInput = {
    create?: XOR<categorieCreateWithoutProgramInput, categorieUncheckedCreateWithoutProgramInput>
    connectOrCreate?: categorieCreateOrConnectWithoutProgramInput
    upsert?: categorieUpsertWithoutProgramInput
    connect?: categorieWhereUniqueInput
    update?: XOR<XOR<categorieUpdateToOneWithWhereWithoutProgramInput, categorieUpdateWithoutProgramInput>, categorieUncheckedUpdateWithoutProgramInput>
  }

  export type channelUpdateOneRequiredWithoutProgramNestedInput = {
    create?: XOR<channelCreateWithoutProgramInput, channelUncheckedCreateWithoutProgramInput>
    connectOrCreate?: channelCreateOrConnectWithoutProgramInput
    upsert?: channelUpsertWithoutProgramInput
    connect?: channelWhereUniqueInput
    update?: XOR<XOR<channelUpdateToOneWithWhereWithoutProgramInput, channelUpdateWithoutProgramInput>, channelUncheckedUpdateWithoutProgramInput>
  }

  export type typeUpdateOneRequiredWithoutProgramNestedInput = {
    create?: XOR<typeCreateWithoutProgramInput, typeUncheckedCreateWithoutProgramInput>
    connectOrCreate?: typeCreateOrConnectWithoutProgramInput
    upsert?: typeUpsertWithoutProgramInput
    connect?: typeWhereUniqueInput
    update?: XOR<XOR<typeUpdateToOneWithWhereWithoutProgramInput, typeUpdateWithoutProgramInput>, typeUncheckedUpdateWithoutProgramInput>
  }

  export type watchlaterUpdateManyWithoutProgramNestedInput = {
    create?: XOR<watchlaterCreateWithoutProgramInput, watchlaterUncheckedCreateWithoutProgramInput> | watchlaterCreateWithoutProgramInput[] | watchlaterUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: watchlaterCreateOrConnectWithoutProgramInput | watchlaterCreateOrConnectWithoutProgramInput[]
    upsert?: watchlaterUpsertWithWhereUniqueWithoutProgramInput | watchlaterUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: watchlaterCreateManyProgramInputEnvelope
    set?: watchlaterWhereUniqueInput | watchlaterWhereUniqueInput[]
    disconnect?: watchlaterWhereUniqueInput | watchlaterWhereUniqueInput[]
    delete?: watchlaterWhereUniqueInput | watchlaterWhereUniqueInput[]
    connect?: watchlaterWhereUniqueInput | watchlaterWhereUniqueInput[]
    update?: watchlaterUpdateWithWhereUniqueWithoutProgramInput | watchlaterUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: watchlaterUpdateManyWithWhereWithoutProgramInput | watchlaterUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: watchlaterScalarWhereInput | watchlaterScalarWhereInput[]
  }

  export type favoriteUncheckedUpdateManyWithoutProgramNestedInput = {
    create?: XOR<favoriteCreateWithoutProgramInput, favoriteUncheckedCreateWithoutProgramInput> | favoriteCreateWithoutProgramInput[] | favoriteUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: favoriteCreateOrConnectWithoutProgramInput | favoriteCreateOrConnectWithoutProgramInput[]
    upsert?: favoriteUpsertWithWhereUniqueWithoutProgramInput | favoriteUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: favoriteCreateManyProgramInputEnvelope
    set?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    disconnect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    delete?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    update?: favoriteUpdateWithWhereUniqueWithoutProgramInput | favoriteUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: favoriteUpdateManyWithWhereWithoutProgramInput | favoriteUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: favoriteScalarWhereInput | favoriteScalarWhereInput[]
  }

  export type watchlaterUncheckedUpdateManyWithoutProgramNestedInput = {
    create?: XOR<watchlaterCreateWithoutProgramInput, watchlaterUncheckedCreateWithoutProgramInput> | watchlaterCreateWithoutProgramInput[] | watchlaterUncheckedCreateWithoutProgramInput[]
    connectOrCreate?: watchlaterCreateOrConnectWithoutProgramInput | watchlaterCreateOrConnectWithoutProgramInput[]
    upsert?: watchlaterUpsertWithWhereUniqueWithoutProgramInput | watchlaterUpsertWithWhereUniqueWithoutProgramInput[]
    createMany?: watchlaterCreateManyProgramInputEnvelope
    set?: watchlaterWhereUniqueInput | watchlaterWhereUniqueInput[]
    disconnect?: watchlaterWhereUniqueInput | watchlaterWhereUniqueInput[]
    delete?: watchlaterWhereUniqueInput | watchlaterWhereUniqueInput[]
    connect?: watchlaterWhereUniqueInput | watchlaterWhereUniqueInput[]
    update?: watchlaterUpdateWithWhereUniqueWithoutProgramInput | watchlaterUpdateWithWhereUniqueWithoutProgramInput[]
    updateMany?: watchlaterUpdateManyWithWhereWithoutProgramInput | watchlaterUpdateManyWithWhereWithoutProgramInput[]
    deleteMany?: watchlaterScalarWhereInput | watchlaterScalarWhereInput[]
  }

  export type programCreateNestedManyWithoutTypeInput = {
    create?: XOR<programCreateWithoutTypeInput, programUncheckedCreateWithoutTypeInput> | programCreateWithoutTypeInput[] | programUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: programCreateOrConnectWithoutTypeInput | programCreateOrConnectWithoutTypeInput[]
    createMany?: programCreateManyTypeInputEnvelope
    connect?: programWhereUniqueInput | programWhereUniqueInput[]
  }

  export type programUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<programCreateWithoutTypeInput, programUncheckedCreateWithoutTypeInput> | programCreateWithoutTypeInput[] | programUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: programCreateOrConnectWithoutTypeInput | programCreateOrConnectWithoutTypeInput[]
    createMany?: programCreateManyTypeInputEnvelope
    connect?: programWhereUniqueInput | programWhereUniqueInput[]
  }

  export type programUpdateManyWithoutTypeNestedInput = {
    create?: XOR<programCreateWithoutTypeInput, programUncheckedCreateWithoutTypeInput> | programCreateWithoutTypeInput[] | programUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: programCreateOrConnectWithoutTypeInput | programCreateOrConnectWithoutTypeInput[]
    upsert?: programUpsertWithWhereUniqueWithoutTypeInput | programUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: programCreateManyTypeInputEnvelope
    set?: programWhereUniqueInput | programWhereUniqueInput[]
    disconnect?: programWhereUniqueInput | programWhereUniqueInput[]
    delete?: programWhereUniqueInput | programWhereUniqueInput[]
    connect?: programWhereUniqueInput | programWhereUniqueInput[]
    update?: programUpdateWithWhereUniqueWithoutTypeInput | programUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: programUpdateManyWithWhereWithoutTypeInput | programUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: programScalarWhereInput | programScalarWhereInput[]
  }

  export type programUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<programCreateWithoutTypeInput, programUncheckedCreateWithoutTypeInput> | programCreateWithoutTypeInput[] | programUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: programCreateOrConnectWithoutTypeInput | programCreateOrConnectWithoutTypeInput[]
    upsert?: programUpsertWithWhereUniqueWithoutTypeInput | programUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: programCreateManyTypeInputEnvelope
    set?: programWhereUniqueInput | programWhereUniqueInput[]
    disconnect?: programWhereUniqueInput | programWhereUniqueInput[]
    delete?: programWhereUniqueInput | programWhereUniqueInput[]
    connect?: programWhereUniqueInput | programWhereUniqueInput[]
    update?: programUpdateWithWhereUniqueWithoutTypeInput | programUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: programUpdateManyWithWhereWithoutTypeInput | programUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: programScalarWhereInput | programScalarWhereInput[]
  }

  export type favoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<favoriteCreateWithoutUserInput, favoriteUncheckedCreateWithoutUserInput> | favoriteCreateWithoutUserInput[] | favoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: favoriteCreateOrConnectWithoutUserInput | favoriteCreateOrConnectWithoutUserInput[]
    createMany?: favoriteCreateManyUserInputEnvelope
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
  }

  export type watchlaterCreateNestedManyWithoutUserInput = {
    create?: XOR<watchlaterCreateWithoutUserInput, watchlaterUncheckedCreateWithoutUserInput> | watchlaterCreateWithoutUserInput[] | watchlaterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: watchlaterCreateOrConnectWithoutUserInput | watchlaterCreateOrConnectWithoutUserInput[]
    createMany?: watchlaterCreateManyUserInputEnvelope
    connect?: watchlaterWhereUniqueInput | watchlaterWhereUniqueInput[]
  }

  export type favoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<favoriteCreateWithoutUserInput, favoriteUncheckedCreateWithoutUserInput> | favoriteCreateWithoutUserInput[] | favoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: favoriteCreateOrConnectWithoutUserInput | favoriteCreateOrConnectWithoutUserInput[]
    createMany?: favoriteCreateManyUserInputEnvelope
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
  }

  export type watchlaterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<watchlaterCreateWithoutUserInput, watchlaterUncheckedCreateWithoutUserInput> | watchlaterCreateWithoutUserInput[] | watchlaterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: watchlaterCreateOrConnectWithoutUserInput | watchlaterCreateOrConnectWithoutUserInput[]
    createMany?: watchlaterCreateManyUserInputEnvelope
    connect?: watchlaterWhereUniqueInput | watchlaterWhereUniqueInput[]
  }

  export type favoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<favoriteCreateWithoutUserInput, favoriteUncheckedCreateWithoutUserInput> | favoriteCreateWithoutUserInput[] | favoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: favoriteCreateOrConnectWithoutUserInput | favoriteCreateOrConnectWithoutUserInput[]
    upsert?: favoriteUpsertWithWhereUniqueWithoutUserInput | favoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: favoriteCreateManyUserInputEnvelope
    set?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    disconnect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    delete?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    update?: favoriteUpdateWithWhereUniqueWithoutUserInput | favoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: favoriteUpdateManyWithWhereWithoutUserInput | favoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: favoriteScalarWhereInput | favoriteScalarWhereInput[]
  }

  export type watchlaterUpdateManyWithoutUserNestedInput = {
    create?: XOR<watchlaterCreateWithoutUserInput, watchlaterUncheckedCreateWithoutUserInput> | watchlaterCreateWithoutUserInput[] | watchlaterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: watchlaterCreateOrConnectWithoutUserInput | watchlaterCreateOrConnectWithoutUserInput[]
    upsert?: watchlaterUpsertWithWhereUniqueWithoutUserInput | watchlaterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: watchlaterCreateManyUserInputEnvelope
    set?: watchlaterWhereUniqueInput | watchlaterWhereUniqueInput[]
    disconnect?: watchlaterWhereUniqueInput | watchlaterWhereUniqueInput[]
    delete?: watchlaterWhereUniqueInput | watchlaterWhereUniqueInput[]
    connect?: watchlaterWhereUniqueInput | watchlaterWhereUniqueInput[]
    update?: watchlaterUpdateWithWhereUniqueWithoutUserInput | watchlaterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: watchlaterUpdateManyWithWhereWithoutUserInput | watchlaterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: watchlaterScalarWhereInput | watchlaterScalarWhereInput[]
  }

  export type favoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<favoriteCreateWithoutUserInput, favoriteUncheckedCreateWithoutUserInput> | favoriteCreateWithoutUserInput[] | favoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: favoriteCreateOrConnectWithoutUserInput | favoriteCreateOrConnectWithoutUserInput[]
    upsert?: favoriteUpsertWithWhereUniqueWithoutUserInput | favoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: favoriteCreateManyUserInputEnvelope
    set?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    disconnect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    delete?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    connect?: favoriteWhereUniqueInput | favoriteWhereUniqueInput[]
    update?: favoriteUpdateWithWhereUniqueWithoutUserInput | favoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: favoriteUpdateManyWithWhereWithoutUserInput | favoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: favoriteScalarWhereInput | favoriteScalarWhereInput[]
  }

  export type watchlaterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<watchlaterCreateWithoutUserInput, watchlaterUncheckedCreateWithoutUserInput> | watchlaterCreateWithoutUserInput[] | watchlaterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: watchlaterCreateOrConnectWithoutUserInput | watchlaterCreateOrConnectWithoutUserInput[]
    upsert?: watchlaterUpsertWithWhereUniqueWithoutUserInput | watchlaterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: watchlaterCreateManyUserInputEnvelope
    set?: watchlaterWhereUniqueInput | watchlaterWhereUniqueInput[]
    disconnect?: watchlaterWhereUniqueInput | watchlaterWhereUniqueInput[]
    delete?: watchlaterWhereUniqueInput | watchlaterWhereUniqueInput[]
    connect?: watchlaterWhereUniqueInput | watchlaterWhereUniqueInput[]
    update?: watchlaterUpdateWithWhereUniqueWithoutUserInput | watchlaterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: watchlaterUpdateManyWithWhereWithoutUserInput | watchlaterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: watchlaterScalarWhereInput | watchlaterScalarWhereInput[]
  }

  export type programCreateNestedOneWithoutWatchlaterInput = {
    create?: XOR<programCreateWithoutWatchlaterInput, programUncheckedCreateWithoutWatchlaterInput>
    connectOrCreate?: programCreateOrConnectWithoutWatchlaterInput
    connect?: programWhereUniqueInput
  }

  export type userCreateNestedOneWithoutWatchlaterInput = {
    create?: XOR<userCreateWithoutWatchlaterInput, userUncheckedCreateWithoutWatchlaterInput>
    connectOrCreate?: userCreateOrConnectWithoutWatchlaterInput
    connect?: userWhereUniqueInput
  }

  export type programUpdateOneRequiredWithoutWatchlaterNestedInput = {
    create?: XOR<programCreateWithoutWatchlaterInput, programUncheckedCreateWithoutWatchlaterInput>
    connectOrCreate?: programCreateOrConnectWithoutWatchlaterInput
    upsert?: programUpsertWithoutWatchlaterInput
    connect?: programWhereUniqueInput
    update?: XOR<XOR<programUpdateToOneWithWhereWithoutWatchlaterInput, programUpdateWithoutWatchlaterInput>, programUncheckedUpdateWithoutWatchlaterInput>
  }

  export type userUpdateOneRequiredWithoutWatchlaterNestedInput = {
    create?: XOR<userCreateWithoutWatchlaterInput, userUncheckedCreateWithoutWatchlaterInput>
    connectOrCreate?: userCreateOrConnectWithoutWatchlaterInput
    upsert?: userUpsertWithoutWatchlaterInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutWatchlaterInput, userUpdateWithoutWatchlaterInput>, userUncheckedUpdateWithoutWatchlaterInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type programCreateWithoutCategorieInput = {
    title: string
    duration: string
    description: string
    channelid: number
    videourl: string
    thumbnailurl: string
    createdat?: Date | string
    status?: boolean
    favorite?: favoriteCreateNestedManyWithoutProgramInput
    channel?: channelCreateNestedOneWithoutProgramInput
    type: typeCreateNestedOneWithoutProgramInput
    watchlater?: watchlaterCreateNestedManyWithoutProgramInput
  }

  export type programUncheckedCreateWithoutCategorieInput = {
    id?: number
    title: string
    duration: string
    description: string
    channelid: number
    typeid: number
    videourl: string
    thumbnailurl: string
    createdat?: Date | string
    status?: boolean
    favorite?: favoriteUncheckedCreateNestedManyWithoutProgramInput
    watchlater?: watchlaterUncheckedCreateNestedManyWithoutProgramInput
  }

  export type programCreateOrConnectWithoutCategorieInput = {
    where: programWhereUniqueInput
    create: XOR<programCreateWithoutCategorieInput, programUncheckedCreateWithoutCategorieInput>
  }

  export type programCreateManyCategorieInputEnvelope = {
    data: programCreateManyCategorieInput | programCreateManyCategorieInput[]
    skipDuplicates?: boolean
  }

  export type programUpsertWithWhereUniqueWithoutCategorieInput = {
    where: programWhereUniqueInput
    update: XOR<programUpdateWithoutCategorieInput, programUncheckedUpdateWithoutCategorieInput>
    create: XOR<programCreateWithoutCategorieInput, programUncheckedCreateWithoutCategorieInput>
  }

  export type programUpdateWithWhereUniqueWithoutCategorieInput = {
    where: programWhereUniqueInput
    data: XOR<programUpdateWithoutCategorieInput, programUncheckedUpdateWithoutCategorieInput>
  }

  export type programUpdateManyWithWhereWithoutCategorieInput = {
    where: programScalarWhereInput
    data: XOR<programUpdateManyMutationInput, programUncheckedUpdateManyWithoutCategorieInput>
  }

  export type programScalarWhereInput = {
    AND?: programScalarWhereInput | programScalarWhereInput[]
    OR?: programScalarWhereInput[]
    NOT?: programScalarWhereInput | programScalarWhereInput[]
    id?: IntFilter<"program"> | number
    title?: StringFilter<"program"> | string
    duration?: StringFilter<"program"> | string
    description?: StringFilter<"program"> | string
    channelid?: IntFilter<"program"> | number
    typeid?: IntFilter<"program"> | number
    categoryid?: IntFilter<"program"> | number
    videourl?: StringFilter<"program"> | string
    thumbnailurl?: StringFilter<"program"> | string
    createdat?: DateTimeFilter<"program"> | Date | string
    status?: BoolFilter<"program"> | boolean
  }

  export type programCreateWithoutChannelInput = {
    title: string
    duration: string
    description: string
    channelid: number
    videourl: string
    thumbnailurl: string
    createdat?: Date | string
    status?: boolean
    favorite?: favoriteCreateNestedManyWithoutProgramInput
    categorie: categorieCreateNestedOneWithoutProgramInput
    type: typeCreateNestedOneWithoutProgramInput
    watchlater?: watchlaterCreateNestedManyWithoutProgramInput
  }

  export type programUncheckedCreateWithoutChannelInput = {
    title: string
    duration: string
    description: string
    channelid: number
    typeid: number
    categoryid: number
    videourl: string
    thumbnailurl: string
    createdat?: Date | string
    status?: boolean
    favorite?: favoriteUncheckedCreateNestedManyWithoutProgramInput
    watchlater?: watchlaterUncheckedCreateNestedManyWithoutProgramInput
  }

  export type programCreateOrConnectWithoutChannelInput = {
    where: programWhereUniqueInput
    create: XOR<programCreateWithoutChannelInput, programUncheckedCreateWithoutChannelInput>
  }

  export type programUpsertWithoutChannelInput = {
    update: XOR<programUpdateWithoutChannelInput, programUncheckedUpdateWithoutChannelInput>
    create: XOR<programCreateWithoutChannelInput, programUncheckedCreateWithoutChannelInput>
    where?: programWhereInput
  }

  export type programUpdateToOneWithWhereWithoutChannelInput = {
    where?: programWhereInput
    data: XOR<programUpdateWithoutChannelInput, programUncheckedUpdateWithoutChannelInput>
  }

  export type programUpdateWithoutChannelInput = {
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    channelid?: IntFieldUpdateOperationsInput | number
    videourl?: StringFieldUpdateOperationsInput | string
    thumbnailurl?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    favorite?: favoriteUpdateManyWithoutProgramNestedInput
    categorie?: categorieUpdateOneRequiredWithoutProgramNestedInput
    type?: typeUpdateOneRequiredWithoutProgramNestedInput
    watchlater?: watchlaterUpdateManyWithoutProgramNestedInput
  }

  export type programUncheckedUpdateWithoutChannelInput = {
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    channelid?: IntFieldUpdateOperationsInput | number
    typeid?: IntFieldUpdateOperationsInput | number
    categoryid?: IntFieldUpdateOperationsInput | number
    videourl?: StringFieldUpdateOperationsInput | string
    thumbnailurl?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    favorite?: favoriteUncheckedUpdateManyWithoutProgramNestedInput
    watchlater?: watchlaterUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type programCreateWithoutFavoriteInput = {
    title: string
    duration: string
    description: string
    channelid: number
    videourl: string
    thumbnailurl: string
    createdat?: Date | string
    status?: boolean
    categorie: categorieCreateNestedOneWithoutProgramInput
    channel?: channelCreateNestedOneWithoutProgramInput
    type: typeCreateNestedOneWithoutProgramInput
    watchlater?: watchlaterCreateNestedManyWithoutProgramInput
  }

  export type programUncheckedCreateWithoutFavoriteInput = {
    id?: number
    title: string
    duration: string
    description: string
    channelid: number
    typeid: number
    categoryid: number
    videourl: string
    thumbnailurl: string
    createdat?: Date | string
    status?: boolean
    watchlater?: watchlaterUncheckedCreateNestedManyWithoutProgramInput
  }

  export type programCreateOrConnectWithoutFavoriteInput = {
    where: programWhereUniqueInput
    create: XOR<programCreateWithoutFavoriteInput, programUncheckedCreateWithoutFavoriteInput>
  }

  export type userCreateWithoutFavoriteInput = {
    fullname: string
    email: string
    createdat?: Date | string
    password: string
    watchlater?: watchlaterCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutFavoriteInput = {
    id?: number
    fullname: string
    email: string
    createdat?: Date | string
    password: string
    watchlater?: watchlaterUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutFavoriteInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutFavoriteInput, userUncheckedCreateWithoutFavoriteInput>
  }

  export type programUpsertWithoutFavoriteInput = {
    update: XOR<programUpdateWithoutFavoriteInput, programUncheckedUpdateWithoutFavoriteInput>
    create: XOR<programCreateWithoutFavoriteInput, programUncheckedCreateWithoutFavoriteInput>
    where?: programWhereInput
  }

  export type programUpdateToOneWithWhereWithoutFavoriteInput = {
    where?: programWhereInput
    data: XOR<programUpdateWithoutFavoriteInput, programUncheckedUpdateWithoutFavoriteInput>
  }

  export type programUpdateWithoutFavoriteInput = {
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    channelid?: IntFieldUpdateOperationsInput | number
    videourl?: StringFieldUpdateOperationsInput | string
    thumbnailurl?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    categorie?: categorieUpdateOneRequiredWithoutProgramNestedInput
    channel?: channelUpdateOneRequiredWithoutProgramNestedInput
    type?: typeUpdateOneRequiredWithoutProgramNestedInput
    watchlater?: watchlaterUpdateManyWithoutProgramNestedInput
  }

  export type programUncheckedUpdateWithoutFavoriteInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    channelid?: IntFieldUpdateOperationsInput | number
    typeid?: IntFieldUpdateOperationsInput | number
    categoryid?: IntFieldUpdateOperationsInput | number
    videourl?: StringFieldUpdateOperationsInput | string
    thumbnailurl?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    watchlater?: watchlaterUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type userUpsertWithoutFavoriteInput = {
    update: XOR<userUpdateWithoutFavoriteInput, userUncheckedUpdateWithoutFavoriteInput>
    create: XOR<userCreateWithoutFavoriteInput, userUncheckedCreateWithoutFavoriteInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutFavoriteInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutFavoriteInput, userUncheckedUpdateWithoutFavoriteInput>
  }

  export type userUpdateWithoutFavoriteInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    watchlater?: watchlaterUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutFavoriteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    watchlater?: watchlaterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type favoriteCreateWithoutProgramInput = {
    user: userCreateNestedOneWithoutFavoriteInput
  }

  export type favoriteUncheckedCreateWithoutProgramInput = {
    id?: number
    userid: number
  }

  export type favoriteCreateOrConnectWithoutProgramInput = {
    where: favoriteWhereUniqueInput
    create: XOR<favoriteCreateWithoutProgramInput, favoriteUncheckedCreateWithoutProgramInput>
  }

  export type favoriteCreateManyProgramInputEnvelope = {
    data: favoriteCreateManyProgramInput | favoriteCreateManyProgramInput[]
    skipDuplicates?: boolean
  }

  export type categorieCreateWithoutProgramInput = {
    name: string
  }

  export type categorieUncheckedCreateWithoutProgramInput = {
    id?: number
    name: string
  }

  export type categorieCreateOrConnectWithoutProgramInput = {
    where: categorieWhereUniqueInput
    create: XOR<categorieCreateWithoutProgramInput, categorieUncheckedCreateWithoutProgramInput>
  }

  export type channelCreateWithoutProgramInput = {
    name: string
    createdat?: Date | string
    status?: boolean
  }

  export type channelUncheckedCreateWithoutProgramInput = {
    id?: number
    name: string
    createdat?: Date | string
    status?: boolean
  }

  export type channelCreateOrConnectWithoutProgramInput = {
    where: channelWhereUniqueInput
    create: XOR<channelCreateWithoutProgramInput, channelUncheckedCreateWithoutProgramInput>
  }

  export type typeCreateWithoutProgramInput = {
    name: string
  }

  export type typeUncheckedCreateWithoutProgramInput = {
    id?: number
    name: string
  }

  export type typeCreateOrConnectWithoutProgramInput = {
    where: typeWhereUniqueInput
    create: XOR<typeCreateWithoutProgramInput, typeUncheckedCreateWithoutProgramInput>
  }

  export type watchlaterCreateWithoutProgramInput = {
    user: userCreateNestedOneWithoutWatchlaterInput
  }

  export type watchlaterUncheckedCreateWithoutProgramInput = {
    id?: number
    userid: number
  }

  export type watchlaterCreateOrConnectWithoutProgramInput = {
    where: watchlaterWhereUniqueInput
    create: XOR<watchlaterCreateWithoutProgramInput, watchlaterUncheckedCreateWithoutProgramInput>
  }

  export type watchlaterCreateManyProgramInputEnvelope = {
    data: watchlaterCreateManyProgramInput | watchlaterCreateManyProgramInput[]
    skipDuplicates?: boolean
  }

  export type favoriteUpsertWithWhereUniqueWithoutProgramInput = {
    where: favoriteWhereUniqueInput
    update: XOR<favoriteUpdateWithoutProgramInput, favoriteUncheckedUpdateWithoutProgramInput>
    create: XOR<favoriteCreateWithoutProgramInput, favoriteUncheckedCreateWithoutProgramInput>
  }

  export type favoriteUpdateWithWhereUniqueWithoutProgramInput = {
    where: favoriteWhereUniqueInput
    data: XOR<favoriteUpdateWithoutProgramInput, favoriteUncheckedUpdateWithoutProgramInput>
  }

  export type favoriteUpdateManyWithWhereWithoutProgramInput = {
    where: favoriteScalarWhereInput
    data: XOR<favoriteUpdateManyMutationInput, favoriteUncheckedUpdateManyWithoutProgramInput>
  }

  export type favoriteScalarWhereInput = {
    AND?: favoriteScalarWhereInput | favoriteScalarWhereInput[]
    OR?: favoriteScalarWhereInput[]
    NOT?: favoriteScalarWhereInput | favoriteScalarWhereInput[]
    id?: IntFilter<"favorite"> | number
    userid?: IntFilter<"favorite"> | number
    programid?: IntFilter<"favorite"> | number
  }

  export type categorieUpsertWithoutProgramInput = {
    update: XOR<categorieUpdateWithoutProgramInput, categorieUncheckedUpdateWithoutProgramInput>
    create: XOR<categorieCreateWithoutProgramInput, categorieUncheckedCreateWithoutProgramInput>
    where?: categorieWhereInput
  }

  export type categorieUpdateToOneWithWhereWithoutProgramInput = {
    where?: categorieWhereInput
    data: XOR<categorieUpdateWithoutProgramInput, categorieUncheckedUpdateWithoutProgramInput>
  }

  export type categorieUpdateWithoutProgramInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type categorieUncheckedUpdateWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type channelUpsertWithoutProgramInput = {
    update: XOR<channelUpdateWithoutProgramInput, channelUncheckedUpdateWithoutProgramInput>
    create: XOR<channelCreateWithoutProgramInput, channelUncheckedCreateWithoutProgramInput>
    where?: channelWhereInput
  }

  export type channelUpdateToOneWithWhereWithoutProgramInput = {
    where?: channelWhereInput
    data: XOR<channelUpdateWithoutProgramInput, channelUncheckedUpdateWithoutProgramInput>
  }

  export type channelUpdateWithoutProgramInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type channelUncheckedUpdateWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type typeUpsertWithoutProgramInput = {
    update: XOR<typeUpdateWithoutProgramInput, typeUncheckedUpdateWithoutProgramInput>
    create: XOR<typeCreateWithoutProgramInput, typeUncheckedCreateWithoutProgramInput>
    where?: typeWhereInput
  }

  export type typeUpdateToOneWithWhereWithoutProgramInput = {
    where?: typeWhereInput
    data: XOR<typeUpdateWithoutProgramInput, typeUncheckedUpdateWithoutProgramInput>
  }

  export type typeUpdateWithoutProgramInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type typeUncheckedUpdateWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type watchlaterUpsertWithWhereUniqueWithoutProgramInput = {
    where: watchlaterWhereUniqueInput
    update: XOR<watchlaterUpdateWithoutProgramInput, watchlaterUncheckedUpdateWithoutProgramInput>
    create: XOR<watchlaterCreateWithoutProgramInput, watchlaterUncheckedCreateWithoutProgramInput>
  }

  export type watchlaterUpdateWithWhereUniqueWithoutProgramInput = {
    where: watchlaterWhereUniqueInput
    data: XOR<watchlaterUpdateWithoutProgramInput, watchlaterUncheckedUpdateWithoutProgramInput>
  }

  export type watchlaterUpdateManyWithWhereWithoutProgramInput = {
    where: watchlaterScalarWhereInput
    data: XOR<watchlaterUpdateManyMutationInput, watchlaterUncheckedUpdateManyWithoutProgramInput>
  }

  export type watchlaterScalarWhereInput = {
    AND?: watchlaterScalarWhereInput | watchlaterScalarWhereInput[]
    OR?: watchlaterScalarWhereInput[]
    NOT?: watchlaterScalarWhereInput | watchlaterScalarWhereInput[]
    id?: IntFilter<"watchlater"> | number
    userid?: IntFilter<"watchlater"> | number
    programid?: IntFilter<"watchlater"> | number
  }

  export type programCreateWithoutTypeInput = {
    title: string
    duration: string
    description: string
    channelid: number
    videourl: string
    thumbnailurl: string
    createdat?: Date | string
    status?: boolean
    favorite?: favoriteCreateNestedManyWithoutProgramInput
    categorie: categorieCreateNestedOneWithoutProgramInput
    channel?: channelCreateNestedOneWithoutProgramInput
    watchlater?: watchlaterCreateNestedManyWithoutProgramInput
  }

  export type programUncheckedCreateWithoutTypeInput = {
    id?: number
    title: string
    duration: string
    description: string
    channelid: number
    categoryid: number
    videourl: string
    thumbnailurl: string
    createdat?: Date | string
    status?: boolean
    favorite?: favoriteUncheckedCreateNestedManyWithoutProgramInput
    watchlater?: watchlaterUncheckedCreateNestedManyWithoutProgramInput
  }

  export type programCreateOrConnectWithoutTypeInput = {
    where: programWhereUniqueInput
    create: XOR<programCreateWithoutTypeInput, programUncheckedCreateWithoutTypeInput>
  }

  export type programCreateManyTypeInputEnvelope = {
    data: programCreateManyTypeInput | programCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type programUpsertWithWhereUniqueWithoutTypeInput = {
    where: programWhereUniqueInput
    update: XOR<programUpdateWithoutTypeInput, programUncheckedUpdateWithoutTypeInput>
    create: XOR<programCreateWithoutTypeInput, programUncheckedCreateWithoutTypeInput>
  }

  export type programUpdateWithWhereUniqueWithoutTypeInput = {
    where: programWhereUniqueInput
    data: XOR<programUpdateWithoutTypeInput, programUncheckedUpdateWithoutTypeInput>
  }

  export type programUpdateManyWithWhereWithoutTypeInput = {
    where: programScalarWhereInput
    data: XOR<programUpdateManyMutationInput, programUncheckedUpdateManyWithoutTypeInput>
  }

  export type favoriteCreateWithoutUserInput = {
    program: programCreateNestedOneWithoutFavoriteInput
  }

  export type favoriteUncheckedCreateWithoutUserInput = {
    id?: number
    programid: number
  }

  export type favoriteCreateOrConnectWithoutUserInput = {
    where: favoriteWhereUniqueInput
    create: XOR<favoriteCreateWithoutUserInput, favoriteUncheckedCreateWithoutUserInput>
  }

  export type favoriteCreateManyUserInputEnvelope = {
    data: favoriteCreateManyUserInput | favoriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type watchlaterCreateWithoutUserInput = {
    program: programCreateNestedOneWithoutWatchlaterInput
  }

  export type watchlaterUncheckedCreateWithoutUserInput = {
    id?: number
    programid: number
  }

  export type watchlaterCreateOrConnectWithoutUserInput = {
    where: watchlaterWhereUniqueInput
    create: XOR<watchlaterCreateWithoutUserInput, watchlaterUncheckedCreateWithoutUserInput>
  }

  export type watchlaterCreateManyUserInputEnvelope = {
    data: watchlaterCreateManyUserInput | watchlaterCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type favoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: favoriteWhereUniqueInput
    update: XOR<favoriteUpdateWithoutUserInput, favoriteUncheckedUpdateWithoutUserInput>
    create: XOR<favoriteCreateWithoutUserInput, favoriteUncheckedCreateWithoutUserInput>
  }

  export type favoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: favoriteWhereUniqueInput
    data: XOR<favoriteUpdateWithoutUserInput, favoriteUncheckedUpdateWithoutUserInput>
  }

  export type favoriteUpdateManyWithWhereWithoutUserInput = {
    where: favoriteScalarWhereInput
    data: XOR<favoriteUpdateManyMutationInput, favoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type watchlaterUpsertWithWhereUniqueWithoutUserInput = {
    where: watchlaterWhereUniqueInput
    update: XOR<watchlaterUpdateWithoutUserInput, watchlaterUncheckedUpdateWithoutUserInput>
    create: XOR<watchlaterCreateWithoutUserInput, watchlaterUncheckedCreateWithoutUserInput>
  }

  export type watchlaterUpdateWithWhereUniqueWithoutUserInput = {
    where: watchlaterWhereUniqueInput
    data: XOR<watchlaterUpdateWithoutUserInput, watchlaterUncheckedUpdateWithoutUserInput>
  }

  export type watchlaterUpdateManyWithWhereWithoutUserInput = {
    where: watchlaterScalarWhereInput
    data: XOR<watchlaterUpdateManyMutationInput, watchlaterUncheckedUpdateManyWithoutUserInput>
  }

  export type programCreateWithoutWatchlaterInput = {
    title: string
    duration: string
    description: string
    channelid: number
    videourl: string
    thumbnailurl: string
    createdat?: Date | string
    status?: boolean
    favorite?: favoriteCreateNestedManyWithoutProgramInput
    categorie: categorieCreateNestedOneWithoutProgramInput
    channel?: channelCreateNestedOneWithoutProgramInput
    type: typeCreateNestedOneWithoutProgramInput
  }

  export type programUncheckedCreateWithoutWatchlaterInput = {
    id?: number
    title: string
    duration: string
    description: string
    channelid: number
    typeid: number
    categoryid: number
    videourl: string
    thumbnailurl: string
    createdat?: Date | string
    status?: boolean
    favorite?: favoriteUncheckedCreateNestedManyWithoutProgramInput
  }

  export type programCreateOrConnectWithoutWatchlaterInput = {
    where: programWhereUniqueInput
    create: XOR<programCreateWithoutWatchlaterInput, programUncheckedCreateWithoutWatchlaterInput>
  }

  export type userCreateWithoutWatchlaterInput = {
    fullname: string
    email: string
    createdat?: Date | string
    password: string
    favorite?: favoriteCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutWatchlaterInput = {
    id?: number
    fullname: string
    email: string
    createdat?: Date | string
    password: string
    favorite?: favoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutWatchlaterInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutWatchlaterInput, userUncheckedCreateWithoutWatchlaterInput>
  }

  export type programUpsertWithoutWatchlaterInput = {
    update: XOR<programUpdateWithoutWatchlaterInput, programUncheckedUpdateWithoutWatchlaterInput>
    create: XOR<programCreateWithoutWatchlaterInput, programUncheckedCreateWithoutWatchlaterInput>
    where?: programWhereInput
  }

  export type programUpdateToOneWithWhereWithoutWatchlaterInput = {
    where?: programWhereInput
    data: XOR<programUpdateWithoutWatchlaterInput, programUncheckedUpdateWithoutWatchlaterInput>
  }

  export type programUpdateWithoutWatchlaterInput = {
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    channelid?: IntFieldUpdateOperationsInput | number
    videourl?: StringFieldUpdateOperationsInput | string
    thumbnailurl?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    favorite?: favoriteUpdateManyWithoutProgramNestedInput
    categorie?: categorieUpdateOneRequiredWithoutProgramNestedInput
    channel?: channelUpdateOneRequiredWithoutProgramNestedInput
    type?: typeUpdateOneRequiredWithoutProgramNestedInput
  }

  export type programUncheckedUpdateWithoutWatchlaterInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    channelid?: IntFieldUpdateOperationsInput | number
    typeid?: IntFieldUpdateOperationsInput | number
    categoryid?: IntFieldUpdateOperationsInput | number
    videourl?: StringFieldUpdateOperationsInput | string
    thumbnailurl?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    favorite?: favoriteUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type userUpsertWithoutWatchlaterInput = {
    update: XOR<userUpdateWithoutWatchlaterInput, userUncheckedUpdateWithoutWatchlaterInput>
    create: XOR<userCreateWithoutWatchlaterInput, userUncheckedCreateWithoutWatchlaterInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutWatchlaterInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutWatchlaterInput, userUncheckedUpdateWithoutWatchlaterInput>
  }

  export type userUpdateWithoutWatchlaterInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    favorite?: favoriteUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutWatchlaterInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    favorite?: favoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type programCreateManyCategorieInput = {
    id?: number
    title: string
    duration: string
    description: string
    channelid: number
    typeid: number
    videourl: string
    thumbnailurl: string
    createdat?: Date | string
    status?: boolean
  }

  export type programUpdateWithoutCategorieInput = {
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    channelid?: IntFieldUpdateOperationsInput | number
    videourl?: StringFieldUpdateOperationsInput | string
    thumbnailurl?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    favorite?: favoriteUpdateManyWithoutProgramNestedInput
    channel?: channelUpdateOneRequiredWithoutProgramNestedInput
    type?: typeUpdateOneRequiredWithoutProgramNestedInput
    watchlater?: watchlaterUpdateManyWithoutProgramNestedInput
  }

  export type programUncheckedUpdateWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    channelid?: IntFieldUpdateOperationsInput | number
    typeid?: IntFieldUpdateOperationsInput | number
    videourl?: StringFieldUpdateOperationsInput | string
    thumbnailurl?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    favorite?: favoriteUncheckedUpdateManyWithoutProgramNestedInput
    watchlater?: watchlaterUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type programUncheckedUpdateManyWithoutCategorieInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    channelid?: IntFieldUpdateOperationsInput | number
    typeid?: IntFieldUpdateOperationsInput | number
    videourl?: StringFieldUpdateOperationsInput | string
    thumbnailurl?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type favoriteCreateManyProgramInput = {
    id?: number
    userid: number
  }

  export type watchlaterCreateManyProgramInput = {
    id?: number
    userid: number
  }

  export type favoriteUpdateWithoutProgramInput = {
    user?: userUpdateOneRequiredWithoutFavoriteNestedInput
  }

  export type favoriteUncheckedUpdateWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type favoriteUncheckedUpdateManyWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type watchlaterUpdateWithoutProgramInput = {
    user?: userUpdateOneRequiredWithoutWatchlaterNestedInput
  }

  export type watchlaterUncheckedUpdateWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type watchlaterUncheckedUpdateManyWithoutProgramInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type programCreateManyTypeInput = {
    id?: number
    title: string
    duration: string
    description: string
    channelid: number
    categoryid: number
    videourl: string
    thumbnailurl: string
    createdat?: Date | string
    status?: boolean
  }

  export type programUpdateWithoutTypeInput = {
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    channelid?: IntFieldUpdateOperationsInput | number
    videourl?: StringFieldUpdateOperationsInput | string
    thumbnailurl?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    favorite?: favoriteUpdateManyWithoutProgramNestedInput
    categorie?: categorieUpdateOneRequiredWithoutProgramNestedInput
    channel?: channelUpdateOneRequiredWithoutProgramNestedInput
    watchlater?: watchlaterUpdateManyWithoutProgramNestedInput
  }

  export type programUncheckedUpdateWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    channelid?: IntFieldUpdateOperationsInput | number
    categoryid?: IntFieldUpdateOperationsInput | number
    videourl?: StringFieldUpdateOperationsInput | string
    thumbnailurl?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
    favorite?: favoriteUncheckedUpdateManyWithoutProgramNestedInput
    watchlater?: watchlaterUncheckedUpdateManyWithoutProgramNestedInput
  }

  export type programUncheckedUpdateManyWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    channelid?: IntFieldUpdateOperationsInput | number
    categoryid?: IntFieldUpdateOperationsInput | number
    videourl?: StringFieldUpdateOperationsInput | string
    thumbnailurl?: StringFieldUpdateOperationsInput | string
    createdat?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type favoriteCreateManyUserInput = {
    id?: number
    programid: number
  }

  export type watchlaterCreateManyUserInput = {
    id?: number
    programid: number
  }

  export type favoriteUpdateWithoutUserInput = {
    program?: programUpdateOneRequiredWithoutFavoriteNestedInput
  }

  export type favoriteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    programid?: IntFieldUpdateOperationsInput | number
  }

  export type favoriteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    programid?: IntFieldUpdateOperationsInput | number
  }

  export type watchlaterUpdateWithoutUserInput = {
    program?: programUpdateOneRequiredWithoutWatchlaterNestedInput
  }

  export type watchlaterUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    programid?: IntFieldUpdateOperationsInput | number
  }

  export type watchlaterUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    programid?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CategorieCountOutputTypeDefaultArgs instead
     */
    export type CategorieCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategorieCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProgramCountOutputTypeDefaultArgs instead
     */
    export type ProgramCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProgramCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TypeCountOutputTypeDefaultArgs instead
     */
    export type TypeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TypeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use categorieDefaultArgs instead
     */
    export type categorieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = categorieDefaultArgs<ExtArgs>
    /**
     * @deprecated Use channelDefaultArgs instead
     */
    export type channelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = channelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use favoriteDefaultArgs instead
     */
    export type favoriteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = favoriteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use programDefaultArgs instead
     */
    export type programArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = programDefaultArgs<ExtArgs>
    /**
     * @deprecated Use typeDefaultArgs instead
     */
    export type typeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = typeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use userDefaultArgs instead
     */
    export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>
    /**
     * @deprecated Use watchlaterDefaultArgs instead
     */
    export type watchlaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = watchlaterDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}