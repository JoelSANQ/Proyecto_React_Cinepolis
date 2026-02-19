import nyanCursor from '../assets/nia.png'


function Button({ text, onClick }){
return (
  <button 

  onClick={onClick}
  style={{
    padding: '8px 16px',
    backgroundColor: '#ff9800',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: `url(${nyanCursor}), auto`,
    marginTop: '8px',
  }}>
    {text}
  </button>
)
}

export default Button