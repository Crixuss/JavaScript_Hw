// from data.js
let tableData = data;
let tbody = d3.select("tbody")

let button = d3.select('#filter-btn');

button.on("click", function(){
    tbody.html('');
    let input = d3.select('#datetime');

    let value = input.property('value');

    let filtered = tableData.filter(item => {
        return item.datetime === value;
    })
    // console.log(filtered)

    filtered.forEach(item => {
        let tr = tbody.append('tr');
        tr.append('td').text(item.datetime);
        tr.append('td').text(item.city);
        tr.append('td').text(item.state);
        tr.append('td').text(item.country);
        tr.append('td').text(item.shape);
        tr.append('td').text(item.durationMinutes);
        tr.append('td').text(item.comments);
    })
    
    
})
