import fs from "node:fs"

function createFile(text) {
    fs.writeFileSync("arquivo.txt", text)
}

function showFile() {
    try{
        const content = fs.readFileSync('arquivo.txt', 'utf-8')
        console.log(content)
    } catch (error) {
        console.log("Erro ao ler o arquivo", error.message)
    }
}

function updateFile(text) {
    fs.writeFileSync("arquivo.txt", text)
}

function deleteFile() {
    try {
        fs.unlinkSync('arquivo.txt')
        console.log('Arquivo excluído com sucesso')
    } catch (error) {
        console.log("Erro ao excluir arquivo", error.message)
    }
}

export { createFile, showFile, updateFile, deleteFile }