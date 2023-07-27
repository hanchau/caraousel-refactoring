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

        // Act
        const coverFlow = new CoverFlow('#cover-flow', data);

        // Assert
        expect(coverFlow.selectedIdx).toBe(4);
    });

    it('selected cover should be 200px width and height and info box should be updated.', function () {

        // Act
        const coverFlow = new CoverFlow('#cover-flow', data);

        // Assert
        expect(container.querySelector(`#IMAGE_${coverFlow.selectedIdx}`).style.width).toBe('200px');
        expect(container.querySelector(`#IMAGE_${coverFlow.selectedIdx}`).style.height).toBe('200px');
        expect($("#infoBox").text()).toEqual(data[coverFlow.selectedIdx].info);
    });

    it('selected index should should be moved to `selectedIdx - 1` when clicked on backward button ' +
        'and info box should be updated and should throw an error if the index is less than 0.', function () {
        // Arrange
        const coverFlow = new CoverFlow('#cover-flow', data);

        for(let index = data.length/2; index >= 0 ; index--) {
            const oldSelectedIndex = coverFlow.selectedIdx;
            if (index == 0) {
                expect($("#backward").click()).toThrow(`You can't go farther left.`)}
                break;
            // Act
            $("#backward").click();

            // Assert
            expect(coverFlow.selectedIdx).toBe(oldSelectedIndex - 1);
            expect(container.querySelector(`#IMAGE_${oldSelectedIndex}`).style.width).toBe('100px');
            expect(container.querySelector(`#IMAGE_${oldSelectedIndex}`).style.height).toBe('100px');
            expect($("#infoBox").text()).toEqual(data[coverFlow.selectedIdx].info);
        }

    });


    it('selected index should should be moved to `selectedIdx + 1` when clicked on forward button ' +
        'and info box should be updated and should throw an error if the index is greater than the length of the data.', function () {
        // Arrange
        const coverFlow = new CoverFlow('#cover-flow', data);
        for (let index = data.length/2; index <= data.length - 1 ; index++) {
            const oldSelectedIndex = coverFlow.selectedIdx;

            // Act
            $("#forward").click();

            // Assert
            expect(coverFlow.selectedIdx).toBe(oldSelectedIndex + 1);
            expect(container.querySelector(`#IMAGE_${oldSelectedIndex}`).style.width).toBe('100px');
            expect(container.querySelector(`#IMAGE_${oldSelectedIndex}`).style.height).toBe('100px');
            expect($("#infoBox").text()).toEqual(data[coverFlow.selectedIdx].info);
        }
    });


    it('if clicked on `Beatles` cover, the selectedIdx should be updated to the Beatles Index ' +
        'and Beatles Covers height and width should be updated to 200px and 200px ' +
        'and info box should be updated with the info `Beatles` ' +
        'and previously selected image height and width should be reduced to 100px and 100px.', function () {
        // Arrange
        const coverFlow = new CoverFlow('#cover-flow', data);
        let searchInfo = 'Beatles';
        let indexOfBeatles = data.findIndex(function(item) {
            return item.info === searchInfo;
        });
        let oldSelectedIdx = coverFlow.selectedIdx;
        var imageofBeatles = `#IMAGE_${indexOfBeatles}`
        var fistImage = `#IMAGE_0`
        var oldImage = `#IMAGE_${oldSelectedIdx}`

        // Act
        $(imageofBeatles).click();

        // Assert
        expect(coverFlow.selectedIdx).toBe(String(indexOfBeatles));
        expect(container.querySelector(imageofBeatles).style.width).toBe('200px');
        expect(container.querySelector(imageofBeatles).style.height).toBe('200px');
        expect($("#infoBox").text()).toEqual(data[coverFlow.selectedIdx].info);

        // Assert 2: All other Covers should be 100px height and width;
        for (let index = 0; index <= data.length - 1 ; index++) {
            if (index == indexOfBeatles){
                continue;
            }
            // Assert
            expect(container.querySelector(`#IMAGE_${index}`).style.width).toBe('100px');
            expect(container.querySelector(`#IMAGE_${index}`).style.height).toBe('100px');
        }

    });

});
