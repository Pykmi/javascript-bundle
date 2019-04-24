import { expect } from 'chai';
import localStorage from './storage';

const log = console.log;

describe('Test localStorage', () => {
  const ID = 'G1LA23HQUQ0';
  const LEN = 1;

  // check length() returns the correct number
  it(`localStorage length should be ${LEN}`, () => {
    expect(localStorage.length()).to.be.equal(LEN);
  });

  // check if the correct UserID persists in file storage
  it(`User's ID should be ${ID}`, () => {
    expect(localStorage.getItem('UserID')).to.be.equal(ID);
  });

  // clean up
  localStorage.clear();
  localStorage.setItem('UserID', ID);
});