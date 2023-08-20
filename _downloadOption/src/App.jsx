import './App.css'

function App() {

  const PNG_URL = 'http://localhost:5173/File_PNG.png'
  const downloadFileAtURL = (url) => {
    const fileName = url.split('/').pop()
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download',fileName)
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  return (
    <>
      <button onClick={()=>{downloadFileAtURL(PNG_URL)}}>Download File</button>
    </>
  )
}

export default App
