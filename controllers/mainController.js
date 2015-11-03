function MainController($scope){


	$scope.presentation = {
		'urlImage' : 'img/perfil.jpg',
		'name' : 'Tinguaro',
		'subname' : 'Cubas Saiz',
		'study' : 'Graduado en Ingeniería Informática',
		'text' : '<< Cada día me miro en el espejo y me pregunto: "Si hoy fuese el último día de mi vida, ¿querría hacer lo que voy a hacer hoy?". Si la respuesta es "no" durante demasiados días seguidos, sé que necesito cambiar algo >>',
		'nameText' : '- Steve Jobs.'
	};

	$scope.concursos = [
		{ 	'img' : 'img/opendatacanarias.png',
			'name' : 'OpenDataCanarias',
			'text' : '',
			'url' : 'http://www.opendatacanarias.es/apps/tenerife-tourist-guide'
		},
		{ 	'img' : 'img/bigdata.jpg',
			'name' : 'BigDataChallenge Telecom Italia',
			'text' : '',
			'url' : 'https://www.youtube.com/watch?v=8kLdIKfKhh8'
		},
		{ 	'img' : 'img/startup.jpg',
			'name' : 'Startup Weekend',
			'text' : '',
			'url' : 'https://www.facebook.com/proadvisorpage/'
		}
	];

	$scope.conocimientos = [
		{
			'img' : '',
			'name' : 'C'
		},
		{
			'img' : '',
			'name' : 'C++'
		},
		{
			'img' : '',
			'name' : 'Java'
		},
		{
			'img' : '',
			'name' : 'JavaScript'
		},
		{
			'img' : '',
			'name' : 'CSS'
		},
		{
			'img' : '',
			'name' : 'HTML'
		},
		{
			'img' : '',
			'name' : 'AngularJS'
		},
		{
			'img' : '',
			'name' : 'Node.js'
		},
		{
			'img' : '',
			'name' : 'MongoDB'
		},
		{
			'img' : '',
			'name' : 'SQL'
		},
		{
			'img' : '',
			'name' : 'Unity 3D'
		},
		{
			'img' : '',
			'name' : 'C#'
		},
		{
			'img' : '',
			'name' : 'PHP'
		}
	];


	$scope.contactos = [
		{
			'img' : 'img/google.png',
			'name' : 'tinguarocubas@gmail.com'
		},
		{
			'img' : 'img/twitter.png',
			'name' : '@TinguaroCS'
		},
		{
			'img' : 'img/link.png',
			'name' : 'Tinguaro Cubas Saiz'
		},
	];

	$scope.cambiarIdioma = function (){
		$scope.template.words = $scope.e;
	};


}