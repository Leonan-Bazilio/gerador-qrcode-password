import chalk from "chalk"


const promptQrCode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QR CODE"),
  },
  {
    name: "type",
    description: chalk.yellow("Escolha entre o tipo de QRcode (1 - normal ou 2 - terminal)"),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    required: true,
  }
];

export default promptQrCode
