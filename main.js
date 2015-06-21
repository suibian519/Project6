var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
var music = require('./models/music');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// Searching
app.post('/search', function(req, res){

	if (req.body.search_method == "Exact_Match")
	{
			mongoose.model('music').find({
				// woodwinds
				'Grading.Flute1.Grade' : req.body.g_flute1,
				'Grading.Flute2.Grade' : req.body.g_flute2,
				'Grading.Oboe1.Grade' : req.body.g_oboe1,
				'Grading.Oboe2.Grade' : req.body.g_oboe2,
				'Grading.Clarinet1.Grade' : req.body.g_clarinet1,
				'Grading.Clarinet2.Grade' : req.body.g_clarinet2,
				'Grading.Bassoon1.Grade' : req.body.g_bassoon1,
				'Grading.Bassoon2.Grade' : req.body.g_bassoon2,
				'Grading.Piccolo.Grade' : req.body.g_piccolo,
				'Grading.English_Horn.Grade' : req.body.g_englishHorn,
				'Grading.Bass_Clarinet.Grade' : req.body.g_bassclarinet,
				'Grading.Contrabassoon.Grade' : req.body.g_contrabassoon,
				// brass
				'Grading.French_Horn_1.Grade' : req.body.g_fh1,
				'Grading.French_Horn_2.Grade' : req.body.g_fh2,
				'Grading.French_Horn_3.Grade' : req.body.g_fh3,
				'Grading.French_Horn_4.Grade' : req.body.g_fh4,
				'Grading.Trumpet_1.Grade' : req.body.g_trumpet1,
				'Grading.Trumpet_2.Grade' : req.body.g_trumpet2,
				'Grading.Trombone_1.Grade' : req.body.g_trombone1,
				'Grading.Trombone_2.Grade' : req.body.g_trombone2,
				'Grading.Bass_Trombone.Grade' : req.body.g_btrombone,
				'Grading.Tuba.Grade' : req.body.g_tuba,
				'Grading.ViolaDamore.Grade' : req.body.g_vda,
				// percussion 
				'Grading.Timpani.Grade' : req.body.g_timpani,
				'Grading.Percussion1.Grade' : req.body.g_percussion1,
				'Grading.Percussion2.Grade' : req.body.g_percussion2,
				'Grading.Percussion3.Grade' : req.body.g_percussion3,
				'Grading.Drum.Grade' : req.body.g_drum,
				'Grading.Cymbals.Grade' : req.body.g_cymbals,
				'Grading.Tim_tam.Grade' : req.body.g_tt,
				'Grading.Triangle.Grade' : req.body.g_triangle,
				// string
				'Grading.Violin1.Grade' : req.body.g_violin1,
				'Grading.Violin2.Grade' : req.body.g_violin2,
				'Grading.Cellos.Grade' : req.body.g_cellos,
				'Grading.Viola.Grade' : req.body.g_viola,
				// other
				'Grading.Harp.Grade' : req.body.g_harp,
				'Grading.Piano.Grade' : req.body.g_piano,
				'Grading.Organ.Grade' : req.body.g_organ,
				'Grading.Celesta.Grade' : req.body.g_celesta
				
			}, function(err, documents){
				if(err) res.send('No data matching!');
				else {
					//res.send(documents);
					res.render('result', {
						"musics" : documents
					});	
				}
				//else    res.send(documents[0].Composer + ", " + documents[0].Composition);
			});	

	} else if (req.body.search_method == "Range_Match")
	{
			mongoose.model('music').find({
				// woodwinds
				'Grading.Flute1.Grade' : {'$gte': (Math.max(req.body.g_flute1, req.body.ga_flute1) - req.body.range_up_to), '$lt': (Math.max(req.body.g_flute1, req.body.ga_flute1) + 1)},
				'Grading.Flute2.Grade' : {'$gte': (Math.max(req.body.g_flute2, req.body.ga_flute2) - req.body.range_up_to), '$lt': (Math.max(req.body.g_flute2, req.body.ga_flute2) + 1)},
				'Grading.Oboe1.Grade' : {'$gte': (Math.max(req.body.g_oboe1, req.body.ga_oboe1) - req.body.range_up_to), '$lt': (Math.max(req.body.g_oboe1, req.body.ga_oboe1) + 1)},
				'Grading.Oboe2.Grade' : {'$gte': (Math.max(req.body.g_oboe2, req.body.ga_oboe2) - req.body.range_up_to), '$lt': (Math.max(req.body.g_oboe2, req.body.ga_oboe2) + 1)},
				'Grading.Clarinet1.Grade' : {'$gte': (Math.max(req.body.g_clarinet1, req.body.ga_clarinet1) - req.body.range_up_to), '$lt': (Math.max(req.body.g_clarinet1, req.body.ga_clarinet1) + 1)},
				'Grading.Clarinet2.Grade' : {'$gte': (Math.max(req.body.g_clarinet2, req.body.ga_clarinet2) - req.body.range_up_to), '$lt': (Math.max(req.body.g_clarinet2, req.body.ga_clarinet2) + 1)},
				'Grading.Bassoon1.Grade' : {'$gte': (Math.max(req.body.g_bassoon1, req.body.ga_bassoon1) - req.body.range_up_to), '$lt': (Math.max(req.body.g_bassoon1, req.body.ga_bassoon1) + 1)},
				'Grading.Bassoon2.Grade' : {'$gte': (Math.max(req.body.g_bassoon2, req.body.ga_bassoon2) - req.body.range_up_to), '$lt': (Math.max(req.body.g_bassoon2, req.body.ga_bassoon2) + 1)},
				'Grading.Piccolo.Grade' : {'$gte': (Math.max(req.body.g_piccolo, req.body.ga_piccolo) - req.body.range_up_to), '$lt': (Math.max(req.body.g_piccolo, req.body.ga_piccolo) + 1)},
				'Grading.English_Horn.Grade' : {'$gte': (Math.max(req.body.g_englishHorn, req.body.ga_englishHorn) - req.body.range_up_to), '$lt': (Math.max(req.body.g_englishHorn, req.body.ga_englishHorn) + 1)},
				'Grading.Bass_Clarinet.Grade' : {'$gte': (Math.max(req.body.g_bassclarinet, req.body.ga_bassclarinet) - req.body.range_up_to), '$lt': (Math.max(req.body.g_bassclarinet, req.body.ga_bassclarinet) + 1)},
				'Grading.Contrabassoon.Grade' : {'$gte': (Math.max(req.body.g_contrabassoon, req.body.ga_contrabassoon) - req.body.range_up_to), '$lt': (Math.max(req.body.g_contrabassoon, req.body.ga_contrabassoon) + 1)},
				// brass
				'Grading.French_Horn_1.Grade' : {'$gte': (Math.max(req.body.g_fh1, req.body.ga_fh1) - req.body.range_up_to), '$lt': (Math.max(req.body.g_fh1, req.body.ga_fh1) + 1)},
				'Grading.French_Horn_2.Grade' : {'$gte': (Math.max(req.body.g_fh2, req.body.ga_fh2) - req.body.range_up_to), '$lt': (Math.max(req.body.g_fh2, req.body.ga_fh2) + 1)},
				'Grading.French_Horn_3.Grade' : {'$gte': (Math.max(req.body.g_fh3, req.body.ga_fh3) - req.body.range_up_to), '$lt': (Math.max(req.body.g_fh3, req.body.ga_fh3) + 1)},
				'Grading.French_Horn_4.Grade' : {'$gte': (Math.max(req.body.g_fh4, req.body.ga_fh4) - req.body.range_up_to), '$lt': (Math.max(req.body.g_fh4, req.body.ga_fh4) + 1)},
				'Grading.Trumpet_1.Grade' : {'$gte': (Math.max(req.body.g_trumpet1, req.body.ga_trumpet1) - req.body.range_up_to), '$lt': (Math.max(req.body.g_trumpet1, req.body.ga_trumpet1) + 1)},
				'Grading.Trumpet_2.Grade' : {'$gte': (Math.max(req.body.g_trumpet2, req.body.ga_trumpet2) - req.body.range_up_to), '$lt': (Math.max(req.body.g_trumpet2, req.body.ga_trumpet2) + 1)},
				'Grading.Trombone_1.Grade' : {'$gte': (Math.max(req.body.g_trombone1, req.body.ga_trombone1) - req.body.range_up_to), '$lt': (Math.max(req.body.g_trombone1, req.body.ga_trombone1) + 1)},
				'Grading.Trombone_2.Grade' : {'$gte': (Math.max(req.body.g_trombone2, req.body.ga_trombone2) - req.body.range_up_to), '$lt': (Math.max(req.body.g_trombone2, req.body.ga_trombone2) + 1)},
				'Grading.Bass_Trombone.Grade' : {'$gte': (Math.max(req.body.g_btrombone, req.body.ga_btrombone) - req.body.range_up_to), '$lt': (Math.max(req.body.g_btrombone, req.body.ga_btrombone) + 1)},
				'Grading.Tuba.Grade' : {'$gte': (Math.max(req.body.g_tuba, req.body.ga_tuba) - req.body.range_up_to), '$lt': (Math.max(req.body.g_tuba, req.body.ga_tuba) + 1)},
				'Grading.ViolaDamore.Grade' : {'$gte': (Math.max(req.body.g_vda, req.body.ga_vda) - req.body.range_up_to), '$lt': (Math.max(req.body.g_vda, req.body.ga_vda) + 1)},
				// percussion 
				'Grading.Timpani.Grade' : {'$gte': (Math.max(req.body.g_timpani, req.body.ga_timpani) - req.body.range_up_to), '$lt': (Math.max(req.body.g_timpani, req.body.ga_timpani) + 1)},
				'Grading.Percussion1.Grade' : {'$gte': (Math.max(req.body.g_percussion1, req.body.ga_percussion1) - req.body.range_up_to), '$lt': (Math.max(req.body.g_percussion1, req.body.ga_percussion1) + 1)},
				'Grading.Percussion2.Grade' : {'$gte': (Math.max(req.body.g_percussion2, req.body.ga_percussion2) - req.body.range_up_to), '$lt': (Math.max(req.body.g_percussion2, req.body.ga_percussion2) + 1)},
				'Grading.Percussion3.Grade' : {'$gte': (Math.max(req.body.g_percussion3, req.body.ga_percussion3) - req.body.range_up_to), '$lt': (Math.max(req.body.g_percussion3, req.body.ga_percussion3) + 1)},
				'Grading.Drum.Grade' : {'$gte': (Math.max(req.body.g_drum, req.body.ga_drum) - req.body.range_up_to), '$lt': (Math.max(req.body.g_drum, req.body.ga_drum) + 1)},
				'Grading.Cymbals.Grade' : {'$gte': (Math.max(req.body.g_cymbals, req.body.ga_cymbals) - req.body.range_up_to), '$lt': (Math.max(req.body.g_cymbals, req.body.ga_cymbals) + 1)},
				'Grading.Tim_tam.Grade' : {'$gte': (Math.max(req.body.g_tt, req.body.ga_tt) - req.body.range_up_to), '$lt': (Math.max(req.body.g_tt, req.body.ga_tt) + 1)},
				'Grading.Triangle.Grade' : {'$gte': (Math.max(req.body.g_triangle, req.body.ga_triangle) - req.body.range_up_to), '$lt': (Math.max(req.body.g_triangle, req.body.ga_triangle) + 1)},
				// string
				'Grading.Violin1.Grade' : {'$gte': (Math.max(req.body.g_violin1, req.body.ga_violin1) - req.body.range_up_to), '$lt': (Math.max(req.body.g_violin1, req.body.ga_violin1) + 1)},
				'Grading.Violin2.Grade' : {'$gte': (Math.max(req.body.g_violin2, req.body.ga_violin2) - req.body.range_up_to), '$lt': (Math.max(req.body.g_violin2, req.body.ga_violin2) + 1)},
				'Grading.Cellos.Grade' : {'$gte': (Math.max(req.body.g_cellos, req.body.ga_cellos) - req.body.range_up_to), '$lt': (Math.max(req.body.g_cellos, req.body.ga_cellos)  + 1)},
				'Grading.Viola.Grade' : {'$gte': (Math.max(req.body.g_viola, req.body.ga_viola) - req.body.range_up_to), '$lt': (Math.max(req.body.g_viola, req.body.ga_viola) + 1)},
				// other
				'Grading.Harp.Grade' : {'$gte': (Math.max(req.body.g_harp, req.body.ga_harp) - req.body.range_up_to), '$lt': (Math.max(req.body.g_harp, req.body.ga_harp) + 1)},
				'Grading.Piano.Grade' : {'$gte': (Math.max(req.body.g_piano, req.body.ga_piano) - req.body.range_up_to), '$lt': (Math.max(req.body.g_piano, req.body.ga_piano) + 1)},
				'Grading.Organ.Grade' : {'$gte': (Math.max(req.body.g_organ, req.body.ga_organ) - req.body.range_up_to), '$lt': (Math.max(req.body.g_organ, req.body.ga_organ) + 1)}

			}	
			,'Composer Composition', function(err, documents){
				if(err) res.send('No data matching!');
				//if(err) res.send(err);
				else{
					res.render('result', {
					"musics" : documents
					});
				}
				//else    res.send(documents[0].Composer + ", " + documents[0].Composition);
			});
	} else if (req.body.search_method == "A_Match")
	{
			mongoose.model('music').find({
				// woodwinds
				'Grading.Flute1.Grade' : {'$gte': (req.body.g_flute1 - 3), '$lt': (req.body.g_flute1 + 1)},
				'Grading.Flute2.Grade' : {'$gte': (req.body.g_flute2 - 3), '$lt': (req.body.g_flute2 + 1)},
				'Grading.Oboe1.Grade' : {'$gte': (req.body.g_oboe1 - 3), '$lt': (req.body.g_oboe1 + 1)},
				'Grading.Oboe2.Grade' : {'$gte': (req.body.g_oboe2 - 3), '$lt': (req.body.g_oboe2 + 1)},
				'Grading.Clarinet1.Grade' : {'$gte': (req.body.g_clarinet1 - 3), '$lt': (req.body.g_clarinet1 + 1)},
				'Grading.Clarinet2.Grade' : {'$gte': (req.body.g_clarinet2 - 3), '$lt': (req.body.g_clarinet2 + 1)},
				'Grading.Bassoon1.Grade' : {'$gte': (req.body.g_bassoon1 - 3), '$lt': (req.body.g_bassoon1 + 1)},
				'Grading.Bassoon2.Grade' : {'$gte': (req.body.g_bassoon2 - 3), '$lt': (req.body.g_bassoon2 + 1)},
				'Grading.Piccolo.Grade' : {'$gte': (req.body.g_piccolo - 3), '$lt': (req.body.g_piccolo + 1)},
				'Grading.English_Horn.Grade' : {'$gte': (req.body.g_englishHorn - 3), '$lt': (req.body.g_englishHorn + 1)},
				'Grading.Bass_Clarinet.Grade' : {'$gte': (req.body.g_bassclarinet - 3), '$lt': (req.body.g_bassclarinet + 1)},
				'Grading.Contrabassoon.Grade' : {'$gte': (req.body.g_contrabassoon - 3), '$lt': (req.body.g_contrabassoon + 1)},
				// brass
				'Grading.French_Horn_1.Grade' : {'$gte': (req.body.g_fh1 - 3), '$lt': (req.body.g_fh1 + 1)},
				'Grading.French_Horn_2.Grade' : {'$gte': (req.body.g_fh2 - 3), '$lt': (req.body.g_fh2 + 1)},
				'Grading.French_Horn_3.Grade' : {'$gte': (req.body.g_fh3 - 3), '$lt': (req.body.g_fh3 + 1)},
				'Grading.French_Horn_4.Grade' : {'$gte': (req.body.g_fh4 - 3), '$lt': (req.body.g_fh4 + 1)},
				'Grading.Trumpet_1.Grade' : {'$gte': (req.body.g_trumpet1 - 3), '$lt': (req.body.g_trumpet1 + 1)},
				'Grading.Trumpet_2.Grade' : {'$gte': (req.body.g_trumpet2 - 3), '$lt': (req.body.g_trumpet2 + 1)},
				'Grading.Trombone_1.Grade' : {'$gte': (req.body.g_trombone1 - 3), '$lt': (req.body.g_trombone1 + 1)},
				'Grading.Trombone_2.Grade' : {'$gte': (req.body.g_trombone2 - 3), '$lt': (req.body.g_trombone2 + 1)},
				'Grading.Bass_Trombone.Grade' : {'$gte': (req.body.g_btrombone - 3), '$lt': (req.body.g_btrombone + 1)},
				'Grading.Tuba.Grade' : {'$gte': (req.body.g_tuba - 3), '$lt': (req.body.g_tuba + 1)},
				'Grading.ViolaDamore.Grade' : {'$gte': (req.body.g_vda - 3), '$lt': (req.body.g_vda + 1)},
				// percussion 
				'Grading.Timpani.Grade' : {'$gte': (req.body.g_timpani - 3), '$lt': (req.body.g_timpani + 1)},
				'Grading.Percussion1.Grade' : {'$gte': (req.body.g_percussion1 - 3), '$lt': (req.body.g_percussion1 + 1)},
				'Grading.Percussion2.Grade' : {'$gte': (req.body.g_percussion2 - 3), '$lt': (req.body.g_percussion2 + 1)},
				'Grading.Percussion3.Grade' : {'$gte': (req.body.g_percussion3 - 3), '$lt': (req.body.g_percussion3 + 1)},
				'Grading.Drum.Grade' : {'$gte': (req.body.g_drum - 3), '$lt': (req.body.g_drum + 1)},
				'Grading.Cymbals.Grade' : {'$gte': (req.body.g_cymbals - 3), '$lt': (req.body.g_cymbals + 1)},
				'Grading.Tim_tam.Grade' : {'$gte': (req.body.g_tt - 3), '$lt': (req.body.g_tt + 1)},
				'Grading.Triangle.Grade' : {'$gte': (req.body.g_triangle - 3), '$lt': (req.body.g_triangle + 1)},
				// string
				'Grading.Violin1.Grade' : {'$gte': (req.body.g_violin1 - 3), '$lt': (req.body.g_violin1 + 1)},
				'Grading.Violin2.Grade' : {'$gte': (req.body.g_violin2 - 3), '$lt': (req.body.g_violin2 + 1)},
				'Grading.Cellos.Grade' : {'$gte': (req.body.g_cellos - 3), '$lt': (req.body.g_cellos + 1)},
				'Grading.Viola.Grade' : {'$gte': (req.body.g_viola - 3), '$lt': (req.body.g_viola + 1)},
				// other
				'Grading.Harp.Grade' : {'$gte': (req.body.g_harp - 3), '$lt': (req.body.g_harp + 1)},
				'Grading.Piano.Grade' : {'$gte': (req.body.g_piano - 3), '$lt': (req.body.g_piano + 1)},
				'Grading.Organ.Grade' : {'$gte': (req.body.g_organ - 3), '$lt': (req.body.g_organ + 1)}

			}	
			,'Composer Composition', function(err, documents){
				if(err) res.send('No data matching!');
				//if(err) res.send(err);
				else{
					res.render('result', {
					"musics" : documents
					});
				}
				//else    res.send(documents[0].Composer + ", " + documents[0].Composition);
			});
	}

});

app.post('/new', function(req, res){
	new music({
		Composer: req.body.composer,
		Composition: req.body.composition,
		Grading: {
			// Flute 1
			Flute1 : {Grade: req.body.g_flute1},
			A_Flute1 : {Grade: req.body.ga_flute1},
			Where_Flute1 : req.body.ga_flute1_where,
			Why_Flute1 : req.body.ga_flute1_why,
			// Flute 2
			Flute2 : {Grade: req.body.g_flute2},
			A_Flute2 : {Grade: req.body.ga_flute2[0]},
			Where_Flute2 : req.body.ga_flute2_where,
			Why_Flute2 : req.body.ga_flute2_why,
			// Oboe 1
			Oboe1 : {Grade: req.body.g_oboe1},
			A_Oboe1 : {Grade: req.body.ga_oboe1},
			Where_Oboe1 : req.body.ga_oboe1_where,
			Why_Oboe1 : req.body.ga_oboe1_why,
			// Oboe 2
			Oboe2 : {Grade: req.body.g_oboe2},
			A_Oboe2 : {Grade: req.body.ga_oboe2},
			Where_Oboe2 : req.body.ga_oboe2_where,
			Why_Oboe2 : req.body.ga_oboe2_why,
			// Clarinet 1
			Clarinet1 : {Grade: req.body.g_clarinet1},
			A_Clarinet1 : {Grade: req.body.ga_clarinet1},
			Where_Clarinet1 : req.body.ga_clarinet1_where,
			Why_Clarinet1 : req.body.ga_clarinet1_why,
			// Clarinet 2
			Clarinet2 : {Grade: req.body.g_clarinet2},
			A_Clarinet2 : {Grade: req.body.ga_clarinet2},
			Where_Clarinet2 : req.body.ga_clarinet2_where,
			Why_Clarinet2 : req.body.ga_clarinet2_why,
			// Bassoon 1
			Bassoon1 : {Grade: req.body.g_bassoon1},
			A_Bassoon1 : {Grade: req.body.ga_bassoon1},
			Where_Bassoon1 : req.body.ga_bassoon1_where,
			Why_Bassoon1 : req.body.ga_bassoon1_why,
			// Bassoon 2
			Bassoon2 : {Grade: req.body.g_bassoon2},
			A_Bassoon2 : {Grade: req.body.ga_bassoon2},
			Where_Bassoon2 : req.body.ga_bassoon2_where,
			Why_Bassoon2 : req.body.ga_bassoon2_why,
			// Piccolo
			Piccolo : {Grade: req.body.g_piccolo},
			A_Piccolo : {Grade: req.body.ga_piccolo},
			Where_Piccolo : req.body.ga_piccolo_where,
			Why_Piccolo : req.body.ga_piccolo_why,
			// English_Horn
			English_Horn : {Grade: req.body.g_englishHorn},
			A_English_Horn : {Grade: req.body.ga_englishHorn},
			Where_English_Horn : req.body.ga_eh_where,
			Why_English_Horn : req.body.ga_eh_why,
			// Bass_Clarinet
			Bass_Clarinet : {Grade: req.body.g_bassclarinet},
			A_Bass_Clarinet : {Grade: req.body.ga_bassclarinet},
			Where_Bass_Clarinet : req.body.ga_basscla_where,
			Why_Bass_Clarinet : req.body.ga_basscla_why,
			// Contrabassoon
			Contrabassoon : {Grade: req.body.g_contrabassoon},
			A_Contrabassoon : {Grade: req.body.ga_contrabassoon},
			Where_Contrabassoon : req.body.ga_ctrbas_where,
			Why_Contrabassoon : req.body.ga_ctrbas_where,
			// French Horn 1
			French_Horn_1 : {Grade: req.body.g_fh1},
			A_French_Horn_1 : {Grade: req.body.ga_fh1},
			Where_French_Horn_1 : req.body.ga_fh1_where,
			Why_French_Horn_1 : req.body.ga_fh1_why,
			// French Horn 2
			French_Horn_2 : {Grade: req.body.g_fh2},
			A_French_Horn_2 : {Grade: req.body.ga_fh2},
			Where_French_Horn_2 : req.body.ga_fh2_where,
			Why_French_Horn_2 : req.body.ga_fh2_why,
			// French Horn 3
			French_Horn_3 : {Grade: req.body.g_fh3},
			A_French_Horn_3 : {Grade: req.body.ga_fh3},
			Where_French_Horn_3 : req.body.ga_fh3_where,
			Why_French_Horn_3 : req.body.ga_fh3_why,
			// French Horn 4
			French_Horn_4 : {Grade: req.body.g_fh4},
			A_French_Horn_4 : {Grade: req.body.ga_fh4},
			Where_French_Horn_4 : req.body.ga_fh4_where,
			Why_French_Horn_4 : req.body.ga_fh4_why,
			// Trumpet 1
			Trumpet_1 : {Grade: req.body.g_trumpet1},
			A_Trumpet_1 : {Grade: req.body.ga_trumpet1},
			Where_Trumpet_1 : req.body.ga_trumpet1_where,
			Why_Trumpet_1 : req.body.ga_trumpet1_why,
			// Trumpet 2
			Trumpet_2 : {Grade: req.body.g_trumpet2},
			A_Trumpet_2 : {Grade: req.body.ga_trumpet2},
			Where_Trumpet_2 : req.body.ga_trumpet2_where,
			Why_Trumpet_2 : req.body.ga_trumpet2_why,
			// Trombone 1
			Trombone_1 : {Grade: req.body.g_trombone1},
			A_Trombone_1 : {Grade: req.body.ga_trombone1},
			Where_Trombone_1 : req.body.ga_trombone1_where,
			Why_Trombone_1 : req.body.ga_trombone1_why,	
			// Trombone 2
			Trombone_2 : {Grade: req.body.g_trombone2},
			A_Trombone_2 : {Grade: req.body.ga_trombone2},
			Where_Trombone_2 : req.body.ga_trombone2_where,
			Why_Trombone_2 : req.body.ga_trombone2_why,	
			// Bass Trombone
			Bass_Trombone : {Grade: req.body.g_btrombone},
			A_Bass_Trombone : {Grade: req.body.ga_btrombone},
			Where_Bass_Trombone : req.body.ga_btrombone_where,
			Why_Bass_Trombone : req.body.ga_btrombone_why,
			// Tuba
			Tuba : {Grade: req.body.g_tuba},
			A_Tuba : {Grade: req.body.ga_tuba},
			Where_Tuba : req.body.ga_tuba_where,
			Why_Tuba : req.body.ga_tuba_why,	
			// ViolaDamore:  
			ViolaDamore : {Grade: req.body.g_vda},
			A_ViolaDamore : {Grade: req.body.ga_vda},
			Where_ViolaDamore : req.body.ga_vda_where,
			Why_ViolaDamore : req.body.ga_vda_why,
			// Timpani
			Timpani : {Grade: req.body.g_timpani},
			A_Timpani : {Grade: req.body.ga_timpani},
			Where_Timpani : req.body.ga_timpani_where,
			Why_Timpani : req.body.ga_timpani_why,
			// Percussion 1
			Percussion1: {Grade: req.body.g_percussion1},
			A_Percussion1: {Grade: req.body.ga_percussion1},
			Where_Percussion1: req.body.ga_percussion1_where,
			Why_Percussion1: req.body.ga_percussion1_why,
			// Percussion 2
			Percussion2: {Grade: req.body.g_percussion2},
			A_Percussion2: {Grade: req.body.ga_percussion2},
			Where_Percussion2: req.body.ga_percussion2_where,
			Why_Percussion2: req.body.ga_percussion2_why,
			// Percussion 3
			Percussion3: {Grade: req.body.g_percussion3},
			A_Percussion3: {Grade: req.body.ga_percussion3},
			Where_Percussion3: req.body.ga_percussion3_where,
			Why_Percussion3: req.body.ga_percussion3_why,
			// Drum
			Drum : {Grade: req.body.g_drum},
			A_Drum : {Grade: req.body.ga_drum},
			Where_Drum : req.body.ga_drum_where,
			Why_Drum : req.body.ga_drum_why,	
			// Cymbals
			Cymbals : {Grade: req.body.g_cymbals},
			A_Cymbals : {Grade: req.body.ga_cymbals},
			Where_Cymbals : req.body.ga_cymbals_where,
			Why_Cymbals : req.body.ga_cymbals_why,	
			// Tim-tam
			Tim_tam : {Grade: req.body.g_tt},
			A_Tim_tam : {Grade: req.body.ga_tt},
			Where_Tim_tam : req.body.ga_tt_where,
			Why_Tim_tam : req.body.ga_tt_why,
			// Triangle
			Triangle : {Grade: req.body.g_triangle},
			A_Triangle : {Grade: req.body.ga_triangle},
			Where_Triangle : req.body.ga_triangle_where,
			Why_Triangle : req.body.ga_triangle_why,
			// Violin 1
			Violin1 : {Grade: req.body.g_violin1},
			A_Violin1 : {Grade: req.body.ga_violin1},
			Where_Violin1 : req.body.ga_violin1_where,
			Why_Violin1 : req.body.ga_violin1_why,
			// Violin 2
			Violin2 : {Grade: req.body.g_violin2},
			A_Violin2 : {Grade: req.body.ga_violin2},
			Where_Violin2 : req.body.ga_violin2_where,
			Why_Violin2 : req.body.ga_violin2_why,	
			// Cellos 
			Cellos : {Grade: req.body.g_cellos},
			A_Cellos : {Grade: req.body.ga_cellos},
			Where_Cellos : req.body.ga_cellos_where,
			Why_Cellos : req.body.ga_cellos_why,	
			// Viola 
			Viola : {Grade: req.body.g_viola},
			A_Viola : {Grade: req.body.ga_viola},
			Where_Viola : req.body.ga_viola_where,
			Why_Viola : req.body.ga_viola_why,
			// Harp
			Harp: {Grade: req.body.g_harp},
			A_Harp: {Grade: req.body.ga_harp},
			Where_Harp: req.body.ga_harp_where,
			Why_Harp: req.body.ga_harp_why,
			// Piano
			Piano: {Grade: req.body.g_piano},
			A_Piano: {Grade: req.body.ga_piano},
			Where_Piano: req.body.ga_piano_where,
			Why_Piano: req.body.ga_piano_why,
			// Organ
			Organ: {Grade: req.body.g_organ},
			A_Organ: {Grade: req.body.ga_organ},
			Where_Organ: req.body.ga_organ_where,
			Why_Organ: req.body.ga_organ_why,
			// Celesta
			Celesta: {Grade: req.body.g_celesta},
			A_Celesta: {Grade: req.body.ga_celesta},
			Where_Celesta: req.body.ga_celesta_where,
			Why_Celesta: req.body.ga_celesta_why
		}
	}).save(function(err, doc){
		if(err) res.json(err);
		else{
			  res.writeHead(200, {"Content-Type": "text/html"}); 
			  res.write( 
				  "<!DOCTYPE html>" + 
				  "<html lang='en' dir='ltr'>" + 
					"<head>" + 
					  "<met charset='utf-8'>" + 
					  "<title>Hola Mundo</title>" + 
					"</head>" + 
					"<body>" + 
					  "<script type='text/javascript'>alert('Thanks for grading! Your data has been successfully recorded.'); window.location.href = \"index.html\";</script>" + 
				  "</body>" + 
				  "</html>"
			  ); 
			  res.end(); 
		}
		//res.send('Successfully inserted!');
	});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
