   <?php  
    $connect = mysqli_connect("localhost", "root", "", "Angular");  
    $data = json_decode(file_get_contents("php://input"));  
     if(count(array($data))> 0)  
    {  
      $nom_received =  $data->send_nom;       
      $prenom_received = $data->send_prenom;
	  $phone_received =  $data->send_phone;
      $btnname_received = $data->send_btnName;
	  if($btnname_received == 'ADD'){
      $query = "INSERT INTO Angularjs(nom, prenom,tel) VALUES ('$nom_received', '$prenom_received','$phone_received')";  
      if(mysqli_query($connect, $query))  
      {echo "Data Inserted";  }  
      else  
      {echo 'Error';}  
     }
     if($btnname_received == 'Update'){
          $id_received = $data->send_id;
          $query = "UPDATE Angularjs SET nom = '$nom_received', prenom = '$prenom_received', tel = '$phone_received' WHERE id = '$id_received'";  
          if(mysqli_query($connect, $query))  
          {echo 'Data Updated';}  
          else  
          {echo 'Error';}  
     }
    }  
   ?>  
