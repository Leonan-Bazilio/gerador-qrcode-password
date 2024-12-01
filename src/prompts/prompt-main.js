import chalk from "chalk"

const mainPrompt = [{
  name: "select",
  description: chalk.yellow.bold("Escolha a ferramenta (1 - QRCODE , 2 Password)"),
  pattern: /^[1-2]+$/,
  messege: chalk.red.italic("Escolha apenas entre 1 ou 2"),
  required: true
}
]

export default mainPrompt