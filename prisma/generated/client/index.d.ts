
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Hackathon
 * 
 */
export type Hackathon = $Result.DefaultSelection<Prisma.$HackathonPayload>
/**
 * Model HackathonRegistration
 * 
 */
export type HackathonRegistration = $Result.DefaultSelection<Prisma.$HackathonRegistrationPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model Sponsors
 * 
 */
export type Sponsors = $Result.DefaultSelection<Prisma.$SponsorsPayload>
/**
 * Model Judge
 * 
 */
export type Judge = $Result.DefaultSelection<Prisma.$JudgePayload>
/**
 * Model Judgeassessments
 * 
 */
export type Judgeassessments = $Result.DefaultSelection<Prisma.$JudgeassessmentsPayload>
/**
 * Model HackathonSponsors
 * 
 */
export type HackathonSponsors = $Result.DefaultSelection<Prisma.$HackathonSponsorsPayload>
/**
 * Model teamMembers
 * 
 */
export type teamMembers = $Result.DefaultSelection<Prisma.$teamMembersPayload>
/**
 * Model teamRequest
 * 
 */
export type teamRequest = $Result.DefaultSelection<Prisma.$teamRequestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
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
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs>;

  /**
   * `prisma.hackathon`: Exposes CRUD operations for the **Hackathon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hackathons
    * const hackathons = await prisma.hackathon.findMany()
    * ```
    */
  get hackathon(): Prisma.HackathonDelegate<ExtArgs>;

  /**
   * `prisma.hackathonRegistration`: Exposes CRUD operations for the **HackathonRegistration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HackathonRegistrations
    * const hackathonRegistrations = await prisma.hackathonRegistration.findMany()
    * ```
    */
  get hackathonRegistration(): Prisma.HackathonRegistrationDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs>;

  /**
   * `prisma.sponsors`: Exposes CRUD operations for the **Sponsors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sponsors
    * const sponsors = await prisma.sponsors.findMany()
    * ```
    */
  get sponsors(): Prisma.SponsorsDelegate<ExtArgs>;

  /**
   * `prisma.judge`: Exposes CRUD operations for the **Judge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Judges
    * const judges = await prisma.judge.findMany()
    * ```
    */
  get judge(): Prisma.JudgeDelegate<ExtArgs>;

  /**
   * `prisma.judgeassessments`: Exposes CRUD operations for the **Judgeassessments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Judgeassessments
    * const judgeassessments = await prisma.judgeassessments.findMany()
    * ```
    */
  get judgeassessments(): Prisma.JudgeassessmentsDelegate<ExtArgs>;

  /**
   * `prisma.hackathonSponsors`: Exposes CRUD operations for the **HackathonSponsors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HackathonSponsors
    * const hackathonSponsors = await prisma.hackathonSponsors.findMany()
    * ```
    */
  get hackathonSponsors(): Prisma.HackathonSponsorsDelegate<ExtArgs>;

  /**
   * `prisma.teamMembers`: Exposes CRUD operations for the **teamMembers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamMembers
    * const teamMembers = await prisma.teamMembers.findMany()
    * ```
    */
  get teamMembers(): Prisma.teamMembersDelegate<ExtArgs>;

  /**
   * `prisma.teamRequest`: Exposes CRUD operations for the **teamRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamRequests
    * const teamRequests = await prisma.teamRequest.findMany()
    * ```
    */
  get teamRequest(): Prisma.teamRequestDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.7.1
   * Query Engine version: 0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5
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
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    Team: 'Team',
    Hackathon: 'Hackathon',
    HackathonRegistration: 'HackathonRegistration',
    Project: 'Project',
    Contact: 'Contact',
    Sponsors: 'Sponsors',
    Judge: 'Judge',
    Judgeassessments: 'Judgeassessments',
    HackathonSponsors: 'HackathonSponsors',
    teamMembers: 'teamMembers',
    teamRequest: 'teamRequest'
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
      modelProps: 'account' | 'session' | 'user' | 'verificationToken' | 'team' | 'hackathon' | 'hackathonRegistration' | 'project' | 'contact' | 'sponsors' | 'judge' | 'judgeassessments' | 'hackathonSponsors' | 'teamMembers' | 'teamRequest'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>,
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Hackathon: {
        payload: Prisma.$HackathonPayload<ExtArgs>
        fields: Prisma.HackathonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HackathonFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HackathonFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonPayload>
          }
          findFirst: {
            args: Prisma.HackathonFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HackathonFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonPayload>
          }
          findMany: {
            args: Prisma.HackathonFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonPayload>[]
          }
          create: {
            args: Prisma.HackathonCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonPayload>
          }
          createMany: {
            args: Prisma.HackathonCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HackathonDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonPayload>
          }
          update: {
            args: Prisma.HackathonUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonPayload>
          }
          deleteMany: {
            args: Prisma.HackathonDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HackathonUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HackathonUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonPayload>
          }
          aggregate: {
            args: Prisma.HackathonAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHackathon>
          }
          groupBy: {
            args: Prisma.HackathonGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HackathonGroupByOutputType>[]
          }
          count: {
            args: Prisma.HackathonCountArgs<ExtArgs>,
            result: $Utils.Optional<HackathonCountAggregateOutputType> | number
          }
        }
      }
      HackathonRegistration: {
        payload: Prisma.$HackathonRegistrationPayload<ExtArgs>
        fields: Prisma.HackathonRegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HackathonRegistrationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonRegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HackathonRegistrationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonRegistrationPayload>
          }
          findFirst: {
            args: Prisma.HackathonRegistrationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonRegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HackathonRegistrationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonRegistrationPayload>
          }
          findMany: {
            args: Prisma.HackathonRegistrationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonRegistrationPayload>[]
          }
          create: {
            args: Prisma.HackathonRegistrationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonRegistrationPayload>
          }
          createMany: {
            args: Prisma.HackathonRegistrationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HackathonRegistrationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonRegistrationPayload>
          }
          update: {
            args: Prisma.HackathonRegistrationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonRegistrationPayload>
          }
          deleteMany: {
            args: Prisma.HackathonRegistrationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HackathonRegistrationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HackathonRegistrationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonRegistrationPayload>
          }
          aggregate: {
            args: Prisma.HackathonRegistrationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHackathonRegistration>
          }
          groupBy: {
            args: Prisma.HackathonRegistrationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HackathonRegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.HackathonRegistrationCountArgs<ExtArgs>,
            result: $Utils.Optional<HackathonRegistrationCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>,
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>,
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      Sponsors: {
        payload: Prisma.$SponsorsPayload<ExtArgs>
        fields: Prisma.SponsorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SponsorsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SponsorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SponsorsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SponsorsPayload>
          }
          findFirst: {
            args: Prisma.SponsorsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SponsorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SponsorsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SponsorsPayload>
          }
          findMany: {
            args: Prisma.SponsorsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SponsorsPayload>[]
          }
          create: {
            args: Prisma.SponsorsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SponsorsPayload>
          }
          createMany: {
            args: Prisma.SponsorsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SponsorsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SponsorsPayload>
          }
          update: {
            args: Prisma.SponsorsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SponsorsPayload>
          }
          deleteMany: {
            args: Prisma.SponsorsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SponsorsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SponsorsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SponsorsPayload>
          }
          aggregate: {
            args: Prisma.SponsorsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSponsors>
          }
          groupBy: {
            args: Prisma.SponsorsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SponsorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SponsorsCountArgs<ExtArgs>,
            result: $Utils.Optional<SponsorsCountAggregateOutputType> | number
          }
        }
      }
      Judge: {
        payload: Prisma.$JudgePayload<ExtArgs>
        fields: Prisma.JudgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JudgeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JudgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JudgeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JudgePayload>
          }
          findFirst: {
            args: Prisma.JudgeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JudgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JudgeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JudgePayload>
          }
          findMany: {
            args: Prisma.JudgeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JudgePayload>[]
          }
          create: {
            args: Prisma.JudgeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JudgePayload>
          }
          createMany: {
            args: Prisma.JudgeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.JudgeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JudgePayload>
          }
          update: {
            args: Prisma.JudgeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JudgePayload>
          }
          deleteMany: {
            args: Prisma.JudgeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.JudgeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.JudgeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JudgePayload>
          }
          aggregate: {
            args: Prisma.JudgeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJudge>
          }
          groupBy: {
            args: Prisma.JudgeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JudgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.JudgeCountArgs<ExtArgs>,
            result: $Utils.Optional<JudgeCountAggregateOutputType> | number
          }
        }
      }
      Judgeassessments: {
        payload: Prisma.$JudgeassessmentsPayload<ExtArgs>
        fields: Prisma.JudgeassessmentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JudgeassessmentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JudgeassessmentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JudgeassessmentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JudgeassessmentsPayload>
          }
          findFirst: {
            args: Prisma.JudgeassessmentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JudgeassessmentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JudgeassessmentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JudgeassessmentsPayload>
          }
          findMany: {
            args: Prisma.JudgeassessmentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JudgeassessmentsPayload>[]
          }
          create: {
            args: Prisma.JudgeassessmentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JudgeassessmentsPayload>
          }
          createMany: {
            args: Prisma.JudgeassessmentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.JudgeassessmentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JudgeassessmentsPayload>
          }
          update: {
            args: Prisma.JudgeassessmentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JudgeassessmentsPayload>
          }
          deleteMany: {
            args: Prisma.JudgeassessmentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.JudgeassessmentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.JudgeassessmentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JudgeassessmentsPayload>
          }
          aggregate: {
            args: Prisma.JudgeassessmentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJudgeassessments>
          }
          groupBy: {
            args: Prisma.JudgeassessmentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JudgeassessmentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.JudgeassessmentsCountArgs<ExtArgs>,
            result: $Utils.Optional<JudgeassessmentsCountAggregateOutputType> | number
          }
        }
      }
      HackathonSponsors: {
        payload: Prisma.$HackathonSponsorsPayload<ExtArgs>
        fields: Prisma.HackathonSponsorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HackathonSponsorsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonSponsorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HackathonSponsorsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonSponsorsPayload>
          }
          findFirst: {
            args: Prisma.HackathonSponsorsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonSponsorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HackathonSponsorsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonSponsorsPayload>
          }
          findMany: {
            args: Prisma.HackathonSponsorsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonSponsorsPayload>[]
          }
          create: {
            args: Prisma.HackathonSponsorsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonSponsorsPayload>
          }
          createMany: {
            args: Prisma.HackathonSponsorsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HackathonSponsorsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonSponsorsPayload>
          }
          update: {
            args: Prisma.HackathonSponsorsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonSponsorsPayload>
          }
          deleteMany: {
            args: Prisma.HackathonSponsorsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HackathonSponsorsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HackathonSponsorsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HackathonSponsorsPayload>
          }
          aggregate: {
            args: Prisma.HackathonSponsorsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHackathonSponsors>
          }
          groupBy: {
            args: Prisma.HackathonSponsorsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HackathonSponsorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.HackathonSponsorsCountArgs<ExtArgs>,
            result: $Utils.Optional<HackathonSponsorsCountAggregateOutputType> | number
          }
        }
      }
      teamMembers: {
        payload: Prisma.$teamMembersPayload<ExtArgs>
        fields: Prisma.teamMembersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teamMembersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamMembersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teamMembersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamMembersPayload>
          }
          findFirst: {
            args: Prisma.teamMembersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamMembersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teamMembersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamMembersPayload>
          }
          findMany: {
            args: Prisma.teamMembersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamMembersPayload>[]
          }
          create: {
            args: Prisma.teamMembersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamMembersPayload>
          }
          createMany: {
            args: Prisma.teamMembersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.teamMembersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamMembersPayload>
          }
          update: {
            args: Prisma.teamMembersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamMembersPayload>
          }
          deleteMany: {
            args: Prisma.teamMembersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.teamMembersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.teamMembersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamMembersPayload>
          }
          aggregate: {
            args: Prisma.TeamMembersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTeamMembers>
          }
          groupBy: {
            args: Prisma.teamMembersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TeamMembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.teamMembersCountArgs<ExtArgs>,
            result: $Utils.Optional<TeamMembersCountAggregateOutputType> | number
          }
        }
      }
      teamRequest: {
        payload: Prisma.$teamRequestPayload<ExtArgs>
        fields: Prisma.teamRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teamRequestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teamRequestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamRequestPayload>
          }
          findFirst: {
            args: Prisma.teamRequestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teamRequestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamRequestPayload>
          }
          findMany: {
            args: Prisma.teamRequestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamRequestPayload>[]
          }
          create: {
            args: Prisma.teamRequestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamRequestPayload>
          }
          createMany: {
            args: Prisma.teamRequestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.teamRequestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamRequestPayload>
          }
          update: {
            args: Prisma.teamRequestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamRequestPayload>
          }
          deleteMany: {
            args: Prisma.teamRequestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.teamRequestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.teamRequestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$teamRequestPayload>
          }
          aggregate: {
            args: Prisma.TeamRequestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTeamRequest>
          }
          groupBy: {
            args: Prisma.teamRequestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TeamRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.teamRequestCountArgs<ExtArgs>,
            result: $Utils.Optional<TeamRequestCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    hackathons: number
    teams: number
    accounts: number
    sessions: number
    judge: number
    teamMembers: number
    teamRequest: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hackathons?: boolean | UserCountOutputTypeCountHackathonsArgs
    teams?: boolean | UserCountOutputTypeCountTeamsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    judge?: boolean | UserCountOutputTypeCountJudgeArgs
    teamMembers?: boolean | UserCountOutputTypeCountTeamMembersArgs
    teamRequest?: boolean | UserCountOutputTypeCountTeamRequestArgs
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
  export type UserCountOutputTypeCountHackathonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HackathonWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJudgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JudgeWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamMembersWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamRequestWhereInput
  }



  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    projects: number
    registrations: number
    teamMembers: number
    teamRequest: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | TeamCountOutputTypeCountProjectsArgs
    registrations?: boolean | TeamCountOutputTypeCountRegistrationsArgs
    teamMembers?: boolean | TeamCountOutputTypeCountTeamMembersArgs
    teamRequest?: boolean | TeamCountOutputTypeCountTeamRequestArgs
  }

  // Custom InputTypes

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HackathonRegistrationWhereInput
  }


  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountTeamMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamMembersWhereInput
  }


  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountTeamRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamRequestWhereInput
  }



  /**
   * Count Type HackathonCountOutputType
   */

  export type HackathonCountOutputType = {
    projects: number
    registrations: number
    judge: number
    judgeassessments: number
    hackathonSponsors: number
    hackathonSponsors: number
  }

  export type HackathonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | HackathonCountOutputTypeCountProjectsArgs
    registrations?: boolean | HackathonCountOutputTypeCountRegistrationsArgs
    judge?: boolean | HackathonCountOutputTypeCountJudgeArgs
    judgeassessments?: boolean | HackathonCountOutputTypeCountJudgeassessmentsArgs
    hackathonSponsors?: boolean | HackathonCountOutputTypeCountHackathonSponsorsArgs
    hackathonSponsors?: boolean | HackathonCountOutputTypeCountHackathonSponsorsArgs
  }

  // Custom InputTypes

  /**
   * HackathonCountOutputType without action
   */
  export type HackathonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonCountOutputType
     */
    select?: HackathonCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * HackathonCountOutputType without action
   */
  export type HackathonCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * HackathonCountOutputType without action
   */
  export type HackathonCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HackathonRegistrationWhereInput
  }


  /**
   * HackathonCountOutputType without action
   */
  export type HackathonCountOutputTypeCountJudgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JudgeWhereInput
  }


  /**
   * HackathonCountOutputType without action
   */
  export type HackathonCountOutputTypeCountJudgeassessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JudgeassessmentsWhereInput
  }


  /**
   * HackathonCountOutputType without action
   */
  export type HackathonCountOutputTypeCountHackathonSponsorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HackathonSponsorsWhereInput
  }


  /**
   * HackathonCountOutputType without action
   */
  export type HackathonCountOutputTypeCountHackathonSponsorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HackathonSponsorsWhereInput
  }



  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    judgeassessments: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    judgeassessments?: boolean | ProjectCountOutputTypeCountJudgeassessmentsArgs
  }

  // Custom InputTypes

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountJudgeassessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JudgeassessmentsWhereInput
  }



  /**
   * Count Type JudgeCountOutputType
   */

  export type JudgeCountOutputType = {
    judgeassessments: number
  }

  export type JudgeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    judgeassessments?: boolean | JudgeCountOutputTypeCountJudgeassessmentsArgs
  }

  // Custom InputTypes

  /**
   * JudgeCountOutputType without action
   */
  export type JudgeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JudgeCountOutputType
     */
    select?: JudgeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * JudgeCountOutputType without action
   */
  export type JudgeCountOutputTypeCountJudgeassessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JudgeassessmentsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    refresh_token_expires_in: number | null
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    refresh_token_expires_in: number | null
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    refresh_token_expires_in: number | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    refresh_token_expires_in: number | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    refresh_token_expires_in: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    refresh_token_expires_in?: true
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    refresh_token_expires_in?: true
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    refresh_token_expires_in?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    refresh_token_expires_in?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    refresh_token_expires_in?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    refresh_token_expires_in: number | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    refresh_token_expires_in?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    refresh_token_expires_in?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      refresh_token_expires_in: number | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }


  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly refresh_token_expires_in: FieldRef<"Account", 'Int'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
  }



  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }


  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    gamertag: string | null
    role: $Enums.Role | null
    emailVerified: boolean | null
    image: string | null
    isVerified: boolean | null
    lightningAddress: string | null
    publicBio: string | null
    publicStaticCharge: string | null
    balance: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    gamertag: string | null
    role: $Enums.Role | null
    emailVerified: boolean | null
    image: string | null
    isVerified: boolean | null
    lightningAddress: string | null
    publicBio: string | null
    publicStaticCharge: string | null
    balance: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    gamertag: number
    role: number
    emailVerified: number
    image: number
    isVerified: number
    lightningAddress: number
    publicBio: number
    publicStaticCharge: number
    social: number
    balance: number
    remainingAmountLimits: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    gamertag?: true
    role?: true
    emailVerified?: true
    image?: true
    isVerified?: true
    lightningAddress?: true
    publicBio?: true
    publicStaticCharge?: true
    balance?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    gamertag?: true
    role?: true
    emailVerified?: true
    image?: true
    isVerified?: true
    lightningAddress?: true
    publicBio?: true
    publicStaticCharge?: true
    balance?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    gamertag?: true
    role?: true
    emailVerified?: true
    image?: true
    isVerified?: true
    lightningAddress?: true
    publicBio?: true
    publicStaticCharge?: true
    social?: true
    balance?: true
    remainingAmountLimits?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    gamertag: string
    role: $Enums.Role
    emailVerified: boolean | null
    image: string | null
    isVerified: boolean | null
    lightningAddress: string | null
    publicBio: string | null
    publicStaticCharge: string | null
    social: JsonValue | null
    balance: string | null
    remainingAmountLimits: JsonValue | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    gamertag?: boolean
    role?: boolean
    emailVerified?: boolean
    image?: boolean
    isVerified?: boolean
    lightningAddress?: boolean
    publicBio?: boolean
    publicStaticCharge?: boolean
    social?: boolean
    balance?: boolean
    remainingAmountLimits?: boolean
    hackathons?: boolean | User$hackathonsArgs<ExtArgs>
    teams?: boolean | User$teamsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    judge?: boolean | User$judgeArgs<ExtArgs>
    teamMembers?: boolean | User$teamMembersArgs<ExtArgs>
    teamRequest?: boolean | User$teamRequestArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    gamertag?: boolean
    role?: boolean
    emailVerified?: boolean
    image?: boolean
    isVerified?: boolean
    lightningAddress?: boolean
    publicBio?: boolean
    publicStaticCharge?: boolean
    social?: boolean
    balance?: boolean
    remainingAmountLimits?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hackathons?: boolean | User$hackathonsArgs<ExtArgs>
    teams?: boolean | User$teamsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    judge?: boolean | User$judgeArgs<ExtArgs>
    teamMembers?: boolean | User$teamMembersArgs<ExtArgs>
    teamRequest?: boolean | User$teamRequestArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      hackathons: Prisma.$HackathonPayload<ExtArgs>[]
      teams: Prisma.$TeamPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      judge: Prisma.$JudgePayload<ExtArgs>[]
      teamMembers: Prisma.$teamMembersPayload<ExtArgs>[]
      teamRequest: Prisma.$teamRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      gamertag: string
      role: $Enums.Role
      emailVerified: boolean | null
      image: string | null
      isVerified: boolean | null
      lightningAddress: string | null
      publicBio: string | null
      publicStaticCharge: string | null
      social: Prisma.JsonValue | null
      balance: string | null
      remainingAmountLimits: Prisma.JsonValue | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
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
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    hackathons<T extends User$hackathonsArgs<ExtArgs> = {}>(args?: Subset<T, User$hackathonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, 'findMany'> | Null>;

    teams<T extends User$teamsArgs<ExtArgs> = {}>(args?: Subset<T, User$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findMany'> | Null>;

    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'> | Null>;

    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    judge<T extends User$judgeArgs<ExtArgs> = {}>(args?: Subset<T, User$judgeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JudgePayload<ExtArgs>, T, 'findMany'> | Null>;

    teamMembers<T extends User$teamMembersArgs<ExtArgs> = {}>(args?: Subset<T, User$teamMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamMembersPayload<ExtArgs>, T, 'findMany'> | Null>;

    teamRequest<T extends User$teamRequestArgs<ExtArgs> = {}>(args?: Subset<T, User$teamRequestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamRequestPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly gamertag: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly lightningAddress: FieldRef<"User", 'String'>
    readonly publicBio: FieldRef<"User", 'String'>
    readonly publicStaticCharge: FieldRef<"User", 'String'>
    readonly social: FieldRef<"User", 'Json'>
    readonly balance: FieldRef<"User", 'String'>
    readonly remainingAmountLimits: FieldRef<"User", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.hackathons
   */
  export type User$hackathonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonInclude<ExtArgs> | null
    where?: HackathonWhereInput
    orderBy?: HackathonOrderByWithRelationInput | HackathonOrderByWithRelationInput[]
    cursor?: HackathonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HackathonScalarFieldEnum | HackathonScalarFieldEnum[]
  }


  /**
   * User.teams
   */
  export type User$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * User.judge
   */
  export type User$judgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judge
     */
    select?: JudgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeInclude<ExtArgs> | null
    where?: JudgeWhereInput
    orderBy?: JudgeOrderByWithRelationInput | JudgeOrderByWithRelationInput[]
    cursor?: JudgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JudgeScalarFieldEnum | JudgeScalarFieldEnum[]
  }


  /**
   * User.teamMembers
   */
  export type User$teamMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teamMembers
     */
    select?: teamMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamMembersInclude<ExtArgs> | null
    where?: teamMembersWhereInput
    orderBy?: teamMembersOrderByWithRelationInput | teamMembersOrderByWithRelationInput[]
    cursor?: teamMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMembersScalarFieldEnum | TeamMembersScalarFieldEnum[]
  }


  /**
   * User.teamRequest
   */
  export type User$teamRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teamRequest
     */
    select?: teamRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamRequestInclude<ExtArgs> | null
    where?: teamRequestWhereInput
    orderBy?: teamRequestOrderByWithRelationInput | teamRequestOrderByWithRelationInput[]
    cursor?: teamRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamRequestScalarFieldEnum | TeamRequestScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }


  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VerificationToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
    **/
    findMany<T extends VerificationTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
    **/
    create<T extends VerificationTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VerificationTokens.
     *     @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     *     @example
     *     // Create many VerificationTokens
     *     const verificationToken = await prisma.verificationToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VerificationTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
    **/
    delete<T extends VerificationTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


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
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }


  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }


  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
  }



  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    teamAvatar: string | null
    creatorId: string | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    teamAvatar: string | null
    creatorId: string | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    description: number
    teamAvatar: number
    creatorId: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    teamAvatar?: true
    creatorId?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    teamAvatar?: true
    creatorId?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    teamAvatar?: true
    creatorId?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    description: string
    teamAvatar: string
    creatorId: string
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    teamAvatar?: boolean
    creatorId?: boolean
    projects?: boolean | Team$projectsArgs<ExtArgs>
    registrations?: boolean | Team$registrationsArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    teamMembers?: boolean | Team$teamMembersArgs<ExtArgs>
    teamRequest?: boolean | Team$teamRequestArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    teamAvatar?: boolean
    creatorId?: boolean
  }

  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | Team$projectsArgs<ExtArgs>
    registrations?: boolean | Team$registrationsArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    teamMembers?: boolean | Team$teamMembersArgs<ExtArgs>
    teamRequest?: boolean | Team$teamRequestArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      registrations: Prisma.$HackathonRegistrationPayload<ExtArgs>[]
      creator: Prisma.$UserPayload<ExtArgs>
      teamMembers: Prisma.$teamMembersPayload<ExtArgs>[]
      teamRequest: Prisma.$teamRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      description: string
      teamAvatar: string
      creatorId: string
    }, ExtArgs["result"]["team"]>
    composites: {}
  }


  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TeamFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Team that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TeamFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TeamFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
    **/
    create<T extends TeamCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamCreateArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Teams.
     *     @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     *     @example
     *     // Create many Teams
     *     const team = await prisma.team.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TeamCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
    **/
    delete<T extends TeamDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TeamUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TeamDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TeamUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
    **/
    upsert<T extends TeamUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>
    ): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
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
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    projects<T extends Team$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Team$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findMany'> | Null>;

    registrations<T extends Team$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, Team$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HackathonRegistrationPayload<ExtArgs>, T, 'findMany'> | Null>;

    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    teamMembers<T extends Team$teamMembersArgs<ExtArgs> = {}>(args?: Subset<T, Team$teamMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamMembersPayload<ExtArgs>, T, 'findMany'> | Null>;

    teamRequest<T extends Team$teamRequestArgs<ExtArgs> = {}>(args?: Subset<T, Team$teamRequestArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamRequestPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Team model
   */ 
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
    readonly updatedAt: FieldRef<"Team", 'DateTime'>
    readonly name: FieldRef<"Team", 'String'>
    readonly description: FieldRef<"Team", 'String'>
    readonly teamAvatar: FieldRef<"Team", 'String'>
    readonly creatorId: FieldRef<"Team", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }


  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }


  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
  }


  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }


  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
  }


  /**
   * Team.projects
   */
  export type Team$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * Team.registrations
   */
  export type Team$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonRegistration
     */
    select?: HackathonRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonRegistrationInclude<ExtArgs> | null
    where?: HackathonRegistrationWhereInput
    orderBy?: HackathonRegistrationOrderByWithRelationInput | HackathonRegistrationOrderByWithRelationInput[]
    cursor?: HackathonRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HackathonRegistrationScalarFieldEnum | HackathonRegistrationScalarFieldEnum[]
  }


  /**
   * Team.teamMembers
   */
  export type Team$teamMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teamMembers
     */
    select?: teamMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamMembersInclude<ExtArgs> | null
    where?: teamMembersWhereInput
    orderBy?: teamMembersOrderByWithRelationInput | teamMembersOrderByWithRelationInput[]
    cursor?: teamMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMembersScalarFieldEnum | TeamMembersScalarFieldEnum[]
  }


  /**
   * Team.teamRequest
   */
  export type Team$teamRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teamRequest
     */
    select?: teamRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamRequestInclude<ExtArgs> | null
    where?: teamRequestWhereInput
    orderBy?: teamRequestOrderByWithRelationInput | teamRequestOrderByWithRelationInput[]
    cursor?: teamRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamRequestScalarFieldEnum | TeamRequestScalarFieldEnum[]
  }


  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude<ExtArgs> | null
  }



  /**
   * Model Hackathon
   */

  export type AggregateHackathon = {
    _count: HackathonCountAggregateOutputType | null
    _min: HackathonMinAggregateOutputType | null
    _max: HackathonMaxAggregateOutputType | null
  }

  export type HackathonMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    benefits: string | null
    rules: string | null
    judgingCriteria: string | null
    firstPlacePrize: string | null
    secondPlacePrize: string | null
    thirdPlacePrize: string | null
    published: boolean | null
    creatorId: string | null
    startDate: string | null
    endDate: string | null
  }

  export type HackathonMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    benefits: string | null
    rules: string | null
    judgingCriteria: string | null
    firstPlacePrize: string | null
    secondPlacePrize: string | null
    thirdPlacePrize: string | null
    published: boolean | null
    creatorId: string | null
    startDate: string | null
    endDate: string | null
  }

  export type HackathonCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    description: number
    benefits: number
    rules: number
    judgingCriteria: number
    firstPlacePrize: number
    secondPlacePrize: number
    thirdPlacePrize: number
    published: number
    creatorId: number
    startDate: number
    endDate: number
    _all: number
  }


  export type HackathonMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    benefits?: true
    rules?: true
    judgingCriteria?: true
    firstPlacePrize?: true
    secondPlacePrize?: true
    thirdPlacePrize?: true
    published?: true
    creatorId?: true
    startDate?: true
    endDate?: true
  }

  export type HackathonMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    benefits?: true
    rules?: true
    judgingCriteria?: true
    firstPlacePrize?: true
    secondPlacePrize?: true
    thirdPlacePrize?: true
    published?: true
    creatorId?: true
    startDate?: true
    endDate?: true
  }

  export type HackathonCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    benefits?: true
    rules?: true
    judgingCriteria?: true
    firstPlacePrize?: true
    secondPlacePrize?: true
    thirdPlacePrize?: true
    published?: true
    creatorId?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type HackathonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hackathon to aggregate.
     */
    where?: HackathonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hackathons to fetch.
     */
    orderBy?: HackathonOrderByWithRelationInput | HackathonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HackathonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hackathons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hackathons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hackathons
    **/
    _count?: true | HackathonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HackathonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HackathonMaxAggregateInputType
  }

  export type GetHackathonAggregateType<T extends HackathonAggregateArgs> = {
        [P in keyof T & keyof AggregateHackathon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHackathon[P]>
      : GetScalarType<T[P], AggregateHackathon[P]>
  }




  export type HackathonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HackathonWhereInput
    orderBy?: HackathonOrderByWithAggregationInput | HackathonOrderByWithAggregationInput[]
    by: HackathonScalarFieldEnum[] | HackathonScalarFieldEnum
    having?: HackathonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HackathonCountAggregateInputType | true
    _min?: HackathonMinAggregateInputType
    _max?: HackathonMaxAggregateInputType
  }

  export type HackathonGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    title: string
    description: string
    benefits: string
    rules: string
    judgingCriteria: string
    firstPlacePrize: string
    secondPlacePrize: string
    thirdPlacePrize: string
    published: boolean
    creatorId: string
    startDate: string
    endDate: string
    _count: HackathonCountAggregateOutputType | null
    _min: HackathonMinAggregateOutputType | null
    _max: HackathonMaxAggregateOutputType | null
  }

  type GetHackathonGroupByPayload<T extends HackathonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HackathonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HackathonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HackathonGroupByOutputType[P]>
            : GetScalarType<T[P], HackathonGroupByOutputType[P]>
        }
      >
    >


  export type HackathonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    benefits?: boolean
    rules?: boolean
    judgingCriteria?: boolean
    firstPlacePrize?: boolean
    secondPlacePrize?: boolean
    thirdPlacePrize?: boolean
    published?: boolean
    creatorId?: boolean
    startDate?: boolean
    endDate?: boolean
    projects?: boolean | Hackathon$projectsArgs<ExtArgs>
    registrations?: boolean | Hackathon$registrationsArgs<ExtArgs>
    judge?: boolean | Hackathon$judgeArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    judgeassessments?: boolean | Hackathon$judgeassessmentsArgs<ExtArgs>
    hackathonSponsors?: boolean | Hackathon$hackathonSponsorsArgs<ExtArgs>
    hackathonSponsors?: boolean | Hackathon$hackathonSponsorsArgs<ExtArgs>
    _count?: boolean | HackathonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hackathon"]>

  export type HackathonSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    benefits?: boolean
    rules?: boolean
    judgingCriteria?: boolean
    firstPlacePrize?: boolean
    secondPlacePrize?: boolean
    thirdPlacePrize?: boolean
    published?: boolean
    creatorId?: boolean
    startDate?: boolean
    endDate?: boolean
  }

  export type HackathonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | Hackathon$projectsArgs<ExtArgs>
    registrations?: boolean | Hackathon$registrationsArgs<ExtArgs>
    judge?: boolean | Hackathon$judgeArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    judgeassessments?: boolean | Hackathon$judgeassessmentsArgs<ExtArgs>
    hackathonSponsors?: boolean | Hackathon$hackathonSponsorsArgs<ExtArgs>
    hackathonSponsors?: boolean | Hackathon$hackathonSponsorsArgs<ExtArgs>
    _count?: boolean | HackathonCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $HackathonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hackathon"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      registrations: Prisma.$HackathonRegistrationPayload<ExtArgs>[]
      judge: Prisma.$JudgePayload<ExtArgs>[]
      creator: Prisma.$UserPayload<ExtArgs>
      judgeassessments: Prisma.$JudgeassessmentsPayload<ExtArgs>[]
      hackathonSponsors: Prisma.$HackathonSponsorsPayload<ExtArgs>[]
      hackathonSponsors: Prisma.$HackathonSponsorsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      title: string
      description: string
      benefits: string
      rules: string
      judgingCriteria: string
      firstPlacePrize: string
      secondPlacePrize: string
      thirdPlacePrize: string
      published: boolean
      creatorId: string
      startDate: string
      endDate: string
    }, ExtArgs["result"]["hackathon"]>
    composites: {}
  }


  type HackathonGetPayload<S extends boolean | null | undefined | HackathonDefaultArgs> = $Result.GetResult<Prisma.$HackathonPayload, S>

  type HackathonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HackathonFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: HackathonCountAggregateInputType | true
    }

  export interface HackathonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hackathon'], meta: { name: 'Hackathon' } }
    /**
     * Find zero or one Hackathon that matches the filter.
     * @param {HackathonFindUniqueArgs} args - Arguments to find a Hackathon
     * @example
     * // Get one Hackathon
     * const hackathon = await prisma.hackathon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HackathonFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HackathonFindUniqueArgs<ExtArgs>>
    ): Prisma__HackathonClient<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Hackathon that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HackathonFindUniqueOrThrowArgs} args - Arguments to find a Hackathon
     * @example
     * // Get one Hackathon
     * const hackathon = await prisma.hackathon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HackathonFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HackathonFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HackathonClient<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Hackathon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonFindFirstArgs} args - Arguments to find a Hackathon
     * @example
     * // Get one Hackathon
     * const hackathon = await prisma.hackathon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HackathonFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HackathonFindFirstArgs<ExtArgs>>
    ): Prisma__HackathonClient<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Hackathon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonFindFirstOrThrowArgs} args - Arguments to find a Hackathon
     * @example
     * // Get one Hackathon
     * const hackathon = await prisma.hackathon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HackathonFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HackathonFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HackathonClient<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Hackathons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hackathons
     * const hackathons = await prisma.hackathon.findMany()
     * 
     * // Get first 10 Hackathons
     * const hackathons = await prisma.hackathon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hackathonWithIdOnly = await prisma.hackathon.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HackathonFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HackathonFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Hackathon.
     * @param {HackathonCreateArgs} args - Arguments to create a Hackathon.
     * @example
     * // Create one Hackathon
     * const Hackathon = await prisma.hackathon.create({
     *   data: {
     *     // ... data to create a Hackathon
     *   }
     * })
     * 
    **/
    create<T extends HackathonCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HackathonCreateArgs<ExtArgs>>
    ): Prisma__HackathonClient<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Hackathons.
     *     @param {HackathonCreateManyArgs} args - Arguments to create many Hackathons.
     *     @example
     *     // Create many Hackathons
     *     const hackathon = await prisma.hackathon.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HackathonCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HackathonCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hackathon.
     * @param {HackathonDeleteArgs} args - Arguments to delete one Hackathon.
     * @example
     * // Delete one Hackathon
     * const Hackathon = await prisma.hackathon.delete({
     *   where: {
     *     // ... filter to delete one Hackathon
     *   }
     * })
     * 
    **/
    delete<T extends HackathonDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HackathonDeleteArgs<ExtArgs>>
    ): Prisma__HackathonClient<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Hackathon.
     * @param {HackathonUpdateArgs} args - Arguments to update one Hackathon.
     * @example
     * // Update one Hackathon
     * const hackathon = await prisma.hackathon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HackathonUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HackathonUpdateArgs<ExtArgs>>
    ): Prisma__HackathonClient<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Hackathons.
     * @param {HackathonDeleteManyArgs} args - Arguments to filter Hackathons to delete.
     * @example
     * // Delete a few Hackathons
     * const { count } = await prisma.hackathon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HackathonDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HackathonDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hackathons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hackathons
     * const hackathon = await prisma.hackathon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HackathonUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HackathonUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hackathon.
     * @param {HackathonUpsertArgs} args - Arguments to update or create a Hackathon.
     * @example
     * // Update or create a Hackathon
     * const hackathon = await prisma.hackathon.upsert({
     *   create: {
     *     // ... data to create a Hackathon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hackathon we want to update
     *   }
     * })
    **/
    upsert<T extends HackathonUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HackathonUpsertArgs<ExtArgs>>
    ): Prisma__HackathonClient<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Hackathons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonCountArgs} args - Arguments to filter Hackathons to count.
     * @example
     * // Count the number of Hackathons
     * const count = await prisma.hackathon.count({
     *   where: {
     *     // ... the filter for the Hackathons we want to count
     *   }
     * })
    **/
    count<T extends HackathonCountArgs>(
      args?: Subset<T, HackathonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HackathonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hackathon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HackathonAggregateArgs>(args: Subset<T, HackathonAggregateArgs>): Prisma.PrismaPromise<GetHackathonAggregateType<T>>

    /**
     * Group by Hackathon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonGroupByArgs} args - Group by arguments.
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
      T extends HackathonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HackathonGroupByArgs['orderBy'] }
        : { orderBy?: HackathonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HackathonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHackathonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hackathon model
   */
  readonly fields: HackathonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hackathon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HackathonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    projects<T extends Hackathon$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Hackathon$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findMany'> | Null>;

    registrations<T extends Hackathon$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, Hackathon$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HackathonRegistrationPayload<ExtArgs>, T, 'findMany'> | Null>;

    judge<T extends Hackathon$judgeArgs<ExtArgs> = {}>(args?: Subset<T, Hackathon$judgeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JudgePayload<ExtArgs>, T, 'findMany'> | Null>;

    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    judgeassessments<T extends Hackathon$judgeassessmentsArgs<ExtArgs> = {}>(args?: Subset<T, Hackathon$judgeassessmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JudgeassessmentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    hackathonSponsors<T extends Hackathon$hackathonSponsorsArgs<ExtArgs> = {}>(args?: Subset<T, Hackathon$hackathonSponsorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HackathonSponsorsPayload<ExtArgs>, T, 'findMany'> | Null>;

    hackathonSponsors<T extends Hackathon$hackathonSponsorsArgs<ExtArgs> = {}>(args?: Subset<T, Hackathon$hackathonSponsorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HackathonSponsorsPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Hackathon model
   */ 
  interface HackathonFieldRefs {
    readonly id: FieldRef<"Hackathon", 'String'>
    readonly createdAt: FieldRef<"Hackathon", 'DateTime'>
    readonly updatedAt: FieldRef<"Hackathon", 'DateTime'>
    readonly title: FieldRef<"Hackathon", 'String'>
    readonly description: FieldRef<"Hackathon", 'String'>
    readonly benefits: FieldRef<"Hackathon", 'String'>
    readonly rules: FieldRef<"Hackathon", 'String'>
    readonly judgingCriteria: FieldRef<"Hackathon", 'String'>
    readonly firstPlacePrize: FieldRef<"Hackathon", 'String'>
    readonly secondPlacePrize: FieldRef<"Hackathon", 'String'>
    readonly thirdPlacePrize: FieldRef<"Hackathon", 'String'>
    readonly published: FieldRef<"Hackathon", 'Boolean'>
    readonly creatorId: FieldRef<"Hackathon", 'String'>
    readonly startDate: FieldRef<"Hackathon", 'String'>
    readonly endDate: FieldRef<"Hackathon", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Hackathon findUnique
   */
  export type HackathonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonInclude<ExtArgs> | null
    /**
     * Filter, which Hackathon to fetch.
     */
    where: HackathonWhereUniqueInput
  }


  /**
   * Hackathon findUniqueOrThrow
   */
  export type HackathonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonInclude<ExtArgs> | null
    /**
     * Filter, which Hackathon to fetch.
     */
    where: HackathonWhereUniqueInput
  }


  /**
   * Hackathon findFirst
   */
  export type HackathonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonInclude<ExtArgs> | null
    /**
     * Filter, which Hackathon to fetch.
     */
    where?: HackathonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hackathons to fetch.
     */
    orderBy?: HackathonOrderByWithRelationInput | HackathonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hackathons.
     */
    cursor?: HackathonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hackathons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hackathons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hackathons.
     */
    distinct?: HackathonScalarFieldEnum | HackathonScalarFieldEnum[]
  }


  /**
   * Hackathon findFirstOrThrow
   */
  export type HackathonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonInclude<ExtArgs> | null
    /**
     * Filter, which Hackathon to fetch.
     */
    where?: HackathonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hackathons to fetch.
     */
    orderBy?: HackathonOrderByWithRelationInput | HackathonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hackathons.
     */
    cursor?: HackathonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hackathons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hackathons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hackathons.
     */
    distinct?: HackathonScalarFieldEnum | HackathonScalarFieldEnum[]
  }


  /**
   * Hackathon findMany
   */
  export type HackathonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonInclude<ExtArgs> | null
    /**
     * Filter, which Hackathons to fetch.
     */
    where?: HackathonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hackathons to fetch.
     */
    orderBy?: HackathonOrderByWithRelationInput | HackathonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hackathons.
     */
    cursor?: HackathonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hackathons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hackathons.
     */
    skip?: number
    distinct?: HackathonScalarFieldEnum | HackathonScalarFieldEnum[]
  }


  /**
   * Hackathon create
   */
  export type HackathonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonInclude<ExtArgs> | null
    /**
     * The data needed to create a Hackathon.
     */
    data: XOR<HackathonCreateInput, HackathonUncheckedCreateInput>
  }


  /**
   * Hackathon createMany
   */
  export type HackathonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hackathons.
     */
    data: HackathonCreateManyInput | HackathonCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Hackathon update
   */
  export type HackathonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonInclude<ExtArgs> | null
    /**
     * The data needed to update a Hackathon.
     */
    data: XOR<HackathonUpdateInput, HackathonUncheckedUpdateInput>
    /**
     * Choose, which Hackathon to update.
     */
    where: HackathonWhereUniqueInput
  }


  /**
   * Hackathon updateMany
   */
  export type HackathonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hackathons.
     */
    data: XOR<HackathonUpdateManyMutationInput, HackathonUncheckedUpdateManyInput>
    /**
     * Filter which Hackathons to update
     */
    where?: HackathonWhereInput
  }


  /**
   * Hackathon upsert
   */
  export type HackathonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonInclude<ExtArgs> | null
    /**
     * The filter to search for the Hackathon to update in case it exists.
     */
    where: HackathonWhereUniqueInput
    /**
     * In case the Hackathon found by the `where` argument doesn't exist, create a new Hackathon with this data.
     */
    create: XOR<HackathonCreateInput, HackathonUncheckedCreateInput>
    /**
     * In case the Hackathon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HackathonUpdateInput, HackathonUncheckedUpdateInput>
  }


  /**
   * Hackathon delete
   */
  export type HackathonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonInclude<ExtArgs> | null
    /**
     * Filter which Hackathon to delete.
     */
    where: HackathonWhereUniqueInput
  }


  /**
   * Hackathon deleteMany
   */
  export type HackathonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hackathons to delete
     */
    where?: HackathonWhereInput
  }


  /**
   * Hackathon.projects
   */
  export type Hackathon$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * Hackathon.registrations
   */
  export type Hackathon$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonRegistration
     */
    select?: HackathonRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonRegistrationInclude<ExtArgs> | null
    where?: HackathonRegistrationWhereInput
    orderBy?: HackathonRegistrationOrderByWithRelationInput | HackathonRegistrationOrderByWithRelationInput[]
    cursor?: HackathonRegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HackathonRegistrationScalarFieldEnum | HackathonRegistrationScalarFieldEnum[]
  }


  /**
   * Hackathon.judge
   */
  export type Hackathon$judgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judge
     */
    select?: JudgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeInclude<ExtArgs> | null
    where?: JudgeWhereInput
    orderBy?: JudgeOrderByWithRelationInput | JudgeOrderByWithRelationInput[]
    cursor?: JudgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JudgeScalarFieldEnum | JudgeScalarFieldEnum[]
  }


  /**
   * Hackathon.judgeassessments
   */
  export type Hackathon$judgeassessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judgeassessments
     */
    select?: JudgeassessmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeassessmentsInclude<ExtArgs> | null
    where?: JudgeassessmentsWhereInput
    orderBy?: JudgeassessmentsOrderByWithRelationInput | JudgeassessmentsOrderByWithRelationInput[]
    cursor?: JudgeassessmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JudgeassessmentsScalarFieldEnum | JudgeassessmentsScalarFieldEnum[]
  }


  /**
   * Hackathon.hackathonSponsors
   */
  export type Hackathon$hackathonSponsorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonSponsors
     */
    select?: HackathonSponsorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonSponsorsInclude<ExtArgs> | null
    where?: HackathonSponsorsWhereInput
    orderBy?: HackathonSponsorsOrderByWithRelationInput | HackathonSponsorsOrderByWithRelationInput[]
    cursor?: HackathonSponsorsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HackathonSponsorsScalarFieldEnum | HackathonSponsorsScalarFieldEnum[]
  }


  /**
   * Hackathon.hackathonSponsors
   */
  export type Hackathon$hackathonSponsorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonSponsors
     */
    select?: HackathonSponsorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonSponsorsInclude<ExtArgs> | null
    where?: HackathonSponsorsWhereInput
    orderBy?: HackathonSponsorsOrderByWithRelationInput | HackathonSponsorsOrderByWithRelationInput[]
    cursor?: HackathonSponsorsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HackathonSponsorsScalarFieldEnum | HackathonSponsorsScalarFieldEnum[]
  }


  /**
   * Hackathon without action
   */
  export type HackathonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hackathon
     */
    select?: HackathonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonInclude<ExtArgs> | null
  }



  /**
   * Model HackathonRegistration
   */

  export type AggregateHackathonRegistration = {
    _count: HackathonRegistrationCountAggregateOutputType | null
    _min: HackathonRegistrationMinAggregateOutputType | null
    _max: HackathonRegistrationMaxAggregateOutputType | null
  }

  export type HackathonRegistrationMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    hackathonId: string | null
    teamId: string | null
  }

  export type HackathonRegistrationMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    hackathonId: string | null
    teamId: string | null
  }

  export type HackathonRegistrationCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    hackathonId: number
    teamId: number
    _all: number
  }


  export type HackathonRegistrationMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    hackathonId?: true
    teamId?: true
  }

  export type HackathonRegistrationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    hackathonId?: true
    teamId?: true
  }

  export type HackathonRegistrationCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    hackathonId?: true
    teamId?: true
    _all?: true
  }

  export type HackathonRegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HackathonRegistration to aggregate.
     */
    where?: HackathonRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HackathonRegistrations to fetch.
     */
    orderBy?: HackathonRegistrationOrderByWithRelationInput | HackathonRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HackathonRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HackathonRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HackathonRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HackathonRegistrations
    **/
    _count?: true | HackathonRegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HackathonRegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HackathonRegistrationMaxAggregateInputType
  }

  export type GetHackathonRegistrationAggregateType<T extends HackathonRegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregateHackathonRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHackathonRegistration[P]>
      : GetScalarType<T[P], AggregateHackathonRegistration[P]>
  }




  export type HackathonRegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HackathonRegistrationWhereInput
    orderBy?: HackathonRegistrationOrderByWithAggregationInput | HackathonRegistrationOrderByWithAggregationInput[]
    by: HackathonRegistrationScalarFieldEnum[] | HackathonRegistrationScalarFieldEnum
    having?: HackathonRegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HackathonRegistrationCountAggregateInputType | true
    _min?: HackathonRegistrationMinAggregateInputType
    _max?: HackathonRegistrationMaxAggregateInputType
  }

  export type HackathonRegistrationGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    hackathonId: string
    teamId: string
    _count: HackathonRegistrationCountAggregateOutputType | null
    _min: HackathonRegistrationMinAggregateOutputType | null
    _max: HackathonRegistrationMaxAggregateOutputType | null
  }

  type GetHackathonRegistrationGroupByPayload<T extends HackathonRegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HackathonRegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HackathonRegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HackathonRegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], HackathonRegistrationGroupByOutputType[P]>
        }
      >
    >


  export type HackathonRegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hackathonId?: boolean
    teamId?: boolean
    hackathon?: boolean | HackathonDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hackathonRegistration"]>

  export type HackathonRegistrationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    hackathonId?: boolean
    teamId?: boolean
  }

  export type HackathonRegistrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hackathon?: boolean | HackathonDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }


  export type $HackathonRegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HackathonRegistration"
    objects: {
      hackathon: Prisma.$HackathonPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      hackathonId: string
      teamId: string
    }, ExtArgs["result"]["hackathonRegistration"]>
    composites: {}
  }


  type HackathonRegistrationGetPayload<S extends boolean | null | undefined | HackathonRegistrationDefaultArgs> = $Result.GetResult<Prisma.$HackathonRegistrationPayload, S>

  type HackathonRegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HackathonRegistrationFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: HackathonRegistrationCountAggregateInputType | true
    }

  export interface HackathonRegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HackathonRegistration'], meta: { name: 'HackathonRegistration' } }
    /**
     * Find zero or one HackathonRegistration that matches the filter.
     * @param {HackathonRegistrationFindUniqueArgs} args - Arguments to find a HackathonRegistration
     * @example
     * // Get one HackathonRegistration
     * const hackathonRegistration = await prisma.hackathonRegistration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HackathonRegistrationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HackathonRegistrationFindUniqueArgs<ExtArgs>>
    ): Prisma__HackathonRegistrationClient<$Result.GetResult<Prisma.$HackathonRegistrationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one HackathonRegistration that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HackathonRegistrationFindUniqueOrThrowArgs} args - Arguments to find a HackathonRegistration
     * @example
     * // Get one HackathonRegistration
     * const hackathonRegistration = await prisma.hackathonRegistration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HackathonRegistrationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HackathonRegistrationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HackathonRegistrationClient<$Result.GetResult<Prisma.$HackathonRegistrationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first HackathonRegistration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonRegistrationFindFirstArgs} args - Arguments to find a HackathonRegistration
     * @example
     * // Get one HackathonRegistration
     * const hackathonRegistration = await prisma.hackathonRegistration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HackathonRegistrationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HackathonRegistrationFindFirstArgs<ExtArgs>>
    ): Prisma__HackathonRegistrationClient<$Result.GetResult<Prisma.$HackathonRegistrationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first HackathonRegistration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonRegistrationFindFirstOrThrowArgs} args - Arguments to find a HackathonRegistration
     * @example
     * // Get one HackathonRegistration
     * const hackathonRegistration = await prisma.hackathonRegistration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HackathonRegistrationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HackathonRegistrationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HackathonRegistrationClient<$Result.GetResult<Prisma.$HackathonRegistrationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more HackathonRegistrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonRegistrationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HackathonRegistrations
     * const hackathonRegistrations = await prisma.hackathonRegistration.findMany()
     * 
     * // Get first 10 HackathonRegistrations
     * const hackathonRegistrations = await prisma.hackathonRegistration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hackathonRegistrationWithIdOnly = await prisma.hackathonRegistration.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HackathonRegistrationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HackathonRegistrationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HackathonRegistrationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a HackathonRegistration.
     * @param {HackathonRegistrationCreateArgs} args - Arguments to create a HackathonRegistration.
     * @example
     * // Create one HackathonRegistration
     * const HackathonRegistration = await prisma.hackathonRegistration.create({
     *   data: {
     *     // ... data to create a HackathonRegistration
     *   }
     * })
     * 
    **/
    create<T extends HackathonRegistrationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HackathonRegistrationCreateArgs<ExtArgs>>
    ): Prisma__HackathonRegistrationClient<$Result.GetResult<Prisma.$HackathonRegistrationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many HackathonRegistrations.
     *     @param {HackathonRegistrationCreateManyArgs} args - Arguments to create many HackathonRegistrations.
     *     @example
     *     // Create many HackathonRegistrations
     *     const hackathonRegistration = await prisma.hackathonRegistration.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HackathonRegistrationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HackathonRegistrationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HackathonRegistration.
     * @param {HackathonRegistrationDeleteArgs} args - Arguments to delete one HackathonRegistration.
     * @example
     * // Delete one HackathonRegistration
     * const HackathonRegistration = await prisma.hackathonRegistration.delete({
     *   where: {
     *     // ... filter to delete one HackathonRegistration
     *   }
     * })
     * 
    **/
    delete<T extends HackathonRegistrationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HackathonRegistrationDeleteArgs<ExtArgs>>
    ): Prisma__HackathonRegistrationClient<$Result.GetResult<Prisma.$HackathonRegistrationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one HackathonRegistration.
     * @param {HackathonRegistrationUpdateArgs} args - Arguments to update one HackathonRegistration.
     * @example
     * // Update one HackathonRegistration
     * const hackathonRegistration = await prisma.hackathonRegistration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HackathonRegistrationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HackathonRegistrationUpdateArgs<ExtArgs>>
    ): Prisma__HackathonRegistrationClient<$Result.GetResult<Prisma.$HackathonRegistrationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more HackathonRegistrations.
     * @param {HackathonRegistrationDeleteManyArgs} args - Arguments to filter HackathonRegistrations to delete.
     * @example
     * // Delete a few HackathonRegistrations
     * const { count } = await prisma.hackathonRegistration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HackathonRegistrationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HackathonRegistrationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HackathonRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonRegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HackathonRegistrations
     * const hackathonRegistration = await prisma.hackathonRegistration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HackathonRegistrationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HackathonRegistrationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HackathonRegistration.
     * @param {HackathonRegistrationUpsertArgs} args - Arguments to update or create a HackathonRegistration.
     * @example
     * // Update or create a HackathonRegistration
     * const hackathonRegistration = await prisma.hackathonRegistration.upsert({
     *   create: {
     *     // ... data to create a HackathonRegistration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HackathonRegistration we want to update
     *   }
     * })
    **/
    upsert<T extends HackathonRegistrationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HackathonRegistrationUpsertArgs<ExtArgs>>
    ): Prisma__HackathonRegistrationClient<$Result.GetResult<Prisma.$HackathonRegistrationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of HackathonRegistrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonRegistrationCountArgs} args - Arguments to filter HackathonRegistrations to count.
     * @example
     * // Count the number of HackathonRegistrations
     * const count = await prisma.hackathonRegistration.count({
     *   where: {
     *     // ... the filter for the HackathonRegistrations we want to count
     *   }
     * })
    **/
    count<T extends HackathonRegistrationCountArgs>(
      args?: Subset<T, HackathonRegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HackathonRegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HackathonRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonRegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HackathonRegistrationAggregateArgs>(args: Subset<T, HackathonRegistrationAggregateArgs>): Prisma.PrismaPromise<GetHackathonRegistrationAggregateType<T>>

    /**
     * Group by HackathonRegistration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonRegistrationGroupByArgs} args - Group by arguments.
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
      T extends HackathonRegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HackathonRegistrationGroupByArgs['orderBy'] }
        : { orderBy?: HackathonRegistrationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HackathonRegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHackathonRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HackathonRegistration model
   */
  readonly fields: HackathonRegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HackathonRegistration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HackathonRegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    hackathon<T extends HackathonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HackathonDefaultArgs<ExtArgs>>): Prisma__HackathonClient<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the HackathonRegistration model
   */ 
  interface HackathonRegistrationFieldRefs {
    readonly id: FieldRef<"HackathonRegistration", 'String'>
    readonly createdAt: FieldRef<"HackathonRegistration", 'DateTime'>
    readonly updatedAt: FieldRef<"HackathonRegistration", 'DateTime'>
    readonly hackathonId: FieldRef<"HackathonRegistration", 'String'>
    readonly teamId: FieldRef<"HackathonRegistration", 'String'>
  }
    

  // Custom InputTypes

  /**
   * HackathonRegistration findUnique
   */
  export type HackathonRegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonRegistration
     */
    select?: HackathonRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which HackathonRegistration to fetch.
     */
    where: HackathonRegistrationWhereUniqueInput
  }


  /**
   * HackathonRegistration findUniqueOrThrow
   */
  export type HackathonRegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonRegistration
     */
    select?: HackathonRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which HackathonRegistration to fetch.
     */
    where: HackathonRegistrationWhereUniqueInput
  }


  /**
   * HackathonRegistration findFirst
   */
  export type HackathonRegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonRegistration
     */
    select?: HackathonRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which HackathonRegistration to fetch.
     */
    where?: HackathonRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HackathonRegistrations to fetch.
     */
    orderBy?: HackathonRegistrationOrderByWithRelationInput | HackathonRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HackathonRegistrations.
     */
    cursor?: HackathonRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HackathonRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HackathonRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HackathonRegistrations.
     */
    distinct?: HackathonRegistrationScalarFieldEnum | HackathonRegistrationScalarFieldEnum[]
  }


  /**
   * HackathonRegistration findFirstOrThrow
   */
  export type HackathonRegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonRegistration
     */
    select?: HackathonRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which HackathonRegistration to fetch.
     */
    where?: HackathonRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HackathonRegistrations to fetch.
     */
    orderBy?: HackathonRegistrationOrderByWithRelationInput | HackathonRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HackathonRegistrations.
     */
    cursor?: HackathonRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HackathonRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HackathonRegistrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HackathonRegistrations.
     */
    distinct?: HackathonRegistrationScalarFieldEnum | HackathonRegistrationScalarFieldEnum[]
  }


  /**
   * HackathonRegistration findMany
   */
  export type HackathonRegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonRegistration
     */
    select?: HackathonRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonRegistrationInclude<ExtArgs> | null
    /**
     * Filter, which HackathonRegistrations to fetch.
     */
    where?: HackathonRegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HackathonRegistrations to fetch.
     */
    orderBy?: HackathonRegistrationOrderByWithRelationInput | HackathonRegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HackathonRegistrations.
     */
    cursor?: HackathonRegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HackathonRegistrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HackathonRegistrations.
     */
    skip?: number
    distinct?: HackathonRegistrationScalarFieldEnum | HackathonRegistrationScalarFieldEnum[]
  }


  /**
   * HackathonRegistration create
   */
  export type HackathonRegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonRegistration
     */
    select?: HackathonRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to create a HackathonRegistration.
     */
    data: XOR<HackathonRegistrationCreateInput, HackathonRegistrationUncheckedCreateInput>
  }


  /**
   * HackathonRegistration createMany
   */
  export type HackathonRegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HackathonRegistrations.
     */
    data: HackathonRegistrationCreateManyInput | HackathonRegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * HackathonRegistration update
   */
  export type HackathonRegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonRegistration
     */
    select?: HackathonRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonRegistrationInclude<ExtArgs> | null
    /**
     * The data needed to update a HackathonRegistration.
     */
    data: XOR<HackathonRegistrationUpdateInput, HackathonRegistrationUncheckedUpdateInput>
    /**
     * Choose, which HackathonRegistration to update.
     */
    where: HackathonRegistrationWhereUniqueInput
  }


  /**
   * HackathonRegistration updateMany
   */
  export type HackathonRegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HackathonRegistrations.
     */
    data: XOR<HackathonRegistrationUpdateManyMutationInput, HackathonRegistrationUncheckedUpdateManyInput>
    /**
     * Filter which HackathonRegistrations to update
     */
    where?: HackathonRegistrationWhereInput
  }


  /**
   * HackathonRegistration upsert
   */
  export type HackathonRegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonRegistration
     */
    select?: HackathonRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonRegistrationInclude<ExtArgs> | null
    /**
     * The filter to search for the HackathonRegistration to update in case it exists.
     */
    where: HackathonRegistrationWhereUniqueInput
    /**
     * In case the HackathonRegistration found by the `where` argument doesn't exist, create a new HackathonRegistration with this data.
     */
    create: XOR<HackathonRegistrationCreateInput, HackathonRegistrationUncheckedCreateInput>
    /**
     * In case the HackathonRegistration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HackathonRegistrationUpdateInput, HackathonRegistrationUncheckedUpdateInput>
  }


  /**
   * HackathonRegistration delete
   */
  export type HackathonRegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonRegistration
     */
    select?: HackathonRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonRegistrationInclude<ExtArgs> | null
    /**
     * Filter which HackathonRegistration to delete.
     */
    where: HackathonRegistrationWhereUniqueInput
  }


  /**
   * HackathonRegistration deleteMany
   */
  export type HackathonRegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HackathonRegistrations to delete
     */
    where?: HackathonRegistrationWhereInput
  }


  /**
   * HackathonRegistration without action
   */
  export type HackathonRegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonRegistration
     */
    select?: HackathonRegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonRegistrationInclude<ExtArgs> | null
  }



  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    loomLink: string | null
    pitchLink: string | null
    projectResourceLink: string | null
    comments: string | null
    hackathonId: string | null
    teamId: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    loomLink: string | null
    pitchLink: string | null
    projectResourceLink: string | null
    comments: string | null
    hackathonId: string | null
    teamId: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    description: number
    loomLink: number
    pitchLink: number
    projectResourceLink: number
    comments: number
    hackathonId: number
    teamId: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    loomLink?: true
    pitchLink?: true
    projectResourceLink?: true
    comments?: true
    hackathonId?: true
    teamId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    loomLink?: true
    pitchLink?: true
    projectResourceLink?: true
    comments?: true
    hackathonId?: true
    teamId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    loomLink?: true
    pitchLink?: true
    projectResourceLink?: true
    comments?: true
    hackathonId?: true
    teamId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    description: string
    loomLink: string
    pitchLink: string
    projectResourceLink: string
    comments: string | null
    hackathonId: string
    teamId: string
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    loomLink?: boolean
    pitchLink?: boolean
    projectResourceLink?: boolean
    comments?: boolean
    hackathonId?: boolean
    teamId?: boolean
    hackathon?: boolean | HackathonDefaultArgs<ExtArgs>
    judgeassessments?: boolean | Project$judgeassessmentsArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    loomLink?: boolean
    pitchLink?: boolean
    projectResourceLink?: boolean
    comments?: boolean
    hackathonId?: boolean
    teamId?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hackathon?: boolean | HackathonDefaultArgs<ExtArgs>
    judgeassessments?: boolean | Project$judgeassessmentsArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      hackathon: Prisma.$HackathonPayload<ExtArgs>
      judgeassessments: Prisma.$JudgeassessmentsPayload<ExtArgs>[]
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      description: string
      loomLink: string
      pitchLink: string
      projectResourceLink: string
      comments: string | null
      hackathonId: string
      teamId: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }


  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProjectFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
    **/
    create<T extends ProjectCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Projects.
     *     @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const project = await prisma.project.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
    **/
    delete<T extends ProjectDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>
    ): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    hackathon<T extends HackathonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HackathonDefaultArgs<ExtArgs>>): Prisma__HackathonClient<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    judgeassessments<T extends Project$judgeassessmentsArgs<ExtArgs> = {}>(args?: Subset<T, Project$judgeassessmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JudgeassessmentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly loomLink: FieldRef<"Project", 'String'>
    readonly pitchLink: FieldRef<"Project", 'String'>
    readonly projectResourceLink: FieldRef<"Project", 'String'>
    readonly comments: FieldRef<"Project", 'String'>
    readonly hackathonId: FieldRef<"Project", 'String'>
    readonly teamId: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }


  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }


  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }


  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }


  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }


  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }


  /**
   * Project.judgeassessments
   */
  export type Project$judgeassessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judgeassessments
     */
    select?: JudgeassessmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeassessmentsInclude<ExtArgs> | null
    where?: JudgeassessmentsWhereInput
    orderBy?: JudgeassessmentsOrderByWithRelationInput | JudgeassessmentsOrderByWithRelationInput[]
    cursor?: JudgeassessmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JudgeassessmentsScalarFieldEnum | JudgeassessmentsScalarFieldEnum[]
  }


  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectInclude<ExtArgs> | null
  }



  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    company: string | null
    comments: string | null
  }

  export type ContactMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    company: string | null
    comments: string | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    name: number
    email: number
    company: number
    comments: number
    _all: number
  }


  export type ContactMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    company?: true
    comments?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    company?: true
    comments?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    company?: true
    comments?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: string
    name: string
    email: string
    company: string
    comments: string
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    company?: boolean
    comments?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    company?: boolean
    comments?: boolean
  }


  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      company: string
      comments: string
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }


  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContactFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Contact that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContactFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContactFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
    **/
    create<T extends ContactCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactCreateArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Contacts.
     *     @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     *     @example
     *     // Create many Contacts
     *     const contact = await prisma.contact.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContactCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
    **/
    delete<T extends ContactDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContactUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContactDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContactUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
    **/
    upsert<T extends ContactUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
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
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


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
   * Fields of the Contact model
   */ 
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'String'>
    readonly name: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly company: FieldRef<"Contact", 'String'>
    readonly comments: FieldRef<"Contact", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }


  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }


  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }


  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }


  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }


  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }


  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }


  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
  }


  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }


  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }


  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
  }


  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
  }



  /**
   * Model Sponsors
   */

  export type AggregateSponsors = {
    _count: SponsorsCountAggregateOutputType | null
    _min: SponsorsMinAggregateOutputType | null
    _max: SponsorsMaxAggregateOutputType | null
  }

  export type SponsorsMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    company: string | null
  }

  export type SponsorsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    company: string | null
  }

  export type SponsorsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    company: number
    _all: number
  }


  export type SponsorsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    company?: true
  }

  export type SponsorsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    company?: true
  }

  export type SponsorsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    company?: true
    _all?: true
  }

  export type SponsorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sponsors to aggregate.
     */
    where?: SponsorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sponsors to fetch.
     */
    orderBy?: SponsorsOrderByWithRelationInput | SponsorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SponsorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sponsors
    **/
    _count?: true | SponsorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SponsorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SponsorsMaxAggregateInputType
  }

  export type GetSponsorsAggregateType<T extends SponsorsAggregateArgs> = {
        [P in keyof T & keyof AggregateSponsors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSponsors[P]>
      : GetScalarType<T[P], AggregateSponsors[P]>
  }




  export type SponsorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SponsorsWhereInput
    orderBy?: SponsorsOrderByWithAggregationInput | SponsorsOrderByWithAggregationInput[]
    by: SponsorsScalarFieldEnum[] | SponsorsScalarFieldEnum
    having?: SponsorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SponsorsCountAggregateInputType | true
    _min?: SponsorsMinAggregateInputType
    _max?: SponsorsMaxAggregateInputType
  }

  export type SponsorsGroupByOutputType = {
    id: string
    name: string
    email: string
    company: string
    _count: SponsorsCountAggregateOutputType | null
    _min: SponsorsMinAggregateOutputType | null
    _max: SponsorsMaxAggregateOutputType | null
  }

  type GetSponsorsGroupByPayload<T extends SponsorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SponsorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SponsorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SponsorsGroupByOutputType[P]>
            : GetScalarType<T[P], SponsorsGroupByOutputType[P]>
        }
      >
    >


  export type SponsorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    company?: boolean
  }, ExtArgs["result"]["sponsors"]>

  export type SponsorsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    company?: boolean
  }


  export type $SponsorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sponsors"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      company: string
    }, ExtArgs["result"]["sponsors"]>
    composites: {}
  }


  type SponsorsGetPayload<S extends boolean | null | undefined | SponsorsDefaultArgs> = $Result.GetResult<Prisma.$SponsorsPayload, S>

  type SponsorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SponsorsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: SponsorsCountAggregateInputType | true
    }

  export interface SponsorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sponsors'], meta: { name: 'Sponsors' } }
    /**
     * Find zero or one Sponsors that matches the filter.
     * @param {SponsorsFindUniqueArgs} args - Arguments to find a Sponsors
     * @example
     * // Get one Sponsors
     * const sponsors = await prisma.sponsors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SponsorsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SponsorsFindUniqueArgs<ExtArgs>>
    ): Prisma__SponsorsClient<$Result.GetResult<Prisma.$SponsorsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Sponsors that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SponsorsFindUniqueOrThrowArgs} args - Arguments to find a Sponsors
     * @example
     * // Get one Sponsors
     * const sponsors = await prisma.sponsors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SponsorsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SponsorsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SponsorsClient<$Result.GetResult<Prisma.$SponsorsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Sponsors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorsFindFirstArgs} args - Arguments to find a Sponsors
     * @example
     * // Get one Sponsors
     * const sponsors = await prisma.sponsors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SponsorsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SponsorsFindFirstArgs<ExtArgs>>
    ): Prisma__SponsorsClient<$Result.GetResult<Prisma.$SponsorsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Sponsors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorsFindFirstOrThrowArgs} args - Arguments to find a Sponsors
     * @example
     * // Get one Sponsors
     * const sponsors = await prisma.sponsors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SponsorsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SponsorsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SponsorsClient<$Result.GetResult<Prisma.$SponsorsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sponsors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sponsors
     * const sponsors = await prisma.sponsors.findMany()
     * 
     * // Get first 10 Sponsors
     * const sponsors = await prisma.sponsors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sponsorsWithIdOnly = await prisma.sponsors.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SponsorsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SponsorsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SponsorsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Sponsors.
     * @param {SponsorsCreateArgs} args - Arguments to create a Sponsors.
     * @example
     * // Create one Sponsors
     * const Sponsors = await prisma.sponsors.create({
     *   data: {
     *     // ... data to create a Sponsors
     *   }
     * })
     * 
    **/
    create<T extends SponsorsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SponsorsCreateArgs<ExtArgs>>
    ): Prisma__SponsorsClient<$Result.GetResult<Prisma.$SponsorsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sponsors.
     *     @param {SponsorsCreateManyArgs} args - Arguments to create many Sponsors.
     *     @example
     *     // Create many Sponsors
     *     const sponsors = await prisma.sponsors.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SponsorsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SponsorsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sponsors.
     * @param {SponsorsDeleteArgs} args - Arguments to delete one Sponsors.
     * @example
     * // Delete one Sponsors
     * const Sponsors = await prisma.sponsors.delete({
     *   where: {
     *     // ... filter to delete one Sponsors
     *   }
     * })
     * 
    **/
    delete<T extends SponsorsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SponsorsDeleteArgs<ExtArgs>>
    ): Prisma__SponsorsClient<$Result.GetResult<Prisma.$SponsorsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Sponsors.
     * @param {SponsorsUpdateArgs} args - Arguments to update one Sponsors.
     * @example
     * // Update one Sponsors
     * const sponsors = await prisma.sponsors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SponsorsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SponsorsUpdateArgs<ExtArgs>>
    ): Prisma__SponsorsClient<$Result.GetResult<Prisma.$SponsorsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sponsors.
     * @param {SponsorsDeleteManyArgs} args - Arguments to filter Sponsors to delete.
     * @example
     * // Delete a few Sponsors
     * const { count } = await prisma.sponsors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SponsorsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SponsorsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sponsors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sponsors
     * const sponsors = await prisma.sponsors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SponsorsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SponsorsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sponsors.
     * @param {SponsorsUpsertArgs} args - Arguments to update or create a Sponsors.
     * @example
     * // Update or create a Sponsors
     * const sponsors = await prisma.sponsors.upsert({
     *   create: {
     *     // ... data to create a Sponsors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sponsors we want to update
     *   }
     * })
    **/
    upsert<T extends SponsorsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SponsorsUpsertArgs<ExtArgs>>
    ): Prisma__SponsorsClient<$Result.GetResult<Prisma.$SponsorsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sponsors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorsCountArgs} args - Arguments to filter Sponsors to count.
     * @example
     * // Count the number of Sponsors
     * const count = await prisma.sponsors.count({
     *   where: {
     *     // ... the filter for the Sponsors we want to count
     *   }
     * })
    **/
    count<T extends SponsorsCountArgs>(
      args?: Subset<T, SponsorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SponsorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sponsors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SponsorsAggregateArgs>(args: Subset<T, SponsorsAggregateArgs>): Prisma.PrismaPromise<GetSponsorsAggregateType<T>>

    /**
     * Group by Sponsors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorsGroupByArgs} args - Group by arguments.
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
      T extends SponsorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SponsorsGroupByArgs['orderBy'] }
        : { orderBy?: SponsorsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SponsorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSponsorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sponsors model
   */
  readonly fields: SponsorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sponsors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SponsorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


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
   * Fields of the Sponsors model
   */ 
  interface SponsorsFieldRefs {
    readonly id: FieldRef<"Sponsors", 'String'>
    readonly name: FieldRef<"Sponsors", 'String'>
    readonly email: FieldRef<"Sponsors", 'String'>
    readonly company: FieldRef<"Sponsors", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Sponsors findUnique
   */
  export type SponsorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsors
     */
    select?: SponsorsSelect<ExtArgs> | null
    /**
     * Filter, which Sponsors to fetch.
     */
    where: SponsorsWhereUniqueInput
  }


  /**
   * Sponsors findUniqueOrThrow
   */
  export type SponsorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsors
     */
    select?: SponsorsSelect<ExtArgs> | null
    /**
     * Filter, which Sponsors to fetch.
     */
    where: SponsorsWhereUniqueInput
  }


  /**
   * Sponsors findFirst
   */
  export type SponsorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsors
     */
    select?: SponsorsSelect<ExtArgs> | null
    /**
     * Filter, which Sponsors to fetch.
     */
    where?: SponsorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sponsors to fetch.
     */
    orderBy?: SponsorsOrderByWithRelationInput | SponsorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sponsors.
     */
    cursor?: SponsorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sponsors.
     */
    distinct?: SponsorsScalarFieldEnum | SponsorsScalarFieldEnum[]
  }


  /**
   * Sponsors findFirstOrThrow
   */
  export type SponsorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsors
     */
    select?: SponsorsSelect<ExtArgs> | null
    /**
     * Filter, which Sponsors to fetch.
     */
    where?: SponsorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sponsors to fetch.
     */
    orderBy?: SponsorsOrderByWithRelationInput | SponsorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sponsors.
     */
    cursor?: SponsorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sponsors.
     */
    distinct?: SponsorsScalarFieldEnum | SponsorsScalarFieldEnum[]
  }


  /**
   * Sponsors findMany
   */
  export type SponsorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsors
     */
    select?: SponsorsSelect<ExtArgs> | null
    /**
     * Filter, which Sponsors to fetch.
     */
    where?: SponsorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sponsors to fetch.
     */
    orderBy?: SponsorsOrderByWithRelationInput | SponsorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sponsors.
     */
    cursor?: SponsorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sponsors.
     */
    skip?: number
    distinct?: SponsorsScalarFieldEnum | SponsorsScalarFieldEnum[]
  }


  /**
   * Sponsors create
   */
  export type SponsorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsors
     */
    select?: SponsorsSelect<ExtArgs> | null
    /**
     * The data needed to create a Sponsors.
     */
    data: XOR<SponsorsCreateInput, SponsorsUncheckedCreateInput>
  }


  /**
   * Sponsors createMany
   */
  export type SponsorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sponsors.
     */
    data: SponsorsCreateManyInput | SponsorsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Sponsors update
   */
  export type SponsorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsors
     */
    select?: SponsorsSelect<ExtArgs> | null
    /**
     * The data needed to update a Sponsors.
     */
    data: XOR<SponsorsUpdateInput, SponsorsUncheckedUpdateInput>
    /**
     * Choose, which Sponsors to update.
     */
    where: SponsorsWhereUniqueInput
  }


  /**
   * Sponsors updateMany
   */
  export type SponsorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sponsors.
     */
    data: XOR<SponsorsUpdateManyMutationInput, SponsorsUncheckedUpdateManyInput>
    /**
     * Filter which Sponsors to update
     */
    where?: SponsorsWhereInput
  }


  /**
   * Sponsors upsert
   */
  export type SponsorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsors
     */
    select?: SponsorsSelect<ExtArgs> | null
    /**
     * The filter to search for the Sponsors to update in case it exists.
     */
    where: SponsorsWhereUniqueInput
    /**
     * In case the Sponsors found by the `where` argument doesn't exist, create a new Sponsors with this data.
     */
    create: XOR<SponsorsCreateInput, SponsorsUncheckedCreateInput>
    /**
     * In case the Sponsors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SponsorsUpdateInput, SponsorsUncheckedUpdateInput>
  }


  /**
   * Sponsors delete
   */
  export type SponsorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsors
     */
    select?: SponsorsSelect<ExtArgs> | null
    /**
     * Filter which Sponsors to delete.
     */
    where: SponsorsWhereUniqueInput
  }


  /**
   * Sponsors deleteMany
   */
  export type SponsorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sponsors to delete
     */
    where?: SponsorsWhereInput
  }


  /**
   * Sponsors without action
   */
  export type SponsorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsors
     */
    select?: SponsorsSelect<ExtArgs> | null
  }



  /**
   * Model Judge
   */

  export type AggregateJudge = {
    _count: JudgeCountAggregateOutputType | null
    _min: JudgeMinAggregateOutputType | null
    _max: JudgeMaxAggregateOutputType | null
  }

  export type JudgeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    judgeGamertag: string | null
    email: string | null
    judgeImage: string | null
    hackathonId: string | null
  }

  export type JudgeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    judgeGamertag: string | null
    email: string | null
    judgeImage: string | null
    hackathonId: string | null
  }

  export type JudgeCountAggregateOutputType = {
    id: number
    userId: number
    judgeGamertag: number
    email: number
    judgeImage: number
    hackathonId: number
    _all: number
  }


  export type JudgeMinAggregateInputType = {
    id?: true
    userId?: true
    judgeGamertag?: true
    email?: true
    judgeImage?: true
    hackathonId?: true
  }

  export type JudgeMaxAggregateInputType = {
    id?: true
    userId?: true
    judgeGamertag?: true
    email?: true
    judgeImage?: true
    hackathonId?: true
  }

  export type JudgeCountAggregateInputType = {
    id?: true
    userId?: true
    judgeGamertag?: true
    email?: true
    judgeImage?: true
    hackathonId?: true
    _all?: true
  }

  export type JudgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Judge to aggregate.
     */
    where?: JudgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Judges to fetch.
     */
    orderBy?: JudgeOrderByWithRelationInput | JudgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JudgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Judges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Judges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Judges
    **/
    _count?: true | JudgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JudgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JudgeMaxAggregateInputType
  }

  export type GetJudgeAggregateType<T extends JudgeAggregateArgs> = {
        [P in keyof T & keyof AggregateJudge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJudge[P]>
      : GetScalarType<T[P], AggregateJudge[P]>
  }




  export type JudgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JudgeWhereInput
    orderBy?: JudgeOrderByWithAggregationInput | JudgeOrderByWithAggregationInput[]
    by: JudgeScalarFieldEnum[] | JudgeScalarFieldEnum
    having?: JudgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JudgeCountAggregateInputType | true
    _min?: JudgeMinAggregateInputType
    _max?: JudgeMaxAggregateInputType
  }

  export type JudgeGroupByOutputType = {
    id: string
    userId: string
    judgeGamertag: string
    email: string
    judgeImage: string
    hackathonId: string
    _count: JudgeCountAggregateOutputType | null
    _min: JudgeMinAggregateOutputType | null
    _max: JudgeMaxAggregateOutputType | null
  }

  type GetJudgeGroupByPayload<T extends JudgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JudgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JudgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JudgeGroupByOutputType[P]>
            : GetScalarType<T[P], JudgeGroupByOutputType[P]>
        }
      >
    >


  export type JudgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    judgeGamertag?: boolean
    email?: boolean
    judgeImage?: boolean
    hackathonId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    hackathon?: boolean | HackathonDefaultArgs<ExtArgs>
    judgeassessments?: boolean | Judge$judgeassessmentsArgs<ExtArgs>
    _count?: boolean | JudgeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["judge"]>

  export type JudgeSelectScalar = {
    id?: boolean
    userId?: boolean
    judgeGamertag?: boolean
    email?: boolean
    judgeImage?: boolean
    hackathonId?: boolean
  }

  export type JudgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    hackathon?: boolean | HackathonDefaultArgs<ExtArgs>
    judgeassessments?: boolean | Judge$judgeassessmentsArgs<ExtArgs>
    _count?: boolean | JudgeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $JudgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Judge"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      hackathon: Prisma.$HackathonPayload<ExtArgs>
      judgeassessments: Prisma.$JudgeassessmentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      judgeGamertag: string
      email: string
      judgeImage: string
      hackathonId: string
    }, ExtArgs["result"]["judge"]>
    composites: {}
  }


  type JudgeGetPayload<S extends boolean | null | undefined | JudgeDefaultArgs> = $Result.GetResult<Prisma.$JudgePayload, S>

  type JudgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JudgeFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: JudgeCountAggregateInputType | true
    }

  export interface JudgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Judge'], meta: { name: 'Judge' } }
    /**
     * Find zero or one Judge that matches the filter.
     * @param {JudgeFindUniqueArgs} args - Arguments to find a Judge
     * @example
     * // Get one Judge
     * const judge = await prisma.judge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JudgeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, JudgeFindUniqueArgs<ExtArgs>>
    ): Prisma__JudgeClient<$Result.GetResult<Prisma.$JudgePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Judge that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {JudgeFindUniqueOrThrowArgs} args - Arguments to find a Judge
     * @example
     * // Get one Judge
     * const judge = await prisma.judge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JudgeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JudgeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__JudgeClient<$Result.GetResult<Prisma.$JudgePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Judge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JudgeFindFirstArgs} args - Arguments to find a Judge
     * @example
     * // Get one Judge
     * const judge = await prisma.judge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JudgeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, JudgeFindFirstArgs<ExtArgs>>
    ): Prisma__JudgeClient<$Result.GetResult<Prisma.$JudgePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Judge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JudgeFindFirstOrThrowArgs} args - Arguments to find a Judge
     * @example
     * // Get one Judge
     * const judge = await prisma.judge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JudgeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JudgeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__JudgeClient<$Result.GetResult<Prisma.$JudgePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Judges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JudgeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Judges
     * const judges = await prisma.judge.findMany()
     * 
     * // Get first 10 Judges
     * const judges = await prisma.judge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const judgeWithIdOnly = await prisma.judge.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends JudgeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JudgeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JudgePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Judge.
     * @param {JudgeCreateArgs} args - Arguments to create a Judge.
     * @example
     * // Create one Judge
     * const Judge = await prisma.judge.create({
     *   data: {
     *     // ... data to create a Judge
     *   }
     * })
     * 
    **/
    create<T extends JudgeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, JudgeCreateArgs<ExtArgs>>
    ): Prisma__JudgeClient<$Result.GetResult<Prisma.$JudgePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Judges.
     *     @param {JudgeCreateManyArgs} args - Arguments to create many Judges.
     *     @example
     *     // Create many Judges
     *     const judge = await prisma.judge.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends JudgeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JudgeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Judge.
     * @param {JudgeDeleteArgs} args - Arguments to delete one Judge.
     * @example
     * // Delete one Judge
     * const Judge = await prisma.judge.delete({
     *   where: {
     *     // ... filter to delete one Judge
     *   }
     * })
     * 
    **/
    delete<T extends JudgeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, JudgeDeleteArgs<ExtArgs>>
    ): Prisma__JudgeClient<$Result.GetResult<Prisma.$JudgePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Judge.
     * @param {JudgeUpdateArgs} args - Arguments to update one Judge.
     * @example
     * // Update one Judge
     * const judge = await prisma.judge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JudgeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, JudgeUpdateArgs<ExtArgs>>
    ): Prisma__JudgeClient<$Result.GetResult<Prisma.$JudgePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Judges.
     * @param {JudgeDeleteManyArgs} args - Arguments to filter Judges to delete.
     * @example
     * // Delete a few Judges
     * const { count } = await prisma.judge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JudgeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JudgeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Judges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JudgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Judges
     * const judge = await prisma.judge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JudgeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, JudgeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Judge.
     * @param {JudgeUpsertArgs} args - Arguments to update or create a Judge.
     * @example
     * // Update or create a Judge
     * const judge = await prisma.judge.upsert({
     *   create: {
     *     // ... data to create a Judge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Judge we want to update
     *   }
     * })
    **/
    upsert<T extends JudgeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, JudgeUpsertArgs<ExtArgs>>
    ): Prisma__JudgeClient<$Result.GetResult<Prisma.$JudgePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Judges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JudgeCountArgs} args - Arguments to filter Judges to count.
     * @example
     * // Count the number of Judges
     * const count = await prisma.judge.count({
     *   where: {
     *     // ... the filter for the Judges we want to count
     *   }
     * })
    **/
    count<T extends JudgeCountArgs>(
      args?: Subset<T, JudgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JudgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Judge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JudgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JudgeAggregateArgs>(args: Subset<T, JudgeAggregateArgs>): Prisma.PrismaPromise<GetJudgeAggregateType<T>>

    /**
     * Group by Judge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JudgeGroupByArgs} args - Group by arguments.
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
      T extends JudgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JudgeGroupByArgs['orderBy'] }
        : { orderBy?: JudgeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JudgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJudgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Judge model
   */
  readonly fields: JudgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Judge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JudgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    hackathon<T extends HackathonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HackathonDefaultArgs<ExtArgs>>): Prisma__HackathonClient<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    judgeassessments<T extends Judge$judgeassessmentsArgs<ExtArgs> = {}>(args?: Subset<T, Judge$judgeassessmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JudgeassessmentsPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the Judge model
   */ 
  interface JudgeFieldRefs {
    readonly id: FieldRef<"Judge", 'String'>
    readonly userId: FieldRef<"Judge", 'String'>
    readonly judgeGamertag: FieldRef<"Judge", 'String'>
    readonly email: FieldRef<"Judge", 'String'>
    readonly judgeImage: FieldRef<"Judge", 'String'>
    readonly hackathonId: FieldRef<"Judge", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Judge findUnique
   */
  export type JudgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judge
     */
    select?: JudgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeInclude<ExtArgs> | null
    /**
     * Filter, which Judge to fetch.
     */
    where: JudgeWhereUniqueInput
  }


  /**
   * Judge findUniqueOrThrow
   */
  export type JudgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judge
     */
    select?: JudgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeInclude<ExtArgs> | null
    /**
     * Filter, which Judge to fetch.
     */
    where: JudgeWhereUniqueInput
  }


  /**
   * Judge findFirst
   */
  export type JudgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judge
     */
    select?: JudgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeInclude<ExtArgs> | null
    /**
     * Filter, which Judge to fetch.
     */
    where?: JudgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Judges to fetch.
     */
    orderBy?: JudgeOrderByWithRelationInput | JudgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Judges.
     */
    cursor?: JudgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Judges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Judges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Judges.
     */
    distinct?: JudgeScalarFieldEnum | JudgeScalarFieldEnum[]
  }


  /**
   * Judge findFirstOrThrow
   */
  export type JudgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judge
     */
    select?: JudgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeInclude<ExtArgs> | null
    /**
     * Filter, which Judge to fetch.
     */
    where?: JudgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Judges to fetch.
     */
    orderBy?: JudgeOrderByWithRelationInput | JudgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Judges.
     */
    cursor?: JudgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Judges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Judges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Judges.
     */
    distinct?: JudgeScalarFieldEnum | JudgeScalarFieldEnum[]
  }


  /**
   * Judge findMany
   */
  export type JudgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judge
     */
    select?: JudgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeInclude<ExtArgs> | null
    /**
     * Filter, which Judges to fetch.
     */
    where?: JudgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Judges to fetch.
     */
    orderBy?: JudgeOrderByWithRelationInput | JudgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Judges.
     */
    cursor?: JudgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Judges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Judges.
     */
    skip?: number
    distinct?: JudgeScalarFieldEnum | JudgeScalarFieldEnum[]
  }


  /**
   * Judge create
   */
  export type JudgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judge
     */
    select?: JudgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeInclude<ExtArgs> | null
    /**
     * The data needed to create a Judge.
     */
    data: XOR<JudgeCreateInput, JudgeUncheckedCreateInput>
  }


  /**
   * Judge createMany
   */
  export type JudgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Judges.
     */
    data: JudgeCreateManyInput | JudgeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Judge update
   */
  export type JudgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judge
     */
    select?: JudgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeInclude<ExtArgs> | null
    /**
     * The data needed to update a Judge.
     */
    data: XOR<JudgeUpdateInput, JudgeUncheckedUpdateInput>
    /**
     * Choose, which Judge to update.
     */
    where: JudgeWhereUniqueInput
  }


  /**
   * Judge updateMany
   */
  export type JudgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Judges.
     */
    data: XOR<JudgeUpdateManyMutationInput, JudgeUncheckedUpdateManyInput>
    /**
     * Filter which Judges to update
     */
    where?: JudgeWhereInput
  }


  /**
   * Judge upsert
   */
  export type JudgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judge
     */
    select?: JudgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeInclude<ExtArgs> | null
    /**
     * The filter to search for the Judge to update in case it exists.
     */
    where: JudgeWhereUniqueInput
    /**
     * In case the Judge found by the `where` argument doesn't exist, create a new Judge with this data.
     */
    create: XOR<JudgeCreateInput, JudgeUncheckedCreateInput>
    /**
     * In case the Judge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JudgeUpdateInput, JudgeUncheckedUpdateInput>
  }


  /**
   * Judge delete
   */
  export type JudgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judge
     */
    select?: JudgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeInclude<ExtArgs> | null
    /**
     * Filter which Judge to delete.
     */
    where: JudgeWhereUniqueInput
  }


  /**
   * Judge deleteMany
   */
  export type JudgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Judges to delete
     */
    where?: JudgeWhereInput
  }


  /**
   * Judge.judgeassessments
   */
  export type Judge$judgeassessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judgeassessments
     */
    select?: JudgeassessmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeassessmentsInclude<ExtArgs> | null
    where?: JudgeassessmentsWhereInput
    orderBy?: JudgeassessmentsOrderByWithRelationInput | JudgeassessmentsOrderByWithRelationInput[]
    cursor?: JudgeassessmentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JudgeassessmentsScalarFieldEnum | JudgeassessmentsScalarFieldEnum[]
  }


  /**
   * Judge without action
   */
  export type JudgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judge
     */
    select?: JudgeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeInclude<ExtArgs> | null
  }



  /**
   * Model Judgeassessments
   */

  export type AggregateJudgeassessments = {
    _count: JudgeassessmentsCountAggregateOutputType | null
    _avg: JudgeassessmentsAvgAggregateOutputType | null
    _sum: JudgeassessmentsSumAggregateOutputType | null
    _min: JudgeassessmentsMinAggregateOutputType | null
    _max: JudgeassessmentsMaxAggregateOutputType | null
  }

  export type JudgeassessmentsAvgAggregateOutputType = {
    impact: number | null
    feasability: number | null
    user_experience: number | null
    scalability: number | null
    innovate: number | null
    pitch: number | null
    overall_score: Decimal | null
  }

  export type JudgeassessmentsSumAggregateOutputType = {
    impact: number | null
    feasability: number | null
    user_experience: number | null
    scalability: number | null
    innovate: number | null
    pitch: number | null
    overall_score: Decimal | null
  }

  export type JudgeassessmentsMinAggregateOutputType = {
    id: string | null
    impact: number | null
    feasability: number | null
    user_experience: number | null
    scalability: number | null
    innovate: number | null
    pitch: number | null
    overall_score: Decimal | null
    hackathonId: string | null
    projectId: string | null
    judgeId: string | null
  }

  export type JudgeassessmentsMaxAggregateOutputType = {
    id: string | null
    impact: number | null
    feasability: number | null
    user_experience: number | null
    scalability: number | null
    innovate: number | null
    pitch: number | null
    overall_score: Decimal | null
    hackathonId: string | null
    projectId: string | null
    judgeId: string | null
  }

  export type JudgeassessmentsCountAggregateOutputType = {
    id: number
    impact: number
    feasability: number
    user_experience: number
    scalability: number
    innovate: number
    pitch: number
    overall_score: number
    hackathonId: number
    projectId: number
    judgeId: number
    _all: number
  }


  export type JudgeassessmentsAvgAggregateInputType = {
    impact?: true
    feasability?: true
    user_experience?: true
    scalability?: true
    innovate?: true
    pitch?: true
    overall_score?: true
  }

  export type JudgeassessmentsSumAggregateInputType = {
    impact?: true
    feasability?: true
    user_experience?: true
    scalability?: true
    innovate?: true
    pitch?: true
    overall_score?: true
  }

  export type JudgeassessmentsMinAggregateInputType = {
    id?: true
    impact?: true
    feasability?: true
    user_experience?: true
    scalability?: true
    innovate?: true
    pitch?: true
    overall_score?: true
    hackathonId?: true
    projectId?: true
    judgeId?: true
  }

  export type JudgeassessmentsMaxAggregateInputType = {
    id?: true
    impact?: true
    feasability?: true
    user_experience?: true
    scalability?: true
    innovate?: true
    pitch?: true
    overall_score?: true
    hackathonId?: true
    projectId?: true
    judgeId?: true
  }

  export type JudgeassessmentsCountAggregateInputType = {
    id?: true
    impact?: true
    feasability?: true
    user_experience?: true
    scalability?: true
    innovate?: true
    pitch?: true
    overall_score?: true
    hackathonId?: true
    projectId?: true
    judgeId?: true
    _all?: true
  }

  export type JudgeassessmentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Judgeassessments to aggregate.
     */
    where?: JudgeassessmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Judgeassessments to fetch.
     */
    orderBy?: JudgeassessmentsOrderByWithRelationInput | JudgeassessmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JudgeassessmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Judgeassessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Judgeassessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Judgeassessments
    **/
    _count?: true | JudgeassessmentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JudgeassessmentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JudgeassessmentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JudgeassessmentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JudgeassessmentsMaxAggregateInputType
  }

  export type GetJudgeassessmentsAggregateType<T extends JudgeassessmentsAggregateArgs> = {
        [P in keyof T & keyof AggregateJudgeassessments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJudgeassessments[P]>
      : GetScalarType<T[P], AggregateJudgeassessments[P]>
  }




  export type JudgeassessmentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JudgeassessmentsWhereInput
    orderBy?: JudgeassessmentsOrderByWithAggregationInput | JudgeassessmentsOrderByWithAggregationInput[]
    by: JudgeassessmentsScalarFieldEnum[] | JudgeassessmentsScalarFieldEnum
    having?: JudgeassessmentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JudgeassessmentsCountAggregateInputType | true
    _avg?: JudgeassessmentsAvgAggregateInputType
    _sum?: JudgeassessmentsSumAggregateInputType
    _min?: JudgeassessmentsMinAggregateInputType
    _max?: JudgeassessmentsMaxAggregateInputType
  }

  export type JudgeassessmentsGroupByOutputType = {
    id: string
    impact: number
    feasability: number
    user_experience: number
    scalability: number
    innovate: number
    pitch: number
    overall_score: Decimal
    hackathonId: string
    projectId: string
    judgeId: string
    _count: JudgeassessmentsCountAggregateOutputType | null
    _avg: JudgeassessmentsAvgAggregateOutputType | null
    _sum: JudgeassessmentsSumAggregateOutputType | null
    _min: JudgeassessmentsMinAggregateOutputType | null
    _max: JudgeassessmentsMaxAggregateOutputType | null
  }

  type GetJudgeassessmentsGroupByPayload<T extends JudgeassessmentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JudgeassessmentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JudgeassessmentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JudgeassessmentsGroupByOutputType[P]>
            : GetScalarType<T[P], JudgeassessmentsGroupByOutputType[P]>
        }
      >
    >


  export type JudgeassessmentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    impact?: boolean
    feasability?: boolean
    user_experience?: boolean
    scalability?: boolean
    innovate?: boolean
    pitch?: boolean
    overall_score?: boolean
    hackathonId?: boolean
    projectId?: boolean
    judgeId?: boolean
    hackathon?: boolean | HackathonDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    judge?: boolean | JudgeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["judgeassessments"]>

  export type JudgeassessmentsSelectScalar = {
    id?: boolean
    impact?: boolean
    feasability?: boolean
    user_experience?: boolean
    scalability?: boolean
    innovate?: boolean
    pitch?: boolean
    overall_score?: boolean
    hackathonId?: boolean
    projectId?: boolean
    judgeId?: boolean
  }

  export type JudgeassessmentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hackathon?: boolean | HackathonDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    judge?: boolean | JudgeDefaultArgs<ExtArgs>
  }


  export type $JudgeassessmentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Judgeassessments"
    objects: {
      hackathon: Prisma.$HackathonPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
      judge: Prisma.$JudgePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      impact: number
      feasability: number
      user_experience: number
      scalability: number
      innovate: number
      pitch: number
      overall_score: Prisma.Decimal
      hackathonId: string
      projectId: string
      judgeId: string
    }, ExtArgs["result"]["judgeassessments"]>
    composites: {}
  }


  type JudgeassessmentsGetPayload<S extends boolean | null | undefined | JudgeassessmentsDefaultArgs> = $Result.GetResult<Prisma.$JudgeassessmentsPayload, S>

  type JudgeassessmentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JudgeassessmentsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: JudgeassessmentsCountAggregateInputType | true
    }

  export interface JudgeassessmentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Judgeassessments'], meta: { name: 'Judgeassessments' } }
    /**
     * Find zero or one Judgeassessments that matches the filter.
     * @param {JudgeassessmentsFindUniqueArgs} args - Arguments to find a Judgeassessments
     * @example
     * // Get one Judgeassessments
     * const judgeassessments = await prisma.judgeassessments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JudgeassessmentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, JudgeassessmentsFindUniqueArgs<ExtArgs>>
    ): Prisma__JudgeassessmentsClient<$Result.GetResult<Prisma.$JudgeassessmentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Judgeassessments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {JudgeassessmentsFindUniqueOrThrowArgs} args - Arguments to find a Judgeassessments
     * @example
     * // Get one Judgeassessments
     * const judgeassessments = await prisma.judgeassessments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JudgeassessmentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JudgeassessmentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__JudgeassessmentsClient<$Result.GetResult<Prisma.$JudgeassessmentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Judgeassessments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JudgeassessmentsFindFirstArgs} args - Arguments to find a Judgeassessments
     * @example
     * // Get one Judgeassessments
     * const judgeassessments = await prisma.judgeassessments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JudgeassessmentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, JudgeassessmentsFindFirstArgs<ExtArgs>>
    ): Prisma__JudgeassessmentsClient<$Result.GetResult<Prisma.$JudgeassessmentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Judgeassessments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JudgeassessmentsFindFirstOrThrowArgs} args - Arguments to find a Judgeassessments
     * @example
     * // Get one Judgeassessments
     * const judgeassessments = await prisma.judgeassessments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JudgeassessmentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JudgeassessmentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__JudgeassessmentsClient<$Result.GetResult<Prisma.$JudgeassessmentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Judgeassessments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JudgeassessmentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Judgeassessments
     * const judgeassessments = await prisma.judgeassessments.findMany()
     * 
     * // Get first 10 Judgeassessments
     * const judgeassessments = await prisma.judgeassessments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const judgeassessmentsWithIdOnly = await prisma.judgeassessments.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends JudgeassessmentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JudgeassessmentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JudgeassessmentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Judgeassessments.
     * @param {JudgeassessmentsCreateArgs} args - Arguments to create a Judgeassessments.
     * @example
     * // Create one Judgeassessments
     * const Judgeassessments = await prisma.judgeassessments.create({
     *   data: {
     *     // ... data to create a Judgeassessments
     *   }
     * })
     * 
    **/
    create<T extends JudgeassessmentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, JudgeassessmentsCreateArgs<ExtArgs>>
    ): Prisma__JudgeassessmentsClient<$Result.GetResult<Prisma.$JudgeassessmentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Judgeassessments.
     *     @param {JudgeassessmentsCreateManyArgs} args - Arguments to create many Judgeassessments.
     *     @example
     *     // Create many Judgeassessments
     *     const judgeassessments = await prisma.judgeassessments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends JudgeassessmentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JudgeassessmentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Judgeassessments.
     * @param {JudgeassessmentsDeleteArgs} args - Arguments to delete one Judgeassessments.
     * @example
     * // Delete one Judgeassessments
     * const Judgeassessments = await prisma.judgeassessments.delete({
     *   where: {
     *     // ... filter to delete one Judgeassessments
     *   }
     * })
     * 
    **/
    delete<T extends JudgeassessmentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, JudgeassessmentsDeleteArgs<ExtArgs>>
    ): Prisma__JudgeassessmentsClient<$Result.GetResult<Prisma.$JudgeassessmentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Judgeassessments.
     * @param {JudgeassessmentsUpdateArgs} args - Arguments to update one Judgeassessments.
     * @example
     * // Update one Judgeassessments
     * const judgeassessments = await prisma.judgeassessments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JudgeassessmentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, JudgeassessmentsUpdateArgs<ExtArgs>>
    ): Prisma__JudgeassessmentsClient<$Result.GetResult<Prisma.$JudgeassessmentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Judgeassessments.
     * @param {JudgeassessmentsDeleteManyArgs} args - Arguments to filter Judgeassessments to delete.
     * @example
     * // Delete a few Judgeassessments
     * const { count } = await prisma.judgeassessments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JudgeassessmentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JudgeassessmentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Judgeassessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JudgeassessmentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Judgeassessments
     * const judgeassessments = await prisma.judgeassessments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JudgeassessmentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, JudgeassessmentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Judgeassessments.
     * @param {JudgeassessmentsUpsertArgs} args - Arguments to update or create a Judgeassessments.
     * @example
     * // Update or create a Judgeassessments
     * const judgeassessments = await prisma.judgeassessments.upsert({
     *   create: {
     *     // ... data to create a Judgeassessments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Judgeassessments we want to update
     *   }
     * })
    **/
    upsert<T extends JudgeassessmentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, JudgeassessmentsUpsertArgs<ExtArgs>>
    ): Prisma__JudgeassessmentsClient<$Result.GetResult<Prisma.$JudgeassessmentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Judgeassessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JudgeassessmentsCountArgs} args - Arguments to filter Judgeassessments to count.
     * @example
     * // Count the number of Judgeassessments
     * const count = await prisma.judgeassessments.count({
     *   where: {
     *     // ... the filter for the Judgeassessments we want to count
     *   }
     * })
    **/
    count<T extends JudgeassessmentsCountArgs>(
      args?: Subset<T, JudgeassessmentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JudgeassessmentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Judgeassessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JudgeassessmentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JudgeassessmentsAggregateArgs>(args: Subset<T, JudgeassessmentsAggregateArgs>): Prisma.PrismaPromise<GetJudgeassessmentsAggregateType<T>>

    /**
     * Group by Judgeassessments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JudgeassessmentsGroupByArgs} args - Group by arguments.
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
      T extends JudgeassessmentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JudgeassessmentsGroupByArgs['orderBy'] }
        : { orderBy?: JudgeassessmentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JudgeassessmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJudgeassessmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Judgeassessments model
   */
  readonly fields: JudgeassessmentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Judgeassessments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JudgeassessmentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    hackathon<T extends HackathonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HackathonDefaultArgs<ExtArgs>>): Prisma__HackathonClient<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    judge<T extends JudgeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JudgeDefaultArgs<ExtArgs>>): Prisma__JudgeClient<$Result.GetResult<Prisma.$JudgePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the Judgeassessments model
   */ 
  interface JudgeassessmentsFieldRefs {
    readonly id: FieldRef<"Judgeassessments", 'String'>
    readonly impact: FieldRef<"Judgeassessments", 'Int'>
    readonly feasability: FieldRef<"Judgeassessments", 'Int'>
    readonly user_experience: FieldRef<"Judgeassessments", 'Int'>
    readonly scalability: FieldRef<"Judgeassessments", 'Int'>
    readonly innovate: FieldRef<"Judgeassessments", 'Int'>
    readonly pitch: FieldRef<"Judgeassessments", 'Int'>
    readonly overall_score: FieldRef<"Judgeassessments", 'Decimal'>
    readonly hackathonId: FieldRef<"Judgeassessments", 'String'>
    readonly projectId: FieldRef<"Judgeassessments", 'String'>
    readonly judgeId: FieldRef<"Judgeassessments", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Judgeassessments findUnique
   */
  export type JudgeassessmentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judgeassessments
     */
    select?: JudgeassessmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeassessmentsInclude<ExtArgs> | null
    /**
     * Filter, which Judgeassessments to fetch.
     */
    where: JudgeassessmentsWhereUniqueInput
  }


  /**
   * Judgeassessments findUniqueOrThrow
   */
  export type JudgeassessmentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judgeassessments
     */
    select?: JudgeassessmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeassessmentsInclude<ExtArgs> | null
    /**
     * Filter, which Judgeassessments to fetch.
     */
    where: JudgeassessmentsWhereUniqueInput
  }


  /**
   * Judgeassessments findFirst
   */
  export type JudgeassessmentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judgeassessments
     */
    select?: JudgeassessmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeassessmentsInclude<ExtArgs> | null
    /**
     * Filter, which Judgeassessments to fetch.
     */
    where?: JudgeassessmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Judgeassessments to fetch.
     */
    orderBy?: JudgeassessmentsOrderByWithRelationInput | JudgeassessmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Judgeassessments.
     */
    cursor?: JudgeassessmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Judgeassessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Judgeassessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Judgeassessments.
     */
    distinct?: JudgeassessmentsScalarFieldEnum | JudgeassessmentsScalarFieldEnum[]
  }


  /**
   * Judgeassessments findFirstOrThrow
   */
  export type JudgeassessmentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judgeassessments
     */
    select?: JudgeassessmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeassessmentsInclude<ExtArgs> | null
    /**
     * Filter, which Judgeassessments to fetch.
     */
    where?: JudgeassessmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Judgeassessments to fetch.
     */
    orderBy?: JudgeassessmentsOrderByWithRelationInput | JudgeassessmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Judgeassessments.
     */
    cursor?: JudgeassessmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Judgeassessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Judgeassessments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Judgeassessments.
     */
    distinct?: JudgeassessmentsScalarFieldEnum | JudgeassessmentsScalarFieldEnum[]
  }


  /**
   * Judgeassessments findMany
   */
  export type JudgeassessmentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judgeassessments
     */
    select?: JudgeassessmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeassessmentsInclude<ExtArgs> | null
    /**
     * Filter, which Judgeassessments to fetch.
     */
    where?: JudgeassessmentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Judgeassessments to fetch.
     */
    orderBy?: JudgeassessmentsOrderByWithRelationInput | JudgeassessmentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Judgeassessments.
     */
    cursor?: JudgeassessmentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Judgeassessments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Judgeassessments.
     */
    skip?: number
    distinct?: JudgeassessmentsScalarFieldEnum | JudgeassessmentsScalarFieldEnum[]
  }


  /**
   * Judgeassessments create
   */
  export type JudgeassessmentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judgeassessments
     */
    select?: JudgeassessmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeassessmentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Judgeassessments.
     */
    data: XOR<JudgeassessmentsCreateInput, JudgeassessmentsUncheckedCreateInput>
  }


  /**
   * Judgeassessments createMany
   */
  export type JudgeassessmentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Judgeassessments.
     */
    data: JudgeassessmentsCreateManyInput | JudgeassessmentsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Judgeassessments update
   */
  export type JudgeassessmentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judgeassessments
     */
    select?: JudgeassessmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeassessmentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Judgeassessments.
     */
    data: XOR<JudgeassessmentsUpdateInput, JudgeassessmentsUncheckedUpdateInput>
    /**
     * Choose, which Judgeassessments to update.
     */
    where: JudgeassessmentsWhereUniqueInput
  }


  /**
   * Judgeassessments updateMany
   */
  export type JudgeassessmentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Judgeassessments.
     */
    data: XOR<JudgeassessmentsUpdateManyMutationInput, JudgeassessmentsUncheckedUpdateManyInput>
    /**
     * Filter which Judgeassessments to update
     */
    where?: JudgeassessmentsWhereInput
  }


  /**
   * Judgeassessments upsert
   */
  export type JudgeassessmentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judgeassessments
     */
    select?: JudgeassessmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeassessmentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Judgeassessments to update in case it exists.
     */
    where: JudgeassessmentsWhereUniqueInput
    /**
     * In case the Judgeassessments found by the `where` argument doesn't exist, create a new Judgeassessments with this data.
     */
    create: XOR<JudgeassessmentsCreateInput, JudgeassessmentsUncheckedCreateInput>
    /**
     * In case the Judgeassessments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JudgeassessmentsUpdateInput, JudgeassessmentsUncheckedUpdateInput>
  }


  /**
   * Judgeassessments delete
   */
  export type JudgeassessmentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judgeassessments
     */
    select?: JudgeassessmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeassessmentsInclude<ExtArgs> | null
    /**
     * Filter which Judgeassessments to delete.
     */
    where: JudgeassessmentsWhereUniqueInput
  }


  /**
   * Judgeassessments deleteMany
   */
  export type JudgeassessmentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Judgeassessments to delete
     */
    where?: JudgeassessmentsWhereInput
  }


  /**
   * Judgeassessments without action
   */
  export type JudgeassessmentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Judgeassessments
     */
    select?: JudgeassessmentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: JudgeassessmentsInclude<ExtArgs> | null
  }



  /**
   * Model HackathonSponsors
   */

  export type AggregateHackathonSponsors = {
    _count: HackathonSponsorsCountAggregateOutputType | null
    _min: HackathonSponsorsMinAggregateOutputType | null
    _max: HackathonSponsorsMaxAggregateOutputType | null
  }

  export type HackathonSponsorsMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    hackathonId: string | null
  }

  export type HackathonSponsorsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    hackathonId: string | null
  }

  export type HackathonSponsorsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    image: number
    hackathonId: number
    _all: number
  }


  export type HackathonSponsorsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    hackathonId?: true
  }

  export type HackathonSponsorsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    hackathonId?: true
  }

  export type HackathonSponsorsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    hackathonId?: true
    _all?: true
  }

  export type HackathonSponsorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HackathonSponsors to aggregate.
     */
    where?: HackathonSponsorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HackathonSponsors to fetch.
     */
    orderBy?: HackathonSponsorsOrderByWithRelationInput | HackathonSponsorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HackathonSponsorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HackathonSponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HackathonSponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HackathonSponsors
    **/
    _count?: true | HackathonSponsorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HackathonSponsorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HackathonSponsorsMaxAggregateInputType
  }

  export type GetHackathonSponsorsAggregateType<T extends HackathonSponsorsAggregateArgs> = {
        [P in keyof T & keyof AggregateHackathonSponsors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHackathonSponsors[P]>
      : GetScalarType<T[P], AggregateHackathonSponsors[P]>
  }




  export type HackathonSponsorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HackathonSponsorsWhereInput
    orderBy?: HackathonSponsorsOrderByWithAggregationInput | HackathonSponsorsOrderByWithAggregationInput[]
    by: HackathonSponsorsScalarFieldEnum[] | HackathonSponsorsScalarFieldEnum
    having?: HackathonSponsorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HackathonSponsorsCountAggregateInputType | true
    _min?: HackathonSponsorsMinAggregateInputType
    _max?: HackathonSponsorsMaxAggregateInputType
  }

  export type HackathonSponsorsGroupByOutputType = {
    id: string
    name: string
    email: string
    image: string
    hackathonId: string
    _count: HackathonSponsorsCountAggregateOutputType | null
    _min: HackathonSponsorsMinAggregateOutputType | null
    _max: HackathonSponsorsMaxAggregateOutputType | null
  }

  type GetHackathonSponsorsGroupByPayload<T extends HackathonSponsorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HackathonSponsorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HackathonSponsorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HackathonSponsorsGroupByOutputType[P]>
            : GetScalarType<T[P], HackathonSponsorsGroupByOutputType[P]>
        }
      >
    >


  export type HackathonSponsorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    hackathonId?: boolean
    hackathon?: boolean | HackathonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hackathonSponsors"]>

  export type HackathonSponsorsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    hackathonId?: boolean
  }

  export type HackathonSponsorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hackathon?: boolean | HackathonDefaultArgs<ExtArgs>
  }


  export type $HackathonSponsorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HackathonSponsors"
    objects: {
      hackathon: Prisma.$HackathonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      image: string
      hackathonId: string
    }, ExtArgs["result"]["hackathonSponsors"]>
    composites: {}
  }


  type HackathonSponsorsGetPayload<S extends boolean | null | undefined | HackathonSponsorsDefaultArgs> = $Result.GetResult<Prisma.$HackathonSponsorsPayload, S>

  type HackathonSponsorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HackathonSponsorsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: HackathonSponsorsCountAggregateInputType | true
    }

  export interface HackathonSponsorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HackathonSponsors'], meta: { name: 'HackathonSponsors' } }
    /**
     * Find zero or one HackathonSponsors that matches the filter.
     * @param {HackathonSponsorsFindUniqueArgs} args - Arguments to find a HackathonSponsors
     * @example
     * // Get one HackathonSponsors
     * const hackathonSponsors = await prisma.hackathonSponsors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HackathonSponsorsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HackathonSponsorsFindUniqueArgs<ExtArgs>>
    ): Prisma__HackathonSponsorsClient<$Result.GetResult<Prisma.$HackathonSponsorsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one HackathonSponsors that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HackathonSponsorsFindUniqueOrThrowArgs} args - Arguments to find a HackathonSponsors
     * @example
     * // Get one HackathonSponsors
     * const hackathonSponsors = await prisma.hackathonSponsors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HackathonSponsorsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HackathonSponsorsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HackathonSponsorsClient<$Result.GetResult<Prisma.$HackathonSponsorsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first HackathonSponsors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonSponsorsFindFirstArgs} args - Arguments to find a HackathonSponsors
     * @example
     * // Get one HackathonSponsors
     * const hackathonSponsors = await prisma.hackathonSponsors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HackathonSponsorsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HackathonSponsorsFindFirstArgs<ExtArgs>>
    ): Prisma__HackathonSponsorsClient<$Result.GetResult<Prisma.$HackathonSponsorsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first HackathonSponsors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonSponsorsFindFirstOrThrowArgs} args - Arguments to find a HackathonSponsors
     * @example
     * // Get one HackathonSponsors
     * const hackathonSponsors = await prisma.hackathonSponsors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HackathonSponsorsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HackathonSponsorsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HackathonSponsorsClient<$Result.GetResult<Prisma.$HackathonSponsorsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more HackathonSponsors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonSponsorsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HackathonSponsors
     * const hackathonSponsors = await prisma.hackathonSponsors.findMany()
     * 
     * // Get first 10 HackathonSponsors
     * const hackathonSponsors = await prisma.hackathonSponsors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hackathonSponsorsWithIdOnly = await prisma.hackathonSponsors.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HackathonSponsorsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HackathonSponsorsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HackathonSponsorsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a HackathonSponsors.
     * @param {HackathonSponsorsCreateArgs} args - Arguments to create a HackathonSponsors.
     * @example
     * // Create one HackathonSponsors
     * const HackathonSponsors = await prisma.hackathonSponsors.create({
     *   data: {
     *     // ... data to create a HackathonSponsors
     *   }
     * })
     * 
    **/
    create<T extends HackathonSponsorsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HackathonSponsorsCreateArgs<ExtArgs>>
    ): Prisma__HackathonSponsorsClient<$Result.GetResult<Prisma.$HackathonSponsorsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many HackathonSponsors.
     *     @param {HackathonSponsorsCreateManyArgs} args - Arguments to create many HackathonSponsors.
     *     @example
     *     // Create many HackathonSponsors
     *     const hackathonSponsors = await prisma.hackathonSponsors.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HackathonSponsorsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HackathonSponsorsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HackathonSponsors.
     * @param {HackathonSponsorsDeleteArgs} args - Arguments to delete one HackathonSponsors.
     * @example
     * // Delete one HackathonSponsors
     * const HackathonSponsors = await prisma.hackathonSponsors.delete({
     *   where: {
     *     // ... filter to delete one HackathonSponsors
     *   }
     * })
     * 
    **/
    delete<T extends HackathonSponsorsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HackathonSponsorsDeleteArgs<ExtArgs>>
    ): Prisma__HackathonSponsorsClient<$Result.GetResult<Prisma.$HackathonSponsorsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one HackathonSponsors.
     * @param {HackathonSponsorsUpdateArgs} args - Arguments to update one HackathonSponsors.
     * @example
     * // Update one HackathonSponsors
     * const hackathonSponsors = await prisma.hackathonSponsors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HackathonSponsorsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HackathonSponsorsUpdateArgs<ExtArgs>>
    ): Prisma__HackathonSponsorsClient<$Result.GetResult<Prisma.$HackathonSponsorsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more HackathonSponsors.
     * @param {HackathonSponsorsDeleteManyArgs} args - Arguments to filter HackathonSponsors to delete.
     * @example
     * // Delete a few HackathonSponsors
     * const { count } = await prisma.hackathonSponsors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HackathonSponsorsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HackathonSponsorsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HackathonSponsors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonSponsorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HackathonSponsors
     * const hackathonSponsors = await prisma.hackathonSponsors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HackathonSponsorsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HackathonSponsorsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HackathonSponsors.
     * @param {HackathonSponsorsUpsertArgs} args - Arguments to update or create a HackathonSponsors.
     * @example
     * // Update or create a HackathonSponsors
     * const hackathonSponsors = await prisma.hackathonSponsors.upsert({
     *   create: {
     *     // ... data to create a HackathonSponsors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HackathonSponsors we want to update
     *   }
     * })
    **/
    upsert<T extends HackathonSponsorsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HackathonSponsorsUpsertArgs<ExtArgs>>
    ): Prisma__HackathonSponsorsClient<$Result.GetResult<Prisma.$HackathonSponsorsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of HackathonSponsors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonSponsorsCountArgs} args - Arguments to filter HackathonSponsors to count.
     * @example
     * // Count the number of HackathonSponsors
     * const count = await prisma.hackathonSponsors.count({
     *   where: {
     *     // ... the filter for the HackathonSponsors we want to count
     *   }
     * })
    **/
    count<T extends HackathonSponsorsCountArgs>(
      args?: Subset<T, HackathonSponsorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HackathonSponsorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HackathonSponsors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonSponsorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HackathonSponsorsAggregateArgs>(args: Subset<T, HackathonSponsorsAggregateArgs>): Prisma.PrismaPromise<GetHackathonSponsorsAggregateType<T>>

    /**
     * Group by HackathonSponsors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HackathonSponsorsGroupByArgs} args - Group by arguments.
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
      T extends HackathonSponsorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HackathonSponsorsGroupByArgs['orderBy'] }
        : { orderBy?: HackathonSponsorsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HackathonSponsorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHackathonSponsorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HackathonSponsors model
   */
  readonly fields: HackathonSponsorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HackathonSponsors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HackathonSponsorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    hackathon<T extends HackathonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HackathonDefaultArgs<ExtArgs>>): Prisma__HackathonClient<$Result.GetResult<Prisma.$HackathonPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the HackathonSponsors model
   */ 
  interface HackathonSponsorsFieldRefs {
    readonly id: FieldRef<"HackathonSponsors", 'String'>
    readonly name: FieldRef<"HackathonSponsors", 'String'>
    readonly email: FieldRef<"HackathonSponsors", 'String'>
    readonly image: FieldRef<"HackathonSponsors", 'String'>
    readonly hackathonId: FieldRef<"HackathonSponsors", 'String'>
  }
    

  // Custom InputTypes

  /**
   * HackathonSponsors findUnique
   */
  export type HackathonSponsorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonSponsors
     */
    select?: HackathonSponsorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonSponsorsInclude<ExtArgs> | null
    /**
     * Filter, which HackathonSponsors to fetch.
     */
    where: HackathonSponsorsWhereUniqueInput
  }


  /**
   * HackathonSponsors findUniqueOrThrow
   */
  export type HackathonSponsorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonSponsors
     */
    select?: HackathonSponsorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonSponsorsInclude<ExtArgs> | null
    /**
     * Filter, which HackathonSponsors to fetch.
     */
    where: HackathonSponsorsWhereUniqueInput
  }


  /**
   * HackathonSponsors findFirst
   */
  export type HackathonSponsorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonSponsors
     */
    select?: HackathonSponsorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonSponsorsInclude<ExtArgs> | null
    /**
     * Filter, which HackathonSponsors to fetch.
     */
    where?: HackathonSponsorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HackathonSponsors to fetch.
     */
    orderBy?: HackathonSponsorsOrderByWithRelationInput | HackathonSponsorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HackathonSponsors.
     */
    cursor?: HackathonSponsorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HackathonSponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HackathonSponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HackathonSponsors.
     */
    distinct?: HackathonSponsorsScalarFieldEnum | HackathonSponsorsScalarFieldEnum[]
  }


  /**
   * HackathonSponsors findFirstOrThrow
   */
  export type HackathonSponsorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonSponsors
     */
    select?: HackathonSponsorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonSponsorsInclude<ExtArgs> | null
    /**
     * Filter, which HackathonSponsors to fetch.
     */
    where?: HackathonSponsorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HackathonSponsors to fetch.
     */
    orderBy?: HackathonSponsorsOrderByWithRelationInput | HackathonSponsorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HackathonSponsors.
     */
    cursor?: HackathonSponsorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HackathonSponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HackathonSponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HackathonSponsors.
     */
    distinct?: HackathonSponsorsScalarFieldEnum | HackathonSponsorsScalarFieldEnum[]
  }


  /**
   * HackathonSponsors findMany
   */
  export type HackathonSponsorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonSponsors
     */
    select?: HackathonSponsorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonSponsorsInclude<ExtArgs> | null
    /**
     * Filter, which HackathonSponsors to fetch.
     */
    where?: HackathonSponsorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HackathonSponsors to fetch.
     */
    orderBy?: HackathonSponsorsOrderByWithRelationInput | HackathonSponsorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HackathonSponsors.
     */
    cursor?: HackathonSponsorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HackathonSponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HackathonSponsors.
     */
    skip?: number
    distinct?: HackathonSponsorsScalarFieldEnum | HackathonSponsorsScalarFieldEnum[]
  }


  /**
   * HackathonSponsors create
   */
  export type HackathonSponsorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonSponsors
     */
    select?: HackathonSponsorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonSponsorsInclude<ExtArgs> | null
    /**
     * The data needed to create a HackathonSponsors.
     */
    data: XOR<HackathonSponsorsCreateInput, HackathonSponsorsUncheckedCreateInput>
  }


  /**
   * HackathonSponsors createMany
   */
  export type HackathonSponsorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HackathonSponsors.
     */
    data: HackathonSponsorsCreateManyInput | HackathonSponsorsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * HackathonSponsors update
   */
  export type HackathonSponsorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonSponsors
     */
    select?: HackathonSponsorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonSponsorsInclude<ExtArgs> | null
    /**
     * The data needed to update a HackathonSponsors.
     */
    data: XOR<HackathonSponsorsUpdateInput, HackathonSponsorsUncheckedUpdateInput>
    /**
     * Choose, which HackathonSponsors to update.
     */
    where: HackathonSponsorsWhereUniqueInput
  }


  /**
   * HackathonSponsors updateMany
   */
  export type HackathonSponsorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HackathonSponsors.
     */
    data: XOR<HackathonSponsorsUpdateManyMutationInput, HackathonSponsorsUncheckedUpdateManyInput>
    /**
     * Filter which HackathonSponsors to update
     */
    where?: HackathonSponsorsWhereInput
  }


  /**
   * HackathonSponsors upsert
   */
  export type HackathonSponsorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonSponsors
     */
    select?: HackathonSponsorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonSponsorsInclude<ExtArgs> | null
    /**
     * The filter to search for the HackathonSponsors to update in case it exists.
     */
    where: HackathonSponsorsWhereUniqueInput
    /**
     * In case the HackathonSponsors found by the `where` argument doesn't exist, create a new HackathonSponsors with this data.
     */
    create: XOR<HackathonSponsorsCreateInput, HackathonSponsorsUncheckedCreateInput>
    /**
     * In case the HackathonSponsors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HackathonSponsorsUpdateInput, HackathonSponsorsUncheckedUpdateInput>
  }


  /**
   * HackathonSponsors delete
   */
  export type HackathonSponsorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonSponsors
     */
    select?: HackathonSponsorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonSponsorsInclude<ExtArgs> | null
    /**
     * Filter which HackathonSponsors to delete.
     */
    where: HackathonSponsorsWhereUniqueInput
  }


  /**
   * HackathonSponsors deleteMany
   */
  export type HackathonSponsorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HackathonSponsors to delete
     */
    where?: HackathonSponsorsWhereInput
  }


  /**
   * HackathonSponsors without action
   */
  export type HackathonSponsorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HackathonSponsors
     */
    select?: HackathonSponsorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HackathonSponsorsInclude<ExtArgs> | null
  }



  /**
   * Model teamMembers
   */

  export type AggregateTeamMembers = {
    _count: TeamMembersCountAggregateOutputType | null
    _min: TeamMembersMinAggregateOutputType | null
    _max: TeamMembersMaxAggregateOutputType | null
  }

  export type TeamMembersMinAggregateOutputType = {
    id: string | null
    teamId: string | null
    userId: string | null
  }

  export type TeamMembersMaxAggregateOutputType = {
    id: string | null
    teamId: string | null
    userId: string | null
  }

  export type TeamMembersCountAggregateOutputType = {
    id: number
    teamId: number
    userId: number
    _all: number
  }


  export type TeamMembersMinAggregateInputType = {
    id?: true
    teamId?: true
    userId?: true
  }

  export type TeamMembersMaxAggregateInputType = {
    id?: true
    teamId?: true
    userId?: true
  }

  export type TeamMembersCountAggregateInputType = {
    id?: true
    teamId?: true
    userId?: true
    _all?: true
  }

  export type TeamMembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teamMembers to aggregate.
     */
    where?: teamMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teamMembers to fetch.
     */
    orderBy?: teamMembersOrderByWithRelationInput | teamMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teamMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teamMembers
    **/
    _count?: true | TeamMembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMembersMaxAggregateInputType
  }

  export type GetTeamMembersAggregateType<T extends TeamMembersAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamMembers[P]>
      : GetScalarType<T[P], AggregateTeamMembers[P]>
  }




  export type teamMembersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamMembersWhereInput
    orderBy?: teamMembersOrderByWithAggregationInput | teamMembersOrderByWithAggregationInput[]
    by: TeamMembersScalarFieldEnum[] | TeamMembersScalarFieldEnum
    having?: teamMembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamMembersCountAggregateInputType | true
    _min?: TeamMembersMinAggregateInputType
    _max?: TeamMembersMaxAggregateInputType
  }

  export type TeamMembersGroupByOutputType = {
    id: string
    teamId: string
    userId: string
    _count: TeamMembersCountAggregateOutputType | null
    _min: TeamMembersMinAggregateOutputType | null
    _max: TeamMembersMaxAggregateOutputType | null
  }

  type GetTeamMembersGroupByPayload<T extends teamMembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamMembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamMembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamMembersGroupByOutputType[P]>
            : GetScalarType<T[P], TeamMembersGroupByOutputType[P]>
        }
      >
    >


  export type teamMembersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    userId?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMembers"]>

  export type teamMembersSelectScalar = {
    id?: boolean
    teamId?: boolean
    userId?: boolean
  }

  export type teamMembersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $teamMembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "teamMembers"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamId: string
      userId: string
    }, ExtArgs["result"]["teamMembers"]>
    composites: {}
  }


  type teamMembersGetPayload<S extends boolean | null | undefined | teamMembersDefaultArgs> = $Result.GetResult<Prisma.$teamMembersPayload, S>

  type teamMembersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<teamMembersFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TeamMembersCountAggregateInputType | true
    }

  export interface teamMembersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['teamMembers'], meta: { name: 'teamMembers' } }
    /**
     * Find zero or one TeamMembers that matches the filter.
     * @param {teamMembersFindUniqueArgs} args - Arguments to find a TeamMembers
     * @example
     * // Get one TeamMembers
     * const teamMembers = await prisma.teamMembers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends teamMembersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, teamMembersFindUniqueArgs<ExtArgs>>
    ): Prisma__teamMembersClient<$Result.GetResult<Prisma.$teamMembersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TeamMembers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {teamMembersFindUniqueOrThrowArgs} args - Arguments to find a TeamMembers
     * @example
     * // Get one TeamMembers
     * const teamMembers = await prisma.teamMembers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends teamMembersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teamMembersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__teamMembersClient<$Result.GetResult<Prisma.$teamMembersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamMembersFindFirstArgs} args - Arguments to find a TeamMembers
     * @example
     * // Get one TeamMembers
     * const teamMembers = await prisma.teamMembers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends teamMembersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, teamMembersFindFirstArgs<ExtArgs>>
    ): Prisma__teamMembersClient<$Result.GetResult<Prisma.$teamMembersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TeamMembers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamMembersFindFirstOrThrowArgs} args - Arguments to find a TeamMembers
     * @example
     * // Get one TeamMembers
     * const teamMembers = await prisma.teamMembers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends teamMembersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teamMembersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__teamMembersClient<$Result.GetResult<Prisma.$teamMembersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamMembersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamMembers
     * const teamMembers = await prisma.teamMembers.findMany()
     * 
     * // Get first 10 TeamMembers
     * const teamMembers = await prisma.teamMembers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamMembersWithIdOnly = await prisma.teamMembers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends teamMembersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamMembersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamMembersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TeamMembers.
     * @param {teamMembersCreateArgs} args - Arguments to create a TeamMembers.
     * @example
     * // Create one TeamMembers
     * const TeamMembers = await prisma.teamMembers.create({
     *   data: {
     *     // ... data to create a TeamMembers
     *   }
     * })
     * 
    **/
    create<T extends teamMembersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, teamMembersCreateArgs<ExtArgs>>
    ): Prisma__teamMembersClient<$Result.GetResult<Prisma.$teamMembersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TeamMembers.
     *     @param {teamMembersCreateManyArgs} args - Arguments to create many TeamMembers.
     *     @example
     *     // Create many TeamMembers
     *     const teamMembers = await prisma.teamMembers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends teamMembersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamMembersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TeamMembers.
     * @param {teamMembersDeleteArgs} args - Arguments to delete one TeamMembers.
     * @example
     * // Delete one TeamMembers
     * const TeamMembers = await prisma.teamMembers.delete({
     *   where: {
     *     // ... filter to delete one TeamMembers
     *   }
     * })
     * 
    **/
    delete<T extends teamMembersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, teamMembersDeleteArgs<ExtArgs>>
    ): Prisma__teamMembersClient<$Result.GetResult<Prisma.$teamMembersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TeamMembers.
     * @param {teamMembersUpdateArgs} args - Arguments to update one TeamMembers.
     * @example
     * // Update one TeamMembers
     * const teamMembers = await prisma.teamMembers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends teamMembersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, teamMembersUpdateArgs<ExtArgs>>
    ): Prisma__teamMembersClient<$Result.GetResult<Prisma.$teamMembersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TeamMembers.
     * @param {teamMembersDeleteManyArgs} args - Arguments to filter TeamMembers to delete.
     * @example
     * // Delete a few TeamMembers
     * const { count } = await prisma.teamMembers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends teamMembersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamMembersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamMembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamMembers
     * const teamMembers = await prisma.teamMembers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends teamMembersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, teamMembersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TeamMembers.
     * @param {teamMembersUpsertArgs} args - Arguments to update or create a TeamMembers.
     * @example
     * // Update or create a TeamMembers
     * const teamMembers = await prisma.teamMembers.upsert({
     *   create: {
     *     // ... data to create a TeamMembers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamMembers we want to update
     *   }
     * })
    **/
    upsert<T extends teamMembersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, teamMembersUpsertArgs<ExtArgs>>
    ): Prisma__teamMembersClient<$Result.GetResult<Prisma.$teamMembersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamMembersCountArgs} args - Arguments to filter TeamMembers to count.
     * @example
     * // Count the number of TeamMembers
     * const count = await prisma.teamMembers.count({
     *   where: {
     *     // ... the filter for the TeamMembers we want to count
     *   }
     * })
    **/
    count<T extends teamMembersCountArgs>(
      args?: Subset<T, teamMembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamMembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamMembersAggregateArgs>(args: Subset<T, TeamMembersAggregateArgs>): Prisma.PrismaPromise<GetTeamMembersAggregateType<T>>

    /**
     * Group by TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamMembersGroupByArgs} args - Group by arguments.
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
      T extends teamMembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teamMembersGroupByArgs['orderBy'] }
        : { orderBy?: teamMembersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, teamMembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the teamMembers model
   */
  readonly fields: teamMembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teamMembers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teamMembersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the teamMembers model
   */ 
  interface teamMembersFieldRefs {
    readonly id: FieldRef<"teamMembers", 'String'>
    readonly teamId: FieldRef<"teamMembers", 'String'>
    readonly userId: FieldRef<"teamMembers", 'String'>
  }
    

  // Custom InputTypes

  /**
   * teamMembers findUnique
   */
  export type teamMembersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teamMembers
     */
    select?: teamMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamMembersInclude<ExtArgs> | null
    /**
     * Filter, which teamMembers to fetch.
     */
    where: teamMembersWhereUniqueInput
  }


  /**
   * teamMembers findUniqueOrThrow
   */
  export type teamMembersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teamMembers
     */
    select?: teamMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamMembersInclude<ExtArgs> | null
    /**
     * Filter, which teamMembers to fetch.
     */
    where: teamMembersWhereUniqueInput
  }


  /**
   * teamMembers findFirst
   */
  export type teamMembersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teamMembers
     */
    select?: teamMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamMembersInclude<ExtArgs> | null
    /**
     * Filter, which teamMembers to fetch.
     */
    where?: teamMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teamMembers to fetch.
     */
    orderBy?: teamMembersOrderByWithRelationInput | teamMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teamMembers.
     */
    cursor?: teamMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teamMembers.
     */
    distinct?: TeamMembersScalarFieldEnum | TeamMembersScalarFieldEnum[]
  }


  /**
   * teamMembers findFirstOrThrow
   */
  export type teamMembersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teamMembers
     */
    select?: teamMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamMembersInclude<ExtArgs> | null
    /**
     * Filter, which teamMembers to fetch.
     */
    where?: teamMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teamMembers to fetch.
     */
    orderBy?: teamMembersOrderByWithRelationInput | teamMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teamMembers.
     */
    cursor?: teamMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teamMembers.
     */
    distinct?: TeamMembersScalarFieldEnum | TeamMembersScalarFieldEnum[]
  }


  /**
   * teamMembers findMany
   */
  export type teamMembersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teamMembers
     */
    select?: teamMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamMembersInclude<ExtArgs> | null
    /**
     * Filter, which teamMembers to fetch.
     */
    where?: teamMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teamMembers to fetch.
     */
    orderBy?: teamMembersOrderByWithRelationInput | teamMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teamMembers.
     */
    cursor?: teamMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teamMembers.
     */
    skip?: number
    distinct?: TeamMembersScalarFieldEnum | TeamMembersScalarFieldEnum[]
  }


  /**
   * teamMembers create
   */
  export type teamMembersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teamMembers
     */
    select?: teamMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamMembersInclude<ExtArgs> | null
    /**
     * The data needed to create a teamMembers.
     */
    data: XOR<teamMembersCreateInput, teamMembersUncheckedCreateInput>
  }


  /**
   * teamMembers createMany
   */
  export type teamMembersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teamMembers.
     */
    data: teamMembersCreateManyInput | teamMembersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * teamMembers update
   */
  export type teamMembersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teamMembers
     */
    select?: teamMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamMembersInclude<ExtArgs> | null
    /**
     * The data needed to update a teamMembers.
     */
    data: XOR<teamMembersUpdateInput, teamMembersUncheckedUpdateInput>
    /**
     * Choose, which teamMembers to update.
     */
    where: teamMembersWhereUniqueInput
  }


  /**
   * teamMembers updateMany
   */
  export type teamMembersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teamMembers.
     */
    data: XOR<teamMembersUpdateManyMutationInput, teamMembersUncheckedUpdateManyInput>
    /**
     * Filter which teamMembers to update
     */
    where?: teamMembersWhereInput
  }


  /**
   * teamMembers upsert
   */
  export type teamMembersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teamMembers
     */
    select?: teamMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamMembersInclude<ExtArgs> | null
    /**
     * The filter to search for the teamMembers to update in case it exists.
     */
    where: teamMembersWhereUniqueInput
    /**
     * In case the teamMembers found by the `where` argument doesn't exist, create a new teamMembers with this data.
     */
    create: XOR<teamMembersCreateInput, teamMembersUncheckedCreateInput>
    /**
     * In case the teamMembers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teamMembersUpdateInput, teamMembersUncheckedUpdateInput>
  }


  /**
   * teamMembers delete
   */
  export type teamMembersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teamMembers
     */
    select?: teamMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamMembersInclude<ExtArgs> | null
    /**
     * Filter which teamMembers to delete.
     */
    where: teamMembersWhereUniqueInput
  }


  /**
   * teamMembers deleteMany
   */
  export type teamMembersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teamMembers to delete
     */
    where?: teamMembersWhereInput
  }


  /**
   * teamMembers without action
   */
  export type teamMembersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teamMembers
     */
    select?: teamMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamMembersInclude<ExtArgs> | null
  }



  /**
   * Model teamRequest
   */

  export type AggregateTeamRequest = {
    _count: TeamRequestCountAggregateOutputType | null
    _min: TeamRequestMinAggregateOutputType | null
    _max: TeamRequestMaxAggregateOutputType | null
  }

  export type TeamRequestMinAggregateOutputType = {
    id: string | null
    teamId: string | null
    teamName: string | null
    userSender: string | null
    userSenderName: string | null
    userReceiver: string | null
    state: boolean | null
  }

  export type TeamRequestMaxAggregateOutputType = {
    id: string | null
    teamId: string | null
    teamName: string | null
    userSender: string | null
    userSenderName: string | null
    userReceiver: string | null
    state: boolean | null
  }

  export type TeamRequestCountAggregateOutputType = {
    id: number
    teamId: number
    teamName: number
    userSender: number
    userSenderName: number
    userReceiver: number
    state: number
    _all: number
  }


  export type TeamRequestMinAggregateInputType = {
    id?: true
    teamId?: true
    teamName?: true
    userSender?: true
    userSenderName?: true
    userReceiver?: true
    state?: true
  }

  export type TeamRequestMaxAggregateInputType = {
    id?: true
    teamId?: true
    teamName?: true
    userSender?: true
    userSenderName?: true
    userReceiver?: true
    state?: true
  }

  export type TeamRequestCountAggregateInputType = {
    id?: true
    teamId?: true
    teamName?: true
    userSender?: true
    userSenderName?: true
    userReceiver?: true
    state?: true
    _all?: true
  }

  export type TeamRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teamRequest to aggregate.
     */
    where?: teamRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teamRequests to fetch.
     */
    orderBy?: teamRequestOrderByWithRelationInput | teamRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teamRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teamRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teamRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teamRequests
    **/
    _count?: true | TeamRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamRequestMaxAggregateInputType
  }

  export type GetTeamRequestAggregateType<T extends TeamRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamRequest[P]>
      : GetScalarType<T[P], AggregateTeamRequest[P]>
  }




  export type teamRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamRequestWhereInput
    orderBy?: teamRequestOrderByWithAggregationInput | teamRequestOrderByWithAggregationInput[]
    by: TeamRequestScalarFieldEnum[] | TeamRequestScalarFieldEnum
    having?: teamRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamRequestCountAggregateInputType | true
    _min?: TeamRequestMinAggregateInputType
    _max?: TeamRequestMaxAggregateInputType
  }

  export type TeamRequestGroupByOutputType = {
    id: string
    teamId: string
    teamName: string
    userSender: string
    userSenderName: string
    userReceiver: string | null
    state: boolean
    _count: TeamRequestCountAggregateOutputType | null
    _min: TeamRequestMinAggregateOutputType | null
    _max: TeamRequestMaxAggregateOutputType | null
  }

  type GetTeamRequestGroupByPayload<T extends teamRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamRequestGroupByOutputType[P]>
            : GetScalarType<T[P], TeamRequestGroupByOutputType[P]>
        }
      >
    >


  export type teamRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    teamName?: boolean
    userSender?: boolean
    userSenderName?: boolean
    userReceiver?: boolean
    state?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamRequest"]>

  export type teamRequestSelectScalar = {
    id?: boolean
    teamId?: boolean
    teamName?: boolean
    userSender?: boolean
    userSenderName?: boolean
    userReceiver?: boolean
    state?: boolean
  }

  export type teamRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $teamRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "teamRequest"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamId: string
      teamName: string
      userSender: string
      userSenderName: string
      userReceiver: string | null
      state: boolean
    }, ExtArgs["result"]["teamRequest"]>
    composites: {}
  }


  type teamRequestGetPayload<S extends boolean | null | undefined | teamRequestDefaultArgs> = $Result.GetResult<Prisma.$teamRequestPayload, S>

  type teamRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<teamRequestFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TeamRequestCountAggregateInputType | true
    }

  export interface teamRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['teamRequest'], meta: { name: 'teamRequest' } }
    /**
     * Find zero or one TeamRequest that matches the filter.
     * @param {teamRequestFindUniqueArgs} args - Arguments to find a TeamRequest
     * @example
     * // Get one TeamRequest
     * const teamRequest = await prisma.teamRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends teamRequestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, teamRequestFindUniqueArgs<ExtArgs>>
    ): Prisma__teamRequestClient<$Result.GetResult<Prisma.$teamRequestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TeamRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {teamRequestFindUniqueOrThrowArgs} args - Arguments to find a TeamRequest
     * @example
     * // Get one TeamRequest
     * const teamRequest = await prisma.teamRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends teamRequestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teamRequestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__teamRequestClient<$Result.GetResult<Prisma.$teamRequestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TeamRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamRequestFindFirstArgs} args - Arguments to find a TeamRequest
     * @example
     * // Get one TeamRequest
     * const teamRequest = await prisma.teamRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends teamRequestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, teamRequestFindFirstArgs<ExtArgs>>
    ): Prisma__teamRequestClient<$Result.GetResult<Prisma.$teamRequestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TeamRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamRequestFindFirstOrThrowArgs} args - Arguments to find a TeamRequest
     * @example
     * // Get one TeamRequest
     * const teamRequest = await prisma.teamRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends teamRequestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teamRequestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__teamRequestClient<$Result.GetResult<Prisma.$teamRequestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TeamRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamRequests
     * const teamRequests = await prisma.teamRequest.findMany()
     * 
     * // Get first 10 TeamRequests
     * const teamRequests = await prisma.teamRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamRequestWithIdOnly = await prisma.teamRequest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends teamRequestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamRequestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamRequestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TeamRequest.
     * @param {teamRequestCreateArgs} args - Arguments to create a TeamRequest.
     * @example
     * // Create one TeamRequest
     * const TeamRequest = await prisma.teamRequest.create({
     *   data: {
     *     // ... data to create a TeamRequest
     *   }
     * })
     * 
    **/
    create<T extends teamRequestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, teamRequestCreateArgs<ExtArgs>>
    ): Prisma__teamRequestClient<$Result.GetResult<Prisma.$teamRequestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TeamRequests.
     *     @param {teamRequestCreateManyArgs} args - Arguments to create many TeamRequests.
     *     @example
     *     // Create many TeamRequests
     *     const teamRequest = await prisma.teamRequest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends teamRequestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamRequestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TeamRequest.
     * @param {teamRequestDeleteArgs} args - Arguments to delete one TeamRequest.
     * @example
     * // Delete one TeamRequest
     * const TeamRequest = await prisma.teamRequest.delete({
     *   where: {
     *     // ... filter to delete one TeamRequest
     *   }
     * })
     * 
    **/
    delete<T extends teamRequestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, teamRequestDeleteArgs<ExtArgs>>
    ): Prisma__teamRequestClient<$Result.GetResult<Prisma.$teamRequestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TeamRequest.
     * @param {teamRequestUpdateArgs} args - Arguments to update one TeamRequest.
     * @example
     * // Update one TeamRequest
     * const teamRequest = await prisma.teamRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends teamRequestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, teamRequestUpdateArgs<ExtArgs>>
    ): Prisma__teamRequestClient<$Result.GetResult<Prisma.$teamRequestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TeamRequests.
     * @param {teamRequestDeleteManyArgs} args - Arguments to filter TeamRequests to delete.
     * @example
     * // Delete a few TeamRequests
     * const { count } = await prisma.teamRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends teamRequestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamRequestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamRequests
     * const teamRequest = await prisma.teamRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends teamRequestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, teamRequestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TeamRequest.
     * @param {teamRequestUpsertArgs} args - Arguments to update or create a TeamRequest.
     * @example
     * // Update or create a TeamRequest
     * const teamRequest = await prisma.teamRequest.upsert({
     *   create: {
     *     // ... data to create a TeamRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamRequest we want to update
     *   }
     * })
    **/
    upsert<T extends teamRequestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, teamRequestUpsertArgs<ExtArgs>>
    ): Prisma__teamRequestClient<$Result.GetResult<Prisma.$teamRequestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TeamRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamRequestCountArgs} args - Arguments to filter TeamRequests to count.
     * @example
     * // Count the number of TeamRequests
     * const count = await prisma.teamRequest.count({
     *   where: {
     *     // ... the filter for the TeamRequests we want to count
     *   }
     * })
    **/
    count<T extends teamRequestCountArgs>(
      args?: Subset<T, teamRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamRequestAggregateArgs>(args: Subset<T, TeamRequestAggregateArgs>): Prisma.PrismaPromise<GetTeamRequestAggregateType<T>>

    /**
     * Group by TeamRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamRequestGroupByArgs} args - Group by arguments.
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
      T extends teamRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teamRequestGroupByArgs['orderBy'] }
        : { orderBy?: teamRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, teamRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the teamRequest model
   */
  readonly fields: teamRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teamRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teamRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
   * Fields of the teamRequest model
   */ 
  interface teamRequestFieldRefs {
    readonly id: FieldRef<"teamRequest", 'String'>
    readonly teamId: FieldRef<"teamRequest", 'String'>
    readonly teamName: FieldRef<"teamRequest", 'String'>
    readonly userSender: FieldRef<"teamRequest", 'String'>
    readonly userSenderName: FieldRef<"teamRequest", 'String'>
    readonly userReceiver: FieldRef<"teamRequest", 'String'>
    readonly state: FieldRef<"teamRequest", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * teamRequest findUnique
   */
  export type teamRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teamRequest
     */
    select?: teamRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamRequestInclude<ExtArgs> | null
    /**
     * Filter, which teamRequest to fetch.
     */
    where: teamRequestWhereUniqueInput
  }


  /**
   * teamRequest findUniqueOrThrow
   */
  export type teamRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teamRequest
     */
    select?: teamRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamRequestInclude<ExtArgs> | null
    /**
     * Filter, which teamRequest to fetch.
     */
    where: teamRequestWhereUniqueInput
  }


  /**
   * teamRequest findFirst
   */
  export type teamRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teamRequest
     */
    select?: teamRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamRequestInclude<ExtArgs> | null
    /**
     * Filter, which teamRequest to fetch.
     */
    where?: teamRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teamRequests to fetch.
     */
    orderBy?: teamRequestOrderByWithRelationInput | teamRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teamRequests.
     */
    cursor?: teamRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teamRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teamRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teamRequests.
     */
    distinct?: TeamRequestScalarFieldEnum | TeamRequestScalarFieldEnum[]
  }


  /**
   * teamRequest findFirstOrThrow
   */
  export type teamRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teamRequest
     */
    select?: teamRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamRequestInclude<ExtArgs> | null
    /**
     * Filter, which teamRequest to fetch.
     */
    where?: teamRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teamRequests to fetch.
     */
    orderBy?: teamRequestOrderByWithRelationInput | teamRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teamRequests.
     */
    cursor?: teamRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teamRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teamRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teamRequests.
     */
    distinct?: TeamRequestScalarFieldEnum | TeamRequestScalarFieldEnum[]
  }


  /**
   * teamRequest findMany
   */
  export type teamRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teamRequest
     */
    select?: teamRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamRequestInclude<ExtArgs> | null
    /**
     * Filter, which teamRequests to fetch.
     */
    where?: teamRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teamRequests to fetch.
     */
    orderBy?: teamRequestOrderByWithRelationInput | teamRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teamRequests.
     */
    cursor?: teamRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teamRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teamRequests.
     */
    skip?: number
    distinct?: TeamRequestScalarFieldEnum | TeamRequestScalarFieldEnum[]
  }


  /**
   * teamRequest create
   */
  export type teamRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teamRequest
     */
    select?: teamRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a teamRequest.
     */
    data: XOR<teamRequestCreateInput, teamRequestUncheckedCreateInput>
  }


  /**
   * teamRequest createMany
   */
  export type teamRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teamRequests.
     */
    data: teamRequestCreateManyInput | teamRequestCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * teamRequest update
   */
  export type teamRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teamRequest
     */
    select?: teamRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a teamRequest.
     */
    data: XOR<teamRequestUpdateInput, teamRequestUncheckedUpdateInput>
    /**
     * Choose, which teamRequest to update.
     */
    where: teamRequestWhereUniqueInput
  }


  /**
   * teamRequest updateMany
   */
  export type teamRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teamRequests.
     */
    data: XOR<teamRequestUpdateManyMutationInput, teamRequestUncheckedUpdateManyInput>
    /**
     * Filter which teamRequests to update
     */
    where?: teamRequestWhereInput
  }


  /**
   * teamRequest upsert
   */
  export type teamRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teamRequest
     */
    select?: teamRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the teamRequest to update in case it exists.
     */
    where: teamRequestWhereUniqueInput
    /**
     * In case the teamRequest found by the `where` argument doesn't exist, create a new teamRequest with this data.
     */
    create: XOR<teamRequestCreateInput, teamRequestUncheckedCreateInput>
    /**
     * In case the teamRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teamRequestUpdateInput, teamRequestUncheckedUpdateInput>
  }


  /**
   * teamRequest delete
   */
  export type teamRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teamRequest
     */
    select?: teamRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamRequestInclude<ExtArgs> | null
    /**
     * Filter which teamRequest to delete.
     */
    where: teamRequestWhereUniqueInput
  }


  /**
   * teamRequest deleteMany
   */
  export type teamRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teamRequests to delete
     */
    where?: teamRequestWhereInput
  }


  /**
   * teamRequest without action
   */
  export type teamRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teamRequest
     */
    select?: teamRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamRequestInclude<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    refresh_token_expires_in: 'refresh_token_expires_in',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    gamertag: 'gamertag',
    role: 'role',
    emailVerified: 'emailVerified',
    image: 'image',
    isVerified: 'isVerified',
    lightningAddress: 'lightningAddress',
    publicBio: 'publicBio',
    publicStaticCharge: 'publicStaticCharge',
    social: 'social',
    balance: 'balance',
    remainingAmountLimits: 'remainingAmountLimits'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    description: 'description',
    teamAvatar: 'teamAvatar',
    creatorId: 'creatorId'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const HackathonScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    description: 'description',
    benefits: 'benefits',
    rules: 'rules',
    judgingCriteria: 'judgingCriteria',
    firstPlacePrize: 'firstPlacePrize',
    secondPlacePrize: 'secondPlacePrize',
    thirdPlacePrize: 'thirdPlacePrize',
    published: 'published',
    creatorId: 'creatorId',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type HackathonScalarFieldEnum = (typeof HackathonScalarFieldEnum)[keyof typeof HackathonScalarFieldEnum]


  export const HackathonRegistrationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    hackathonId: 'hackathonId',
    teamId: 'teamId'
  };

  export type HackathonRegistrationScalarFieldEnum = (typeof HackathonRegistrationScalarFieldEnum)[keyof typeof HackathonRegistrationScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    description: 'description',
    loomLink: 'loomLink',
    pitchLink: 'pitchLink',
    projectResourceLink: 'projectResourceLink',
    comments: 'comments',
    hackathonId: 'hackathonId',
    teamId: 'teamId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    company: 'company',
    comments: 'comments'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const SponsorsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    company: 'company'
  };

  export type SponsorsScalarFieldEnum = (typeof SponsorsScalarFieldEnum)[keyof typeof SponsorsScalarFieldEnum]


  export const JudgeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    judgeGamertag: 'judgeGamertag',
    email: 'email',
    judgeImage: 'judgeImage',
    hackathonId: 'hackathonId'
  };

  export type JudgeScalarFieldEnum = (typeof JudgeScalarFieldEnum)[keyof typeof JudgeScalarFieldEnum]


  export const JudgeassessmentsScalarFieldEnum: {
    id: 'id',
    impact: 'impact',
    feasability: 'feasability',
    user_experience: 'user_experience',
    scalability: 'scalability',
    innovate: 'innovate',
    pitch: 'pitch',
    overall_score: 'overall_score',
    hackathonId: 'hackathonId',
    projectId: 'projectId',
    judgeId: 'judgeId'
  };

  export type JudgeassessmentsScalarFieldEnum = (typeof JudgeassessmentsScalarFieldEnum)[keyof typeof JudgeassessmentsScalarFieldEnum]


  export const HackathonSponsorsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image',
    hackathonId: 'hackathonId'
  };

  export type HackathonSponsorsScalarFieldEnum = (typeof HackathonSponsorsScalarFieldEnum)[keyof typeof HackathonSponsorsScalarFieldEnum]


  export const TeamMembersScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    userId: 'userId'
  };

  export type TeamMembersScalarFieldEnum = (typeof TeamMembersScalarFieldEnum)[keyof typeof TeamMembersScalarFieldEnum]


  export const TeamRequestScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    teamName: 'teamName',
    userSender: 'userSender',
    userSenderName: 'userSenderName',
    userReceiver: 'userReceiver',
    state: 'state'
  };

  export type TeamRequestScalarFieldEnum = (typeof TeamRequestScalarFieldEnum)[keyof typeof TeamRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableWithAggregatesFilter<"Account"> | number | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    gamertag?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    emailVerified?: BoolNullableFilter<"User"> | boolean | null
    image?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolNullableFilter<"User"> | boolean | null
    lightningAddress?: StringNullableFilter<"User"> | string | null
    publicBio?: StringNullableFilter<"User"> | string | null
    publicStaticCharge?: StringNullableFilter<"User"> | string | null
    social?: JsonNullableFilter<"User">
    balance?: StringNullableFilter<"User"> | string | null
    remainingAmountLimits?: JsonNullableFilter<"User">
    hackathons?: HackathonListRelationFilter
    teams?: TeamListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    judge?: JudgeListRelationFilter
    teamMembers?: TeamMembersListRelationFilter
    teamRequest?: TeamRequestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    gamertag?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    isVerified?: SortOrderInput | SortOrder
    lightningAddress?: SortOrderInput | SortOrder
    publicBio?: SortOrderInput | SortOrder
    publicStaticCharge?: SortOrderInput | SortOrder
    social?: SortOrderInput | SortOrder
    balance?: SortOrderInput | SortOrder
    remainingAmountLimits?: SortOrderInput | SortOrder
    hackathons?: HackathonOrderByRelationAggregateInput
    teams?: TeamOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    judge?: JudgeOrderByRelationAggregateInput
    teamMembers?: teamMembersOrderByRelationAggregateInput
    teamRequest?: teamRequestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    id_gamertag_email_image?: UserIdGamertagEmailImageCompoundUniqueInput
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    gamertag?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    emailVerified?: BoolNullableFilter<"User"> | boolean | null
    image?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolNullableFilter<"User"> | boolean | null
    lightningAddress?: StringNullableFilter<"User"> | string | null
    publicBio?: StringNullableFilter<"User"> | string | null
    publicStaticCharge?: StringNullableFilter<"User"> | string | null
    social?: JsonNullableFilter<"User">
    balance?: StringNullableFilter<"User"> | string | null
    remainingAmountLimits?: JsonNullableFilter<"User">
    hackathons?: HackathonListRelationFilter
    teams?: TeamListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    judge?: JudgeListRelationFilter
    teamMembers?: TeamMembersListRelationFilter
    teamRequest?: TeamRequestListRelationFilter
  }, "id" | "email" | "id_gamertag_email_image">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    gamertag?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    isVerified?: SortOrderInput | SortOrder
    lightningAddress?: SortOrderInput | SortOrder
    publicBio?: SortOrderInput | SortOrder
    publicStaticCharge?: SortOrderInput | SortOrder
    social?: SortOrderInput | SortOrder
    balance?: SortOrderInput | SortOrder
    remainingAmountLimits?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    gamertag?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    emailVerified?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    isVerified?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    lightningAddress?: StringNullableWithAggregatesFilter<"User"> | string | null
    publicBio?: StringNullableWithAggregatesFilter<"User"> | string | null
    publicStaticCharge?: StringNullableWithAggregatesFilter<"User"> | string | null
    social?: JsonNullableWithAggregatesFilter<"User">
    balance?: StringNullableWithAggregatesFilter<"User"> | string | null
    remainingAmountLimits?: JsonNullableWithAggregatesFilter<"User">
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    name?: StringFilter<"Team"> | string
    description?: StringFilter<"Team"> | string
    teamAvatar?: StringFilter<"Team"> | string
    creatorId?: StringFilter<"Team"> | string
    projects?: ProjectListRelationFilter
    registrations?: HackathonRegistrationListRelationFilter
    creator?: XOR<UserRelationFilter, UserWhereInput>
    teamMembers?: TeamMembersListRelationFilter
    teamRequest?: TeamRequestListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    teamAvatar?: SortOrder
    creatorId?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
    registrations?: HackathonRegistrationOrderByRelationAggregateInput
    creator?: UserOrderByWithRelationInput
    teamMembers?: teamMembersOrderByRelationAggregateInput
    teamRequest?: teamRequestOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    name?: StringFilter<"Team"> | string
    description?: StringFilter<"Team"> | string
    teamAvatar?: StringFilter<"Team"> | string
    creatorId?: StringFilter<"Team"> | string
    projects?: ProjectListRelationFilter
    registrations?: HackathonRegistrationListRelationFilter
    creator?: XOR<UserRelationFilter, UserWhereInput>
    teamMembers?: TeamMembersListRelationFilter
    teamRequest?: TeamRequestListRelationFilter
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    teamAvatar?: SortOrder
    creatorId?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    name?: StringWithAggregatesFilter<"Team"> | string
    description?: StringWithAggregatesFilter<"Team"> | string
    teamAvatar?: StringWithAggregatesFilter<"Team"> | string
    creatorId?: StringWithAggregatesFilter<"Team"> | string
  }

  export type HackathonWhereInput = {
    AND?: HackathonWhereInput | HackathonWhereInput[]
    OR?: HackathonWhereInput[]
    NOT?: HackathonWhereInput | HackathonWhereInput[]
    id?: StringFilter<"Hackathon"> | string
    createdAt?: DateTimeFilter<"Hackathon"> | Date | string
    updatedAt?: DateTimeFilter<"Hackathon"> | Date | string
    title?: StringFilter<"Hackathon"> | string
    description?: StringFilter<"Hackathon"> | string
    benefits?: StringFilter<"Hackathon"> | string
    rules?: StringFilter<"Hackathon"> | string
    judgingCriteria?: StringFilter<"Hackathon"> | string
    firstPlacePrize?: StringFilter<"Hackathon"> | string
    secondPlacePrize?: StringFilter<"Hackathon"> | string
    thirdPlacePrize?: StringFilter<"Hackathon"> | string
    published?: BoolFilter<"Hackathon"> | boolean
    creatorId?: StringFilter<"Hackathon"> | string
    startDate?: StringFilter<"Hackathon"> | string
    endDate?: StringFilter<"Hackathon"> | string
    projects?: ProjectListRelationFilter
    registrations?: HackathonRegistrationListRelationFilter
    judge?: JudgeListRelationFilter
    creator?: XOR<UserRelationFilter, UserWhereInput>
    judgeassessments?: JudgeassessmentsListRelationFilter
    hackathonSponsors?: HackathonSponsorsListRelationFilter
    hackathonSponsors?: HackathonSponsorsListRelationFilter
  }

  export type HackathonOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    benefits?: SortOrder
    rules?: SortOrder
    judgingCriteria?: SortOrder
    firstPlacePrize?: SortOrder
    secondPlacePrize?: SortOrder
    thirdPlacePrize?: SortOrder
    published?: SortOrder
    creatorId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
    registrations?: HackathonRegistrationOrderByRelationAggregateInput
    judge?: JudgeOrderByRelationAggregateInput
    creator?: UserOrderByWithRelationInput
    judgeassessments?: JudgeassessmentsOrderByRelationAggregateInput
    hackathonSponsors?: HackathonSponsorsOrderByRelationAggregateInput
    hackathonSponsors?: HackathonSponsorsOrderByRelationAggregateInput
  }

  export type HackathonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HackathonWhereInput | HackathonWhereInput[]
    OR?: HackathonWhereInput[]
    NOT?: HackathonWhereInput | HackathonWhereInput[]
    createdAt?: DateTimeFilter<"Hackathon"> | Date | string
    updatedAt?: DateTimeFilter<"Hackathon"> | Date | string
    title?: StringFilter<"Hackathon"> | string
    description?: StringFilter<"Hackathon"> | string
    benefits?: StringFilter<"Hackathon"> | string
    rules?: StringFilter<"Hackathon"> | string
    judgingCriteria?: StringFilter<"Hackathon"> | string
    firstPlacePrize?: StringFilter<"Hackathon"> | string
    secondPlacePrize?: StringFilter<"Hackathon"> | string
    thirdPlacePrize?: StringFilter<"Hackathon"> | string
    published?: BoolFilter<"Hackathon"> | boolean
    creatorId?: StringFilter<"Hackathon"> | string
    startDate?: StringFilter<"Hackathon"> | string
    endDate?: StringFilter<"Hackathon"> | string
    projects?: ProjectListRelationFilter
    registrations?: HackathonRegistrationListRelationFilter
    judge?: JudgeListRelationFilter
    creator?: XOR<UserRelationFilter, UserWhereInput>
    judgeassessments?: JudgeassessmentsListRelationFilter
    hackathonSponsors?: HackathonSponsorsListRelationFilter
    hackathonSponsors?: HackathonSponsorsListRelationFilter
  }, "id">

  export type HackathonOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    benefits?: SortOrder
    rules?: SortOrder
    judgingCriteria?: SortOrder
    firstPlacePrize?: SortOrder
    secondPlacePrize?: SortOrder
    thirdPlacePrize?: SortOrder
    published?: SortOrder
    creatorId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    _count?: HackathonCountOrderByAggregateInput
    _max?: HackathonMaxOrderByAggregateInput
    _min?: HackathonMinOrderByAggregateInput
  }

  export type HackathonScalarWhereWithAggregatesInput = {
    AND?: HackathonScalarWhereWithAggregatesInput | HackathonScalarWhereWithAggregatesInput[]
    OR?: HackathonScalarWhereWithAggregatesInput[]
    NOT?: HackathonScalarWhereWithAggregatesInput | HackathonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hackathon"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Hackathon"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hackathon"> | Date | string
    title?: StringWithAggregatesFilter<"Hackathon"> | string
    description?: StringWithAggregatesFilter<"Hackathon"> | string
    benefits?: StringWithAggregatesFilter<"Hackathon"> | string
    rules?: StringWithAggregatesFilter<"Hackathon"> | string
    judgingCriteria?: StringWithAggregatesFilter<"Hackathon"> | string
    firstPlacePrize?: StringWithAggregatesFilter<"Hackathon"> | string
    secondPlacePrize?: StringWithAggregatesFilter<"Hackathon"> | string
    thirdPlacePrize?: StringWithAggregatesFilter<"Hackathon"> | string
    published?: BoolWithAggregatesFilter<"Hackathon"> | boolean
    creatorId?: StringWithAggregatesFilter<"Hackathon"> | string
    startDate?: StringWithAggregatesFilter<"Hackathon"> | string
    endDate?: StringWithAggregatesFilter<"Hackathon"> | string
  }

  export type HackathonRegistrationWhereInput = {
    AND?: HackathonRegistrationWhereInput | HackathonRegistrationWhereInput[]
    OR?: HackathonRegistrationWhereInput[]
    NOT?: HackathonRegistrationWhereInput | HackathonRegistrationWhereInput[]
    id?: StringFilter<"HackathonRegistration"> | string
    createdAt?: DateTimeFilter<"HackathonRegistration"> | Date | string
    updatedAt?: DateTimeFilter<"HackathonRegistration"> | Date | string
    hackathonId?: StringFilter<"HackathonRegistration"> | string
    teamId?: StringFilter<"HackathonRegistration"> | string
    hackathon?: XOR<HackathonRelationFilter, HackathonWhereInput>
    team?: XOR<TeamRelationFilter, TeamWhereInput>
  }

  export type HackathonRegistrationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hackathonId?: SortOrder
    teamId?: SortOrder
    hackathon?: HackathonOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
  }

  export type HackathonRegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teamId_hackathonId?: HackathonRegistrationTeamIdHackathonIdCompoundUniqueInput
    AND?: HackathonRegistrationWhereInput | HackathonRegistrationWhereInput[]
    OR?: HackathonRegistrationWhereInput[]
    NOT?: HackathonRegistrationWhereInput | HackathonRegistrationWhereInput[]
    createdAt?: DateTimeFilter<"HackathonRegistration"> | Date | string
    updatedAt?: DateTimeFilter<"HackathonRegistration"> | Date | string
    hackathonId?: StringFilter<"HackathonRegistration"> | string
    teamId?: StringFilter<"HackathonRegistration"> | string
    hackathon?: XOR<HackathonRelationFilter, HackathonWhereInput>
    team?: XOR<TeamRelationFilter, TeamWhereInput>
  }, "id" | "teamId_hackathonId">

  export type HackathonRegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hackathonId?: SortOrder
    teamId?: SortOrder
    _count?: HackathonRegistrationCountOrderByAggregateInput
    _max?: HackathonRegistrationMaxOrderByAggregateInput
    _min?: HackathonRegistrationMinOrderByAggregateInput
  }

  export type HackathonRegistrationScalarWhereWithAggregatesInput = {
    AND?: HackathonRegistrationScalarWhereWithAggregatesInput | HackathonRegistrationScalarWhereWithAggregatesInput[]
    OR?: HackathonRegistrationScalarWhereWithAggregatesInput[]
    NOT?: HackathonRegistrationScalarWhereWithAggregatesInput | HackathonRegistrationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HackathonRegistration"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HackathonRegistration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HackathonRegistration"> | Date | string
    hackathonId?: StringWithAggregatesFilter<"HackathonRegistration"> | string
    teamId?: StringWithAggregatesFilter<"HackathonRegistration"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    name?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    loomLink?: StringFilter<"Project"> | string
    pitchLink?: StringFilter<"Project"> | string
    projectResourceLink?: StringFilter<"Project"> | string
    comments?: StringNullableFilter<"Project"> | string | null
    hackathonId?: StringFilter<"Project"> | string
    teamId?: StringFilter<"Project"> | string
    hackathon?: XOR<HackathonRelationFilter, HackathonWhereInput>
    judgeassessments?: JudgeassessmentsListRelationFilter
    team?: XOR<TeamRelationFilter, TeamWhereInput>
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    loomLink?: SortOrder
    pitchLink?: SortOrder
    projectResourceLink?: SortOrder
    comments?: SortOrderInput | SortOrder
    hackathonId?: SortOrder
    teamId?: SortOrder
    hackathon?: HackathonOrderByWithRelationInput
    judgeassessments?: JudgeassessmentsOrderByRelationAggregateInput
    team?: TeamOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teamId_hackathonId?: ProjectTeamIdHackathonIdCompoundUniqueInput
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    name?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    loomLink?: StringFilter<"Project"> | string
    pitchLink?: StringFilter<"Project"> | string
    projectResourceLink?: StringFilter<"Project"> | string
    comments?: StringNullableFilter<"Project"> | string | null
    hackathonId?: StringFilter<"Project"> | string
    teamId?: StringFilter<"Project"> | string
    hackathon?: XOR<HackathonRelationFilter, HackathonWhereInput>
    judgeassessments?: JudgeassessmentsListRelationFilter
    team?: XOR<TeamRelationFilter, TeamWhereInput>
  }, "id" | "teamId_hackathonId">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    loomLink?: SortOrder
    pitchLink?: SortOrder
    projectResourceLink?: SortOrder
    comments?: SortOrderInput | SortOrder
    hackathonId?: SortOrder
    teamId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    loomLink?: StringWithAggregatesFilter<"Project"> | string
    pitchLink?: StringWithAggregatesFilter<"Project"> | string
    projectResourceLink?: StringWithAggregatesFilter<"Project"> | string
    comments?: StringNullableWithAggregatesFilter<"Project"> | string | null
    hackathonId?: StringWithAggregatesFilter<"Project"> | string
    teamId?: StringWithAggregatesFilter<"Project"> | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: StringFilter<"Contact"> | string
    name?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    company?: StringFilter<"Contact"> | string
    comments?: StringFilter<"Contact"> | string
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    comments?: SortOrder
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    name?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    company?: StringFilter<"Contact"> | string
    comments?: StringFilter<"Contact"> | string
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    comments?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contact"> | string
    name?: StringWithAggregatesFilter<"Contact"> | string
    email?: StringWithAggregatesFilter<"Contact"> | string
    company?: StringWithAggregatesFilter<"Contact"> | string
    comments?: StringWithAggregatesFilter<"Contact"> | string
  }

  export type SponsorsWhereInput = {
    AND?: SponsorsWhereInput | SponsorsWhereInput[]
    OR?: SponsorsWhereInput[]
    NOT?: SponsorsWhereInput | SponsorsWhereInput[]
    id?: StringFilter<"Sponsors"> | string
    name?: StringFilter<"Sponsors"> | string
    email?: StringFilter<"Sponsors"> | string
    company?: StringFilter<"Sponsors"> | string
  }

  export type SponsorsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
  }

  export type SponsorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SponsorsWhereInput | SponsorsWhereInput[]
    OR?: SponsorsWhereInput[]
    NOT?: SponsorsWhereInput | SponsorsWhereInput[]
    name?: StringFilter<"Sponsors"> | string
    email?: StringFilter<"Sponsors"> | string
    company?: StringFilter<"Sponsors"> | string
  }, "id">

  export type SponsorsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    _count?: SponsorsCountOrderByAggregateInput
    _max?: SponsorsMaxOrderByAggregateInput
    _min?: SponsorsMinOrderByAggregateInput
  }

  export type SponsorsScalarWhereWithAggregatesInput = {
    AND?: SponsorsScalarWhereWithAggregatesInput | SponsorsScalarWhereWithAggregatesInput[]
    OR?: SponsorsScalarWhereWithAggregatesInput[]
    NOT?: SponsorsScalarWhereWithAggregatesInput | SponsorsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sponsors"> | string
    name?: StringWithAggregatesFilter<"Sponsors"> | string
    email?: StringWithAggregatesFilter<"Sponsors"> | string
    company?: StringWithAggregatesFilter<"Sponsors"> | string
  }

  export type JudgeWhereInput = {
    AND?: JudgeWhereInput | JudgeWhereInput[]
    OR?: JudgeWhereInput[]
    NOT?: JudgeWhereInput | JudgeWhereInput[]
    id?: StringFilter<"Judge"> | string
    userId?: StringFilter<"Judge"> | string
    judgeGamertag?: StringFilter<"Judge"> | string
    email?: StringFilter<"Judge"> | string
    judgeImage?: StringFilter<"Judge"> | string
    hackathonId?: StringFilter<"Judge"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    hackathon?: XOR<HackathonRelationFilter, HackathonWhereInput>
    judgeassessments?: JudgeassessmentsListRelationFilter
  }

  export type JudgeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    judgeGamertag?: SortOrder
    email?: SortOrder
    judgeImage?: SortOrder
    hackathonId?: SortOrder
    user?: UserOrderByWithRelationInput
    hackathon?: HackathonOrderByWithRelationInput
    judgeassessments?: JudgeassessmentsOrderByRelationAggregateInput
  }

  export type JudgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JudgeWhereInput | JudgeWhereInput[]
    OR?: JudgeWhereInput[]
    NOT?: JudgeWhereInput | JudgeWhereInput[]
    userId?: StringFilter<"Judge"> | string
    judgeGamertag?: StringFilter<"Judge"> | string
    email?: StringFilter<"Judge"> | string
    judgeImage?: StringFilter<"Judge"> | string
    hackathonId?: StringFilter<"Judge"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    hackathon?: XOR<HackathonRelationFilter, HackathonWhereInput>
    judgeassessments?: JudgeassessmentsListRelationFilter
  }, "id">

  export type JudgeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    judgeGamertag?: SortOrder
    email?: SortOrder
    judgeImage?: SortOrder
    hackathonId?: SortOrder
    _count?: JudgeCountOrderByAggregateInput
    _max?: JudgeMaxOrderByAggregateInput
    _min?: JudgeMinOrderByAggregateInput
  }

  export type JudgeScalarWhereWithAggregatesInput = {
    AND?: JudgeScalarWhereWithAggregatesInput | JudgeScalarWhereWithAggregatesInput[]
    OR?: JudgeScalarWhereWithAggregatesInput[]
    NOT?: JudgeScalarWhereWithAggregatesInput | JudgeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Judge"> | string
    userId?: StringWithAggregatesFilter<"Judge"> | string
    judgeGamertag?: StringWithAggregatesFilter<"Judge"> | string
    email?: StringWithAggregatesFilter<"Judge"> | string
    judgeImage?: StringWithAggregatesFilter<"Judge"> | string
    hackathonId?: StringWithAggregatesFilter<"Judge"> | string
  }

  export type JudgeassessmentsWhereInput = {
    AND?: JudgeassessmentsWhereInput | JudgeassessmentsWhereInput[]
    OR?: JudgeassessmentsWhereInput[]
    NOT?: JudgeassessmentsWhereInput | JudgeassessmentsWhereInput[]
    id?: StringFilter<"Judgeassessments"> | string
    impact?: IntFilter<"Judgeassessments"> | number
    feasability?: IntFilter<"Judgeassessments"> | number
    user_experience?: IntFilter<"Judgeassessments"> | number
    scalability?: IntFilter<"Judgeassessments"> | number
    innovate?: IntFilter<"Judgeassessments"> | number
    pitch?: IntFilter<"Judgeassessments"> | number
    overall_score?: DecimalFilter<"Judgeassessments"> | Decimal | DecimalJsLike | number | string
    hackathonId?: StringFilter<"Judgeassessments"> | string
    projectId?: StringFilter<"Judgeassessments"> | string
    judgeId?: StringFilter<"Judgeassessments"> | string
    hackathon?: XOR<HackathonRelationFilter, HackathonWhereInput>
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    judge?: XOR<JudgeRelationFilter, JudgeWhereInput>
  }

  export type JudgeassessmentsOrderByWithRelationInput = {
    id?: SortOrder
    impact?: SortOrder
    feasability?: SortOrder
    user_experience?: SortOrder
    scalability?: SortOrder
    innovate?: SortOrder
    pitch?: SortOrder
    overall_score?: SortOrder
    hackathonId?: SortOrder
    projectId?: SortOrder
    judgeId?: SortOrder
    hackathon?: HackathonOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
    judge?: JudgeOrderByWithRelationInput
  }

  export type JudgeassessmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId?: string
    AND?: JudgeassessmentsWhereInput | JudgeassessmentsWhereInput[]
    OR?: JudgeassessmentsWhereInput[]
    NOT?: JudgeassessmentsWhereInput | JudgeassessmentsWhereInput[]
    impact?: IntFilter<"Judgeassessments"> | number
    feasability?: IntFilter<"Judgeassessments"> | number
    user_experience?: IntFilter<"Judgeassessments"> | number
    scalability?: IntFilter<"Judgeassessments"> | number
    innovate?: IntFilter<"Judgeassessments"> | number
    pitch?: IntFilter<"Judgeassessments"> | number
    overall_score?: DecimalFilter<"Judgeassessments"> | Decimal | DecimalJsLike | number | string
    hackathonId?: StringFilter<"Judgeassessments"> | string
    judgeId?: StringFilter<"Judgeassessments"> | string
    hackathon?: XOR<HackathonRelationFilter, HackathonWhereInput>
    project?: XOR<ProjectRelationFilter, ProjectWhereInput>
    judge?: XOR<JudgeRelationFilter, JudgeWhereInput>
  }, "id" | "projectId">

  export type JudgeassessmentsOrderByWithAggregationInput = {
    id?: SortOrder
    impact?: SortOrder
    feasability?: SortOrder
    user_experience?: SortOrder
    scalability?: SortOrder
    innovate?: SortOrder
    pitch?: SortOrder
    overall_score?: SortOrder
    hackathonId?: SortOrder
    projectId?: SortOrder
    judgeId?: SortOrder
    _count?: JudgeassessmentsCountOrderByAggregateInput
    _avg?: JudgeassessmentsAvgOrderByAggregateInput
    _max?: JudgeassessmentsMaxOrderByAggregateInput
    _min?: JudgeassessmentsMinOrderByAggregateInput
    _sum?: JudgeassessmentsSumOrderByAggregateInput
  }

  export type JudgeassessmentsScalarWhereWithAggregatesInput = {
    AND?: JudgeassessmentsScalarWhereWithAggregatesInput | JudgeassessmentsScalarWhereWithAggregatesInput[]
    OR?: JudgeassessmentsScalarWhereWithAggregatesInput[]
    NOT?: JudgeassessmentsScalarWhereWithAggregatesInput | JudgeassessmentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Judgeassessments"> | string
    impact?: IntWithAggregatesFilter<"Judgeassessments"> | number
    feasability?: IntWithAggregatesFilter<"Judgeassessments"> | number
    user_experience?: IntWithAggregatesFilter<"Judgeassessments"> | number
    scalability?: IntWithAggregatesFilter<"Judgeassessments"> | number
    innovate?: IntWithAggregatesFilter<"Judgeassessments"> | number
    pitch?: IntWithAggregatesFilter<"Judgeassessments"> | number
    overall_score?: DecimalWithAggregatesFilter<"Judgeassessments"> | Decimal | DecimalJsLike | number | string
    hackathonId?: StringWithAggregatesFilter<"Judgeassessments"> | string
    projectId?: StringWithAggregatesFilter<"Judgeassessments"> | string
    judgeId?: StringWithAggregatesFilter<"Judgeassessments"> | string
  }

  export type HackathonSponsorsWhereInput = {
    AND?: HackathonSponsorsWhereInput | HackathonSponsorsWhereInput[]
    OR?: HackathonSponsorsWhereInput[]
    NOT?: HackathonSponsorsWhereInput | HackathonSponsorsWhereInput[]
    id?: StringFilter<"HackathonSponsors"> | string
    name?: StringFilter<"HackathonSponsors"> | string
    email?: StringFilter<"HackathonSponsors"> | string
    image?: StringFilter<"HackathonSponsors"> | string
    hackathonId?: StringFilter<"HackathonSponsors"> | string
    hackathon?: XOR<HackathonRelationFilter, HackathonWhereInput>
  }

  export type HackathonSponsorsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    hackathonId?: SortOrder
    hackathon?: HackathonOrderByWithRelationInput
  }

  export type HackathonSponsorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HackathonSponsorsWhereInput | HackathonSponsorsWhereInput[]
    OR?: HackathonSponsorsWhereInput[]
    NOT?: HackathonSponsorsWhereInput | HackathonSponsorsWhereInput[]
    name?: StringFilter<"HackathonSponsors"> | string
    email?: StringFilter<"HackathonSponsors"> | string
    image?: StringFilter<"HackathonSponsors"> | string
    hackathonId?: StringFilter<"HackathonSponsors"> | string
    hackathon?: XOR<HackathonRelationFilter, HackathonWhereInput>
  }, "id">

  export type HackathonSponsorsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    hackathonId?: SortOrder
    _count?: HackathonSponsorsCountOrderByAggregateInput
    _max?: HackathonSponsorsMaxOrderByAggregateInput
    _min?: HackathonSponsorsMinOrderByAggregateInput
  }

  export type HackathonSponsorsScalarWhereWithAggregatesInput = {
    AND?: HackathonSponsorsScalarWhereWithAggregatesInput | HackathonSponsorsScalarWhereWithAggregatesInput[]
    OR?: HackathonSponsorsScalarWhereWithAggregatesInput[]
    NOT?: HackathonSponsorsScalarWhereWithAggregatesInput | HackathonSponsorsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HackathonSponsors"> | string
    name?: StringWithAggregatesFilter<"HackathonSponsors"> | string
    email?: StringWithAggregatesFilter<"HackathonSponsors"> | string
    image?: StringWithAggregatesFilter<"HackathonSponsors"> | string
    hackathonId?: StringWithAggregatesFilter<"HackathonSponsors"> | string
  }

  export type teamMembersWhereInput = {
    AND?: teamMembersWhereInput | teamMembersWhereInput[]
    OR?: teamMembersWhereInput[]
    NOT?: teamMembersWhereInput | teamMembersWhereInput[]
    id?: StringFilter<"teamMembers"> | string
    teamId?: StringFilter<"teamMembers"> | string
    userId?: StringFilter<"teamMembers"> | string
    team?: XOR<TeamRelationFilter, TeamWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type teamMembersOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    team?: TeamOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type teamMembersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: teamMembersWhereInput | teamMembersWhereInput[]
    OR?: teamMembersWhereInput[]
    NOT?: teamMembersWhereInput | teamMembersWhereInput[]
    teamId?: StringFilter<"teamMembers"> | string
    userId?: StringFilter<"teamMembers"> | string
    team?: XOR<TeamRelationFilter, TeamWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type teamMembersOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
    _count?: teamMembersCountOrderByAggregateInput
    _max?: teamMembersMaxOrderByAggregateInput
    _min?: teamMembersMinOrderByAggregateInput
  }

  export type teamMembersScalarWhereWithAggregatesInput = {
    AND?: teamMembersScalarWhereWithAggregatesInput | teamMembersScalarWhereWithAggregatesInput[]
    OR?: teamMembersScalarWhereWithAggregatesInput[]
    NOT?: teamMembersScalarWhereWithAggregatesInput | teamMembersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"teamMembers"> | string
    teamId?: StringWithAggregatesFilter<"teamMembers"> | string
    userId?: StringWithAggregatesFilter<"teamMembers"> | string
  }

  export type teamRequestWhereInput = {
    AND?: teamRequestWhereInput | teamRequestWhereInput[]
    OR?: teamRequestWhereInput[]
    NOT?: teamRequestWhereInput | teamRequestWhereInput[]
    id?: StringFilter<"teamRequest"> | string
    teamId?: StringFilter<"teamRequest"> | string
    teamName?: StringFilter<"teamRequest"> | string
    userSender?: StringFilter<"teamRequest"> | string
    userSenderName?: StringFilter<"teamRequest"> | string
    userReceiver?: StringNullableFilter<"teamRequest"> | string | null
    state?: BoolFilter<"teamRequest"> | boolean
    team?: XOR<TeamRelationFilter, TeamWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type teamRequestOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    teamName?: SortOrder
    userSender?: SortOrder
    userSenderName?: SortOrder
    userReceiver?: SortOrderInput | SortOrder
    state?: SortOrder
    team?: TeamOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type teamRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: teamRequestWhereInput | teamRequestWhereInput[]
    OR?: teamRequestWhereInput[]
    NOT?: teamRequestWhereInput | teamRequestWhereInput[]
    teamId?: StringFilter<"teamRequest"> | string
    teamName?: StringFilter<"teamRequest"> | string
    userSender?: StringFilter<"teamRequest"> | string
    userSenderName?: StringFilter<"teamRequest"> | string
    userReceiver?: StringNullableFilter<"teamRequest"> | string | null
    state?: BoolFilter<"teamRequest"> | boolean
    team?: XOR<TeamRelationFilter, TeamWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type teamRequestOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    teamName?: SortOrder
    userSender?: SortOrder
    userSenderName?: SortOrder
    userReceiver?: SortOrderInput | SortOrder
    state?: SortOrder
    _count?: teamRequestCountOrderByAggregateInput
    _max?: teamRequestMaxOrderByAggregateInput
    _min?: teamRequestMinOrderByAggregateInput
  }

  export type teamRequestScalarWhereWithAggregatesInput = {
    AND?: teamRequestScalarWhereWithAggregatesInput | teamRequestScalarWhereWithAggregatesInput[]
    OR?: teamRequestScalarWhereWithAggregatesInput[]
    NOT?: teamRequestScalarWhereWithAggregatesInput | teamRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"teamRequest"> | string
    teamId?: StringWithAggregatesFilter<"teamRequest"> | string
    teamName?: StringWithAggregatesFilter<"teamRequest"> | string
    userSender?: StringWithAggregatesFilter<"teamRequest"> | string
    userSenderName?: StringWithAggregatesFilter<"teamRequest"> | string
    userReceiver?: StringNullableWithAggregatesFilter<"teamRequest"> | string | null
    state?: BoolWithAggregatesFilter<"teamRequest"> | boolean
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    refresh_token_expires_in?: number | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    refresh_token_expires_in?: number | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    refresh_token_expires_in?: number | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    gamertag: string
    role?: $Enums.Role
    emailVerified?: boolean | null
    image?: string | null
    isVerified?: boolean | null
    lightningAddress?: string | null
    publicBio?: string | null
    publicStaticCharge?: string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonCreateNestedManyWithoutCreatorInput
    teams?: TeamCreateNestedManyWithoutCreatorInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    judge?: JudgeCreateNestedManyWithoutUserInput
    teamMembers?: teamMembersCreateNestedManyWithoutUserInput
    teamRequest?: teamRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    gamertag: string
    role?: $Enums.Role
    emailVerified?: boolean | null
    image?: string | null
    isVerified?: boolean | null
    lightningAddress?: string | null
    publicBio?: string | null
    publicStaticCharge?: string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonUncheckedCreateNestedManyWithoutCreatorInput
    teams?: TeamUncheckedCreateNestedManyWithoutCreatorInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    judge?: JudgeUncheckedCreateNestedManyWithoutUserInput
    teamMembers?: teamMembersUncheckedCreateNestedManyWithoutUserInput
    teamRequest?: teamRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lightningAddress?: NullableStringFieldUpdateOperationsInput | string | null
    publicBio?: NullableStringFieldUpdateOperationsInput | string | null
    publicStaticCharge?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonUpdateManyWithoutCreatorNestedInput
    teams?: TeamUpdateManyWithoutCreatorNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    judge?: JudgeUpdateManyWithoutUserNestedInput
    teamMembers?: teamMembersUpdateManyWithoutUserNestedInput
    teamRequest?: teamRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lightningAddress?: NullableStringFieldUpdateOperationsInput | string | null
    publicBio?: NullableStringFieldUpdateOperationsInput | string | null
    publicStaticCharge?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonUncheckedUpdateManyWithoutCreatorNestedInput
    teams?: TeamUncheckedUpdateManyWithoutCreatorNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    judge?: JudgeUncheckedUpdateManyWithoutUserNestedInput
    teamMembers?: teamMembersUncheckedUpdateManyWithoutUserNestedInput
    teamRequest?: teamRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    gamertag: string
    role?: $Enums.Role
    emailVerified?: boolean | null
    image?: string | null
    isVerified?: boolean | null
    lightningAddress?: string | null
    publicBio?: string | null
    publicStaticCharge?: string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lightningAddress?: NullableStringFieldUpdateOperationsInput | string | null
    publicBio?: NullableStringFieldUpdateOperationsInput | string | null
    publicStaticCharge?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lightningAddress?: NullableStringFieldUpdateOperationsInput | string | null
    publicBio?: NullableStringFieldUpdateOperationsInput | string | null
    publicStaticCharge?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    teamAvatar: string
    projects?: ProjectCreateNestedManyWithoutTeamInput
    registrations?: HackathonRegistrationCreateNestedManyWithoutTeamInput
    creator: UserCreateNestedOneWithoutTeamsInput
    teamMembers?: teamMembersCreateNestedManyWithoutTeamInput
    teamRequest?: teamRequestCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    teamAvatar: string
    creatorId: string
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamInput
    registrations?: HackathonRegistrationUncheckedCreateNestedManyWithoutTeamInput
    teamMembers?: teamMembersUncheckedCreateNestedManyWithoutTeamInput
    teamRequest?: teamRequestUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teamAvatar?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutTeamNestedInput
    registrations?: HackathonRegistrationUpdateManyWithoutTeamNestedInput
    creator?: UserUpdateOneRequiredWithoutTeamsNestedInput
    teamMembers?: teamMembersUpdateManyWithoutTeamNestedInput
    teamRequest?: teamRequestUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teamAvatar?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutTeamNestedInput
    registrations?: HackathonRegistrationUncheckedUpdateManyWithoutTeamNestedInput
    teamMembers?: teamMembersUncheckedUpdateManyWithoutTeamNestedInput
    teamRequest?: teamRequestUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    teamAvatar: string
    creatorId: string
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teamAvatar?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teamAvatar?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
  }

  export type HackathonCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    benefits: string
    rules: string
    judgingCriteria: string
    firstPlacePrize: string
    secondPlacePrize: string
    thirdPlacePrize: string
    published?: boolean
    startDate: string
    endDate: string
    projects?: ProjectCreateNestedManyWithoutHackathonInput
    registrations?: HackathonRegistrationCreateNestedManyWithoutHackathonInput
    judge?: JudgeCreateNestedManyWithoutHackathonInput
    creator: UserCreateNestedOneWithoutHackathonsInput
    judgeassessments?: JudgeassessmentsCreateNestedManyWithoutHackathonInput
    hackathonSponsors?: HackathonSponsorsCreateNestedManyWithoutHackathonInput
    hackathonSponsors?: HackathonSponsorsCreateNestedManyWithoutHackathonInput
  }

  export type HackathonUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    benefits: string
    rules: string
    judgingCriteria: string
    firstPlacePrize: string
    secondPlacePrize: string
    thirdPlacePrize: string
    published?: boolean
    creatorId: string
    startDate: string
    endDate: string
    projects?: ProjectUncheckedCreateNestedManyWithoutHackathonInput
    registrations?: HackathonRegistrationUncheckedCreateNestedManyWithoutHackathonInput
    judge?: JudgeUncheckedCreateNestedManyWithoutHackathonInput
    judgeassessments?: JudgeassessmentsUncheckedCreateNestedManyWithoutHackathonInput
    hackathonSponsors?: HackathonSponsorsUncheckedCreateNestedManyWithoutHackathonInput
    hackathonSponsors?: HackathonSponsorsUncheckedCreateNestedManyWithoutHackathonInput
  }

  export type HackathonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    benefits?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    judgingCriteria?: StringFieldUpdateOperationsInput | string
    firstPlacePrize?: StringFieldUpdateOperationsInput | string
    secondPlacePrize?: StringFieldUpdateOperationsInput | string
    thirdPlacePrize?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutHackathonNestedInput
    registrations?: HackathonRegistrationUpdateManyWithoutHackathonNestedInput
    judge?: JudgeUpdateManyWithoutHackathonNestedInput
    creator?: UserUpdateOneRequiredWithoutHackathonsNestedInput
    judgeassessments?: JudgeassessmentsUpdateManyWithoutHackathonNestedInput
    hackathonSponsors?: HackathonSponsorsUpdateManyWithoutHackathonNestedInput
    hackathonSponsors?: HackathonSponsorsUpdateManyWithoutHackathonNestedInput
  }

  export type HackathonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    benefits?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    judgingCriteria?: StringFieldUpdateOperationsInput | string
    firstPlacePrize?: StringFieldUpdateOperationsInput | string
    secondPlacePrize?: StringFieldUpdateOperationsInput | string
    thirdPlacePrize?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    creatorId?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutHackathonNestedInput
    registrations?: HackathonRegistrationUncheckedUpdateManyWithoutHackathonNestedInput
    judge?: JudgeUncheckedUpdateManyWithoutHackathonNestedInput
    judgeassessments?: JudgeassessmentsUncheckedUpdateManyWithoutHackathonNestedInput
    hackathonSponsors?: HackathonSponsorsUncheckedUpdateManyWithoutHackathonNestedInput
    hackathonSponsors?: HackathonSponsorsUncheckedUpdateManyWithoutHackathonNestedInput
  }

  export type HackathonCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    benefits: string
    rules: string
    judgingCriteria: string
    firstPlacePrize: string
    secondPlacePrize: string
    thirdPlacePrize: string
    published?: boolean
    creatorId: string
    startDate: string
    endDate: string
  }

  export type HackathonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    benefits?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    judgingCriteria?: StringFieldUpdateOperationsInput | string
    firstPlacePrize?: StringFieldUpdateOperationsInput | string
    secondPlacePrize?: StringFieldUpdateOperationsInput | string
    thirdPlacePrize?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
  }

  export type HackathonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    benefits?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    judgingCriteria?: StringFieldUpdateOperationsInput | string
    firstPlacePrize?: StringFieldUpdateOperationsInput | string
    secondPlacePrize?: StringFieldUpdateOperationsInput | string
    thirdPlacePrize?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    creatorId?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
  }

  export type HackathonRegistrationCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hackathon: HackathonCreateNestedOneWithoutRegistrationsInput
    team: TeamCreateNestedOneWithoutRegistrationsInput
  }

  export type HackathonRegistrationUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hackathonId: string
    teamId: string
  }

  export type HackathonRegistrationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hackathon?: HackathonUpdateOneRequiredWithoutRegistrationsNestedInput
    team?: TeamUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type HackathonRegistrationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hackathonId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type HackathonRegistrationCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hackathonId: string
    teamId: string
  }

  export type HackathonRegistrationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HackathonRegistrationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hackathonId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    loomLink: string
    pitchLink: string
    projectResourceLink: string
    comments?: string | null
    hackathon: HackathonCreateNestedOneWithoutProjectsInput
    judgeassessments?: JudgeassessmentsCreateNestedManyWithoutProjectInput
    team: TeamCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    loomLink: string
    pitchLink: string
    projectResourceLink: string
    comments?: string | null
    hackathonId: string
    teamId: string
    judgeassessments?: JudgeassessmentsUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    loomLink?: StringFieldUpdateOperationsInput | string
    pitchLink?: StringFieldUpdateOperationsInput | string
    projectResourceLink?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    hackathon?: HackathonUpdateOneRequiredWithoutProjectsNestedInput
    judgeassessments?: JudgeassessmentsUpdateManyWithoutProjectNestedInput
    team?: TeamUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    loomLink?: StringFieldUpdateOperationsInput | string
    pitchLink?: StringFieldUpdateOperationsInput | string
    projectResourceLink?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    hackathonId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    judgeassessments?: JudgeassessmentsUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    loomLink: string
    pitchLink: string
    projectResourceLink: string
    comments?: string | null
    hackathonId: string
    teamId: string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    loomLink?: StringFieldUpdateOperationsInput | string
    pitchLink?: StringFieldUpdateOperationsInput | string
    projectResourceLink?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    loomLink?: StringFieldUpdateOperationsInput | string
    pitchLink?: StringFieldUpdateOperationsInput | string
    projectResourceLink?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    hackathonId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactCreateInput = {
    id?: string
    name: string
    email: string
    company: string
    comments: string
  }

  export type ContactUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    company: string
    comments: string
  }

  export type ContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
  }

  export type ContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
  }

  export type ContactCreateManyInput = {
    id?: string
    name: string
    email: string
    company: string
    comments: string
  }

  export type ContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    comments?: StringFieldUpdateOperationsInput | string
  }

  export type SponsorsCreateInput = {
    id?: string
    name: string
    email: string
    company: string
  }

  export type SponsorsUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    company: string
  }

  export type SponsorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
  }

  export type SponsorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
  }

  export type SponsorsCreateManyInput = {
    id?: string
    name: string
    email: string
    company: string
  }

  export type SponsorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
  }

  export type SponsorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
  }

  export type JudgeCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutJudgeInput
    hackathon: HackathonCreateNestedOneWithoutJudgeInput
    judgeassessments?: JudgeassessmentsCreateNestedManyWithoutJudgeInput
  }

  export type JudgeUncheckedCreateInput = {
    id?: string
    userId: string
    judgeGamertag: string
    email: string
    judgeImage: string
    hackathonId: string
    judgeassessments?: JudgeassessmentsUncheckedCreateNestedManyWithoutJudgeInput
  }

  export type JudgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutJudgeNestedInput
    hackathon?: HackathonUpdateOneRequiredWithoutJudgeNestedInput
    judgeassessments?: JudgeassessmentsUpdateManyWithoutJudgeNestedInput
  }

  export type JudgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    judgeGamertag?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    judgeImage?: StringFieldUpdateOperationsInput | string
    hackathonId?: StringFieldUpdateOperationsInput | string
    judgeassessments?: JudgeassessmentsUncheckedUpdateManyWithoutJudgeNestedInput
  }

  export type JudgeCreateManyInput = {
    id?: string
    userId: string
    judgeGamertag: string
    email: string
    judgeImage: string
    hackathonId: string
  }

  export type JudgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type JudgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    judgeGamertag?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    judgeImage?: StringFieldUpdateOperationsInput | string
    hackathonId?: StringFieldUpdateOperationsInput | string
  }

  export type JudgeassessmentsCreateInput = {
    id?: string
    impact: number
    feasability: number
    user_experience: number
    scalability: number
    innovate: number
    pitch: number
    overall_score: Decimal | DecimalJsLike | number | string
    hackathon: HackathonCreateNestedOneWithoutJudgeassessmentsInput
    project: ProjectCreateNestedOneWithoutJudgeassessmentsInput
    judge: JudgeCreateNestedOneWithoutJudgeassessmentsInput
  }

  export type JudgeassessmentsUncheckedCreateInput = {
    id?: string
    impact: number
    feasability: number
    user_experience: number
    scalability: number
    innovate: number
    pitch: number
    overall_score: Decimal | DecimalJsLike | number | string
    hackathonId: string
    projectId: string
    judgeId: string
  }

  export type JudgeassessmentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    impact?: IntFieldUpdateOperationsInput | number
    feasability?: IntFieldUpdateOperationsInput | number
    user_experience?: IntFieldUpdateOperationsInput | number
    scalability?: IntFieldUpdateOperationsInput | number
    innovate?: IntFieldUpdateOperationsInput | number
    pitch?: IntFieldUpdateOperationsInput | number
    overall_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hackathon?: HackathonUpdateOneRequiredWithoutJudgeassessmentsNestedInput
    project?: ProjectUpdateOneRequiredWithoutJudgeassessmentsNestedInput
    judge?: JudgeUpdateOneRequiredWithoutJudgeassessmentsNestedInput
  }

  export type JudgeassessmentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    impact?: IntFieldUpdateOperationsInput | number
    feasability?: IntFieldUpdateOperationsInput | number
    user_experience?: IntFieldUpdateOperationsInput | number
    scalability?: IntFieldUpdateOperationsInput | number
    innovate?: IntFieldUpdateOperationsInput | number
    pitch?: IntFieldUpdateOperationsInput | number
    overall_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hackathonId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    judgeId?: StringFieldUpdateOperationsInput | string
  }

  export type JudgeassessmentsCreateManyInput = {
    id?: string
    impact: number
    feasability: number
    user_experience: number
    scalability: number
    innovate: number
    pitch: number
    overall_score: Decimal | DecimalJsLike | number | string
    hackathonId: string
    projectId: string
    judgeId: string
  }

  export type JudgeassessmentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    impact?: IntFieldUpdateOperationsInput | number
    feasability?: IntFieldUpdateOperationsInput | number
    user_experience?: IntFieldUpdateOperationsInput | number
    scalability?: IntFieldUpdateOperationsInput | number
    innovate?: IntFieldUpdateOperationsInput | number
    pitch?: IntFieldUpdateOperationsInput | number
    overall_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type JudgeassessmentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    impact?: IntFieldUpdateOperationsInput | number
    feasability?: IntFieldUpdateOperationsInput | number
    user_experience?: IntFieldUpdateOperationsInput | number
    scalability?: IntFieldUpdateOperationsInput | number
    innovate?: IntFieldUpdateOperationsInput | number
    pitch?: IntFieldUpdateOperationsInput | number
    overall_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hackathonId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    judgeId?: StringFieldUpdateOperationsInput | string
  }

  export type HackathonSponsorsCreateInput = {
    id?: string
    name: string
    email: string
    image: string
    hackathon: HackathonCreateNestedOneWithoutHackathonSponsorsInput
  }

  export type HackathonSponsorsUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    image: string
    hackathonId: string
  }

  export type HackathonSponsorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    hackathon?: HackathonUpdateOneRequiredWithoutHackathonSponsorsNestedInput
  }

  export type HackathonSponsorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    hackathonId?: StringFieldUpdateOperationsInput | string
  }

  export type HackathonSponsorsCreateManyInput = {
    id?: string
    name: string
    email: string
    image: string
    hackathonId: string
  }

  export type HackathonSponsorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type HackathonSponsorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    hackathonId?: StringFieldUpdateOperationsInput | string
  }

  export type teamMembersCreateInput = {
    id?: string
    team: TeamCreateNestedOneWithoutTeamMembersInput
    user: UserCreateNestedOneWithoutTeamMembersInput
  }

  export type teamMembersUncheckedCreateInput = {
    id?: string
    teamId: string
    userId: string
  }

  export type teamMembersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    team?: TeamUpdateOneRequiredWithoutTeamMembersNestedInput
    user?: UserUpdateOneRequiredWithoutTeamMembersNestedInput
  }

  export type teamMembersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type teamMembersCreateManyInput = {
    id?: string
    teamId: string
    userId: string
  }

  export type teamMembersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type teamMembersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type teamRequestCreateInput = {
    id?: string
    teamName: string
    userSenderName: string
    userReceiver?: string | null
    state: boolean
    team: TeamCreateNestedOneWithoutTeamRequestInput
    user: UserCreateNestedOneWithoutTeamRequestInput
  }

  export type teamRequestUncheckedCreateInput = {
    id?: string
    teamId: string
    teamName: string
    userSender: string
    userSenderName: string
    userReceiver?: string | null
    state: boolean
  }

  export type teamRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    userSenderName?: StringFieldUpdateOperationsInput | string
    userReceiver?: NullableStringFieldUpdateOperationsInput | string | null
    state?: BoolFieldUpdateOperationsInput | boolean
    team?: TeamUpdateOneRequiredWithoutTeamRequestNestedInput
    user?: UserUpdateOneRequiredWithoutTeamRequestNestedInput
  }

  export type teamRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    userSender?: StringFieldUpdateOperationsInput | string
    userSenderName?: StringFieldUpdateOperationsInput | string
    userReceiver?: NullableStringFieldUpdateOperationsInput | string | null
    state?: BoolFieldUpdateOperationsInput | boolean
  }

  export type teamRequestCreateManyInput = {
    id?: string
    teamId: string
    teamName: string
    userSender: string
    userSenderName: string
    userReceiver?: string | null
    state: boolean
  }

  export type teamRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    userSenderName?: StringFieldUpdateOperationsInput | string
    userReceiver?: NullableStringFieldUpdateOperationsInput | string | null
    state?: BoolFieldUpdateOperationsInput | boolean
  }

  export type teamRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    userSender?: StringFieldUpdateOperationsInput | string
    userSenderName?: StringFieldUpdateOperationsInput | string
    userReceiver?: NullableStringFieldUpdateOperationsInput | string | null
    state?: BoolFieldUpdateOperationsInput | boolean
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    refresh_token_expires_in?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    refresh_token_expires_in?: SortOrder
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    refresh_token_expires_in?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    refresh_token_expires_in?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    refresh_token_expires_in?: SortOrder
    expires_at?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type HackathonListRelationFilter = {
    every?: HackathonWhereInput
    some?: HackathonWhereInput
    none?: HackathonWhereInput
  }

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type JudgeListRelationFilter = {
    every?: JudgeWhereInput
    some?: JudgeWhereInput
    none?: JudgeWhereInput
  }

  export type TeamMembersListRelationFilter = {
    every?: teamMembersWhereInput
    some?: teamMembersWhereInput
    none?: teamMembersWhereInput
  }

  export type TeamRequestListRelationFilter = {
    every?: teamRequestWhereInput
    some?: teamRequestWhereInput
    none?: teamRequestWhereInput
  }

  export type HackathonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JudgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type teamMembersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type teamRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserIdGamertagEmailImageCompoundUniqueInput = {
    id: string
    gamertag: string
    email: string
    image: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gamertag?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    isVerified?: SortOrder
    lightningAddress?: SortOrder
    publicBio?: SortOrder
    publicStaticCharge?: SortOrder
    social?: SortOrder
    balance?: SortOrder
    remainingAmountLimits?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gamertag?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    isVerified?: SortOrder
    lightningAddress?: SortOrder
    publicBio?: SortOrder
    publicStaticCharge?: SortOrder
    balance?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    gamertag?: SortOrder
    role?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    isVerified?: SortOrder
    lightningAddress?: SortOrder
    publicBio?: SortOrder
    publicStaticCharge?: SortOrder
    balance?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type HackathonRegistrationListRelationFilter = {
    every?: HackathonRegistrationWhereInput
    some?: HackathonRegistrationWhereInput
    none?: HackathonRegistrationWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HackathonRegistrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    teamAvatar?: SortOrder
    creatorId?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    teamAvatar?: SortOrder
    creatorId?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    teamAvatar?: SortOrder
    creatorId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type JudgeassessmentsListRelationFilter = {
    every?: JudgeassessmentsWhereInput
    some?: JudgeassessmentsWhereInput
    none?: JudgeassessmentsWhereInput
  }

  export type HackathonSponsorsListRelationFilter = {
    every?: HackathonSponsorsWhereInput
    some?: HackathonSponsorsWhereInput
    none?: HackathonSponsorsWhereInput
  }

  export type HackathonSponsorsListRelationFilter = {
    every?: HackathonSponsorsWhereInput
    some?: HackathonSponsorsWhereInput
    none?: HackathonSponsorsWhereInput
  }

  export type JudgeassessmentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HackathonSponsorsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HackathonSponsorsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HackathonCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    benefits?: SortOrder
    rules?: SortOrder
    judgingCriteria?: SortOrder
    firstPlacePrize?: SortOrder
    secondPlacePrize?: SortOrder
    thirdPlacePrize?: SortOrder
    published?: SortOrder
    creatorId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type HackathonMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    benefits?: SortOrder
    rules?: SortOrder
    judgingCriteria?: SortOrder
    firstPlacePrize?: SortOrder
    secondPlacePrize?: SortOrder
    thirdPlacePrize?: SortOrder
    published?: SortOrder
    creatorId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type HackathonMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    benefits?: SortOrder
    rules?: SortOrder
    judgingCriteria?: SortOrder
    firstPlacePrize?: SortOrder
    secondPlacePrize?: SortOrder
    thirdPlacePrize?: SortOrder
    published?: SortOrder
    creatorId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type HackathonRelationFilter = {
    is?: HackathonWhereInput
    isNot?: HackathonWhereInput
  }

  export type TeamRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type HackathonRegistrationTeamIdHackathonIdCompoundUniqueInput = {
    teamId: string
    hackathonId: string
  }

  export type HackathonRegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hackathonId?: SortOrder
    teamId?: SortOrder
  }

  export type HackathonRegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hackathonId?: SortOrder
    teamId?: SortOrder
  }

  export type HackathonRegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    hackathonId?: SortOrder
    teamId?: SortOrder
  }

  export type ProjectTeamIdHackathonIdCompoundUniqueInput = {
    teamId: string
    hackathonId: string
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    loomLink?: SortOrder
    pitchLink?: SortOrder
    projectResourceLink?: SortOrder
    comments?: SortOrder
    hackathonId?: SortOrder
    teamId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    loomLink?: SortOrder
    pitchLink?: SortOrder
    projectResourceLink?: SortOrder
    comments?: SortOrder
    hackathonId?: SortOrder
    teamId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    loomLink?: SortOrder
    pitchLink?: SortOrder
    projectResourceLink?: SortOrder
    comments?: SortOrder
    hackathonId?: SortOrder
    teamId?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    comments?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    comments?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
    comments?: SortOrder
  }

  export type SponsorsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
  }

  export type SponsorsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
  }

  export type SponsorsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    company?: SortOrder
  }

  export type JudgeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    judgeGamertag?: SortOrder
    email?: SortOrder
    judgeImage?: SortOrder
    hackathonId?: SortOrder
  }

  export type JudgeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    judgeGamertag?: SortOrder
    email?: SortOrder
    judgeImage?: SortOrder
    hackathonId?: SortOrder
  }

  export type JudgeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    judgeGamertag?: SortOrder
    email?: SortOrder
    judgeImage?: SortOrder
    hackathonId?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ProjectRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type JudgeRelationFilter = {
    is?: JudgeWhereInput
    isNot?: JudgeWhereInput
  }

  export type JudgeassessmentsCountOrderByAggregateInput = {
    id?: SortOrder
    impact?: SortOrder
    feasability?: SortOrder
    user_experience?: SortOrder
    scalability?: SortOrder
    innovate?: SortOrder
    pitch?: SortOrder
    overall_score?: SortOrder
    hackathonId?: SortOrder
    projectId?: SortOrder
    judgeId?: SortOrder
  }

  export type JudgeassessmentsAvgOrderByAggregateInput = {
    impact?: SortOrder
    feasability?: SortOrder
    user_experience?: SortOrder
    scalability?: SortOrder
    innovate?: SortOrder
    pitch?: SortOrder
    overall_score?: SortOrder
  }

  export type JudgeassessmentsMaxOrderByAggregateInput = {
    id?: SortOrder
    impact?: SortOrder
    feasability?: SortOrder
    user_experience?: SortOrder
    scalability?: SortOrder
    innovate?: SortOrder
    pitch?: SortOrder
    overall_score?: SortOrder
    hackathonId?: SortOrder
    projectId?: SortOrder
    judgeId?: SortOrder
  }

  export type JudgeassessmentsMinOrderByAggregateInput = {
    id?: SortOrder
    impact?: SortOrder
    feasability?: SortOrder
    user_experience?: SortOrder
    scalability?: SortOrder
    innovate?: SortOrder
    pitch?: SortOrder
    overall_score?: SortOrder
    hackathonId?: SortOrder
    projectId?: SortOrder
    judgeId?: SortOrder
  }

  export type JudgeassessmentsSumOrderByAggregateInput = {
    impact?: SortOrder
    feasability?: SortOrder
    user_experience?: SortOrder
    scalability?: SortOrder
    innovate?: SortOrder
    pitch?: SortOrder
    overall_score?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type HackathonSponsorsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    hackathonId?: SortOrder
  }

  export type HackathonSponsorsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    hackathonId?: SortOrder
  }

  export type HackathonSponsorsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    hackathonId?: SortOrder
  }

  export type teamMembersCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
  }

  export type teamMembersMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
  }

  export type teamMembersMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    userId?: SortOrder
  }

  export type teamRequestCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    teamName?: SortOrder
    userSender?: SortOrder
    userSenderName?: SortOrder
    userReceiver?: SortOrder
    state?: SortOrder
  }

  export type teamRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    teamName?: SortOrder
    userSender?: SortOrder
    userSenderName?: SortOrder
    userReceiver?: SortOrder
    state?: SortOrder
  }

  export type teamRequestMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    teamName?: SortOrder
    userSender?: SortOrder
    userSenderName?: SortOrder
    userReceiver?: SortOrder
    state?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type HackathonCreateNestedManyWithoutCreatorInput = {
    create?: XOR<HackathonCreateWithoutCreatorInput, HackathonUncheckedCreateWithoutCreatorInput> | HackathonCreateWithoutCreatorInput[] | HackathonUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: HackathonCreateOrConnectWithoutCreatorInput | HackathonCreateOrConnectWithoutCreatorInput[]
    createMany?: HackathonCreateManyCreatorInputEnvelope
    connect?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
  }

  export type TeamCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TeamCreateWithoutCreatorInput, TeamUncheckedCreateWithoutCreatorInput> | TeamCreateWithoutCreatorInput[] | TeamUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutCreatorInput | TeamCreateOrConnectWithoutCreatorInput[]
    createMany?: TeamCreateManyCreatorInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type JudgeCreateNestedManyWithoutUserInput = {
    create?: XOR<JudgeCreateWithoutUserInput, JudgeUncheckedCreateWithoutUserInput> | JudgeCreateWithoutUserInput[] | JudgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JudgeCreateOrConnectWithoutUserInput | JudgeCreateOrConnectWithoutUserInput[]
    createMany?: JudgeCreateManyUserInputEnvelope
    connect?: JudgeWhereUniqueInput | JudgeWhereUniqueInput[]
  }

  export type teamMembersCreateNestedManyWithoutUserInput = {
    create?: XOR<teamMembersCreateWithoutUserInput, teamMembersUncheckedCreateWithoutUserInput> | teamMembersCreateWithoutUserInput[] | teamMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: teamMembersCreateOrConnectWithoutUserInput | teamMembersCreateOrConnectWithoutUserInput[]
    createMany?: teamMembersCreateManyUserInputEnvelope
    connect?: teamMembersWhereUniqueInput | teamMembersWhereUniqueInput[]
  }

  export type teamRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<teamRequestCreateWithoutUserInput, teamRequestUncheckedCreateWithoutUserInput> | teamRequestCreateWithoutUserInput[] | teamRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: teamRequestCreateOrConnectWithoutUserInput | teamRequestCreateOrConnectWithoutUserInput[]
    createMany?: teamRequestCreateManyUserInputEnvelope
    connect?: teamRequestWhereUniqueInput | teamRequestWhereUniqueInput[]
  }

  export type HackathonUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<HackathonCreateWithoutCreatorInput, HackathonUncheckedCreateWithoutCreatorInput> | HackathonCreateWithoutCreatorInput[] | HackathonUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: HackathonCreateOrConnectWithoutCreatorInput | HackathonCreateOrConnectWithoutCreatorInput[]
    createMany?: HackathonCreateManyCreatorInputEnvelope
    connect?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TeamCreateWithoutCreatorInput, TeamUncheckedCreateWithoutCreatorInput> | TeamCreateWithoutCreatorInput[] | TeamUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutCreatorInput | TeamCreateOrConnectWithoutCreatorInput[]
    createMany?: TeamCreateManyCreatorInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type JudgeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JudgeCreateWithoutUserInput, JudgeUncheckedCreateWithoutUserInput> | JudgeCreateWithoutUserInput[] | JudgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JudgeCreateOrConnectWithoutUserInput | JudgeCreateOrConnectWithoutUserInput[]
    createMany?: JudgeCreateManyUserInputEnvelope
    connect?: JudgeWhereUniqueInput | JudgeWhereUniqueInput[]
  }

  export type teamMembersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<teamMembersCreateWithoutUserInput, teamMembersUncheckedCreateWithoutUserInput> | teamMembersCreateWithoutUserInput[] | teamMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: teamMembersCreateOrConnectWithoutUserInput | teamMembersCreateOrConnectWithoutUserInput[]
    createMany?: teamMembersCreateManyUserInputEnvelope
    connect?: teamMembersWhereUniqueInput | teamMembersWhereUniqueInput[]
  }

  export type teamRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<teamRequestCreateWithoutUserInput, teamRequestUncheckedCreateWithoutUserInput> | teamRequestCreateWithoutUserInput[] | teamRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: teamRequestCreateOrConnectWithoutUserInput | teamRequestCreateOrConnectWithoutUserInput[]
    createMany?: teamRequestCreateManyUserInputEnvelope
    connect?: teamRequestWhereUniqueInput | teamRequestWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type HackathonUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<HackathonCreateWithoutCreatorInput, HackathonUncheckedCreateWithoutCreatorInput> | HackathonCreateWithoutCreatorInput[] | HackathonUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: HackathonCreateOrConnectWithoutCreatorInput | HackathonCreateOrConnectWithoutCreatorInput[]
    upsert?: HackathonUpsertWithWhereUniqueWithoutCreatorInput | HackathonUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: HackathonCreateManyCreatorInputEnvelope
    set?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
    disconnect?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
    delete?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
    connect?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
    update?: HackathonUpdateWithWhereUniqueWithoutCreatorInput | HackathonUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: HackathonUpdateManyWithWhereWithoutCreatorInput | HackathonUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: HackathonScalarWhereInput | HackathonScalarWhereInput[]
  }

  export type TeamUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TeamCreateWithoutCreatorInput, TeamUncheckedCreateWithoutCreatorInput> | TeamCreateWithoutCreatorInput[] | TeamUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutCreatorInput | TeamCreateOrConnectWithoutCreatorInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutCreatorInput | TeamUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TeamCreateManyCreatorInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutCreatorInput | TeamUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutCreatorInput | TeamUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type JudgeUpdateManyWithoutUserNestedInput = {
    create?: XOR<JudgeCreateWithoutUserInput, JudgeUncheckedCreateWithoutUserInput> | JudgeCreateWithoutUserInput[] | JudgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JudgeCreateOrConnectWithoutUserInput | JudgeCreateOrConnectWithoutUserInput[]
    upsert?: JudgeUpsertWithWhereUniqueWithoutUserInput | JudgeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JudgeCreateManyUserInputEnvelope
    set?: JudgeWhereUniqueInput | JudgeWhereUniqueInput[]
    disconnect?: JudgeWhereUniqueInput | JudgeWhereUniqueInput[]
    delete?: JudgeWhereUniqueInput | JudgeWhereUniqueInput[]
    connect?: JudgeWhereUniqueInput | JudgeWhereUniqueInput[]
    update?: JudgeUpdateWithWhereUniqueWithoutUserInput | JudgeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JudgeUpdateManyWithWhereWithoutUserInput | JudgeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JudgeScalarWhereInput | JudgeScalarWhereInput[]
  }

  export type teamMembersUpdateManyWithoutUserNestedInput = {
    create?: XOR<teamMembersCreateWithoutUserInput, teamMembersUncheckedCreateWithoutUserInput> | teamMembersCreateWithoutUserInput[] | teamMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: teamMembersCreateOrConnectWithoutUserInput | teamMembersCreateOrConnectWithoutUserInput[]
    upsert?: teamMembersUpsertWithWhereUniqueWithoutUserInput | teamMembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: teamMembersCreateManyUserInputEnvelope
    set?: teamMembersWhereUniqueInput | teamMembersWhereUniqueInput[]
    disconnect?: teamMembersWhereUniqueInput | teamMembersWhereUniqueInput[]
    delete?: teamMembersWhereUniqueInput | teamMembersWhereUniqueInput[]
    connect?: teamMembersWhereUniqueInput | teamMembersWhereUniqueInput[]
    update?: teamMembersUpdateWithWhereUniqueWithoutUserInput | teamMembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: teamMembersUpdateManyWithWhereWithoutUserInput | teamMembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: teamMembersScalarWhereInput | teamMembersScalarWhereInput[]
  }

  export type teamRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<teamRequestCreateWithoutUserInput, teamRequestUncheckedCreateWithoutUserInput> | teamRequestCreateWithoutUserInput[] | teamRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: teamRequestCreateOrConnectWithoutUserInput | teamRequestCreateOrConnectWithoutUserInput[]
    upsert?: teamRequestUpsertWithWhereUniqueWithoutUserInput | teamRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: teamRequestCreateManyUserInputEnvelope
    set?: teamRequestWhereUniqueInput | teamRequestWhereUniqueInput[]
    disconnect?: teamRequestWhereUniqueInput | teamRequestWhereUniqueInput[]
    delete?: teamRequestWhereUniqueInput | teamRequestWhereUniqueInput[]
    connect?: teamRequestWhereUniqueInput | teamRequestWhereUniqueInput[]
    update?: teamRequestUpdateWithWhereUniqueWithoutUserInput | teamRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: teamRequestUpdateManyWithWhereWithoutUserInput | teamRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: teamRequestScalarWhereInput | teamRequestScalarWhereInput[]
  }

  export type HackathonUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<HackathonCreateWithoutCreatorInput, HackathonUncheckedCreateWithoutCreatorInput> | HackathonCreateWithoutCreatorInput[] | HackathonUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: HackathonCreateOrConnectWithoutCreatorInput | HackathonCreateOrConnectWithoutCreatorInput[]
    upsert?: HackathonUpsertWithWhereUniqueWithoutCreatorInput | HackathonUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: HackathonCreateManyCreatorInputEnvelope
    set?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
    disconnect?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
    delete?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
    connect?: HackathonWhereUniqueInput | HackathonWhereUniqueInput[]
    update?: HackathonUpdateWithWhereUniqueWithoutCreatorInput | HackathonUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: HackathonUpdateManyWithWhereWithoutCreatorInput | HackathonUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: HackathonScalarWhereInput | HackathonScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TeamCreateWithoutCreatorInput, TeamUncheckedCreateWithoutCreatorInput> | TeamCreateWithoutCreatorInput[] | TeamUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutCreatorInput | TeamCreateOrConnectWithoutCreatorInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutCreatorInput | TeamUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TeamCreateManyCreatorInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutCreatorInput | TeamUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutCreatorInput | TeamUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type JudgeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JudgeCreateWithoutUserInput, JudgeUncheckedCreateWithoutUserInput> | JudgeCreateWithoutUserInput[] | JudgeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JudgeCreateOrConnectWithoutUserInput | JudgeCreateOrConnectWithoutUserInput[]
    upsert?: JudgeUpsertWithWhereUniqueWithoutUserInput | JudgeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JudgeCreateManyUserInputEnvelope
    set?: JudgeWhereUniqueInput | JudgeWhereUniqueInput[]
    disconnect?: JudgeWhereUniqueInput | JudgeWhereUniqueInput[]
    delete?: JudgeWhereUniqueInput | JudgeWhereUniqueInput[]
    connect?: JudgeWhereUniqueInput | JudgeWhereUniqueInput[]
    update?: JudgeUpdateWithWhereUniqueWithoutUserInput | JudgeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JudgeUpdateManyWithWhereWithoutUserInput | JudgeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JudgeScalarWhereInput | JudgeScalarWhereInput[]
  }

  export type teamMembersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<teamMembersCreateWithoutUserInput, teamMembersUncheckedCreateWithoutUserInput> | teamMembersCreateWithoutUserInput[] | teamMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: teamMembersCreateOrConnectWithoutUserInput | teamMembersCreateOrConnectWithoutUserInput[]
    upsert?: teamMembersUpsertWithWhereUniqueWithoutUserInput | teamMembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: teamMembersCreateManyUserInputEnvelope
    set?: teamMembersWhereUniqueInput | teamMembersWhereUniqueInput[]
    disconnect?: teamMembersWhereUniqueInput | teamMembersWhereUniqueInput[]
    delete?: teamMembersWhereUniqueInput | teamMembersWhereUniqueInput[]
    connect?: teamMembersWhereUniqueInput | teamMembersWhereUniqueInput[]
    update?: teamMembersUpdateWithWhereUniqueWithoutUserInput | teamMembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: teamMembersUpdateManyWithWhereWithoutUserInput | teamMembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: teamMembersScalarWhereInput | teamMembersScalarWhereInput[]
  }

  export type teamRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<teamRequestCreateWithoutUserInput, teamRequestUncheckedCreateWithoutUserInput> | teamRequestCreateWithoutUserInput[] | teamRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: teamRequestCreateOrConnectWithoutUserInput | teamRequestCreateOrConnectWithoutUserInput[]
    upsert?: teamRequestUpsertWithWhereUniqueWithoutUserInput | teamRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: teamRequestCreateManyUserInputEnvelope
    set?: teamRequestWhereUniqueInput | teamRequestWhereUniqueInput[]
    disconnect?: teamRequestWhereUniqueInput | teamRequestWhereUniqueInput[]
    delete?: teamRequestWhereUniqueInput | teamRequestWhereUniqueInput[]
    connect?: teamRequestWhereUniqueInput | teamRequestWhereUniqueInput[]
    update?: teamRequestUpdateWithWhereUniqueWithoutUserInput | teamRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: teamRequestUpdateManyWithWhereWithoutUserInput | teamRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: teamRequestScalarWhereInput | teamRequestScalarWhereInput[]
  }

  export type ProjectCreateNestedManyWithoutTeamInput = {
    create?: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput> | ProjectCreateWithoutTeamInput[] | ProjectUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamInput | ProjectCreateOrConnectWithoutTeamInput[]
    createMany?: ProjectCreateManyTeamInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type HackathonRegistrationCreateNestedManyWithoutTeamInput = {
    create?: XOR<HackathonRegistrationCreateWithoutTeamInput, HackathonRegistrationUncheckedCreateWithoutTeamInput> | HackathonRegistrationCreateWithoutTeamInput[] | HackathonRegistrationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: HackathonRegistrationCreateOrConnectWithoutTeamInput | HackathonRegistrationCreateOrConnectWithoutTeamInput[]
    createMany?: HackathonRegistrationCreateManyTeamInputEnvelope
    connect?: HackathonRegistrationWhereUniqueInput | HackathonRegistrationWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutTeamsInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput
    connect?: UserWhereUniqueInput
  }

  export type teamMembersCreateNestedManyWithoutTeamInput = {
    create?: XOR<teamMembersCreateWithoutTeamInput, teamMembersUncheckedCreateWithoutTeamInput> | teamMembersCreateWithoutTeamInput[] | teamMembersUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: teamMembersCreateOrConnectWithoutTeamInput | teamMembersCreateOrConnectWithoutTeamInput[]
    createMany?: teamMembersCreateManyTeamInputEnvelope
    connect?: teamMembersWhereUniqueInput | teamMembersWhereUniqueInput[]
  }

  export type teamRequestCreateNestedManyWithoutTeamInput = {
    create?: XOR<teamRequestCreateWithoutTeamInput, teamRequestUncheckedCreateWithoutTeamInput> | teamRequestCreateWithoutTeamInput[] | teamRequestUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: teamRequestCreateOrConnectWithoutTeamInput | teamRequestCreateOrConnectWithoutTeamInput[]
    createMany?: teamRequestCreateManyTeamInputEnvelope
    connect?: teamRequestWhereUniqueInput | teamRequestWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput> | ProjectCreateWithoutTeamInput[] | ProjectUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamInput | ProjectCreateOrConnectWithoutTeamInput[]
    createMany?: ProjectCreateManyTeamInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type HackathonRegistrationUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<HackathonRegistrationCreateWithoutTeamInput, HackathonRegistrationUncheckedCreateWithoutTeamInput> | HackathonRegistrationCreateWithoutTeamInput[] | HackathonRegistrationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: HackathonRegistrationCreateOrConnectWithoutTeamInput | HackathonRegistrationCreateOrConnectWithoutTeamInput[]
    createMany?: HackathonRegistrationCreateManyTeamInputEnvelope
    connect?: HackathonRegistrationWhereUniqueInput | HackathonRegistrationWhereUniqueInput[]
  }

  export type teamMembersUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<teamMembersCreateWithoutTeamInput, teamMembersUncheckedCreateWithoutTeamInput> | teamMembersCreateWithoutTeamInput[] | teamMembersUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: teamMembersCreateOrConnectWithoutTeamInput | teamMembersCreateOrConnectWithoutTeamInput[]
    createMany?: teamMembersCreateManyTeamInputEnvelope
    connect?: teamMembersWhereUniqueInput | teamMembersWhereUniqueInput[]
  }

  export type teamRequestUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<teamRequestCreateWithoutTeamInput, teamRequestUncheckedCreateWithoutTeamInput> | teamRequestCreateWithoutTeamInput[] | teamRequestUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: teamRequestCreateOrConnectWithoutTeamInput | teamRequestCreateOrConnectWithoutTeamInput[]
    createMany?: teamRequestCreateManyTeamInputEnvelope
    connect?: teamRequestWhereUniqueInput | teamRequestWhereUniqueInput[]
  }

  export type ProjectUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput> | ProjectCreateWithoutTeamInput[] | ProjectUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamInput | ProjectCreateOrConnectWithoutTeamInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutTeamInput | ProjectUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ProjectCreateManyTeamInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutTeamInput | ProjectUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutTeamInput | ProjectUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type HackathonRegistrationUpdateManyWithoutTeamNestedInput = {
    create?: XOR<HackathonRegistrationCreateWithoutTeamInput, HackathonRegistrationUncheckedCreateWithoutTeamInput> | HackathonRegistrationCreateWithoutTeamInput[] | HackathonRegistrationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: HackathonRegistrationCreateOrConnectWithoutTeamInput | HackathonRegistrationCreateOrConnectWithoutTeamInput[]
    upsert?: HackathonRegistrationUpsertWithWhereUniqueWithoutTeamInput | HackathonRegistrationUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: HackathonRegistrationCreateManyTeamInputEnvelope
    set?: HackathonRegistrationWhereUniqueInput | HackathonRegistrationWhereUniqueInput[]
    disconnect?: HackathonRegistrationWhereUniqueInput | HackathonRegistrationWhereUniqueInput[]
    delete?: HackathonRegistrationWhereUniqueInput | HackathonRegistrationWhereUniqueInput[]
    connect?: HackathonRegistrationWhereUniqueInput | HackathonRegistrationWhereUniqueInput[]
    update?: HackathonRegistrationUpdateWithWhereUniqueWithoutTeamInput | HackathonRegistrationUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: HackathonRegistrationUpdateManyWithWhereWithoutTeamInput | HackathonRegistrationUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: HackathonRegistrationScalarWhereInput | HackathonRegistrationScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput
    upsert?: UserUpsertWithoutTeamsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeamsInput, UserUpdateWithoutTeamsInput>, UserUncheckedUpdateWithoutTeamsInput>
  }

  export type teamMembersUpdateManyWithoutTeamNestedInput = {
    create?: XOR<teamMembersCreateWithoutTeamInput, teamMembersUncheckedCreateWithoutTeamInput> | teamMembersCreateWithoutTeamInput[] | teamMembersUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: teamMembersCreateOrConnectWithoutTeamInput | teamMembersCreateOrConnectWithoutTeamInput[]
    upsert?: teamMembersUpsertWithWhereUniqueWithoutTeamInput | teamMembersUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: teamMembersCreateManyTeamInputEnvelope
    set?: teamMembersWhereUniqueInput | teamMembersWhereUniqueInput[]
    disconnect?: teamMembersWhereUniqueInput | teamMembersWhereUniqueInput[]
    delete?: teamMembersWhereUniqueInput | teamMembersWhereUniqueInput[]
    connect?: teamMembersWhereUniqueInput | teamMembersWhereUniqueInput[]
    update?: teamMembersUpdateWithWhereUniqueWithoutTeamInput | teamMembersUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: teamMembersUpdateManyWithWhereWithoutTeamInput | teamMembersUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: teamMembersScalarWhereInput | teamMembersScalarWhereInput[]
  }

  export type teamRequestUpdateManyWithoutTeamNestedInput = {
    create?: XOR<teamRequestCreateWithoutTeamInput, teamRequestUncheckedCreateWithoutTeamInput> | teamRequestCreateWithoutTeamInput[] | teamRequestUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: teamRequestCreateOrConnectWithoutTeamInput | teamRequestCreateOrConnectWithoutTeamInput[]
    upsert?: teamRequestUpsertWithWhereUniqueWithoutTeamInput | teamRequestUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: teamRequestCreateManyTeamInputEnvelope
    set?: teamRequestWhereUniqueInput | teamRequestWhereUniqueInput[]
    disconnect?: teamRequestWhereUniqueInput | teamRequestWhereUniqueInput[]
    delete?: teamRequestWhereUniqueInput | teamRequestWhereUniqueInput[]
    connect?: teamRequestWhereUniqueInput | teamRequestWhereUniqueInput[]
    update?: teamRequestUpdateWithWhereUniqueWithoutTeamInput | teamRequestUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: teamRequestUpdateManyWithWhereWithoutTeamInput | teamRequestUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: teamRequestScalarWhereInput | teamRequestScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput> | ProjectCreateWithoutTeamInput[] | ProjectUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamInput | ProjectCreateOrConnectWithoutTeamInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutTeamInput | ProjectUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: ProjectCreateManyTeamInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutTeamInput | ProjectUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutTeamInput | ProjectUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type HackathonRegistrationUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<HackathonRegistrationCreateWithoutTeamInput, HackathonRegistrationUncheckedCreateWithoutTeamInput> | HackathonRegistrationCreateWithoutTeamInput[] | HackathonRegistrationUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: HackathonRegistrationCreateOrConnectWithoutTeamInput | HackathonRegistrationCreateOrConnectWithoutTeamInput[]
    upsert?: HackathonRegistrationUpsertWithWhereUniqueWithoutTeamInput | HackathonRegistrationUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: HackathonRegistrationCreateManyTeamInputEnvelope
    set?: HackathonRegistrationWhereUniqueInput | HackathonRegistrationWhereUniqueInput[]
    disconnect?: HackathonRegistrationWhereUniqueInput | HackathonRegistrationWhereUniqueInput[]
    delete?: HackathonRegistrationWhereUniqueInput | HackathonRegistrationWhereUniqueInput[]
    connect?: HackathonRegistrationWhereUniqueInput | HackathonRegistrationWhereUniqueInput[]
    update?: HackathonRegistrationUpdateWithWhereUniqueWithoutTeamInput | HackathonRegistrationUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: HackathonRegistrationUpdateManyWithWhereWithoutTeamInput | HackathonRegistrationUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: HackathonRegistrationScalarWhereInput | HackathonRegistrationScalarWhereInput[]
  }

  export type teamMembersUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<teamMembersCreateWithoutTeamInput, teamMembersUncheckedCreateWithoutTeamInput> | teamMembersCreateWithoutTeamInput[] | teamMembersUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: teamMembersCreateOrConnectWithoutTeamInput | teamMembersCreateOrConnectWithoutTeamInput[]
    upsert?: teamMembersUpsertWithWhereUniqueWithoutTeamInput | teamMembersUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: teamMembersCreateManyTeamInputEnvelope
    set?: teamMembersWhereUniqueInput | teamMembersWhereUniqueInput[]
    disconnect?: teamMembersWhereUniqueInput | teamMembersWhereUniqueInput[]
    delete?: teamMembersWhereUniqueInput | teamMembersWhereUniqueInput[]
    connect?: teamMembersWhereUniqueInput | teamMembersWhereUniqueInput[]
    update?: teamMembersUpdateWithWhereUniqueWithoutTeamInput | teamMembersUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: teamMembersUpdateManyWithWhereWithoutTeamInput | teamMembersUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: teamMembersScalarWhereInput | teamMembersScalarWhereInput[]
  }

  export type teamRequestUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<teamRequestCreateWithoutTeamInput, teamRequestUncheckedCreateWithoutTeamInput> | teamRequestCreateWithoutTeamInput[] | teamRequestUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: teamRequestCreateOrConnectWithoutTeamInput | teamRequestCreateOrConnectWithoutTeamInput[]
    upsert?: teamRequestUpsertWithWhereUniqueWithoutTeamInput | teamRequestUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: teamRequestCreateManyTeamInputEnvelope
    set?: teamRequestWhereUniqueInput | teamRequestWhereUniqueInput[]
    disconnect?: teamRequestWhereUniqueInput | teamRequestWhereUniqueInput[]
    delete?: teamRequestWhereUniqueInput | teamRequestWhereUniqueInput[]
    connect?: teamRequestWhereUniqueInput | teamRequestWhereUniqueInput[]
    update?: teamRequestUpdateWithWhereUniqueWithoutTeamInput | teamRequestUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: teamRequestUpdateManyWithWhereWithoutTeamInput | teamRequestUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: teamRequestScalarWhereInput | teamRequestScalarWhereInput[]
  }

  export type ProjectCreateNestedManyWithoutHackathonInput = {
    create?: XOR<ProjectCreateWithoutHackathonInput, ProjectUncheckedCreateWithoutHackathonInput> | ProjectCreateWithoutHackathonInput[] | ProjectUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutHackathonInput | ProjectCreateOrConnectWithoutHackathonInput[]
    createMany?: ProjectCreateManyHackathonInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type HackathonRegistrationCreateNestedManyWithoutHackathonInput = {
    create?: XOR<HackathonRegistrationCreateWithoutHackathonInput, HackathonRegistrationUncheckedCreateWithoutHackathonInput> | HackathonRegistrationCreateWithoutHackathonInput[] | HackathonRegistrationUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: HackathonRegistrationCreateOrConnectWithoutHackathonInput | HackathonRegistrationCreateOrConnectWithoutHackathonInput[]
    createMany?: HackathonRegistrationCreateManyHackathonInputEnvelope
    connect?: HackathonRegistrationWhereUniqueInput | HackathonRegistrationWhereUniqueInput[]
  }

  export type JudgeCreateNestedManyWithoutHackathonInput = {
    create?: XOR<JudgeCreateWithoutHackathonInput, JudgeUncheckedCreateWithoutHackathonInput> | JudgeCreateWithoutHackathonInput[] | JudgeUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: JudgeCreateOrConnectWithoutHackathonInput | JudgeCreateOrConnectWithoutHackathonInput[]
    createMany?: JudgeCreateManyHackathonInputEnvelope
    connect?: JudgeWhereUniqueInput | JudgeWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutHackathonsInput = {
    create?: XOR<UserCreateWithoutHackathonsInput, UserUncheckedCreateWithoutHackathonsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHackathonsInput
    connect?: UserWhereUniqueInput
  }

  export type JudgeassessmentsCreateNestedManyWithoutHackathonInput = {
    create?: XOR<JudgeassessmentsCreateWithoutHackathonInput, JudgeassessmentsUncheckedCreateWithoutHackathonInput> | JudgeassessmentsCreateWithoutHackathonInput[] | JudgeassessmentsUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: JudgeassessmentsCreateOrConnectWithoutHackathonInput | JudgeassessmentsCreateOrConnectWithoutHackathonInput[]
    createMany?: JudgeassessmentsCreateManyHackathonInputEnvelope
    connect?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
  }

  export type HackathonSponsorsCreateNestedManyWithoutHackathonInput = {
    create?: XOR<HackathonSponsorsCreateWithoutHackathonInput, HackathonSponsorsUncheckedCreateWithoutHackathonInput> | HackathonSponsorsCreateWithoutHackathonInput[] | HackathonSponsorsUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: HackathonSponsorsCreateOrConnectWithoutHackathonInput | HackathonSponsorsCreateOrConnectWithoutHackathonInput[]
    createMany?: HackathonSponsorsCreateManyHackathonInputEnvelope
    connect?: HackathonSponsorsWhereUniqueInput | HackathonSponsorsWhereUniqueInput[]
  }

  export type HackathonSponsorsCreateNestedManyWithoutHackathonInput = {
    create?: XOR<HackathonSponsorsCreateWithoutHackathonInput, HackathonSponsorsUncheckedCreateWithoutHackathonInput> | HackathonSponsorsCreateWithoutHackathonInput[] | HackathonSponsorsUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: HackathonSponsorsCreateOrConnectWithoutHackathonInput | HackathonSponsorsCreateOrConnectWithoutHackathonInput[]
    createMany?: HackathonSponsorsCreateManyHackathonInputEnvelope
    connect?: HackathonSponsorsWhereUniqueInput | HackathonSponsorsWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutHackathonInput = {
    create?: XOR<ProjectCreateWithoutHackathonInput, ProjectUncheckedCreateWithoutHackathonInput> | ProjectCreateWithoutHackathonInput[] | ProjectUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutHackathonInput | ProjectCreateOrConnectWithoutHackathonInput[]
    createMany?: ProjectCreateManyHackathonInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type HackathonRegistrationUncheckedCreateNestedManyWithoutHackathonInput = {
    create?: XOR<HackathonRegistrationCreateWithoutHackathonInput, HackathonRegistrationUncheckedCreateWithoutHackathonInput> | HackathonRegistrationCreateWithoutHackathonInput[] | HackathonRegistrationUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: HackathonRegistrationCreateOrConnectWithoutHackathonInput | HackathonRegistrationCreateOrConnectWithoutHackathonInput[]
    createMany?: HackathonRegistrationCreateManyHackathonInputEnvelope
    connect?: HackathonRegistrationWhereUniqueInput | HackathonRegistrationWhereUniqueInput[]
  }

  export type JudgeUncheckedCreateNestedManyWithoutHackathonInput = {
    create?: XOR<JudgeCreateWithoutHackathonInput, JudgeUncheckedCreateWithoutHackathonInput> | JudgeCreateWithoutHackathonInput[] | JudgeUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: JudgeCreateOrConnectWithoutHackathonInput | JudgeCreateOrConnectWithoutHackathonInput[]
    createMany?: JudgeCreateManyHackathonInputEnvelope
    connect?: JudgeWhereUniqueInput | JudgeWhereUniqueInput[]
  }

  export type JudgeassessmentsUncheckedCreateNestedManyWithoutHackathonInput = {
    create?: XOR<JudgeassessmentsCreateWithoutHackathonInput, JudgeassessmentsUncheckedCreateWithoutHackathonInput> | JudgeassessmentsCreateWithoutHackathonInput[] | JudgeassessmentsUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: JudgeassessmentsCreateOrConnectWithoutHackathonInput | JudgeassessmentsCreateOrConnectWithoutHackathonInput[]
    createMany?: JudgeassessmentsCreateManyHackathonInputEnvelope
    connect?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
  }

  export type HackathonSponsorsUncheckedCreateNestedManyWithoutHackathonInput = {
    create?: XOR<HackathonSponsorsCreateWithoutHackathonInput, HackathonSponsorsUncheckedCreateWithoutHackathonInput> | HackathonSponsorsCreateWithoutHackathonInput[] | HackathonSponsorsUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: HackathonSponsorsCreateOrConnectWithoutHackathonInput | HackathonSponsorsCreateOrConnectWithoutHackathonInput[]
    createMany?: HackathonSponsorsCreateManyHackathonInputEnvelope
    connect?: HackathonSponsorsWhereUniqueInput | HackathonSponsorsWhereUniqueInput[]
  }

  export type HackathonSponsorsUncheckedCreateNestedManyWithoutHackathonInput = {
    create?: XOR<HackathonSponsorsCreateWithoutHackathonInput, HackathonSponsorsUncheckedCreateWithoutHackathonInput> | HackathonSponsorsCreateWithoutHackathonInput[] | HackathonSponsorsUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: HackathonSponsorsCreateOrConnectWithoutHackathonInput | HackathonSponsorsCreateOrConnectWithoutHackathonInput[]
    createMany?: HackathonSponsorsCreateManyHackathonInputEnvelope
    connect?: HackathonSponsorsWhereUniqueInput | HackathonSponsorsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProjectUpdateManyWithoutHackathonNestedInput = {
    create?: XOR<ProjectCreateWithoutHackathonInput, ProjectUncheckedCreateWithoutHackathonInput> | ProjectCreateWithoutHackathonInput[] | ProjectUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutHackathonInput | ProjectCreateOrConnectWithoutHackathonInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutHackathonInput | ProjectUpsertWithWhereUniqueWithoutHackathonInput[]
    createMany?: ProjectCreateManyHackathonInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutHackathonInput | ProjectUpdateWithWhereUniqueWithoutHackathonInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutHackathonInput | ProjectUpdateManyWithWhereWithoutHackathonInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type HackathonRegistrationUpdateManyWithoutHackathonNestedInput = {
    create?: XOR<HackathonRegistrationCreateWithoutHackathonInput, HackathonRegistrationUncheckedCreateWithoutHackathonInput> | HackathonRegistrationCreateWithoutHackathonInput[] | HackathonRegistrationUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: HackathonRegistrationCreateOrConnectWithoutHackathonInput | HackathonRegistrationCreateOrConnectWithoutHackathonInput[]
    upsert?: HackathonRegistrationUpsertWithWhereUniqueWithoutHackathonInput | HackathonRegistrationUpsertWithWhereUniqueWithoutHackathonInput[]
    createMany?: HackathonRegistrationCreateManyHackathonInputEnvelope
    set?: HackathonRegistrationWhereUniqueInput | HackathonRegistrationWhereUniqueInput[]
    disconnect?: HackathonRegistrationWhereUniqueInput | HackathonRegistrationWhereUniqueInput[]
    delete?: HackathonRegistrationWhereUniqueInput | HackathonRegistrationWhereUniqueInput[]
    connect?: HackathonRegistrationWhereUniqueInput | HackathonRegistrationWhereUniqueInput[]
    update?: HackathonRegistrationUpdateWithWhereUniqueWithoutHackathonInput | HackathonRegistrationUpdateWithWhereUniqueWithoutHackathonInput[]
    updateMany?: HackathonRegistrationUpdateManyWithWhereWithoutHackathonInput | HackathonRegistrationUpdateManyWithWhereWithoutHackathonInput[]
    deleteMany?: HackathonRegistrationScalarWhereInput | HackathonRegistrationScalarWhereInput[]
  }

  export type JudgeUpdateManyWithoutHackathonNestedInput = {
    create?: XOR<JudgeCreateWithoutHackathonInput, JudgeUncheckedCreateWithoutHackathonInput> | JudgeCreateWithoutHackathonInput[] | JudgeUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: JudgeCreateOrConnectWithoutHackathonInput | JudgeCreateOrConnectWithoutHackathonInput[]
    upsert?: JudgeUpsertWithWhereUniqueWithoutHackathonInput | JudgeUpsertWithWhereUniqueWithoutHackathonInput[]
    createMany?: JudgeCreateManyHackathonInputEnvelope
    set?: JudgeWhereUniqueInput | JudgeWhereUniqueInput[]
    disconnect?: JudgeWhereUniqueInput | JudgeWhereUniqueInput[]
    delete?: JudgeWhereUniqueInput | JudgeWhereUniqueInput[]
    connect?: JudgeWhereUniqueInput | JudgeWhereUniqueInput[]
    update?: JudgeUpdateWithWhereUniqueWithoutHackathonInput | JudgeUpdateWithWhereUniqueWithoutHackathonInput[]
    updateMany?: JudgeUpdateManyWithWhereWithoutHackathonInput | JudgeUpdateManyWithWhereWithoutHackathonInput[]
    deleteMany?: JudgeScalarWhereInput | JudgeScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutHackathonsNestedInput = {
    create?: XOR<UserCreateWithoutHackathonsInput, UserUncheckedCreateWithoutHackathonsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHackathonsInput
    upsert?: UserUpsertWithoutHackathonsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHackathonsInput, UserUpdateWithoutHackathonsInput>, UserUncheckedUpdateWithoutHackathonsInput>
  }

  export type JudgeassessmentsUpdateManyWithoutHackathonNestedInput = {
    create?: XOR<JudgeassessmentsCreateWithoutHackathonInput, JudgeassessmentsUncheckedCreateWithoutHackathonInput> | JudgeassessmentsCreateWithoutHackathonInput[] | JudgeassessmentsUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: JudgeassessmentsCreateOrConnectWithoutHackathonInput | JudgeassessmentsCreateOrConnectWithoutHackathonInput[]
    upsert?: JudgeassessmentsUpsertWithWhereUniqueWithoutHackathonInput | JudgeassessmentsUpsertWithWhereUniqueWithoutHackathonInput[]
    createMany?: JudgeassessmentsCreateManyHackathonInputEnvelope
    set?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
    disconnect?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
    delete?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
    connect?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
    update?: JudgeassessmentsUpdateWithWhereUniqueWithoutHackathonInput | JudgeassessmentsUpdateWithWhereUniqueWithoutHackathonInput[]
    updateMany?: JudgeassessmentsUpdateManyWithWhereWithoutHackathonInput | JudgeassessmentsUpdateManyWithWhereWithoutHackathonInput[]
    deleteMany?: JudgeassessmentsScalarWhereInput | JudgeassessmentsScalarWhereInput[]
  }

  export type HackathonSponsorsUpdateManyWithoutHackathonNestedInput = {
    create?: XOR<HackathonSponsorsCreateWithoutHackathonInput, HackathonSponsorsUncheckedCreateWithoutHackathonInput> | HackathonSponsorsCreateWithoutHackathonInput[] | HackathonSponsorsUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: HackathonSponsorsCreateOrConnectWithoutHackathonInput | HackathonSponsorsCreateOrConnectWithoutHackathonInput[]
    upsert?: HackathonSponsorsUpsertWithWhereUniqueWithoutHackathonInput | HackathonSponsorsUpsertWithWhereUniqueWithoutHackathonInput[]
    createMany?: HackathonSponsorsCreateManyHackathonInputEnvelope
    set?: HackathonSponsorsWhereUniqueInput | HackathonSponsorsWhereUniqueInput[]
    disconnect?: HackathonSponsorsWhereUniqueInput | HackathonSponsorsWhereUniqueInput[]
    delete?: HackathonSponsorsWhereUniqueInput | HackathonSponsorsWhereUniqueInput[]
    connect?: HackathonSponsorsWhereUniqueInput | HackathonSponsorsWhereUniqueInput[]
    update?: HackathonSponsorsUpdateWithWhereUniqueWithoutHackathonInput | HackathonSponsorsUpdateWithWhereUniqueWithoutHackathonInput[]
    updateMany?: HackathonSponsorsUpdateManyWithWhereWithoutHackathonInput | HackathonSponsorsUpdateManyWithWhereWithoutHackathonInput[]
    deleteMany?: HackathonSponsorsScalarWhereInput | HackathonSponsorsScalarWhereInput[]
  }

  export type HackathonSponsorsUpdateManyWithoutHackathonNestedInput = {
    create?: XOR<HackathonSponsorsCreateWithoutHackathonInput, HackathonSponsorsUncheckedCreateWithoutHackathonInput> | HackathonSponsorsCreateWithoutHackathonInput[] | HackathonSponsorsUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: HackathonSponsorsCreateOrConnectWithoutHackathonInput | HackathonSponsorsCreateOrConnectWithoutHackathonInput[]
    upsert?: HackathonSponsorsUpsertWithWhereUniqueWithoutHackathonInput | HackathonSponsorsUpsertWithWhereUniqueWithoutHackathonInput[]
    createMany?: HackathonSponsorsCreateManyHackathonInputEnvelope
    set?: HackathonSponsorsWhereUniqueInput | HackathonSponsorsWhereUniqueInput[]
    disconnect?: HackathonSponsorsWhereUniqueInput | HackathonSponsorsWhereUniqueInput[]
    delete?: HackathonSponsorsWhereUniqueInput | HackathonSponsorsWhereUniqueInput[]
    connect?: HackathonSponsorsWhereUniqueInput | HackathonSponsorsWhereUniqueInput[]
    update?: HackathonSponsorsUpdateWithWhereUniqueWithoutHackathonInput | HackathonSponsorsUpdateWithWhereUniqueWithoutHackathonInput[]
    updateMany?: HackathonSponsorsUpdateManyWithWhereWithoutHackathonInput | HackathonSponsorsUpdateManyWithWhereWithoutHackathonInput[]
    deleteMany?: HackathonSponsorsScalarWhereInput | HackathonSponsorsScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutHackathonNestedInput = {
    create?: XOR<ProjectCreateWithoutHackathonInput, ProjectUncheckedCreateWithoutHackathonInput> | ProjectCreateWithoutHackathonInput[] | ProjectUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutHackathonInput | ProjectCreateOrConnectWithoutHackathonInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutHackathonInput | ProjectUpsertWithWhereUniqueWithoutHackathonInput[]
    createMany?: ProjectCreateManyHackathonInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutHackathonInput | ProjectUpdateWithWhereUniqueWithoutHackathonInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutHackathonInput | ProjectUpdateManyWithWhereWithoutHackathonInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type HackathonRegistrationUncheckedUpdateManyWithoutHackathonNestedInput = {
    create?: XOR<HackathonRegistrationCreateWithoutHackathonInput, HackathonRegistrationUncheckedCreateWithoutHackathonInput> | HackathonRegistrationCreateWithoutHackathonInput[] | HackathonRegistrationUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: HackathonRegistrationCreateOrConnectWithoutHackathonInput | HackathonRegistrationCreateOrConnectWithoutHackathonInput[]
    upsert?: HackathonRegistrationUpsertWithWhereUniqueWithoutHackathonInput | HackathonRegistrationUpsertWithWhereUniqueWithoutHackathonInput[]
    createMany?: HackathonRegistrationCreateManyHackathonInputEnvelope
    set?: HackathonRegistrationWhereUniqueInput | HackathonRegistrationWhereUniqueInput[]
    disconnect?: HackathonRegistrationWhereUniqueInput | HackathonRegistrationWhereUniqueInput[]
    delete?: HackathonRegistrationWhereUniqueInput | HackathonRegistrationWhereUniqueInput[]
    connect?: HackathonRegistrationWhereUniqueInput | HackathonRegistrationWhereUniqueInput[]
    update?: HackathonRegistrationUpdateWithWhereUniqueWithoutHackathonInput | HackathonRegistrationUpdateWithWhereUniqueWithoutHackathonInput[]
    updateMany?: HackathonRegistrationUpdateManyWithWhereWithoutHackathonInput | HackathonRegistrationUpdateManyWithWhereWithoutHackathonInput[]
    deleteMany?: HackathonRegistrationScalarWhereInput | HackathonRegistrationScalarWhereInput[]
  }

  export type JudgeUncheckedUpdateManyWithoutHackathonNestedInput = {
    create?: XOR<JudgeCreateWithoutHackathonInput, JudgeUncheckedCreateWithoutHackathonInput> | JudgeCreateWithoutHackathonInput[] | JudgeUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: JudgeCreateOrConnectWithoutHackathonInput | JudgeCreateOrConnectWithoutHackathonInput[]
    upsert?: JudgeUpsertWithWhereUniqueWithoutHackathonInput | JudgeUpsertWithWhereUniqueWithoutHackathonInput[]
    createMany?: JudgeCreateManyHackathonInputEnvelope
    set?: JudgeWhereUniqueInput | JudgeWhereUniqueInput[]
    disconnect?: JudgeWhereUniqueInput | JudgeWhereUniqueInput[]
    delete?: JudgeWhereUniqueInput | JudgeWhereUniqueInput[]
    connect?: JudgeWhereUniqueInput | JudgeWhereUniqueInput[]
    update?: JudgeUpdateWithWhereUniqueWithoutHackathonInput | JudgeUpdateWithWhereUniqueWithoutHackathonInput[]
    updateMany?: JudgeUpdateManyWithWhereWithoutHackathonInput | JudgeUpdateManyWithWhereWithoutHackathonInput[]
    deleteMany?: JudgeScalarWhereInput | JudgeScalarWhereInput[]
  }

  export type JudgeassessmentsUncheckedUpdateManyWithoutHackathonNestedInput = {
    create?: XOR<JudgeassessmentsCreateWithoutHackathonInput, JudgeassessmentsUncheckedCreateWithoutHackathonInput> | JudgeassessmentsCreateWithoutHackathonInput[] | JudgeassessmentsUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: JudgeassessmentsCreateOrConnectWithoutHackathonInput | JudgeassessmentsCreateOrConnectWithoutHackathonInput[]
    upsert?: JudgeassessmentsUpsertWithWhereUniqueWithoutHackathonInput | JudgeassessmentsUpsertWithWhereUniqueWithoutHackathonInput[]
    createMany?: JudgeassessmentsCreateManyHackathonInputEnvelope
    set?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
    disconnect?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
    delete?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
    connect?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
    update?: JudgeassessmentsUpdateWithWhereUniqueWithoutHackathonInput | JudgeassessmentsUpdateWithWhereUniqueWithoutHackathonInput[]
    updateMany?: JudgeassessmentsUpdateManyWithWhereWithoutHackathonInput | JudgeassessmentsUpdateManyWithWhereWithoutHackathonInput[]
    deleteMany?: JudgeassessmentsScalarWhereInput | JudgeassessmentsScalarWhereInput[]
  }

  export type HackathonSponsorsUncheckedUpdateManyWithoutHackathonNestedInput = {
    create?: XOR<HackathonSponsorsCreateWithoutHackathonInput, HackathonSponsorsUncheckedCreateWithoutHackathonInput> | HackathonSponsorsCreateWithoutHackathonInput[] | HackathonSponsorsUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: HackathonSponsorsCreateOrConnectWithoutHackathonInput | HackathonSponsorsCreateOrConnectWithoutHackathonInput[]
    upsert?: HackathonSponsorsUpsertWithWhereUniqueWithoutHackathonInput | HackathonSponsorsUpsertWithWhereUniqueWithoutHackathonInput[]
    createMany?: HackathonSponsorsCreateManyHackathonInputEnvelope
    set?: HackathonSponsorsWhereUniqueInput | HackathonSponsorsWhereUniqueInput[]
    disconnect?: HackathonSponsorsWhereUniqueInput | HackathonSponsorsWhereUniqueInput[]
    delete?: HackathonSponsorsWhereUniqueInput | HackathonSponsorsWhereUniqueInput[]
    connect?: HackathonSponsorsWhereUniqueInput | HackathonSponsorsWhereUniqueInput[]
    update?: HackathonSponsorsUpdateWithWhereUniqueWithoutHackathonInput | HackathonSponsorsUpdateWithWhereUniqueWithoutHackathonInput[]
    updateMany?: HackathonSponsorsUpdateManyWithWhereWithoutHackathonInput | HackathonSponsorsUpdateManyWithWhereWithoutHackathonInput[]
    deleteMany?: HackathonSponsorsScalarWhereInput | HackathonSponsorsScalarWhereInput[]
  }

  export type HackathonSponsorsUncheckedUpdateManyWithoutHackathonNestedInput = {
    create?: XOR<HackathonSponsorsCreateWithoutHackathonInput, HackathonSponsorsUncheckedCreateWithoutHackathonInput> | HackathonSponsorsCreateWithoutHackathonInput[] | HackathonSponsorsUncheckedCreateWithoutHackathonInput[]
    connectOrCreate?: HackathonSponsorsCreateOrConnectWithoutHackathonInput | HackathonSponsorsCreateOrConnectWithoutHackathonInput[]
    upsert?: HackathonSponsorsUpsertWithWhereUniqueWithoutHackathonInput | HackathonSponsorsUpsertWithWhereUniqueWithoutHackathonInput[]
    createMany?: HackathonSponsorsCreateManyHackathonInputEnvelope
    set?: HackathonSponsorsWhereUniqueInput | HackathonSponsorsWhereUniqueInput[]
    disconnect?: HackathonSponsorsWhereUniqueInput | HackathonSponsorsWhereUniqueInput[]
    delete?: HackathonSponsorsWhereUniqueInput | HackathonSponsorsWhereUniqueInput[]
    connect?: HackathonSponsorsWhereUniqueInput | HackathonSponsorsWhereUniqueInput[]
    update?: HackathonSponsorsUpdateWithWhereUniqueWithoutHackathonInput | HackathonSponsorsUpdateWithWhereUniqueWithoutHackathonInput[]
    updateMany?: HackathonSponsorsUpdateManyWithWhereWithoutHackathonInput | HackathonSponsorsUpdateManyWithWhereWithoutHackathonInput[]
    deleteMany?: HackathonSponsorsScalarWhereInput | HackathonSponsorsScalarWhereInput[]
  }

  export type HackathonCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<HackathonCreateWithoutRegistrationsInput, HackathonUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: HackathonCreateOrConnectWithoutRegistrationsInput
    connect?: HackathonWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<TeamCreateWithoutRegistrationsInput, TeamUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutRegistrationsInput
    connect?: TeamWhereUniqueInput
  }

  export type HackathonUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<HackathonCreateWithoutRegistrationsInput, HackathonUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: HackathonCreateOrConnectWithoutRegistrationsInput
    upsert?: HackathonUpsertWithoutRegistrationsInput
    connect?: HackathonWhereUniqueInput
    update?: XOR<XOR<HackathonUpdateToOneWithWhereWithoutRegistrationsInput, HackathonUpdateWithoutRegistrationsInput>, HackathonUncheckedUpdateWithoutRegistrationsInput>
  }

  export type TeamUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<TeamCreateWithoutRegistrationsInput, TeamUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutRegistrationsInput
    upsert?: TeamUpsertWithoutRegistrationsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutRegistrationsInput, TeamUpdateWithoutRegistrationsInput>, TeamUncheckedUpdateWithoutRegistrationsInput>
  }

  export type HackathonCreateNestedOneWithoutProjectsInput = {
    create?: XOR<HackathonCreateWithoutProjectsInput, HackathonUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: HackathonCreateOrConnectWithoutProjectsInput
    connect?: HackathonWhereUniqueInput
  }

  export type JudgeassessmentsCreateNestedManyWithoutProjectInput = {
    create?: XOR<JudgeassessmentsCreateWithoutProjectInput, JudgeassessmentsUncheckedCreateWithoutProjectInput> | JudgeassessmentsCreateWithoutProjectInput[] | JudgeassessmentsUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: JudgeassessmentsCreateOrConnectWithoutProjectInput | JudgeassessmentsCreateOrConnectWithoutProjectInput[]
    createMany?: JudgeassessmentsCreateManyProjectInputEnvelope
    connect?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
  }

  export type TeamCreateNestedOneWithoutProjectsInput = {
    create?: XOR<TeamCreateWithoutProjectsInput, TeamUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutProjectsInput
    connect?: TeamWhereUniqueInput
  }

  export type JudgeassessmentsUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<JudgeassessmentsCreateWithoutProjectInput, JudgeassessmentsUncheckedCreateWithoutProjectInput> | JudgeassessmentsCreateWithoutProjectInput[] | JudgeassessmentsUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: JudgeassessmentsCreateOrConnectWithoutProjectInput | JudgeassessmentsCreateOrConnectWithoutProjectInput[]
    createMany?: JudgeassessmentsCreateManyProjectInputEnvelope
    connect?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
  }

  export type HackathonUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<HackathonCreateWithoutProjectsInput, HackathonUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: HackathonCreateOrConnectWithoutProjectsInput
    upsert?: HackathonUpsertWithoutProjectsInput
    connect?: HackathonWhereUniqueInput
    update?: XOR<XOR<HackathonUpdateToOneWithWhereWithoutProjectsInput, HackathonUpdateWithoutProjectsInput>, HackathonUncheckedUpdateWithoutProjectsInput>
  }

  export type JudgeassessmentsUpdateManyWithoutProjectNestedInput = {
    create?: XOR<JudgeassessmentsCreateWithoutProjectInput, JudgeassessmentsUncheckedCreateWithoutProjectInput> | JudgeassessmentsCreateWithoutProjectInput[] | JudgeassessmentsUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: JudgeassessmentsCreateOrConnectWithoutProjectInput | JudgeassessmentsCreateOrConnectWithoutProjectInput[]
    upsert?: JudgeassessmentsUpsertWithWhereUniqueWithoutProjectInput | JudgeassessmentsUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: JudgeassessmentsCreateManyProjectInputEnvelope
    set?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
    disconnect?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
    delete?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
    connect?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
    update?: JudgeassessmentsUpdateWithWhereUniqueWithoutProjectInput | JudgeassessmentsUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: JudgeassessmentsUpdateManyWithWhereWithoutProjectInput | JudgeassessmentsUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: JudgeassessmentsScalarWhereInput | JudgeassessmentsScalarWhereInput[]
  }

  export type TeamUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<TeamCreateWithoutProjectsInput, TeamUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutProjectsInput
    upsert?: TeamUpsertWithoutProjectsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutProjectsInput, TeamUpdateWithoutProjectsInput>, TeamUncheckedUpdateWithoutProjectsInput>
  }

  export type JudgeassessmentsUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<JudgeassessmentsCreateWithoutProjectInput, JudgeassessmentsUncheckedCreateWithoutProjectInput> | JudgeassessmentsCreateWithoutProjectInput[] | JudgeassessmentsUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: JudgeassessmentsCreateOrConnectWithoutProjectInput | JudgeassessmentsCreateOrConnectWithoutProjectInput[]
    upsert?: JudgeassessmentsUpsertWithWhereUniqueWithoutProjectInput | JudgeassessmentsUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: JudgeassessmentsCreateManyProjectInputEnvelope
    set?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
    disconnect?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
    delete?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
    connect?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
    update?: JudgeassessmentsUpdateWithWhereUniqueWithoutProjectInput | JudgeassessmentsUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: JudgeassessmentsUpdateManyWithWhereWithoutProjectInput | JudgeassessmentsUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: JudgeassessmentsScalarWhereInput | JudgeassessmentsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutJudgeInput = {
    create?: XOR<UserCreateWithoutJudgeInput, UserUncheckedCreateWithoutJudgeInput>
    connectOrCreate?: UserCreateOrConnectWithoutJudgeInput
    connect?: UserWhereUniqueInput
  }

  export type HackathonCreateNestedOneWithoutJudgeInput = {
    create?: XOR<HackathonCreateWithoutJudgeInput, HackathonUncheckedCreateWithoutJudgeInput>
    connectOrCreate?: HackathonCreateOrConnectWithoutJudgeInput
    connect?: HackathonWhereUniqueInput
  }

  export type JudgeassessmentsCreateNestedManyWithoutJudgeInput = {
    create?: XOR<JudgeassessmentsCreateWithoutJudgeInput, JudgeassessmentsUncheckedCreateWithoutJudgeInput> | JudgeassessmentsCreateWithoutJudgeInput[] | JudgeassessmentsUncheckedCreateWithoutJudgeInput[]
    connectOrCreate?: JudgeassessmentsCreateOrConnectWithoutJudgeInput | JudgeassessmentsCreateOrConnectWithoutJudgeInput[]
    createMany?: JudgeassessmentsCreateManyJudgeInputEnvelope
    connect?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
  }

  export type JudgeassessmentsUncheckedCreateNestedManyWithoutJudgeInput = {
    create?: XOR<JudgeassessmentsCreateWithoutJudgeInput, JudgeassessmentsUncheckedCreateWithoutJudgeInput> | JudgeassessmentsCreateWithoutJudgeInput[] | JudgeassessmentsUncheckedCreateWithoutJudgeInput[]
    connectOrCreate?: JudgeassessmentsCreateOrConnectWithoutJudgeInput | JudgeassessmentsCreateOrConnectWithoutJudgeInput[]
    createMany?: JudgeassessmentsCreateManyJudgeInputEnvelope
    connect?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutJudgeNestedInput = {
    create?: XOR<UserCreateWithoutJudgeInput, UserUncheckedCreateWithoutJudgeInput>
    connectOrCreate?: UserCreateOrConnectWithoutJudgeInput
    upsert?: UserUpsertWithoutJudgeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJudgeInput, UserUpdateWithoutJudgeInput>, UserUncheckedUpdateWithoutJudgeInput>
  }

  export type HackathonUpdateOneRequiredWithoutJudgeNestedInput = {
    create?: XOR<HackathonCreateWithoutJudgeInput, HackathonUncheckedCreateWithoutJudgeInput>
    connectOrCreate?: HackathonCreateOrConnectWithoutJudgeInput
    upsert?: HackathonUpsertWithoutJudgeInput
    connect?: HackathonWhereUniqueInput
    update?: XOR<XOR<HackathonUpdateToOneWithWhereWithoutJudgeInput, HackathonUpdateWithoutJudgeInput>, HackathonUncheckedUpdateWithoutJudgeInput>
  }

  export type JudgeassessmentsUpdateManyWithoutJudgeNestedInput = {
    create?: XOR<JudgeassessmentsCreateWithoutJudgeInput, JudgeassessmentsUncheckedCreateWithoutJudgeInput> | JudgeassessmentsCreateWithoutJudgeInput[] | JudgeassessmentsUncheckedCreateWithoutJudgeInput[]
    connectOrCreate?: JudgeassessmentsCreateOrConnectWithoutJudgeInput | JudgeassessmentsCreateOrConnectWithoutJudgeInput[]
    upsert?: JudgeassessmentsUpsertWithWhereUniqueWithoutJudgeInput | JudgeassessmentsUpsertWithWhereUniqueWithoutJudgeInput[]
    createMany?: JudgeassessmentsCreateManyJudgeInputEnvelope
    set?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
    disconnect?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
    delete?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
    connect?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
    update?: JudgeassessmentsUpdateWithWhereUniqueWithoutJudgeInput | JudgeassessmentsUpdateWithWhereUniqueWithoutJudgeInput[]
    updateMany?: JudgeassessmentsUpdateManyWithWhereWithoutJudgeInput | JudgeassessmentsUpdateManyWithWhereWithoutJudgeInput[]
    deleteMany?: JudgeassessmentsScalarWhereInput | JudgeassessmentsScalarWhereInput[]
  }

  export type JudgeassessmentsUncheckedUpdateManyWithoutJudgeNestedInput = {
    create?: XOR<JudgeassessmentsCreateWithoutJudgeInput, JudgeassessmentsUncheckedCreateWithoutJudgeInput> | JudgeassessmentsCreateWithoutJudgeInput[] | JudgeassessmentsUncheckedCreateWithoutJudgeInput[]
    connectOrCreate?: JudgeassessmentsCreateOrConnectWithoutJudgeInput | JudgeassessmentsCreateOrConnectWithoutJudgeInput[]
    upsert?: JudgeassessmentsUpsertWithWhereUniqueWithoutJudgeInput | JudgeassessmentsUpsertWithWhereUniqueWithoutJudgeInput[]
    createMany?: JudgeassessmentsCreateManyJudgeInputEnvelope
    set?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
    disconnect?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
    delete?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
    connect?: JudgeassessmentsWhereUniqueInput | JudgeassessmentsWhereUniqueInput[]
    update?: JudgeassessmentsUpdateWithWhereUniqueWithoutJudgeInput | JudgeassessmentsUpdateWithWhereUniqueWithoutJudgeInput[]
    updateMany?: JudgeassessmentsUpdateManyWithWhereWithoutJudgeInput | JudgeassessmentsUpdateManyWithWhereWithoutJudgeInput[]
    deleteMany?: JudgeassessmentsScalarWhereInput | JudgeassessmentsScalarWhereInput[]
  }

  export type HackathonCreateNestedOneWithoutJudgeassessmentsInput = {
    create?: XOR<HackathonCreateWithoutJudgeassessmentsInput, HackathonUncheckedCreateWithoutJudgeassessmentsInput>
    connectOrCreate?: HackathonCreateOrConnectWithoutJudgeassessmentsInput
    connect?: HackathonWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutJudgeassessmentsInput = {
    create?: XOR<ProjectCreateWithoutJudgeassessmentsInput, ProjectUncheckedCreateWithoutJudgeassessmentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutJudgeassessmentsInput
    connect?: ProjectWhereUniqueInput
  }

  export type JudgeCreateNestedOneWithoutJudgeassessmentsInput = {
    create?: XOR<JudgeCreateWithoutJudgeassessmentsInput, JudgeUncheckedCreateWithoutJudgeassessmentsInput>
    connectOrCreate?: JudgeCreateOrConnectWithoutJudgeassessmentsInput
    connect?: JudgeWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type HackathonUpdateOneRequiredWithoutJudgeassessmentsNestedInput = {
    create?: XOR<HackathonCreateWithoutJudgeassessmentsInput, HackathonUncheckedCreateWithoutJudgeassessmentsInput>
    connectOrCreate?: HackathonCreateOrConnectWithoutJudgeassessmentsInput
    upsert?: HackathonUpsertWithoutJudgeassessmentsInput
    connect?: HackathonWhereUniqueInput
    update?: XOR<XOR<HackathonUpdateToOneWithWhereWithoutJudgeassessmentsInput, HackathonUpdateWithoutJudgeassessmentsInput>, HackathonUncheckedUpdateWithoutJudgeassessmentsInput>
  }

  export type ProjectUpdateOneRequiredWithoutJudgeassessmentsNestedInput = {
    create?: XOR<ProjectCreateWithoutJudgeassessmentsInput, ProjectUncheckedCreateWithoutJudgeassessmentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutJudgeassessmentsInput
    upsert?: ProjectUpsertWithoutJudgeassessmentsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutJudgeassessmentsInput, ProjectUpdateWithoutJudgeassessmentsInput>, ProjectUncheckedUpdateWithoutJudgeassessmentsInput>
  }

  export type JudgeUpdateOneRequiredWithoutJudgeassessmentsNestedInput = {
    create?: XOR<JudgeCreateWithoutJudgeassessmentsInput, JudgeUncheckedCreateWithoutJudgeassessmentsInput>
    connectOrCreate?: JudgeCreateOrConnectWithoutJudgeassessmentsInput
    upsert?: JudgeUpsertWithoutJudgeassessmentsInput
    connect?: JudgeWhereUniqueInput
    update?: XOR<XOR<JudgeUpdateToOneWithWhereWithoutJudgeassessmentsInput, JudgeUpdateWithoutJudgeassessmentsInput>, JudgeUncheckedUpdateWithoutJudgeassessmentsInput>
  }

  export type HackathonCreateNestedOneWithoutHackathonSponsorsInput = {
    create?: XOR<HackathonCreateWithoutHackathonSponsorsInput, HackathonUncheckedCreateWithoutHackathonSponsorsInput>
    connectOrCreate?: HackathonCreateOrConnectWithoutHackathonSponsorsInput
    connect?: HackathonWhereUniqueInput
  }

  export type HackathonUpdateOneRequiredWithoutHackathonSponsorsNestedInput = {
    create?: XOR<HackathonCreateWithoutHackathonSponsorsInput, HackathonUncheckedCreateWithoutHackathonSponsorsInput>
    connectOrCreate?: HackathonCreateOrConnectWithoutHackathonSponsorsInput
    upsert?: HackathonUpsertWithoutHackathonSponsorsInput
    connect?: HackathonWhereUniqueInput
    update?: XOR<XOR<HackathonUpdateToOneWithWhereWithoutHackathonSponsorsInput, HackathonUpdateWithoutHackathonSponsorsInput>, HackathonUncheckedUpdateWithoutHackathonSponsorsInput>
  }

  export type TeamCreateNestedOneWithoutTeamMembersInput = {
    create?: XOR<TeamCreateWithoutTeamMembersInput, TeamUncheckedCreateWithoutTeamMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTeamMembersInput
    connect?: TeamWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTeamMembersInput = {
    create?: XOR<UserCreateWithoutTeamMembersInput, UserUncheckedCreateWithoutTeamMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamMembersInput
    connect?: UserWhereUniqueInput
  }

  export type TeamUpdateOneRequiredWithoutTeamMembersNestedInput = {
    create?: XOR<TeamCreateWithoutTeamMembersInput, TeamUncheckedCreateWithoutTeamMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTeamMembersInput
    upsert?: TeamUpsertWithoutTeamMembersInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutTeamMembersInput, TeamUpdateWithoutTeamMembersInput>, TeamUncheckedUpdateWithoutTeamMembersInput>
  }

  export type UserUpdateOneRequiredWithoutTeamMembersNestedInput = {
    create?: XOR<UserCreateWithoutTeamMembersInput, UserUncheckedCreateWithoutTeamMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamMembersInput
    upsert?: UserUpsertWithoutTeamMembersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeamMembersInput, UserUpdateWithoutTeamMembersInput>, UserUncheckedUpdateWithoutTeamMembersInput>
  }

  export type TeamCreateNestedOneWithoutTeamRequestInput = {
    create?: XOR<TeamCreateWithoutTeamRequestInput, TeamUncheckedCreateWithoutTeamRequestInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTeamRequestInput
    connect?: TeamWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTeamRequestInput = {
    create?: XOR<UserCreateWithoutTeamRequestInput, UserUncheckedCreateWithoutTeamRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamRequestInput
    connect?: UserWhereUniqueInput
  }

  export type TeamUpdateOneRequiredWithoutTeamRequestNestedInput = {
    create?: XOR<TeamCreateWithoutTeamRequestInput, TeamUncheckedCreateWithoutTeamRequestInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTeamRequestInput
    upsert?: TeamUpsertWithoutTeamRequestInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutTeamRequestInput, TeamUpdateWithoutTeamRequestInput>, TeamUncheckedUpdateWithoutTeamRequestInput>
  }

  export type UserUpdateOneRequiredWithoutTeamRequestNestedInput = {
    create?: XOR<UserCreateWithoutTeamRequestInput, UserUncheckedCreateWithoutTeamRequestInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamRequestInput
    upsert?: UserUpsertWithoutTeamRequestInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeamRequestInput, UserUpdateWithoutTeamRequestInput>, UserUncheckedUpdateWithoutTeamRequestInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    gamertag: string
    role?: $Enums.Role
    emailVerified?: boolean | null
    image?: string | null
    isVerified?: boolean | null
    lightningAddress?: string | null
    publicBio?: string | null
    publicStaticCharge?: string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonCreateNestedManyWithoutCreatorInput
    teams?: TeamCreateNestedManyWithoutCreatorInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    judge?: JudgeCreateNestedManyWithoutUserInput
    teamMembers?: teamMembersCreateNestedManyWithoutUserInput
    teamRequest?: teamRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    gamertag: string
    role?: $Enums.Role
    emailVerified?: boolean | null
    image?: string | null
    isVerified?: boolean | null
    lightningAddress?: string | null
    publicBio?: string | null
    publicStaticCharge?: string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonUncheckedCreateNestedManyWithoutCreatorInput
    teams?: TeamUncheckedCreateNestedManyWithoutCreatorInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    judge?: JudgeUncheckedCreateNestedManyWithoutUserInput
    teamMembers?: teamMembersUncheckedCreateNestedManyWithoutUserInput
    teamRequest?: teamRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lightningAddress?: NullableStringFieldUpdateOperationsInput | string | null
    publicBio?: NullableStringFieldUpdateOperationsInput | string | null
    publicStaticCharge?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonUpdateManyWithoutCreatorNestedInput
    teams?: TeamUpdateManyWithoutCreatorNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    judge?: JudgeUpdateManyWithoutUserNestedInput
    teamMembers?: teamMembersUpdateManyWithoutUserNestedInput
    teamRequest?: teamRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lightningAddress?: NullableStringFieldUpdateOperationsInput | string | null
    publicBio?: NullableStringFieldUpdateOperationsInput | string | null
    publicStaticCharge?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonUncheckedUpdateManyWithoutCreatorNestedInput
    teams?: TeamUncheckedUpdateManyWithoutCreatorNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    judge?: JudgeUncheckedUpdateManyWithoutUserNestedInput
    teamMembers?: teamMembersUncheckedUpdateManyWithoutUserNestedInput
    teamRequest?: teamRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    gamertag: string
    role?: $Enums.Role
    emailVerified?: boolean | null
    image?: string | null
    isVerified?: boolean | null
    lightningAddress?: string | null
    publicBio?: string | null
    publicStaticCharge?: string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonCreateNestedManyWithoutCreatorInput
    teams?: TeamCreateNestedManyWithoutCreatorInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    judge?: JudgeCreateNestedManyWithoutUserInput
    teamMembers?: teamMembersCreateNestedManyWithoutUserInput
    teamRequest?: teamRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    gamertag: string
    role?: $Enums.Role
    emailVerified?: boolean | null
    image?: string | null
    isVerified?: boolean | null
    lightningAddress?: string | null
    publicBio?: string | null
    publicStaticCharge?: string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonUncheckedCreateNestedManyWithoutCreatorInput
    teams?: TeamUncheckedCreateNestedManyWithoutCreatorInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    judge?: JudgeUncheckedCreateNestedManyWithoutUserInput
    teamMembers?: teamMembersUncheckedCreateNestedManyWithoutUserInput
    teamRequest?: teamRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lightningAddress?: NullableStringFieldUpdateOperationsInput | string | null
    publicBio?: NullableStringFieldUpdateOperationsInput | string | null
    publicStaticCharge?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonUpdateManyWithoutCreatorNestedInput
    teams?: TeamUpdateManyWithoutCreatorNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    judge?: JudgeUpdateManyWithoutUserNestedInput
    teamMembers?: teamMembersUpdateManyWithoutUserNestedInput
    teamRequest?: teamRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lightningAddress?: NullableStringFieldUpdateOperationsInput | string | null
    publicBio?: NullableStringFieldUpdateOperationsInput | string | null
    publicStaticCharge?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonUncheckedUpdateManyWithoutCreatorNestedInput
    teams?: TeamUncheckedUpdateManyWithoutCreatorNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    judge?: JudgeUncheckedUpdateManyWithoutUserNestedInput
    teamMembers?: teamMembersUncheckedUpdateManyWithoutUserNestedInput
    teamRequest?: teamRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HackathonCreateWithoutCreatorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    benefits: string
    rules: string
    judgingCriteria: string
    firstPlacePrize: string
    secondPlacePrize: string
    thirdPlacePrize: string
    published?: boolean
    startDate: string
    endDate: string
    projects?: ProjectCreateNestedManyWithoutHackathonInput
    registrations?: HackathonRegistrationCreateNestedManyWithoutHackathonInput
    judge?: JudgeCreateNestedManyWithoutHackathonInput
    judgeassessments?: JudgeassessmentsCreateNestedManyWithoutHackathonInput
    hackathonSponsors?: HackathonSponsorsCreateNestedManyWithoutHackathonInput
    hackathonSponsors?: HackathonSponsorsCreateNestedManyWithoutHackathonInput
  }

  export type HackathonUncheckedCreateWithoutCreatorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    benefits: string
    rules: string
    judgingCriteria: string
    firstPlacePrize: string
    secondPlacePrize: string
    thirdPlacePrize: string
    published?: boolean
    startDate: string
    endDate: string
    projects?: ProjectUncheckedCreateNestedManyWithoutHackathonInput
    registrations?: HackathonRegistrationUncheckedCreateNestedManyWithoutHackathonInput
    judge?: JudgeUncheckedCreateNestedManyWithoutHackathonInput
    judgeassessments?: JudgeassessmentsUncheckedCreateNestedManyWithoutHackathonInput
    hackathonSponsors?: HackathonSponsorsUncheckedCreateNestedManyWithoutHackathonInput
    hackathonSponsors?: HackathonSponsorsUncheckedCreateNestedManyWithoutHackathonInput
  }

  export type HackathonCreateOrConnectWithoutCreatorInput = {
    where: HackathonWhereUniqueInput
    create: XOR<HackathonCreateWithoutCreatorInput, HackathonUncheckedCreateWithoutCreatorInput>
  }

  export type HackathonCreateManyCreatorInputEnvelope = {
    data: HackathonCreateManyCreatorInput | HackathonCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type TeamCreateWithoutCreatorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    teamAvatar: string
    projects?: ProjectCreateNestedManyWithoutTeamInput
    registrations?: HackathonRegistrationCreateNestedManyWithoutTeamInput
    teamMembers?: teamMembersCreateNestedManyWithoutTeamInput
    teamRequest?: teamRequestCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutCreatorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    teamAvatar: string
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamInput
    registrations?: HackathonRegistrationUncheckedCreateNestedManyWithoutTeamInput
    teamMembers?: teamMembersUncheckedCreateNestedManyWithoutTeamInput
    teamRequest?: teamRequestUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutCreatorInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutCreatorInput, TeamUncheckedCreateWithoutCreatorInput>
  }

  export type TeamCreateManyCreatorInputEnvelope = {
    data: TeamCreateManyCreatorInput | TeamCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    refresh_token_expires_in?: number | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    refresh_token_expires_in?: number | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type JudgeCreateWithoutUserInput = {
    id?: string
    hackathon: HackathonCreateNestedOneWithoutJudgeInput
    judgeassessments?: JudgeassessmentsCreateNestedManyWithoutJudgeInput
  }

  export type JudgeUncheckedCreateWithoutUserInput = {
    id?: string
    hackathonId: string
    judgeassessments?: JudgeassessmentsUncheckedCreateNestedManyWithoutJudgeInput
  }

  export type JudgeCreateOrConnectWithoutUserInput = {
    where: JudgeWhereUniqueInput
    create: XOR<JudgeCreateWithoutUserInput, JudgeUncheckedCreateWithoutUserInput>
  }

  export type JudgeCreateManyUserInputEnvelope = {
    data: JudgeCreateManyUserInput | JudgeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type teamMembersCreateWithoutUserInput = {
    id?: string
    team: TeamCreateNestedOneWithoutTeamMembersInput
  }

  export type teamMembersUncheckedCreateWithoutUserInput = {
    id?: string
    teamId: string
  }

  export type teamMembersCreateOrConnectWithoutUserInput = {
    where: teamMembersWhereUniqueInput
    create: XOR<teamMembersCreateWithoutUserInput, teamMembersUncheckedCreateWithoutUserInput>
  }

  export type teamMembersCreateManyUserInputEnvelope = {
    data: teamMembersCreateManyUserInput | teamMembersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type teamRequestCreateWithoutUserInput = {
    id?: string
    teamName: string
    userSenderName: string
    userReceiver?: string | null
    state: boolean
    team: TeamCreateNestedOneWithoutTeamRequestInput
  }

  export type teamRequestUncheckedCreateWithoutUserInput = {
    id?: string
    teamId: string
    teamName: string
    userSenderName: string
    userReceiver?: string | null
    state: boolean
  }

  export type teamRequestCreateOrConnectWithoutUserInput = {
    where: teamRequestWhereUniqueInput
    create: XOR<teamRequestCreateWithoutUserInput, teamRequestUncheckedCreateWithoutUserInput>
  }

  export type teamRequestCreateManyUserInputEnvelope = {
    data: teamRequestCreateManyUserInput | teamRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HackathonUpsertWithWhereUniqueWithoutCreatorInput = {
    where: HackathonWhereUniqueInput
    update: XOR<HackathonUpdateWithoutCreatorInput, HackathonUncheckedUpdateWithoutCreatorInput>
    create: XOR<HackathonCreateWithoutCreatorInput, HackathonUncheckedCreateWithoutCreatorInput>
  }

  export type HackathonUpdateWithWhereUniqueWithoutCreatorInput = {
    where: HackathonWhereUniqueInput
    data: XOR<HackathonUpdateWithoutCreatorInput, HackathonUncheckedUpdateWithoutCreatorInput>
  }

  export type HackathonUpdateManyWithWhereWithoutCreatorInput = {
    where: HackathonScalarWhereInput
    data: XOR<HackathonUpdateManyMutationInput, HackathonUncheckedUpdateManyWithoutCreatorInput>
  }

  export type HackathonScalarWhereInput = {
    AND?: HackathonScalarWhereInput | HackathonScalarWhereInput[]
    OR?: HackathonScalarWhereInput[]
    NOT?: HackathonScalarWhereInput | HackathonScalarWhereInput[]
    id?: StringFilter<"Hackathon"> | string
    createdAt?: DateTimeFilter<"Hackathon"> | Date | string
    updatedAt?: DateTimeFilter<"Hackathon"> | Date | string
    title?: StringFilter<"Hackathon"> | string
    description?: StringFilter<"Hackathon"> | string
    benefits?: StringFilter<"Hackathon"> | string
    rules?: StringFilter<"Hackathon"> | string
    judgingCriteria?: StringFilter<"Hackathon"> | string
    firstPlacePrize?: StringFilter<"Hackathon"> | string
    secondPlacePrize?: StringFilter<"Hackathon"> | string
    thirdPlacePrize?: StringFilter<"Hackathon"> | string
    published?: BoolFilter<"Hackathon"> | boolean
    creatorId?: StringFilter<"Hackathon"> | string
    startDate?: StringFilter<"Hackathon"> | string
    endDate?: StringFilter<"Hackathon"> | string
  }

  export type TeamUpsertWithWhereUniqueWithoutCreatorInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutCreatorInput, TeamUncheckedUpdateWithoutCreatorInput>
    create: XOR<TeamCreateWithoutCreatorInput, TeamUncheckedCreateWithoutCreatorInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutCreatorInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutCreatorInput, TeamUncheckedUpdateWithoutCreatorInput>
  }

  export type TeamUpdateManyWithWhereWithoutCreatorInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutCreatorInput>
  }

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[]
    OR?: TeamScalarWhereInput[]
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[]
    id?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    name?: StringFilter<"Team"> | string
    description?: StringFilter<"Team"> | string
    teamAvatar?: StringFilter<"Team"> | string
    creatorId?: StringFilter<"Team"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type JudgeUpsertWithWhereUniqueWithoutUserInput = {
    where: JudgeWhereUniqueInput
    update: XOR<JudgeUpdateWithoutUserInput, JudgeUncheckedUpdateWithoutUserInput>
    create: XOR<JudgeCreateWithoutUserInput, JudgeUncheckedCreateWithoutUserInput>
  }

  export type JudgeUpdateWithWhereUniqueWithoutUserInput = {
    where: JudgeWhereUniqueInput
    data: XOR<JudgeUpdateWithoutUserInput, JudgeUncheckedUpdateWithoutUserInput>
  }

  export type JudgeUpdateManyWithWhereWithoutUserInput = {
    where: JudgeScalarWhereInput
    data: XOR<JudgeUpdateManyMutationInput, JudgeUncheckedUpdateManyWithoutUserInput>
  }

  export type JudgeScalarWhereInput = {
    AND?: JudgeScalarWhereInput | JudgeScalarWhereInput[]
    OR?: JudgeScalarWhereInput[]
    NOT?: JudgeScalarWhereInput | JudgeScalarWhereInput[]
    id?: StringFilter<"Judge"> | string
    userId?: StringFilter<"Judge"> | string
    judgeGamertag?: StringFilter<"Judge"> | string
    email?: StringFilter<"Judge"> | string
    judgeImage?: StringFilter<"Judge"> | string
    hackathonId?: StringFilter<"Judge"> | string
  }

  export type teamMembersUpsertWithWhereUniqueWithoutUserInput = {
    where: teamMembersWhereUniqueInput
    update: XOR<teamMembersUpdateWithoutUserInput, teamMembersUncheckedUpdateWithoutUserInput>
    create: XOR<teamMembersCreateWithoutUserInput, teamMembersUncheckedCreateWithoutUserInput>
  }

  export type teamMembersUpdateWithWhereUniqueWithoutUserInput = {
    where: teamMembersWhereUniqueInput
    data: XOR<teamMembersUpdateWithoutUserInput, teamMembersUncheckedUpdateWithoutUserInput>
  }

  export type teamMembersUpdateManyWithWhereWithoutUserInput = {
    where: teamMembersScalarWhereInput
    data: XOR<teamMembersUpdateManyMutationInput, teamMembersUncheckedUpdateManyWithoutUserInput>
  }

  export type teamMembersScalarWhereInput = {
    AND?: teamMembersScalarWhereInput | teamMembersScalarWhereInput[]
    OR?: teamMembersScalarWhereInput[]
    NOT?: teamMembersScalarWhereInput | teamMembersScalarWhereInput[]
    id?: StringFilter<"teamMembers"> | string
    teamId?: StringFilter<"teamMembers"> | string
    userId?: StringFilter<"teamMembers"> | string
  }

  export type teamRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: teamRequestWhereUniqueInput
    update: XOR<teamRequestUpdateWithoutUserInput, teamRequestUncheckedUpdateWithoutUserInput>
    create: XOR<teamRequestCreateWithoutUserInput, teamRequestUncheckedCreateWithoutUserInput>
  }

  export type teamRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: teamRequestWhereUniqueInput
    data: XOR<teamRequestUpdateWithoutUserInput, teamRequestUncheckedUpdateWithoutUserInput>
  }

  export type teamRequestUpdateManyWithWhereWithoutUserInput = {
    where: teamRequestScalarWhereInput
    data: XOR<teamRequestUpdateManyMutationInput, teamRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type teamRequestScalarWhereInput = {
    AND?: teamRequestScalarWhereInput | teamRequestScalarWhereInput[]
    OR?: teamRequestScalarWhereInput[]
    NOT?: teamRequestScalarWhereInput | teamRequestScalarWhereInput[]
    id?: StringFilter<"teamRequest"> | string
    teamId?: StringFilter<"teamRequest"> | string
    teamName?: StringFilter<"teamRequest"> | string
    userSender?: StringFilter<"teamRequest"> | string
    userSenderName?: StringFilter<"teamRequest"> | string
    userReceiver?: StringNullableFilter<"teamRequest"> | string | null
    state?: BoolFilter<"teamRequest"> | boolean
  }

  export type ProjectCreateWithoutTeamInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    loomLink: string
    pitchLink: string
    projectResourceLink: string
    comments?: string | null
    hackathon: HackathonCreateNestedOneWithoutProjectsInput
    judgeassessments?: JudgeassessmentsCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutTeamInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    loomLink: string
    pitchLink: string
    projectResourceLink: string
    comments?: string | null
    hackathonId: string
    judgeassessments?: JudgeassessmentsUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutTeamInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput>
  }

  export type ProjectCreateManyTeamInputEnvelope = {
    data: ProjectCreateManyTeamInput | ProjectCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type HackathonRegistrationCreateWithoutTeamInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hackathon: HackathonCreateNestedOneWithoutRegistrationsInput
  }

  export type HackathonRegistrationUncheckedCreateWithoutTeamInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hackathonId: string
  }

  export type HackathonRegistrationCreateOrConnectWithoutTeamInput = {
    where: HackathonRegistrationWhereUniqueInput
    create: XOR<HackathonRegistrationCreateWithoutTeamInput, HackathonRegistrationUncheckedCreateWithoutTeamInput>
  }

  export type HackathonRegistrationCreateManyTeamInputEnvelope = {
    data: HackathonRegistrationCreateManyTeamInput | HackathonRegistrationCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTeamsInput = {
    id?: string
    name?: string | null
    email: string
    gamertag: string
    role?: $Enums.Role
    emailVerified?: boolean | null
    image?: string | null
    isVerified?: boolean | null
    lightningAddress?: string | null
    publicBio?: string | null
    publicStaticCharge?: string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonCreateNestedManyWithoutCreatorInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    judge?: JudgeCreateNestedManyWithoutUserInput
    teamMembers?: teamMembersCreateNestedManyWithoutUserInput
    teamRequest?: teamRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamsInput = {
    id?: string
    name?: string | null
    email: string
    gamertag: string
    role?: $Enums.Role
    emailVerified?: boolean | null
    image?: string | null
    isVerified?: boolean | null
    lightningAddress?: string | null
    publicBio?: string | null
    publicStaticCharge?: string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonUncheckedCreateNestedManyWithoutCreatorInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    judge?: JudgeUncheckedCreateNestedManyWithoutUserInput
    teamMembers?: teamMembersUncheckedCreateNestedManyWithoutUserInput
    teamRequest?: teamRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
  }

  export type teamMembersCreateWithoutTeamInput = {
    id?: string
    user: UserCreateNestedOneWithoutTeamMembersInput
  }

  export type teamMembersUncheckedCreateWithoutTeamInput = {
    id?: string
    userId: string
  }

  export type teamMembersCreateOrConnectWithoutTeamInput = {
    where: teamMembersWhereUniqueInput
    create: XOR<teamMembersCreateWithoutTeamInput, teamMembersUncheckedCreateWithoutTeamInput>
  }

  export type teamMembersCreateManyTeamInputEnvelope = {
    data: teamMembersCreateManyTeamInput | teamMembersCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type teamRequestCreateWithoutTeamInput = {
    id?: string
    teamName: string
    userSenderName: string
    userReceiver?: string | null
    state: boolean
    user: UserCreateNestedOneWithoutTeamRequestInput
  }

  export type teamRequestUncheckedCreateWithoutTeamInput = {
    id?: string
    teamName: string
    userSender: string
    userSenderName: string
    userReceiver?: string | null
    state: boolean
  }

  export type teamRequestCreateOrConnectWithoutTeamInput = {
    where: teamRequestWhereUniqueInput
    create: XOR<teamRequestCreateWithoutTeamInput, teamRequestUncheckedCreateWithoutTeamInput>
  }

  export type teamRequestCreateManyTeamInputEnvelope = {
    data: teamRequestCreateManyTeamInput | teamRequestCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutTeamInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutTeamInput, ProjectUncheckedUpdateWithoutTeamInput>
    create: XOR<ProjectCreateWithoutTeamInput, ProjectUncheckedCreateWithoutTeamInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutTeamInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutTeamInput, ProjectUncheckedUpdateWithoutTeamInput>
  }

  export type ProjectUpdateManyWithWhereWithoutTeamInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutTeamInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    name?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    loomLink?: StringFilter<"Project"> | string
    pitchLink?: StringFilter<"Project"> | string
    projectResourceLink?: StringFilter<"Project"> | string
    comments?: StringNullableFilter<"Project"> | string | null
    hackathonId?: StringFilter<"Project"> | string
    teamId?: StringFilter<"Project"> | string
  }

  export type HackathonRegistrationUpsertWithWhereUniqueWithoutTeamInput = {
    where: HackathonRegistrationWhereUniqueInput
    update: XOR<HackathonRegistrationUpdateWithoutTeamInput, HackathonRegistrationUncheckedUpdateWithoutTeamInput>
    create: XOR<HackathonRegistrationCreateWithoutTeamInput, HackathonRegistrationUncheckedCreateWithoutTeamInput>
  }

  export type HackathonRegistrationUpdateWithWhereUniqueWithoutTeamInput = {
    where: HackathonRegistrationWhereUniqueInput
    data: XOR<HackathonRegistrationUpdateWithoutTeamInput, HackathonRegistrationUncheckedUpdateWithoutTeamInput>
  }

  export type HackathonRegistrationUpdateManyWithWhereWithoutTeamInput = {
    where: HackathonRegistrationScalarWhereInput
    data: XOR<HackathonRegistrationUpdateManyMutationInput, HackathonRegistrationUncheckedUpdateManyWithoutTeamInput>
  }

  export type HackathonRegistrationScalarWhereInput = {
    AND?: HackathonRegistrationScalarWhereInput | HackathonRegistrationScalarWhereInput[]
    OR?: HackathonRegistrationScalarWhereInput[]
    NOT?: HackathonRegistrationScalarWhereInput | HackathonRegistrationScalarWhereInput[]
    id?: StringFilter<"HackathonRegistration"> | string
    createdAt?: DateTimeFilter<"HackathonRegistration"> | Date | string
    updatedAt?: DateTimeFilter<"HackathonRegistration"> | Date | string
    hackathonId?: StringFilter<"HackathonRegistration"> | string
    teamId?: StringFilter<"HackathonRegistration"> | string
  }

  export type UserUpsertWithoutTeamsInput = {
    update: XOR<UserUpdateWithoutTeamsInput, UserUncheckedUpdateWithoutTeamsInput>
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeamsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeamsInput, UserUncheckedUpdateWithoutTeamsInput>
  }

  export type UserUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lightningAddress?: NullableStringFieldUpdateOperationsInput | string | null
    publicBio?: NullableStringFieldUpdateOperationsInput | string | null
    publicStaticCharge?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonUpdateManyWithoutCreatorNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    judge?: JudgeUpdateManyWithoutUserNestedInput
    teamMembers?: teamMembersUpdateManyWithoutUserNestedInput
    teamRequest?: teamRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lightningAddress?: NullableStringFieldUpdateOperationsInput | string | null
    publicBio?: NullableStringFieldUpdateOperationsInput | string | null
    publicStaticCharge?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonUncheckedUpdateManyWithoutCreatorNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    judge?: JudgeUncheckedUpdateManyWithoutUserNestedInput
    teamMembers?: teamMembersUncheckedUpdateManyWithoutUserNestedInput
    teamRequest?: teamRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type teamMembersUpsertWithWhereUniqueWithoutTeamInput = {
    where: teamMembersWhereUniqueInput
    update: XOR<teamMembersUpdateWithoutTeamInput, teamMembersUncheckedUpdateWithoutTeamInput>
    create: XOR<teamMembersCreateWithoutTeamInput, teamMembersUncheckedCreateWithoutTeamInput>
  }

  export type teamMembersUpdateWithWhereUniqueWithoutTeamInput = {
    where: teamMembersWhereUniqueInput
    data: XOR<teamMembersUpdateWithoutTeamInput, teamMembersUncheckedUpdateWithoutTeamInput>
  }

  export type teamMembersUpdateManyWithWhereWithoutTeamInput = {
    where: teamMembersScalarWhereInput
    data: XOR<teamMembersUpdateManyMutationInput, teamMembersUncheckedUpdateManyWithoutTeamInput>
  }

  export type teamRequestUpsertWithWhereUniqueWithoutTeamInput = {
    where: teamRequestWhereUniqueInput
    update: XOR<teamRequestUpdateWithoutTeamInput, teamRequestUncheckedUpdateWithoutTeamInput>
    create: XOR<teamRequestCreateWithoutTeamInput, teamRequestUncheckedCreateWithoutTeamInput>
  }

  export type teamRequestUpdateWithWhereUniqueWithoutTeamInput = {
    where: teamRequestWhereUniqueInput
    data: XOR<teamRequestUpdateWithoutTeamInput, teamRequestUncheckedUpdateWithoutTeamInput>
  }

  export type teamRequestUpdateManyWithWhereWithoutTeamInput = {
    where: teamRequestScalarWhereInput
    data: XOR<teamRequestUpdateManyMutationInput, teamRequestUncheckedUpdateManyWithoutTeamInput>
  }

  export type ProjectCreateWithoutHackathonInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    loomLink: string
    pitchLink: string
    projectResourceLink: string
    comments?: string | null
    judgeassessments?: JudgeassessmentsCreateNestedManyWithoutProjectInput
    team: TeamCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutHackathonInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    loomLink: string
    pitchLink: string
    projectResourceLink: string
    comments?: string | null
    teamId: string
    judgeassessments?: JudgeassessmentsUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutHackathonInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutHackathonInput, ProjectUncheckedCreateWithoutHackathonInput>
  }

  export type ProjectCreateManyHackathonInputEnvelope = {
    data: ProjectCreateManyHackathonInput | ProjectCreateManyHackathonInput[]
    skipDuplicates?: boolean
  }

  export type HackathonRegistrationCreateWithoutHackathonInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutRegistrationsInput
  }

  export type HackathonRegistrationUncheckedCreateWithoutHackathonInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teamId: string
  }

  export type HackathonRegistrationCreateOrConnectWithoutHackathonInput = {
    where: HackathonRegistrationWhereUniqueInput
    create: XOR<HackathonRegistrationCreateWithoutHackathonInput, HackathonRegistrationUncheckedCreateWithoutHackathonInput>
  }

  export type HackathonRegistrationCreateManyHackathonInputEnvelope = {
    data: HackathonRegistrationCreateManyHackathonInput | HackathonRegistrationCreateManyHackathonInput[]
    skipDuplicates?: boolean
  }

  export type JudgeCreateWithoutHackathonInput = {
    id?: string
    user: UserCreateNestedOneWithoutJudgeInput
    judgeassessments?: JudgeassessmentsCreateNestedManyWithoutJudgeInput
  }

  export type JudgeUncheckedCreateWithoutHackathonInput = {
    id?: string
    userId: string
    judgeGamertag: string
    email: string
    judgeImage: string
    judgeassessments?: JudgeassessmentsUncheckedCreateNestedManyWithoutJudgeInput
  }

  export type JudgeCreateOrConnectWithoutHackathonInput = {
    where: JudgeWhereUniqueInput
    create: XOR<JudgeCreateWithoutHackathonInput, JudgeUncheckedCreateWithoutHackathonInput>
  }

  export type JudgeCreateManyHackathonInputEnvelope = {
    data: JudgeCreateManyHackathonInput | JudgeCreateManyHackathonInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutHackathonsInput = {
    id?: string
    name?: string | null
    email: string
    gamertag: string
    role?: $Enums.Role
    emailVerified?: boolean | null
    image?: string | null
    isVerified?: boolean | null
    lightningAddress?: string | null
    publicBio?: string | null
    publicStaticCharge?: string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    teams?: TeamCreateNestedManyWithoutCreatorInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    judge?: JudgeCreateNestedManyWithoutUserInput
    teamMembers?: teamMembersCreateNestedManyWithoutUserInput
    teamRequest?: teamRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHackathonsInput = {
    id?: string
    name?: string | null
    email: string
    gamertag: string
    role?: $Enums.Role
    emailVerified?: boolean | null
    image?: string | null
    isVerified?: boolean | null
    lightningAddress?: string | null
    publicBio?: string | null
    publicStaticCharge?: string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    teams?: TeamUncheckedCreateNestedManyWithoutCreatorInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    judge?: JudgeUncheckedCreateNestedManyWithoutUserInput
    teamMembers?: teamMembersUncheckedCreateNestedManyWithoutUserInput
    teamRequest?: teamRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHackathonsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHackathonsInput, UserUncheckedCreateWithoutHackathonsInput>
  }

  export type JudgeassessmentsCreateWithoutHackathonInput = {
    id?: string
    impact: number
    feasability: number
    user_experience: number
    scalability: number
    innovate: number
    pitch: number
    overall_score: Decimal | DecimalJsLike | number | string
    project: ProjectCreateNestedOneWithoutJudgeassessmentsInput
    judge: JudgeCreateNestedOneWithoutJudgeassessmentsInput
  }

  export type JudgeassessmentsUncheckedCreateWithoutHackathonInput = {
    id?: string
    impact: number
    feasability: number
    user_experience: number
    scalability: number
    innovate: number
    pitch: number
    overall_score: Decimal | DecimalJsLike | number | string
    projectId: string
    judgeId: string
  }

  export type JudgeassessmentsCreateOrConnectWithoutHackathonInput = {
    where: JudgeassessmentsWhereUniqueInput
    create: XOR<JudgeassessmentsCreateWithoutHackathonInput, JudgeassessmentsUncheckedCreateWithoutHackathonInput>
  }

  export type JudgeassessmentsCreateManyHackathonInputEnvelope = {
    data: JudgeassessmentsCreateManyHackathonInput | JudgeassessmentsCreateManyHackathonInput[]
    skipDuplicates?: boolean
  }

  export type HackathonSponsorsCreateWithoutHackathonInput = {
    id?: string
    name: string
    email: string
    image: string
  }

  export type HackathonSponsorsUncheckedCreateWithoutHackathonInput = {
    id?: string
    name: string
    email: string
    image: string
  }

  export type HackathonSponsorsCreateOrConnectWithoutHackathonInput = {
    where: HackathonSponsorsWhereUniqueInput
    create: XOR<HackathonSponsorsCreateWithoutHackathonInput, HackathonSponsorsUncheckedCreateWithoutHackathonInput>
  }

  export type HackathonSponsorsCreateManyHackathonInputEnvelope = {
    data: HackathonSponsorsCreateManyHackathonInput | HackathonSponsorsCreateManyHackathonInput[]
    skipDuplicates?: boolean
  }

  export type HackathonSponsorsCreateWithoutHackathonInput = {
    id?: string
    name: string
    email: string
    image: string
  }

  export type HackathonSponsorsUncheckedCreateWithoutHackathonInput = {
    id?: string
    name: string
    email: string
    image: string
  }

  export type HackathonSponsorsCreateOrConnectWithoutHackathonInput = {
    where: HackathonSponsorsWhereUniqueInput
    create: XOR<HackathonSponsorsCreateWithoutHackathonInput, HackathonSponsorsUncheckedCreateWithoutHackathonInput>
  }

  export type HackathonSponsorsCreateManyHackathonInputEnvelope = {
    data: HackathonSponsorsCreateManyHackathonInput | HackathonSponsorsCreateManyHackathonInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutHackathonInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutHackathonInput, ProjectUncheckedUpdateWithoutHackathonInput>
    create: XOR<ProjectCreateWithoutHackathonInput, ProjectUncheckedCreateWithoutHackathonInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutHackathonInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutHackathonInput, ProjectUncheckedUpdateWithoutHackathonInput>
  }

  export type ProjectUpdateManyWithWhereWithoutHackathonInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutHackathonInput>
  }

  export type HackathonRegistrationUpsertWithWhereUniqueWithoutHackathonInput = {
    where: HackathonRegistrationWhereUniqueInput
    update: XOR<HackathonRegistrationUpdateWithoutHackathonInput, HackathonRegistrationUncheckedUpdateWithoutHackathonInput>
    create: XOR<HackathonRegistrationCreateWithoutHackathonInput, HackathonRegistrationUncheckedCreateWithoutHackathonInput>
  }

  export type HackathonRegistrationUpdateWithWhereUniqueWithoutHackathonInput = {
    where: HackathonRegistrationWhereUniqueInput
    data: XOR<HackathonRegistrationUpdateWithoutHackathonInput, HackathonRegistrationUncheckedUpdateWithoutHackathonInput>
  }

  export type HackathonRegistrationUpdateManyWithWhereWithoutHackathonInput = {
    where: HackathonRegistrationScalarWhereInput
    data: XOR<HackathonRegistrationUpdateManyMutationInput, HackathonRegistrationUncheckedUpdateManyWithoutHackathonInput>
  }

  export type JudgeUpsertWithWhereUniqueWithoutHackathonInput = {
    where: JudgeWhereUniqueInput
    update: XOR<JudgeUpdateWithoutHackathonInput, JudgeUncheckedUpdateWithoutHackathonInput>
    create: XOR<JudgeCreateWithoutHackathonInput, JudgeUncheckedCreateWithoutHackathonInput>
  }

  export type JudgeUpdateWithWhereUniqueWithoutHackathonInput = {
    where: JudgeWhereUniqueInput
    data: XOR<JudgeUpdateWithoutHackathonInput, JudgeUncheckedUpdateWithoutHackathonInput>
  }

  export type JudgeUpdateManyWithWhereWithoutHackathonInput = {
    where: JudgeScalarWhereInput
    data: XOR<JudgeUpdateManyMutationInput, JudgeUncheckedUpdateManyWithoutHackathonInput>
  }

  export type UserUpsertWithoutHackathonsInput = {
    update: XOR<UserUpdateWithoutHackathonsInput, UserUncheckedUpdateWithoutHackathonsInput>
    create: XOR<UserCreateWithoutHackathonsInput, UserUncheckedCreateWithoutHackathonsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHackathonsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHackathonsInput, UserUncheckedUpdateWithoutHackathonsInput>
  }

  export type UserUpdateWithoutHackathonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lightningAddress?: NullableStringFieldUpdateOperationsInput | string | null
    publicBio?: NullableStringFieldUpdateOperationsInput | string | null
    publicStaticCharge?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    teams?: TeamUpdateManyWithoutCreatorNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    judge?: JudgeUpdateManyWithoutUserNestedInput
    teamMembers?: teamMembersUpdateManyWithoutUserNestedInput
    teamRequest?: teamRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHackathonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lightningAddress?: NullableStringFieldUpdateOperationsInput | string | null
    publicBio?: NullableStringFieldUpdateOperationsInput | string | null
    publicStaticCharge?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    teams?: TeamUncheckedUpdateManyWithoutCreatorNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    judge?: JudgeUncheckedUpdateManyWithoutUserNestedInput
    teamMembers?: teamMembersUncheckedUpdateManyWithoutUserNestedInput
    teamRequest?: teamRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JudgeassessmentsUpsertWithWhereUniqueWithoutHackathonInput = {
    where: JudgeassessmentsWhereUniqueInput
    update: XOR<JudgeassessmentsUpdateWithoutHackathonInput, JudgeassessmentsUncheckedUpdateWithoutHackathonInput>
    create: XOR<JudgeassessmentsCreateWithoutHackathonInput, JudgeassessmentsUncheckedCreateWithoutHackathonInput>
  }

  export type JudgeassessmentsUpdateWithWhereUniqueWithoutHackathonInput = {
    where: JudgeassessmentsWhereUniqueInput
    data: XOR<JudgeassessmentsUpdateWithoutHackathonInput, JudgeassessmentsUncheckedUpdateWithoutHackathonInput>
  }

  export type JudgeassessmentsUpdateManyWithWhereWithoutHackathonInput = {
    where: JudgeassessmentsScalarWhereInput
    data: XOR<JudgeassessmentsUpdateManyMutationInput, JudgeassessmentsUncheckedUpdateManyWithoutHackathonInput>
  }

  export type JudgeassessmentsScalarWhereInput = {
    AND?: JudgeassessmentsScalarWhereInput | JudgeassessmentsScalarWhereInput[]
    OR?: JudgeassessmentsScalarWhereInput[]
    NOT?: JudgeassessmentsScalarWhereInput | JudgeassessmentsScalarWhereInput[]
    id?: StringFilter<"Judgeassessments"> | string
    impact?: IntFilter<"Judgeassessments"> | number
    feasability?: IntFilter<"Judgeassessments"> | number
    user_experience?: IntFilter<"Judgeassessments"> | number
    scalability?: IntFilter<"Judgeassessments"> | number
    innovate?: IntFilter<"Judgeassessments"> | number
    pitch?: IntFilter<"Judgeassessments"> | number
    overall_score?: DecimalFilter<"Judgeassessments"> | Decimal | DecimalJsLike | number | string
    hackathonId?: StringFilter<"Judgeassessments"> | string
    projectId?: StringFilter<"Judgeassessments"> | string
    judgeId?: StringFilter<"Judgeassessments"> | string
  }

  export type HackathonSponsorsUpsertWithWhereUniqueWithoutHackathonInput = {
    where: HackathonSponsorsWhereUniqueInput
    update: XOR<HackathonSponsorsUpdateWithoutHackathonInput, HackathonSponsorsUncheckedUpdateWithoutHackathonInput>
    create: XOR<HackathonSponsorsCreateWithoutHackathonInput, HackathonSponsorsUncheckedCreateWithoutHackathonInput>
  }

  export type HackathonSponsorsUpdateWithWhereUniqueWithoutHackathonInput = {
    where: HackathonSponsorsWhereUniqueInput
    data: XOR<HackathonSponsorsUpdateWithoutHackathonInput, HackathonSponsorsUncheckedUpdateWithoutHackathonInput>
  }

  export type HackathonSponsorsUpdateManyWithWhereWithoutHackathonInput = {
    where: HackathonSponsorsScalarWhereInput
    data: XOR<HackathonSponsorsUpdateManyMutationInput, HackathonSponsorsUncheckedUpdateManyWithoutHackathonInput>
  }

  export type HackathonSponsorsScalarWhereInput = {
    AND?: HackathonSponsorsScalarWhereInput | HackathonSponsorsScalarWhereInput[]
    OR?: HackathonSponsorsScalarWhereInput[]
    NOT?: HackathonSponsorsScalarWhereInput | HackathonSponsorsScalarWhereInput[]
    id?: StringFilter<"HackathonSponsors"> | string
    name?: StringFilter<"HackathonSponsors"> | string
    email?: StringFilter<"HackathonSponsors"> | string
    image?: StringFilter<"HackathonSponsors"> | string
    hackathonId?: StringFilter<"HackathonSponsors"> | string
  }

  export type HackathonSponsorsUpsertWithWhereUniqueWithoutHackathonInput = {
    where: HackathonSponsorsWhereUniqueInput
    update: XOR<HackathonSponsorsUpdateWithoutHackathonInput, HackathonSponsorsUncheckedUpdateWithoutHackathonInput>
    create: XOR<HackathonSponsorsCreateWithoutHackathonInput, HackathonSponsorsUncheckedCreateWithoutHackathonInput>
  }

  export type HackathonSponsorsUpdateWithWhereUniqueWithoutHackathonInput = {
    where: HackathonSponsorsWhereUniqueInput
    data: XOR<HackathonSponsorsUpdateWithoutHackathonInput, HackathonSponsorsUncheckedUpdateWithoutHackathonInput>
  }

  export type HackathonSponsorsUpdateManyWithWhereWithoutHackathonInput = {
    where: HackathonSponsorsScalarWhereInput
    data: XOR<HackathonSponsorsUpdateManyMutationInput, HackathonSponsorsUncheckedUpdateManyWithoutHackathonInput>
  }

  export type HackathonSponsorsScalarWhereInput = {
    AND?: HackathonSponsorsScalarWhereInput | HackathonSponsorsScalarWhereInput[]
    OR?: HackathonSponsorsScalarWhereInput[]
    NOT?: HackathonSponsorsScalarWhereInput | HackathonSponsorsScalarWhereInput[]
    id?: StringFilter<"HackathonSponsors"> | string
    name?: StringFilter<"HackathonSponsors"> | string
    email?: StringFilter<"HackathonSponsors"> | string
    image?: StringFilter<"HackathonSponsors"> | string
    hackathonId?: StringFilter<"HackathonSponsors"> | string
  }

  export type HackathonCreateWithoutRegistrationsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    benefits: string
    rules: string
    judgingCriteria: string
    firstPlacePrize: string
    secondPlacePrize: string
    thirdPlacePrize: string
    published?: boolean
    startDate: string
    endDate: string
    projects?: ProjectCreateNestedManyWithoutHackathonInput
    judge?: JudgeCreateNestedManyWithoutHackathonInput
    creator: UserCreateNestedOneWithoutHackathonsInput
    judgeassessments?: JudgeassessmentsCreateNestedManyWithoutHackathonInput
    hackathonSponsors?: HackathonSponsorsCreateNestedManyWithoutHackathonInput
    hackathonSponsors?: HackathonSponsorsCreateNestedManyWithoutHackathonInput
  }

  export type HackathonUncheckedCreateWithoutRegistrationsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    benefits: string
    rules: string
    judgingCriteria: string
    firstPlacePrize: string
    secondPlacePrize: string
    thirdPlacePrize: string
    published?: boolean
    creatorId: string
    startDate: string
    endDate: string
    projects?: ProjectUncheckedCreateNestedManyWithoutHackathonInput
    judge?: JudgeUncheckedCreateNestedManyWithoutHackathonInput
    judgeassessments?: JudgeassessmentsUncheckedCreateNestedManyWithoutHackathonInput
    hackathonSponsors?: HackathonSponsorsUncheckedCreateNestedManyWithoutHackathonInput
    hackathonSponsors?: HackathonSponsorsUncheckedCreateNestedManyWithoutHackathonInput
  }

  export type HackathonCreateOrConnectWithoutRegistrationsInput = {
    where: HackathonWhereUniqueInput
    create: XOR<HackathonCreateWithoutRegistrationsInput, HackathonUncheckedCreateWithoutRegistrationsInput>
  }

  export type TeamCreateWithoutRegistrationsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    teamAvatar: string
    projects?: ProjectCreateNestedManyWithoutTeamInput
    creator: UserCreateNestedOneWithoutTeamsInput
    teamMembers?: teamMembersCreateNestedManyWithoutTeamInput
    teamRequest?: teamRequestCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutRegistrationsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    teamAvatar: string
    creatorId: string
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamInput
    teamMembers?: teamMembersUncheckedCreateNestedManyWithoutTeamInput
    teamRequest?: teamRequestUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutRegistrationsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutRegistrationsInput, TeamUncheckedCreateWithoutRegistrationsInput>
  }

  export type HackathonUpsertWithoutRegistrationsInput = {
    update: XOR<HackathonUpdateWithoutRegistrationsInput, HackathonUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<HackathonCreateWithoutRegistrationsInput, HackathonUncheckedCreateWithoutRegistrationsInput>
    where?: HackathonWhereInput
  }

  export type HackathonUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: HackathonWhereInput
    data: XOR<HackathonUpdateWithoutRegistrationsInput, HackathonUncheckedUpdateWithoutRegistrationsInput>
  }

  export type HackathonUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    benefits?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    judgingCriteria?: StringFieldUpdateOperationsInput | string
    firstPlacePrize?: StringFieldUpdateOperationsInput | string
    secondPlacePrize?: StringFieldUpdateOperationsInput | string
    thirdPlacePrize?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutHackathonNestedInput
    judge?: JudgeUpdateManyWithoutHackathonNestedInput
    creator?: UserUpdateOneRequiredWithoutHackathonsNestedInput
    judgeassessments?: JudgeassessmentsUpdateManyWithoutHackathonNestedInput
    hackathonSponsors?: HackathonSponsorsUpdateManyWithoutHackathonNestedInput
    hackathonSponsors?: HackathonSponsorsUpdateManyWithoutHackathonNestedInput
  }

  export type HackathonUncheckedUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    benefits?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    judgingCriteria?: StringFieldUpdateOperationsInput | string
    firstPlacePrize?: StringFieldUpdateOperationsInput | string
    secondPlacePrize?: StringFieldUpdateOperationsInput | string
    thirdPlacePrize?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    creatorId?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutHackathonNestedInput
    judge?: JudgeUncheckedUpdateManyWithoutHackathonNestedInput
    judgeassessments?: JudgeassessmentsUncheckedUpdateManyWithoutHackathonNestedInput
    hackathonSponsors?: HackathonSponsorsUncheckedUpdateManyWithoutHackathonNestedInput
    hackathonSponsors?: HackathonSponsorsUncheckedUpdateManyWithoutHackathonNestedInput
  }

  export type TeamUpsertWithoutRegistrationsInput = {
    update: XOR<TeamUpdateWithoutRegistrationsInput, TeamUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<TeamCreateWithoutRegistrationsInput, TeamUncheckedCreateWithoutRegistrationsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutRegistrationsInput, TeamUncheckedUpdateWithoutRegistrationsInput>
  }

  export type TeamUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teamAvatar?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutTeamNestedInput
    creator?: UserUpdateOneRequiredWithoutTeamsNestedInput
    teamMembers?: teamMembersUpdateManyWithoutTeamNestedInput
    teamRequest?: teamRequestUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutRegistrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teamAvatar?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutTeamNestedInput
    teamMembers?: teamMembersUncheckedUpdateManyWithoutTeamNestedInput
    teamRequest?: teamRequestUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type HackathonCreateWithoutProjectsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    benefits: string
    rules: string
    judgingCriteria: string
    firstPlacePrize: string
    secondPlacePrize: string
    thirdPlacePrize: string
    published?: boolean
    startDate: string
    endDate: string
    registrations?: HackathonRegistrationCreateNestedManyWithoutHackathonInput
    judge?: JudgeCreateNestedManyWithoutHackathonInput
    creator: UserCreateNestedOneWithoutHackathonsInput
    judgeassessments?: JudgeassessmentsCreateNestedManyWithoutHackathonInput
    hackathonSponsors?: HackathonSponsorsCreateNestedManyWithoutHackathonInput
    hackathonSponsors?: HackathonSponsorsCreateNestedManyWithoutHackathonInput
  }

  export type HackathonUncheckedCreateWithoutProjectsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    benefits: string
    rules: string
    judgingCriteria: string
    firstPlacePrize: string
    secondPlacePrize: string
    thirdPlacePrize: string
    published?: boolean
    creatorId: string
    startDate: string
    endDate: string
    registrations?: HackathonRegistrationUncheckedCreateNestedManyWithoutHackathonInput
    judge?: JudgeUncheckedCreateNestedManyWithoutHackathonInput
    judgeassessments?: JudgeassessmentsUncheckedCreateNestedManyWithoutHackathonInput
    hackathonSponsors?: HackathonSponsorsUncheckedCreateNestedManyWithoutHackathonInput
    hackathonSponsors?: HackathonSponsorsUncheckedCreateNestedManyWithoutHackathonInput
  }

  export type HackathonCreateOrConnectWithoutProjectsInput = {
    where: HackathonWhereUniqueInput
    create: XOR<HackathonCreateWithoutProjectsInput, HackathonUncheckedCreateWithoutProjectsInput>
  }

  export type JudgeassessmentsCreateWithoutProjectInput = {
    id?: string
    impact: number
    feasability: number
    user_experience: number
    scalability: number
    innovate: number
    pitch: number
    overall_score: Decimal | DecimalJsLike | number | string
    hackathon: HackathonCreateNestedOneWithoutJudgeassessmentsInput
    judge: JudgeCreateNestedOneWithoutJudgeassessmentsInput
  }

  export type JudgeassessmentsUncheckedCreateWithoutProjectInput = {
    id?: string
    impact: number
    feasability: number
    user_experience: number
    scalability: number
    innovate: number
    pitch: number
    overall_score: Decimal | DecimalJsLike | number | string
    hackathonId: string
    judgeId: string
  }

  export type JudgeassessmentsCreateOrConnectWithoutProjectInput = {
    where: JudgeassessmentsWhereUniqueInput
    create: XOR<JudgeassessmentsCreateWithoutProjectInput, JudgeassessmentsUncheckedCreateWithoutProjectInput>
  }

  export type JudgeassessmentsCreateManyProjectInputEnvelope = {
    data: JudgeassessmentsCreateManyProjectInput | JudgeassessmentsCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type TeamCreateWithoutProjectsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    teamAvatar: string
    registrations?: HackathonRegistrationCreateNestedManyWithoutTeamInput
    creator: UserCreateNestedOneWithoutTeamsInput
    teamMembers?: teamMembersCreateNestedManyWithoutTeamInput
    teamRequest?: teamRequestCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutProjectsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    teamAvatar: string
    creatorId: string
    registrations?: HackathonRegistrationUncheckedCreateNestedManyWithoutTeamInput
    teamMembers?: teamMembersUncheckedCreateNestedManyWithoutTeamInput
    teamRequest?: teamRequestUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutProjectsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutProjectsInput, TeamUncheckedCreateWithoutProjectsInput>
  }

  export type HackathonUpsertWithoutProjectsInput = {
    update: XOR<HackathonUpdateWithoutProjectsInput, HackathonUncheckedUpdateWithoutProjectsInput>
    create: XOR<HackathonCreateWithoutProjectsInput, HackathonUncheckedCreateWithoutProjectsInput>
    where?: HackathonWhereInput
  }

  export type HackathonUpdateToOneWithWhereWithoutProjectsInput = {
    where?: HackathonWhereInput
    data: XOR<HackathonUpdateWithoutProjectsInput, HackathonUncheckedUpdateWithoutProjectsInput>
  }

  export type HackathonUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    benefits?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    judgingCriteria?: StringFieldUpdateOperationsInput | string
    firstPlacePrize?: StringFieldUpdateOperationsInput | string
    secondPlacePrize?: StringFieldUpdateOperationsInput | string
    thirdPlacePrize?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    registrations?: HackathonRegistrationUpdateManyWithoutHackathonNestedInput
    judge?: JudgeUpdateManyWithoutHackathonNestedInput
    creator?: UserUpdateOneRequiredWithoutHackathonsNestedInput
    judgeassessments?: JudgeassessmentsUpdateManyWithoutHackathonNestedInput
    hackathonSponsors?: HackathonSponsorsUpdateManyWithoutHackathonNestedInput
    hackathonSponsors?: HackathonSponsorsUpdateManyWithoutHackathonNestedInput
  }

  export type HackathonUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    benefits?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    judgingCriteria?: StringFieldUpdateOperationsInput | string
    firstPlacePrize?: StringFieldUpdateOperationsInput | string
    secondPlacePrize?: StringFieldUpdateOperationsInput | string
    thirdPlacePrize?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    creatorId?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    registrations?: HackathonRegistrationUncheckedUpdateManyWithoutHackathonNestedInput
    judge?: JudgeUncheckedUpdateManyWithoutHackathonNestedInput
    judgeassessments?: JudgeassessmentsUncheckedUpdateManyWithoutHackathonNestedInput
    hackathonSponsors?: HackathonSponsorsUncheckedUpdateManyWithoutHackathonNestedInput
    hackathonSponsors?: HackathonSponsorsUncheckedUpdateManyWithoutHackathonNestedInput
  }

  export type JudgeassessmentsUpsertWithWhereUniqueWithoutProjectInput = {
    where: JudgeassessmentsWhereUniqueInput
    update: XOR<JudgeassessmentsUpdateWithoutProjectInput, JudgeassessmentsUncheckedUpdateWithoutProjectInput>
    create: XOR<JudgeassessmentsCreateWithoutProjectInput, JudgeassessmentsUncheckedCreateWithoutProjectInput>
  }

  export type JudgeassessmentsUpdateWithWhereUniqueWithoutProjectInput = {
    where: JudgeassessmentsWhereUniqueInput
    data: XOR<JudgeassessmentsUpdateWithoutProjectInput, JudgeassessmentsUncheckedUpdateWithoutProjectInput>
  }

  export type JudgeassessmentsUpdateManyWithWhereWithoutProjectInput = {
    where: JudgeassessmentsScalarWhereInput
    data: XOR<JudgeassessmentsUpdateManyMutationInput, JudgeassessmentsUncheckedUpdateManyWithoutProjectInput>
  }

  export type TeamUpsertWithoutProjectsInput = {
    update: XOR<TeamUpdateWithoutProjectsInput, TeamUncheckedUpdateWithoutProjectsInput>
    create: XOR<TeamCreateWithoutProjectsInput, TeamUncheckedCreateWithoutProjectsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutProjectsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutProjectsInput, TeamUncheckedUpdateWithoutProjectsInput>
  }

  export type TeamUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teamAvatar?: StringFieldUpdateOperationsInput | string
    registrations?: HackathonRegistrationUpdateManyWithoutTeamNestedInput
    creator?: UserUpdateOneRequiredWithoutTeamsNestedInput
    teamMembers?: teamMembersUpdateManyWithoutTeamNestedInput
    teamRequest?: teamRequestUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teamAvatar?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    registrations?: HackathonRegistrationUncheckedUpdateManyWithoutTeamNestedInput
    teamMembers?: teamMembersUncheckedUpdateManyWithoutTeamNestedInput
    teamRequest?: teamRequestUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserCreateWithoutJudgeInput = {
    id?: string
    name?: string | null
    email: string
    gamertag: string
    role?: $Enums.Role
    emailVerified?: boolean | null
    image?: string | null
    isVerified?: boolean | null
    lightningAddress?: string | null
    publicBio?: string | null
    publicStaticCharge?: string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonCreateNestedManyWithoutCreatorInput
    teams?: TeamCreateNestedManyWithoutCreatorInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    teamMembers?: teamMembersCreateNestedManyWithoutUserInput
    teamRequest?: teamRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJudgeInput = {
    id?: string
    name?: string | null
    email: string
    gamertag: string
    role?: $Enums.Role
    emailVerified?: boolean | null
    image?: string | null
    isVerified?: boolean | null
    lightningAddress?: string | null
    publicBio?: string | null
    publicStaticCharge?: string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonUncheckedCreateNestedManyWithoutCreatorInput
    teams?: TeamUncheckedCreateNestedManyWithoutCreatorInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    teamMembers?: teamMembersUncheckedCreateNestedManyWithoutUserInput
    teamRequest?: teamRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJudgeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJudgeInput, UserUncheckedCreateWithoutJudgeInput>
  }

  export type HackathonCreateWithoutJudgeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    benefits: string
    rules: string
    judgingCriteria: string
    firstPlacePrize: string
    secondPlacePrize: string
    thirdPlacePrize: string
    published?: boolean
    startDate: string
    endDate: string
    projects?: ProjectCreateNestedManyWithoutHackathonInput
    registrations?: HackathonRegistrationCreateNestedManyWithoutHackathonInput
    creator: UserCreateNestedOneWithoutHackathonsInput
    judgeassessments?: JudgeassessmentsCreateNestedManyWithoutHackathonInput
    hackathonSponsors?: HackathonSponsorsCreateNestedManyWithoutHackathonInput
    hackathonSponsors?: HackathonSponsorsCreateNestedManyWithoutHackathonInput
  }

  export type HackathonUncheckedCreateWithoutJudgeInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    benefits: string
    rules: string
    judgingCriteria: string
    firstPlacePrize: string
    secondPlacePrize: string
    thirdPlacePrize: string
    published?: boolean
    creatorId: string
    startDate: string
    endDate: string
    projects?: ProjectUncheckedCreateNestedManyWithoutHackathonInput
    registrations?: HackathonRegistrationUncheckedCreateNestedManyWithoutHackathonInput
    judgeassessments?: JudgeassessmentsUncheckedCreateNestedManyWithoutHackathonInput
    hackathonSponsors?: HackathonSponsorsUncheckedCreateNestedManyWithoutHackathonInput
    hackathonSponsors?: HackathonSponsorsUncheckedCreateNestedManyWithoutHackathonInput
  }

  export type HackathonCreateOrConnectWithoutJudgeInput = {
    where: HackathonWhereUniqueInput
    create: XOR<HackathonCreateWithoutJudgeInput, HackathonUncheckedCreateWithoutJudgeInput>
  }

  export type JudgeassessmentsCreateWithoutJudgeInput = {
    id?: string
    impact: number
    feasability: number
    user_experience: number
    scalability: number
    innovate: number
    pitch: number
    overall_score: Decimal | DecimalJsLike | number | string
    hackathon: HackathonCreateNestedOneWithoutJudgeassessmentsInput
    project: ProjectCreateNestedOneWithoutJudgeassessmentsInput
  }

  export type JudgeassessmentsUncheckedCreateWithoutJudgeInput = {
    id?: string
    impact: number
    feasability: number
    user_experience: number
    scalability: number
    innovate: number
    pitch: number
    overall_score: Decimal | DecimalJsLike | number | string
    hackathonId: string
    projectId: string
  }

  export type JudgeassessmentsCreateOrConnectWithoutJudgeInput = {
    where: JudgeassessmentsWhereUniqueInput
    create: XOR<JudgeassessmentsCreateWithoutJudgeInput, JudgeassessmentsUncheckedCreateWithoutJudgeInput>
  }

  export type JudgeassessmentsCreateManyJudgeInputEnvelope = {
    data: JudgeassessmentsCreateManyJudgeInput | JudgeassessmentsCreateManyJudgeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutJudgeInput = {
    update: XOR<UserUpdateWithoutJudgeInput, UserUncheckedUpdateWithoutJudgeInput>
    create: XOR<UserCreateWithoutJudgeInput, UserUncheckedCreateWithoutJudgeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJudgeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJudgeInput, UserUncheckedUpdateWithoutJudgeInput>
  }

  export type UserUpdateWithoutJudgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lightningAddress?: NullableStringFieldUpdateOperationsInput | string | null
    publicBio?: NullableStringFieldUpdateOperationsInput | string | null
    publicStaticCharge?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonUpdateManyWithoutCreatorNestedInput
    teams?: TeamUpdateManyWithoutCreatorNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    teamMembers?: teamMembersUpdateManyWithoutUserNestedInput
    teamRequest?: teamRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJudgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lightningAddress?: NullableStringFieldUpdateOperationsInput | string | null
    publicBio?: NullableStringFieldUpdateOperationsInput | string | null
    publicStaticCharge?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonUncheckedUpdateManyWithoutCreatorNestedInput
    teams?: TeamUncheckedUpdateManyWithoutCreatorNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    teamMembers?: teamMembersUncheckedUpdateManyWithoutUserNestedInput
    teamRequest?: teamRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HackathonUpsertWithoutJudgeInput = {
    update: XOR<HackathonUpdateWithoutJudgeInput, HackathonUncheckedUpdateWithoutJudgeInput>
    create: XOR<HackathonCreateWithoutJudgeInput, HackathonUncheckedCreateWithoutJudgeInput>
    where?: HackathonWhereInput
  }

  export type HackathonUpdateToOneWithWhereWithoutJudgeInput = {
    where?: HackathonWhereInput
    data: XOR<HackathonUpdateWithoutJudgeInput, HackathonUncheckedUpdateWithoutJudgeInput>
  }

  export type HackathonUpdateWithoutJudgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    benefits?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    judgingCriteria?: StringFieldUpdateOperationsInput | string
    firstPlacePrize?: StringFieldUpdateOperationsInput | string
    secondPlacePrize?: StringFieldUpdateOperationsInput | string
    thirdPlacePrize?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutHackathonNestedInput
    registrations?: HackathonRegistrationUpdateManyWithoutHackathonNestedInput
    creator?: UserUpdateOneRequiredWithoutHackathonsNestedInput
    judgeassessments?: JudgeassessmentsUpdateManyWithoutHackathonNestedInput
    hackathonSponsors?: HackathonSponsorsUpdateManyWithoutHackathonNestedInput
    hackathonSponsors?: HackathonSponsorsUpdateManyWithoutHackathonNestedInput
  }

  export type HackathonUncheckedUpdateWithoutJudgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    benefits?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    judgingCriteria?: StringFieldUpdateOperationsInput | string
    firstPlacePrize?: StringFieldUpdateOperationsInput | string
    secondPlacePrize?: StringFieldUpdateOperationsInput | string
    thirdPlacePrize?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    creatorId?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutHackathonNestedInput
    registrations?: HackathonRegistrationUncheckedUpdateManyWithoutHackathonNestedInput
    judgeassessments?: JudgeassessmentsUncheckedUpdateManyWithoutHackathonNestedInput
    hackathonSponsors?: HackathonSponsorsUncheckedUpdateManyWithoutHackathonNestedInput
    hackathonSponsors?: HackathonSponsorsUncheckedUpdateManyWithoutHackathonNestedInput
  }

  export type JudgeassessmentsUpsertWithWhereUniqueWithoutJudgeInput = {
    where: JudgeassessmentsWhereUniqueInput
    update: XOR<JudgeassessmentsUpdateWithoutJudgeInput, JudgeassessmentsUncheckedUpdateWithoutJudgeInput>
    create: XOR<JudgeassessmentsCreateWithoutJudgeInput, JudgeassessmentsUncheckedCreateWithoutJudgeInput>
  }

  export type JudgeassessmentsUpdateWithWhereUniqueWithoutJudgeInput = {
    where: JudgeassessmentsWhereUniqueInput
    data: XOR<JudgeassessmentsUpdateWithoutJudgeInput, JudgeassessmentsUncheckedUpdateWithoutJudgeInput>
  }

  export type JudgeassessmentsUpdateManyWithWhereWithoutJudgeInput = {
    where: JudgeassessmentsScalarWhereInput
    data: XOR<JudgeassessmentsUpdateManyMutationInput, JudgeassessmentsUncheckedUpdateManyWithoutJudgeInput>
  }

  export type HackathonCreateWithoutJudgeassessmentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    benefits: string
    rules: string
    judgingCriteria: string
    firstPlacePrize: string
    secondPlacePrize: string
    thirdPlacePrize: string
    published?: boolean
    startDate: string
    endDate: string
    projects?: ProjectCreateNestedManyWithoutHackathonInput
    registrations?: HackathonRegistrationCreateNestedManyWithoutHackathonInput
    judge?: JudgeCreateNestedManyWithoutHackathonInput
    creator: UserCreateNestedOneWithoutHackathonsInput
    hackathonSponsors?: HackathonSponsorsCreateNestedManyWithoutHackathonInput
    hackathonSponsors?: HackathonSponsorsCreateNestedManyWithoutHackathonInput
  }

  export type HackathonUncheckedCreateWithoutJudgeassessmentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    benefits: string
    rules: string
    judgingCriteria: string
    firstPlacePrize: string
    secondPlacePrize: string
    thirdPlacePrize: string
    published?: boolean
    creatorId: string
    startDate: string
    endDate: string
    projects?: ProjectUncheckedCreateNestedManyWithoutHackathonInput
    registrations?: HackathonRegistrationUncheckedCreateNestedManyWithoutHackathonInput
    judge?: JudgeUncheckedCreateNestedManyWithoutHackathonInput
    hackathonSponsors?: HackathonSponsorsUncheckedCreateNestedManyWithoutHackathonInput
    hackathonSponsors?: HackathonSponsorsUncheckedCreateNestedManyWithoutHackathonInput
  }

  export type HackathonCreateOrConnectWithoutJudgeassessmentsInput = {
    where: HackathonWhereUniqueInput
    create: XOR<HackathonCreateWithoutJudgeassessmentsInput, HackathonUncheckedCreateWithoutJudgeassessmentsInput>
  }

  export type ProjectCreateWithoutJudgeassessmentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    loomLink: string
    pitchLink: string
    projectResourceLink: string
    comments?: string | null
    hackathon: HackathonCreateNestedOneWithoutProjectsInput
    team: TeamCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutJudgeassessmentsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    loomLink: string
    pitchLink: string
    projectResourceLink: string
    comments?: string | null
    hackathonId: string
    teamId: string
  }

  export type ProjectCreateOrConnectWithoutJudgeassessmentsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutJudgeassessmentsInput, ProjectUncheckedCreateWithoutJudgeassessmentsInput>
  }

  export type JudgeCreateWithoutJudgeassessmentsInput = {
    id?: string
    user: UserCreateNestedOneWithoutJudgeInput
    hackathon: HackathonCreateNestedOneWithoutJudgeInput
  }

  export type JudgeUncheckedCreateWithoutJudgeassessmentsInput = {
    id?: string
    userId: string
    judgeGamertag: string
    email: string
    judgeImage: string
    hackathonId: string
  }

  export type JudgeCreateOrConnectWithoutJudgeassessmentsInput = {
    where: JudgeWhereUniqueInput
    create: XOR<JudgeCreateWithoutJudgeassessmentsInput, JudgeUncheckedCreateWithoutJudgeassessmentsInput>
  }

  export type HackathonUpsertWithoutJudgeassessmentsInput = {
    update: XOR<HackathonUpdateWithoutJudgeassessmentsInput, HackathonUncheckedUpdateWithoutJudgeassessmentsInput>
    create: XOR<HackathonCreateWithoutJudgeassessmentsInput, HackathonUncheckedCreateWithoutJudgeassessmentsInput>
    where?: HackathonWhereInput
  }

  export type HackathonUpdateToOneWithWhereWithoutJudgeassessmentsInput = {
    where?: HackathonWhereInput
    data: XOR<HackathonUpdateWithoutJudgeassessmentsInput, HackathonUncheckedUpdateWithoutJudgeassessmentsInput>
  }

  export type HackathonUpdateWithoutJudgeassessmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    benefits?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    judgingCriteria?: StringFieldUpdateOperationsInput | string
    firstPlacePrize?: StringFieldUpdateOperationsInput | string
    secondPlacePrize?: StringFieldUpdateOperationsInput | string
    thirdPlacePrize?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutHackathonNestedInput
    registrations?: HackathonRegistrationUpdateManyWithoutHackathonNestedInput
    judge?: JudgeUpdateManyWithoutHackathonNestedInput
    creator?: UserUpdateOneRequiredWithoutHackathonsNestedInput
    hackathonSponsors?: HackathonSponsorsUpdateManyWithoutHackathonNestedInput
    hackathonSponsors?: HackathonSponsorsUpdateManyWithoutHackathonNestedInput
  }

  export type HackathonUncheckedUpdateWithoutJudgeassessmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    benefits?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    judgingCriteria?: StringFieldUpdateOperationsInput | string
    firstPlacePrize?: StringFieldUpdateOperationsInput | string
    secondPlacePrize?: StringFieldUpdateOperationsInput | string
    thirdPlacePrize?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    creatorId?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutHackathonNestedInput
    registrations?: HackathonRegistrationUncheckedUpdateManyWithoutHackathonNestedInput
    judge?: JudgeUncheckedUpdateManyWithoutHackathonNestedInput
    hackathonSponsors?: HackathonSponsorsUncheckedUpdateManyWithoutHackathonNestedInput
    hackathonSponsors?: HackathonSponsorsUncheckedUpdateManyWithoutHackathonNestedInput
  }

  export type ProjectUpsertWithoutJudgeassessmentsInput = {
    update: XOR<ProjectUpdateWithoutJudgeassessmentsInput, ProjectUncheckedUpdateWithoutJudgeassessmentsInput>
    create: XOR<ProjectCreateWithoutJudgeassessmentsInput, ProjectUncheckedCreateWithoutJudgeassessmentsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutJudgeassessmentsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutJudgeassessmentsInput, ProjectUncheckedUpdateWithoutJudgeassessmentsInput>
  }

  export type ProjectUpdateWithoutJudgeassessmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    loomLink?: StringFieldUpdateOperationsInput | string
    pitchLink?: StringFieldUpdateOperationsInput | string
    projectResourceLink?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    hackathon?: HackathonUpdateOneRequiredWithoutProjectsNestedInput
    team?: TeamUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutJudgeassessmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    loomLink?: StringFieldUpdateOperationsInput | string
    pitchLink?: StringFieldUpdateOperationsInput | string
    projectResourceLink?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    hackathonId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type JudgeUpsertWithoutJudgeassessmentsInput = {
    update: XOR<JudgeUpdateWithoutJudgeassessmentsInput, JudgeUncheckedUpdateWithoutJudgeassessmentsInput>
    create: XOR<JudgeCreateWithoutJudgeassessmentsInput, JudgeUncheckedCreateWithoutJudgeassessmentsInput>
    where?: JudgeWhereInput
  }

  export type JudgeUpdateToOneWithWhereWithoutJudgeassessmentsInput = {
    where?: JudgeWhereInput
    data: XOR<JudgeUpdateWithoutJudgeassessmentsInput, JudgeUncheckedUpdateWithoutJudgeassessmentsInput>
  }

  export type JudgeUpdateWithoutJudgeassessmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutJudgeNestedInput
    hackathon?: HackathonUpdateOneRequiredWithoutJudgeNestedInput
  }

  export type JudgeUncheckedUpdateWithoutJudgeassessmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    judgeGamertag?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    judgeImage?: StringFieldUpdateOperationsInput | string
    hackathonId?: StringFieldUpdateOperationsInput | string
  }

  export type HackathonCreateWithoutHackathonSponsorsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    benefits: string
    rules: string
    judgingCriteria: string
    firstPlacePrize: string
    secondPlacePrize: string
    thirdPlacePrize: string
    published?: boolean
    startDate: string
    endDate: string
    projects?: ProjectCreateNestedManyWithoutHackathonInput
    registrations?: HackathonRegistrationCreateNestedManyWithoutHackathonInput
    judge?: JudgeCreateNestedManyWithoutHackathonInput
    creator: UserCreateNestedOneWithoutHackathonsInput
    judgeassessments?: JudgeassessmentsCreateNestedManyWithoutHackathonInput
  }

  export type HackathonUncheckedCreateWithoutHackathonSponsorsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    benefits: string
    rules: string
    judgingCriteria: string
    firstPlacePrize: string
    secondPlacePrize: string
    thirdPlacePrize: string
    published?: boolean
    creatorId: string
    startDate: string
    endDate: string
    projects?: ProjectUncheckedCreateNestedManyWithoutHackathonInput
    registrations?: HackathonRegistrationUncheckedCreateNestedManyWithoutHackathonInput
    judge?: JudgeUncheckedCreateNestedManyWithoutHackathonInput
    judgeassessments?: JudgeassessmentsUncheckedCreateNestedManyWithoutHackathonInput
  }

  export type HackathonCreateOrConnectWithoutHackathonSponsorsInput = {
    where: HackathonWhereUniqueInput
    create: XOR<HackathonCreateWithoutHackathonSponsorsInput, HackathonUncheckedCreateWithoutHackathonSponsorsInput>
  }

  export type HackathonUpsertWithoutHackathonSponsorsInput = {
    update: XOR<HackathonUpdateWithoutHackathonSponsorsInput, HackathonUncheckedUpdateWithoutHackathonSponsorsInput>
    create: XOR<HackathonCreateWithoutHackathonSponsorsInput, HackathonUncheckedCreateWithoutHackathonSponsorsInput>
    where?: HackathonWhereInput
  }

  export type HackathonUpdateToOneWithWhereWithoutHackathonSponsorsInput = {
    where?: HackathonWhereInput
    data: XOR<HackathonUpdateWithoutHackathonSponsorsInput, HackathonUncheckedUpdateWithoutHackathonSponsorsInput>
  }

  export type HackathonUpdateWithoutHackathonSponsorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    benefits?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    judgingCriteria?: StringFieldUpdateOperationsInput | string
    firstPlacePrize?: StringFieldUpdateOperationsInput | string
    secondPlacePrize?: StringFieldUpdateOperationsInput | string
    thirdPlacePrize?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutHackathonNestedInput
    registrations?: HackathonRegistrationUpdateManyWithoutHackathonNestedInput
    judge?: JudgeUpdateManyWithoutHackathonNestedInput
    creator?: UserUpdateOneRequiredWithoutHackathonsNestedInput
    judgeassessments?: JudgeassessmentsUpdateManyWithoutHackathonNestedInput
  }

  export type HackathonUncheckedUpdateWithoutHackathonSponsorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    benefits?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    judgingCriteria?: StringFieldUpdateOperationsInput | string
    firstPlacePrize?: StringFieldUpdateOperationsInput | string
    secondPlacePrize?: StringFieldUpdateOperationsInput | string
    thirdPlacePrize?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    creatorId?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutHackathonNestedInput
    registrations?: HackathonRegistrationUncheckedUpdateManyWithoutHackathonNestedInput
    judge?: JudgeUncheckedUpdateManyWithoutHackathonNestedInput
    judgeassessments?: JudgeassessmentsUncheckedUpdateManyWithoutHackathonNestedInput
  }

  export type TeamCreateWithoutTeamMembersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    teamAvatar: string
    projects?: ProjectCreateNestedManyWithoutTeamInput
    registrations?: HackathonRegistrationCreateNestedManyWithoutTeamInput
    creator: UserCreateNestedOneWithoutTeamsInput
    teamRequest?: teamRequestCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutTeamMembersInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    teamAvatar: string
    creatorId: string
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamInput
    registrations?: HackathonRegistrationUncheckedCreateNestedManyWithoutTeamInput
    teamRequest?: teamRequestUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutTeamMembersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutTeamMembersInput, TeamUncheckedCreateWithoutTeamMembersInput>
  }

  export type UserCreateWithoutTeamMembersInput = {
    id?: string
    name?: string | null
    email: string
    gamertag: string
    role?: $Enums.Role
    emailVerified?: boolean | null
    image?: string | null
    isVerified?: boolean | null
    lightningAddress?: string | null
    publicBio?: string | null
    publicStaticCharge?: string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonCreateNestedManyWithoutCreatorInput
    teams?: TeamCreateNestedManyWithoutCreatorInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    judge?: JudgeCreateNestedManyWithoutUserInput
    teamRequest?: teamRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamMembersInput = {
    id?: string
    name?: string | null
    email: string
    gamertag: string
    role?: $Enums.Role
    emailVerified?: boolean | null
    image?: string | null
    isVerified?: boolean | null
    lightningAddress?: string | null
    publicBio?: string | null
    publicStaticCharge?: string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonUncheckedCreateNestedManyWithoutCreatorInput
    teams?: TeamUncheckedCreateNestedManyWithoutCreatorInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    judge?: JudgeUncheckedCreateNestedManyWithoutUserInput
    teamRequest?: teamRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamMembersInput, UserUncheckedCreateWithoutTeamMembersInput>
  }

  export type TeamUpsertWithoutTeamMembersInput = {
    update: XOR<TeamUpdateWithoutTeamMembersInput, TeamUncheckedUpdateWithoutTeamMembersInput>
    create: XOR<TeamCreateWithoutTeamMembersInput, TeamUncheckedCreateWithoutTeamMembersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutTeamMembersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutTeamMembersInput, TeamUncheckedUpdateWithoutTeamMembersInput>
  }

  export type TeamUpdateWithoutTeamMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teamAvatar?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutTeamNestedInput
    registrations?: HackathonRegistrationUpdateManyWithoutTeamNestedInput
    creator?: UserUpdateOneRequiredWithoutTeamsNestedInput
    teamRequest?: teamRequestUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutTeamMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teamAvatar?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutTeamNestedInput
    registrations?: HackathonRegistrationUncheckedUpdateManyWithoutTeamNestedInput
    teamRequest?: teamRequestUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserUpsertWithoutTeamMembersInput = {
    update: XOR<UserUpdateWithoutTeamMembersInput, UserUncheckedUpdateWithoutTeamMembersInput>
    create: XOR<UserCreateWithoutTeamMembersInput, UserUncheckedCreateWithoutTeamMembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeamMembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeamMembersInput, UserUncheckedUpdateWithoutTeamMembersInput>
  }

  export type UserUpdateWithoutTeamMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lightningAddress?: NullableStringFieldUpdateOperationsInput | string | null
    publicBio?: NullableStringFieldUpdateOperationsInput | string | null
    publicStaticCharge?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonUpdateManyWithoutCreatorNestedInput
    teams?: TeamUpdateManyWithoutCreatorNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    judge?: JudgeUpdateManyWithoutUserNestedInput
    teamRequest?: teamRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lightningAddress?: NullableStringFieldUpdateOperationsInput | string | null
    publicBio?: NullableStringFieldUpdateOperationsInput | string | null
    publicStaticCharge?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonUncheckedUpdateManyWithoutCreatorNestedInput
    teams?: TeamUncheckedUpdateManyWithoutCreatorNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    judge?: JudgeUncheckedUpdateManyWithoutUserNestedInput
    teamRequest?: teamRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeamCreateWithoutTeamRequestInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    teamAvatar: string
    projects?: ProjectCreateNestedManyWithoutTeamInput
    registrations?: HackathonRegistrationCreateNestedManyWithoutTeamInput
    creator: UserCreateNestedOneWithoutTeamsInput
    teamMembers?: teamMembersCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutTeamRequestInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    teamAvatar: string
    creatorId: string
    projects?: ProjectUncheckedCreateNestedManyWithoutTeamInput
    registrations?: HackathonRegistrationUncheckedCreateNestedManyWithoutTeamInput
    teamMembers?: teamMembersUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutTeamRequestInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutTeamRequestInput, TeamUncheckedCreateWithoutTeamRequestInput>
  }

  export type UserCreateWithoutTeamRequestInput = {
    id?: string
    name?: string | null
    email: string
    gamertag: string
    role?: $Enums.Role
    emailVerified?: boolean | null
    image?: string | null
    isVerified?: boolean | null
    lightningAddress?: string | null
    publicBio?: string | null
    publicStaticCharge?: string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonCreateNestedManyWithoutCreatorInput
    teams?: TeamCreateNestedManyWithoutCreatorInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    judge?: JudgeCreateNestedManyWithoutUserInput
    teamMembers?: teamMembersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamRequestInput = {
    id?: string
    name?: string | null
    email: string
    gamertag: string
    role?: $Enums.Role
    emailVerified?: boolean | null
    image?: string | null
    isVerified?: boolean | null
    lightningAddress?: string | null
    publicBio?: string | null
    publicStaticCharge?: string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonUncheckedCreateNestedManyWithoutCreatorInput
    teams?: TeamUncheckedCreateNestedManyWithoutCreatorInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    judge?: JudgeUncheckedCreateNestedManyWithoutUserInput
    teamMembers?: teamMembersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamRequestInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamRequestInput, UserUncheckedCreateWithoutTeamRequestInput>
  }

  export type TeamUpsertWithoutTeamRequestInput = {
    update: XOR<TeamUpdateWithoutTeamRequestInput, TeamUncheckedUpdateWithoutTeamRequestInput>
    create: XOR<TeamCreateWithoutTeamRequestInput, TeamUncheckedCreateWithoutTeamRequestInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutTeamRequestInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutTeamRequestInput, TeamUncheckedUpdateWithoutTeamRequestInput>
  }

  export type TeamUpdateWithoutTeamRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teamAvatar?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutTeamNestedInput
    registrations?: HackathonRegistrationUpdateManyWithoutTeamNestedInput
    creator?: UserUpdateOneRequiredWithoutTeamsNestedInput
    teamMembers?: teamMembersUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutTeamRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teamAvatar?: StringFieldUpdateOperationsInput | string
    creatorId?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutTeamNestedInput
    registrations?: HackathonRegistrationUncheckedUpdateManyWithoutTeamNestedInput
    teamMembers?: teamMembersUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UserUpsertWithoutTeamRequestInput = {
    update: XOR<UserUpdateWithoutTeamRequestInput, UserUncheckedUpdateWithoutTeamRequestInput>
    create: XOR<UserCreateWithoutTeamRequestInput, UserUncheckedCreateWithoutTeamRequestInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeamRequestInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeamRequestInput, UserUncheckedUpdateWithoutTeamRequestInput>
  }

  export type UserUpdateWithoutTeamRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lightningAddress?: NullableStringFieldUpdateOperationsInput | string | null
    publicBio?: NullableStringFieldUpdateOperationsInput | string | null
    publicStaticCharge?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonUpdateManyWithoutCreatorNestedInput
    teams?: TeamUpdateManyWithoutCreatorNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    judge?: JudgeUpdateManyWithoutUserNestedInput
    teamMembers?: teamMembersUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    gamertag?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    emailVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    lightningAddress?: NullableStringFieldUpdateOperationsInput | string | null
    publicBio?: NullableStringFieldUpdateOperationsInput | string | null
    publicStaticCharge?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableJsonNullValueInput | InputJsonValue
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    remainingAmountLimits?: NullableJsonNullValueInput | InputJsonValue
    hackathons?: HackathonUncheckedUpdateManyWithoutCreatorNestedInput
    teams?: TeamUncheckedUpdateManyWithoutCreatorNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    judge?: JudgeUncheckedUpdateManyWithoutUserNestedInput
    teamMembers?: teamMembersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HackathonCreateManyCreatorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    benefits: string
    rules: string
    judgingCriteria: string
    firstPlacePrize: string
    secondPlacePrize: string
    thirdPlacePrize: string
    published?: boolean
    startDate: string
    endDate: string
  }

  export type TeamCreateManyCreatorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    teamAvatar: string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    refresh_token_expires_in?: number | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type JudgeCreateManyUserInput = {
    id?: string
    hackathonId: string
  }

  export type teamMembersCreateManyUserInput = {
    id?: string
    teamId: string
  }

  export type teamRequestCreateManyUserInput = {
    id?: string
    teamId: string
    teamName: string
    userSenderName: string
    userReceiver?: string | null
    state: boolean
  }

  export type HackathonUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    benefits?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    judgingCriteria?: StringFieldUpdateOperationsInput | string
    firstPlacePrize?: StringFieldUpdateOperationsInput | string
    secondPlacePrize?: StringFieldUpdateOperationsInput | string
    thirdPlacePrize?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutHackathonNestedInput
    registrations?: HackathonRegistrationUpdateManyWithoutHackathonNestedInput
    judge?: JudgeUpdateManyWithoutHackathonNestedInput
    judgeassessments?: JudgeassessmentsUpdateManyWithoutHackathonNestedInput
    hackathonSponsors?: HackathonSponsorsUpdateManyWithoutHackathonNestedInput
    hackathonSponsors?: HackathonSponsorsUpdateManyWithoutHackathonNestedInput
  }

  export type HackathonUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    benefits?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    judgingCriteria?: StringFieldUpdateOperationsInput | string
    firstPlacePrize?: StringFieldUpdateOperationsInput | string
    secondPlacePrize?: StringFieldUpdateOperationsInput | string
    thirdPlacePrize?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutHackathonNestedInput
    registrations?: HackathonRegistrationUncheckedUpdateManyWithoutHackathonNestedInput
    judge?: JudgeUncheckedUpdateManyWithoutHackathonNestedInput
    judgeassessments?: JudgeassessmentsUncheckedUpdateManyWithoutHackathonNestedInput
    hackathonSponsors?: HackathonSponsorsUncheckedUpdateManyWithoutHackathonNestedInput
    hackathonSponsors?: HackathonSponsorsUncheckedUpdateManyWithoutHackathonNestedInput
  }

  export type HackathonUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    benefits?: StringFieldUpdateOperationsInput | string
    rules?: StringFieldUpdateOperationsInput | string
    judgingCriteria?: StringFieldUpdateOperationsInput | string
    firstPlacePrize?: StringFieldUpdateOperationsInput | string
    secondPlacePrize?: StringFieldUpdateOperationsInput | string
    thirdPlacePrize?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teamAvatar?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutTeamNestedInput
    registrations?: HackathonRegistrationUpdateManyWithoutTeamNestedInput
    teamMembers?: teamMembersUpdateManyWithoutTeamNestedInput
    teamRequest?: teamRequestUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teamAvatar?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutTeamNestedInput
    registrations?: HackathonRegistrationUncheckedUpdateManyWithoutTeamNestedInput
    teamMembers?: teamMembersUncheckedUpdateManyWithoutTeamNestedInput
    teamRequest?: teamRequestUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    teamAvatar?: StringFieldUpdateOperationsInput | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JudgeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hackathon?: HackathonUpdateOneRequiredWithoutJudgeNestedInput
    judgeassessments?: JudgeassessmentsUpdateManyWithoutJudgeNestedInput
  }

  export type JudgeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hackathonId?: StringFieldUpdateOperationsInput | string
    judgeassessments?: JudgeassessmentsUncheckedUpdateManyWithoutJudgeNestedInput
  }

  export type JudgeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    hackathonId?: StringFieldUpdateOperationsInput | string
  }

  export type teamMembersUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    team?: TeamUpdateOneRequiredWithoutTeamMembersNestedInput
  }

  export type teamMembersUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type teamMembersUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type teamRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    userSenderName?: StringFieldUpdateOperationsInput | string
    userReceiver?: NullableStringFieldUpdateOperationsInput | string | null
    state?: BoolFieldUpdateOperationsInput | boolean
    team?: TeamUpdateOneRequiredWithoutTeamRequestNestedInput
  }

  export type teamRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    userSenderName?: StringFieldUpdateOperationsInput | string
    userReceiver?: NullableStringFieldUpdateOperationsInput | string | null
    state?: BoolFieldUpdateOperationsInput | boolean
  }

  export type teamRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    userSenderName?: StringFieldUpdateOperationsInput | string
    userReceiver?: NullableStringFieldUpdateOperationsInput | string | null
    state?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectCreateManyTeamInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    loomLink: string
    pitchLink: string
    projectResourceLink: string
    comments?: string | null
    hackathonId: string
  }

  export type HackathonRegistrationCreateManyTeamInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hackathonId: string
  }

  export type teamMembersCreateManyTeamInput = {
    id?: string
    userId: string
  }

  export type teamRequestCreateManyTeamInput = {
    id?: string
    teamName: string
    userSender: string
    userSenderName: string
    userReceiver?: string | null
    state: boolean
  }

  export type ProjectUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    loomLink?: StringFieldUpdateOperationsInput | string
    pitchLink?: StringFieldUpdateOperationsInput | string
    projectResourceLink?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    hackathon?: HackathonUpdateOneRequiredWithoutProjectsNestedInput
    judgeassessments?: JudgeassessmentsUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    loomLink?: StringFieldUpdateOperationsInput | string
    pitchLink?: StringFieldUpdateOperationsInput | string
    projectResourceLink?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    hackathonId?: StringFieldUpdateOperationsInput | string
    judgeassessments?: JudgeassessmentsUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    loomLink?: StringFieldUpdateOperationsInput | string
    pitchLink?: StringFieldUpdateOperationsInput | string
    projectResourceLink?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    hackathonId?: StringFieldUpdateOperationsInput | string
  }

  export type HackathonRegistrationUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hackathon?: HackathonUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type HackathonRegistrationUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hackathonId?: StringFieldUpdateOperationsInput | string
  }

  export type HackathonRegistrationUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hackathonId?: StringFieldUpdateOperationsInput | string
  }

  export type teamMembersUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTeamMembersNestedInput
  }

  export type teamMembersUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type teamMembersUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type teamRequestUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    userSenderName?: StringFieldUpdateOperationsInput | string
    userReceiver?: NullableStringFieldUpdateOperationsInput | string | null
    state?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTeamRequestNestedInput
  }

  export type teamRequestUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    userSender?: StringFieldUpdateOperationsInput | string
    userSenderName?: StringFieldUpdateOperationsInput | string
    userReceiver?: NullableStringFieldUpdateOperationsInput | string | null
    state?: BoolFieldUpdateOperationsInput | boolean
  }

  export type teamRequestUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamName?: StringFieldUpdateOperationsInput | string
    userSender?: StringFieldUpdateOperationsInput | string
    userSenderName?: StringFieldUpdateOperationsInput | string
    userReceiver?: NullableStringFieldUpdateOperationsInput | string | null
    state?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjectCreateManyHackathonInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    description: string
    loomLink: string
    pitchLink: string
    projectResourceLink: string
    comments?: string | null
    teamId: string
  }

  export type HackathonRegistrationCreateManyHackathonInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teamId: string
  }

  export type JudgeCreateManyHackathonInput = {
    id?: string
    userId: string
    judgeGamertag: string
    email: string
    judgeImage: string
  }

  export type JudgeassessmentsCreateManyHackathonInput = {
    id?: string
    impact: number
    feasability: number
    user_experience: number
    scalability: number
    innovate: number
    pitch: number
    overall_score: Decimal | DecimalJsLike | number | string
    projectId: string
    judgeId: string
  }

  export type HackathonSponsorsCreateManyHackathonInput = {
    id?: string
    name: string
    email: string
    image: string
  }

  export type HackathonSponsorsCreateManyHackathonInput = {
    id?: string
    name: string
    email: string
    image: string
  }

  export type ProjectUpdateWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    loomLink?: StringFieldUpdateOperationsInput | string
    pitchLink?: StringFieldUpdateOperationsInput | string
    projectResourceLink?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    judgeassessments?: JudgeassessmentsUpdateManyWithoutProjectNestedInput
    team?: TeamUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    loomLink?: StringFieldUpdateOperationsInput | string
    pitchLink?: StringFieldUpdateOperationsInput | string
    projectResourceLink?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
    judgeassessments?: JudgeassessmentsUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    loomLink?: StringFieldUpdateOperationsInput | string
    pitchLink?: StringFieldUpdateOperationsInput | string
    projectResourceLink?: StringFieldUpdateOperationsInput | string
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type HackathonRegistrationUpdateWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutRegistrationsNestedInput
  }

  export type HackathonRegistrationUncheckedUpdateWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type HackathonRegistrationUncheckedUpdateManyWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type JudgeUpdateWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutJudgeNestedInput
    judgeassessments?: JudgeassessmentsUpdateManyWithoutJudgeNestedInput
  }

  export type JudgeUncheckedUpdateWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    judgeGamertag?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    judgeImage?: StringFieldUpdateOperationsInput | string
    judgeassessments?: JudgeassessmentsUncheckedUpdateManyWithoutJudgeNestedInput
  }

  export type JudgeUncheckedUpdateManyWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    judgeGamertag?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    judgeImage?: StringFieldUpdateOperationsInput | string
  }

  export type JudgeassessmentsUpdateWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    impact?: IntFieldUpdateOperationsInput | number
    feasability?: IntFieldUpdateOperationsInput | number
    user_experience?: IntFieldUpdateOperationsInput | number
    scalability?: IntFieldUpdateOperationsInput | number
    innovate?: IntFieldUpdateOperationsInput | number
    pitch?: IntFieldUpdateOperationsInput | number
    overall_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    project?: ProjectUpdateOneRequiredWithoutJudgeassessmentsNestedInput
    judge?: JudgeUpdateOneRequiredWithoutJudgeassessmentsNestedInput
  }

  export type JudgeassessmentsUncheckedUpdateWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    impact?: IntFieldUpdateOperationsInput | number
    feasability?: IntFieldUpdateOperationsInput | number
    user_experience?: IntFieldUpdateOperationsInput | number
    scalability?: IntFieldUpdateOperationsInput | number
    innovate?: IntFieldUpdateOperationsInput | number
    pitch?: IntFieldUpdateOperationsInput | number
    overall_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    projectId?: StringFieldUpdateOperationsInput | string
    judgeId?: StringFieldUpdateOperationsInput | string
  }

  export type JudgeassessmentsUncheckedUpdateManyWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    impact?: IntFieldUpdateOperationsInput | number
    feasability?: IntFieldUpdateOperationsInput | number
    user_experience?: IntFieldUpdateOperationsInput | number
    scalability?: IntFieldUpdateOperationsInput | number
    innovate?: IntFieldUpdateOperationsInput | number
    pitch?: IntFieldUpdateOperationsInput | number
    overall_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    projectId?: StringFieldUpdateOperationsInput | string
    judgeId?: StringFieldUpdateOperationsInput | string
  }

  export type HackathonSponsorsUpdateWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type HackathonSponsorsUncheckedUpdateWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type HackathonSponsorsUncheckedUpdateManyWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type HackathonSponsorsUpdateWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type HackathonSponsorsUncheckedUpdateWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type HackathonSponsorsUncheckedUpdateManyWithoutHackathonInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type JudgeassessmentsCreateManyProjectInput = {
    id?: string
    impact: number
    feasability: number
    user_experience: number
    scalability: number
    innovate: number
    pitch: number
    overall_score: Decimal | DecimalJsLike | number | string
    hackathonId: string
    judgeId: string
  }

  export type JudgeassessmentsUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    impact?: IntFieldUpdateOperationsInput | number
    feasability?: IntFieldUpdateOperationsInput | number
    user_experience?: IntFieldUpdateOperationsInput | number
    scalability?: IntFieldUpdateOperationsInput | number
    innovate?: IntFieldUpdateOperationsInput | number
    pitch?: IntFieldUpdateOperationsInput | number
    overall_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hackathon?: HackathonUpdateOneRequiredWithoutJudgeassessmentsNestedInput
    judge?: JudgeUpdateOneRequiredWithoutJudgeassessmentsNestedInput
  }

  export type JudgeassessmentsUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    impact?: IntFieldUpdateOperationsInput | number
    feasability?: IntFieldUpdateOperationsInput | number
    user_experience?: IntFieldUpdateOperationsInput | number
    scalability?: IntFieldUpdateOperationsInput | number
    innovate?: IntFieldUpdateOperationsInput | number
    pitch?: IntFieldUpdateOperationsInput | number
    overall_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hackathonId?: StringFieldUpdateOperationsInput | string
    judgeId?: StringFieldUpdateOperationsInput | string
  }

  export type JudgeassessmentsUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    impact?: IntFieldUpdateOperationsInput | number
    feasability?: IntFieldUpdateOperationsInput | number
    user_experience?: IntFieldUpdateOperationsInput | number
    scalability?: IntFieldUpdateOperationsInput | number
    innovate?: IntFieldUpdateOperationsInput | number
    pitch?: IntFieldUpdateOperationsInput | number
    overall_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hackathonId?: StringFieldUpdateOperationsInput | string
    judgeId?: StringFieldUpdateOperationsInput | string
  }

  export type JudgeassessmentsCreateManyJudgeInput = {
    id?: string
    impact: number
    feasability: number
    user_experience: number
    scalability: number
    innovate: number
    pitch: number
    overall_score: Decimal | DecimalJsLike | number | string
    hackathonId: string
    projectId: string
  }

  export type JudgeassessmentsUpdateWithoutJudgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    impact?: IntFieldUpdateOperationsInput | number
    feasability?: IntFieldUpdateOperationsInput | number
    user_experience?: IntFieldUpdateOperationsInput | number
    scalability?: IntFieldUpdateOperationsInput | number
    innovate?: IntFieldUpdateOperationsInput | number
    pitch?: IntFieldUpdateOperationsInput | number
    overall_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hackathon?: HackathonUpdateOneRequiredWithoutJudgeassessmentsNestedInput
    project?: ProjectUpdateOneRequiredWithoutJudgeassessmentsNestedInput
  }

  export type JudgeassessmentsUncheckedUpdateWithoutJudgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    impact?: IntFieldUpdateOperationsInput | number
    feasability?: IntFieldUpdateOperationsInput | number
    user_experience?: IntFieldUpdateOperationsInput | number
    scalability?: IntFieldUpdateOperationsInput | number
    innovate?: IntFieldUpdateOperationsInput | number
    pitch?: IntFieldUpdateOperationsInput | number
    overall_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hackathonId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type JudgeassessmentsUncheckedUpdateManyWithoutJudgeInput = {
    id?: StringFieldUpdateOperationsInput | string
    impact?: IntFieldUpdateOperationsInput | number
    feasability?: IntFieldUpdateOperationsInput | number
    user_experience?: IntFieldUpdateOperationsInput | number
    scalability?: IntFieldUpdateOperationsInput | number
    innovate?: IntFieldUpdateOperationsInput | number
    pitch?: IntFieldUpdateOperationsInput | number
    overall_score?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hackathonId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamCountOutputTypeDefaultArgs instead
     */
    export type TeamCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HackathonCountOutputTypeDefaultArgs instead
     */
    export type HackathonCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HackathonCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectCountOutputTypeDefaultArgs instead
     */
    export type ProjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JudgeCountOutputTypeDefaultArgs instead
     */
    export type JudgeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JudgeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationTokenDefaultArgs instead
     */
    export type VerificationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamDefaultArgs instead
     */
    export type TeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HackathonDefaultArgs instead
     */
    export type HackathonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HackathonDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HackathonRegistrationDefaultArgs instead
     */
    export type HackathonRegistrationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HackathonRegistrationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectDefaultArgs instead
     */
    export type ProjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactDefaultArgs instead
     */
    export type ContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SponsorsDefaultArgs instead
     */
    export type SponsorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SponsorsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JudgeDefaultArgs instead
     */
    export type JudgeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JudgeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JudgeassessmentsDefaultArgs instead
     */
    export type JudgeassessmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JudgeassessmentsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HackathonSponsorsDefaultArgs instead
     */
    export type HackathonSponsorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HackathonSponsorsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use teamMembersDefaultArgs instead
     */
    export type teamMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = teamMembersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use teamRequestDefaultArgs instead
     */
    export type teamRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = teamRequestDefaultArgs<ExtArgs>

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