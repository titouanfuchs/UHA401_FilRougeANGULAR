# fil-rouge-titouan-2021-ANGULAR

Fil rouge avec un front ANGULAR

## Installation
Pour installer et utiliser le projet il suffit de mettre tout le contenu de cette branche dans un serveur apache (dans le dossier htdocs de xampp par exemple).

## Initialisation
Lors de la première initialisation il faut générer la base de données.

- Pour commencer, dans  `connexion_base.php` il faut changer si nécéssaire le nom d'utilisateur et le mot de passe de la base de données.
    ```php
    <?php
    session_start();
    $_SESSION['user'] = 'root'; //ici
    $_SESSION['pass'] = '';  //ici
    ```

- Une fois les modifications réalisée, il suffit d'aller à l'addresse ```http://localhost/fil-rouge-titouan-2021-angular/``` ou ```http://localhost/lien/vers/le/projet/ ```. 

- Puis d'aller à la page ```Administration``` avec le bouton à gauche de l'écran. 
    ![Bouton administration](https://i.imgur.com/IZLZ076.png "Administration")

- Enfin dans le menu ```Base de données``` selectionner ```Tout faire```. Cela va initialiser la base de données.
    ![Initialisation](https://i.imgur.com/NZVzDPc.png "Initialisation")

