# HTML_CSS_Projects
# Contains two clone Sites of Netflix and UltraEdit 
# Code With Aamir Majeed Khan
# For any queries please feel free to contact at aamirmajeedkhan570@gmail.com
# Project Keyboard Events
```javascript
const insert = document.getElementById("insert");
window.addEventListener('keydown',(e)=>{
    insert.innerHTML = `
    <div class = "color">
    <table>
    <tr>
      <th>key</th>
      <th>key Code</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key===" "?"space":e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
  </div>
    `
})

```