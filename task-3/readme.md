# Results summary page

Most probably, will require media query will set max 800 px width for mobile, larger is desktop

## used

- local fonts

## New understood CSS

### to center text in div

```css
#button {
  background-color: hsl(224, 30%, 27%);
  color: hsl(241, 100%, 89%);
  height: 50px;
  border-radius: 25px;

  display: table;
  width: 100%;
}

#button p {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  top: 25%;
}
```

### To use media query as

```css

@media screen and (max-width: 800px) {
  main {
    flex-direction: column;
  }

  figure{
    width: 100%;
    border-radius: 0 0 25px 25px ;
  }
  aside{
    width: 100%;
  }

}
# ```

### use simple snimations

```css
aside>p {
  transition: transform .2s; /* Animation */  
}

aside>p:hover{
  transform: scale(1.2);
}
```

### use gradient

```css
  /* Gradient 2 colours */
  background-image: linear-gradient(
    0deg,
    hsl(252, 100%, 67%),
    hsl(241, 81%, 54%)
  );
```
