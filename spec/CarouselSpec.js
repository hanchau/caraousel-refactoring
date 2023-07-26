describe("Photo Carousel", function () {
    var data = [
        { img: '/base/art/ledZeppelin.jpeg', info: 'Led Zeppelin' },
        { img: '/base/art/rollingStones.jpeg', info: 'Rolling Stones' },
        { img: '/base/art/ironMaiden.jpeg', info: 'Iron Maiden' },
        { img: '/base/art/queen.jpeg', info: 'Queen' },
        { img: '/base/art/greenday.jpeg', info: 'Green Day' },
        { img: '/base/art/acdc.jpeg', info: 'AC/DC' },
        { img: '/base/art/judasPriest.jpeg', info: 'Judas Priest' },
        { img: '/base/art/beatles.jpeg', info: 'Beatles' },
        { img: '/base/art/nirvana.jpeg', info: 'Nirvana' }
    ];

    beforeEach(function () {
        jasmine.getStyleFixtures().fixturesPath = '/base/css';
        loadStyleFixtures("style.css");
        setFixtures('<div id="scratch"></div>');
    });

    it( "Start here", function () {
        expect(true).toBeTruthy();
    });

    it( "should land on the 'Green Day' album cover with display text 'Green Day'.", function () {
        expect( data[4].img ).toEqual( '/base/art/greenday.jpeg' );
        expect( data[4].info ).toEqual( 'Green Day' );
    })

});
