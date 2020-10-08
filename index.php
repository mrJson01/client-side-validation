<!DOCTYPE html>
<html lang="an">
<head>
	<meta charset="utf-8">
	<meta http-equiv='X-UA-Compatible' content="IE=edge">
	<meta name="viewport"content="width=device-width,initial-scale=1,shrink-to-fit=no">
	<title>JS - validation</title>
	<link rel="stylesheet"href="style.css"type="text/css"/>

</head>
<body>

	<form method="post" action="index.php">

		<label>
			<sub>E-mail</sub>
			<input type="email" name="email"required>
		</label>

		<label>
			<sub>username</sub>
			<input type="text" name="username" minlength='4' maxlength="8"required>
		</label>

		<label>
			<sub>password</sub>
			<input type="password" name="password"required>
		</label>

		<hr style="margin:15px 0"/>

		<label>
			<input type="date" max="2020-09-12" name="date">
		</label>

		<input type="submit" value="Zarejestruj się">
		
	</form>


	<script src="script.js" type="text/javascript"></script>
	<script type="text/javascript">
		const form = document.querySelector('form');
		const lol = new FormV(form);
	</script>

</body>
</html>