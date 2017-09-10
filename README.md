# test-fej2017-01-dynamic-options-react
Test FEJ2017 - 01 Dynamic Options using React

This repository has been built to answer the test from https://github.com/sbhalim/test-fej2017/blob/master/01-dynamic-options.md

---

Modify following snippet so that clicking on "Add Child Name" button will dynamically add new child name input similar to existing Child Name input example. Clicking on (-) must remove the input from the form.

```html
<!DOCTYPE html>
<html>
<head>
    <style type="text/css">
        form label {margin: .25rem 1rem .25rem 0; width: 7rem; display: inline-block;}
        form input[type=text] {margin: .25rem 0 .25rem 0; width: 15rem;}
    </style>
</head>
<body>
    <form>
        <fieldset>
            <label>Full Name:</label> <input name="fullname" type="text" /><br />
            <label>Spouse Name:</label> <input name="spouse" type="text" /><br />
        </fieldset>
        <fieldset>
            <legend>Children</legend>
            <label>(-) Child Name:</label><input name="children[]" type="text" /><br />
            <label>(-) Child Name:</label><input name="children[]" type="text" /><br />
            <button id="addChildButton">Add Child Name</button>
        </fieldset>
    </form>
</body>
</html>
```
