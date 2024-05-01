// Reads user input from the command line and display it

process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  if (input) {
    console.log('Your name is:', input);
  }
});

process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit();
});
