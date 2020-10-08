# client-side-validation

This script validate a form with java script.
Only purpose of it is giving a <br/>feedback for users.
Recomended to validate data on a server-side too.

Sample Template :<br/>
```html
START
<form>
   <label>
      <sub>$type</sub> //not necessary
       <input type='$type'/>
    </label>
    <input type='submit'/>
</form> 

<script src="$path-to-script"></script>
<script>
  var form = new FormV($selected-form-element);
</script>
END

```

$type - required , it decided how the input will be validing

$path-to-script -path from current document to script.js file

 $selected-form-element - for example : 
 ```javascript
document.querySelector('form');
```
At this moment this script validate email,text and password type inputs
