<form id="myForm">
    <input type="text" value="Entrez un texte" />
    <br /><br />
    <input type="submit" value="Submit !" />
    <input type="reset" value="Reset !" />
</form>
  
<script>
    var myForm = document.getElementById('myForm');
  
    myForm.addEventListener('submit', function(e) {
        alert('Vous avez envoyé le formulaire !\n\nMais celui-ci a été bloqué pour que vous ne changiez pas de page.');
        e.preventDefault();
    });
  
    myForm.addEventListener('reset', function(e) {
        alert('Vous avez réinitialisé le formulaire !');
    });
</script>