# sass-variables
An utility for declaring variables in SASS files.

## Example
```javascript
import sassify from 'sassifyObject';

const output = sassify({
  color: 'red',
  url: '\'https://example.com/\'',
  number: 5
});
```

**Output**:
```sass
$color: red;
$url: 'https://example.com/';
$number: 5;
```


### Notes
In CSS, some variables are wrapped in quotes, while others are not. 
To allow for this, variables are not automatically surrounded in quotes. 

To add quotes, add some escaped single quotes around your variable, like so.
`'\'https://example.com/\''`
