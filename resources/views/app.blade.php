<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form method='POST' action='http://localhost:8000/api/users/read/test@example.com' className='bg-red-500 text-bluePrime font-bold flex flex-col gap-5'>
        <input type="text" name="input">
        <button type="submit" className='p-8 bg-black text-white'>Register</button>
    </form>
</body>

</html>