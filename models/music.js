var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/loco');
//mongoose.connect('mongodb://zzhao:zzhao@ds061751.mongolab.com:61751/loco');
//db.musics.find()

var Schema = new mongoose.Schema({
	Composer: String,
	Composition: String,
	Grading: {
		// Flute 1
		Flute1 : {Grade: Number}, 
		A_Flute1 : {Grade: Number},
		Where_Flute1 : String,
		Why_Flute1 : String,
		// Flute 2
		Flute2 : {Grade: Number},
		A_Flute2 : {Grade: Number},
		Where_Flute2 : String,
		Why_Flute2 : String,
		// Oboe 1
		Oboe1 : {Grade: Number},
		A_Oboe1 : {Grade: Number},
		Where_Oboe1 : String,
		Why_Oboe1 : String,
		// Oboe 2
		Oboe2 : {Grade: Number},
		A_Oboe2 : {Grade: Number},
		Where_Oboe2 : String,
		Why_Oboe2 : String,
		// Clarinet 1
		Clarinet1 : {Grade: Number},
		A_Clarinet1 : {Grade: Number},
		Where_Clarinet1 : String,
		Why_Clarinet1 : String,
		// Clarinet 2
		Clarinet2 : {Grade: Number},
		A_Clarinet2 : {Grade: Number},
		Where_Clarinet2 : String,
		Why_Clarinet2 : String,
		// Bassoon 1
		Bassoon1 : {Grade: Number},
		A_Bassoon1 : {Grade: Number},
		Where_Bassoon1 : String,
		Why_Bassoon1 : String,
		// Bassoon 2
		Bassoon2 : {Grade: Number},
		A_Bassoon2 : {Grade: Number},
		Where_Bassoon2 : String,
		Why_Bassoon2 : String,
		// Piccolo
		Piccolo : {Grade: Number},
		A_Piccolo : {Grade: Number},
		Where_Piccolo : String,
		Why_Piccolo : String,
		// English_Horn
		English_Horn : {Grade: Number},
		A_English_Horn : {Grade: Number},
		Where_English_Horn : String,
		Why_English_Horn : String,
		// Bass_Clarinet
		Bass_Clarinet : {Grade: Number},
		A_Bass_Clarinet : {Grade: Number},
		Where_Bass_Clarinet : String,
		Why_Bass_Clarinet : String,
		// Contrabassoon
		Contrabassoon : {Grade: Number},
		A_Contrabassoon : {Grade: Number},
		Where_Contrabassoon : String,
		Why_Contrabassoon : String,
		// French Horn 1
		French_Horn_1 : {Grade: Number},
		A_French_Horn_1 : {Grade: Number},
		Where_French_Horn_1 : String,
		Why_French_Horn_1 : String,
		// French Horn 2
		French_Horn_2 : {Grade: Number},
		A_French_Horn_2 : {Grade: Number},
		Where_French_Horn_2 : String,
		Why_French_Horn_2 : String,
		// French Horn 3
		French_Horn_3 : {Grade: Number},
		A_French_Horn_3 : {Grade: Number},
		Where_French_Horn_3 : String,
		Why_French_Horn_3 : String,
		// French Horn 4
		French_Horn_4 : {Grade: Number},
		A_French_Horn_4 : {Grade: Number},
		Where_French_Horn_4 : String,
		Why_French_Horn_4 : String,
		// Trumpet 1
		Trumpet_1 : {Grade: Number},
		A_Trumpet_1 : {Grade: Number},
		Where_Trumpet_1 : String,
		Why_Trumpet_1 : String,
		// Trumpet 2
		Trumpet_2 : {Grade: Number},
		A_Trumpet_2 : {Grade: Number},
		Where_Trumpet_2 : String,
		Why_Trumpet_2 : String,
		// Trombone 1
		Trombone_1 : {Grade: Number},
		A_Trombone_1 : {Grade: Number},
		Where_Trombone_1 : String,
		Why_Trombone_1 : String, 
		// Trombone 2
		Trombone_2 : {Grade: Number},
		A_Trombone_2 : {Grade: Number},
		Where_Trombone_2 : String,
		Why_Trombone_2 : String,
		// Bass Trombone
		Bass_Trombone : {Grade: Number},
		A_Bass_Trombone : {Grade: Number},
		Where_Bass_Trombone : String,
		Why_Bass_Trombone : String,
		// Tuba
		Tuba : {Grade: Number},
		A_Tuba : {Grade: Number},
		Where_Tuba : String,
		Why_Tuba : String, 
		// ViolaDamore: 
		ViolaDamore : {Grade: Number},
		A_ViolaDamore : {Grade: Number},
		Where_ViolaDamore : String,
		Why_ViolaDamore : String,
		// Timpani
		Timpani : {Grade: Number},
		A_Timpani : {Grade: Number},
		Where_Timpani : String,
		Why_Timpani : String,
		// Percussion 1
		Percussion1: {Grade: Number},
		A_Percussion1: {Grade: Number},
		Where_Percussion1: String,
		Why_Percussion1: String,
		// Percussion 2
		Percussion2: {Grade: Number},
		A_Percussion2: {Grade: Number},
		Where_Percussion2: String,
		Why_Percussion2: String,
		// Percussion 3
		Percussion3: {Grade: Number},
		A_Percussion3: {Grade: Number},
		Where_Percussion3: String,
		Why_Percussion3: String,
		// Drum
		Drum : {Grade: Number},
		A_Drum : {Grade: Number},
		Where_Drum : String,
		Why_Drum : String, 
		// Cymbals
		Cymbals : {Grade: Number},
		A_Cymbals : {Grade: Number},
		Where_Cymbals : String,
		Why_Cymbals : String, 
		// Tim-tam
		Tim_tam : {Grade: Number},
		A_Tim_tam : {Grade: Number},
		Where_Tim_tam : String,
		Why_Tim_tam : String, 
		// Triangle
		Triangle : {Grade: Number},
		A_Triangle : {Grade: Number},
		Where_Triangle : String,
		Why_Triangle : String,
		// Violin1
		Violin1 : {Grade: Number},
		A_Violin1 : {Grade: Number},
		Where_Violin1 : String,
		Why_Violin1 : String,
		// Violin2
		Violin2 : {Grade: Number},
		A_Violin2 : {Grade: Number},
		Where_Violin2 : String,
		Why_Violin2 : String,
		// Cellos
		Cellos : {Grade: Number},
		A_Cellos : {Grade: Number},
		Where_Cellos : String,
		Why_Cellos : String,
		// Viola
		Viola : {Grade: Number},
		A_Viola : {Grade: Number},
		Where_Viola : String,
		Why_Viola : String,
		// Harp
		Harp : {Grade: Number},
		A_Harp : {Grade: Number},
		Where_Harp : String,
		Why_Harp : String,
		// Piano
		Piano : {Grade: Number},
		A_Piano : {Grade: Number},
		Where_Piano : String,
		Why_Piano : String,
		// Organ
		Organ : {Grade: Number},
		A_Organ : {Grade: Number},
		Where_Organ : String,
		Why_Organ : String,
		// Celesta
		Celesta : {Grade: Number},
		A_Celesta : {Grade: Number},
		Where_Celesta : String,
		Why_Celesta : String
	}
});

var model = mongoose.model('music', Schema);

module.exports = model;