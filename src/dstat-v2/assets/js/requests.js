
const socket = io(),
	options = {
		plotOptions: {
			series: {
				events: {
					legendItemClick: function(event) {
						event.preventDefault()
					}
				}
			}
		},
   
		chart: {
			backgroundColor: '',
			renderTo: 'graph',
			plotBorderColor: '#715ec9'
		},
		title: {
			text: ''
		},
		xAxis: {
			type: 'datetime',
			dateTimeLabelFormats: {
				day: '%a'
			}
		},
		yAxis: {
			title: {
				text: 'RPS (REQUESTS PER SECOND)',
				margin: 10
			}
		},
		credits: {
			enabled: false
		},
		series: [{
			type: 'area',
			name: 'Live Challenged Requests',
			color: '#FF6F61',
			data: []
		}]
	},
	chart = new Highcharts.Chart(options)
Highcharts.setOptions({
	lang: {
		loading: 'Loading...',
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		weekdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
		shortMonths: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.']
	}
})

function getStringCount(count) {
	if(count === 0) return '0'
	count = Math.floor(count)
	let i = 0 === count ? count : Math.floor(Math.log(count) / Math.log(1000)),
		result = parseFloat((count / Math.pow(1000, i)).toFixed(2))
	if(i >= 17) return '∞'
	result += ['', ' K', ' Mil', ' Bil ', ' Tril ', ' кврлн.', ' квинтл.', ' скстлн.', ' сптлн.', ' октлн.', ' нонлн.', ' дцлн.', ' ундцлн.', ' додцлн.', ' трдцлн.', ' квтуордцлн.', ' квндцлн.'][i]
	result = result.replace(/e/g, '')
	result = result.replace(/\+/g, '')
	result = result.replace(/Infinity/g, '∞')
	return result
}
socket.on('requests', (all_requests, per_requests, max_requests) => {
	chart.series[0].addPoint([new Date().getTime(), per_requests], true, chart.series[0].points.length > 60)
	document.getElementById('total_day_requests').innerHTML = getStringCount(all_requests)
	document.getElementById('max_requests').innerHTML = getStringCount(max_requests)
})


