const express = require('express');
const router = express.Router();
const mysql = require('./mysql');
const bodyParser = require('body-parser');
const sql = require('./mysql');


const urlecodeParser=bodyParser.urlencoded({extended:false});

//Leva para outras rotas
router.get('/iniciar', (req, res) =>{
    res.render('iniciar');

});

//Retorna todos os usuários(com ou sem filtro ou pelo ID)
router.get('/MostrarUsuarios', (req,res) => {
    res.render('mostrarUsuarios');
    
});

router.post('/RetornarUsuarioComOuSemFiltro',urlecodeParser, (req, res) =>{

    if (req.body.filtro) {
           
        mysql.query('select * from tableusuarios where nome=?',[req.body.filtro],function (err, result,fields) {
            res.render("RetornarUsuariosComOuSemFiltros",{data:result});});


    }else{
        
                mysql.query('select * from tableusuarios', function (err, result,fields) {
                    res.render("RetornarUsuariosComOuSemFiltros",{data:result});});
                    
                
            }
        

});
 
router.post('/RetornarUsuarioID', urlecodeParser,(req,res) =>{
    mysql.query('select * from tableusuarios where id=?',[req.body.IDConsulta], function (err, result,fields) {
        res.render("RetornarUsuariosComOuSemFiltros",{data:result});});
    
});

//------------------------add um usuário-----------
router.get('/addUsuarios', (req,res) => {   
res.render('CadastrarUsuarios');
});


router.post('/resUsuarios', urlecodeParser, (req,res) =>{

 mysql.query("insert into tableusuarios(nome,cargo,idade) values (?,?,?)",[req.body.nome, req.body.cargo, req.body.idade]);   
res.render('UsuarioCadastrado');
});
//-------------------------------------------------

//---------------------Atualiza um usuario
router.get('/usuarios', (req, res)=>{
res.render('AtualizarUsuarioH');
});

router.post('/AtualizarUsuario', urlecodeParser,(req,res)=>{
   
    mysql.query("update tableusuarios set nome=?, cargo=?, idade=? where id=? ",[ req.body.nome, req.body.cargo,req.body.idade, req.body.id ]);
    res.render('UsuarioAtualizado');
});
//-------------------------------------------


//-----------deleta um usuário------------------------
router.get('/DeletarUsuario', (req, res) =>{
res.render('DeletarUsuario');
});


router.post('/UsuarioDeletado',urlecodeParser, (req, res) =>{
    
    mysql.query("delete from tableusuarios where id=?",[req.body.IDDeletar]);
    res.render('UsuarioDeletado')
});
//-----------------------------------------------------
module.exports = router;