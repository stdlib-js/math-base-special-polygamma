<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Polygamma

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Polygamma][polygamma-function] function.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-polygamma
```

</section>

<section class="usage">

## Usage

```javascript
var polygamma = require( '@stdlib/math-base-special-polygamma' );
```

#### polygamma( n, x )

Evaluates the [polygamma function][polygamma-function] of order `n`; i.e., the `(n+1)`th derivative of the [natural logarithm][@stdlib/math/base/special/ln] of the [gamma function][@stdlib/math/base/special/gamma].

```javascript
var v = polygamma( 3, 1.2 );
// returns ~3.245

v = polygamma( 5, 1.2 );
// returns ~41.39

v = polygamma( 3, -4.9 );
// returns ~60014.239
```

If `n` is not a nonnegative `integer`, the function returns `NaN`.

```javascript
var v = polygamma( 2.5, -1.2 );
// returns NaN

v = polygamma( -1, 5.3 );
// returns NaN
```

If `x` is `0` or a negative odd `integer`, the function returns `+Infinity`.

```javascript
var v = polygamma( 2, 0.0 );
// returns +Infinity

v = polygamma( 2, -1.0 );
// returns +Infinity
```

If `x` on the other hand is a negative even `integer`, the function returns `NaN`.

```javascript
v = polygamma( 2, -4.0 );
// returns NaN

v = polygamma( 2, -2.0 );
// returns NaN
```

If provided `NaN` as either parameter, the function returns `NaN`.

```javascript
var v = polygamma( NaN, 2.1 );
// returns NaN

v = polygamma( 1, NaN );
// returns NaN

v = polygamma( NaN, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var polygamma = require( '@stdlib/math-base-special-polygamma' );

var n;
var x;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    n = round( randu()*50.0 );
    v = polygamma( x, n );
    console.log( 'x: %d, ψ^(%d)(x): %d', x, n, v );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/trigamma`][@stdlib/math/base/special/trigamma]</span><span class="delimiter">: </span><span class="description">trigamma function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/digamma`][@stdlib/math/base/special/digamma]</span><span class="delimiter">: </span><span class="description">digamma function.</span>
-   <span class="package-name">[`@stdlib/math/base/special/gamma`][@stdlib/math/base/special/gamma]</span><span class="delimiter">: </span><span class="description">gamma function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-polygamma.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-polygamma

[test-image]: https://github.com/stdlib-js/math-base-special-polygamma/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-polygamma/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-polygamma/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-polygamma?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-polygamma.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-polygamma/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-polygamma/main/LICENSE

[polygamma-function]: https://en.wikipedia.org/wiki/Polygamma_function

[@stdlib/math/base/special/ln]: https://github.com/stdlib-js/math-base-special-ln

<!-- <related-links> -->

[@stdlib/math/base/special/trigamma]: https://github.com/stdlib-js/math-base-special-trigamma

[@stdlib/math/base/special/digamma]: https://github.com/stdlib-js/math-base-special-digamma

[@stdlib/math/base/special/gamma]: https://github.com/stdlib-js/math-base-special-gamma

<!-- </related-links> -->

</section>

<!-- /.links -->
