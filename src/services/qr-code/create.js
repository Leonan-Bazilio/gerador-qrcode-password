import promptQrCode from "../../prompts/prompt-qrcode.js"
import handle from "./handle.js";
import prompt from "prompt";
async function createQrCode() {
  prompt.get(promptQrCode, handle);
  prompt.start();
}

export default createQrCode