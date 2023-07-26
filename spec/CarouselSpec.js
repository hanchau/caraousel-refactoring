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
    const container = document.createElement('div');

    beforeEach(function () {
        jasmine.getStyleFixtures().fixturesPath = '/base/css';
        loadStyleFixtures("style.css");
        setFixtures('<div id="scratch"></div>');
        container.setAttribute('id', 'cover-flow');
        document.body.appendChild(container)
    });

    it( "given the data size to be nine the selected index should be 4.", function () {
        const coverFlow = new CoverFlow('#cover-flow', data);
        expect(coverFlow.selectedIdx).toBe(4);
    });

    it('selected cover should be 200px width and height.', function () {
        const coverFlow = new CoverFlow('#cover-flow', data);
        expect(container.querySelector(`#IMAGE_${coverFlow.selectedIdx}`).style.width).toBe('200px');
        expect(container.querySelector(`#IMAGE_${coverFlow.selectedIdx}`).style.height).toBe('200px');
    });

    it('selected index should should be moved to `selectedIdx - 1` when clicked on backward button.', function () {
        const coverFlow = new CoverFlow('#cover-flow', data);
        const oldSelectedIndex = coverFlow.selectedIdx;
        $("#backward").click();
        expect(coverFlow.selectedIdx).toBe(oldSelectedIndex - 1);
        expect(container.querySelector(`#IMAGE_${oldSelectedIndex}`).style.width).toBe('100px');
        expect(container.querySelector(`#IMAGE_${oldSelectedIndex}`).style.height).toBe('100px');
    });

    it('selected index should should be moved to `selectedIdx + 1` when clicked on forward button.', function () {
        const coverFlow = new CoverFlow('#cover-flow', data);
        const oldSelectedIndex = coverFlow.selectedIdx;
        $("#forward").click();
        expect(coverFlow.selectedIdx).toBe(oldSelectedIndex + 1);
        expect(container.querySelector(`#IMAGE_${oldSelectedIndex}`).style.width).toBe('100px');
        expect(container.querySelector(`#IMAGE_${oldSelectedIndex}`).style.height).toBe('100px');
    });

});
