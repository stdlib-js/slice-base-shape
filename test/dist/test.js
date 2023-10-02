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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var S = require( '@stdlib/slice-ctor' );
var MultiSlice = require( '@stdlib/slice-multi' );
var normalizeMultiSlice = require( '@stdlib/slice-base-normalize-multi-slice' );
var sliceShape = require( './../../dist' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sliceShape, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the shape of a normalized multi-slice', function test( t ) {
	var expected;
	var actual;
	var values;
	var shape;
	var i;

	shape = [ 10, 5 ];

	/* eslint-disable new-cap */

	values = [
		normalizeMultiSlice( new MultiSlice( S(), null ), shape, false ),
		normalizeMultiSlice( new MultiSlice( 2, S( 10 ) ), shape, false ),
		normalizeMultiSlice( new MultiSlice( S( 2, 10 ), S() ), shape, false ),
		normalizeMultiSlice( new MultiSlice( null, S( 2, null ) ), shape, false ),
		normalizeMultiSlice( new MultiSlice( S( null, 10 ), S( null, 10 ) ), shape, false ),
		normalizeMultiSlice( new MultiSlice( S( -2 ), -2 ), shape, false ),
		normalizeMultiSlice( new MultiSlice( -2, S( -5, -2 ) ), shape, false ),
		normalizeMultiSlice( new MultiSlice( S( null, 10, 2 ), S( -5, null ) ), shape, false ),
		normalizeMultiSlice( new MultiSlice( null, S( 3, 3, 1 ) ), shape, false ),
		normalizeMultiSlice( new MultiSlice( S( 5, 3, 1 ), null ), shape, false ),
		normalizeMultiSlice( new MultiSlice( S( 3, 5, -1 ), 2 ), shape, false ),
		normalizeMultiSlice( new MultiSlice( S( -5, -5, 1 ), S() ), shape, false ),
		normalizeMultiSlice( new MultiSlice( null, S( 0, 0, 1 ) ), shape, false ),
		normalizeMultiSlice( new MultiSlice( S( 10, 10, 1 ), S( 1, 1, 1 ) ), shape, false ),
		normalizeMultiSlice( new MultiSlice( S( null, 10, 3 ), S( -5, null, 2 ) ), shape, false )
	];

	/* eslint-enable new-cap */

	expected = [
		// Slice( 0, 10, 1 ), Slice( 0, 5, 1 )
		[ 10, 5 ],

		// Slice( 2, 3, 1 ), Slice( 0, 5, 1 )
		[ 1, 5 ],

		// Slice( 2, 10, 1 ), S( 0, 5, 1 )
		[ 8, 5 ],

		// Slice( 0, 10, 1 ), Slice( 2, 5, 1 )
		[ 10, 3 ],

		// Slice( 0, 10, 1 ), Slice( 0, 5, 1 )
		[ 10, 5 ],

		// Slice( 0, 8, 1 ), Slice( 3, 4, 1 )
		[ 8, 1 ],

		// Slice( 8, 9, 1 ), Slice( 0, 3, 1 )
		[ 1, 3 ],

		// Slice( 0, 10, 2 ), Slice( 0, 5, 1 )
		[ 5, 5 ],

		// Slice( 0, 10, 1 ), Slice( 3, 3, 1 )
		[ 10, 0 ],

		// Slice( 5, 3, 1 ), Slice( 0, 5, 1 )
		[ 0, 5 ],

		// Slice( 3, 5, -1 ), Slice( 2, 3, 1 )
		[ 0, 1 ],

		// Slice( 5, 5, 1 ),  Slice( 0, 5, 1 )
		[ 0, 5 ],

		// Slice( 0, 10, 1 ), Slice( 0, 0, 1 )
		[ 10, 0 ],

		// Slice( 10, 10, 1 ), Slice( 1, 1, 1 )
		[ 0, 0 ],

		// Slice( 0, 10, 3 ), Slice( 0, 5, 2 )
		[ 4, 3 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		actual = sliceShape( values[ i ] );
		t.deepEqual( actual, expected[ i ], 'returns expected value. slice: ' + values[ i ].toString() );
	}
	t.end();
});
