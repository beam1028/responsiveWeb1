function initialize() { 
	  var myLatlng = new google.maps.LatLng(37.4845229,127.0302916,20.75); // y, x좌표값        
	  var mapOptions = { 
			zoom: 15, 
			center: myLatlng, 
			mapTypeId: google.maps.MapTypeId.ROADMAP 
	  } 
	  
	  var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
	  var marker = new google.maps.Marker({ 
				position: myLatlng, 
				map: map, 
				title: "서울대흥" 
	  }); 
	  
	  var infowindow = new google.maps.InfoWindow( 
			  { 
				content: "<h1>서울대흥</h1>", 
				maxWidth: 300 
			  } 
	  ); 

	  google.maps.event.addListener(marker, 'click', function() { 
	  infowindow.open(map, marker); 
	  }); 
	  } 
	  
	  function initialize2() { 
	  var myLatlng = new google.maps.LatLng(35.15891827843753, 129.1540154703061); // y, x좌표값        
	  var mapOptions = { 
			zoom: 15, 
			center: myLatlng, 
			mapTypeId: google.maps.MapTypeId.ROADMAP 
	  } 
	  
	  var map = new google.maps.Map(document.getElementById('map_canvas2'), mapOptions);
	  var marker = new google.maps.Marker({ 
				position: myLatlng, 
				map: map, 
				title: "부산대흥" 
	  }); 
	  
	  var infowindow = new google.maps.InfoWindow( 
			  { 
				content: "<h1>부산대흥</h1>", 
				maxWidth: 300 
			  } 
	  ); 

	  google.maps.event.addListener(marker, 'click', function() { 
	  infowindow.open(map, marker); 
	  }); 
	  } 