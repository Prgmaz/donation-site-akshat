const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const firebase = require("firebase-admin");
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const firebaseConfig = {
	apiKey: "AIzaSyA1da6B7QIR0-M22haXXRG4J0CzBwMh-Eg",
	authDomain: "donation-site-30f93.firebaseapp.com",
	projectId: "donation-site-30f93",
	storageBucket: "donation-site-30f93.appspot.com",
	messagingSenderId: "260196696310",
	appId: "1:260196696310:web:9344ffe89ef244c6d36cd7",
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();



app.get('/', (req, res) => {
	return res.redirect('/home.html');
});

app.post("/money", (req, res) => {
	firestore
		.collection("money")
		.add(req.body)
		.then(() => {
			return res.status(200).redirect("/home.html");
		})
		.catch((err) => {
			return res.status(500).json({err, data: req.body});
		});
});

app.post("/food", (req, res) => {
	firestore
		.collection("food")
		.add(req.body)
		.then(() => {
			return res.status(200).redirect("/home.html");
		})
		.catch((err) => {
			return res.status(500).json({err, data: req.body});
		});
});

app.post("/clothes", (req, res) => {
	firestore
		.collection("clothes")
		.add(req.body)
		.then(() => {
			return res.status(200).redirect("/home.html");
		})
		.catch((err) => {
			return res.status(500).json({err, data: req.body});
		});
});

app.post("/education", (req, res) => {
	firestore
		.collection("education")
		.add(req.body)
		.then(() => {
			return res.status(200).redirect("/home.html");
		})
		.catch((err) => {
			return res.status(500).json({err, data: req.body});
		});
});

app.get('*', (req, res) => {
	return res.status(404).redirect('/404.html');
});







app.listen(PORT);
