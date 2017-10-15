import FS from 'fs';

import express from 'express';

import React from 'react'
import {renderToString} from 'react-dom/server';
import {match, RoutingContext} from 'react-router';

import baseManager from './base-manager';

const routeManager = Object.assign({}, baseManager, {
    configureDevelopmentEnv(app) {
        const apiRouter = this.createApiRouter();
        const pagesRouter = this.createPageRouter();
        app.use('/api', apiRouter);            
        app.use('/', pagesRouter);            
    },

    //ByMahee-- this one probably is to decide which page to be pushed to UI
    createPageRouter() {
        const router = express.Router();
        
        router.get('*', (req, res) => {
            res.render('index');
        });

        return router;
    },

    //ByMahee-- this one probably is to decide wich server method to execute
    createApiRouter(app) {
        const router = express.Router();

        router.get('/latest-bills', (req, res) => {
            this.retrieveLatestBills((err, content) => {
                if(!err) {
                    res.json(JSON.parse(content));                                    
                } else {
                    res.status(500).send();
                }
            });
        });

        return router;
    },

    retrieveLatestBills(callback) {
        FS.readFile('./app/fixtures/latest-bills.json', 'utf-8', callback);
    }
});

export default routeManager;