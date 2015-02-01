# Angular JSON Schema Form

> Angular directive for making forms out of JSON Schema

## How to use

* Install via bower
  ```
  bower install --save-dev mohsen1.schema-form
  ```
* Include `mohsen1.schema-form` in you app
  ```
     angular.module('myApp', ['mohsen1.schema-form'])
  ```
* Pass your JSON Schema to `json-schema-form` attribute directive on `<form>` element

  ```
    <form schema-form="{type: 'string'}" action="/" method="post">
      <button type="submit">Send</button>
    </form>
  ```
  This will result to this HTML:
  ```
    <form action="/" method="post">
      <input type="text">
      <button type="submit">Send</button>
    </form>
  ```
  
  Note that `schema-form` will **prepend** generated form elements.
## License
MIT
