<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TECHNOVATION 2K22</title>

    <link rel="icon" href="https://inspire2k22.tech/img/Code.png" type="image/icon type">

    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.1/css/all.css" integrity="sha384-/frq1SRXYH/bSyou/HUp/hib7RVN1TawQYja658FEOodR/FQBKVqT9Ol+Oz3Olq5" crossorigin="anonymous">
    <style>
        th,
        td {
            padding-top: 10px;
            padding-bottom: 20px;
            padding-left: 30px;
            padding-right: 40px;
        }
        .tbl{
            color: white;
            border: solid 1px lightgray;
        }
        th{
            border-bottom: solid 1px blue;
        }
    </style>
</head>
<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', '', 'coding_quizb');

// get the post records
$username = $_POST['username'];
$cname = $_POST['cname'];
$Fscore = $_POST['txt'];
//$txtMessage = $_POST['txtMessage'];

// database insert SQL code
$sql = "INSERT INTO `scoring` (`Name`,`College_Name`,`Score`) VALUES ('$username','$cname','$Fscore')";

// insert in database 
$rs = mysqli_query($con, $sql);

if ($rs) {
    // $link_address = '/index.html';
    echo '<a href="/CQuiz/index1.html"></a>';
}

?>

<body>
    <div class="container">
        <div id="home" class="flex-column flex-center">
            <h1 id="auto_bot"> High Scores</h1>
            <!-- <h1>Are You Ready ?</h1> -->
            <!-- added  path /Coding Quizz/main_game.html & /Coding Quizz/highscore.html to host via xampp-->
            <!-- <a href="https://www.hackerrank.com/" class="btn">Play</a> -->
            <!-- <a href="/CQuiz/highscore.html" id="highscore-btn" class="btn">High Scores<i class="fas fa-crown"> </i></a> -->


            <?php
            $sql = "SELECT * FROM scoring ORDER BY Score DESC";
            $result = $con->query($sql);
            $ranking = 1;
            if ($result->num_rows > 0) {
                echo '<div>';
                echo '<h2 class="h2dis">';
                echo '<table id="home" class="tbl" cellspacing="20">';
                echo '<thead>';
                echo '<tr>';
                echo '<th>Ranking</th>';
                echo '<th>Team Name</th>';
                echo '<th>College Name</th>';
                echo '<th>Score</th>';

                echo '</tr>';
                echo '</thead>';
                echo '<tbody>';
                while ($row = $result->fetch_assoc()) {
                    echo '<tr>';
                    echo "<td>{$ranking}</td>";
                    echo '<td>' . $row["Name"] . '</td>';
                    echo '<td>' . $row["College_Name"] . '</td>';
                    echo '<td>' . $row["Score"] . '</td>';
                    echo '<td>';
                    echo '</td>';
                    echo '</tr>';
                    $ranking++;
                }
                echo '</tbody>';
                echo '</table>';
                echo '</h2>';
                echo '<div>';
            } else {
                '0 Results';
            }
            ?>
            <a href="/CQuiz/index.html" class="btn" style="position: relative; top:auto; left:45%; padding:2%;">Home</a>

        </div>
        <div>
        </div>

    </div>
    <script src="index_prev.js"></script>





</body>

</html>