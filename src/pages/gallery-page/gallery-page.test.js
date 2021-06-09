const galleryMock = [
    {
        id: 1,
        title: "star wars",
        titleColor: '#d22',
        coverBkgd: 'cream',
        flair: "KettleIcon",
        num: 9,
        vol: 'IV'
    },
    {
        id: 2,
        title: "the empire strikes back",
        titleColor: '#d33',
        coverBkgd: 'sky',
        flair: "HotIcon",
        num: 8,
        vol: 'V'
    },
    {
        id: 3,
        title: "return of the jedi",
        titleColor: '#333',
        coverBkgd: 'gold',
        flair: "BatIcon",
        num: 5,
        vol: 'VI'
    }
];

describe('gallery-page tests', (()=>{
    it('string test', () => {
        expect('hi').toBe('hi');
    });
    
    it('array test', () => {
        expect(
            galleryMock.map((item) => {
                return item.title;
            })
        ).toStrictEqual(['star wars', 'the empire strikes back', 'return of the jedi']);
    });
    
    it('empty array test', () => {
        expect(
            [].map((item) => {
                return item.title;
            })
        ).toStrictEqual([]);
    });
}));

// TODO: Import functions to test.