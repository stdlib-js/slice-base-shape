<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# sliceShape

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the shape of a [normalized multi-slice][@stdlib/slice/base/normalize-multi-slice].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/slice-base-shape
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var sliceShape = require( '@stdlib/slice-base-shape' );
```

<a name="main"></a>

#### sliceShape( slice )

Returns the shape of a [normalized multi-slice][@stdlib/slice/base/normalize-multi-slice].

<!-- eslint-disable new-cap -->

```javascript
var S = require( '@stdlib/slice-ctor' );
var MultiSlice = require( '@stdlib/slice-multi' );
var normalizeMultiSlice = require( '@stdlib/slice-base-normalize-multi-slice' );

var s = new MultiSlice( S( -4, null, -1 ), S( 2, 10, 1 ) );
// returns <MultiSlice>

s = normalizeMultiSlice( s, [ 10, 10 ], false );
// returns <MultiSlice>

var sh = sliceShape( s );
// returns [ 7, 8 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable new-cap -->

```javascript
var S = require( '@stdlib/slice-ctor' );
var MultiSlice = require( '@stdlib/slice-multi' );
var normalizeMultiSlice = require( '@stdlib/slice-base-normalize-multi-slice' );
var sliceShape = require( '@stdlib/slice-base-shape' );

var s1 = new MultiSlice( S( 3, null, -1 ), S( 3, 7, 1 ) );
var s2 = normalizeMultiSlice( s1, [ 10, 10 ], false );
var sh = sliceShape( s2 );
console.log( '%s => %s', s1.toString(), s2.toString() );
console.log( '[ %s ]', sh.join( ', ' ) );
// => '[ 4, 4 ]'

s1 = new MultiSlice( null, S( -1, -8, -2 ) );
s2 = normalizeMultiSlice( s1, [ 11, 12 ], false );
sh = sliceShape( s2 );
console.log( '%s => %s', s1.toString(), s2.toString() );
console.log( '[ %s ]', sh.join( ', ' ) );
// => '[ 11, 4 ]'

s1 = new MultiSlice( S( null, null, 1 ), null );
s2 = normalizeMultiSlice( s1, [ 11, 12 ], false );
sh = sliceShape( s2 );
console.log( '%s => %s', s1.toString(), s2.toString() );
console.log( '[ %s ]', sh.join( ', ' ) );
// => '[ 11, 12 ]'

s1 = new MultiSlice( S( 5, 5, 1 ), null );
s2 = normalizeMultiSlice( s1, [ 11, 12 ], false );
sh = sliceShape( s2 );
console.log( '%s => %s', s1.toString(), s2.toString() );
console.log( '[ %s ]', sh.join( ', ' ) );
// => '[ 0, 12 ]'

s1 = new MultiSlice( S( 5, 5, 1 ), S( 3, 3, 1 ) );
s2 = normalizeMultiSlice( s1, [ 10, 10 ], false );
sh = sliceShape( s2 );
console.log( '%s => %s', s1.toString(), s2.toString() );
console.log( '[ %s ]', sh.join( ', ' ) );
// => '[ 0, 0 ]'
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/slice-base/length`][@stdlib/slice/base/length]</span><span class="delimiter">: </span><span class="description">compute the number of elements in a normalized slice.</span>
-   <span class="package-name">[`@stdlib/slice-base/nonreduced-dimensions`][@stdlib/slice/base/nonreduced-dimensions]</span><span class="delimiter">: </span><span class="description">return a list of non-reduced dimensions in an un-normalized multi-slice.</span>
-   <span class="package-name">[`@stdlib/slice-base/reduced-dimensions`][@stdlib/slice/base/reduced-dimensions]</span><span class="delimiter">: </span><span class="description">return a list of reduced dimensions in an un-normalized multi-slice.</span>

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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/slice-base-shape.svg
[npm-url]: https://npmjs.org/package/@stdlib/slice-base-shape

[test-image]: https://github.com/stdlib-js/slice-base-shape/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/slice-base-shape/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/slice-base-shape/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/slice-base-shape?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/slice-base-shape.svg
[dependencies-url]: https://david-dm.org/stdlib-js/slice-base-shape/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/slice-base-shape/tree/deno
[deno-readme]: https://github.com/stdlib-js/slice-base-shape/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/slice-base-shape/tree/umd
[umd-readme]: https://github.com/stdlib-js/slice-base-shape/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/slice-base-shape/tree/esm
[esm-readme]: https://github.com/stdlib-js/slice-base-shape/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/slice-base-shape/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/slice-base-shape/main/LICENSE

[@stdlib/slice/base/normalize-multi-slice]: https://github.com/stdlib-js/slice-base-normalize-multi-slice

<!-- <related-links> -->

[@stdlib/slice/base/length]: https://github.com/stdlib-js/slice-base-length

[@stdlib/slice/base/nonreduced-dimensions]: https://github.com/stdlib-js/slice-base-nonreduced-dimensions

[@stdlib/slice/base/reduced-dimensions]: https://github.com/stdlib-js/slice-base-reduced-dimensions

<!-- </related-links> -->

</section>

<!-- /.links -->
