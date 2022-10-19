<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>High Scores</title>
    <link rel="styleSheet" href="style.css">
    <link rel="styleSheet" href="highscore.css">
    <link rel="styleSheet" href="https://use.fontawesome.com/releases/v5.13.1/css/all.css" integrity="sha384-xxzQGERXS00kBmZW/6qzqJPyxW3UR0BPsLaIWXva5kFi7TxkIIaMiKtqV1Q" crossorigin="anonymous">
<style>
    .demo{
        position: absolute;
        left: 45%;
        top:auto;
    }
</style>
</head>

<body>
    <div class="container">
        <div id="highScores" class="flex-center flex-column">
            <h1 id="finalScore"> Leaderboard </h1>
            <ul id="highScoresList"></ul>
            
            <?php
$con = mysqli_connect('localhost', 'root', '', 'coding_quizb');

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
            <!-- added  path /Coding Quizz/index.html to host via xampp-->
            <div class="demo">
            <a href="/CQuiz/index.html" class="btn">Go Home<i class="fas fa-home"></i></a>

            </div>
        </div>
    </div>

    <script src="highscore.js"></script>

</body>

</html>