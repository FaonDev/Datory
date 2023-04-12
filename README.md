# Datory - Store information easily.

Simple database with dynamic saving.

## Installation:

```sh-session
npm install datory
yarn add datory
pnpm add datory
```

## Quick Start:

```js
const InitDatory = require('datory');
```

<p>With TypeScript:</p>

```ts
import InitDatory from 'datory';
```

### Examples:

```ts
...
const Datory = new InitDatory('json.sql');
/* Also includes UTF-8 based modules. */

Datory.putInto({
    /* Name: Value */
    Foo: 'Bar'
});

Datory.findInto('Foo');
// > 'Bar'

Datory.listAll();
// > [{ Foo: "Bar" }]
```

## Comments
Before [creating an issue](), please be aware that this project is joining BETA.

## License

Refer to the [LICENSE](LICENSE).