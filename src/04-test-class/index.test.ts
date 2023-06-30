// Uncomment the code below and write your tests
import {
  getBankAccount,
  BankAccount,
  InsufficientFundsError,
  TransferFailedError,
  SynchronizationFailedError,
} from '.';

describe('BankAccount', () => {
  let account: BankAccount;
  let balance: number;

  beforeEach(() => {
    account = getBankAccount(1000);
  });

  test('should create account with initial balance', () => {
    balance = account.getBalance();
    expect(balance).toBe(1000);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    function insufficient() {
      account.withdraw(3000);
    }
    expect(insufficient).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const anAcount = getBankAccount(300);
    const tran = () => {
      account.transfer(30000, anAcount);
    };
    expect(tran).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring to the same account', () => {
    expect(() => account.transfer(200, account)).toThrowError(
      TransferFailedError,
    );
  });

  test('should deposit money', () => {
    account.deposit(30000);
    expect(account.getBalance()).toBe(31000);
  });

  test('should withdraw money', () => {
    account.withdraw(250);
    expect(account.getBalance()).toBe(750);
  });

  test('should transfer money', () => {
    const anAcount = getBankAccount(300);
    account.transfer(100, anAcount);
    expect(account.getBalance()).toBe(900);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const res = await account.fetchBalance();
    expect(res).not.toBeNaN();
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const res = await account.fetchBalance();
    expect(res).not.toBeNaN();
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const res = await account.synchronizeBalance();
    expect(res).toThrowError(SynchronizationFailedError);
  });
});
