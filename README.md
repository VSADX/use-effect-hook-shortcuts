# useEffect shortcuts
🌌 **What is useEffect shortcuts**   
It's a useState wrapper that adds just a few features.  
  
🌄 **What do the useEffect shortcuts do?**  
They are a custom useState hook that creates common useEffect hooks on-demand.  
  
🌆 **How does it work?**  
Since you can place extra properties on a function, we placed a few useEffect wrappers 
directly inside your set function from useState. There is `use`, `pipe`, or `bool`. 
All they do is call useEffect or useState as needed.
  
## Examples

### `.pipe()` creates a computed value
```js
function SomeComponent() {
  const [name, setName] = useStateRx("Red Sofa")
  const initials = setName.pipe(() => 
      name.split(" ").map(name_part => 
          `${name_part[0]}.`).join(" "))
          
  console.log(initials) // "R. S."

  return (
    <>
      <p> {initials} </p>
      <input onInput={e => setName(e.target.value)}
    </>
  )
}
```

### `.bool()` creates matching ternaries
```js 
function OtherComponent() {
  const [countdown, setCountdown] = useStateRx(0)
  
  const [notClicked, isClicked] = setCountdown.bool("red","green")
  
  setCountdown.use(() => {
    if(countdown) {
      window.setTimeout(() => setCountdown(countdown - 1), 1000)
    }
  })

  return (
    <>
      <button onClick={() => setCountdown(3)}>Flip for 3 seconds</button>
      <p className={notClicked}>{notClicked}</p>
      <p className={isClicked}>{isClicked}</p>
    </>
  )
}
```
