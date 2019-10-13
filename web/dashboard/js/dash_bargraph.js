//shelby-learn.appspot.com/user/?id=uuID
var data = $.getJSON('shelby-learn.appspot.com/user/?id=uuID');

const maximumCompatibility = 10;
const dataLabels = ['Visual', "Aural", "Verbal", 'Logical', 'Physical', 'Social', 'Solitary'];
const learningMethodList = [1.5, .5, 2, 1.25, .75, 3, 1];
var i;
var comparisonList = [];
comparisonList.length = 7;
for (i = 0; i < comparisonList.length; i++) {
    comparisonList[i] = maximumCompatibility;
}

var barCriteria = {
    showlegend: false,
    x: learningMethodList,
    y: dataLabels,
    name: "your score",
    orientation: 'h',
    type: 'bar',
    marker: {
        color: 'rgba(55,128,191,0.6)',
        width: 1
    },
};

var theoCriteria = {
    showlegend: false,
    x: comparisonList,
    y: dataLabels,
    name: "total score",
    orientation: 'h',
    type: 'bar',
    marker: {
        color: 'rgba(255,153,51,0.6)',
        width: 1,
    }
};

var barLayout = {
    barmode: 'overlay'
};

var displayData = [barCriteria, theoCriteria];

function init() {
    Plotly.plot(

        document.getElementById('barGraph'),
        displayData,
        barLayout

    );
}