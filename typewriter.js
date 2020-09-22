const sentence = "hello there from lighthouse labs";
let timeoutTime = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timeoutTime) // <= 1s delay to make it noticeable. Can dial it down later.
  timeoutTime += 50;
}
setTimeout(() => {
  process.stdout.write('\n');
}, timeoutTime)
