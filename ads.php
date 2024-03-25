<?php

class Usuario
{
    private $pdo;
    public $msgErro = "";
    
    public function __construct($dbname,$host,$user,$senha)
    {
        try {
                $this->pdo = new PDO("mysql:dbname=".$dbname.";host=".$host,$user,$senha);
        }catch (\PDOThrowable $th) {
              
                $this->msgErro = $th->getMessage();
                exit();
        }catch (\Throwable $th){
                
            $this->msgErro = $th->getMessage();
                exit();
        }
    }
    public function cadastrarDados($nome,$telefone,$senha,$email){
        //BUSCAR SE O EMAIL JA FOI Cadastrado
        $cmd = $this->pdo->prepare("SELECT cod FROM usuario WHERE email=:e");
        $cmd->bindValue(':e',$email);
        $cmd->execute();
        //rowCount() conta as linhas que vem do banco de dados
        if($cmd->rowCount()>0){//se estiver cadastrado
            
            return false;
        }
        else{//ela nao esta cadastrada
            $cmd = $this->pdo->prepare("INSERT INTO usuario (nome,telefone,senha,email) VALUES(:n, :t, :s, :e)");
            $cmd->bindValue(':n',$nome);
            $cmd->bindValue(':t',$telefone);
            $cmd->bindValue(':s',$senha);
            $cmd->bindValue(':e',$email);
            $cmd->execute();
            return true;//pessoa cadastrada com sucesso
        }


      
    }
    public function logarDados($email,$senha){
        $cmd = $this->pdo->prepare("SELECT cod FROM usuario WHERE email=:e AND senha=:s");
        $cmd->bindValue(':e',$email);
        $cmd->bindValue(':s',$senha);
        $cmd->execute();
        if($cmd->rowCount()>0){
            $dado = $cmd->fetch();
            session_start();
            $_SESSION['cod'] = $dado['cod'];
            return true;
        }
        else{
            return false;
        }
    }
}


?>