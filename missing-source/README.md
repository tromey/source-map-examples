Create the bundle using:

```
mv saved-s1.js s1.js
mv saved-s2.js s2.js
webpack --devtool nosources-source-map s1.js s2.js bundle.js
mv s1.js saved-s1.js
mv s2.js saved-s2.js
```

... then edit the map file to fix the source URLs.
