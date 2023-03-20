jest.mock('react-redux', () => ({
  useSelector: jest.fn(fn => fn()),
}));
