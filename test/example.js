import { expect } from 'chai';
import client from '../src/index';

describe("Example", function() {
  it("should return something", async (done) => {
    var req = client({
      find: () => () => 1
    });

    try {
      let res = await req();

      expect(res).be.a('function');

      let result = await res();

      expect(result).to.equal(1);

      done();
    }
    catch (e) {
      done(e);
    }
  });

  it("should return nothing", async (done) => {
    var req = client({
      find: () => {}
    });

    try {
      let res = await req();

      expect(res).be.a('function');

      let result = await res();

      expect(result).to.be.undefined;

      done();
    }
    catch (e) {
      done(e);
    }
  });
});
