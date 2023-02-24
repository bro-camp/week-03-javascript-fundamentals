/* eslint-disable max-classes-per-file */
class NotANumberError extends Error {
  constructor(message = '') {
    super();
    this.name = 'NotANumberError';
    this.message = message;
  }
}

class HugeHeightError extends Error {
  constructor(message = '') {
    super();
    this.name = 'HugeHeightError';
    this.message = message;
  }
}

class TinyHeightError extends Error {
  constructor(message = '') {
    super();
    this.name = 'TinyHeightError';
    this.message = message;
  }
}
/* eslint-enable max-classes-per-file */

function checkUserHeight(height) {
  if (Number.isNaN(Number(height))) {
    throw new NotANumberError();
  } else if (height > 200) {
    throw new HugeHeightError();
  } else if (height < 40) {
    throw new TinyHeightError();
  } else {
    return true;
  }
}

const isValid = checkUserHeight('test');
// const isValid = checkUserHeight(250);
// const isValid = checkUserHeight(0);
// const isValid = checkUserHeight(78);

if (isValid) {
  console.log('Valid\n\n');
}
