/**
 * Created by mmajali on 10/25/16.
 */

var oracledb = require('oracledb');
var baseDAO = require('./../../dao/orcl/baseDAO');

var indicatorsDAO = function () {
    this.getIndicatorsChapters = function (callback) {
        try {
            var dao = new baseDAO();
            dao.GetDataTable('usp_indicators_getChapters', function (response) {
                callback(response);
            });
        } catch (ex) {
            console.log(ex);
            callback({error: ex});
        }
    };

    this.getIndicatorsList = function (chapterNo, callback) {
        try {
            var dao = new baseDAO();
            dao.addParameters('chapterNo', chapterNo, 'number', oracledb.BIND_IN);
            dao.GetDataTable('usp_indicators_getIndictList', function (response) {
                callback(response);
            });
        } catch (ex) {
            console.log(ex);
            callback({error: ex});
        }
    };

    this.getIndicatorResult = function(indicatorObj, callback){
      try{
          var dao = new baseDAO();
          dao.addParameters("lang", indicatorObj.lang, 'string', oracledb.BIND_IN);
          dao.addParameters('chapterNo', indicatorObj.chapterNo, 'number', oracledb.BIND_IN);
          dao.addParameters('variableName', indicatorObj.variableName, 'string', oracledb.BIND_IN);
          dao.addParameters('geoCode', indicatorObj.geoCode, 'number', oracledb.BIND_IN);
          dao.GetDataTable('usp_indicators_getResults', function(response){
             callback(response);
          });
      }  catch(ex){
          console.log(ex);
          callback({error: ex});
      }
    };
}

module.exports = indicatorsDAO;
