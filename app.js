  var data = [
                     {frequency: 10,letter:"A1"},
                     {frequency: 8,letter:"A2"},
                     {frequency: 7,letter:"B1"},
                     {frequency: 6,letter:"B2"},
                     {frequency: 5,letter:"C1"},
                     {frequency: 5,letter:"C2"},
                     {frequency: 4,letter:"D"},
                     {frequency: 3,letter:"E"},
                     {frequency: 4,letter:"E2"},
             ];
var data = [10,20,30,40,60,40,30,20,10];
var width = 700;
var height =  700;

var widthScale = d3.scale.linear()
				.domain([0,100])
				.range([0,width]);

var axis     = d3.svg.axis()
				// .ticks(1)	
				.scale(widthScale);

var canvas  =  d3.select('body').append('svg')
				.attr('width',700)
				.attr('height',700)
				.append("g")
var bars =  canvas.selectAll('rect')
			.data(data)
			.enter()
			.append('rect')
			.attr('width',0 )
			.transition()
			.duration(2000)
			.delay(500)
			.attr('width',function(d){
				return widthScale(d) - 5;	 
			})
			.transition()
			.duration(2500)
			.delay(1000)
						.attr('width',function(d){
				return widthScale(d);	 
			})
			.attr('height',50)
			.attr('y',function(d,i){
				return i * 55;
			})
			.text('samun')
// canvas.append('g')
		// .attr('transform', 'translate(' + 0 + ',' + 400 + ')')
		// .call(axis)