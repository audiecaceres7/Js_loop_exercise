
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let object = [];
    for (let i = 0; i < array.length; i++) {
      const allDeposits = array[i].deposits ?? 0;
      const allWithdrawals = array[i].withdrawals ?? 0;
      
      let depositsTotal = 0;
      let withdrawalsTotal = 0;

        for (let j in allDeposits) {
          depositsTotal += allDeposits[j];
        };

        for (let j in allWithdrawals) {
          withdrawalsTotal += allWithdrawals[j];
        };
        
      if ((depositsTotal - withdrawalsTotal) !== array[i].balance) {
        object.push(array[i]);
        
      };
    };
  return object;
};



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
