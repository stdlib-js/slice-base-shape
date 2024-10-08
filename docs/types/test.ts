/*
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

import MultiSlice = require( '@stdlib/slice-multi' );
import sliceShape = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	sliceShape( new MultiSlice( null, null ) ); // $ExpectType number[]
	sliceShape( new MultiSlice( null, null, null ) ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided a first argument which is not a multi-slice object...
{
	sliceShape( '1' ); // $ExpectError
	sliceShape( 1 ); // $ExpectError
	sliceShape( true ); // $ExpectError
	sliceShape( false ); // $ExpectError
	sliceShape( null ); // $ExpectError
	sliceShape( undefined ); // $ExpectError
	sliceShape( [] ); // $ExpectError
	sliceShape( {} ); // $ExpectError
	sliceShape( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	sliceShape(); // $ExpectError
	sliceShape( new MultiSlice( null, null ), 10 ); // $ExpectError
	sliceShape( new MultiSlice( null, null ), 10, {} ); // $ExpectError
}
