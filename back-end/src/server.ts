import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import https from 'https';
import http from 'http';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





