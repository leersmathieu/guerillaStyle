<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="views/assets/css/style.css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Guerrilla Style</title>
    </head>
    <body>
        <?php 

            $action = isset($_GET['action']) ? htmlentities($_GET['action']) : 'home';

            require "controllers/controle.php"; 
        ?>
        
        <script src="js/main.js"></script>
    </body>
</html>