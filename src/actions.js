export const createUser = name => {
  return {
    type: 'ADD',
    user: name
  }
};

export const deleteUser = index => {
  return {
    type: 'OK',
    index
  }
};