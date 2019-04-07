const Block = require('./block');
const {GENESIS_DATA} = require('./config')

describe('Block', () => {
    const timestamp = 'a data';
    const lastHash= 'foo hash';
    const hash = 'ba';
    const data= 'data';
    const block = new Block({
        timestamp,
        lastHash,
        hash,
        data
    });
    it('hash a timestamp, last hash, hash', () => {
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);

    });
    
    describe('genesis()', () => {
        const genesisBlock = Block.genesis();
    
        it('returns a Block instance', () => {
          expect(genesisBlock instanceof Block).toBe(true);
        });
    
        it('returns the genesis data', () => {
          expect(genesisBlock).toEqual(GENESIS_DATA);
        });
      });
    
    
    
    

});