# base31

A Base31 encoding and decoding library for Javascript. 

#### Includes 
`23456789abcdefghjkmnpqrstuvwxyz`

#### excludes
`0o1il`


### Usage 

```javascript
const base31 = require('../index.js')

let encodedValue = base31.encode(1547625598); // 3s3tfge
let decodedValue = base31.decode('3s3tfge'); // 1547625598

```

