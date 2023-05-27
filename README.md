¿Qué sucedio al usar async y await?

El uso de async/await puede hacer que el código sea más legible,conciso y se asemeje a una programación síncrona.Permite una programación más lineal y estructurada.

¿Qué sucedio al usar el método then()?

también funciona pero requiere encadenar múltiples llamadas.

¿Qué diferencias encontraste entre async, await y el método then()?

Async/await: Se utiliza la palabra clave "async" para marcar una función como asíncrona. Dentro de una función asíncrona, se utiliza la palabra clave "await" antes de una llamada a una función que devuelve una promesa. Esto permite pausar la ejecución de la función hasta que la promesa se resuelva o se rechace. El manejo de errores en async/await se realiza utilizando bloques try/catch. Si una promesa se rechaza, se capturará el error en el bloque catch.

Método then(): Se utiliza el método "then()" en una promesa para manejar el resultado exitoso. Se encadena con el método "catch()" para manejar el rechazo de la promesa.El manejo de errores en el método then() se realiza utilizando el método catch() encadenado al final de la cadena de promesas. Cualquier error que ocurra en la cadena de promesas se capturará en el bloque catch.
