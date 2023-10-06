/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable new-cap */

'use strict';

var S = require( '@stdlib/slice-ctor' );
var MultiSlice = require( '@stdlib/slice-multi' );
var normalizeMultiSlice = require( '@stdlib/slice-base-normalize-multi-slice' );
var sliceShape = require( './../lib' );

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
