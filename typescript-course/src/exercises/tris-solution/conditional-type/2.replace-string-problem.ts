type Name = ReplaceSpaceWithDash<"Emmylou Harris Brr">;
type ReplaceSpaceWithDash<T extends string> =
  T extends `${infer FirstName} ${infer LastName}`
    ? `${FirstName}-${LastName}`
    : never;
//   ^? "Emmylou-Harris"

type DashName<T> = Replace<"Matt Pocock", " ", "-">;
type Replace<
  S extends string,
  P extends string,
  D extends string
> = S extends `${infer FirstName}${P}${infer LastName}`
  ? `${FirstName}${D}${LastName}`
  : never;
//   ^? "Matt-Pocock"
type Result<T> = StringReplace<"Evondev Frontend Dev", " ", "-">;
type StringReplace<
  T extends string,
  S extends string,
  D extends string
> = T extends `${infer FirstWord}${S}${infer LastWord}` 
? `${FirstWord}${D}${StringReplace<LastWord,S,D>}` 
: T;
//   ^? "Evondev-Frontend-Dev"
export {};
