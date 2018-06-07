<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="views/assets/css/style.css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
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