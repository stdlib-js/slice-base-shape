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

var bench = require( '@stdlib/bench' );
var isNonNegativeIntegerArray = require( '@stdlib/assert-is-nonnegative-integer-array' ).primitives;
var S = require( '@stdlib/slice-ctor' );
var MultiSlice = require( '@stdlib/slice-multi' );
var normalizeMultiSlice = require( '@stdlib/slice-base-normalize-multi-slice' );
var pkg = require( './../package.json' ).name;
var sliceShape = require( './../lib' );


// VARIABLES //

/* eslint-disable new-cap */

var SLICES = [
	S( null, null, null ),
	S( 0, 10, 2 ),
	S( null, 10, 2 ),
	S( 0, null, 2 ),
	S( 0, 10, null ),
	S( -20, -5, -2 ),
	S( 5, 20, 2 ),
	S( null, null, -1 ),
	S( 5, -20, -2 ),
	S( 20, null, -1 ),
	S( 0, -2, 2 ),
	S( -5, null, 2 )
];

/* eslint-enable new-cap */


// MAIN //

bench( pkg+':ndims=1', function benchmark( b ) {
	var values;
	var shape;
	var out;
	var i;

	shape = [ 10 ];

	values = [
		normalizeMultiSlice( new MultiSlice( SLICES[ 0 ] ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 1 ] ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 2 ] ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 3 ] ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 4 ] ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 5 ] ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 6 ] ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 7 ] ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 8 ] ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 9 ] ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 10 ] ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 11 ] ), shape, false )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = sliceShape( values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isNonNegativeIntegerArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':ndims=2', function benchmark( b ) {
	var values;
	var shape;
	var out;
	var s;
	var i;

	shape = [ 10, 10 ];
	s = SLICES[ 5 ];

	values = [
		normalizeMultiSlice( new MultiSlice( SLICES[ 0 ], s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 1 ], s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 2 ], s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 3 ], s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 4 ], s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 5 ], s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 6 ], s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 7 ], s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 8 ], s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 9 ], s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 10 ], s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 11 ], s ), shape, false )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = sliceShape( values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isNonNegativeIntegerArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':ndims=3', function benchmark( b ) {
	var values;
	var shape;
	var out;
	var s;
	var i;

	shape = [ 10, 10, 10 ];
	s = SLICES[ 5 ];

	values = [
		normalizeMultiSlice( new MultiSlice( SLICES[ 0 ], s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 1 ], s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 2 ], s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 3 ], s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 4 ], s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 5 ], s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 6 ], s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 7 ], s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 8 ], s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 9 ], s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 10 ], s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 11 ], s, s ), shape, false )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = sliceShape( values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isNonNegativeIntegerArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':ndims=4', function benchmark( b ) {
	var values;
	var shape;
	var out;
	var s;
	var i;

	shape = [ 10, 10, 10, 10 ];
	s = SLICES[ 5 ];

	values = [
		normalizeMultiSlice( new MultiSlice( SLICES[ 0 ], s, s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 1 ], s, s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 2 ], s, s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 3 ], s, s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 4 ], s, s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 5 ], s, s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 6 ], s, s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 7 ], s, s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 8 ], s, s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 9 ], s, s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 10 ], s, s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 11 ], s, s, s ), shape, false )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = sliceShape( values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isNonNegativeIntegerArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':ndims=5', function benchmark( b ) {
	var values;
	var shape;
	var out;
	var s;
	var i;

	shape = [ 10, 10, 10, 10, 10 ];
	s = SLICES[ 5 ];

	values = [
		normalizeMultiSlice( new MultiSlice( SLICES[ 0 ], s, s, s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 1 ], s, s, s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 2 ], s, s, s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 3 ], s, s, s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 4 ], s, s, s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 5 ], s, s, s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 6 ], s, s, s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 7 ], s, s, s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 8 ], s, s, s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 9 ], s, s, s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 10 ], s, s, s, s ), shape, false ),
		normalizeMultiSlice( new MultiSlice( SLICES[ 11 ], s, s, s, s ), shape, false )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = sliceShape( values[ i%values.length ] );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isNonNegativeIntegerArray( out ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
