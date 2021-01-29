import React,{useState} from 'react'
import axiosWithAuth from '../helpers/axiosWithAuth';
const initialValues = {
color: "",
code: {
  hex: "",
}
}
const AddColor = ({updateColors}) => {

const [colors,setColors] = useState(initialValues);

const handleChange = (e) => {
    if(e.target.name === "hex"){
        setColors({...colors,code:{[e.target.name]:e.target.value}})
    }
    else{
        setColors({...colors,[e.target.name]:e.target.value})
    }
}


const addColor = (e) => {
e.preventDefault();

axiosWithAuth()
.post('/colors',colors)
.then(res => {
    updateColors(res.data)
})
.catch(err => {
    console.log(err)
})

setColors(initialValues)
}
    return (
        <form onSubmit={addColor}>
        <label htmlFor="colorName">color name:</label>
        <input
          name="color"
          id="colorName"
          onChange={handleChange}
          value={colors.color}
        />
      
        <label htmlFor="hex">hex code:</label>
        <input
          name="hex"
          id="hex"
          onChange={handleChange}
          value={colors.code.hex}
        />
      
        <div className="button-row">
          <button type="submit">Add color</button>
        </div>
        </form >
    )
}
export default AddColor;