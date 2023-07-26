import {React, useState} from 'react'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const Dashboard = () => {
    const [data,setData] = useState("");

    // const mydata = document.getElementsByClassName('data')
    // const text = mydata.innerText;
    // console.log(mydata)
    const handleDownloadPDF = () => {
        const input = document.getElementById('pdf-content');
        html2canvas(input).then((canvas) => {
          const pdf = new jsPDF('p', 'mm', 'a4');
          const imgData = canvas.toDataURL('image/png');
        //   pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
          pdf.save('downloaded_pdf.pdf');
        });
    }

  return (
    <div>
        {/* Your A4-sized div with content */}
        <div>{data}</div>
      <div id="pdf-content" style={{display:'flex', flexDirection:'column'}}>
        <div className='data' style={{border:'1px solid black'}} contentEditable="true" onInput={(event)=>setData(event.target.innerText)}></div>
        <div style={{height:'12px', display:'flex', flexDirection:'column'}}>
        <h1>Hello, this is the content for the PDF!</h1>
        </div>
        <h1>Azad Chauhan</h1>
        <h2>Education</h2>
        <p>More content here...</p>
      </div>

      {/* Button to trigger PDF generation */}
      <button onClick={handleDownloadPDF}>Download PDF</button>
    </div>
  )
}

export default Dashboard