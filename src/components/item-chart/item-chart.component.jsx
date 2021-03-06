const startChart = () => {
    const d = new Date();
    const lastVal = 49 + (d.getDate() % 8);
    const theScript = document.createElement("script");
    theScript.src = "https://www.gstatic.com/charts/loader.js";
    theScript.async = true;
    theScript.onload = () => drawChart(lastVal);
    document.body.appendChild(theScript);
};
const drawChart = (lastValue) => {
    const google = window.google;
    const drawTrendlines = () => {
        var data = new google.visualization.DataTable();
        data.addColumn('date', 'X');
        data.addColumn('number', 'Price');

        data.addRows([
            [new Date(2019, 11, 1), 5], [new Date(2019, 11, 8), 4], [new Date(2019, 11, 15), 5], [new Date(2019, 11, 22), 4],
            [new Date(2020, 0, 1), 6], [new Date(2020, 0, 8), 7], [new Date(2020, 0, 15), 6], [new Date(2020, 0, 22), 7],
            [new Date(2020, 1, 1), 10], [new Date(2020, 1, 8), 17], [new Date(2020, 1, 15), 10], [new Date(2020, 1, 22), 12],
            [new Date(2020, 2, 1), 10], [new Date(2020, 2, 8), 8], [new Date(2020, 2, 15), 10], [new Date(2020, 2, 22), 9],
            [new Date(2020, 3, 1), 16], [new Date(2020, 3, 8), 11], [new Date(2020, 3, 15), 9], [new Date(2020, 3, 22), 12],
            [new Date(2020, 4, 1), 10], [new Date(2020, 4, 8), 9], [new Date(2020, 4, 15), 11], [new Date(2020, 4, 22), 17],
            [new Date(2020, 5, 1), 9], [new Date(2020, 5, 8), 10], [new Date(2020, 5, 15), 23], [new Date(2020, 5, 22), 17],
            [new Date(2020, 6, 1), 18], [new Date(2020, 6, 8), 9], [new Date(2020, 6, 15), 11], [new Date(2020, 6, 22), 27],
            [new Date(2020, 7, 1), 33], [new Date(2020, 7, 8), 40], [new Date(2020, 7, 15), 32], [new Date(2020, 7, 22), 35],
            [new Date(2020, 8, 1), 30], [new Date(2020, 8, 8), 40], [new Date(2020, 8, 15), 42], [new Date(2020, 8, 22), 42],
            [new Date(2020, 9, 1), 44], [new Date(2020, 9, 8), 48], [new Date(2020, 9, 15), 52], [new Date(2020, 9, 22), 54],
            [new Date(2020, 10, 1), 42], [new Date(2020, 10, 8), 55], [new Date(2020, 10, 15), 56], [new Date(2020, 10, 22), 57],
            [new Date(2020, 11, 1), 60], [new Date(2020, 11, 8), 50], [new Date(2020, 11, 15), 52], [new Date(2020, 11, 22), 51],
            [new Date(2021, 0, 1), 49], [new Date(2021, 0, 8), 53], [new Date(2021, 0, 15), 55], [new Date(2021, 0, 22), 60],
            [new Date(2021, 1, 1), 61], [new Date(2021, 1, 8), 59], [new Date(2021, 1, 15), 62], [new Date(2021, 1, 22), 65],
            [new Date(2021, 2, 1), 68], [new Date(2021, 2, 8), 69], [new Date(2021, 2, 15), 70], [new Date(2021, 2, 22), 72],
            [new Date(2021, 3, 1), 75], [new Date(2021, 3, 8), 80], [new Date(2021, 3, 15), 72], [new Date(2021, 3, 22), 65],
            [new Date(2021, 4, 1), 68], [new Date(2021, 4, 8), 55], [new Date(2021, 4, 15), 53], [new Date(2021, 4, 22), 51],
            [new Date(2021, 5, 1), 52], [new Date(2021, 5, 8), lastValue]
        ]);

        var options = {
            legend: 'none',
            height: 300,
            hAxis: {
                format: 'MMM YYYY',
                gridlines: { count: 12, color: '#233' },
                textStyle: { fontName: 'Raleway', color: '#ddd' }
            },
            vAxis: {
                minValue: 0,
                gridlines: { count: 1, color: '#ddd' },
                format: 'decimal',
                baselineColor: '#ddd',
                textStyle: { fontName: 'Raleway', color: '#ddd' }
            },
            colors: ['#e70'],
            trendlines: {
                0: { type: 'linear', color: '#ccc', opacity: .3 }
            },
            chartArea: { backgroundColor: '#233', color: '#ddd', height: '75%', width: '100%' },
            backgroundColor: '#233'
        };

        const chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        // google.visualization.events.addListener(chart, 'ready', afterChartDraw);
        chart.draw(data, options);
    }
    google.charts.load('current', { packages: ['corechart', 'line'] });
    google.charts.setOnLoadCallback(drawTrendlines);
}
// const afterChartDraw = () => {
//     console.log('Done drawing chart');
// }
export default startChart;