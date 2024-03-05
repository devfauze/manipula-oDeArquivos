import { createFile, deleteFile, showFile, updateFile} from './function.mjs'

createFile("Conteúdo inicial do arquivo\nCriado com o fs do node.js")
showFile()
updateFile("Conteúdo modificado")
showFile()
deleteFile()