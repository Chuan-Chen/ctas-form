const { jsPDF } = window.jspdf;

function printPDF(){
    const doc = new jsPDF();
    doc.html(document.body, {
        callback: function(doc){
            doc.save("report.pdf")
        },
        margin: [10, 10, 10, 10],
        autoPaging: 'text',
        x: 0,
        y: 0,
        width: 163.5, //target width in the PDF document
        windowWidth: 675 //window width in CSS pixels
    })
}

