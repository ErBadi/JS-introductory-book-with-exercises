// Ex 5
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

/* 
Here, since we are declaring a variable again, not reassigning its value
it returns the value of the globally scoped one
*/

// Ex 6

const FOO = 'bar';
{
  const FOO = 'qux';
  console.log(FOO);
}

console.log(FOO);

/*
Here it doesn´t throw an error since the variable is not being reassigned
but instead is being declared again within the block, son they don't
interfere between them. This is tricky xD.
*/