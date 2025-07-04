# nodejs-eicar

**nodejs-eicar** is a simple Node.js utility that prints or writes the [EICAR test string](https://en.wikipedia.org/wiki/EICAR_test_file), commonly used to test antivirus detection systems. It can be used as a command-line tool or as a module in your Node.js applications.

This package is intended for **security teams**, **red teams**, and **developers** who want to verify AV/EDR behavior when interacting with potentially suspicious Node.js packages — a growing supply chain risk.

---

## ⚠️ Disclaimer

> This project uses the official **EICAR test string**, which is **not malicious** and is recognized by antivirus software as a safe test pattern.  
> It is provided **strictly for testing and educational purposes**. Use only in environments you own or have permission to test.

---

## 📦 Installation

Install globally via [npm](https://www.npmjs.com/package/nodejs-eicar):

```bash
npm install -g nodejs-eicar
```

---

## 🚀 CLI Usage

After installation, you can run:

```bash
eicar-print
```

This will print the EICAR test string directly to your console.

---

## 💻 Programmatic Usage

You can also use `nodejs-eicar` in your Node.js scripts:

```js
const Eicar = require('nodejs-eicar');

const eicar = new Eicar();

// Print the EICAR string
eicar.print();

// Write the EICAR string to a file
eicar.writeToFile('eicar.txt');
```

---

## 🧩 API

### `new Eicar()`

Creates a new Eicar instance with a `.string` property containing the EICAR test string.

### `eicar.print()`

Prints the EICAR string to the console. Returns `true` on success or `false` on error.

### `eicar.writeToFile(filePath)`

Appends the EICAR string to the given file path. Returns `true` on success or `false` on failure.

---

## 📁 Project Structure

```
nodejs-eicar/
├── index.js      # Core logic
├── cli.js        # CLI interface (eicar-print)
├── package.json
├── README.md
└── LICENSE
```

---

## ✅ Use Case

- Test AV/EDR reactions to `npm` installs and CLI tools
- Simulate detection events in safe, controlled environments
- Validate security controls and monitoring pipelines

---

## 🛡 License

MIT License — see [LICENSE](LICENSE)

---

## 🧑‍💻 Author

Created by [Khalid Al-Amri](https://www.linkedin.com/in/khalidwalamri/) — for use in cybersecurity labs and secure dev environments.

---

## 🌍 Links

- [GitHub Repository](https://github.com/khalidwalidalamri/NodeJS-Eicar.git)
- [npm Package](https://www.npmjs.com/package/nodejs-eicar)
- [About EICAR](https://www.eicar.org/download-anti-malware-testfile/)
