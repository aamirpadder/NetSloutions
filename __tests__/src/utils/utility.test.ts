import {loadMore, perfectSize, setLocalData} from '../../../src/utils/utility';

describe('check perfectSize method', () => {
  it('if value is in string ', () => {
    expect(perfectSize('edssd')).toBeFalsy();
  });

  it('if value is in Number ', () => {
    expect(perfectSize(2000)).toBeTruthy();
  });
});


describe('check setLocalData method', () => {
  let data: any = [];

  it('if values is not given', () => {
    expect(setLocalData().length).toBe(1);
  });

  it('if data is Empty data should be add in array ', () => {
    const values = setLocalData('12',data, 'Hello','comment');
    expect(values.length).toBe(1);
    expect(values[0].id).toBe('12');
    expect(values[0].comment).toBe('Hello');
  });

  it('if same data is update data should be add in array ', () => {
    const values = setLocalData('12',data, 'Working on Jest','comment');
    expect(values.length).toBe(1);
    expect(values[0].id).toBe('12');
    expect(values[0].comment).toBe('Working on Jest');
  });
});


describe('loadMore method', () => {
  let data: any = [];
  const responseData = [
    {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
    },
  ];

  let page = 1;
  let totalPage = 0;
  const setData = value => {
    data = value;
  };
  const setTotalPage = value => {
    totalPage = value;
  };

  const setPage = value => {
    page = value;
  };

  it('if values is not given', () => {
    expect(loadMore()).toBeUndefined();
  });

  it('if data is Empty data should be add in array ', () => {
    loadMore(data, responseData, page, 10, setPage, setData, setTotalPage);
    expect(data.length).toBe(1);
    expect(totalPage).toBe(10);
    expect(page).toBe(2);
  });

  it('if data is added again. duplicate values should be removed from the array if any ', () => {
    loadMore(data, responseData, page, 12, setPage, setData, setTotalPage);
    expect(data.length).toBe(1);
    expect(totalPage).toBe(12);
    expect(page).toBe(3);
  });
});
