// Use or create database
use('bankDB')

// Drop collection if exists (for clean setup)
db.accounts.drop();

// Create accounts collection and insert sample data
db.accounts.insertMany([
  {
    _id: "A001",
    name: "Alice",
    balance: 1000,
    currency: "EUR"
  },
  {
    _id: "B001",
    name: "Bob",
    balance: 500,
    currency: "EUR"
  }
]);

// Check initial state
print("=== BEFORE TRANSACTION ===");
db.accounts.find().forEach(printjson);


// Start session for transaction
var session = db.getMongo().startSession();
var accounts = session.getDatabase("bankDB").accounts;

try {
  session.startTransaction();

  var transferAmount = 1200;

  // Debit Account A
  var fromAccount = accounts.findOne({ _id: "A001" });

  if (fromAccount.balance < transferAmount) {
    throw new Error("Insufficient funds");
  }

  accounts.updateOne(
    { _id: "A001" },
    { $inc: { balance: -transferAmount } }
  );

  // Credit Account B
  accounts.updateOne(
    { _id: "B001" },
    { $inc: { balance: transferAmount } }
  );

  // Commit transaction
  session.commitTransaction();
  print("Transaction committed successfully");

} catch (e) {
  print("Transaction aborted: " + e.message);
  session.abortTransaction();
} finally {
  session.endSession();
}


// Check final state
print("=== AFTER TRANSACTION ===");
db.accounts.find().forEach(printjson);