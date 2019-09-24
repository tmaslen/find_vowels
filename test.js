'use strict'

const expect = require( "chai" ).expect;

const findVowels = require( "./index" );

describe( "find vowels", () => {

    it( "returns an array of vowels in parameter", () => {

        expect( findVowels( "aaa", [ "a", "a", "a" ]   ) ).to.deep.equal( true );
        expect( findVowels( "abcdef", [ "a", "e" ] ) ).to.deep.equal( true );
        expect( findVowels( "bbb", [] ) ).to.deep.equal( true );

    });

});