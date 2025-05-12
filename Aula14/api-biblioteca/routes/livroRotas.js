import express from 'express'
import { listarLivrosController, obterLivroPorIdController, criarLivroController, atualizarLivroController, excluirLivroController } from '../controllers/LivroController.js';
import authMiddleware from '../middlewares/authMiddleware.js'
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads/'));
  },
  filename: (Req, file, cb) => {
    const nomeArquivo = `${Date.now()}-${file.originalname}`;
    cb(null, nomeArquivo);
  }
});

const upload = multer({ storage: storage });

const router = express.Router()

router.get('/', listarLivrosController);
router.get('/:id', obterLivroPorIdController);

router.post('/', authMiddleware, upload.single('capa'), atualizarLivroController);

router.put('/:id', authMiddleware, upload.single('capa'), atualizarLivroController);

router.delete('/:id',authMiddleware, excluirLivroController)

router.options('/',(req,res)=>{
  res.setHeader('Allow', 'GET', 'POST','PUT', 'DELETE')
})

export default router 