<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form method='POST' action='http://localhost:8000/api/users/info/test@example.com' enctype="multipart/form-data">
        @method('PUT')
        <input type="text" name="about">
        <button type="submit" className='p-8 bg-black text-white'>Register</button>
    </form>
</body>

</html>