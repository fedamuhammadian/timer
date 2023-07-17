
const args = process.argv;

for (let i = 0; i < args.length; i++) {
  const time = args[i];

  if (!isNaN(time) && time > 0) {
    setTimeout(() => {
      console.log(`Beep! ${time} seconds elapsed.`);
        console.log('\x07');
    }, time * 1000);
  }
}