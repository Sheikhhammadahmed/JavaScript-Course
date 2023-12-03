// Taking Prompts

var maths = +prompt('Enter Maths Marks')
var eng = +prompt("Enter English Marks")
var chem = +prompt('Enter Chemistry Marks')
var phys = +prompt('Enter Physics Marks')
var bio = +prompt('Enter Bio Marks')
var total = maths + eng + chem + phys + bio
var perc = (total / 500) * 100
var grade;

// console.log(perc);

// if / else statemnts 

if (perc > 79 && perc < 101) {
    document.write("A+")
}
else if (perc > 69) {
    document.write('A')
}
else if (perc > 59) {
    document.write('B')
}
else if (perc > 49) {
    document.write("C")
}
else {
    document.write('F')
}


document.write(`<table border'2px'>
    <tr>
    <th>Subjects</th>
    <th>Marks</th>
    <th>Perc</th>
    </tr>
    <tr>

    </tr>



</table>`)