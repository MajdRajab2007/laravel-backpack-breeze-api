<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form method='POST' action='http://127.0.0.1:8000/register' className='bg-red-500 text-bluePrime font-bold flex flex-col gap-5'>
    @csrf
    <input  type="text" name='name' placeholder="Name" />
        <input  type="email" name='email'  placeholder="Email" />
        <input  type="password" name='password' placeholder="Password" />
        <button type="submit" className='p-8 bg-black text-white'>Register</button>
    </form>
</body>
</html>
