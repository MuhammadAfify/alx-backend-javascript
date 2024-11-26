Process.stdout.wrtite("Welcome to Holberton School, what is your name?\n");

process.stdin.on('data', () => {
    const name = process.stdin.read();

	if (name) {
    process.stdout.write(`Your name is: ${name}`);
	}
    });
process.stdin.end(() => {
        process.stdout.write("This important software is now closing\n");
    });
