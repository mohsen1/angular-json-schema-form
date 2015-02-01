# Angular JSON Schema Form

> Angular directive for making forms out of JSON Schema

## How to use

* Install via bower
* Include `mohsen1.json-schema-form` in you app
  ```
     angular.module('myApp' .... // TODO
  ```
* Pass your JSON Schema to `json-schema-form` attribute directive on `<form>` element

  ```
    <form
      json-schema-form="{title: 'first-name', type: 'string'}"
      action="/" method="post"
    >
      <button type="submit">Send</button>
    </form>
  ```
  This will result to this HTML:
  ```
    <form action="/" method="post">
      <input type="text" name="first-name">
      <button type="submit">Send</button>
    </form>
  ```
  
  Note that `json-schema-form` will **prepend** generated form elements
## License
MIT
