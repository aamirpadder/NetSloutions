import {perfectSize} from '../../../src/utils/utility';

describe('check perfectSize method', () => {
  it('if value is in string ', () => {
    expect(perfectSize('edssd')).toBeFalsy();
  });
});
